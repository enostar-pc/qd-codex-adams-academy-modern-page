import React from 'react';
import { motion } from 'framer-motion';
import { UilCheckCircle } from '@iconscout/react-unicons';

const AboutPage = () => {
  const stats = [
    { label: "Students Mentored", value: "500+" },
    { label: "Pass Percentage", value: "100%" },
    { label: "Years of Excellence", value: "3+" },
    { label: "Expert Faculty", value: "12+" }
  ];

  const highlights = [
    "Consistently High Success Rate",
    "Individual Attention & Doubt Clearing",
    "Extensive Mock Tests & Exam Prep",
    "Modern Smart Classrooms",
    "Regular Parent-Teacher Interaction"
  ];

  return (
    <section id="features" className="section-glass py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 md:gap-20 items-center">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8 md:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[#E60000] font-body font-bold tracking-[0.2em] uppercase text-xs mb-4">
                The Heritage
              </h2>
              <h3 
                className="text-4xl md:text-6xl leading-[1.1] tracking-tight font-normal text-foreground mb-6 md:mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Karungal’s <em className="not-italic text-muted-foreground">Premier</em> <br/> 
                Coaching Heritage.
              </h3>
              <p className="text-muted-foreground text-sm md:text-lg font-body leading-relaxed max-w-xl">
                At Adams Academy, we don't just teach; we inspire. Our holistic approach to education ensures that students are not only prepared for their board exams but also for their future careers. Since 2021, we have been the sanctuary for deep thinkers and bold achievers.
              </p>
            </motion.div>
 
            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="p-1 rounded-full bg-[#E60000]/10 border border-[#E60000]/20 group-hover:bg-[#E60000]/20 transition-colors">
                    <UilCheckCircle className="text-[#E60000]" size="18" />
                  </div>
                  <span className="text-foreground/80 text-xs md:text-sm font-body tracking-wide">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
 
          {/* Stats Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 w-full"
          >
            <div className="liquid-glass p-8 md:p-12 rounded-[2rem] border border-white/5 relative overflow-hidden group">
              {/* Background Glow */}
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E60000]/5 blur-[120px] rounded-full group-hover:bg-[#E60000]/10 transition-colors duration-700" />
              
              <div className="relative z-10 grid grid-cols-2 gap-y-8 md:gap-y-12 gap-x-6 md:gap-x-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1 md:space-y-2">
                    <div 
                      className="text-4xl md:text-6xl font-normal text-foreground"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground font-body text-[10px] md:text-xs uppercase tracking-[0.2em]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
 
              <div className="mt-10 md:mt-16 pt-8 md:pt-10 border-t border-white/5 relative z-10">
                <blockquote className="text-foreground/90 font-display italic text-xl md:text-2xl leading-relaxed">
                  "Empowering students to achieve academic excellence through personalized mentorship."
                </blockquote>
                <div className="mt-6 flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-[#E60000]" />
                  <span className="text-muted-foreground font-body text-[10px] md:text-xs uppercase tracking-widest">Adams Academy Philosophy</span>
                </div>
              </div>
            </div>
          </motion.div>
 
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
