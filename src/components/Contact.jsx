import { socials as socialProfiles } from '../data/socials.js'
import { useState } from 'react'
import { motion } from 'motion/react'
import {
  Instagram,
  Linkedin,
  Github,
  ArrowUpRight,
  Send,
  Mail,
} from 'lucide-react'

import Section from './Section.jsx'
import { usePrefs } from '../hooks/usePrefs.jsx'

// Ganti dengan alamat email aktif kamu
const CONTACT_EMAIL = 'your-email@example.com'

// Ganti username dan URL profil dengan akun milikmu
const socials = [
  {
    name: 'Instagram',
    username: '@yad_zs',
    url: 'https://instagram.com/yad_zs',
    icon: Instagram,
    hover: 'hover:border-pink-500/60 hover:text-pink-500',
  },
  {
    name: 'LinkedIn',
    username: 'linkedin.com/in/ziyadmuhammadzs',
    url: 'https://linkedin.com/in/ziyadmuhammadzs',
    icon: Linkedin,
    hover: 'hover:border-[#0A66C2]/70 hover:text-[#0A66C2]',
  },
  {
    name: 'GitHub',
    username: 'github.com/yadd1',
    url: 'https://github.com/yadd1',
    icon: Github,
    hover: 'hover:border-gray-400/60 hover:text-gray-400',
  },
]

export default function Contact() {
  const { lang } = usePrefs()
  const [form, setForm] = useState({
    email: '',
    subject: '',
    message: '',
  })

  const isId = lang === 'id'

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(form.subject)

    const body = encodeURIComponent(
      `Email pengirim: ${form.email}\n\nPesan:\n${form.message}`
    )

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  const updateForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const inputClass =
    'w-full rounded-xl border border-border bg-surface-raised px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-fg-muted focus:border-accent'

  return (
    <Section
      id="contact"
      title="LET'S CONNECT"
      animateTitle
    >
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-fg-muted sm:text-base">
          {isId
            ? 'Punya ide, peluang, atau sekadar ingin berdiskusi? Jangan ragu untuk menghubungi saya.'
            : "Have an idea, an opportunity, or just want to talk? Feel free to reach out."}
        </p>
      </div>

      {/* Contact Form dan Social Profiles tetap seperti sebelumnya */}

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-surface-raised p-5 sm:p-7"
        >
          <div className="mb-7">
            <h3 className="font-display text-2xl font-semibold">
              {isId ? 'Kirim Pesan' : 'Drop a Message'}
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid gap-2">
              <label htmlFor="contact-email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={form.email}
                onChange={updateForm}
                placeholder="your@email.com"
                className={inputClass}
                required
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="contact-subject" className="text-sm font-medium">
                {isId ? 'Subjek' : 'Subject'}
              </label>
              <input
                id="contact-subject"
                name="subject"
                value={form.subject}
                onChange={updateForm}
                placeholder={isId ? 'Topik pesan' : 'Message subject'}
                className={inputClass}
                required
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="contact-message" className="text-sm font-medium">
                {isId ? 'Pesan' : 'Message'}
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={updateForm}
                placeholder={
                  isId ? 'Tulis pesan kamu di sini...' : 'Write your message here...'
                }
                rows={5}
                className={`${inputClass} resize-y`}
                required
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
            >
              {isId ? 'Kirim Pesan' : 'Send Message'}
              <Send size={16} />
            </button>
          </form>
        </motion.div>

        {/* Social Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="flex flex-col"
        >
          <div className="mb-7">

            <h3 className="mt-3 font-display text-2xl font-semibold">
              {isId ? 'Temukan Saya' : 'Find Me Online'}
            </h3>

            <p className="mt-2 text-sm text-fg-muted">
              {isId
                ? 'Kunjungi profil saya di platform berikut.'
                : 'Feel free to connect with me on these platforms.'}
            </p>
          </div>

          <div className="grid gap-4">
            {socials.map((social, index) => {
              const Icon = social.icon

              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className={`group flex items-center gap-4 rounded-2xl border border-border bg-surface-raised p-4 transition-colors duration-300 ${social.hover}`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-bg-secondary">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold">{social.name}</h4>
                    <p className="mt-1 truncate text-xs text-fg-muted">
                      {social.username}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-fg-muted transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-current"
                  />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
