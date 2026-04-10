import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'Global Data Hub',
    category: 'Power Infrastructure',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrn-fuCDYCdi79GS7Ru2c-_UTKasdQaIB4gm3dLOVDypK4asLr6890hYN7CsSdy-ud2mH1Nj5T0JuPGGinDBz37F9pD_goH3vNCtFpfT11KQJktliX6wsCglshqvTw6-SuFGqN_rBkA5tR4PxNIjGATvjtgpX5Y11BqTeFYoByHecARkk2OU4HuCRxfbHAi1gmzbEyrAGrMutkfIyJxwEkZdulfPILIrOjmYF2QJFmM0RfFezDdpe_kgr9AzsuPs_EN4mmn5jDZefu'
  },
  {
    id: '02',
    title: 'Solar Microgrid',
    category: 'Renewable Integration',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYPeSt5diT5C-JQrxlba-1ZBCGedYqKkMjU0FCFIyNW990pCAzbJQbAFRvr0oXP6n0yovlE6-fX3Jmq8tZMOjZte7tOWhY-xDRCl9sL56GgGdW_BXptwtP_uv6FUKLdIcJJ-6JRCWrewZtwKar8ajbFY3qpHIX5JOMWbiF2yiEYLl69Yr4nP04wP8CSr6aopK7wH97VvYUjdhe4_tLf23iqzTiVe3SZINKvfg7cWfVMUkOWQJEEigXkHxTbMiMG2GLMhR8ZUj28FN5'
  },
  {
    id: '03',
    title: 'Smart Tower',
    category: 'Building Automation',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD25YLw3dHwLZ4XhAOjuerk_IoteHv_hEyN_cDvxMGW9dI54CadI6g7Pj8sFHjkdjzdTEz7-J0X-YkIle70JDtEtPnxN3o0-0sJt8Rp5ukYTT-kLx3-iF8MuxjCq73LJ78XUKrNLq-GwM88PVM__k9kFDhj35XSVZvtDwrEq0DQsLuh5Xs4N2LuU0yzjQukbBBuOPShqrwpgJnKYU7W7wGJemjQdW8Ag31vWPa9rJamVQeCMC4jUWw5QEnZbrzTgBVSTgKVSI9-WkbW'
  }
];

export default function Projects() {
  return (
    <section id="portfolio" className="py-24 bg-background overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl font-black tracking-tighter text-on-surface uppercase">Recent Projects</h2>
          <a className="text-secondary font-bold uppercase tracking-widest text-xs hover:underline flex items-center gap-2" href="#">
            Full Archive <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-surface-container-low mb-6 aspect-[4/5]">
                <motion.img 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  src={project.image}
                  whileHover={{ scale: 1.05 }}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary-container/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tighter text-on-surface mb-1">{project.title}</h3>
                  <p className="text-sm font-medium text-on-surface-variant uppercase tracking-widest">{project.category}</p>
                </div>
                <span className="text-secondary-container font-black text-xl">/{project.id}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
