import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <div className="fixed *:top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between bg-transparent mx-48 py-4">
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
