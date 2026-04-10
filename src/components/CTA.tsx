import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="bg-primary-container py-24 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8"
        >
          Ready to Engineer the Future?
        </motion.h2>
        <p className="text-on-primary-container max-w-2xl mx-auto mb-12 text-lg">
          Consult with our lead engineers today to discuss your next mission-critical project.
        </p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-secondary-container text-on-secondary-container px-12 py-5 font-black uppercase tracking-widest text-base hover:shadow-[inset_0_0_0_2px_#000000] transition-all"
        >
          Start Project Consultation
        </motion.button>
      </div>
      
      {/* Atmospheric Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary/10 blur-[100px] pointer-events-none"></div>
    </section>
  );
}
