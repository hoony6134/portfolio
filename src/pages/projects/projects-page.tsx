import { BsPatchCheckFill } from 'react-icons/bs'
import ProjectCard from './components/project-card'
import { projectData } from '@/lib/data/project/project-data'

function ProjectsPage() {
  return (
    <div className="hero-section flex items-center justify-start min-h-screen">
      <div className="flex flex-col items-start w-full">
        <h1 className="text-4xl font-bold mb-2 mt-24">Projects</h1>
        <p className="text-xl mb-4">
          Explore a curated selection of my past and ongoing projects — feel
          free to dive in!
        </p>
        <p className="text-md mb-8 text-neutral-600 dark:text-neutral-400">
          Please note that some projects may be in progress or not fully
          completed. This website is currently under migration. You can see the
          legacy projects on the{' '}
          <a
            href="https://profile-portfolio-2024-react.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-800 dark:text-neutral-200 transition-colors relative after:content-[''] after:block after:h-[1px] after:bg-current after:w-0 hover:after:w-full after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1"
          >
            archive
          </a>
          .
          <br />
          You can also see the specified description of verified projects (
          <BsPatchCheckFill className="text-blue-500 inline-block" />) by
          hovering on the badge icon next to the project title.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-8 sm:gap-12 xl:gap-16 2xl:gap-20 w-full">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
