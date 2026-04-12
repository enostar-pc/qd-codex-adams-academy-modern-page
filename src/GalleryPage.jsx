import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    url: "/gallery/onam_celebration.png",
    title: "Cultural Heritage",
    description: "Onam celebration featuring our traditional flower carpet.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    url: "/gallery/awards_ceremony.png",
    title: "Academic Excellence",
    description: "Celebrating our top performers in recent mock tests.",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    url: "/gallery/lighting_lamp.png",
    title: "Auspicious Beginnings",
    description: "The traditional lamp lighting ceremony at Adams.",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    url: "/gallery/toppers_banner.png",
    title: "Wall of Toppers",
    description: "Honoring our consistent high achievers.",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    url: "/gallery/group_photo.png",
    title: "Academy Community",
    description: "Faculty and students gathered for a milestone event.",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    url: "/gallery/event_highlight.png",
    title: "Mentorship in Action",
    description: "Personalized attention ensuring every student succeeds.",
    span: "md:col-span-2 md:row-span-1",
  }
];

const GalleryPage = () => {
  return (
    <section id="gallery" className="section-glass py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-[#E60000] font-body font-bold tracking-[0.2em] uppercase text-xs mb-4">
              Real Impact
            </h2>
            <h3 
              className="text-4xl md:text-6xl leading-[1.1] tracking-tight font-normal text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The <em className="not-italic text-muted-foreground">Pulse</em> of <br/> 
              Adams Academy.
            </h3>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm font-body max-w-xs leading-relaxed"
          >
            Actual moments from our campus captured to showcase 
            our vibrant academic environment and community.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[250px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.05 }}
              className={`relative overflow-hidden group rounded-[2rem] border border-white/5 ${img.span}`}
            >
              <motion.img 
                src={img.url} 
                alt={img.title} 
                initial={{ filter: "grayscale(1)" }}
                whileInView={{ filter: "grayscale(0)" }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                <div className="text-foreground font-display text-2xl">{img.title}</div>
                <p className="text-muted-foreground text-xs mt-2 line-clamp-2">{img.description}</p>
                <div className="text-muted-foreground font-body text-[10px] uppercase tracking-widest mt-4 px-3 py-1 bg-white/5 w-fit rounded-full border border-white/10">
                  Adams Academy Gallery
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GalleryPage;
