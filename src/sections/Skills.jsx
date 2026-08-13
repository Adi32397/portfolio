import { motion } from 'framer-motion';
import { Laptop, Server, Database, Code, Wrench, Cloud, Rocket } from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import Tooltip from '../components/Tooltip';
import { cn } from '../utils/cn';

// Icon Map for dynamic rendering
const iconMap = {
  Laptop: Laptop,
  Server: Server,
  Database: Database,
  Code: Code,
  Wrench: Wrench,
  Cloud: Cloud,
  Rocket: Rocket
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 min-h-screen relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background Gradients & Grid (Localized for this section) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-neonBlue rounded-full blur-[120px] opacity-[0.03] mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-neonPurple rounded-full blur-[120px] opacity-[0.03] mix-blend-screen animate-[pulse_10s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[url('/scanlines.png')] opacity-[0.02] mix-blend-overlay" />
      </div>

      <div className="max-w-[1400px] w-full relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-widest text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            Skills & Technologies
          </h2>
          <p className="text-textMuted text-base md:text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable, and high-performance applications.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {skillsData.map((categoryData, idx) => {
            const Icon = iconMap[categoryData.iconName] || Code;
            
            // Standard Card Component
            const CardContent = (
              <div className="h-full flex flex-col relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-black/40 flex items-center justify-center border border-white/10" style={{ boxShadow: `0 0 20px ${categoryData.color}33`, borderColor: `${categoryData.color}66` }}>
                    <Icon size={24} style={{ color: categoryData.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">
                    {categoryData.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {categoryData.items.map((skill) => (
                    <Tooltip key={skill} content={skill}>
                      <motion.div
                        variants={badgeVariants}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-2 rounded-full bg-black/50 border backdrop-blur-md cursor-none flex items-center gap-2 group transition-all"
                        style={{ borderColor: `${categoryData.color}40` }}
                      >
                        {/* We use a simple generic dot or text for the tool icon to keep it clean */}
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: categoryData.color, boxShadow: `0 0 10px ${categoryData.color}` }} />
                        <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    </Tooltip>
                  ))}
                </div>
              </div>
            );

            // If it's the "Currently Learning" card, apply the special animated border wrapper
            if (categoryData.special) {
              return (
                <motion.div key={idx} variants={itemVariants} className="xl:col-span-3 md:col-span-2 col-span-1 mt-8">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="relative rounded-2xl p-[2px] overflow-hidden group cursor-none"
                  >
                    {/* Animated Gradient Border */}
                    <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,#FFFFFF_360deg)] animate-[spin_4s_linear_infinite]" />
                    <div className="absolute inset-[-50%] bg-[conic-gradient(from_180deg,transparent_0_340deg,#00E5FF_360deg)] animate-[spin_4s_linear_infinite]" />
                    
                    {/* Inner Panel */}
                    <div className="relative bg-background h-full w-full rounded-[14px] p-8 border border-white/5 backdrop-blur-3xl shadow-[inset_0_0_40px_rgba(255,255,255,0.05)]">
                      {CardContent}
                    </div>
                  </motion.div>
                </motion.div>
              );
            }

            // Standard Glass Card
            return (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="relative p-8 rounded-2xl glass-panel group overflow-hidden cursor-none border border-white/5"
                style={{ 
                  boxShadow: `inset 0 0 20px ${categoryData.color}15, 0 8px 32px rgba(0,0,0,0.5)`,
                }}
              >
                {/* Hover Glow Background */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" 
                  style={{ background: `radial-gradient(circle at center, ${categoryData.color}, transparent 70%)` }}
                />
                
                {CardContent}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
