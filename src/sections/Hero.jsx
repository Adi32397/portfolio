import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Mail, Download, ArrowRight } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../components/Icons';
import HudFrame from '../components/HudFrame';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-6 md:px-16">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-neonBlue font-mono mb-4 text-sm md:text-base tracking-widest uppercase"
          >
            System Status: Online
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-[0_0_15px_rgba(0,229,255,0.8)]">
            <span className="block text-white">Aditya Singh</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-neonBlue via-neonPurple to-electricPink drop-shadow-[0_0_20px_rgba(255,46,136,0.6)]">
              Saini
            </span>
          </h1>
          
          <h2 className="text-xl md:text-3xl font-medium text-textMuted mb-6 flex flex-col sm:flex-row gap-2">
            <span>{personalInfo.role}</span>
            <span className="hidden sm:inline text-neonPurple">•</span>
            <span>AI Enthusiast</span>
          </h2>
          
          <p className="text-textMuted mb-10 max-w-lg leading-relaxed border-l-2 border-neonBlue pl-4 glassmorphism p-4 rounded-r-lg">
            {personalInfo.tagline}. I build high-performance, immersive digital experiences merging modern web technologies with artificial intelligence.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/projects" className="group relative px-6 py-3 font-semibold text-background bg-neonBlue rounded hover:bg-white transition-all duration-300 shadow-neon flex items-center gap-2 overflow-hidden cursor-none">
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
            </Link>
            
            <a href="#" className="px-6 py-3 font-semibold text-neonBlue border border-neonBlue rounded hover:bg-neonBlue/10 transition-all duration-300 flex items-center gap-2 neon-border cursor-none">
              <Download size={18} />
              Resume
            </a>
          </div>
          
          <div className="mt-12 flex gap-6">
            <SocialIcon href={personalInfo.socials.github} icon={<Github size={24} />} />
            <SocialIcon href={personalInfo.socials.linkedin} icon={<Linkedin size={24} />} />
            <SocialIcon href={`mailto:${personalInfo.socials.email}`} icon={<Mail size={24} />} />
          </div>
        </motion.div>
        
        {/* Right Content - 3D Mockup Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative hidden md:flex justify-center items-center h-[500px]"
        >
          {/* Decorative elements for the right side */}
          <div className="absolute w-72 h-72 border border-neonPurple/50 rounded-full opacity-30 animate-[spin_10s_linear_infinite] shadow-[0_0_30px_rgba(138,43,226,0.4)]" />
          <div className="absolute w-96 h-96 border border-neonBlue/50 rounded-full opacity-20 animate-[spin_15s_linear_infinite_reverse] shadow-[0_0_30px_rgba(0,229,255,0.3)]" />
          
          <HudFrame title="SYS.CORE_01" subtitle="STATUS // ACTIVE" className="w-full max-w-md h-72">
            <div className="w-full h-full relative flex flex-col p-4 group">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-sm bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                <div className="w-3 h-3 rounded-sm bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
                <div className="w-3 h-3 rounded-sm bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
              </div>
              <div className="flex-1 font-mono text-sm text-neonBlue flex flex-col gap-2 drop-shadow-[0_0_5px_rgba(0,229,255,0.8)]">
                <p>{'>'} initialize_system()</p>
                <p className="text-textMuted">{'>'} Loading modules...</p>
                <p className="text-green-400 drop-shadow-[0_0_5px_rgba(74,222,128,0.8)]">{'>'} Neural network synced.</p>
                <p className="text-textMuted">{'>'} Awaiting command_</p>
                <motion.div 
                  className="w-2 h-4 bg-neonBlue mt-1 shadow-[0_0_8px_rgba(0,229,255,1)]"
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                />
              </div>
              {/* Holographic scanline effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-transparent via-neonBlue/20 to-transparent h-10 w-full pointer-events-none mix-blend-screen"
                animate={{ y: [-50, 300] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              />
            </div>
          </HudFrame>
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-textMuted hover:text-neonBlue transition-colors duration-300 hover:scale-110 transform hover:drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]"
    >
      {icon}
    </a>
  );
}
