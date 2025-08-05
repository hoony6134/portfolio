import { Link } from '@tanstack/react-router'
import TimelineSection from './timeline-section'
import { IconExternalLink } from '@tabler/icons-react'

function Experience() {
  return (
    <div className="hero-section flex items-center justify-start min-h-screen">
      <div className="flex flex-col items-start w-full">
        <h1 className="text-4xl font-bold mb-2">Experience</h1>
        <p className="text-xl mb-8">
          Here are my educational and professional experiences.
        </p>
        <TimelineSection />
        <Link
          to="/projects"
          className="mt-8 flex text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white items-center text-lg font-semibold transition-colors relative after:content-[''] after:block after:h-[2px] after:bg-current after:w-0 hover:after:w-full after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1"
        >
          View More Projects <IconExternalLink className="ml-2" />
        </Link>
      </div>
    </div>
  )
}

export default Experience
