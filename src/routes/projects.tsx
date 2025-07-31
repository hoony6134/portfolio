import ProjectsPage from '@/pages/projects/projects-page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
  component: ProjectsPage,
})
