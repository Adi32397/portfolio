import { motion } from 'framer-motion';

export default function Education() {
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

  return (
    <section id="education" className="py-24 px-6 md:px-12 min-h-screen relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background Gradients & Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-neonBlue rounded-full blur-[120px] opacity-[0.03] mix-blend-screen animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-neonPurple rounded-full blur-[120px] opacity-[0.03] mix-blend-screen animate-[pulse_10s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-[url('/scanlines.png')] opacity-[0.02] mix-blend-overlay" />
      </div>

      <div className="max-w-[1000px] w-full relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-widest text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            Education
          </h2>
          <p className="text-textMuted text-base md:text-lg max-w-2xl mx-auto">
            Academic background and qualifications.
          </p>
        </motion.div>

        {/* Education Timeline / Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6"
        >
          {/* UPES */}
          <motion.div 
            variants={itemVariants}
            className="glass-panel p-8 rounded-2xl border border-white/5 shadow-[inset_0_0_20px_rgba(0,229,255,0.05),_0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-white/10 transition-colors"
          >
            <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none mix-blend-overlay" />
            <div className="absolute top-0 left-0 w-1 h-full bg-neonBlue transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-neonBlue transition-colors">UPES, Dehradun</h3>
                <p className="text-lg text-textMuted mt-1">B.Tech CSE (Cloud Computing and Virtualization Technology)</p>
              </div>
              <div className="flex flex-col md:items-end">
                <span className="text-neonBlue font-mono font-bold text-lg">2024–2028</span>
                <span className="text-md text-white/70 mt-1">CGPA: <span className="text-white font-bold">8.96/10</span></span>
              </div>
            </div>
          </motion.div>

          {/* Greenway 12th */}
          <motion.div 
            variants={itemVariants}
            className="glass-panel p-8 rounded-2xl border border-white/5 shadow-[inset_0_0_20px_rgba(138,43,226,0.05),_0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-white/10 transition-colors"
          >
            <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none mix-blend-overlay" />
            <div className="absolute top-0 left-0 w-1 h-full bg-neonPurple transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-neonPurple transition-colors">Greenway Modern School, Roorkee</h3>
                <p className="text-lg text-textMuted mt-1">CBSE Higher Secondary Certificate</p>
              </div>
              <div className="flex flex-col md:items-end">
                <span className="text-neonPurple font-mono font-bold text-lg">2024</span>
                <span className="text-md text-white/70 mt-1">Score: <span className="text-white font-bold">82%</span></span>
              </div>
            </div>
          </motion.div>

          {/* Greenway 10th */}
          <motion.div 
            variants={itemVariants}
            className="glass-panel p-8 rounded-2xl border border-white/5 shadow-[inset_0_0_20px_rgba(255,46,136,0.05),_0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-white/10 transition-colors"
          >
            <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none mix-blend-overlay" />
            <div className="absolute top-0 left-0 w-1 h-full bg-[#FF2E88] transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#FF2E88] transition-colors">Greenway Modern School, Roorkee</h3>
                <p className="text-lg text-textMuted mt-1">CBSE Secondary School Certificate</p>
              </div>
              <div className="flex flex-col md:items-end">
                <span className="text-[#FF2E88] font-mono font-bold text-lg">2022</span>
                <span className="text-md text-white/70 mt-1">Score: <span className="text-white font-bold">72%</span></span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
