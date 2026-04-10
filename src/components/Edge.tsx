import { motion } from 'motion/react';
import { Network, ShieldAlert } from 'lucide-react';

export default function Edge() {
  return (
    <section className="py-24 bg-surface-container">
      <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">The VoltArc Edge</span>
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-on-surface leading-none mb-12 uppercase"
          >
            Precision Built <br/>Into Every <span className="text-secondary">Circuit</span>.
          </motion.h2>
          
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-8"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-primary-container flex items-center justify-center">
                <Network className="text-secondary-container w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-on-surface mb-3 uppercase tracking-tight">Digital Twin Simulation</h3>
                <p className="text-on-surface-variant leading-relaxed max-w-xl">
                  We don't just design; we simulate. Our Digital Twin approach allows us to stress-test your electrical architecture in a virtual environment before a single wire is laid, ensuring absolute reliability.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-8"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-primary-container flex items-center justify-center">
                <ShieldAlert className="text-secondary-container w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-on-surface mb-3 uppercase tracking-tight">Safety First Mission</h3>
                <p className="text-on-surface-variant leading-relaxed max-w-xl">
                  In high-voltage engineering, there is no margin for error. Our safety protocols exceed international standards, prioritizing human life and asset protection above all else.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square bg-surface-container-highest p-1 flex items-center justify-center relative"
          >
            <img 
              alt="Electrical Engineering Substation" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ5TgpeyS7XViFzQVFVxqt25Wn_TsV7nw5xrysf7YNR0Ps5raPLnHWkLlkEDzmjBTpAl_tC_OHAV43ftQSZAIXSwpTKLWzNiRt35PccgGVWk1DS8rr7ctdi7qaEzOqDex6WDA9JrDoo07wnkbZzzBHgfJLMV0R_XLDZzssEVgJByetaFQ364NTpODxGjWI4eGD1hNtAl-YE8m5QBjKcMc-IkOrYXKiWhN4kbYnqdiqlkF8Xs6GbB_wMH3jb4fUCnQWjG0HcMIJcxs0"
              referrerPolicy="no-referrer"
            />
            {/* Decorative Frame Overlay */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-secondary-container"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary-container"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
