import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';
import { ExternalLink, X } from 'lucide-react';
import { GithubIcon as Github } from '../components/Icons';
import { cn } from '../utils/cn';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 px-6 md:px-16 min-h-screen bg-secondaryBg/30">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center uppercase tracking-widest font-mono"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">
            Project_DB
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="glassmorphism rounded-xl overflow-hidden border border-white/10 group cursor-pointer flex flex-col hover:border-neonBlue transition-colors"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-neonBlue/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neonBlue transition-colors">
                  {project.title}
                </h3>
                <p className="text-textMuted mb-4 flex-1 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-xs font-mono px-2 py-1 bg-white/5 border border-white/10 rounded text-neonBlue">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="glassmorphism w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl border border-neonBlue/50 shadow-neon p-0 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 z-50 p-2 bg-background/50 rounded-full text-white hover:text-electricPink border border-white/10 hover:border-electricPink transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>
              
              <div className="h-64 md:h-80 relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map(tech => (
                      <span key={tech} className="text-xs font-mono px-3 py-1 bg-neonBlue/10 border border-neonBlue/30 rounded-full text-neonBlue">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-8">
                <div className="flex flex-wrap gap-4">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 hover:border-neonBlue hover:text-neonBlue rounded transition-all">
                    <Github size={18} /> View Source
                  </a>
                  <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-neonBlue/10 border border-neonBlue text-neonBlue hover:bg-neonBlue hover:text-background rounded shadow-neon transition-all cursor-none">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3 border-b border-white/10 pb-2">Overview</h4>
                    <p className="text-textMuted leading-relaxed">{selectedProject.description}</p>
                    
                    <h4 className="text-xl font-bold text-white mt-6 mb-3 border-b border-white/10 pb-2">Problem</h4>
                    <p className="text-textMuted leading-relaxed">{selectedProject.problem}</p>
                    
                    <h4 className="text-xl font-bold text-white mt-6 mb-3 border-b border-white/10 pb-2">Solution</h4>
                    <p className="text-textMuted leading-relaxed">{selectedProject.solution}</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3 border-b border-white/10 pb-2">Features</h4>
                      <ul className="list-disc list-inside text-textMuted space-y-2">
                        {selectedProject.features.map(f => (
                          <li key={f} className="marker:text-neonBlue">{f}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3 border-b border-white/10 pb-2">Architecture</h4>
                      <p className="text-textMuted">{selectedProject.architecture}</p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-white mb-3 border-b border-white/10 pb-2">Challenges</h4>
                      <p className="text-textMuted">{selectedProject.challenges}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
