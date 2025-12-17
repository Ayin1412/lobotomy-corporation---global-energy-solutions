import React, { useState, useEffect } from 'react';
import { Menu, X, User } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Scroll spy
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Offset for header
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 border-b ${
      isScrolled 
        ? 'bg-lc-black/90 backdrop-blur-md border-lc-red/40 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
        : 'bg-gradient-to-b from-black via-black/80 to-transparent border-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            {/* Square PNG Placeholder */}
            <div className="relative w-12 h-12 flex-shrink-0 bg-transparent border border-transparent group-hover:border-lc-gold/30 transition-colors rounded-sm overflow-hidden">
               <img 
                 src="public\Logo.png" 
                 alt="Lobotomy Corp Logo" 
                 className="w-full h-full object-contain filter drop-shadow-[0_0_5px_rgba(255,255,255,0.2)]"
                 onError={(e) => {
                   // Fallback if image fails
                   e.currentTarget.style.display = 'none';
                   e.currentTarget.nextElementSibling?.classList.remove('hidden');
                 }}
               />
               <div className="hidden absolute inset-0 bg-lc-red flex items-center justify-center text-white font-serif font-bold">L</div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lc-white tracking-widest text-lg leading-none group-hover:text-lc-red transition-colors">LOBOTOMY</span>
              <span className="text-[0.6rem] text-lc-gold tracking-[0.3em] font-mono leading-tight mt-1">CORPORATION</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a 
                  key={item.label} 
                  href={item.href}
                  className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 relative group py-2 ${
                    isActive ? 'text-lc-red' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-[1px] bg-lc-red transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </a>
              );
            })}
            <button className="ml-4 flex items-center gap-2 px-5 py-2 border border-lc-gold/30 text-[10px] font-mono font-bold text-lc-gold hover:bg-lc-gold hover:text-black transition-all hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] tracking-widest bg-black/50 backdrop-blur-sm">
              <User size={12} />
              LOGIN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-lc-white hover:text-lc-red transition-colors">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-lc-black/95 backdrop-blur-xl border-t border-lc-red/20 absolute w-full left-0 h-screen">
          <div className="px-6 py-8 space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block text-xl font-serif font-bold tracking-wider uppercase ${
                   activeSection === item.href.substring(1) 
                    ? 'text-lc-red' 
                    : 'text-neutral-400 hover:text-lc-gold'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-8 pt-8 border-t border-neutral-800">
              <button className="w-full py-4 bg-lc-red/10 border border-lc-red text-lc-red font-mono text-xs hover:bg-lc-red hover:text-white transition-colors tracking-widest uppercase">
                Employee Terminal Access
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};