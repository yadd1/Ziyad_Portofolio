
import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 sm:flex-row sm:px-8">
        <p className="text-xs text-fg-muted">
          © {new Date().getFullYear()} ZYD. All rights reserved.
        </p>

        <p className="text-xs tracking-wide text-fg-muted">
          DESIGNED & BUILT BY ZYD.
        </p>

        <button
          type="button"
          onClick={backToTop}
          className="group inline-flex items-center gap-2 text-xs font-medium text-fg-muted transition-colors hover:text-accent"
        >
          Kembali ke Atas
          <ArrowUp
            size={14}
            className="transition-transform duration-300 group-hover:-translate-y-1"
          />
        </button>
      </div>
    </footer>
  )
}
