import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UilBars, UilMultiply } from '@iconscout/react-unicons';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#features' },
    { name: 'Courses', href: '#courses' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/40 backdrop-blur-xl border-b border-white/5 py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.jpeg" alt="Adams Academy Logo" className="h-10 md:h-12 w-auto object-contain rounded-lg" />
            <span 
              className="text-2xl md:text-3xl tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Adams <span className="text-[#E60000]">Academy</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center text-sm">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact">
              <button className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground transition-transform duration-300 hover:scale-[1.03] cursor-pointer">
                Enroll Now
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <a href="#contact">
                <button className="liquid-glass rounded-full px-4 py-2 text-xs text-foreground transition-transform">
                  Enroll
                </button>
              </a>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground p-2 focus:outline-none"
            >
              {mobileMenuOpen ? <UilMultiply size={28} /> : <UilBars size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-background/60 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-8 right-8 text-muted-foreground hover:text-white"
            >
              <UilMultiply size={32} />
            </button>

            <div className="flex flex-col gap-10 text-center">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-display text-foreground hover:text-[#E60000] transition-colors"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4"
              >
                <button className="liquid-glass px-10 py-4 rounded-full text-foreground font-body text-lg border border-white/10">
                  Enroll Now
                </button>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
