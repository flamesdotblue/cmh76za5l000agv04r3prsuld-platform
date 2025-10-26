import { motion } from 'framer-motion';

export default function ContactFooter() {
  return (
    <div>
      <Contact />
      <Footer />
    </div>
  );
}

function Contact() {
  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:pavan@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Contact</h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 max-w-2xl">Have a project or opportunity in mind? Let's build something remarkable.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <motion.form initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} onSubmit={onSubmit} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-6">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm text-slate-600 dark:text-slate-300 mb-1" htmlFor="name">Name</label>
                <input id="name" name="name" required className="w-full rounded-xl border border-slate-300/60 dark:border-white/10 bg-white/80 dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 dark:text-slate-300 mb-1" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required className="w-full rounded-xl border border-slate-300/60 dark:border-white/10 bg-white/80 dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 dark:text-slate-300 mb-1" htmlFor="message">Message</label>
                <textarea id="message" name="message" required rows={5} className="w-full rounded-xl border border-slate-300/60 dark:border-white/10 bg-white/80 dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Tell me about your project" />
              </div>
              <div className="flex items-center gap-3">
                <button type="submit" className="inline-flex items-center rounded-xl bg-emerald-500 px-5 py-3 font-medium text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400">Send Message</button>
                <span className="text-sm text-slate-500 dark:text-slate-400">This opens your email client.</span>
              </div>
            </div>
          </motion.form>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Let's connect</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">I’m open to freelance, full-time, and collaboration opportunities. Reach out and I’ll respond quickly.</p>
            <div className="mt-6 space-y-2 text-slate-700 dark:text-slate-300">
              <p>Email: <a href="mailto:pavan@example.com" className="text-emerald-600 dark:text-emerald-300 hover:underline">pavan@example.com</a></p>
              <p>Location: Remote / Open to Relocation</p>
              <p>Timezone: IST (UTC+5:30)</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-600 dark:text-slate-400">Built with 💙 by Pavan</p>
          <div className="text-xs text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Pavan. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
