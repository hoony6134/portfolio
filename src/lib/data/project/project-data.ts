import { projectLinks, type ProjectLink } from './project-link'
import { projectSkills, type ProjectSkill } from './project-skills'

export interface ProjectData {
  id: string
  title: string
  subtitle: string
  date: string
  featured: boolean
  award?: string
  headline: string
  description: string
  thumbnail: string
  links: ProjectLink[]
  skills: ProjectSkill[]
}

export const projectData: ProjectData[] = [
  {
    id: 'nutricheck',
    title: 'NutriCheck',
    subtitle: 'AI-Based Nutrition Analysis Platform',
    date: '2021',
    featured: true,
    award:
      'Special Award in the National Student Science Invention Contest (Ministry of Science and ICT)',
    headline: 'AI- and app-based experimental platform for nutrient detection',
    description:
      'NutriCheck is a research project that overcomes the limitations of textbook nutrient‐detection experiments through color‐chart analysis and the development of a smartphone/AI application. ',
    thumbnail: 'https://i.imgur.com/cA5eDrd.png',
    links: [
      projectLinks.find((link) => link.id === 'nutricheck-documentation')!,
    ],
    skills: [
      projectSkills.find((skill) => skill.id === 'ai')!,
      projectSkills.find((skill) => skill.id === 'web-development')!,
      projectSkills.find((skill) => skill.id === 'swift')!,
    ],
  },
]
