import { motion } from 'framer-motion';
import { certificates } from '../data/portfolioData';

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-6 md:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center uppercase tracking-widest font-mono"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">
            Certifications
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5, rotateX: 10, rotateY: 10 }}
              className="glassmorphism p-6 rounded-xl border border-white/10 hover:border-neonBlue/50 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-neon transition-all duration-300 group perspective-1000"
            >
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-neonBlue/20 transition-colors">
                <svg className="w-6 h-6 text-neonBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-textMuted font-mono text-sm">{cert.issuer}</p>
              <div className="mt-4 flex justify-between items-center border-t border-white/10 pt-4">
                <span className="text-xs text-neonPurple">{cert.date}</span>
                <span className="text-xs text-neonBlue opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 cursor-none">
                  View <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
