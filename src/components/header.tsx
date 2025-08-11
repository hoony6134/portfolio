import { Link } from '@tanstack/react-router'
import ThemeSwitch from './theme-switch'
import { IconExternalLink } from '@tabler/icons-react'

export default function Header() {
  return (
    <div className="fixed top-0 left-0 w-full bg-white/20 dark:bg-black/20 backdrop-blur-lg border border-white/30 dark:border-black/30 z-50">
      <nav className="flex items-center justify-between mx-6 md:mx-12 lg:mx-24 xl:mx-48 py-4">
        <Link to="/" className="text-lg font-semibold">
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
        <Link
          to="/"
          className="text-lg hover:font-semibold transition-all relative after:content-[''] after:block after:h-[2px] after:bg-current after:w-0 hover:after:w-full after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1"
        >
          Home
        </Link>
        <Link
          to="/social"
          className="text-lg hover:font-semibold transition-all relative after:content-[''] after:block after:h-[2px] after:bg-current after:w-0 hover:after:w-full after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1"
        >
          Social
        </Link>
        <Link
          to="/projects"
          className="text-lg hover:font-semibold transition-all relative after:content-[''] after:block after:h-[2px] after:bg-current after:w-0 hover:after:w-full after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1"
        >
          Projects
        </Link>
        <a
          href="https://scian.xyz/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-lg hover:font-semibold transition-all relative after:content-[''] after:block after:h-[2px] after:bg-current after:w-0 hover:after:w-full after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1"
        >
          Blog
          <IconExternalLink stroke={1.5} size={18} className="ml-2" />
        </a>
        <ThemeSwitch />
      </nav>
    </div>
  )
}
