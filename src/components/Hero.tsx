import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-[870px] flex items-center overflow-hidden bg-primary-container">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Technical circuit board" 
          className="w-full h-full object-cover opacity-40 grayscale" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN6aBZl0ifT6iPdOew-kdUpbzttMf8UWo_PCehAZFrQ3jwWn7X2qFpb3YTILYHNGCFXdXIIzsNHFQwwbf4_D3CdC302o8z-nN0RGhfZkRZqdeIGG6pIawu2oG8aUVBnPeEkyVF7HU8ctdUROF6wDwAIChugA2HTeH1wqAlTXSCakubgrqPVt6GFDEFDIWjVY4-oPHchWlq9g-HW5G_SRvI5vjgeFvNMyjbtikfbTb7Ml6D8cDmJQc0Q1-FZQn11AUXVuaNlxXSjDaU"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-[1440px] mx-auto px-8 w-full">
        <div className="max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter mb-6"
          >
            Powering Progress with <span className="text-secondary-container">Precision</span> Engineering
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl text-on-primary-container mb-10 max-w-xl font-medium leading-relaxed"
          >
            From industrial microgrids to smart residential systems, we deliver reliable, innovative, and sustainable electrical solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-secondary-container text-on-secondary-container px-10 py-4 font-black uppercase tracking-widest text-sm hover:shadow-[inset_0_0_0_2px_#000000] transition-all">
              Explore Our Services
            </button>
            <button className="border border-outline-variant/30 text-white px-10 py-4 font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all">
              View Portfolio
            </button>
          </motion.div>
        </div>
      </div>

      {/* Power Rail Accent */}
      <motion.div 
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute left-0 top-0 bottom-0 w-1 bg-secondary-container/30"
      ></motion.div>
    </section>
  );
}
