import type { ProjectData } from '@/lib/data/project/project-data'
import { BsFillAwardFill, BsPatchCheckFill } from 'react-icons/bs'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  ImageModal,
} from '@/components/ui'
import { useState } from 'react'

interface ProjectCardProps {
  project: ProjectData
}

function ProjectCard({ project }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleImageClick = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 xl:gap-8">
        <span className="absolute top-0 right-0 text-sm py-1.5 px-2 text-neutral-500 dark:text-neutral-400 rounded-xl font-semibold bg-neutral-100 dark:bg-neutral-800">
          {project.date}
        </span>
        {/* Thumbnail */}
        <div className="flex-shrink-0 w-full sm:w-2/5 md:w-1/3">
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-auto rounded-xl object-cover border cursor-pointer hover:opacity-80 transition-opacity duration-200"
            onClick={handleImageClick}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow">
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
                      {project.award ? '' + project.award : 'Verified Project'}
                    </p>
                  </HoverCardContent>
                </HoverCard>
              </span>
            )}
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-4">
            {project.headline}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.skills.map((skill) => (
              <span
                key={skill.id}
                className={`flex items-center gap-2 px-2 py-1 text-sm rounded-lg ${skill.style}`}
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
                className={`flex items-center gap-2 px-2 py-1 rounded border-[1.5px] border-neutral-700 text-neutral-700 dark:border-neutral-300 dark:text-neutral-300 transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-800 font-semibold ${link.style}`}
              >
                <link.icon className="w-5 h-5" />
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        src={project.thumbnail}
        alt={project.title}
      />
    </>
  )
}

export default ProjectCard
