import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import emailjs from '@emailjs/browser';
import { Send, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react';
import { PROFILE } from '../data';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

type SubmitStatus = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // No EmailJS keys configured (e.g. local dev without .env) — fall back to
    // the mailto link so the form still works end to end.
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      const subject = encodeURIComponent(`Contact depuis le portfolio — ${name || 'visiteur'}`);
      const body = encodeURIComponent(`${message}\n\n—\n${name}\n${email}`);
      window.location.href = `mailto:${PROFILE.contact.email}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { name, email, message, to_email: PROFILE.contact.email },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('sent');
      setName('');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-accent-light/50 focus:bg-white/[0.07] transition-colors';
  const labelClass = 'block text-xs font-mono uppercase tracking-widest text-white/40 mb-2';

  return (
    <section id="contact" className="mt-16 sm:mt-24 scroll-mt-8">
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

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mb-6 sm:mb-8"
      >
        <p className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent mb-3">
          <span className={`h-2 w-2 rounded-full ${PROFILE.available ? 'bg-emerald-400 animate-pulse' : 'bg-white/30'}`} />
          {PROFILE.available ? 'Disponible pour de nouveaux projets' : 'Actuellement indisponible'}
        </p>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Travaillons ensemble</h3>
        <p className="text-white/60 text-sm sm:text-base leading-relaxed">
          Un projet web, un stage ou une collaboration ? Discutons-en — laissez-moi un message ou écrivez-moi directement.
        </p>
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
              placeholder="Votre nom"
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
              placeholder="votre@email.com"
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
            placeholder="Votre message..."
            className={`${inputClass} resize-none`}
          />
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-1">
          <motion.button
            type="submit"
            disabled={status === 'sending'}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="flex items-center gap-2 bg-accent hover:bg-accent-light disabled:opacity-60 disabled:pointer-events-none text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-lg transition-colors"
          >
            <Send aria-hidden size={16} />
            {status === 'sending' ? 'Envoi...' : 'Envoyer'}
          </motion.button>

          <AnimatePresence mode="wait">
            {status === 'sent' && (
              <motion.p
                key="sent"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-1.5 text-emerald-400 text-xs sm:text-sm"
              >
                <CheckCircle2 aria-hidden size={16} />
                Message envoyé, merci !
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                key="error"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-1.5 text-red-400 text-xs sm:text-sm"
              >
                <AlertCircle aria-hidden size={16} />
                Échec de l'envoi, réessayez ou écrivez à {PROFILE.contact.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.form>
    </section>
  );
}
