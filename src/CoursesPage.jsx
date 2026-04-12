import React from 'react';
import { motion } from 'framer-motion';
import { UilBookAlt, UilAtom, UilCalculator } from '@iconscout/react-unicons';

const courses = [
  {
    title: 'Foundation',
    grades: 'Grade 6–8',
    icon: UilBookAlt,
    description: 'Building a strong academic foundation with conceptual clarity in core subjects.',
    subjects: ['Mathematics', 'Science', 'English'],
  },
  {
    title: 'Board Preparation',
    grades: 'Grade 9–10',
    icon: UilAtom,
    description: 'Intensive coaching focused on board exam formats, previous papers, and scoring techniques.',
    subjects: ['Mathematics', 'Science (Phy/Chem/Bio)', 'English', 'Social Science'],
  },
  {
    title: 'Advanced Coaching',
    grades: 'Grade 11–12',
    icon: UilCalculator,
    description: 'Specialized coaching for higher secondary boards and competitive exam orientation.',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
  }
];

const CoursesPage = () => {
  return (
    <section id="courses" className="section-glass py-20 md:py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#E60000] font-body font-bold tracking-[0.2em] uppercase text-xs mb-4">
              Curriculum
            </h2>
            <h3 
              className="text-4xl md:text-6xl leading-[1.1] tracking-tight font-normal text-foreground mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Academic <em className="not-italic text-muted-foreground">Architectures.</em>
            </h3>
            <p className="text-muted-foreground text-sm md:text-lg font-body max-w-2xl mx-auto leading-relaxed">
              Tailored learning paths designed specifically for CBSE and Matriculation boards, 
              ensuring every student reaches their full academic zenith.
            </p>
          </motion.div>
        </div>

        {/* Courses Cards */}
        <div className="space-y-6 md:space-y-8">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="liquid-glass group rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-14 border border-white/5 flex flex-col lg:flex-row items-center gap-8 md:gap-12 hover:bg-white/[0.02] transition-colors duration-500"
            >
              {/* Icon & Grade */}
              <div className="flex-shrink-0 text-center lg:text-left">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#E60000]/5 flex items-center justify-center border border-[#E60000]/10 mb-4 md:mb-6 mx-auto lg:mx-0 group-hover:bg-[#E60000]/10 transition-colors">
                  <course.icon className="text-[#E60000]" size={34} />
                </div>
                <div className="text-muted-foreground font-body text-[10px] md:text-xs uppercase tracking-[0.3em]">
                  {course.grades}
                </div>
              </div>

              {/* Title & Description */}
              <div className="flex-grow text-center lg:text-left max-w-xl">
                <h4 
                  className="text-2xl md:text-4xl text-foreground font-normal mb-3 md:mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {course.title}
                </h4>
                <p className="text-muted-foreground font-body text-xs md:text-base leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Subjects Tags */}
              <div className="w-full lg:w-1/3 flex flex-wrap justify-center lg:justify-start gap-2 pt-8 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/5 lg:pl-12">
                <div className="w-full text-muted-foreground font-body text-[10px] uppercase tracking-[0.2em] mb-4 text-center lg:text-left">
                  Key Subjects
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {course.subjects.map((subject, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/5 bg-white/[0.02] text-foreground/80 text-[10px] md:text-xs font-body group-hover:border-white/10 transition-all"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Arrow */}
              <div className="hidden lg:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ml-auto">
                <div className="w-12 h-12 rounded-full border border-[#E60000]/30 flex items-center justify-center">
                  <span className="text-[#E60000] text-2xl">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24 text-center"
        >
          <p className="text-muted-foreground text-xs md:text-sm font-body italic">
            * Admission to all programs is subject to assessment and batch availability.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default CoursesPage;
