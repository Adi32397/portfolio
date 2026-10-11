import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { Send, TerminalSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    
    if (
      !SERVICE_ID || 
      !TEMPLATE_ID || 
      !PUBLIC_KEY || 
      SERVICE_ID === 'YOUR_SERVICE_ID'
    ) {
      console.warn("EmailJS credentials not configured in .env. Running in simulation mode.");
      setTimeout(() => setStatus('success'), 1500);
      return;
    }

    const templateParams = {
      name: formData.name,
      from_name: formData.name,
      email: formData.email,
      from_email: formData.email,
      reply_to: formData.email,
      message: formData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => setStatus('success'))
      .catch((err) => {
        console.error("EmailJS transmission error:", err);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-16 min-h-screen flex items-center justify-center bg-secondaryBg/30">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center uppercase tracking-widest font-mono"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple">
            Comm_Terminal
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glassmorphism rounded-xl border border-neonBlue/30 shadow-neon overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="bg-background/80 border-b border-neonBlue/30 px-4 py-3 flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="text-xs font-mono text-neonBlue flex items-center gap-2 mx-auto">
              <TerminalSquare size={14} />
              root@aditya-system:~/contact
            </div>
          </div>

          <div className="p-8">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="text-4xl mb-4 text-green-400 font-mono animate-glitch">
                  TRANSMISSION SUCCESSFUL
                </div>
                <p className="text-textMuted font-mono">
                  Message encrypted and delivered to Aditya.
                </p>
                <button 
                  onClick={() => { setStatus('idle'); setFormData({ name: '', email: '', message: '' }); }}
                  className="mt-8 px-6 py-2 border border-neonBlue text-neonBlue hover:bg-neonBlue/10 transition-colors font-mono uppercase text-sm cursor-none"
                >
                  Initiate New Protocol
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label className="block text-xs font-mono text-textMuted mb-2 uppercase tracking-widest group-focus-within:text-neonBlue transition-colors">
                    Identification (Name)
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-background/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-neonBlue focus:shadow-neon transition-all font-mono"
                    placeholder="Enter designation..."
                  />
                </div>
                <div className="group">
                  <label className="block text-xs font-mono text-textMuted mb-2 uppercase tracking-widest group-focus-within:text-neonBlue transition-colors">
                    Return Coordinates (Email)
                  </label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-background/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-neonBlue focus:shadow-neon transition-all font-mono"
                    placeholder="Enter relay address..."
                  />
                </div>
                <div className="group">
                  <label className="block text-xs font-mono text-textMuted mb-2 uppercase tracking-widest group-focus-within:text-neonBlue transition-colors">
                    Payload (Message)
                  </label>
                  <textarea 
                    required
                    rows="5"
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-background/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-neonBlue focus:shadow-neon transition-all font-mono resize-none"
                    placeholder="Enter transmission data..."
                  />
                </div>
                <button 
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-neonBlue text-background font-bold uppercase tracking-widest font-mono py-4 rounded hover:bg-white transition-colors flex items-center justify-center gap-2 disabled:opacity-50 cursor-none"
                >
                  {status === 'sending' ? 'Encrypting Payload...' : (
                    <>Transmit Data <Send size={18} /></>
                  )}
                </button>
                {status === 'error' && (
                  <p className="text-red-400 font-mono text-center text-sm mt-4">
                    ERROR: Transmission Failed. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
