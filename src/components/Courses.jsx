import React from 'react';
import { UilBookAlt, UilAtom, UilCalculator } from '@iconscout/react-unicons';
import { motion } from 'framer-motion';

const courses = [
  {
    id: 1,
    title: 'Foundation',
    grades: 'Grade 6–8',
    icon: UilBookAlt,
    description: 'Building a strong academic foundation with conceptual clarity in core subjects.',
    subjects: ['Mathematics', 'Science', 'English'],
    theme: 'border-transparent hover:border-[#E60000]'
  },
  {
    id: 2,
    title: 'Board Preparation',
    grades: 'Grade 9–10',
    icon: UilAtom,
    description: 'Intensive coaching focused on board exam formats, previous papers, and scoring techniques.',
    subjects: ['Mathematics', 'Science (Phy/Chem/Bio)', 'English', 'Social Science'],
    theme: 'border-transparent hover:border-[#E60000]'
  },
  {
    id: 3,
    title: 'Advanced Coaching',
    grades: 'Grade 11–12',
    icon: UilCalculator,
    description: 'Specialized coaching for higher secondary boards and competitive exam orientation.',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    theme: 'border-transparent hover:border-[#E60000]'
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
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

const Courses = () => {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-[#E60000] font-bold tracking-widest uppercase text-sm mb-2">Our Programs</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">Comprehensive Courses</h3>
          <p className="mt-4 text-gray-600 font-light">Tailored curriculum designed specifically for CBSE and Matriculation boards.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {courses.map((course) => (
            <motion.div 
              key={course.id} 
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className={`bg-white rounded-none p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md border-t-2 ${course.theme}`}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="inline-block px-3 py-1 bg-gray-100 text-black text-[10px] uppercase font-bold tracking-wider mb-3">
                    {course.grades}
                  </span>
                  <h4 className="text-xl font-bold text-black uppercase tracking-tight">{course.title}</h4>
                </div>
                <div className="text-3xl text-[#E60000]">
                  <course.icon size="32" />
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 min-h-[3rem] font-light text-sm leading-relaxed">
                {course.description}
              </p>
              
              <div className="space-y-2">
                <h5 className="font-bold text-xs text-black uppercase tracking-widest mb-3">Key Subjects</h5>
                <ul className="space-y-2">
                  {course.subjects.map((subject, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 text-sm font-light">
                      <span className="w-1.5 h-1.5 rounded-none bg-[#E60000] mr-3"></span>
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <a href="#cta" className="text-black text-sm tracking-wide font-bold hover:text-[#E60000] hover:underline underline-offset-4 transition-all flex items-center">
                  LEARN MORE
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Courses;
