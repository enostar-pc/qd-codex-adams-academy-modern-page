import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { UilTrophy, UilFocus, UilBookOpen, UilMonitor, UilUsersAlt, UilVolumeMute, UilVolume } from '@iconscout/react-unicons';

const reviewHighlights = [
  { text: "Highly specialised", count: 9 },
  { text: "Personal attention", count: 7 },
  { text: "Quality courses", count: 6 },
  { text: "Expert faculty", count: 5 },
  { text: "Multiple facilities", count: 4 },
];

const reviews = [
  {
    initial: "A",
    name: "Akhi",
    date: "16 May 2025",
    text: "Quality courses! The instructors are very professional and provide excellent guidance. Highly recommended for anyone looking to upskill in Karungal."
  },
  {
    initial: "S",
    name: "Suresh Kumar",
    date: "12 April 2025",
    text: "ADAMS ACADEMY provided me with the personal attention I needed to clear my professional exams. The faculty is truly expert in their fields."
  },
  {
    initial: "P",
    name: "Priya D.",
    date: "05 March 2025",
    text: "Excellent facilities and a great learning environment. The specialized training here is top-notch and sets a high bar for education in the region."
  }
];

const advantages = [
  {
    title: "High Success Rate",
    description: "Consistent 100% pass percentage across board examinations.",
    icon: UilTrophy,
  },
  {
    title: "Individual Attention",
    description: "Small batch sizes ensuring personalized doubt clearing sessions.",
    icon: UilFocus,
  },
  {
    title: "Mock Test Series",
    description: "Extensive preparatory modules and weekly test assessments.",
    icon: UilBookOpen,
  },
  {
    title: "Smart Learning",
    description: "Modern classrooms equipped with digital learning tools.",
    icon: UilMonitor,
  },
  {
    title: "Parent Interaction",
    description: "Regular feedback loops between mentors and guardians.",
    icon: UilUsersAlt,
  }
];

const WhyUsPage = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="why-us" className="section-glass py-20 md:py-32 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-20 items-center">
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 w-full relative"
          >
            <div className="relative group mb-6 md:mb-8">
              <div className="absolute -inset-2 bg-[#E60000]/5 blur-2xl rounded-[3rem] opacity-30 group-hover:opacity-50 transition-opacity" />
              
              <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl bg-black/20">
                <motion.video 
                  ref={videoRef}
                  src="/demo.mp4" 
                  autoPlay 
                  loop 
                  muted={isMuted}
                  playsInline
                  initial={{ filter: "grayscale(1) contrast(1.1)" }}
                  whileInView={{ filter: "grayscale(0) contrast(1)" }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="w-full h-[300px] md:h-[500px] object-cover hover:scale-[1.02] transition-transform duration-700"
                />
                
                {/* Mute/Unmute Toggle */}
                <button 
                  onClick={toggleMute}
                  className="absolute bottom-6 left-6 z-20 bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-white hover:bg-black/60 transition-all active:scale-95"
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <UilVolumeMute size="20" /> : <UilVolume size="20" />}
                </button>
              </div>
            </div>

            <div className="bg-background/40 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-white/10 shadow-xl flex items-center justify-between">
              <div>
                <div className="text-muted-foreground font-body text-[10px] uppercase tracking-[0.2em] mb-1">Our Track Record</div>
                <div className="text-3xl md:text-5xl font-display text-foreground leading-none">100% <span className="text-xl md:text-2xl text-muted-foreground font-body ml-2">Academic Success</span></div>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#E60000]/10 flex items-center justify-center border border-[#E60000]/20">
                <UilTrophy className="text-[#E60000]" size="24" />
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="lg:w-1/2 space-y-12">
            <div>
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[#E60000] font-body font-bold tracking-[0.2em] uppercase text-xs mb-4"
              >
                The Advantage
              </motion.h2>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-6xl leading-[1.1] tracking-tight font-normal text-foreground mb-6 md:mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Beyond the <em className="not-italic text-muted-foreground">Traditional</em> <br/> 
                Learning Paradigm.
              </motion.h3>
            </div>

            <div className="space-y-4 md:space-y-6">
              {advantages.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group flex gap-4 md:gap-6 p-4 md:p-6 rounded-2xl hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-[#E60000]/10 group-hover:border-[#E60000]/20 transition-all">
                    <item.icon className="text-[#E60000]" size="22" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-body font-medium text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed max-w-md">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Testimonials Section */}
        <div className="mt-32 pt-20 border-t border-white/5">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#E60000] font-body font-bold tracking-[0.2em] uppercase text-xs mb-4"
            >
              Testimonials
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl leading-[1.1] tracking-tight font-normal text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What Our Students Say
            </motion.h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Review Highlights */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 bg-white/[0.02] border border-white/5 rounded-3xl p-8 h-fit"
            >
              <h4 className="text-xl font-display text-foreground mb-6">Review Highlights</h4>
              <div className="flex flex-wrap gap-3">
                {reviewHighlights.map((highlight, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-muted-foreground flex items-center gap-2 hover:bg-white/10 transition-colors">
                    <span>{highlight.text}</span>
                    <span className="text-[#E60000] text-xs">({highlight.count})</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Reviews */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((review, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] transition-colors"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#E60000]/20 border border-[#E60000]/30 flex items-center justify-center text-[#E60000] font-display text-xl">
                      {review.initial}
                    </div>
                    <div>
                      <div className="text-foreground font-body font-medium">{review.name}</div>
                      <div className="text-muted-foreground text-xs">{review.date}</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    "{review.text}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsPage;