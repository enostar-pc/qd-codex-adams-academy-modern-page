import React from 'react';
import { UilStar } from '@iconscout/react-unicons';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Rahul M.",
    role: "Grade 10 Student",
    content: "Adams Academy completely changed my approach to studying. The faculty's individual attention helped me score 95% in my board exams.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Rahul+M&background=000000&color=fff"
  },
  {
    id: 2,
    name: "Priya S.",
    role: "Parent of Grade 12 Student",
    content: "The smart classrooms and regular mock tests gave my daughter the confidence she needed. Very thankful to the dedicated teachers here.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Priya+S&background=E60000&color=fff"
  },
  {
    id: 3,
    name: "Arun K.",
    role: "Grade 11 Student",
    content: "Physics used to be my weakest subject, but the continuous mentoring sessions helped me grasp the hardest concepts easily.",
    rating: 5,
    avatar: "https://ui-avatars.com/api/?name=Arun+K&background=333333&color=fff"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1 }
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-[#E60000] font-bold tracking-widest uppercase text-sm mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">What Parents & Students Say</h3>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t) => (
            <motion.div 
              key={t.id} 
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="bg-white p-8 border border-gray-200 rounded-none hover:border-[#E60000] transition-colors"
            >
              <div className="flex gap-1 mb-6 text-[#E60000]">
                {[...Array(t.rating)].map((_, i) => (
                  <UilStar key={i} size="18" />
                ))}
              </div>
              <p className="text-gray-700 font-light italic mb-8 leading-relaxed text-sm">"{t.content}"</p>
              <div className="flex items-center">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full mr-4 object-cover" />
                <div>
                  <h4 className="font-bold text-black text-sm">{t.name}</h4>
                  <p className="text-xs font-semibold tracking-wide uppercase text-gray-500 mt-1">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
