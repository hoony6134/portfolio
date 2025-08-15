import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import ThemeSwitch from './theme-switch'
import { IconExternalLink, IconMenu2, IconX } from '@tabler/icons-react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const navLink =
    "text-lg hover:font-semibold transition-all relative after:content-[''] after:block after:h-[2px] after:bg-current after:w-0 hover:after:w-full after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1"

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Glassmorphism bar (always visible) */}
      <div className="bg-white/20 dark:bg-black/20 backdrop-blur-lg border-b border-white/30 dark:border-black/30">
        <nav className="flex items-center justify-between mx-6 md:mx-12 lg:mx-24 xl:mx-48 py-4">
          {/* Brand */}
          <Link
            to="/"
            className="text-lg font-semibold"
            onClick={() => setOpen(false)}
          >
            <p className="text-2xl">
              <span className="font-black">Je</span>
              <span className="font-extrabold">on</span>
              <span className="font-bold">gH</span>
              <span className="font-semibold">oo</span>
              <span className="font-medium">n</span>
              &nbsp;
              <span className="font-light">Lim</span>
            </p>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex flex-1 items-center justify-evenly">
            <Link to="/" className={navLink}>
              Home
            </Link>
            <Link to="/social" className={navLink}>
              Social
            </Link>
            <Link to="/projects" className={navLink}>
              Projects
            </Link>
            <a
              href="https://scian.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center ${navLink}`}
            >
              Blog
              <IconExternalLink stroke={1.5} size={18} className="ml-2" />
            </a>
          </div>

          <div className="hidden md:block">
            <ThemeSwitch />
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeSwitch />
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded-md bg-white/30 dark:bg-black/30 backdrop-blur-md border border-white/30 dark:border-black/30 active:scale-95 transition"
            >
              {open ? (
                <IconX stroke={1.75} size={22} />
              ) : (
                <IconMenu2 stroke={1.75} size={22} />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu panel with glassmorphism */}
      <div
        id="mobile-menu"
        className={`md:hidden ${open ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'} transition-all duration-300`}
      >
        <div className="mx-4 mt-2 rounded-xl bg-white/30 dark:bg-black/30 backdrop-blur-xl border border-white/30 dark:border-black/30 shadow-lg">
          <div className="flex flex-col py-3">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="px-4 py-2 text-lg"
            >
              Home
            </Link>
            <Link
              to="/social"
              onClick={() => setOpen(false)}
              className="px-4 py-2 text-lg"
            >
              Social
            </Link>
            <Link
              to="/projects"
              onClick={() => setOpen(false)}
              className="px-4 py-2 text-lg"
            >
              Projects
            </Link>
            <a
              href="https://scian.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-lg flex items-center"
              onClick={() => setOpen(false)}
            >
              Blog
              <IconExternalLink stroke={1.5} size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
