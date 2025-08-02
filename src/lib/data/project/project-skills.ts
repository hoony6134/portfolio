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
    name: 'AI',
    icon: FaBrain,
    style:
      'bg-gradient-to-br from-blue-500 to-purple-500 dark:from-blue-700 dark:to-purple-700 text-white font-semibold',
    description: 'Experience in developing AI models and applications.',
  },
  {
    id: 'web',
    name: 'Web',
    icon: VscGlobe,
    style:
      'bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-800 text-white font-semibold',
    description:
      'Proficient in building responsive and dynamic web applications.',
  },
  {
    id: 'swift',
    name: 'Swift',
    icon: SiSwift,
    style:
      'bg-gradient-to-tr from-[#FF3627] to-[#FBAF41] text-white font-semibold',
    description: 'Skilled in developing iOS applications using Swift.',
  },
]
