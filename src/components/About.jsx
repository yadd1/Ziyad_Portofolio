import { motion, useReducedMotion } from 'motion/react'
import { GraduationCap, Compass, Gamepad2, Sparkles } from 'lucide-react'
import Section from './Section.jsx'
import { usePrefs } from '../hooks/usePrefs.jsx'
import { profile } from '../data/profile.js'


function Card({ icon: Icon, title, children, i }) {
  const reduce = useReducedMotion()

  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        delay: 0.9 + (i % 3) * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div
        className="float-card mx-auto w-full max-w-[260px] rounded-card border border-border bg-surface-raised px-3 py-3 text-center shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift sm:px-4 sm:py-3.5"
        style={{
          '--float-d': `${3.4 + (i % 3) * 0.7}s`,
          '--float-delay': `${i * -0.8}s`,
          '--float-y': `${i % 2 ? 5 : 7}px`,
        }}
      >
        <Icon className="mx-auto text-accent" size={21} aria-hidden="true" />
        <h3 className="mt-1.5 font-sans text-base font-semibold">
          {title}
        </h3>
        <div className="mt-1 text-sm leading-5 text-fg-muted">
          {children}
        </div>
      </div>
    </motion.li>
  )
}


export default function About() {
  const { t } = usePrefs()
  const a = t.about
  const pending = <span className="italic">{a.pending}</span>
  const left = [
    <Card key="e" i={0} icon={GraduationCap} title={a.edu[0]}>{a.edu[1]}<br />{a.edu[2]}{profile.gpa && <><br />{a.gpa} {profile.gpa}</>}</Card>,
    <Card key="f" i={1} icon={Compass} title={a.focus[0]}>{a.focus[1]}</Card>,
    <Card key="h" i={2} icon={Gamepad2} title={a.hobby[0]}>{a.hobby[1]}</Card>,
  ]
  const right = [
    [a.p1, a.p1Desc],
    [a.p2, a.p2Desc],
    [a.p3, a.p3Desc],
  ].map(([title, description], k) => (
    <Card key={title} i={k + 3} icon={Sparkles} title={title}>
      {description}
    </Card>
  ))
  return (
    <Section
      id="about"
      title="About Me"
      animateTitle
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(ellipse_at_50%_0%,color-mix(in_srgb,var(--accent)_7%,transparent),transparent_70%)]"
      />

      <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_minmax(0,22rem)_1fr]">
        <svg
          aria-hidden="true"
          viewBox="0 0 1000 700"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 z-20 hidden h-full w-full overflow-visible lg:block"
        >
          <defs>
            <marker
              id="about-arrow-head"
              markerWidth="9"
              markerHeight="9"
              refX="7"
              refY="4"
              orient="auto"
            >
              <path d="M1 1 L7 4 L1 7" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
            </marker>
          </defs>

          <motion.path
            d="M 405 300 C 360 260, 340 220, 285 135"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.8"
            strokeLinecap="round"
            pathLength="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.8 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ pathLength: { duration: 1.2, delay: 0.45 }, opacity: { duration: 0.2, delay: 0.45 } }}
            markerEnd="url(#about-arrow-head)"
          />

          <motion.path
            d="M 595 300 C 640 260, 660 220, 715 180"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.8"
            strokeLinecap="round"
            pathLength="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.8 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ pathLength: { duration: 1.2, delay: 0.65 }, opacity: { duration: 0.2, delay: 0.65 } }}
            markerEnd="url(#about-arrow-head)"
          />


          <motion.path
            d="	M 405 350 C 355 350, 340 365, 285 350"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.8"
            strokeLinecap="round"
            pathLength="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.8 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ pathLength: { duration: 1, delay: 0.75 }, opacity: { duration: 0.2, delay: 0.75 } }}
            markerEnd="url(#about-arrow-head)"
          />

          <motion.path
            d="M 405 390 C 355 415, 340 450, 285 580"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.8"
            strokeLinecap="round"
            pathLength="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.8 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ pathLength: { duration: 1, delay: 0.95 }, opacity: { duration: 0.2, delay: 0.95 } }}
            markerEnd="url(#about-arrow-head)"
          />

          <motion.path
            d="M 595 350 C 645 350, 660 365, 715 350"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.8"
            strokeLinecap="round"
            pathLength="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.8 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ pathLength: { duration: 1, delay: 0.85 }, opacity: { duration: 0.2, delay: 0.85 } }}
            markerEnd="url(#about-arrow-head)"
          />

          <motion.path
            d="M 595 390 C 645 415, 660 450, 715 525"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.8"
            strokeLinecap="round"
            pathLength="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.8 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ pathLength: { duration: 1, delay: 1.05 }, opacity: { duration: 0.2, delay: 1.05 } }}
            markerEnd="url(#about-arrow-head)"
          />

        </svg>


        <ul className="grid content-center gap-3 lg:col-start-1 lg:row-start-1">{left}</ul>
        <motion.div
          initial={useReducedMotion() ? false : { opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative isolate order-first mx-auto w-full max-w-xs lg:col-start-2 lg:row-start-1 lg:order-none lg:max-w-none"
        >
          {/* Soft red glow behind the portrait */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-[12%] -z-10 h-[65%] rounded-full bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--accent)_20%,transparent)_0%,transparent_70%)] blur-2xl"
          />

          {profile.aboutPhoto ? (
            <img
              src={profile.aboutPhoto}
              alt=""
              loading="lazy"
              width="440"
              height="600"
              className="relative z-10 aspect-[3/4] w-full object-cover"
            />
          ) : (
            <div className="flex aspect-[3/4] w-full items-center justify-center rounded-3xl border border-dashed border-border bg-surface px-6 text-center text-sm text-fg-muted">
              {a.photoPh}
            </div>
          )}
        </motion.div>
        <ul className="grid content-center gap-3 lg:col-start-3 lg:row-start-1">{right}</ul>
      </div>
    </Section >
  )
}
