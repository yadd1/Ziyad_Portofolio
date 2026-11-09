import { createPortal } from 'react-dom'
import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  BarChart3,
  Search,
  Filter,
  Workflow,
  PieChart,
  LayoutDashboard,
  Layers,
  Network,
  MessageCircle,
  Users,
  Target,
  RefreshCw,
  ScanSearch,
  Award,
  ExternalLink,
  X,
  CalendarDays,
  Building2,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

import Section from './Section.jsx'
import { usePrefs } from '../hooks/usePrefs.jsx'
import { skillGroups, softSkills } from '../data/skills.js'
import { certificates } from '../data/certificates.js'

const dataIcons = {
  chart: BarChart3,
  search: Search,
  filter: Filter,
  workflow: Workflow,
  pie: PieChart,
  layout: LayoutDashboard,
  layers: Layers,
  network: Network,
}

const softIcons = {
  message: MessageCircle,
  users: Users,
  target: Target,
  refresh: RefreshCw,
  scan: ScanSearch,
}

/* ============================ SKILLS ============================ */

function CompactCard({ children }) {
  return (
    <motion.li
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="group flex min-h-[88px] flex-col items-center justify-center gap-2 rounded-xl border border-border bg-surface-raised px-2 py-3 text-center transition-colors duration-300 hover:border-accent/60 hover:shadow-lift"
    >
      {children}
    </motion.li>
  )
}

function BrandCard({ skill }) {
  return (
    <CompactCard>
      <img
        src={
          skill.image
            ? skill.image
            : `https://cdn.simpleicons.org/${skill.logo}/${skill.color}`
        }
        alt={skill.name}
        width="28"
        height="28"
        loading="lazy"
        className="h-7 w-7 object-contain"
        onError={(event) => {
          console.error('Logo gagal dimuat:', skill.name, event.currentTarget.src)
        }}
      />
      <span className="text-xs font-medium leading-tight sm:text-sm">
        {skill.name}
      </span>
    </CompactCard>
  )
}

function IconCard({ skill, iconMap, label }) {
  const Icon = iconMap[skill.icon]

  return (
    <CompactCard>
      {Icon && (
        <Icon
          size={25}
          strokeWidth={1.8}
          className="text-accent transition-transform duration-300 group-hover:scale-110"
        />
      )}
      <span className="text-xs font-medium leading-tight sm:text-sm">
        {label}
      </span>
    </CompactCard>
  )
}

function SkillsContent() {
  const { lang } = usePrefs()

  return (
    <div className="grid gap-10">
      {skillGroups.map((group) => (
        <div key={group.id}>
          {group.id !== 'tools-technologies' && (
            <h3 className="mb-5 text-center font-display text-lg font-semibold">
              {group.title[lang]}
            </h3>
          )}

          <ul className="mx-auto grid max-w-4xl grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 md:grid-cols-5 lg:grid-cols-7">
            {group.skills.map((skill) =>
              group.id === 'tools-technologies' ? (
                <BrandCard key={skill.id} skill={skill} />
              ) : (
                <IconCard
                  key={skill.id}
                  skill={skill}
                  iconMap={dataIcons}
                  label={skill.name}
                />
              )
            )}
          </ul>
        </div>
      ))}

      <div>
        <h3 className="mb-5 text-center font-display text-lg font-semibold">
          {lang === 'id' ? 'Soft Skills' : 'Soft Skills'}
        </h3>

        <ul className="mx-auto grid max-w-4xl grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 md:grid-cols-5">
          {softSkills.map((skill) => (
            <IconCard
              key={skill.id}
              skill={skill}
              iconMap={softIcons}
              label={skill.name[lang]}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

/* ========================== CERTIFICATES ========================== */

// Normalisasi: dukung `images` (banyak halaman) maupun `image` (satu halaman)
function getImages(certificate) {
  const source = certificate.images ?? certificate.image
  if (!source) return []
  return Array.isArray(source) ? source : [source]
}

const slideVariants = {
  enter: (dir) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -80 : 80, opacity: 0 }),
}

function CertificateCard({ certificate, onSelect }) {
  const images = getImages(certificate)
  const cover = images[0]

  return (
    <motion.li
      layout
      whileHover={{ y: -3 }}
      className="overflow-hidden rounded-card border border-border bg-surface-raised"
    >
      <button
        type="button"
        onClick={() => onSelect(certificate)}
        className="w-full text-left"
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-bg-secondary">
          {cover ? (
            <img
              src={cover}
              alt={certificate.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-surface-raised via-bg-secondary to-accent/10">
              <Award size={42} strokeWidth={1.2} className="text-accent" />
              <span className="text-xs font-semibold tracking-[0.25em] text-fg-muted">
                CERTIFICATE PREVIEW
              </span>
            </div>
          )}

          {images.length > 1 && (
            <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
              <Layers size={12} />
              {images.length}
            </span>
          )}
        </div>

        <div className="p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="text-xs font-medium uppercase tracking-wider text-accent">
              Certificate
            </span>
            <span className="text-xs text-fg-muted">View details</span>
          </div>

          <h3 className="font-display text-lg font-semibold">
            {certificate.title}
          </h3>

          <p className="mt-2 flex items-center gap-2 text-sm text-fg-muted">
            <Building2 size={14} />
            {certificate.issuer}
          </p>

          <p className="mt-1 flex items-center gap-2 text-sm text-fg-muted">
            <CalendarDays size={14} />
            {certificate.date}
          </p>
        </div>
      </button>
    </motion.li>
  )
}

function CertificateModal({ certificate, onClose, t }) {
  const images = getImages(certificate)
  const total = images.length
  const [[index, direction], setPage] = useState([0, 0])

  const paginate = useCallback(
    (dir) => {
      if (total < 2) return
      setPage(([i]) => [(i + dir + total) % total, dir])
    },
    [total]
  )

  const goTo = (target) => {
    if (target === index) return
    setPage([target, target > index ? 1 : -1])
  }

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') paginate(1)
      if (event.key === 'ArrowLeft') paginate(-1)
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose, paginate])

  const handleDragEnd = (_, { offset, velocity }) => {
    if (offset.x < -80 || velocity.x < -500) paginate(1)
    else if (offset.x > 80 || velocity.x > 500) paginate(-1)
  }

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        onClick={(event) => event.stopPropagation()}
        className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-card border border-border bg-surface-raised shadow-2xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 rounded-full border border-border bg-bg/80 p-2 text-fg transition-colors hover:border-accent hover:text-accent"
        >
          <X size={18} />
        </button>

        {/* ===== Carousel ===== */}
        <div className="relative aspect-[16/9] overflow-hidden bg-bg-secondary">
          {total > 0 ? (
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={index}
                src={images[index]}
                alt={`${certificate.title} (${index + 1}/${total})`}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: 'easeOut' }}
                drag={total > 1 ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                onDragEnd={handleDragEnd}
                draggable={false}
                className="absolute inset-0 h-full w-full select-none object-contain"
              />
            </AnimatePresence>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-surface-raised via-bg-secondary to-accent/10">
              <Award size={56} strokeWidth={1.2} className="text-accent" />
              <span className="text-xs font-semibold tracking-[0.25em] text-fg-muted">
                CERTIFICATE PREVIEW
              </span>
            </div>
          )}

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={() => paginate(-1)}
                aria-label="Previous page"
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-bg/80 p-2 text-fg backdrop-blur transition-colors hover:border-accent hover:text-accent"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                type="button"
                onClick={() => paginate(1)}
                aria-label="Next page"
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-bg/80 p-2 text-fg backdrop-blur transition-colors hover:border-accent hover:text-accent"
              >
                <ChevronRight size={20} />
              </button>

              <span className="absolute left-3 top-3 z-10 rounded-full bg-black/70 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
                {index + 1} / {total}
              </span>

              <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Go to page ${i + 1}`}
                    aria-current={i === index}
                    className={`h-2 rounded-full transition-all duration-300 ${i === index
                      ? 'w-5 bg-accent'
                      : 'w-2 bg-white/60 hover:bg-white'
                      }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* ===== Detail ===== */}
        <div className="p-6 sm:p-8">
          <span className="text-xs font-medium uppercase tracking-wider text-accent">
            Certificate
          </span>

          <h2 className="mt-3 font-display text-2xl font-semibold">
            {certificate.title}
          </h2>

          <p className="mt-3 flex items-center gap-2 text-sm text-fg-muted">
            <Building2 size={16} />
            {certificate.issuer}
          </p>

          <p className="mt-2 flex items-center gap-2 text-sm text-fg-muted">
            <CalendarDays size={16} />
            {certificate.date}
          </p>

          {certificate.description && (
            <p className="mt-6 text-sm leading-relaxed text-fg-muted">
              {certificate.description}
            </p>
          )}

          {certificate.credentialId && (
            <p className="mt-4 text-xs text-fg-muted">
              Credential ID: {certificate.credentialId}
            </p>
          )}

          {certificate.url && (
            <a
              href={certificate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-80"
            >
              {t.skills.view}
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>,
    document.body
  )
}

function Certs() {
  const { t } = usePrefs()
  const [selected, setSelected] = useState(null)

  if (!certificates.length) {
    return (
      <p className="text-center text-fg-muted">
        {t.skills.empty}
      </p>
    )
  }

  return (
    <>
      <ul className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
            onSelect={setSelected}
          />
        ))}
      </ul>

      <AnimatePresence>
        {selected && (
          <CertificateModal
            key={selected.id}
            certificate={selected}
            onClose={() => setSelected(null)}
            t={t}
          />
        )}
      </AnimatePresence>
    </>
  )
}

/* ============================== MAIN ============================== */

export default function Skills() {
  const { t } = usePrefs()
  const [tab, setTab] = useState('skills')

  const tabs = [
    ['skills', t.skills.tabSkills],
    ['certs', t.skills.tabCerts],
  ]

  return (
    <Section id="skills" title={t.skills.title}>
      <div
        role="tablist"
        aria-label={t.skills.title}
        className="mx-auto mb-10 flex w-fit rounded-full border border-border p-1"
      >
        {tabs.map(([key, label]) => (
          <button
            key={key}
            type="button"
            role="tab"
            id={`tab-${key}`}
            aria-selected={tab === key}
            aria-controls={`panel-${key}`}
            tabIndex={tab === key ? 0 : -1}
            onClick={() => setTab(key)}
            onKeyDown={(event) => {
              if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
                event.preventDefault()
                const nextTab = tab === 'skills' ? 'certs' : 'skills'
                setTab(nextTab)
                document.getElementById(`tab-${nextTab}`)?.focus()
              }
            }}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${tab === key
              ? 'bg-accent text-white shadow-md'
              : 'text-fg-muted hover:text-fg'
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${tab}`}
        aria-labelledby={`tab-${tab}`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {tab === 'certs' ? <Certs /> : <SkillsContent />}
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  )
}