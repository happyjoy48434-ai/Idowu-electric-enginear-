import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, MicOff, Loader2, Volume2, VolumeX } from 'lucide-react';
import { GoogleGenAI, Modality } from "@google/genai";
import { 
  SAMPLE_RATE, 
  floatTo16BitPCM, 
  arrayBufferToBase64, 
  base64ToFloat32 
} from '../lib/audio-utils';

export default function VoiceAgent() {
  const [isActive, setIsActive] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const audioContextRef = useRef<AudioContext | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const sessionRef = useRef<any>(null);
  const audioQueueRef = useRef<Float32Array[]>([]);
  const isPlayingRef = useRef(false);

  const toggleAgent = async () => {
    if (isActive) {
      stopAgent();
    } else {
      startAgent();
    }
  };

  const startAgent = async () => {
    setIsConnecting(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      // Initialize Audio Context
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({
        sampleRate: SAMPLE_RATE,
      });

      // Get Microphone Stream
      streamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true });
      const source = audioContextRef.current.createMediaStreamSource(streamRef.current);
      
      // Create Processor for Input
      processorRef.current = audioContextRef.current.createScriptProcessor(4096, 1, 1);
      source.connect(processorRef.current);
      processorRef.current.connect(audioContextRef.current.destination);

      // Connect to Gemini Live API
      const sessionPromise = ai.live.connect({
        model: "gemini-3.1-flash-live-preview",
        callbacks: {
          onopen: () => {
            setIsConnecting(false);
            setIsActive(true);
            
            // Start sending audio
            if (processorRef.current) {
              processorRef.current.onaudioprocess = (e) => {
                const inputData = e.inputBuffer.getChannelData(0);
                const pcmBuffer = floatTo16BitPCM(inputData);
                const base64Data = arrayBufferToBase64(pcmBuffer);
                
                sessionRef.current?.sendRealtimeInput({
                  audio: { data: base64Data, mimeType: `audio/pcm;rate=${SAMPLE_RATE}` }
                });
              };
            }
          },
          onmessage: async (message) => {
            // Handle audio output
            const base64Audio = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
            if (base64Audio) {
              const float32Data = base64ToFloat32(base64Audio);
              audioQueueRef.current.push(float32Data);
              if (!isPlayingRef.current) {
                playNextInQueue();
              }
            }

            // Handle interruption
            if (message.serverContent?.interrupted) {
              audioQueueRef.current = [];
              setIsSpeaking(false);
            }

            // Check if model is finished speaking
            if (message.serverContent?.turnComplete) {
              // Optional: handle end of turn
            }
          },
          onerror: (err) => {
            console.error("Live API Error:", err);
            setError("Connection error. Please try again.");
            stopAgent();
          },
          onclose: () => {
            stopAgent();
          }
        },
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: "Zephyr" } },
          },
          systemInstruction: "You are a helpful engineering assistant for VoltArc Engineering. You help visitors understand our electrical engineering services, industrial power solutions, and renewable energy expertise. Be professional, technical yet accessible, and concise.",
        },
      });

      sessionRef.current = await sessionPromise;

    } catch (err) {
      console.error("Failed to start voice agent:", err);
      setError("Could not access microphone or connect to AI.");
      setIsConnecting(false);
    }
  };

  const playNextInQueue = () => {
    if (audioQueueRef.current.length === 0 || !audioContextRef.current) {
      isPlayingRef.current = false;
      setIsSpeaking(false);
      return;
    }

    isPlayingRef.current = true;
    setIsSpeaking(true);
    const data = audioQueueRef.current.shift()!;
    const buffer = audioContextRef.current.createBuffer(1, data.length, SAMPLE_RATE);
    buffer.getChannelData(0).set(data);
    
    const source = audioContextRef.current.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContextRef.current.destination);
    source.onended = () => {
      playNextInQueue();
    };
    source.start();
  };

  const stopAgent = () => {
    setIsActive(false);
    setIsConnecting(false);
    setIsSpeaking(false);
    
    if (sessionRef.current) {
      sessionRef.current.close();
      sessionRef.current = null;
    }

    if (processorRef.current) {
      processorRef.current.disconnect();
      processorRef.current = null;
    }

    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }

    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }

    audioQueueRef.current = [];
    isPlayingRef.current = false;
  };

  useEffect(() => {
    return () => {
      stopAgent();
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-20 right-0 bg-error text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative group">
        {isActive && (
          <motion.div
            layoutId="pulse"
            className="absolute inset-0 bg-secondary-container/30 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleAgent}
          className={`relative w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-colors duration-300 ${
            isActive 
              ? 'bg-secondary-container text-on-secondary-container' 
              : 'bg-primary-container text-white'
          }`}
        >
          {isConnecting ? (
            <Loader2 className="w-8 h-8 animate-spin" />
          ) : isActive ? (
            isSpeaking ? <Volume2 className="w-8 h-8" /> : <Mic className="w-8 h-8" />
          ) : (
            <MicOff className="w-8 h-8" />
          )}
        </motion.button>

        {isActive && (
          <div className="absolute -top-12 right-0 bg-white dark:bg-primary-container px-3 py-1 rounded-full shadow-md border border-outline-variant/30 whitespace-nowrap">
            <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">
              {isSpeaking ? "AI Speaking..." : "Listening..."}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
