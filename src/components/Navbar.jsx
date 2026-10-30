import { useEffect, useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { usePrefs } from '../hooks/usePrefs.jsx'

const ids = ['top', 'about', 'work', 'skills']
export default function Navbar() {
  const { t, lang, setLang, theme, toggleTheme } = usePrefs()
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('top')

  useEffect(() => {
    let last = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      if (Math.abs(y - last) < 10) return
      setHidden(y > last && y > 120 && !open)
      last = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ;[...ids, 'contact'].forEach((i) => { const el = document.getElementById(i); el && io.observe(el) })
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const link = (id) => (
    <a key={id} href={`#${id}`} onClick={() => setOpen(false)} aria-current={active === id ? 'true' : undefined}
      className={`rounded-full px-3 py-1.5 text-sm transition-colors ${active === id ? 'bg-fg/8 text-fg' : 'text-fg-muted hover:text-fg'}`}>
      {t.nav[id === 'top' ? 'home' : id]}
    </a>
  )
  const btn = 'inline-flex h-9 w-9 items-center justify-center rounded-full text-fg-muted transition-colors hover:text-fg'

  return (
    <header className={`fixed inset-x-0 top-4 z-50 flex justify-center px-4 transition-transform duration-300 ${hidden ? '-translate-y-24' : ''}`}>
      <nav aria-label="Main" className="relative w-full max-w-3xl rounded-3xl border border-border bg-bg/70 px-3 py-2 shadow-card backdrop-blur-xl md:rounded-full">
        <div className="flex items-center justify-between gap-2">
          <a href="#top" className="px-3 font-display text-lg font-bold tracking-tight">ZYD.</a>
          <div className="hidden items-center gap-1 md:flex">{ids.map(link)}</div>
          <div className="flex items-center gap-1">
            <button type="button" onClick={toggleTheme} aria-label={t.nav.theme} className={btn}>
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <div role="group" aria-label={t.nav.lang} className="flex rounded-full border border-border text-xs">
              {['id', 'en'].map((l) => (
                <button key={l} type="button" onClick={() => setLang(l)} aria-pressed={lang === l}
                  className={`rounded-full px-2.5 py-1 font-medium ${lang === l ? 'bg-fg text-bg' : 'text-fg-muted'}`}>{l.toUpperCase()}</button>
              ))}
            </div>
            <a href="#contact" className="ml-1 hidden rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-white md:inline-block">{t.nav.contact}</a>
            <button type="button" className={`${btn} md:hidden`} aria-expanded={open} aria-controls="mobile-nav" aria-label={t.nav.menu} onClick={() => setOpen((o) => !o)}>
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {open && (
          <div id="mobile-nav" className="mt-2 flex flex-col gap-1 border-t border-border pt-2 md:hidden">
            {[...ids, 'contact'].map(link)}
          </div>
        )}
      </nav>
    </header>
  )
}
