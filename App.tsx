import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { EnergyChart } from './components/EnergyChart';
import { AngelaChat } from './components/AngelaChat';
import { DEPARTMENTS, NEWS_ITEMS, ABNORMALITIES } from './constants';
import * as Icons from 'lucide-react';
import { ArrowRight, Activity, ShieldAlert, AlertTriangle, Skull, Zap, Globe, Briefcase } from 'lucide-react';

const App: React.FC = () => {
  const [activeNews, setActiveNews] = useState(0);

  return (
    <div className="min-h-screen bg-lc-black text-lc-white selection:bg-lc-red selection:text-white overflow-x-hidden font-sans">
      <Navbar />
      <AngelaChat />

      {/* Hero Section (#overview) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black" id="overview">
        {/* Abstract Background Layers */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#2a0505_0%,_#000000_80%)]"></div>
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
           <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-16">
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-1.5 border border-lc-gold/30 bg-black/40 backdrop-blur-md text-lc-gold text-[10px] font-mono tracking-[0.4em] uppercase animate-pulse rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-lc-gold shadow-[0_0_10px_#d4af37]"></span>
            System Operational
          </div>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif font-black text-white tracking-tighter mb-6 leading-[0.9]">
            FACE THE <span className="text-lc-red relative inline-block">
              FEAR
              <span className="absolute inset-0 text-red-600 blur-lg opacity-50 animate-pulse">FEAR</span>
            </span><br />
            BUILD THE <span className="text-neutral-500">FUTURE</span>
          </h1>
          
          <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
            Lobotomy Corporation is the global leader in sustainable <span className="text-lc-gold font-serif">Enkephalin</span> production. 
            We turn nightmares into the energy that powers your dreams.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <a href="#departments" className="group relative px-10 py-4 bg-lc-red text-white font-bold tracking-widest uppercase text-xs overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(207,0,0,0.4)]">
              <span className="absolute inset-0 w-full h-full bg-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              <span className="relative z-10 flex items-center gap-2">Explore Facilities <ArrowRight size={14} /></span>
            </a>
            <a href="#careers" className="px-10 py-4 border border-neutral-700 text-neutral-300 hover:border-lc-gold hover:text-lc-gold transition-all font-mono uppercase tracking-widest text-xs bg-transparent hover:bg-lc-gold/5">
              Apply Now
            </a>
          </div>
        </div>

        {/* Ticker */}
        <div className="absolute bottom-0 w-full bg-black/90 border-t border-lc-red/20 py-2 overflow-hidden whitespace-nowrap z-20 backdrop-blur-md">
          <div className="animate-[marquee_40s_linear_infinite] inline-block font-mono text-[10px] text-lc-red/70 tracking-[0.2em]">
             +++ ALERT LEVEL: 1 +++ NO BREACHES DETECTED +++ SEPHIRAH MALKUTH REQUESTS AUDIENCE +++ ENKEPHALIN STOCKS: OPTIMAL +++ DO NOT READ THE NOTES +++ QLIPHOTH DETERRENCE ACTIVE +++ 
             +++ ALERT LEVEL: 1 +++ NO BREACHES DETECTED +++ SEPHIRAH MALKUTH REQUESTS AUDIENCE +++ ENKEPHALIN STOCKS: OPTIMAL +++ DO NOT READ THE NOTES +++ QLIPHOTH DETERRENCE ACTIVE +++ 
          </div>
        </div>
      </section>

      {/* Abnormalities (#containment) */}
      <section className="py-32 bg-lc-dark border-b border-neutral-900 relative overflow-hidden" id="containment">
        <div className="absolute inset-0 bg-noise opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
            <div>
              <div className="flex items-center gap-2 text-lc-red font-mono text-[10px] tracking-[0.3em] uppercase mb-3">
                <AlertTriangle size={12} />
                Containment Units
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">Featured Abnormalities</h2>
            </div>
            <div className="text-right hidden md:block">
              <div className="text-4xl font-mono text-lc-gold font-bold">04</div>
              <div className="text-[10px] text-neutral-600 uppercase tracking-widest mt-1">Entities Displayed</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABNORMALITIES.map((abno) => {
              const riskColors: Record<string, string> = {
                'ZAYIN': 'text-green-500 border-green-500/50 bg-green-500/10',
                'TETH': 'text-blue-400 border-blue-400/50 bg-blue-400/10',
                'HE': 'text-yellow-400 border-yellow-400/50 bg-yellow-400/10',
                'WAW': 'text-purple-500 border-purple-500/50 bg-purple-500/10',
                'ALEPH': 'text-lc-red border-lc-red/50 bg-lc-red/10'
              };
              const style = riskColors[abno.riskLevel];

              return (
                <div key={abno.id} className="group relative bg-black border border-neutral-800 hover:border-neutral-600 transition-all duration-300 overflow-hidden flex flex-col h-full">
                  <div className="aspect-square w-full bg-neutral-900/50 relative flex items-center justify-center p-6 border-b border-neutral-900">
                    <div className={`absolute top-3 right-3 px-2 py-0.5 border ${style} text-[9px] font-bold font-mono rounded tracking-wider backdrop-blur-md`}>
                      {abno.riskLevel}
                    </div>
                    <img 
                      src={abno.imageUrl} 
                      alt={abno.name}
                      className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:scale-110 transition-transform duration-500 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x300/000000/333333?text=REDACTED';
                      }}
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="font-mono text-[10px] text-neutral-600 mb-2">{abno.code}</div>
                    <h3 className="font-serif font-bold text-lg mb-3 leading-tight group-hover:text-lc-gold transition-colors">{abno.name}</h3>
                    <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3">
                      {abno.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Departments (#departments) */}
      <section className="py-32 bg-black relative" id="departments">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">Department Heads</h2>
            <div className="w-16 h-1 bg-lc-gold mx-auto mb-6"></div>
            <p className="text-neutral-500 text-sm tracking-wide max-w-2xl mx-auto">
              The Sephirot. Artificial intelligences designed to manage the facility's operations and maintain psychological stability among employees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DEPARTMENTS.map((dept) => (
              <div key={dept.id} className="group relative bg-neutral-900/20 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 flex flex-col overflow-hidden">
                {/* Colored Line */}
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${dept.color.replace('border-', 'from-').replace('-500', '-500').replace('-400', '-400').replace('-600', '-600').replace('-700', '-700')} to-transparent opacity-70`}></div>
                
                <div className="relative h-72 overflow-hidden bg-black">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-90"></div>
                  <img 
                    src={dept.imageUrl} 
                    alt={dept.sephirah}
                    className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                    onError={(e) => {
                       (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x300/1a1a1a/333333?text=SIGNAL+LOST';
                    }}
                  />
                  <div className="absolute bottom-5 left-6 z-20">
                    <span className={`font-mono text-[10px] uppercase tracking-[0.2em] ${dept.textColor} mb-1 block`}>Sephirah</span>
                    <h3 className="text-3xl font-serif font-bold text-white tracking-wide">{dept.sephirah}</h3>
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col bg-neutral-950">
                   <div className="flex items-center justify-between mb-4 pb-4 border-b border-neutral-900">
                     <h4 className="text-base font-bold text-neutral-300 group-hover:text-white transition-colors uppercase tracking-wider">{dept.name}</h4>
                     {React.createElement((Icons as any)[dept.icon] || Activity, { size: 16, className: "text-neutral-600 group-hover:text-lc-gold transition-colors" })}
                   </div>
                   <p className="text-sm text-neutral-500 leading-relaxed italic">
                     "{dept.description}"
                   </p>
                   <div className="mt-auto pt-6 flex justify-between items-center">
                     <span className="text-[10px] font-mono text-neutral-700">ID: {dept.id.toUpperCase()}</span>
                     <button className="text-[10px] font-bold text-neutral-400 hover:text-white transition-colors flex items-center gap-1 uppercase tracking-widest">
                       Access Logs <ArrowRight size={10} />
                     </button>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech / Energy Chart (#technology) */}
      <section className="py-32 bg-lc-dark border-y border-neutral-900" id="technology">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <div className="order-2 lg:order-1 h-[450px] bg-black border border-lc-gold/20 p-8 relative shadow-[0_0_50px_rgba(0,0,0,0.8)]">
               <div className="absolute top-0 left-0 px-4 py-2 bg-lc-gold/10 text-lc-gold text-[10px] font-mono border-b border-r border-lc-gold/20 tracking-widest uppercase">
                 Real-time Qliphoth Monitoring
               </div>
               <div className="absolute top-4 right-4 flex gap-2">
                 <div className="w-1.5 h-1.5 bg-lc-red rounded-full animate-pulse"></div>
                 <span className="text-[10px] text-lc-red font-mono">LIVE FEED</span>
               </div>
               <div className="mt-8 h-full w-full">
                 <EnergyChart />
               </div>
               {/* Decorative grid overlay */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none"></div>
             </div>

             <div className="order-1 lg:order-2">
               <h2 className="text-4xl font-serif font-bold mb-8 text-white">Cogito Extraction Technology</h2>
               <p className="text-neutral-400 mb-10 leading-loose text-justify font-light text-lg">
                 Our proprietary technology allows us to physically manifest the <span className="text-white italic">"Concept of Fear"</span> and extract pure Enkephalin. 
                 By managing the <span className="text-lc-red font-bold">Qliphoth Counter</span>, we maximize energy output while maintaining containment integrity.
               </p>
               <div className="space-y-6">
                 <div className="flex items-start gap-6 group">
                   <div className="p-4 bg-lc-red/5 border border-lc-red/20 rounded-sm text-lc-red group-hover:bg-lc-red group-hover:text-white transition-all"><Zap size={24} /></div>
                   <div>
                     <h4 className="font-bold text-white text-lg mb-1">High Efficiency</h4>
                     <p className="text-sm text-neutral-500">Output exceeds traditional nuclear fusion by 400%.</p>
                   </div>
                 </div>
                 <div className="flex items-start gap-6 group">
                   <div className="p-4 bg-lc-gold/5 border border-lc-gold/20 rounded-sm text-lc-gold group-hover:bg-lc-gold group-hover:text-black transition-all"><Skull size={24} /></div>
                   <div>
                     <h4 className="font-bold text-white text-lg mb-1">Risk Management</h4>
                     <p className="text-sm text-neutral-500">Automated Rabbit Team deployment in case of breach.</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Internal Memos */}
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-12 flex items-end justify-between border-b-4 border-black pb-6">
             <h2 className="text-5xl font-serif font-black tracking-tighter">INTERNAL MEMOS</h2>
             <span className="font-mono font-bold text-lc-red text-xs border border-lc-red px-2 py-1 uppercase tracking-widest animate-pulse">Level 3 Clearance Only</span>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l border-black">
             {/* List */}
             <div className="lg:col-span-1 border-r border-b border-black bg-neutral-100">
               {NEWS_ITEMS.map((item, idx) => (
                 <div 
                   key={item.id}
                   onClick={() => setActiveNews(idx)}
                   className={`p-8 cursor-pointer border-b border-black transition-all hover:bg-neutral-200 group ${
                     activeNews === idx ? 'bg-lc-red text-white hover:bg-lc-red' : ''
                   }`}
                 >
                   <div className={`text-[10px] font-mono mb-3 uppercase tracking-wider ${activeNews === idx ? 'text-white/70' : 'text-neutral-500'}`}>
                     {item.date} <span className="mx-2">//</span> {item.category}
                   </div>
                   <h3 className="font-serif font-bold text-xl leading-none group-hover:translate-x-1 transition-transform">{item.title}</h3>
                 </div>
               ))}
             </div>

             {/* Content */}
             <div className="lg:col-span-2 border-r border-b border-black p-16 bg-neutral-50 flex flex-col justify-center relative overflow-hidden min-h-[500px]">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                   <Globe size={300} />
                </div>
                <div className="relative z-10">
                   <div className="inline-block bg-black text-white px-3 py-1 text-[10px] font-bold mb-8 tracking-widest uppercase">
                     {NEWS_ITEMS[activeNews].category}
                   </div>
                   <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">{NEWS_ITEMS[activeNews].title}</h3>
                   <p className="text-xl text-neutral-600 leading-relaxed font-light font-sans">
                     {NEWS_ITEMS[activeNews].summary}
                   </p>
                   <div className="mt-12 pt-8 border-t border-neutral-300 flex gap-4">
                      <button className="px-8 py-3 bg-black text-white font-bold hover:bg-lc-red transition-colors text-xs tracking-widest uppercase">
                        Acknowledge
                      </button>
                      <button className="px-8 py-3 border border-black text-black font-bold hover:bg-black hover:text-white transition-colors text-xs tracking-widest uppercase">
                        Archive
                      </button>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Recruitment / Careers (#careers) */}
      <section className="py-32 bg-lc-black text-center relative overflow-hidden" id="careers">
         <div className="absolute inset-0 bg-lc-red/5">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-10"></div>
         </div>
         
         <div className="relative z-10 max-w-4xl mx-auto px-4">
            <Briefcase className="mx-auto text-lc-gold mb-8" size={48} />
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-white tracking-tight">
               We Are Hiring
            </h2>
            <div className="w-24 h-1 bg-lc-red mx-auto mb-10"></div>
            <p className="text-xl text-neutral-300 mb-12 font-light leading-relaxed">
               Lobotomy Corporation offers competitive benefits, comprehensive life insurance, and the opportunity to serve humanity's energy needs. 
               <br/><span className="text-neutral-500 text-sm mt-4 block">(Previous psychological trauma history required for specific positions)</span>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-left">
               <div className="p-6 border border-neutral-800 bg-black/50 hover:border-lc-gold transition-colors group">
                  <h3 className="text-white font-bold mb-2 group-hover:text-lc-gold">Agent</h3>
                  <p className="text-neutral-500 text-sm mb-4"> containment management and entity suppression.</p>
                  <span className="text-xs text-lc-red font-mono">High Risk / High Reward</span>
               </div>
               <div className="p-6 border border-neutral-800 bg-black/50 hover:border-lc-gold transition-colors group">
                  <h3 className="text-white font-bold mb-2 group-hover:text-lc-gold">Clerk</h3>
                  <p className="text-neutral-500 text-sm mb-4">Administrative support and basic logistics.</p>
                  <span className="text-xs text-neutral-400 font-mono">Standard Benefits</span>
               </div>
               <div className="p-6 border border-neutral-800 bg-black/50 hover:border-lc-gold transition-colors group">
                  <h3 className="text-white font-bold mb-2 group-hover:text-lc-gold">Researcher</h3>
                  <p className="text-neutral-500 text-sm mb-4">E.G.O equipment development and observation.</p>
                  <span className="text-xs text-neutral-400 font-mono">PhD Required</span>
               </div>
            </div>

            <button className="px-12 py-5 bg-lc-gold text-lc-black font-bold text-sm tracking-[0.2em] uppercase hover:bg-white transition-colors shadow-[0_0_30px_rgba(212,175,55,0.2)]">
               Submit Application
            </button>
         </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-20 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-14 h-14 border border-neutral-700 bg-neutral-900 flex items-center justify-center p-2">
               <img src="public\Logo.png" alt="LC" className="w-full h-full object-contain opacity-50 grayscale" />
            </div>
          </div>
          <p className="font-serif text-3xl font-bold mb-4 tracking-wider">Face the Fear, Build the Future</p>
          <p className="text-neutral-600 text-xs max-w-lg mx-auto mb-10 font-mono leading-relaxed">
            LOBOTOMY CORPORATION IS A REGISTERED TRADEMARK OF THE WINGS. 
            UNAUTHORIZED ENTRY INTO CONTAINMENT ZONES IS GROUNDS FOR IMMEDIATE TERMINATION AND/OR MEMETIC ERASURE.
          </p>
          <div className="flex justify-center gap-8 text-[10px] font-bold text-neutral-500 tracking-[0.2em] uppercase">
            <a href="#" className="hover:text-lc-red transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-lc-red transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-lc-red transition-colors">Employee Welfare</a>
          </div>
          <div className="mt-12 text-[10px] text-neutral-800 font-mono">
             © 2025 Global Energy Solutions. All Rights Reserved By Project Moon.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;