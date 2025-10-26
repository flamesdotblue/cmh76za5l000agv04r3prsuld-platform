import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] min-h-[640px] w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(16,185,129,0.25),transparent_60%)]" />
      </div>
      <div className="relative z-10 h-full">
        <div className="mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-[1.4fr_1fr]">
            <div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                Hi, I'm Pavan
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }} className="mt-4 max-w-xl text-lg sm:text-xl text-slate-200">
                Building scalable web experiences with code & creativity
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="mt-6 flex items-center gap-4">
                <a href="#projects" className="rounded-xl bg-emerald-500 text-white px-5 py-3 font-medium shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition-colors">
                  Explore Projects
                </a>
                <div className="flex items-center gap-2">
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white/90 backdrop-blur hover:bg-white/20">
                    <Github size={18} /> GitHub
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white/90 backdrop-blur hover:bg-white/20">
                    <Linkedin size={18} /> LinkedIn
                  </a>
                  <a href="mailto:pavan@example.com" className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white/90 backdrop-blur hover:bg-white/20">
                    <Mail size={18} /> Email
                  </a>
                </div>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="justify-self-center">
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-400 opacity-70 blur-lg" />
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop" alt="Pavan portrait" className="relative rounded-full ring-4 ring-white/30 border border-white/20 shadow-2xl object-cover w-full h-full" />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70">
          <a href="#about" className="flex flex-col items-center text-sm">
            <span>Scroll</span>
            <ChevronDown className="mt-1 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
