import React from 'react';
import { motion } from 'framer-motion';
import { UilPhone, UilEnvelope, UilMapMarker, UilWhatsapp, UilInstagram } from '@iconscout/react-unicons';

const contactDetails = [
  {
    title: "Call Us",
    value: "+91 81288 01025",
    icon: UilPhone,
    link: "tel:+918128801025"
  },
  {
    title: "WhatsApp",
    value: "Message Adams Academy",
    icon: UilWhatsapp,
    link: "https://wa.me/918128801025"
  },
  {
    title: "Email Support",
    value: "info@adamsacademy.com",
    icon: UilEnvelope,
    link: "mailto:info@adamsacademy.com"
  },
  {
    title: "Visit Us",
    value: "Kollenvilai Road, Karungal, Kanyakumari District",
    icon: UilMapMarker,
    link: "https://maps.google.com/?q=Adams+Academy+Karungal"
  }
];

const ContactPage = () => {
  return (
    <section id="contact" className="section-glass py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Header & Details */}
          <div className="lg:w-1/2 space-y-12">
            <div>
              <motion.h2 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[#E60000] font-body font-bold tracking-[0.2em] uppercase text-xs mb-4"
              >
                Get In Touch
              </motion.h2>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-7xl leading-[1.1] tracking-tight font-normal text-foreground mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Let’s <em className="not-italic text-muted-foreground">Architect</em> <br/> 
                Your Future.
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-muted-foreground text-lg font-body max-w-md leading-relaxed"
              >
                Our admissions are open. Contact our mentors today to find the perfect curriculum for your academic goals.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactDetails.map((detail, idx) => (
                <motion.a
                  key={idx}
                  href={detail.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="liquid-glass p-6 rounded-3xl border border-white/10 hover:border-[#E60000]/30 transition-all duration-500 group"
                >
                  <detail.icon className="text-[#E60000] mb-4 group-hover:scale-110 transition-transform" size="24" />
                  <div className="text-muted-foreground text-[10px] uppercase tracking-widest mb-1">{detail.title}</div>
                  <div className="text-foreground font-body font-medium text-sm leading-tight">{detail.value}</div>
                </motion.a>
              ))}
            </div>
            
            <div className="pt-8 flex gap-6">
                <a href="https://www.instagram.com/adamsacademy2021/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors"><UilInstagram size="24" /></a>
                <a href="https://wa.me/918128801025" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors"><UilWhatsapp size="24" /></a>
            </div>
          </div>

          {/* Contact Form Area */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="liquid-glass p-10 md:p-12 rounded-[3rem] border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#E60000]/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
              
              <h4 className="text-2xl font-display text-foreground mb-8">Direct Inquiry</h4>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground ml-2">Name</label>
                    <input type="text" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-foreground font-body outline-none focus:border-[#E60000]/50 transition-colors" placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-muted-foreground ml-2">Grade</label>
                    <input type="text" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-4 px-6 text-foreground font-body outline-none focus:border-[#E60000]/50 transition-colors" placeholder="e.g. 10th Standard" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-muted-foreground ml-2">Message</label>
                  <textarea rows="4" className="w-full bg-white/[0.03] border border-white/10 rounded-3xl py-4 px-6 text-foreground font-body outline-none focus:border-[#E60000]/50 transition-colors resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button type="submit" className="w-full bg-foreground text-background py-5 rounded-2xl font-body font-bold text-sm uppercase tracking-[0.2em] hover:bg-[#E60000] hover:text-white transition-all duration-500 shadow-xl">
                  Send Inquiry
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
           className="mt-20 relative rounded-[3rem] overflow-hidden border border-white/10 h-[450px] group"
        >
          <motion.div
            initial={{ filter: "grayscale(1)", opacity: 0.6 }}
            whileInView={{ filter: "grayscale(0)", opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3948.6744043912165!2d77.241707!3d8.2384666!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04ff0093b0ce09%3A0x81a3cc8f8117a7fb!2sADAMS%20ACADEMY!5e0!3m2!1sen!2sin!4v1712836502075!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
          <div className="absolute top-8 left-8 liquid-glass px-6 py-3 rounded-2xl border border-white/10 pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
             <span className="text-foreground text-xs font-body tracking-widest uppercase">Visit Our Karungal Campus</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
