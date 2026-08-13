import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { TerminalSquare, X } from 'lucide-react';
import { personalInfo, skills, projects } from '../data/portfolioData';
import { cn } from '../utils/cn';

export default function HiddenTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([
    { type: 'system', content: 'ASS_OS Terminal v1.0.0' },
    { type: 'system', content: 'Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const bottomRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl + ` (backtick)
      if (e.ctrlKey && e.key === '`') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, history]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    let response = [];

    switch (trimmed) {
      case 'help':
        response = ['Available commands: help, about, skills, projects, resume, contact, whoami, clear, sudo hire aditya'];
        break;
      case 'about':
        response = [personalInfo.about];
        break;
      case 'skills':
        response = Object.keys(skills).map(category => `${category}: ${skills[category].join(', ')}`);
        break;
      case 'projects':
        response = projects.map(p => `- ${p.title}: ${p.description}`);
        break;
      case 'resume':
        response = ['Downloading resume...', 'Just kidding, click the button in the hero section!'];
        break;
      case 'contact':
        response = [`Email: ${personalInfo.socials.email}`, `GitHub: ${personalInfo.socials.github}`];
        break;
      case 'whoami':
        response = ['guest@ass_os. Are you Aditya? If yes, sudo su.'];
        break;
      case 'sudo hire aditya':
        response = ['Access Granted.', 'Excellent decision.', 'Redirecting to contact form...'];
        setTimeout(() => {
          setIsOpen(false);
          navigate('/contact');
        }, 1500);
        break;
      case 'clear':
        setHistory([]);
        return;
      case '':
        return;
      default:
        response = [`Command not found: ${trimmed}. Type "help" for a list of commands.`];
    }

    setHistory(prev => [
      ...prev, 
      { type: 'user', content: `> ${cmd}` },
      ...response.map(r => ({ type: 'response', content: r }))
    ]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input) return;
    handleCommand(input);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-4 right-4 md:bottom-10 md:right-10 w-[90vw] md:w-[600px] h-[400px] z-[2000] glassmorphism rounded-lg border border-neonBlue shadow-neon flex flex-col overflow-hidden font-mono"
        >
          {/* Header */}
          <div className="bg-secondaryBg border-b border-neonBlue px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2 text-neonBlue text-sm">
              <TerminalSquare size={16} /> ASS_OS Terminal
            </div>
            <button onClick={() => setIsOpen(false)} className="text-textMuted hover:text-red-400 cursor-none">
              <X size={16} />
            </button>
          </div>

          {/* Terminal Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-2 text-sm cursor-text" onClick={() => inputRef.current?.focus()}>
            {history.map((line, idx) => (
              <div 
                key={idx} 
                className={cn(
                  line.type === 'system' ? 'text-neonPurple' : 
                  line.type === 'user' ? 'text-white' : 'text-neonBlue'
                )}
              >
                {line.content}
              </div>
            ))}
            
            <form onSubmit={onSubmit} className="flex items-center gap-2 mt-2">
              <span className="text-green-400">guest@ass_os:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white focus:ring-0 p-0"
                autoFocus
              />
            </form>
            <div ref={bottomRef} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
