import React, { useState, useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import AboutPage from './AboutPage';
import CoursesPage from './CoursesPage';
import WhyUsPage from './WhyUsPage';
import GalleryPage from './GalleryPage';
import ContactPage from './ContactPage';
import PrivacyPage from './PrivacyPage';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [view, setView] = useState('home');

  // Scroll to top when switching views
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  if (view === 'privacy') {
    return <PrivacyPage onBack={() => setView('home')} />;
  }

  return (
    <div className="relative min-h-screen w-full font-body bg-background text-foreground selection:bg-white/20">
      {/* Video Background - Changed to fixed for cinematic scroll */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />
      {/* Dark Overlay for Video to ensure readability */}
      <div className="fixed inset-0 bg-black/20 z-[1] pointer-events-none" />

      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center">
        <main className="flex-grow flex flex-col items-center justify-center text-center px-6 pt-32 pb-40">
          <h1 
            className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tight max-w-7xl font-normal text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Shape Your <em className="not-italic text-muted-foreground">Future</em> with
            <br className="sm:hidden" />
            <em className="not-italic text-muted-foreground"> Adams Academy.</em>
          </h1>
          
          <p className="animate-fade-rise-delay text-muted-foreground text-base sm:text-lg max-w-2xl mt-8 leading-relaxed font-body">
            Expert Coaching for CBSE & Matriculation Students (Grade 6–12). 
            Unlock your academic potential with personalized learning and top-tier mentorship.
          </p>
          
          <a href="#contact">
            <button className="animate-fade-rise-delay-2 liquid-glass rounded-full px-10 md:px-14 py-4 md:py-5 text-sm md:text-base text-foreground mt-12 transition-transform duration-300 hover:scale-[1.03] cursor-pointer font-body">
              Enroll Now
            </button>
          </a>
        </main>
      </div>

      {/* About Section */}
      <AboutPage />

      {/* Courses Section */}
      <CoursesPage />

      {/* Why Us Section */}
      <WhyUsPage />

      {/* Gallery Section */}
      <GalleryPage />

      {/* Contact Section */}
      <ContactPage />

      {/* Footer */}
      <Footer onPrivacyClick={() => setView('privacy')} />

      {/* Floatables */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
