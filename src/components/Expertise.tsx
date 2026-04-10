import { motion } from 'motion/react';
import { Factory, Sun, PencilRuler, ShieldCheck } from 'lucide-react';

const expertiseItems = [
  {
    id: '01',
    icon: Factory,
    title: 'Industrial Power',
    description: 'High-voltage infrastructure and heavy industrial power distribution systems engineered for maximum uptime.'
  },
  {
    id: '02',
    icon: Sun,
    title: 'Renewable Energy',
    description: 'Integration of solar, wind, and storage solutions into legacy and greenfield electrical networks.'
  },
  {
    id: '03',
    icon: PencilRuler,
    title: 'Engineering Design',
    description: 'Precision CAD and BIM modeling for complex electrical architectures and smart building systems.'
  },
  {
    id: '04',
    icon: ShieldCheck,
    title: 'Safety Inspections',
    description: 'Comprehensive compliance audits, thermal imaging, and preventative maintenance for mission-critical sites.'
  }
];

export default function Expertise() {
  return (
    <section id="services" className="py-24 bg-surface">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-secondary font-bold tracking-[0.2em] uppercase text-xs mb-2 block">Capabilities</span>
            <h2 className="text-5xl font-black tracking-tighter text-on-surface uppercase">Our Expertise</h2>
          </div>
          <div className="w-24 h-1 bg-secondary-container"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface-container-low p-10 relative group border-r border-background hover:bg-surface-container transition-colors"
            >
              <div className="absolute right-4 top-4 text-outline-variant opacity-20 font-black text-6xl">
                {item.id}
              </div>
              <item.icon className="w-12 h-12 text-secondary mb-8" />
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight text-on-surface">
                {item.title}
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary-container scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
