import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("SYSTEM STANDBY. CLICK TO INITIALIZE.");
  const [hasStarted, setHasStarted] = useState(false);
  const audioCtxRef = useRef(null);

  useEffect(() => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioCtxRef.current = new AudioContext();
    } catch (e) {
      console.warn("Web Audio API not supported", e);
    }
    
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  const handleStart = () => {
    if (hasStarted) return;
    setHasStarted(true);
    setStatus("INITIALISING SYSTEM...");

    if (audioCtxRef.current) {
      try {
        const ctx = audioCtxRef.current;
        if (ctx.state === 'suspended') ctx.resume();

        const t = ctx.currentTime;
        const mainGain = ctx.createGain();
        mainGain.connect(ctx.destination);
        
        mainGain.gain.setValueAtTime(1, t);
        mainGain.gain.setValueAtTime(1, t + 4.5);
        mainGain.gain.linearRampToValueAtTime(0, t + 5.5);

        // 0.0s - Soft electronic power-on hum
        const humOsc = ctx.createOscillator();
        const humGain = ctx.createGain();
        humOsc.type = 'sine';
        humOsc.frequency.setValueAtTime(55, t); 
        humGain.gain.setValueAtTime(0, t);
        humGain.gain.linearRampToValueAtTime(0.3, t + 0.5);
        humGain.gain.setValueAtTime(0.3, t + 4.5);
        humGain.gain.linearRampToValueAtTime(0, t + 5.0);
        humOsc.connect(humGain).connect(mainGain);
        humOsc.start(t);
        humOsc.stop(t + 5.0);

        // 0.5s - Subtle digital boot-up tone
        const bootOsc = ctx.createOscillator();
        const bootGain = ctx.createGain();
        bootOsc.type = 'sine';
        bootOsc.frequency.setValueAtTime(440, t + 0.5);
        bootGain.gain.setValueAtTime(0, t + 0.5);
        bootGain.gain.linearRampToValueAtTime(0.15, t + 0.6);
        bootGain.gain.exponentialRampToValueAtTime(0.001, t + 1.2);
        bootOsc.connect(bootGain).connect(mainGain);
        bootOsc.start(t + 0.5);
        bootOsc.stop(t + 1.2);

        // 1.2s - Holographic scanning sweep (L to R)
        const bufferSize = ctx.sampleRate * 0.7;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }
        const noiseSource = ctx.createBufferSource();
        noiseSource.buffer = buffer;
        const noiseFilter = ctx.createBiquadFilter();
        noiseFilter.type = 'bandpass';
        noiseFilter.Q.value = 15;
        noiseFilter.frequency.setValueAtTime(300, t + 1.2);
        noiseFilter.frequency.exponentialRampToValueAtTime(4000, t + 1.9);
        
        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(0, t + 1.2);
        noiseGain.gain.linearRampToValueAtTime(0.2, t + 1.5);
        noiseGain.gain.linearRampToValueAtTime(0, t + 1.9);

        const panner = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
        if (panner) {
            panner.pan.setValueAtTime(-1, t + 1.2);
            panner.pan.linearRampToValueAtTime(1, t + 1.9);
            noiseSource.connect(noiseFilter).connect(noiseGain).connect(panner).connect(mainGain);
        } else {
            noiseSource.connect(noiseFilter).connect(noiseGain).connect(mainGain);
        }
        noiseSource.start(t + 1.2);
        noiseSource.stop(t + 1.9);

        // 2.0s - Quiet electronic data-processing pulses
        const pulseOsc = ctx.createOscillator();
        const pulseGain = ctx.createGain();
        pulseOsc.type = 'square';
        pulseGain.gain.setValueAtTime(0, t + 2.0);
        for(let i=0; i<8; i++) {
            const time = t + 2.0 + (i * 0.1);
            pulseGain.gain.setValueAtTime(0.06, time);
            pulseGain.gain.setValueAtTime(0, time + 0.05);
            pulseOsc.frequency.setValueAtTime(1200 + Math.random()*800, time);
        }
        pulseOsc.connect(pulseGain).connect(mainGain);
        pulseOsc.start(t + 2.0);
        pulseOsc.stop(t + 2.8);

        // 2.8s - Light neural-network activation sound
        const neuralOsc1 = ctx.createOscillator();
        const neuralOsc2 = ctx.createOscillator();
        const neuralGain = ctx.createGain();
        neuralOsc1.type = 'sine';
        neuralOsc2.type = 'sine';
        neuralOsc1.frequency.setValueAtTime(600, t + 2.8);
        neuralOsc2.frequency.setValueAtTime(615, t + 2.8); 
        neuralOsc1.frequency.exponentialRampToValueAtTime(1200, t + 3.2);
        neuralOsc2.frequency.exponentialRampToValueAtTime(1225, t + 3.2);
        
        neuralGain.gain.setValueAtTime(0, t + 2.8);
        neuralGain.gain.linearRampToValueAtTime(0.12, t + 3.0);
        neuralGain.gain.linearRampToValueAtTime(0, t + 3.4);
        
        neuralOsc1.connect(neuralGain);
        neuralOsc2.connect(neuralGain);
        neuralGain.connect(mainGain);
        neuralOsc1.start(t + 2.8);
        neuralOsc2.start(t + 2.8);
        neuralOsc1.stop(t + 3.4);
        neuralOsc2.stop(t + 3.4);

        // 3.4s - Soft digital confirmation pulse
        const confPulseOsc = ctx.createOscillator();
        const confPulseGain = ctx.createGain();
        confPulseOsc.type = 'sine';
        confPulseOsc.frequency.setValueAtTime(1400, t + 3.4);
        confPulseGain.gain.setValueAtTime(0, t + 3.4);
        confPulseGain.gain.linearRampToValueAtTime(0.18, t + 3.45);
        confPulseGain.gain.exponentialRampToValueAtTime(0.001, t + 3.8);
        confPulseOsc.connect(confPulseGain).connect(mainGain);
        confPulseOsc.start(t + 3.4);
        confPulseOsc.stop(t + 3.8);

        // 4.0s - Premium "System Online" confirmation chime
        const chimeOsc1 = ctx.createOscillator();
        const chimeOsc2 = ctx.createOscillator();
        const chimeOsc3 = ctx.createOscillator();
        const chimeGain = ctx.createGain();
        
        chimeOsc1.type = 'sine';
        chimeOsc2.type = 'sine';
        chimeOsc3.type = 'sine';
        
        chimeOsc1.frequency.setValueAtTime(523.25, t + 4.0);
        chimeOsc2.frequency.setValueAtTime(783.99, t + 4.0);
        chimeOsc3.frequency.setValueAtTime(987.77, t + 4.0);
        
        chimeGain.gain.setValueAtTime(0, t + 4.0);
        chimeGain.gain.linearRampToValueAtTime(0.4, t + 4.05);
        chimeGain.gain.exponentialRampToValueAtTime(0.001, t + 6.0);
        
        chimeOsc1.connect(chimeGain);
        chimeOsc2.connect(chimeGain);
        chimeOsc3.connect(chimeGain);
        chimeGain.connect(mainGain);
        
        chimeOsc1.start(t + 4.0);
        chimeOsc2.start(t + 4.0);
        chimeOsc3.start(t + 4.0);
        chimeOsc1.stop(t + 6.0);
        chimeOsc2.stop(t + 6.0);
        chimeOsc3.stop(t + 6.0);

      } catch (e) {
        console.warn("Cinematic audio playback failed", e);
      }
    }

    setTimeout(() => setStatus("AUTHENTICATING..."), 1200);
    setTimeout(() => setStatus("LOADING CORE MODULES..."), 2400);
    setTimeout(() => setStatus("AI SYSTEM READY"), 4000);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 1500); // Wait 1.5s after 100% to let the chime ring and text show
          return 100;
        }
        // Slow down progress significantly (1 to 3% per 100ms) to take ~4 seconds
        return prev + Math.floor(Math.random() * 3) + 1;
      });
    }, 100);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center font-mono text-neonBlue cursor-pointer"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        onClick={handleStart}
      >
        {!hasStarted && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute top-1/4 text-sm text-neonBlue/70 tracking-widest"
          >
            AWAITING USER INPUT
          </motion.div>
        )}

        <div className={`text-xl md:text-3xl mb-8 ${hasStarted ? 'animate-glitch' : ''} tracking-widest text-center px-4 uppercase font-semibold`}>
          {status}
        </div>
        
        {hasStarted && (
          <>
            <div className="w-64 md:w-96 h-2 bg-secondaryBg rounded-full overflow-hidden border border-neonBlue/30 relative shadow-[0_0_15px_rgba(0,229,255,0.2)]">
              <motion.div
                className="h-full bg-neonBlue"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ type: "tween", ease: "linear", duration: 0.1 }}
              />
            </div>
            <div className="mt-4 text-sm text-textMuted font-mono">
              {Math.min(progress, 100)}%
            </div>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
