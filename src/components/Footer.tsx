import { Terminal, Cpu, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-high w-full py-12 px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[1440px] mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-bold text-on-surface mb-4 uppercase tracking-tighter">VoltArc Engineering</div>
          <p className="text-xs tracking-tight text-on-surface-variant mb-6">
            Defining the next generation of electrical infrastructure through technical precision and simulation-led design.
          </p>
          <div className="flex gap-4">
            <Terminal className="text-secondary-container w-5 h-5" />
            <Cpu className="text-secondary-container w-5 h-5" />
            <Zap className="text-secondary-container w-5 h-5" />
          </div>
        </div>
        
        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-on-surface">Services</h4>
          <ul className="space-y-3">
            {['Electrical Systems', 'Automation', 'Renewables', 'Consulting'].map((item) => (
              <li key={item}>
                <a className="text-xs tracking-tight text-on-surface-variant hover:text-secondary-container transition-all" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-on-surface">Company</h4>
          <ul className="space-y-3">
            {['About Us', 'Portfolio', 'Careers', 'Contact'].map((item) => (
              <li key={item}>
                <a className="text-xs tracking-tight text-on-surface-variant hover:text-secondary-container transition-all" href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-on-surface">Contact</h4>
          <p className="text-xs text-on-surface-variant leading-relaxed">
            123 Engineering Way<br/>
            Tech District, SF 94105<br/>
            <br/>
            contact@voltarc.eng<br/>
            +1 (555) VOLT-ARC
          </p>
        </div>
      </div>
      
      <div className="max-w-[1440px] mx-auto mt-12 pt-8 border-t border-outline-variant/30 flex justify-between items-center">
        <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">© 2026 VoltArc Engineering. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-secondary-container">Privacy</a>
          <a href="#" className="text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-secondary-container">Terms</a>
        </div>
      </div>
    </footer>
  );
}
