import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <div className="fixed *:top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between bg-transparent mx-48 py-4">
        <p className="text-2xl">
          <span className="font-black">Je</span>
          <span className="font-extrabold">on</span>
          <span className="font-bold">gH</span>
          <span className="font-semibold">oo</span>
          <span className="font-medium">n</span>
          &nbsp;
          <span className="font-light">Lim</span>
        </p>
        <Link to="/" className="text-lg font-semibold">
          Home
        </Link>
        <Link to="/projects" className="text-lg font-semibold">
          Projects
        </Link>
      </nav>
    </div>
  )
}
