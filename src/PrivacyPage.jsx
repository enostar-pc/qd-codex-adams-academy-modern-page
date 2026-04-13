import React from 'react';
import { motion } from 'framer-motion';
import { 
  UilShieldCheck, 
  UilUserCircle, 
  UilDatabase, 
  UilSetting, 
  UilServer, 
  UilShare, 
  UilEye, 
  UilUpload, 
  UilEnvelopeInfo,
  UilArrowLeft
} from '@iconscout/react-unicons';

const PrivacyPage = ({ onBack }) => {
  const sections = [
    {
      title: "Information We Collect",
      icon: UilUserCircle,
      content: "We collect information you provide directly to us, such as your name, email address, phone number, and any other information you choose to provide when contacting us for web development services."
    },
    {
      title: "How We Use Information",
      icon: UilSetting,
      content: "We use the information we collect to provide, maintain, and improve our services, communicate with you, and personalize your experience with QDCODEX."
    },
    {
      title: "Cookies Policy",
      icon: UilEye,
      content: "We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent."
    },
    {
      title: "Data Protection",
      icon: UilShieldCheck,
      content: "The security of your data is important to us. We implement robust technical and organizational measures to protect your personal data against unauthorized access, alteration, or destruction."
    },
    {
      title: "Third-Party Services",
      icon: UilServer,
      content: "We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, or perform service-related services (e.g., hosting providers, analytics)."
    },
    {
      title: "Data Sharing",
      icon: UilShare,
      content: "QDCODEX does not sell your personal data. We only share information with third parties when necessary to provide our services, comply with the law, or protect our rights."
    },
    {
      title: "User Rights",
      icon: UilDatabase,
      content: "You have the right to access, update, or delete the information we have on you. Whenever made possible, you can update your personal data directly within your account settings section."
    },
    {
      title: "Policy Updates",
      icon: UilUpload,
      content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last Updated' date."
    },
    {
      title: "Contact Information",
      icon: UilEnvelopeInfo,
      content: "If you have any questions about this Privacy Policy, please contact us at legal@qdcodex.com or visit our office at Karungal, Kanyakumari."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Dynamic Background (Matches main app) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />
      <div className="fixed inset-0 bg-black/40 z-[1] pointer-events-none" />

      {/* Navigation Header */}
      <nav className="relative z-50 py-4 px-6 md:px-12 border-b border-white/5 bg-background/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors group cursor-pointer"
          >
            <UilArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm uppercase tracking-widest font-medium">Back to Home</span>
          </button>
          <div className="h-16 md:h-20 w-auto">
            <img src="/qdlogo1.png" alt="QDCODEX Logo" className="h-full w-auto object-contain" />
          </div>
        </div>
      </nav>

      <main className="relative z-10 py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <header className="mb-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 
                className="text-5xl md:text-8xl leading-tight font-normal mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Privacy <em className="not-italic text-muted-foreground">Policy.</em>
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Your privacy is our priority. This document outlines how QDCODEX handles data for our web development clients and visitors.
              </p>
              <div className="mt-8 text-[10px] uppercase tracking-[0.3em] text-[#E60000] font-bold">
                Last Updated: April 12, 2026
              </div>
            </motion.div>
          </header>

          {/* Policy Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="liquid-glass p-8 md:p-10 rounded-[2.5rem] border border-white/5 group hover:border-white/10 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-8 group-hover:bg-[#E60000]/10 group-hover:border-[#E60000]/20 transition-all">
                  <section.icon className="text-[#E60000]" size="28" />
                </div>
                <h2 
                  className="text-2xl md:text-3xl font-normal mb-4 text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {section.title}
                </h2>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-body">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Acknowledgement Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 text-center"
          >
            <p className="text-muted-foreground font-body italic text-lg leading-relaxed max-w-3xl mx-auto">
              "Building the future of the web requires trust. We are committed to maintaining that trust through transparent and secure data practices."
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
               <div className="w-12 h-[1px] bg-[#E60000]" />
               <span className="text-[10px] uppercase tracking-[0.2em] font-medium">The QDCODEX Team</span>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-6 md:px-12 border-t border-white/5 bg-background/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
             <div className="h-8 md:h-10 w-auto">
                <img src="/qdlogo1.png" alt="QDCODEX Logo" className="h-full w-auto object-contain" />
             </div>
             <div className="w-[1px] h-6 bg-white/10" />
             <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
               &copy; 2026 QDCODEX
             </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <button onClick={onBack} className="text-muted-foreground hover:text-white text-[10px] uppercase tracking-widest transition-colors cursor-pointer">Home</button>
            <button onClick={onBack} className="text-muted-foreground hover:text-white text-[10px] uppercase tracking-widest transition-colors cursor-pointer">About</button>
            <button onClick={onBack} className="text-muted-foreground hover:text-white text-[10px] uppercase tracking-widest transition-colors cursor-pointer">Contact</button>
            <button className="text-white text-[10px] uppercase tracking-widest pointer-events-none opacity-50">Privacy Policy</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPage;
