import { motion } from 'framer-motion';
import { ExternalLink, Download } from 'lucide-react';
import resumePdf from '../assets/resume.pdf';

const Container = ({ id, title, children, subtitle }) => (
  <section id={id} className="relative py-20">
    <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent pointer-events-none" />
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{title}</h2>
        {subtitle && <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl">{subtitle}</p>}
      </div>
      {children}
    </div>
  </section>
);

export default function Sections() {
  return (
    <div>
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Blog />
    </div>
  );
}

function About() {
  return (
    <Container id="about" title="About Me" subtitle="Passionate Full Stack Developer crafting responsive, high-performance web apps.">
      <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
          I'm Pavan, a Full Stack Developer focused on building scalable, maintainable, and delightful web experiences. I specialize in the MERN stack — React, Node.js, Express, and MongoDB — with a strong emphasis on clean code, performance, and accessibility. I love learning new technologies and solving real-world problems with elegant solutions.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-6">
          <ul className="space-y-3 text-slate-700 dark:text-slate-300">
            <li>• Writing clean, maintainable code</li>
            <li>• Ship fast with thoughtful UX</li>
            <li>• Tools-first mindset and automation</li>
            <li>• Collaboration, documentation, and mentoring</li>
          </ul>
        </motion.div>
      </div>
    </Container>
  );
}

function Skills() {
  const sections = [
    { title: 'Frontend', items: ['React', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'] },
    { title: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'MySQL'] },
    { title: 'Tools', items: ['Git', 'Postman', 'Docker', 'Vercel'] },
  ];

  return (
    <Container id="skills" title="Skills" subtitle="A balanced toolkit across frontend, backend, and DevOps.">
      <div className="grid gap-6 md:grid-cols-3">
        {sections.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{s.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span key={item} className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-600 dark:text-emerald-300">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}

function Projects() {
  const projects = [
    {
      name: 'NovaTasks',
      desc: 'A collaborative task manager with real-time updates and Kanban boards.',
      tech: ['React', 'Node', 'Express', 'MongoDB'],
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
      demo: 'https://example.com',
    },
    {
      name: 'CommerceX',
      desc: 'Headless e-commerce storefront with secure checkout and admin analytics.',
      tech: ['Next.js', 'Tailwind', 'Stripe', 'PostgreSQL'],
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
      demo: 'https://example.com',
    },
    {
      name: 'InsightDash',
      desc: 'Analytics dashboard with role-based access and data visualizations.',
      tech: ['Vite', 'React', 'Express', 'MongoDB'],
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      demo: 'https://example.com',
    },
    {
      name: 'DevBlog',
      desc: 'Markdown-powered blog with full-text search and light/dark themes.',
      tech: ['React', 'Node', 'SQLite'],
      img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
      demo: 'https://example.com',
    },
  ];

  return (
    <Container id="projects" title="Projects" subtitle="A selection of recent builds that balance performance and polish.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div key={p.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur shadow hover:shadow-emerald-500/20">
            <div className="relative h-52 overflow-hidden">
              <img src={p.img} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.name}</h3>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{p.desc}</p>
                </div>
                <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-3 py-1.5 text-emerald-600 dark:text-emerald-300 hover:bg-emerald-500/20">
                  Live <ExternalLink size={16} />
                </a>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-white/70 dark:bg-white/10 border border-slate-200 dark:border-white/10 px-2 py-1 text-slate-700 dark:text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}

function Resume() {
  return (
    <Container id="resume" title="Resume" subtitle="Prefer a PDF? Download a concise overview of my experience and skills.">
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Pavan — Full Stack Developer</h3>
          <p className="mt-1 text-slate-600 dark:text-slate-400">React • Node.js • Express • MongoDB • Tailwind CSS • Docker</p>
        </div>
        <a href={resumePdf} download="Pavan_Resume.pdf" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 font-medium text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400">
          <Download size={18} /> Download Resume (PDF)
        </a>
      </div>
    </Container>
  );
}

function Blog() {
  const posts = [
    {
      title: 'Optimizing React Apps: 12 Practical Techniques',
      excerpt: 'From memoization to code-splitting, here are field-tested patterns to keep your UI snappy.',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
      link: '#',
    },
    {
      title: 'API Design Fundamentals with Express',
      excerpt: 'Principles for building resilient, secure APIs with expressive error handling and tests.',
      img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
      link: '#',
    },
  ];

  return (
    <Container id="blog" title="Blog" subtitle="Occasional notes on building fast and friendly software.">
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post, i) => (
          <motion.a key={post.title} href={post.link} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="block overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur hover:shadow">
            <div className="h-44 overflow-hidden">
              <img src={post.img} alt={post.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{post.title}</h3>
              <p className="mt-1 text-slate-600 dark:text-slate-400">{post.excerpt}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </Container>
  );
}
