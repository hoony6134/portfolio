import ProjectCard from './components/project-card'
import { projectData } from '@/lib/data/project/project-data'

function ProjectsPage() {
  return (
    <div className="hero-section flex items-center justify-start min-h-screen">
      <div className="flex flex-col items-start w-full">
        <h1 className="text-4xl font-bold mb-2 mt-24">Projects</h1>
        <p className="text-xl mb-8">
          Explore a curated selection of my past and ongoing projects — feel
          free to dive in!
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-12">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage
