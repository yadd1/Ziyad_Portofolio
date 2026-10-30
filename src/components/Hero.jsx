import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { usePrefs } from '../hooks/usePrefs.jsx'
import { profile } from '../data/profile.js'
import { Users, Heart, ArrowUpRight, BadgeCheck, MapPin } from 'lucide-react'

function BinaryReveal({ text }) {
  const reduce = useReducedMotion()
  const [n, setN] = useState(reduce ? text.length : 0)
  const [tick, setTick] = useState(0)
  useEffect(() => {
    if (reduce) { setN(text.length); return }
    setN(0)
    const per = Math.min(2500 / Math.max(text.length, 1), 140)
    const start = performance.now()
    const id = setInterval(() => {
      const k = Math.floor((performance.now() - start) / per)
      setN(Math.min(k, text.length)); setTick((x) => x + 1)
      if (k >= text.length) clearInterval(id)
    }, 50)
    return () => clearInterval(id)
  }, [text, reduce])
  const shown = [...text].map((c, i) => (i < n || c === ' ' ? c : (i + tick) % 2 ? '1' : '0')).join('')
  return <><span aria-hidden="true">{shown}</span><span className="sr-only">{text}</span></>
}

export default function Hero() {
  const { t } = usePrefs()
  const reduce = useReducedMotion()
  const name = profile.name || t.hero.namePh
  const [liked, setLiked] = useState(false)
  return (
    <section id="top" className="px-6 pb-20 pt-32 md:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          {profile.openToWork && (
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-sm">
              <span className="h-2 w-2 rounded-full bg-ok" aria-hidden="true" />{t.hero.openToWork}
            </p>
          )}
          <p className="text-sm font-medium tracking-wide text-accent-text">{t.hero.label}</p>
          <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            {profile.name ? <BinaryReveal text={name} /> : <span className="text-fg-muted">{name}</span>}
          </h1>
          <p className="mt-4 text-sm font-medium tracking-[0.18em] text-fg-muted">{t.hero.tag}</p>
          <p className="mt-6 max-w-md text-fg-muted">{t.hero.desc}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-white">{t.hero.projects}</a>
            {profile.cvUrl && <a href={profile.cvUrl} download className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-fg">{t.hero.cv}</a>}
          </div>
        </div>
        <motion.div initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto -mt-4 w-full max-w-[340px] md:-mt-10 md:translate-x-20">


          <div className="relative isolate overflow-hidden rounded-[2rem] border border-black/10 bg-[#17191c] text-white shadow-[0_24px_70px_rgba(0,0,0,0.16)]">
            {/* Portrait */}
            <div className="relative">
              {profile.heroPhoto ? (
                <img
                  src={profile.heroPhoto}
                  alt={profile.name || 'Portrait'}
                  width="480"
                  height="600"
                  className="aspect-[4/4.5] w-full scale-[1.18] object-cover object-[center_35%] origin-bottom"
                />
              ) : (
                <div className="flex aspect-[4/5] items-center justify-center text-sm text-white/50">
                  {t.hero.photoPh}
                </div>
              )}

              {/* Fade + blur at the bottom of the photo */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-[#17191c]/45 to-[#17191c] backdrop-blur-[1px]" />
            </div>

            {/* Profile details */}
            <div className="relative -mt-1 px-5 pb-5">
              <p className="mb-2 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-white/50">
                <MapPin size={12} />
                Based in Bekasi, Indonesia
              </p>
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-semibold tracking-tight">
                  @zyd
                </h2>
                <BadgeCheck
                  size={23}
                  fill="#2997FF"
                  color="#2997FF"
                  stroke="white"
                />
              </div>

              <div className="mt-2 inline-flex items-center gap-2 text-sm text-emerald-400">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>
                <span>Available for work</span>
              </div>

              <div className="mt-3 mb-5 h-px bg-white/15" />

              {/* Visits, likes, and connect */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <Users size={25} className="text-white/60" />
                  <div>
                    <p className="text-lg font-medium">128</p>
                    <p className="text-xs text-white/55">Visits</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setLiked((previous) => !previous)}
                  aria-pressed={liked}
                  aria-label={liked ? 'Unlike portfolio' : 'Like portfolio'}
                  className="group flex items-center gap-2 rounded-lg transition-transform duration-200 hover:scale-105 active:scale-95"
                >
                  <Heart
                    size={25}
                    className={
                      liked
                        ? 'fill-rose-500 text-rose-500'
                        : 'text-rose-500 transition-colors group-hover:fill-rose-500'
                    }
                  />
                  <div className="text-left">
                    <p className="text-lg font-medium">
                      {24 + (liked ? 1 : 0)}
                    </p>
                    <p className="text-xs text-white/55">Likes</p>
                  </div>
                </button>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.07] px-5 py-3 text-sm font-medium transition-colors hover:bg-white/15"
                >
                  Connect
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
