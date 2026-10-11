import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Gem, 
  X,
  Briefcase,
  BarChart3,
  Code2
} from 'lucide-react';
import { experience, personalInfo } from '../data/portfolioData';
import { cn } from '../utils/cn';

// Custom Deloitte Logo component
function DeloitteLogo() {
  return (
    <div className="w-14 h-14 rounded-2xl bg-black border border-white/15 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.15)] group-hover:border-[#86EFAC]/50 transition-all duration-300">
      <span className="text-white font-bold text-2xl tracking-tighter flex items-baseline">
        D<span className="text-[#86EFAC] text-3xl font-black leading-none ml-0.5">.</span>
      </span>
    </div>
  );
}

// Custom Sarangi Group Logo component
function SarangiLogo() {
  return (
    <div className="w-14 h-14 rounded-2xl bg-[#0b1329] border border-cyan-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(0,229,255,0.15)] group-hover:border-neonBlue/60 transition-all duration-300">
      <div className="relative flex items-center justify-center">
        <svg className="w-8 h-8 text-neonBlue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
}

// Interactive Certificate Preview Card
function CertificateCard({ cert, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.01, borderColor: "rgba(134, 239, 172, 0.4)" }}
      onClick={onClick}
      className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center gap-4 group/cert shadow-[inset_0_0_15px_rgba(255,255,255,0.02)]"
    >
      {/* Mini Certificate Thumbnail */}
      <div className="relative w-full sm:w-36 h-24 rounded-lg bg-slate-900 border border-white/15 p-2.5 flex flex-col justify-between overflow-hidden flex-shrink-0 group-hover/cert:border-[#86EFAC]/40 transition-colors">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <span className="text-[7px] text-[#86EFAC] font-mono font-bold tracking-wider uppercase">DELOITTE</span>
            <span className="text-[9px] text-white font-bold tracking-tight">Data Analytics</span>
          </div>
          <div className="w-4 h-4 rounded-full bg-[#86EFAC]/20 border border-[#86EFAC]/40 flex items-center justify-center">
            <Award size={9} className="text-[#86EFAC]" />
          </div>
        </div>
        <div className="my-auto py-1">
          <p className="text-[8px] text-white/90 font-medium truncate">{personalInfo.name}</p>
          <p className="text-[6.5px] text-textMuted truncate">Certificate of Completion</p>
        </div>
        <div className="flex justify-between items-center pt-1 border-t border-white/10">
          <span className="text-[6px] text-textMuted font-mono">Job Simulation</span>
          <span className="text-[6px] text-[#86EFAC] font-mono">Verified</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-[#86EFAC]/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Certificate Text & Metadata */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <h4 className="text-sm md:text-base font-bold text-white group-hover/cert:text-[#86EFAC] transition-colors">
            {cert.title}
          </h4>
          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#86EFAC]/10 text-[#86EFAC] border border-[#86EFAC]/30">
            <Award size={11} /> Verified Credential
          </span>
        </div>
        <p className="text-xs text-textMuted line-clamp-2 leading-relaxed">
          {cert.description}
        </p>
        <div className="mt-2 flex items-center gap-2 text-xs text-[#86EFAC] font-medium group-hover/cert:underline">
          <span>Click to view credential details</span>
          <ExternalLink size={12} />
        </div>
      </div>
    </motion.div>
  );
}

// Certificate Modal
function CertificateModal({ cert, onClose }) {
  if (!cert) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[2000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl glass-panel p-6 sm:p-8 rounded-2xl border border-[#86EFAC]/40 shadow-[0_0_50px_rgba(134,239,172,0.2)] overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-textMuted hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Certificate Mockup Sheet */}
        <div className="rounded-xl border-2 border-white/20 p-6 sm:p-8 bg-gradient-to-b from-slate-950 via-[#06111e] to-black relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#86EFAC]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl font-black text-white tracking-tight">Deloitte<span className="text-[#86EFAC]">.</span></span>
                <span className="text-xs px-2 py-0.5 rounded bg-white/10 text-white/80 font-mono">Australia</span>
              </div>
              <p className="text-xs text-textMuted font-mono">Job Simulation Certificate of Completion</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#86EFAC]/10 border border-[#86EFAC]/40 flex items-center justify-center text-[#86EFAC]">
              <Award size={24} />
            </div>
          </div>

          <div className="text-center py-4">
            <p className="text-xs font-mono uppercase tracking-widest text-[#86EFAC] mb-2">This is proudly awarded to</p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-wide mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
              {personalInfo.name}
            </h3>
            <p className="text-sm text-textMuted max-w-lg mx-auto leading-relaxed mt-3">
              For successfully completing practical tasks simulating real-world consulting workflows in <span className="text-white font-semibold">Data Analytics, Data Modeling, Dashboard Visualization</span> and executive presentations.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6 pt-4 border-t border-white/10">
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-center">
              <span className="block text-[10px] text-textMuted font-mono uppercase">Program</span>
              <span className="text-xs font-semibold text-white">Data Analytics</span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-center">
              <span className="block text-[10px] text-textMuted font-mono uppercase">Platform</span>
              <span className="text-xs font-semibold text-white">Deloitte & Forage</span>
            </div>
            <div className="col-span-2 sm:col-span-1 p-2.5 rounded-lg bg-white/[0.03] border border-white/5 text-center">
              <span className="block text-[10px] text-textMuted font-mono uppercase">Verification</span>
              <span className="text-xs font-semibold text-[#86EFAC] flex items-center justify-center gap-1">
                <CheckCircle2 size={12} /> Authenticated
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs text-textMuted font-mono pt-2">
            <span>Issue Date: Aug 2026</span>
            <span className="text-white/60">Credential ID: DEL-DA-SIM-2026</span>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors"
          >
            Close Preview
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredExperience = experience.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'dev') return item.id === 'sarangi-intern';
    if (filter === 'data') return item.id === 'deloitte-analytics';
    return true;
  });

  return (
    <section id="experience" className="py-24 px-6 md:px-12 min-h-screen relative overflow-hidden flex flex-col items-center">
      
      {/* Background Gradients & Scanlines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[45vw] h-[45vw] bg-neonBlue rounded-full blur-[140px] opacity-[0.03] mix-blend-screen animate-[pulse_9s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-[#86EFAC] rounded-full blur-[140px] opacity-[0.025] mix-blend-screen animate-[pulse_11s_ease-in-out_infinite]" />
        <div className="absolute inset-0 bg-scanlines opacity-[0.03] pointer-events-none" />
      </div>

      <div className="max-w-[1100px] w-full relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neonBlue mb-4">
            <Briefcase size={12} className="text-neonBlue" />
            <span>// CAREER_TRAJECTORY & PRACTICAL_EXPERIENCE</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] mb-4">
            Work Experience
          </h2>
          
          <p className="text-textMuted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Hands-on software development internships and enterprise data simulations building real-world digital solutions.
          </p>

          {/* Key Metrics / Highlights Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 text-xs font-mono px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_12px_rgba(16,185,129,0.1)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              2 Active Engagements
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-mono px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-neonBlue border border-cyan-500/20">
              <MapPin size={12} /> Remote Working Model
            </span>
            <span className="inline-flex items-center gap-2 text-xs font-mono px-3.5 py-1.5 rounded-full bg-purple-500/10 text-neonPurple border border-purple-500/20">
              <Code2 size={12} /> Full Stack Engineering & Analytics
            </span>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-8 inline-flex p-1 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setFilter('all')}
              className={cn(
                "px-4 py-1.5 text-xs font-medium rounded-lg transition-all",
                filter === 'all' 
                  ? "bg-white/15 text-white shadow-[0_0_12px_rgba(255,255,255,0.2)] font-semibold" 
                  : "text-textMuted hover:text-white"
              )}
            >
              All Experience ({experience.length})
            </button>
            <button
              onClick={() => setFilter('dev')}
              className={cn(
                "px-4 py-1.5 text-xs font-medium rounded-lg transition-all",
                filter === 'dev' 
                  ? "bg-neonBlue/20 text-neonBlue border border-neonBlue/40 shadow-[0_0_12px_rgba(0,229,255,0.2)] font-semibold" 
                  : "text-textMuted hover:text-white"
              )}
            >
              Full Stack Development
            </button>
            <button
              onClick={() => setFilter('data')}
              className={cn(
                "px-4 py-1.5 text-xs font-medium rounded-lg transition-all",
                filter === 'data' 
                  ? "bg-emerald-500/20 text-[#86EFAC] border border-[#86EFAC]/40 shadow-[0_0_12px_rgba(134,239,172,0.2)] font-semibold" 
                  : "text-textMuted hover:text-white"
              )}
            >
              Data Analytics
            </button>
          </div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Glowing Spine */}
          <div className="absolute left-4 md:left-8 top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#86EFAC] via-neonBlue to-neonPurple opacity-30 shadow-[0_0_15px_rgba(0,229,255,0.3)]" />

          <div className="flex flex-col gap-10">
            {filteredExperience.map((item, idx) => {
              const isDeloitte = item.company === 'Deloitte';
              const accentColor = item.accentColor || '#00E5FF';

              return (
                <motion.div
                  key={item.id || idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="relative pl-12 md:pl-20 group"
                >
                  {/* Timeline Glowing Node */}
                  <div className="absolute left-[9px] md:left-[25px] top-7 -translate-x-1/2 flex items-center justify-center">
                    <div 
                      className="w-4 h-4 rounded-full bg-background border-2 transition-all duration-300 group-hover:scale-125"
                      style={{ 
                        borderColor: accentColor,
                        boxShadow: `0 0 12px ${accentColor}`
                      }}
                    />
                    <div 
                      className="absolute w-2 h-2 rounded-full animate-ping opacity-75"
                      style={{ backgroundColor: accentColor }}
                    />
                  </div>

                  {/* Experience Card */}
                  <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-300 shadow-[inset_0_0_20px_rgba(255,255,255,0.02),_0_8px_32px_rgba(0,0,0,0.6)] hover:-translate-y-1 relative overflow-hidden">
                    
                    {/* Top ambient highlight gradient */}
                    <div 
                      className="absolute top-0 right-0 w-80 h-32 rounded-bl-full opacity-10 pointer-events-none transition-opacity group-hover:opacity-20"
                      style={{ background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)` }}
                    />

                    {/* Header Row: Logo, Title, Badges */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                      <div className="flex items-start gap-4">
                        {/* Company Logo Badge */}
                        {isDeloitte ? <DeloitteLogo /> : <SarangiLogo />}

                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-neonBlue transition-colors">
                              {item.role}
                            </h3>
                          </div>

                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-textMuted font-medium">
                            <span className="text-white/90 flex items-center gap-1.5 font-semibold">
                              <Building2 size={14} className="text-textMuted" />
                              {item.company}
                              {item.subCompany && item.subCompany !== item.company && (
                                <span className="text-textMuted font-normal">({item.subCompany})</span>
                              )}
                            </span>
                            <span className="text-white/30">•</span>
                            <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/80 font-mono">
                              {item.type}
                            </span>
                            <span className="text-white/30">•</span>
                            <span className="inline-flex items-center gap-1 text-xs text-textMuted">
                              <MapPin size={12} />
                              {item.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Period Badge & Active Indicator */}
                      <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 flex-shrink-0">
                        <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white shadow-inner">
                          <Calendar size={12} className="text-textMuted" />
                          {item.period}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Active / Present
                        </span>
                      </div>
                    </div>

                    {/* Summary Statement / Intro */}
                    {item.intro ? (
                      <div className="mb-5 p-3.5 rounded-xl bg-neonBlue/5 border-l-2 border-neonBlue text-sm text-white/90 leading-relaxed font-sans">
                        {item.intro}
                      </div>
                    ) : (
                      item.summary && (
                        <p className="text-sm sm:text-base text-textMuted leading-relaxed mb-5">
                          {item.summary}
                        </p>
                      )
                    )}

                    {/* Key Responsibilities / Highlights */}
                    {(item.responsibilities || item.highlights) && (
                      <div className="mt-4 mb-6">
                        <h4 className="text-xs uppercase tracking-widest font-mono text-white/60 mb-3 flex items-center gap-2">
                          {isDeloitte ? (
                            <>
                              <BarChart3 size={13} className="text-[#86EFAC]" />
                              Key Deliverables & Analysis
                            </>
                          ) : (
                            <>
                              <Code2 size={13} className="text-neonBlue" />
                              Key Responsibilities
                            </>
                          )}
                        </h4>
                        
                        <ul className="space-y-2.5">
                          {(item.responsibilities || item.highlights).map((resp, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-3 text-sm text-textMuted/90 leading-relaxed group/item">
                              <span className="mt-1 flex-shrink-0">
                                <CheckCircle2 
                                  size={15} 
                                  className={cn(
                                    "transition-transform group-hover/item:scale-110",
                                    isDeloitte ? "text-[#86EFAC]" : "text-neonBlue"
                                  )} 
                                />
                              </span>
                              <span className="group-hover/item:text-white transition-colors">
                                {resp}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Deloitte Certificate Card Attachment */}
                    {item.certificate && (
                      <CertificateCard 
                        cert={item.certificate} 
                        onClick={() => setSelectedCert(item.certificate)} 
                      />
                    )}

                    {/* Skills & Competencies Footer */}
                    {item.skills && (
                      <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-xs text-textMuted font-mono">
                          <Gem size={14} className={isDeloitte ? "text-[#86EFAC]" : "text-neonBlue"} />
                          <span className="font-semibold text-white/80">Skills & Tech:</span>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {item.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className={cn(
                                "text-xs font-mono px-2.5 py-1 rounded-md transition-all duration-200 cursor-default",
                                isDeloitte 
                                  ? "bg-[#86EFAC]/5 border border-[#86EFAC]/20 text-white/90 hover:border-[#86EFAC]/50 hover:text-[#86EFAC]" 
                                  : "bg-white/5 border border-white/10 text-white/90 hover:border-neonBlue/50 hover:text-neonBlue"
                              )}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Interactive Certificate View Modal */}
      <AnimatePresence>
        {selectedCert && (
          <CertificateModal 
            cert={selectedCert} 
            onClose={() => setSelectedCert(null)} 
          />
        )}
      </AnimatePresence>

    </section>
  );
}
