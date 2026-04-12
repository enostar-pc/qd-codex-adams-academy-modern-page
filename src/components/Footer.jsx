import React from 'react';
import { UilInstagram, UilMapMarker, UilPhone, UilEnvelope, UilWhatsapp } from '@iconscout/react-unicons';

const Footer = ({ onPrivacyClick }) => {
  return (
    <footer className="section-glass pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <a href="#" className="flex items-center gap-3">
              <img src="/logo.jpeg" alt="Adams Academy Logo" className="h-12 w-auto object-contain rounded-lg" />
              <span className="text-2xl font-display text-white tracking-widest uppercase">
                Adams <span className="text-[#E60000]">Academy</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed font-body font-light max-w-xs">
              Directing academic excellence through personalized mentorship for CBSE and Matriculation students in Grades 6–12.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="text-foreground text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Navigation</h4>
            <ul className="space-y-4 font-body font-normal text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-[#E60000] transition-colors">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-[#E60000] transition-colors">Our Legacy</a></li>
              <li><a href="#courses" className="text-muted-foreground hover:text-[#E60000] transition-colors">Programs</a></li>
              <li><a href="#gallery" className="text-muted-foreground hover:text-[#E60000] transition-colors">Visual Evidence</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-foreground text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Connect</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/adamsacademy2021/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full liquid-glass border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-[#E60000] hover:text-white transition-all">
                <UilInstagram size="20" />
              </a>
              <a href="https://wa.me/918128801025" className="w-10 h-10 rounded-full liquid-glass border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-[#E60000] hover:text-white transition-all">
                <UilWhatsapp size="20" />
              </a>
            </div>
          </div>

          {/* Legacy */}
          <div>
            <h4 className="text-foreground text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Location</h4>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
                Kollenvilai Road, Karungal,<br/>
                Kanyakumari District, TN.<br/>
                <span className="text-foreground mt-4 block">+91 81288 01025</span>
            </p>
          </div>

        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-[10px] uppercase tracking-widest font-body">
            &copy; {new Date().getFullYear()} QDCODEX
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-body">
            <button onClick={onPrivacyClick} className="text-muted-foreground hover:text-white transition-colors cursor-pointer">Privacy</button>
            <button onClick={onPrivacyClick} className="text-muted-foreground hover:text-white transition-colors cursor-pointer">Academic Terms</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
