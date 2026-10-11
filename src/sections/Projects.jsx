import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { ExternalLink, X, ShieldAlert, Cpu, Layers, CheckCircle2, AlertTriangle } from 'lucide-react';
import { GithubIcon as Github } from '../components/Icons';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-6 md:px-16 min-h-screen bg-secondaryBg/30">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neonBlue mb-4">
            <Cpu size={13} className="text-neonBlue" />
            <span>// FEATURED_SYSTEMS & PRODUCTION_PROJECTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-widest font-mono text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">
              Project_DB
            </span>
          </h2>
          <p className="text-textMuted text-sm md:text-base max-w-2xl mx-auto mt-3">
            Intelligent platforms, modern web applications, and data-driven systems designed for real-world impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="glassmorphism rounded-2xl overflow-hidden border border-white/10 group cursor-pointer flex flex-col hover:border-neonBlue/60 transition-all duration-300 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-52 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {project.id === 1 && (
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 backdrop-blur-md text-[#86EFAC] text-xs font-mono font-semibold">
                    <ShieldAlert size={13} />
                    <span>Flagship AI System</span>
                  </div>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start gap-2 mb-1">
                  <h3 className="text-2xl font-bold text-white group-hover:text-neonBlue transition-colors">
                    {project.title}
                  </h3>
                </div>

                {project.subtitle && (
                  <p className="text-xs font-mono text-[#86EFAC] mb-2 line-clamp-1">
                    {project.subtitle}
                  </p>
                )}

                <p className="text-textMuted text-sm mb-4 flex-1 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-xs font-mono px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-white/80 group-hover:border-neonBlue/30 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-neonBlue font-mono">
                  <span>Inspect details &amp; architecture</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Comprehensive Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 bg-background/90 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 40 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="glass-panel w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl border border-neonBlue/40 shadow-[0_0_50px_rgba(0,229,255,0.2)] p-0 relative my-auto scrollbar-hide"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-50 p-2.5 bg-black/60 rounded-full text-white/80 hover:text-white border border-white/15 hover:border-white/40 transition-colors backdrop-blur-md"
                onClick={() => setSelectedProject(null)}
              >
                <X size={20} />
              </button>
              
              {/* Modal Hero Banner */}
              <div className="h-64 sm:h-80 relative overflow-hidden">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060c18] via-black/60 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  {selectedProject.id === 1 && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 backdrop-blur-md text-[#86EFAC] text-xs font-mono font-semibold mb-2">
                      <ShieldAlert size={13} />
                      <span>AI Governance & Anomaly Detection</span>
                    </div>
                  )}

                  <h2 className="text-3xl sm:text-5xl font-bold text-white mb-2 tracking-tight">
                    {selectedProject.title}
                  </h2>

                  {selectedProject.subtitle && (
                    <p className="text-xs sm:text-sm font-medium text-white/80 max-w-2xl mb-3">
                      {selectedProject.subtitle}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map(tech => (
                      <span key={tech} className="text-xs font-mono px-3 py-1 bg-neonBlue/15 border border-neonBlue/30 rounded-full text-neonBlue backdrop-blur-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Body Content */}
              <div className="p-6 sm:p-8 space-y-8 bg-[#060c18]/95">
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pb-4 border-b border-white/10">
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/15 hover:border-neonBlue hover:text-neonBlue text-sm font-medium transition-all"
                  >
                    <Github size={16} /> View Source Code
                  </a>
                  
                  {selectedProject.liveDemo && (
                    <a 
                      href={selectedProject.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 px-5 py-2 rounded-xl bg-neonBlue/10 border border-neonBlue text-neonBlue hover:bg-neonBlue hover:text-background text-sm font-semibold shadow-neon transition-all cursor-none"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>

                {/* Primary Overview Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-mono uppercase tracking-wider text-neonBlue mb-2 flex items-center gap-2">
                        <Layers size={14} /> System Overview
                      </h4>
                      <p className="text-textMuted text-sm leading-relaxed">{selectedProject.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-mono uppercase tracking-wider text-rose-400 mb-2 flex items-center gap-2">
                        <AlertTriangle size={14} /> The Problem
                      </h4>
                      <p className="text-textMuted text-sm leading-relaxed">{selectedProject.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-mono uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-2">
                        <CheckCircle2 size={14} /> Proposed Solution
                      </h4>
                      <p className="text-textMuted text-sm leading-relaxed">{selectedProject.solution}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-mono uppercase tracking-wider text-neonPurple mb-2 flex items-center gap-2">
                        <Cpu size={14} /> Key Capabilities &amp; Features
                      </h4>
                      <ul className="space-y-2 text-textMuted text-sm">
                        {selectedProject.features.map(f => (
                          <li key={f} className="flex items-start gap-2">
                            <span className="text-neonBlue mt-1 text-xs">▹</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-mono uppercase tracking-wider text-white mb-2 flex items-center gap-2">
                        <Layers size={14} /> Architecture &amp; Data Flow
                      </h4>
                      <p className="text-textMuted text-sm leading-relaxed">{selectedProject.architecture}</p>
                    </div>
                  </div>
                </div>

                {/* Specific Deep Dive: Risk Detection & Methodology (If CivicShield) */}
                {selectedProject.riskRules && (
                  <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 space-y-4">
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <ShieldAlert size={16} className="text-[#86EFAC]" />
                      Risk Detection Methodology &amp; Rules Engine
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-xs font-mono uppercase text-textMuted block mb-2">Deterministic Scoring Rules</span>
                        <ul className="space-y-2 text-xs text-textMuted">
                          {selectedProject.riskRules.map((rule, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2">
                              <span className="text-[#86EFAC] mt-0.5">•</span>
                              <span>{rule}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <span className="text-xs font-mono uppercase text-textMuted block mb-2">Operational Risk Tiers</span>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          {selectedProject.riskTiers.map(tier => (
                            <div key={tier.tier} className="p-2 rounded bg-white/5 border border-white/5">
                              <div className="font-bold text-white flex justify-between">
                                <span>{tier.tier}</span>
                                <span className="font-mono text-neonBlue">{tier.range}</span>
                              </div>
                              <span className="text-[11px] text-textMuted">{tier.action}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {selectedProject.duplicateCriteria && (
                      <div className="pt-3 border-t border-white/10">
                        <span className="text-xs font-mono uppercase text-textMuted block mb-1">Duplicate Project Detection</span>
                        <p className="text-xs text-textMuted leading-relaxed">
                          {selectedProject.duplicateCriteria}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Additional Governance & Engineering Insights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10 text-xs">
                  {selectedProject.challenges && (
                    <div>
                      <h5 className="font-mono uppercase font-bold text-white mb-2">Technical Challenges</h5>
                      <p className="text-textMuted leading-relaxed">{selectedProject.challenges}</p>
                    </div>
                  )}

                  {selectedProject.utility && (
                    <div>
                      <h5 className="font-mono uppercase font-bold text-white mb-2">Governance Utility &amp; Impact</h5>
                      <p className="text-textMuted leading-relaxed">{selectedProject.utility}</p>
                    </div>
                  )}
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
