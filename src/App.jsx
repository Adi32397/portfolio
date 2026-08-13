import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Background3D from './three/Background3D';
import Dashboard from './sections/Dashboard';
import About from './sections/About';
import Skills from './sections/Skills';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import CommandPalette from './components/CommandPalette';
import HiddenTerminal from './components/HiddenTerminal';
import AIAssistant from './components/AIAssistant';
import PageTransition from './components/PageTransition';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="relative w-full min-h-screen font-sans selection:bg-neonBlue/30 selection:text-neonBlue flex flex-col">
      <CustomCursor />
      <Background3D />
      <Navbar />
      
      <main className="relative z-10 w-full flex-1 pt-16 overflow-hidden">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <PageTransition>
                <Dashboard />
              </PageTransition>
            } />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/education" element={<PageTransition><Education /></PageTransition>} />
            <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
            <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
            <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
            <Route path="/certificates" element={<PageTransition><Certificates /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer />
      
      {/* Interactive Global Components */}
      <CommandPalette />
      <HiddenTerminal />
      <AIAssistant />
    </div>
  );
}

export default App;
