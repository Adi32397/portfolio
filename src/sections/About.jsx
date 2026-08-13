import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { Rocket, Code, Bot, Target } from 'lucide-react';
import { cn } from '../utils/cn';

const introSentences = [
  "Hello! I'm Aditya Singh Saini, a Web Developer who enjoys transforming ideas into scalable and user-friendly web applications.",
  "I enjoy turning ideas into fast, responsive, and scalable web applications.",
  "My focus is on building modern user experiences, secure backend systems, and continuously expanding my skills in Artificial Intelligence, Automation, and Web Development.",
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

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-16 min-h-screen flex items-center relative overflow-hidden">

      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neonPurple/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neonBlue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center uppercase tracking-widest font-mono"
        >
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">
            About.Me
          </h2> <br></br>
          <p className="text-textMuted text-base md:text-lg max-w-2xl mx-auto">
            Get to know the developer behind the code.
          </p>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Holographic Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative group perspective-1000"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-neonBlue to-neonPurple rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative glassmorphism rounded-xl border border-white/10 hover:border-neonBlue/50 transition-colors overflow-hidden flex flex-col min-h-[500px] md:min-h-[600px] group/image">
              <div className="absolute inset-0 z-0">
                <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/image:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent pointer-events-none" />
              </div>
              
              <div className="p-8 relative z-10 flex flex-col justify-end h-full mt-auto">
                <h3 className="text-3xl font-bold text-center mb-2 text-white">{personalInfo.name}</h3>
                <p className="text-neonBlue text-center mb-8 font-mono text-sm uppercase tracking-wider">{personalInfo.role}</p>

                <div className="space-y-4 text-textMuted text-sm">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="font-mono text-white/70">Location</span>
                    <span className="text-white font-medium">{personalInfo.location}</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="font-mono text-white/70">Education</span>
                    <span className="text-white text-right font-medium">{personalInfo.education}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Description and Stats */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.h3
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-6 text-white font-mono uppercase tracking-wide"
            >
              Initializing Data Stream...
            </motion.h3>

            <div className="space-y-4 mb-8">
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mb-8"
            >
              <h4 className="text-neonBlue font-mono uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="text-xl">🚀</span> Currently Building
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-textMuted text-sm">
                <li className="flex items-start gap-2 hover:text-white transition-colors"><span className="text-neonPurple mt-0.5">▹</span> Full Stack Web Applications</li>
                <li className="flex items-start gap-2 hover:text-white transition-colors"><span className="text-neonPurple mt-0.5">▹</span> AI-powered solutions</li>
                <li className="flex items-start gap-2 hover:text-white transition-colors"><span className="text-neonPurple mt-0.5">▹</span> Secure authentication systems</li>
                <li className="flex items-start gap-2 hover:text-white transition-colors"><span className="text-neonPurple mt-0.5">▹</span> Responsive user interfaces</li>
                <li className="flex items-start gap-2 hover:text-white transition-colors"><span className="text-neonPurple mt-0.5">▹</span> Modern backend APIs</li>
                <li className="flex items-start gap-2 hover:text-white transition-colors"><span className="text-neonPurple mt-0.5">▹</span> Interactive 3D web experiences</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mb-10 glassmorphism p-5 rounded-lg border-l-4 border-electricPink/50 hover:border-electricPink transition-colors"
            >
              <h4 className="text-electricPink font-mono uppercase tracking-wider mb-2 text-sm">Career Goal</h4>
              <p className="text-textMuted text-sm leading-relaxed">
                My goal is to become a skilled Software Engineer capable of building scalable applications that make a meaningful impact. I enjoy learning emerging technologies, collaborating with teams, and continuously challenging myself with new projects.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {personalInfo.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glassmorphism p-4 rounded-lg border border-white/5 hover:border-neonBlue/30 text-center transition-all"
                >
                  <div className="text-3xl font-bold text-neonBlue mb-2 neon-text-blue">
                    {stat.value}+
                  </div>
                  <div className="text-xs text-textMuted uppercase tracking-wider font-mono">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {highlightCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative group h-full"
            >
              <div className="glass-panel p-6 h-full relative overflow-hidden group-hover:border-white/20 transition-colors border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-br from-neonBlue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Dynamically applying Tailwind colors if they map, otherwise inline */}
                <div
                  className={cn("w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-white/5 shadow-[inset_0_0_10px_rgba(255,255,255,0.05)]",
                    card.color === 'neonBlue' ? 'text-neonBlue' :
                      card.color === 'neonPurple' ? 'text-neonPurple' :
                        'text-pink-500')}
                >
                  {card.icon}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                <p className="text-textMuted text-sm leading-relaxed">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
