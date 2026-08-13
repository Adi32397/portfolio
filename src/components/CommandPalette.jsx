import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';
import { cn } from '../utils/cn';

const commands = [
  { id: 'home', name: 'Go to Home', href: '/', category: 'Navigation' },
  { id: 'about', name: 'Go to About', href: '/about', category: 'Navigation' },
  { id: 'education', name: 'Go to Education', href: '/education', category: 'Navigation' },
  { id: 'skills', name: 'Go to Skills', href: '/skills', category: 'Navigation' },
  { id: 'projects', name: 'Go to Projects', href: '/projects', category: 'Navigation' },
  { id: 'experience', name: 'Go to Experience', href: '/experience', category: 'Navigation' },
  { id: 'certificates', name: 'Go to Certificates', href: '/certificates', category: 'Navigation' },
  { id: 'contact', name: 'Go to Contact', href: '/contact', category: 'Navigation' },
  { id: 'resume', name: 'Download Resume', action: () => alert('Downloading...'), category: 'Actions' },
  { id: 'github', name: 'Visit GitHub', action: () => window.open('https://github.com', '_blank'), category: 'Social' },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl + K
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredCommands = commands.filter(cmd => 
    cmd.name.toLowerCase().includes(query.toLowerCase()) || 
    cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => (prev + 1) % filteredCommands.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const cmd = filteredCommands[activeIndex];
      if (cmd) {
        executeCommand(cmd);
      }
    }
  };

  const executeCommand = (cmd) => {
    if (cmd.href) {
      navigate(cmd.href);
    } else if (cmd.action) {
      cmd.action();
    }
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[3000] bg-background/80 backdrop-blur-sm flex items-start justify-center pt-32 p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: -20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: -20, opacity: 0 }}
            className="glassmorphism w-full max-w-2xl rounded-xl border border-neonBlue/50 shadow-neon overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center px-4 py-3 border-b border-white/10">
              <Search className="text-neonBlue mr-3" size={20} />
              <input 
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent border-none outline-none text-white text-lg font-mono placeholder:text-textMuted cursor-none"
              />
              <span className="text-xs text-textMuted font-mono px-2 py-1 bg-white/5 rounded">ESC</span>
            </div>

            <div className="max-h-80 overflow-y-auto p-2">
              {filteredCommands.length > 0 ? (
                Object.entries(
                  filteredCommands.reduce((acc, cmd) => {
                    if (!acc[cmd.category]) acc[cmd.category] = [];
                    acc[cmd.category].push(cmd);
                    return acc;
                  }, {})
                ).map(([category, cmds]) => (
                  <div key={category} className="mb-2">
                    <div className="px-3 py-2 text-xs font-mono text-neonBlue uppercase tracking-wider">
                      {category}
                    </div>
                    {cmds.map(cmd => {
                      const globalIndex = filteredCommands.findIndex(c => c.id === cmd.id);
                      const isActive = globalIndex === activeIndex;
                      return (
                        <div
                          key={cmd.id}
                          className={cn(
                            "flex items-center justify-between px-3 py-3 rounded cursor-pointer transition-colors font-mono",
                            isActive ? "bg-neonBlue/20 text-white" : "text-textMuted hover:bg-white/5 hover:text-white"
                          )}
                          onClick={() => executeCommand(cmd)}
                          onMouseEnter={() => setActiveIndex(globalIndex)}
                        >
                          <span>{cmd.name}</span>
                          {isActive && <ChevronRight size={16} className="text-neonBlue" />}
                        </div>
                      );
                    })}
                  </div>
                ))
              ) : (
                <div className="py-12 text-center text-textMuted font-mono">
                  No commands found.
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
