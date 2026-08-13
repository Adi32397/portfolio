import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from '../components/Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neonBlue/20 bg-background/80 backdrop-blur-md relative z-10">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <div className="text-xl font-bold font-mono tracking-wider text-white neon-text-blue mb-2">
            ASS_OS<span className="animate-pulse">_</span>
          </div>
          <p className="text-sm text-textMuted">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All systems operational.
          </p>
        </div>

        <div className="flex gap-4">
          <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-neonBlue/20 text-textMuted hover:text-neonBlue transition-colors border border-transparent hover:border-neonBlue/50 cursor-none">
            <Github size={20} />
          </a>
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full hover:bg-neonBlue/20 text-textMuted hover:text-neonBlue transition-colors border border-transparent hover:border-neonBlue/50 cursor-none">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${personalInfo.socials.email}`} className="p-2 bg-white/5 rounded-full hover:bg-neonBlue/20 text-textMuted hover:text-neonBlue transition-colors border border-transparent hover:border-neonBlue/50 cursor-none">
            <Mail size={20} />
          </a>
        </div>

        <button 
          onClick={scrollToTop}
          className="group flex items-center justify-center w-12 h-12 rounded-full border border-neonBlue/30 hover:border-neonBlue bg-neonBlue/5 hover:bg-neonBlue/20 transition-all text-neonBlue cursor-none"
        >
          <ArrowUp className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
