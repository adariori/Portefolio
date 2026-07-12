import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Send, MessageSquare } from 'lucide-react';
import { PROFILE } from '../data';


export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact depuis le portfolio — ${name || 'visiteur'}`);
    const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
    window.location.href = `mailto:${PROFILE.contact.email}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-accent-light/50 focus:bg-white/[0.07] transition-colors';
  const labelClass = 'block text-xs font-mono uppercase tracking-widest text-white/40 mb-2';

  return (
    <section className="mt-16 sm:mt-24">
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-4 mb-6 sm:mb-10"
      >
        <div aria-hidden className="h-10 w-10 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
          <MessageSquare size={20} />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-accent-light/20 font-outline">Contact</h2>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="bg-card-dark rounded-xl border border-white/5 p-5 sm:p-8 space-y-5 max-w-2xl shadow-2xl"
      >
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="contact-name" className={labelClass}>Nom</label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ton nom"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="contact-email" className={labelClass}>Email</label>
            <input
              id="contact-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ton@email.com"
              className={inputClass}
            />
          </div>
        </div>
        <div>
          <label htmlFor="contact-message" className={labelClass}>Message</label>
          <textarea
            id="contact-message"
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ton message..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-1">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-lg transition-colors"
          >
            <Send aria-hidden size={16} />
            Envoyer
          </motion.button>
        </div>
      </motion.form>
    </section>
  );
}
