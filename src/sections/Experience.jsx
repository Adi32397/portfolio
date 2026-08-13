import { motion } from 'framer-motion';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 md:px-16 min-h-screen">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center uppercase tracking-widest font-mono"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">
            Timeline_Log
          </span>
        </motion.h2>

        <div className="relative border-l border-neonBlue/30 ml-4 md:ml-0">
          {experience.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.2 }}
              className="mb-12 ml-8 relative group"
            >
              <div className="absolute w-4 h-4 bg-background border-2 border-neonBlue rounded-full -left-[41px] top-1 group-hover:bg-neonBlue group-hover:shadow-neon transition-all" />
              
              <div className="glassmorphism p-6 rounded-xl border border-white/10 group-hover:border-neonBlue/50 transition-all hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-neonBlue transition-colors">
                    {item.role}
                  </h3>
                  <span className="text-sm font-mono text-neonPurple bg-neonPurple/10 px-3 py-1 rounded-full w-fit mt-2 md:mt-0">
                    {item.period}
                  </span>
                </div>
                <h4 className="text-md text-textMuted font-medium mb-4">{item.company}</h4>
                <p className="text-textMuted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
