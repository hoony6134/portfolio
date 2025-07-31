import { FaBrain } from 'react-icons/fa'
import { VscGlobe } from 'react-icons/vsc'
import { SiSwift } from 'react-icons/si'

export interface ProjectSkill {
  id: string
  name: string
  icon: any
  style: string
  description?: string
  verified?: boolean
}

export const projectSkills: ProjectSkill[] = [
  {
    id: 'ai',
    name: 'Artificial Intelligence',
    icon: FaBrain,
    style: 'bg-blue-500 text-white',
    description: 'Experience in developing AI models and applications.',
  },
  {
    id: 'web-development',
    name: 'Web Development',
    icon: VscGlobe,
    style: 'bg-green-500 text-white',
    description:
      'Proficient in building responsive and dynamic web applications.',
  },
  {
    id: 'swift',
    name: 'Swift',
    icon: SiSwift,
    style: 'bg-orange-500 text-white',
    description: 'Skilled in developing iOS applications using Swift.',
  },
]
