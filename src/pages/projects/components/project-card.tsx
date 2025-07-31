import type { ProjectData } from '@/lib/data/project/project-data'
import { BsFillAwardFill, BsPatchCheckFill } from 'react-icons/bs'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui'
interface ProjectCardProps {
  project: ProjectData
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-row ">
      {/* Thumbnail */}
      <div className="flex-shrink-0 w-1/3">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-auto rounded-md object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow ml-16">
        {/* Title and Headline */}
        <h2 className="text-2xl font-bold mb-1.5 flex items-center">
          {project.title}{' '}
          {project.verified && (
            <span className="text-blue-500">
              <HoverCard>
                <HoverCardTrigger>
                  <BsPatchCheckFill className="ml-2" />
                </HoverCardTrigger>
                <HoverCardContent>
                  <p>
                    <BsFillAwardFill className="inline-block mr-1" />
                    {project.award
                      ? 'Award: ' + project.award
                      : 'Verified Project'}
                  </p>
                </HoverCardContent>
              </HoverCard>
            </span>
          )}
        </h2>
        <p className="text-gray-400 dark:text-gray-600 mb-4">
          {project.headline}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills.map((skill) => (
            <span
              key={skill.id}
              className={`flex items-center gap-2 px-2 py-1 text-sm rounded ${skill.style}`}
            >
              <skill.icon className="w-4 h-4" />
              {skill.name}
            </span>
          ))}
        </div>

        <div className="flex-grow" />

        {/* Links */}
        <div className="flex flex-wrap gap-2">
          {project.links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-2 py-1 rounded border border-gray-500 ${link.style}`}
            >
              <link.icon className="w-5 h-5" />
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
