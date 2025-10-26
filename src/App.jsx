import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import ContactFooter from './components/ContactFooter';

export default function App() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return true;
    return localStorage.getItem('theme') === 'dark' || (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    document.title = 'Pavan | Full Stack Developer';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Pavan is a Full Stack Developer crafting scalable, responsive web experiences with React, Node.js, Express, and MongoDB. Explore projects, skills, and get in touch.');
    } else {
      const m = document.createElement('meta');
      m.name = 'description';
      m.content = 'Pavan is a Full Stack Developer crafting scalable, responsive web experiences with React, Node.js, Express, and MongoDB. Explore projects, skills, and get in touch.';
      document.head.appendChild(m);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-black text-slate-800 dark:text-slate-100 scroll-smooth">
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <Sections />
        <ContactFooter />
      </main>
    </div>
  );
}
