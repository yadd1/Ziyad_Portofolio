import { motion, useReducedMotion } from 'motion/react'

export default function Section({ id, title, children, className = '', animateTitle = false }) {
  const reduce = useReducedMotion()

  const headingClass = 'section-heading mb-12 text-center'

  return (
    <section id={id} aria-labelledby={`${id}-h`} className={`px-6 py-20 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {animateTitle ? (
          <motion.h2
            id={`${id}-h`}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className={headingClass}
          >
            {title}<span className="text-accent">.</span>
          </motion.h2>
        ) : (
          <h2 id={`${id}-h`} className={headingClass}>
            {title}
          </h2>
        )}

        {children}
      </div>
    </section>
  )
}