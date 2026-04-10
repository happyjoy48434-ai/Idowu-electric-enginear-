import { motion } from 'motion/react';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md">
      <div className="flex justify-between items-center px-8 h-20 max-w-[1440px] mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter text-on-surface"
        >
          VoltArc Engineering
        </motion.div>
        
        <nav className="hidden md:flex gap-8 items-center">
          {['Home', 'Services', 'Portfolio', 'About'].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`font-headline uppercase tracking-wider text-sm font-bold transition-colors duration-300 ${
                item === 'Home' 
                  ? 'text-secondary-container border-b-2 border-secondary-container pb-1' 
                  : 'text-on-surface hover:text-secondary-container'
              }`}
            >
              {item}
            </motion.a>
          ))}
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 bg-secondary-container text-on-secondary-container px-6 py-2 font-bold uppercase tracking-widest text-xs hover:shadow-[inset_0_0_0_2px_#000000] transition-all"
          >
            Request Quote
          </motion.button>
        </nav>

        <div className="md:hidden">
          <Menu className="text-on-surface" />
        </div>

        <div className="bg-surface-container h-[1px] w-full absolute bottom-0 left-0"></div>
      </div>
    </header>
  );
}
