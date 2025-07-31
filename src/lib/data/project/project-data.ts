import { projectLinks, type ProjectLink } from './project-link'
import { projectSkills, type ProjectSkill } from './project-skills'

function getProjectLinkById(id: string): ProjectLink {
  const link = projectLinks.find((link) => link.id === id)
  if (!link) throw new Error(`ProjectLink not found: ${id}`)
  return link
}

function getProjectSkillById(id: string): ProjectSkill {
  const skill = projectSkills.find((skill) => skill.id === id)
  if (!skill) throw new Error(`ProjectSkill not found: ${id}`)
  return skill
}

export interface ProjectData {
  id: string
  title: string
  verified?: boolean
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
    verified: true,
    subtitle: 'AI-Based Nutrition Analysis Platform',
    date: '2021',
    featured: true,
    award:
      'Special Award in the National Student Science Invention Contest (Ministry of Science and ICT)',
    headline: 'AI- and app-based experimental platform for nutrient detection',
    description:
      'NutriCheck is a research project that overcomes the limitations of textbook nutrient‐detection experiments through color‐chart analysis and the development of a smartphone/AI application. ',
    thumbnail: 'https://i.imgur.com/cA5eDrd.png',
    links: [getProjectLinkById('nutricheck-documentation')],
    skills: [
      getProjectSkillById('ai'),
      getProjectSkillById('web-development'),
      getProjectSkillById('swift'),
    ],
  },
]
