import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { dict } from '../i18n/dict.js'

const Ctx = createContext(null)
const read = (k, ok, def) => { try { const v = localStorage.getItem(k); return ok.includes(v) ? v : def } catch { return def } }

export function PrefsProvider({ children }) {
  const [theme, setTheme] = useState(() => read('zyd-theme', ['light', 'dark'], 'light'))
  const [lang, setLang] = useState(() => read('zyd-lang', ['id', 'en'], 'id'))
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('zyd-theme', theme) } catch {}
  }, [theme])
  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem('zyd-lang', lang) } catch {}
  }, [lang])
  const toggleTheme = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])
  return <Ctx.Provider value={{ theme, toggleTheme, lang, setLang, t: dict[lang] }}>{children}</Ctx.Provider>
}
export const usePrefs = () => useContext(Ctx)
