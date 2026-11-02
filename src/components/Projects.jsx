import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'motion/react'
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from 'lucide-react'

import Section from './Section.jsx'
import { usePrefs } from '../hooks/usePrefs.jsx'
import { projects } from '../data/projects.js'


// ========================================
// SIDE PROJECT PREVIEW
// ========================================

function SideProject({ project, onClick, direction = 1, side = 'right' }) {
  const { lang } = usePrefs()

  if (!project) return null

  const variants = {
    enter: {
      opacity: 0,
      x: side === 'left' ? -25 : 25,
      scale: 0.88,
    },
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      x: side === 'left' ? 25 : -25,
      scale: 0.88,
    },
  }

  return (
    <AnimatePresence mode="wait" initial={false} custom={direction}>
      <motion.button
        key={project.id}
        type="button"
        onClick={onClick}
        aria-label={`View ${project.title[lang]}`}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          type: 'spring',
          stiffness: 180,
          damping: 24,
        }}
        className="group hidden w-full text-left lg:block"
      >
        <div className="overflow-hidden rounded-card border border-border/80 bg-surface-raised shadow-xl shadow-black/10 transition-all duration-300 group-hover:border-accent/50 group-hover:shadow-2xl">

          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt=""
              loading="lazy"
              className="aspect-video w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex aspect-video items-center justify-center bg-surface">
              <span className="font-display text-4xl font-bold text-fg-muted/20">
                {String(project.title[lang]).charAt(0)}
              </span>
            </div>
          )}

          <div className="p-3 xl:p-4">
            <h3 className="truncate font-display text-sm font-semibold text-fg">
              {project.title[lang]}
            </h3>

            <p className="mt-2 line-clamp-2 text-xs leading-5 text-fg-muted">
              {project.summary[lang]}
            </p>
          </div>

        </div>
      </motion.button>
    </AnimatePresence>
  )
}


// ========================================
// PROJECT DETAIL MODAL
// ========================================

function ProjectModal({ project, lang, onClose }) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return createPortal(
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.article
          initial={{ opacity: 0, scale: 0.85, y: 35 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 25,
          }}
          onClick={(event) => event.stopPropagation()}
          className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-card border border-border bg-surface-raised shadow-2xl"
        >

          <div className="relative">
            {project.thumbnail ? (
              <img
                src={project.thumbnail}
                alt=""
                className="aspect-video w-full object-cover"
              />
            ) : (
              <div className="flex aspect-video w-full items-center justify-center bg-surface">
                <span className="font-display text-7xl font-bold text-fg-muted/20">
                  {String(project.title[lang]).charAt(0)}
                </span>
              </div>
            )}

            <ul className="absolute left-4 top-4 flex max-w-[85%] flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-white/20 bg-black/65 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close project"
              className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full border border-white/20 bg-black/65 text-white backdrop-blur-md transition hover:bg-black/85"
            >
              ✕
            </button>
          </div>

          <div className="p-5 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Featured Project
            </p>

            <h2 className="mt-3 font-display text-2xl font-bold text-fg sm:text-3xl">
              {project.title[lang]}
            </h2>

            <p className="mt-4 text-sm leading-7 text-fg-muted sm:text-base">
              {project.summary[lang]}
            </p>

            <div className="mt-7 border-t border-border pt-6">
              <h3 className="font-display text-lg font-semibold text-fg">
                Project Overview
              </h3>

              <div className="mt-3 text-sm leading-7 text-fg-muted sm:text-base">
                <ReactMarkdown
                  components={{
                    p: ({ children }) => (
                      <p className="mb-4 last:mb-0">{children}</p>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold text-fg">{children}</strong>
                    ),
                    em: ({ children }) => (
                      <em className="italic text-fg-muted">{children}</em>
                    ),
                    ul: ({ children }) => (
                      <ul className="mb-4 ml-5 list-disc space-y-2 last:mb-0">
                        {children}
                      </ul>
                    ),
                    li: ({ children }) => (
                      <li className="pl-1">{children}</li>
                    ),
                  }}
                >
                  {project.details[lang]}
                </ReactMarkdown>
              </div>
            </div>

            {project.links?.filter((link) => link.url)?.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-3">
                {project.links
                  .filter((link) => link.url)
                  .map((link) => (
                    <a
                      key={`${link.label}-${link.url}`}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
                    >
                      {link.label}
                      <ExternalLink size={15} />
                    </a>
                  ))}
              </div>
            )}
          </div>

        </motion.article>
      </motion.div>
    </AnimatePresence>,
    document.body
  )
}


// ========================================
// MAIN PROJECT CARD
// ========================================

function MainProject({ project }) {
  const { lang } = usePrefs()
  const [expanded, setExpanded] = useState(false)

  if (!project) return null

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full overflow-hidden rounded-card border border-border bg-surface-raised shadow-2xl shadow-black/25"
      >

        <div className="relative">
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt=""
              className="aspect-video w-full object-cover"
            />
          ) : (
            <div className="flex aspect-video w-full items-center justify-center bg-surface">
              <span className="font-display text-7xl font-bold text-fg-muted/20">
                {String(project.title[lang]).charAt(0)}
              </span>
            </div>
          )}

          <ul className="absolute left-3 top-3 flex max-w-[90%] flex-wrap gap-1.5 sm:left-4 sm:top-4">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-white/20 bg-black/65 px-2.5 py-1 text-[10px] font-medium text-white shadow-sm backdrop-blur-md sm:text-xs"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="p-4 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Featured Project
          </p>

          <h3 className="mt-2 font-display text-xl font-bold text-fg sm:text-2xl">
            {project.title[lang]}
          </h3>

          <p className="mt-3 text-sm leading-6 text-fg-muted">
            {project.summary[lang]}
          </p>

          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Lihat Proyek
            <ExternalLink size={15} />
          </button>
        </div>

      </motion.article>

      {expanded && (
        <ProjectModal
          project={project}
          lang={lang}
          onClose={() => setExpanded(false)}
        />
      )}
    </>
  )
}


// ========================================
// MAIN PROJECT SECTION
// ========================================

export default function Projects() {
  const { t } = usePrefs()

  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  if (!projects || projects.length === 0) {
    return (
      <Section id="work" title={t.work.title}>
        <p className="text-center text-fg-muted">
          {t.work.empty}
        </p>
      </Section>
    )
  }

  const total = projects.length
  const safeIndex = activeIndex % total

  const activeProject = projects[safeIndex]

  const prevIndex = (safeIndex - 1 + total) % total
  const nextIndex = (safeIndex + 1) % total

  const prevProject = total > 1 ? projects[prevIndex] : null
  const nextProject = total > 1 ? projects[nextIndex] : null

  const goPrev = () => {
    setDirection(-1)
    setActiveIndex((current) => (current - 1 + total) % total)
  }

  const goNext = () => {
    setDirection(1)
    setActiveIndex((current) => (current + 1) % total)
  }

  const goToProject = (index) => {
    if (index === safeIndex) return

    setDirection(index > safeIndex ? 1 : -1)
    setActiveIndex(index)
  }

  const slideVariants = {
    enter: (direction) => ({
      opacity: 0,
      x: direction * 90,
      scale: 0.94,
    }),

    center: {
      opacity: 1,
      x: 0,
      scale: 1,
    },

    exit: (direction) => ({
      opacity: 0,
      x: direction * -90,
      scale: 0.94,
    }),
  }

  return (
    <Section id="work" title={t.work.title}>

      {/* Carousel container */}
      <div className="mx-auto w-full max-w-5xl">

        <div className="relative mx-auto flex w-full items-center justify-center">

          {/* Left preview */}
          {prevProject && (
            <div className="absolute left-[1%] z-0 hidden w-[25%] lg:block">
              <SideProject
                project={prevProject}
                onClick={goPrev}
                direction={direction}
                side="left"
              />
            </div>
          )}

          {/* Main project */}
          <div className="relative z-10 w-full lg:w-[56%]">
            <AnimatePresence
              mode="wait"
              initial={false}
              custom={direction}
            >
              <motion.div
                key={activeProject.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: 'spring',
                  stiffness: 220,
                  damping: 26,
                }}
              >
                <MainProject project={activeProject} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right preview */}
          {nextProject && (
            <div className="absolute right-[1%] z-0 hidden w-[25%] lg:block">
              <SideProject
                project={nextProject}
                onClick={goNext}
                direction={direction}
                side="right"
              />
            </div>
          )}

          {/* Desktop arrows */}
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous project"
                className="absolute -left-3 top-1/2 z-30 hidden size-11 -translate-x-full -translate-y-1/2 items-center justify-center rounded-full border border-border/80 bg-surface-raised/90 text-fg shadow-xl backdrop-blur-md transition duration-300 hover:scale-110 hover:border-accent hover:bg-accent hover:text-white lg:flex"
              >
                <ChevronLeft size={21} />
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next project"
                className="absolute -right-3 top-1/2 z-30 hidden size-11 translate-x-full -translate-y-1/2 items-center justify-center rounded-full border border-border/80 bg-surface-raised/90 text-fg shadow-xl backdrop-blur-md transition duration-300 hover:scale-110 hover:border-accent hover:bg-accent hover:text-white lg:flex"
              >
                <ChevronRight size={21} />
              </button>

              {/* Mobile arrows */}
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous project"
                className="absolute left-2 top-1/2 z-30 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface-raised/90 text-fg shadow-lg backdrop-blur-md transition hover:bg-accent hover:text-white lg:hidden"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={goNext}
                aria-label="Next project"
                className="absolute right-2 top-1/2 z-30 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface-raised/90 text-fg shadow-lg backdrop-blur-md transition hover:bg-accent hover:text-white lg:hidden"
              >
                <ChevronRight size={18} />
              </button>
            </>
          )}

        </div>

        {/* Position indicators */}
        {total > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            {projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                onClick={() => goToProject(index)}
                aria-label={`Go to project ${index + 1}`}
                aria-current={index === safeIndex ? 'true' : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === safeIndex
                  ? 'w-8 bg-accent'
                  : 'w-2 bg-fg-muted/30 hover:bg-fg-muted/60'
                  }`}
              />
            ))}
          </div>
        )}

        {/* Project counter */}
        <p className="mt-4 text-center text-xs tracking-[0.2em] text-fg-muted">
          <span className="font-semibold text-fg">
            {String(safeIndex + 1).padStart(2, '0')}
          </span>
          <span className="mx-2 text-accent">/</span>
          {String(total).padStart(2, '0')}
        </p>

      </div>

    </Section>
  )
}
