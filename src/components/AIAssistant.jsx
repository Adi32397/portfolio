import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: `Hello. I'm ${personalInfo.name}'s AI Assistant. Ask me about Projects, Skills, Experience, Certificates, or Resume.` }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setMessages(prev => [...prev, { type: 'user', text: userMsg }]);
    setInput('');

    // Simple mock logic
    setTimeout(() => {
      const lower = userMsg.toLowerCase();
      let reply = "I'm sorry, I don't understand that yet. Try asking about skills or projects.";
      
      if (lower.includes('civicshield') || lower.includes('mplads') || lower.includes('anomaly')) reply = "CivicShield AI is an intelligent governance monitoring platform for MPLADS public works. It combines financial analytics, Isolation Forest anomaly detection, duplicate project detection, and verification workflows.";
      else if (lower.includes('project')) reply = "Aditya has built several impressive projects including CivicShield AI (MPLADS Anomaly & Risk Detection), Weather-OS, Sarangi Consulting, and Accomodo. Check out the Projects section!";
      else if (lower.includes('skill')) reply = "Aditya specializes in Full Stack Development (React, Node.js, Express, MySQL) and Data Analytics (Data Modeling, Tableau, Excel).";
      else if (lower.includes('experience') || lower.includes('work') || lower.includes('intern')) reply = "Aditya is currently a Full Stack Developer Intern at Sarangi Tech and completed the Data Analytics Job Simulation with Deloitte Australia.";
      else if (lower.includes('deloitte')) reply = "At Deloitte Australia (Job Simulation), Aditya completed practical tasks in Data Analytics, statistical modeling, Tableau visualization, and executive presentations.";
      else if (lower.includes('sarangi')) reply = "At Sarangi Tech (Sarangi Group), Aditya works as a Full Stack Developer Intern, designing responsive web interfaces and developing scalable frontend/backend systems.";
      else if (lower.includes('certificat')) reply = "Aditya holds credentials including the Deloitte Australia Data Analytics Simulation Certificate, Advanced React Patterns, and AWS certifications.";
      else if (lower.includes('resume')) reply = "You can download Aditya's resume from the Hero section or connect via the Contact terminal.";
      else if (lower.includes('contact')) reply = "You can send a message directly from the Contact terminal or connect on LinkedIn and GitHub.";

      setMessages(prev => [...prev, { type: 'bot', text: reply }]);
    }, 1000);
  };

  return (
    <>
      <motion.button
        className="fixed bottom-4 left-4 md:bottom-10 md:left-10 z-[1900] w-14 h-14 rounded-full bg-neonPurple text-white flex items-center justify-center shadow-[0_0_15px_rgba(138,43,226,0.5)] hover:scale-110 transition-transform cursor-none"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? <X size={24} /> : <Bot size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: -50, y: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -50, y: 50 }}
            className="fixed bottom-20 left-4 md:bottom-28 md:left-10 z-[1900] w-[300px] sm:w-[350px] h-[450px] glassmorphism rounded-xl border border-neonPurple flex flex-col overflow-hidden shadow-[0_0_20px_rgba(138,43,226,0.3)]"
          >
            <div className="bg-neonPurple/20 p-4 border-b border-neonPurple flex items-center gap-3">
              <Bot className="text-neonPurple" />
              <h3 className="font-bold text-white font-mono tracking-wider">AI ASSISTANT</h3>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-4 flex flex-col scrollbar-hide">
              {messages.map((msg, idx) => (
                <div 
                  key={idx}
                  className={`max-w-[85%] rounded-lg p-3 text-sm ${
                    msg.type === 'user' 
                      ? 'bg-neonBlue/20 text-white self-end border border-neonBlue/30 rounded-br-none' 
                      : 'bg-white/10 text-textMuted self-start border border-white/20 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <form onSubmit={handleSend} className="p-4 border-t border-white/10 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask me something..."
                className="flex-1 bg-background/50 border border-white/10 rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-neonPurple cursor-none"
              />
              <button 
                type="submit"
                className="w-10 h-10 rounded-full bg-neonPurple flex items-center justify-center text-white hover:bg-neonPurple/80 transition-colors cursor-none"
              >
                <Send size={16} className="-ml-0.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
