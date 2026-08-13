import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

export default function HudFrame({ children, title, subtitle, className, color = "neonBlue" }) {
  const borderColorClass = color === "neonBlue" ? "border-neonBlue" : color === "neonPurple" ? "border-neonPurple" : "border-electricPink";
  const textColorClass = color === "neonBlue" ? "text-neonBlue" : color === "neonPurple" ? "text-neonPurple" : "text-electricPink";
  const glowClass = color === "neonBlue" ? "shadow-neon-cyan-heavy" : color === "neonPurple" ? "shadow-neon-purple" : "shadow-neon-pink-heavy";

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn("relative p-1", className)}
    >
      {/* Corner Brackets */}
      <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 ${borderColorClass} pointer-events-none`} />
      <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 ${borderColorClass} pointer-events-none`} />
      <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 ${borderColorClass} pointer-events-none`} />
      <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 ${borderColorClass} pointer-events-none`} />

      {/* Decorative Labels */}
      {title && (
        <div className={`absolute -top-3 left-4 bg-background px-2 font-mono text-[10px] uppercase tracking-widest ${textColorClass} flex items-center gap-2 pointer-events-none z-10`}>
          <div className={`w-1.5 h-1.5 bg-current rounded-full animate-pulse`} />
          {title}
        </div>
      )}
      {subtitle && (
        <div className={`absolute -bottom-2 right-4 bg-background px-2 font-mono text-[9px] uppercase tracking-widest text-textMuted pointer-events-none z-10`}>
          {subtitle}
        </div>
      )}
      <div className="absolute top-1/2 -left-1.5 w-3 h-8 border border-white/20 bg-background/50 pointer-events-none -translate-y-1/2 flex items-center justify-center flex-col gap-0.5">
          <div className="w-1 h-1 bg-white/30 rounded-full" />
          <div className="w-1 h-1 bg-white/30 rounded-full" />
      </div>

      {/* Inner Container */}
      <div className={cn("relative w-full h-full glassmorphism rounded-lg overflow-hidden group", glowClass)}>
        <div className="absolute inset-0 bg-scanlines opacity-30 pointer-events-none mix-blend-overlay" />
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
