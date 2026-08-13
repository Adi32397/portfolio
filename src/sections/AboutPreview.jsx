import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Code, Bot, Target, ChevronRight } from 'lucide-react';
import { cn } from '../utils/cn';
import HudFrame from '../components/HudFrame';

const introSentences = [
  "Hello! I'm Aditya Singh Saini, a Full Stack Developer who enjoys transforming ideas into scalable and user-friendly web applications.",
  "I enjoy turning ideas into fast, responsive, and scalable web applications.",
  "My focus is on building modern user experiences, secure backend systems, and continuously expanding my skills in Artificial Intelligence, Automation, and Full Stack Development.",
  "I believe in continuous learning, solving real-world problems, and creating digital experiences that combine performance, creativity, and clean design."
];

const highlightCards = [
  {
    title: "Passion",
    icon: <Rocket size={24} />,
    description: "Building modern web applications that solve real-world problems.",
    color: "neonBlue"
  },
  {
    title: "Current Focus",
    icon: <Code size={24} />,
    description: "React.js, Node.js, Express.js, MySQL, REST APIs.",
    color: "neonPurple"
  },
  {
    title: "Exploring",
    icon: <Bot size={24} />,
    description: "AI, Automation, Prompt Engineering, Modern Web Technologies.",
    color: "electricPink"
  },
  {
    title: "Goal",
    icon: <Target size={24} />,
    description: "To become a highly skilled Software Engineer building scalable and impactful digital products.",
    color: "neonBlue"
  }
];

// Reusable animated card component
function HighlightCard({ card, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative group"
    >
      <HudFrame color={card.color} className="h-full">
        <div className="p-6 relative overflow-hidden h-full">
          <div className="absolute inset-0 bg-gradient-to-br from-neonBlue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-white/5", `text-${card.color}`)}>
            {card.icon}
          </div>

          <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
          <p className="text-textMuted text-sm leading-relaxed">{card.description}</p>
        </div>
      </HudFrame>
    </motion.div>
  );
}

export default function AboutPreview() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} className="relative w-full py-24 px-6 md:px-16 flex flex-col items-center">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neonPurple/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neonBlue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl w-full z-10">

        {/* Header section */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold font-mono text-white mb-4 tracking-wider uppercase"
          >
            ABOUT ME
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 w-24 bg-neonBlue mx-auto rounded shadow-neon mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-textMuted text-lg md:text-xl font-medium"
          >
            Get to know the developer behind the code.
          </motion.p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-center">

          {/* Left Column: Holographic Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
            style={{ y: yParallax }}
          >
            <HudFrame title="USR.PROFILE //" subtitle="LEVEL: 99" color="neonPurple">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden group min-h-[500px] flex flex-col"
              >
                <div className="absolute inset-0 z-0 overflow-hidden group/img">
                  <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/img:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent pointer-events-none" />
                </div>
                
                <div className="p-6 md:p-8 relative z-10 flex flex-col justify-end h-full mt-auto">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-[0_0_10px_rgba(138,43,226,0.8)]">Aditya Singh Saini</h3>
                    <h4 className="text-neonBlue font-mono text-sm tracking-wide uppercase drop-shadow-[0_0_5px_rgba(0,229,255,0.8)]">Full Stack Developer</h4>
                  </div>

                  <div className="w-full space-y-3 text-sm text-left border-t border-white/20 pt-4 relative">
                    <div className="flex items-start gap-3 hover:bg-white/5 p-1.5 rounded transition-colors">
                      <span className="text-neonPurple mt-0.5 shrink-0">▸</span>
                      <p><span className="text-white/80 font-mono text-xs uppercase block mb-1">Position</span><span className="text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Full Stack Developer Intern @ Sarangi Tech</span></p>
                    </div>
                    <div className="flex items-start gap-3 hover:bg-white/5 p-1.5 rounded transition-colors">
                      <span className="text-neonPurple mt-0.5 shrink-0">▸</span>
                      <p><span className="text-white/80 font-mono text-xs uppercase block mb-1">Education</span><span className="text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">B.Tech CSE (CCVT Specialization)</span></p>
                    </div>
                    <div className="flex items-start gap-3 hover:bg-white/5 p-1.5 rounded transition-colors">
                      <span className="text-neonPurple mt-0.5 shrink-0">▸</span>
                      <p><span className="text-white/80 font-mono text-xs uppercase block mb-1">Location</span><span className="text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">India</span></p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </HudFrame>
          </motion.div>

          {/* Right Column: Intro Paragraph */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-6">
              {introSentences.map((sentence, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-base md:text-lg text-textMuted leading-relaxed pl-4 border-l-2 border-neonBlue/30 hover:border-neonBlue hover:text-white transition-colors duration-300"
                >
                  {sentence}
                </motion.p>
              ))}
            </div>
          </div>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlightCards.map((card, idx) => (
            <HighlightCard key={idx} card={card} index={idx} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center border-t border-white/10 pt-16"
        >
          <p className="text-xl md:text-2xl font-medium text-white mb-8 max-w-2xl italic">
            "Every project is an opportunity to learn, innovate, and build something meaningful."
          </p>

          <Link to="/about" className="group relative inline-flex items-center gap-2 px-8 py-4 font-semibold text-background bg-neonBlue rounded hover:bg-white transition-all duration-300 shadow-neon overflow-hidden cursor-none">
            <span className="relative z-10 flex items-center gap-2">
              Learn More About Me
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
