import {
  FaBrain,
  FaFlask,
  FaLeaf,
  FaCalculator,
  FaMusic,
  FaGlobe,
  FaMobile,
  FaDesktop,
  FaCog,
  FaBusinessTime,
  FaGlobeAfrica,
} from 'react-icons/fa'
import { VscGlobe } from 'react-icons/vsc'
import {
  SiSwift,
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiPython,
  SiArduino,
  SiFigma,
  SiJavascript,
  SiTensorflow,
  SiLinux,
} from 'react-icons/si'

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
  {
    id: 'ios',
    name: 'iOS',
    icon: FaMobile,
    style:
      'bg-gradient-to-br from-gray-600 to-gray-800 text-white font-semibold',
    description: 'iOS app development experience.',
  },
  {
    id: 'android',
    name: 'Android',
    icon: FaMobile,
    style:
      'bg-gradient-to-br from-green-500 to-green-700 text-white font-semibold',
    description: 'Android app development experience.',
  },
  {
    id: 'tensorflow',
    name: 'TensorFlow',
    icon: SiTensorflow,
    style:
      'bg-gradient-to-br from-orange-500 to-orange-700 text-white font-semibold',
    description: 'Machine learning with TensorFlow.',
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    icon: FaFlask,
    style:
      'bg-gradient-to-br from-purple-500 to-purple-700 text-white font-semibold',
    description: 'Chemical research and analysis.',
  },
  {
    id: 'biology',
    name: 'Biology',
    icon: FaLeaf,
    style:
      'bg-gradient-to-br from-green-600 to-green-800 text-white font-semibold',
    description: 'Biological research and life sciences.',
  },
  {
    id: 'math',
    name: 'Mathematics',
    icon: FaCalculator,
    style: 'bg-gradient-to-br from-red-500 to-red-700 text-white font-semibold',
    description: 'Mathematical modeling and analysis.',
  },
  {
    id: 'arduino',
    name: 'Arduino',
    icon: SiArduino,
    style:
      'bg-gradient-to-br from-teal-500 to-teal-700 text-white font-semibold',
    description: 'Physical computing and IoT development.',
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    icon: FaDesktop,
    style:
      'bg-gradient-to-br from-purple-600 to-purple-800 text-white font-semibold',
    description: 'Frontend framework for responsive design.',
  },
  {
    id: 'openscad',
    name: 'OpenSCAD',
    icon: FaCog,
    style:
      'bg-gradient-to-br from-gray-500 to-gray-700 text-white font-semibold',
    description: '3D modeling and CAD programming.',
  },
  {
    id: 'maplesoft',
    name: 'Maplesoft',
    icon: FaCalculator,
    style: 'bg-gradient-to-br from-red-600 to-red-800 text-white font-semibold',
    description: 'Mathematical computation software.',
  },
  {
    id: 'environment',
    name: 'Environment',
    icon: FaGlobeAfrica,
    style:
      'bg-gradient-to-br from-green-500 to-green-700 text-white font-semibold',
    description: 'Environmental science and sustainability.',
  },
  {
    id: '3d-design',
    name: '3D Design',
    icon: FaCog,
    style:
      'bg-gradient-to-br from-indigo-500 to-indigo-700 text-white font-semibold',
    description: '3D modeling and design.',
  },
  {
    id: 'inventor',
    name: 'Inventor',
    icon: FaCog,
    style:
      'bg-gradient-to-br from-blue-600 to-blue-800 text-white font-semibold',
    description: 'Autodesk Inventor CAD software.',
  },
  {
    id: 'fusion360',
    name: 'Fusion 360',
    icon: FaCog,
    style:
      'bg-gradient-to-br from-orange-600 to-orange-800 text-white font-semibold',
    description: 'Autodesk Fusion 360 CAD software.',
  },
  {
    id: 'sns',
    name: 'SNS',
    icon: FaGlobe,
    style:
      'bg-gradient-to-br from-blue-500 to-blue-700 text-white font-semibold',
    description: 'Social networking and digital marketing.',
  },
  {
    id: 'linux',
    name: 'Linux',
    icon: SiLinux,
    style: 'bg-gradient-to-br from-gray-800 to-black text-white font-semibold',
    description: 'Linux system administration.',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    icon: SiNodedotjs,
    style:
      'bg-gradient-to-br from-green-600 to-green-800 text-white font-semibold',
    description: 'Backend development with Node.js.',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    icon: SiMysql,
    style:
      'bg-gradient-to-br from-blue-600 to-blue-800 text-white font-semibold',
    description: 'Database management with MySQL.',
  },
  {
    id: 'figma',
    name: 'Figma',
    icon: SiFigma,
    style:
      'bg-gradient-to-br from-purple-500 to-pink-500 text-white font-semibold',
    description: 'UI/UX design with Figma.',
  },
  {
    id: 'design',
    name: 'Design',
    icon: FaDesktop,
    style:
      'bg-gradient-to-br from-pink-500 to-pink-700 text-white font-semibold',
    description: 'Visual and UX design.',
  },
  {
    id: 'business-model',
    name: 'Business Model',
    icon: FaBusinessTime,
    style:
      'bg-gradient-to-br from-yellow-600 to-yellow-800 text-white font-semibold',
    description: 'Business strategy and model development.',
  },
  {
    id: 'communication',
    name: 'Communication',
    icon: FaGlobe,
    style:
      'bg-gradient-to-br from-teal-600 to-teal-800 text-white font-semibold',
    description: 'Network communication and protocols.',
  },
  {
    id: 'uiux',
    name: 'UI/UX',
    icon: FaDesktop,
    style:
      'bg-gradient-to-br from-indigo-600 to-indigo-800 text-white font-semibold',
    description: 'User interface and experience design.',
  },
  {
    id: 'python',
    name: 'Python',
    icon: SiPython,
    style:
      'bg-gradient-to-br from-blue-500 to-yellow-500 text-white font-semibold',
    description: 'Python programming and development.',
  },
  {
    id: 'socket',
    name: 'Socket Communication',
    icon: FaGlobe,
    style:
      'bg-gradient-to-br from-gray-600 to-gray-800 text-white font-semibold',
    description: 'Network socket programming.',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: SiJavascript,
    style:
      'bg-gradient-to-br from-yellow-500 to-yellow-700 text-white font-semibold',
    description: 'JavaScript programming.',
  },
  {
    id: 'korean',
    name: 'Korean Language',
    icon: FaGlobe,
    style:
      'bg-gradient-to-br from-red-600 to-blue-600 text-white font-semibold',
    description: 'Korean language research.',
  },
  {
    id: 'chrome',
    name: 'Chrome Extension',
    icon: FaGlobe,
    style:
      'bg-gradient-to-br from-green-500 to-blue-500 text-white font-semibold',
    description: 'Chrome browser extension development.',
  },
  {
    id: 'browser-extension',
    name: 'Browser Extension',
    icon: FaGlobe,
    style:
      'bg-gradient-to-br from-purple-600 to-blue-600 text-white font-semibold',
    description: 'Browser extension development.',
  },
  {
    id: 'machine-learning',
    name: 'Machine Learning',
    icon: FaBrain,
    style:
      'bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-semibold',
    description: 'Machine learning algorithms and models.',
  },
  {
    id: 'tkinter',
    name: 'Tkinter',
    icon: SiPython,
    style:
      'bg-gradient-to-br from-blue-600 to-green-600 text-white font-semibold',
    description: 'Python GUI development.',
  },
  {
    id: 'scikit-learn',
    name: 'Scikit-learn',
    icon: SiPython,
    style:
      'bg-gradient-to-br from-orange-500 to-red-500 text-white font-semibold',
    description: 'Machine learning library for Python.',
  },
  {
    id: 'music',
    name: 'Music',
    icon: FaMusic,
    style:
      'bg-gradient-to-br from-purple-500 to-pink-500 text-white font-semibold',
    description: 'Music production and composition.',
  },
  {
    id: 'logic-pro',
    name: 'Logic Pro',
    icon: FaMusic,
    style:
      'bg-gradient-to-br from-gray-700 to-gray-900 text-white font-semibold',
    description: 'Digital audio workstation.',
  },
  {
    id: 'vst',
    name: 'VST',
    icon: FaMusic,
    style:
      'bg-gradient-to-br from-blue-600 to-purple-600 text-white font-semibold',
    description: 'Virtual studio technology.',
  },
  {
    id: 'producing',
    name: 'Producing',
    icon: FaMusic,
    style:
      'bg-gradient-to-br from-red-500 to-pink-500 text-white font-semibold',
    description: 'Music production and producing.',
  },
  {
    id: 'core-ml',
    name: 'Core ML',
    icon: FaBrain,
    style:
      'bg-gradient-to-br from-gray-600 to-gray-800 text-white font-semibold',
    description: "Apple's machine learning framework.",
  },
  {
    id: 'cpp',
    name: 'C++',
    icon: FaCog,
    style:
      'bg-gradient-to-br from-blue-700 to-blue-900 text-white font-semibold',
    description: 'C++ programming language.',
  },
  {
    id: 'wifi',
    name: 'Wi-Fi',
    icon: FaGlobe,
    style:
      'bg-gradient-to-br from-blue-500 to-cyan-500 text-white font-semibold',
    description: 'Wireless networking technology.',
  },
  {
    id: 'earth-science',
    name: 'Earth Science',
    icon: FaGlobe,
    style:
      'bg-gradient-to-br from-yellow-700 to-orange-700 text-white font-semibold',
    description: 'Earth science and geophysics.',
  },
  {
    id: 'hplc',
    name: 'HPLC',
    icon: FaFlask,
    style:
      'bg-gradient-to-br from-purple-600 to-purple-800 text-white font-semibold',
    description: 'High-performance liquid chromatography.',
  },
  {
    id: 'spectrophotometer',
    name: 'Spectrophotometer',
    icon: FaFlask,
    style:
      'bg-gradient-to-br from-blue-600 to-blue-800 text-white font-semibold',
    description: 'Spectrophotometric analysis.',
  },
  {
    id: 'advanced-equipment',
    name: 'Advanced Equipment',
    icon: FaCog,
    style:
      'bg-gradient-to-br from-gray-600 to-gray-800 text-white font-semibold',
    description: 'Advanced scientific equipment operation.',
  },
  {
    id: 'extraction',
    name: 'Extraction',
    icon: FaFlask,
    style:
      'bg-gradient-to-br from-green-600 to-green-800 text-white font-semibold',
    description: 'Chemical extraction processes.',
  },
  {
    id: 'llm',
    name: 'LLM',
    icon: FaBrain,
    style:
      'bg-gradient-to-br from-green-500 to-blue-500 text-white font-semibold',
    description: 'Large Language Models.',
  },
  {
    id: 'fine-tuning',
    name: 'Fine-tuning',
    icon: FaBrain,
    style:
      'bg-gradient-to-br from-purple-500 to-pink-500 text-white font-semibold',
    description: 'Model fine-tuning and optimization.',
  },
  {
    id: 'genetic-engineering',
    name: 'Genetic Engineering',
    icon: FaLeaf,
    style:
      'bg-gradient-to-br from-green-700 to-blue-700 text-white font-semibold',
    description: 'Genetic engineering and biotechnology.',
  },
  {
    id: 'react',
    name: 'React',
    icon: SiReact,
    style:
      'bg-gradient-to-br from-cyan-500 to-blue-500 text-white font-semibold',
    description: 'React.js development.',
  },
  {
    id: 'career',
    name: 'Career',
    icon: FaBusinessTime,
    style:
      'bg-gradient-to-br from-indigo-600 to-purple-600 text-white font-semibold',
    description: 'Career development and guidance.',
  },
  {
    id: 'linear-algebra',
    name: 'Linear Algebra',
    icon: FaCalculator,
    style:
      'bg-gradient-to-br from-red-600 to-orange-600 text-white font-semibold',
    description: 'Linear algebra and mathematical modeling.',
  },
  {
    id: 'physics',
    name: 'Physics',
    icon: FaCalculator,
    style:
      'bg-gradient-to-br from-blue-700 to-purple-700 text-white font-semibold',
    description: 'Physics research and analysis.',
  },
  {
    id: 'it',
    name: 'IT',
    icon: FaDesktop,
    style:
      'bg-gradient-to-br from-gray-600 to-gray-800 text-white font-semibold',
    description: 'Information technology.',
  },
]
