import { motion } from 'framer-motion';
import { Mail, Globe } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../components/Icons';
import { cn } from '../utils/cn';
import { skills, personalInfo } from '../data/portfolioData';

function GlassCard({ children, className, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn("glass-panel flex flex-col p-5 relative overflow-hidden group", className)}
    >
      {title && (
        <h3 className="text-white font-bold text-sm tracking-widest mb-4 uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
          {title}
        </h3>
      )}
      <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none mix-blend-overlay" />
      <div className="relative z-10 w-full h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  );
}

function ProjectCard({ title, desc, stack, icon, colorClass, shadowClass, image = "/profile.jpg", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className={cn("glass-panel p-5 relative overflow-hidden group flex flex-col cursor-none", shadowClass)}
    >
      <div className="absolute inset-0 bg-scanlines opacity-20 pointer-events-none mix-blend-overlay" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full pointer-events-none" />

      <div className="w-full h-32 rounded-xl mb-4 overflow-hidden relative border border-white/5 group-hover:border-white/20 transition-colors">
        <div className="absolute inset-0 flex items-center justify-center text-white/20 font-mono text-xs">
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        {/* Holographic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <h4 className="text-white font-bold text-lg mb-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] uppercase">{title}</h4>
      <p className="text-textMuted text-xs mb-4 flex-1">{desc}</p>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] text-white/50 uppercase font-bold tracking-wider">Tech Stack:</span>
        <span className="text-white text-xs font-medium">{stack}</span>
      </div>

      <div className={cn("absolute bottom-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)]", colorClass)}>
        {icon}
      </div>
    </motion.div>
  );
}

export default function Dashboard() {
  return (
    <>
      <section className="relative min-h-screen w-full pt-28 pb-12 px-6 md:px-12 flex flex-col xl:flex-row gap-6 max-w-[1600px] mx-auto z-10">

        {/* Left Sidebar Widgets */}
        <div className="flex flex-col gap-6 w-full xl:w-72 shrink-0">
          <GlassCard title="DEV STATS" className="shadow-[inset_0_0_20px_rgba(0,229,255,0.1),_0_8px_32px_rgba(0,0,0,0.8)] border-neonBlue/30">
            <p className="text-textMuted text-xs font-medium flex items-center gap-2">
              Commits: <span className="text-white font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">250+</span>
              <span className="text-white/20">|</span>
              Projects: <span className="text-white font-bold drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">5</span>
            </p>
          </GlassCard>

          <GlassCard title="LATEST SKILLS" className="shadow-[inset_0_0_20px_rgba(138,43,226,0.1),_0_8px_32px_rgba(0,0,0,0.8)] border-neonPurple/30 flex-1">
            <div className="flex flex-wrap gap-2">
              {Object.values(skills).flat().slice(0, 15).map(skill => (
                <span key={skill} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-textMuted text-xs font-medium hover:bg-white/10 hover:text-white transition-colors cursor-none">
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>

          <GlassCard title="CONNECT" className="shadow-[inset_0_0_20px_rgba(0,229,255,0.1),_0_8px_32px_rgba(0,0,0,0.8)] border-neonBlue/30">
            <div className="flex items-center gap-4">
              <a 
                href={personalInfo.socials.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub Profile"
                title="GitHub: Adi32397"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-textMuted hover:text-neonBlue hover:bg-neonBlue/10 transition-all border border-white/10 hover:border-neonBlue/50 hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] cursor-none"
              >
                <Github size={18} />
              </a>
              <a 
                href={personalInfo.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn Profile"
                title="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-textMuted hover:text-neonPurple hover:bg-neonPurple/10 transition-all border border-white/10 hover:border-neonPurple/50 hover:shadow-[0_0_15px_rgba(138,43,226,0.4)] cursor-none"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href={`mailto:${personalInfo.socials.email}`}
                aria-label="Email"
                title={`Email: ${personalInfo.socials.email}`}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-textMuted hover:text-emerald-400 hover:bg-emerald-400/10 transition-all border border-white/10 hover:border-emerald-400/50 hover:shadow-[0_0_15px_rgba(52,211,153,0.4)] cursor-none"
              >
                <Mail size={18} />
              </a>
              <a 
                href={personalInfo.socials.website || "https://github.com/Adi32397/portfolio"} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Portfolio Website"
                title="Portfolio Repository"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-textMuted hover:text-cyan-400 hover:bg-cyan-400/10 transition-all border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] cursor-none"
              >
                <Globe size={18} />
              </a>
            </div>
          </GlassCard>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col flex-1 gap-12 pt-8 xl:pt-0">

          {/* Profile Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col xl:flex-row items-center xl:items-start gap-8 px-4"
          >
            {/* Avatar Ring */}
            <div className="relative group perspective-1000">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-neonPurple to-neonBlue rounded-full blur-2xl opacity-30 group-hover:opacity-60 transition duration-700 animate-[pulse_3s_ease-in-out_infinite]"></div>
              
              {/* Main Avatar */}
              <div className="relative w-32 h-32 rounded-full p-1 bg-gradient-to-br from-neonPurple to-neonBlue shadow-[0_0_30px_rgba(138,43,226,0.6)] animate-[pulse_4s_ease-in-out_infinite]">
                <div className="w-full h-full rounded-full bg-background overflow-hidden border-2 border-background flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>
              
              {/* Inner Orbiting Dots */}
              <div className="absolute -inset-4 border border-neonPurple/30 rounded-full animate-[spin_8s_linear_infinite]">
                <div className="absolute top-0 left-1/2 -mt-1.5 -ml-1.5 w-3 h-3 bg-neonPurple rounded-full shadow-[0_0_15px_#8A2BE2] animate-[pulse_2s_ease-in-out_infinite]" />
                <div className="absolute bottom-0 left-1/2 -mb-1.5 -ml-1.5 w-3 h-3 bg-neonBlue rounded-full shadow-[0_0_15px_#00E5FF] animate-[pulse_2s_ease-in-out_infinite_1s]" />
              </div>
              
              {/* Outer Dashed Orbiting Ring */}
              <div className="absolute -inset-8 border border-dashed border-neonBlue/20 rounded-full animate-[spin_15s_linear_infinite_reverse]">
                <div className="absolute left-0 top-1/2 -mt-1.5 -ml-1.5 w-3 h-3 bg-electricPink rounded-full shadow-[0_0_15px_#FF007F] animate-[pulse_2.5s_ease-in-out_infinite]" />
              </div>
              
              {/* Subtle expanding ping effect */}
              <div className="absolute inset-0 border-2 border-neonBlue rounded-full animate-ping opacity-20" style={{ animationDuration: '3s' }} />
            </div>

            <div className="flex flex-col items-center xl:items-start text-center xl:text-left mt-2">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-wide uppercase flex items-center gap-3 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                Aditya Singh Saini<span className="text-neonPurple drop-shadow-[0_0_15px_rgba(138,43,226,0.8)]">//</span>
              </h1>
              <h2 className="text-lg md:text-xl font-semibold text-textMuted tracking-widest uppercase mb-3">
                Web Developer & Engineer
              </h2>
              <p className="text-sm md:text-base text-textMuted/80 max-w-xl">
                Crafting innovative digital solutions with code & creativity. Passionate about AI, modern web apps, and performance optimization.
              </p>
            </div>
          </motion.div>

          {/* Project Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-auto">
            <ProjectCard
              title="Project 1: CivicShield AI"
              desc="AI-powered governance monitoring platform combining financial analytics, Isolation Forest anomaly detection, duplicate screening, and verification workflows."
              stack="React, Node.js, MySQL, Isolation Forest"
              image="/civicshield.jpg"
              icon={<div className="w-4 h-4 bg-[#86EFAC] rounded-full blur-[2px]" />}
              colorClass="bg-[#86EFAC]/20 text-[#86EFAC] border-[#86EFAC]/50"
              shadowClass="shadow-[inset_0_0_20px_rgba(134,239,172,0.1)] border-[#86EFAC]/30 hover:shadow-[0_0_30px_rgba(134,239,172,0.3)]"
              delay={0.2}
            />
            <ProjectCard
              title="Project 2: Sarangi Consulting"
              desc="Developed a professional website for Sarangi Consulting, an IT firm specializing in custom software, AI/ML, and cybersecurity solutions, with a focus on user experience and service showcase."
              stack="HTML, CSS, JavaScript"
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
              icon={<div className="w-4 h-4 bg-neonPurple rounded-full blur-[2px]" />}
              colorClass="bg-neonPurple/20 text-neonPurple border-neonPurple/50"
              shadowClass="shadow-[inset_0_0_20px_rgba(138,43,226,0.1)] border-neonPurple/30 hover:shadow-[0_0_30px_rgba(138,43,226,0.3)]"
              delay={0.4}
            />
            <ProjectCard
              title="Project 3: Accomodo"
              desc="Developed a modern, responsive website for Accomodo, a platform connecting travelers with comfortable accommodations, featuring intuitive navigation and an engaging user experience."
              stack="React, Node.js, Express, MongoDB"
              image="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop"
              icon={<div className="w-4 h-4 bg-neonBlue rounded-full blur-[2px]" />}
              colorClass="bg-neonBlue/20 text-neonBlue border-neonBlue/50"
              shadowClass="shadow-[inset_0_0_20px_rgba(0,229,255,0.1)] border-neonBlue/30 hover:shadow-[0_0_30px_rgba(0,229,255,0.3)]"
              delay={0.6}
            />
          </div>

        </div>
      </section>


    </>
  );
}
