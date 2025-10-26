import { useEffect, useState } from 'react';
import { Sun, Moon, Github, Linkedin, Mail } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(false);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-slate-200/50 bg-white/60 dark:border-white/10 dark:bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-white/10 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <button onClick={() => scrollTo('home')} className="font-semibold tracking-tight text-slate-900 dark:text-white text-lg">Pavan<span className="text-emerald-500">.</span></button>
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((n) => (
                <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                  {n.label}
                </button>
              ))}
              <div className="h-5 w-px bg-slate-300/60 dark:bg-white/20" />
              <div className="flex items-center gap-3">
                <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="mailto:pavan@example.com" aria-label="Email" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                  <Mail size={18} />
                </a>
                <button onClick={() => setDark((d) => !d)} aria-label="Toggle theme" className="p-2 rounded-lg bg-slate-100/80 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors">
                  {dark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
            </nav>
            <button className="md:hidden p-2 rounded-lg bg-slate-100/80 dark:bg-white/10" onClick={() => setOpen((o) => !o)} aria-label="Menu">
              <div className="space-y-1">
                <span className="block h-0.5 w-6 bg-slate-800 dark:bg-white" />
                <span className="block h-0.5 w-6 bg-slate-800 dark:bg-white" />
                <span className="block h-0.5 w-6 bg-slate-800 dark:bg-white" />
              </div>
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="flex flex-col gap-2">
                {navItems.map((n) => (
                  <button key={n.id} onClick={() => { scrollTo(n.id); setOpen(false); }} className="px-3 py-2 rounded-lg text-left hover:bg-slate-100 dark:hover:bg-white/10">
                    {n.label}
                  </button>
                ))}
                <div className="flex items-center gap-3 pt-2">
                  <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                    <Github size={18} />
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href="mailto:pavan@example.com" aria-label="Email" className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 transition-colors">
                    <Mail size={18} />
                  </a>
                  <button onClick={() => setDark((d) => !d)} aria-label="Toggle theme" className="p-2 rounded-lg bg-slate-100/80 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-colors">
                    {dark ? <Sun size={18} /> : <Moon size={18} />}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
