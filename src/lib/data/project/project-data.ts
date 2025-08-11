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

// Helper function to map stacks string to skill IDs
function mapStacksToSkills(stacksString: string): ProjectSkill[] {
  if (!stacksString) return []

  const stackMap: { [key: string]: string } = {
    Web: 'web',
    iOS: 'ios',
    Android: 'android',
    TensorFlow: 'tensorflow',
    Chemistry: 'chemistry',
    Biology: 'biology',
    Swift: 'swift',
    Arduino: 'arduino',
    Bootstrap: 'bootstrap',
    Mathematics: 'math',
    OpenSCAD: 'openscad',
    Maplesoft: 'maplesoft',
    Environment: 'environment',
    '3D Design': '3d-design',
    Inventor: 'inventor',
    'Fusion 360': 'fusion360',
    SNS: 'sns',
    Linux: 'linux',
    'Google Cloud Platform': 'web',
    'Node.js': 'nodejs',
    MySQL: 'mysql',
    Figma: 'figma',
    Design: 'design',
    'Business Model': 'business-model',
    Communication: 'communication',
    'UI/UX': 'uiux',
    Python: 'python',
    'Socket Communication': 'socket',
    JavaScript: 'javascript',
    'Korean Language': 'korean',
    Chrome: 'chrome',
    'Browser Extension': 'browser-extension',
    AI: 'ai',
    'Machine Learning': 'machine-learning',
    Tkinter: 'tkinter',
    'Scikit-learn': 'scikit-learn',
    'Final Cut Pro': 'design',
    Music: 'music',
    'Logic Pro': 'logic-pro',
    VST: 'vst',
    Producing: 'producing',
    'Core ML': 'core-ml',
    'C++': 'cpp',
    'Wi-Fi': 'wifi',
    'Earth Science': 'earth-science',
    HPLC: 'hplc',
    Spectrophotometer: 'spectrophotometer',
    'Advanced Equipment': 'advanced-equipment',
    Extraction: 'extraction',
    LLM: 'llm',
    'Fine-tuning': 'fine-tuning',
    'Genetic Engineering': 'genetic-engineering',
    React: 'react',
    Career: 'career',
    'Linear Algebra': 'linear-algebra',
    Physics: 'physics',
    IT: 'it',
    Wiki: 'web',
  }

  const stacks = stacksString.split(',').map((s) => s.trim())
  const skills: ProjectSkill[] = []

  stacks.forEach((stack) => {
    const skillId = stackMap[stack]
    if (skillId) {
      try {
        skills.push(getProjectSkillById(skillId))
      } catch (error) {
        console.warn(`Skill not found: ${skillId} for stack: ${stack}`)
      }
    }
  })

  return skills
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
      'NutriCheck is a research project that overcomes the limitations of textbook nutrient‐detection experiments through color‐chart analysis and the development of a smartphone/AI application.',
    thumbnail: 'images/thumbs/nutricheck.png',
    links: [getProjectLinkById('nutricheck-intro')],
    skills: mapStacksToSkills('AI,iOS,TensorFlow,Chemistry'),
  },
  {
    id: 'cydial',
    title: 'Cydial',
    verified: true,
    subtitle: 'Smart 3D Sundial',
    date: '2022-2023',
    featured: true,
    award:
      'Excellence Award in National Science Exhibition (Ministry of Science and ICT), Presented in academic community',
    headline:
      'Smart 3D cycloid polar sundial development and its mathematical proof',
    description:
      'Cydial is a project that develops a smart 3D cycloid polar sundial based on mathematical proof.',
    thumbnail: 'images/thumbs/cydial.png',
    links: [
      getProjectLinkById('cydial-web'),
      getProjectLinkById('cydial-github'),
      getProjectLinkById('cydial-app'),
    ],
    skills: mapStacksToSkills(
      'Swift,Web,iOS,Arduino,Bootstrap,Mathematics,OpenSCAD,Maplesoft',
    ),
  },
  {
    id: 'ask',
    title: 'ASK!',
    verified: true,
    subtitle: 'Agar, you are Sea Keeper!',
    date: '2020',
    featured: true,
    award:
      'Excellence Award in Marine Biology Research Contest (Director of National Marine Biodiversity Institute), Encouragement Award in Daejeon Student Science Invention Contest',
    headline:
      'Research and Development on eco-friendly packaging containers using agar and seaweed',
    description:
      'A project that aims to form a virtuous cycle structure to preserve marine ecosystems through research on eco-friendly packaging containers using agar. SNS-based promotion was also conducted to create social impact.',
    thumbnail: 'images/thumbs/ask.png',
    links: [getProjectLinkById('ask-blog')],
    skills: mapStacksToSkills('Biology,Environment,3D Design,SNS'),
  },
  // {
  //   id: 'flocmatch',
  //   title: 'FlocMatch',
  //   verified: true,
  //   subtitle: 'Flocculant Trading Platform',
  //   date: '2023',
  //   featured: false,
  //   award: 'Silver Award in DDSHS Science Exhibition and Idea Contest',
  //   headline:
  //     'Industrial by-product-based wastewater treatment platform connecting suppliers and demanders',
  //   description:
  //     'FlocMatch is an industrial by-product-based flocculant trading platform that connects suppliers and demanders, providing Win-Win services that benefit everyone.',
  //   thumbnail: 'https://i.imgur.com/yNetZso.png',
  //   links: [getProjectLinkById('flocmatch-website')],
  //   skills: mapStacksToSkills(
  //     'Swift,Web,iOS,Linux,Node.js,MySQL,Biology,Environment,Business Model',
  //   ),
  // },
  // {
  //   id: 'livsak',
  //   title: 'Livsak',
  //   verified: false,
  //   subtitle: 'Lifehack Assistant Platform',
  //   date: '2023',
  //   featured: false,
  //   headline:
  //     'Lifehack sharing and recommendation platform tailored to user situations',
  //   description:
  //     'Livsak is a comprehensive Lifehack platform that recognizes user situations and provides situational advice and lifehacks.',
  //   thumbnail: 'https://i.imgur.com/HWHoSat.jpg',
  //   links: [getProjectLinkById('livsak-website')],
  //   skills: mapStacksToSkills('Web,Linux,Google Cloud Platform,Node.js,MySQL'),
  // },
  // {
  //   id: 'studylog',
  //   title: 'StudyLog',
  //   verified: false,
  //   subtitle: 'Logging Study Records',
  //   date: '2021-2022',
  //   featured: false,
  //   headline:
  //     'Study record verification and sharing, blockchain-based reward platform',
  //   description:
  //     'StudyLog is a platform that verifies user study records and provides NFT rewards. Currently transferred to Project Goding to create a sharing-centered study planning and recording platform.',
  //   thumbnail: 'https://i.imgur.com/DdE2otQ.png',
  //   links: [],
  //   skills: mapStacksToSkills('Figma,Design,Business Model'),
  // },
  // {
  //   id: 'ddshs-app',
  //   title: 'DDSHS All In One App',
  //   verified: false,
  //   subtitle: 'All In One School Platform Prototype',
  //   date: '2022',
  //   featured: false,
  //   headline:
  //     'DDSHS night self-study movement application and integrated school life platform',
  //   description:
  //     'An application prototype that helps overall student life, enabling schedules and night self-study movement applications. Communication functions were also implemented using socket communication, and UX prototypes based on Figma were developed.',
  //   thumbnail: 'https://i.imgur.com/njpou8g.png',
  //   links: [getProjectLinkById('ddshs-demo')],
  //   skills: mapStacksToSkills(
  //     'Figma,Design,Communication,UI/UX,Python,Socket Communication',
  //   ),
  // },
  // {
  //   id: 'languard',
  //   title: 'LanGuard',
  //   verified: true,
  //   subtitle: 'Profanity Filtering Browser Extension',
  //   date: '2023',
  //   featured: false,
  //   award:
  //     'Chrome Web Store Featured Publisher Certification, School Representative Presentation',
  //   headline:
  //     'Chrome extension program to prevent profanity and abusive language input on SNS',
  //   description:
  //     'LanGuard is a Chrome extension that detects and blocks the input of profanity and abusive language, creating a proper SNS culture.',
  //   thumbnail: 'https://i.imgur.com/5w6oRHH.png',
  //   links: [getProjectLinkById('languard-chrome')],
  //   skills: mapStacksToSkills(
  //     'JavaScript,Korean Language,Chrome,Browser Extension,SNS,Final Cut Pro,Python',
  //   ),
  // },
  // {
  //   id: 'car-evaluation',
  //   title: 'Car Evaluation',
  //   verified: true,
  //   subtitle: 'ML-Based Second-Handed Car Buying Decision Helper',
  //   date: '2021',
  //   featured: false,
  //   award:
  //     'KAIST Global Gifted Education Institute Research Course Representative Presentation and Best Session Selection',
  //   headline:
  //     'Machine learning and GUI-based used car purchase decision support program',
  //   description:
  //     'A GUI-based Python program that assists in used car purchase decisions based on machine learning.',
  //   thumbnail: 'https://i.imgur.com/2OonfP0.png',
  //   links: [getProjectLinkById('car-evaluation-github')],
  //   skills: mapStacksToSkills(
  //     'Python,AI,Machine Learning,Tkinter,Scikit-learn',
  //   ),
  // },
  // {
  //   id: 'cyan',
  //   title: 'Cyan',
  //   verified: true,
  //   subtitle: 'Producing Project',
  //   date: '2021~',
  //   featured: false,
  //   award: 'Spotify Official Artist Certification',
  //   headline:
  //     'Study-focused concentration beat making and producing project for learning',
  //   description: 'Creating study-optimized beats for studying.',
  //   thumbnail:
  //     'https://i.scdn.co/image/ab6761610000e5ebfe9e198b5abac666e95030ff',
  //   links: [getProjectLinkById('cyan-spotify')],
  //   skills: mapStacksToSkills('Music,Logic Pro,VST,Producing'),
  // },
  // {
  //   id: 'wbc-id',
  //   title: 'WBC iD',
  //   verified: false,
  //   subtitle: 'White Blood Cell Sorting AI App',
  //   date: '2023',
  //   featured: false,
  //   headline:
  //     'Machine learning-based automatic classification application for red blood cell observation experiment results',
  //   description:
  //     'An AI application for iOS that can automatically distinguish types of stained white blood cells.',
  //   thumbnail: 'https://i.imgur.com/0KQfPqc.png',
  //   links: [getProjectLinkById('wbc-github')],
  //   skills: mapStacksToSkills('Swift,iOS,AI,Machine Learning,Core ML,Biology'),
  // },
  // {
  //   id: 'elder-guardian',
  //   title: 'Elder Guardian',
  //   verified: false,
  //   subtitle: 'Protecting Elders from threats with Physical Computing',
  //   date: '2023',
  //   featured: false,
  //   headline:
  //     'Integrated safety management and communication system for the elderly based on physical computing',
  //   description:
  //     "Provides fall detection and detection of others' approach and reporting functions, and suggestions for going out according to temperature and humidity conditions for the safety of the elderly.",
  //   thumbnail: 'https://i.imgur.com/MOcUewH.png',
  //   links: [getProjectLinkById('elder-guardian-github')],
  //   skills: mapStacksToSkills('Arduino,Web,C++,Communication,Wi-Fi'),
  // },
  // {
  //   id: 'gravity-correction-master',
  //   title: 'Gravity Correction Master',
  //   verified: false,
  //   subtitle: 'Easy Gravity Correction Software',
  //   date: '2023',
  //   featured: false,
  //   headline:
  //     'GUI-based fast gravity anomaly correction and calculation program using Python',
  //   description:
  //     'A GUI-based Python program that helps with accurate and fast calculation of gravity anomalies and gravity correction.',
  //   thumbnail: 'https://i.imgur.com/14Oyuev.png',
  //   links: [getProjectLinkById('gravity-github')],
  //   skills: mapStacksToSkills('Python,Earth Science,Tkinter'),
  // },
  // {
  //   id: 'biryong-research',
  //   title: '2022 비룡 R&E 연구',
  //   verified: true,
  //   subtitle: 'Purifying waste water using natural plant flocculants',
  //   date: '2022',
  //   featured: false,
  //   award:
  //     'DDSHS-QACI International Exchange Presentation (DDSHS Representative)',
  //   headline:
  //     'Research on wastewater purification flocculants using tannins extracted from fruit seeds',
  //   description:
  //     'Research on purifying wastewater using tannins extracted from plants. Conducted international exchange presentations and R&E.',
  //   thumbnail: 'https://i.imgur.com/F5SMrTq.png',
  //   links: [],
  //   skills: mapStacksToSkills(
  //     'Chemistry,Biology,HPLC,Spectrophotometer,Advanced Equipment,Extraction',
  //   ),
  // },
  // {
  //   id: 'creative-research',
  //   title: '2023 창의 R&E 연구',
  //   verified: false,
  //   subtitle: 'Machine Learning for Artificial Vision',
  //   date: '2023',
  //   featured: false,
  //   headline:
  //     'Machine learning program development and application research for artificial vision',
  //   description:
  //     'Research on machine learning used for phosphene images for artificial vision, studying artificial intelligence that processes phosphene images and tests them.',
  //   thumbnail: 'https://i.imgur.com/CLyuGWO.png',
  //   links: [],
  //   skills: mapStacksToSkills('Python,TensorFlow,Biology,AI,Machine Learning'),
  // },
  // {
  //   id: 'easyreact',
  //   title: 'EasyReact',
  //   verified: false,
  //   subtitle: 'Wiki Based Organic Reaction Library API',
  //   date: '2023',
  //   featured: false,
  //   headline:
  //     'User participation-based organic chemical reaction information wiki and OpenAPI development',
  //   description:
  //     'EasyReact is an API that allows you to check organic chemical reaction information based on collective intelligence (wiki).',
  //   thumbnail: 'https://i.imgur.com/dhhoLcK.png',
  //   links: [getProjectLinkById('easyreact-keynote')],
  //   skills: mapStacksToSkills('Web,Linux,Node.js,MySQL,SNS,Wiki'),
  // },
  // {
  //   id: 'scian-links',
  //   title: 'SCIAN Links',
  //   verified: true,
  //   subtitle:
  //     'Custom Link Shortening Service with Permission Check and Tracking',
  //   date: '2024',
  //   featured: false,
  //   award: 'Featured in Disquiet Maker Digest #276',
  //   headline:
  //     'Database and user authentication, platform-based deep linking and logging system',
  //   description:
  //     'A link shortening service using Node.js and MySQL that provides dynamic link service through user authentication and platform detection.',
  //   thumbnail: 'https://i.imgur.com/U77qqOC.png',
  //   links: [getProjectLinkById('scian-links')],
  //   skills: mapStacksToSkills('Web,Linux,Node.js,MySQL'),
  // },
  // {
  //   id: 'goding',
  //   title: '갓잉 (Goding)',
  //   verified: false,
  //   subtitle: 'Sharing-oriented Study Planning and Records Management Platform',
  //   date: '2024~',
  //   featured: true,
  //   headline: 'Goding: Sharing-centered study planning and recording platform',
  //   description:
  //     'A sharing-centered study planning and recording platform that helps plan studies, compare with recorded content based on this, and share with people from various groups to create study methods and routines that suit you.',
  //   thumbnail: 'https://assets.goding.us/preview.png',
  //   links: [getProjectLinkById('goding-website')],
  //   skills: mapStacksToSkills(
  //     'iOS,React,Web,Linux,Node.js,MySQL,Figma,SNS,Business Model',
  //   ),
  // },
  // {
  //   id: 'goding-ai',
  //   title: '갓잉 AI 어시스턴트',
  //   verified: false,
  //   subtitle: 'AI Assistant for Study Log Summary and Plan Recommendation',
  //   date: '2024',
  //   featured: false,
  //   headline:
  //     'Large Language Model (LLM) and fine-tuning based study habit analysis and learning suggestion application',
  //   description:
  //     'An AI application for iOS that scores learning when learning records are entered and provides auxiliary functions for learning plans through chat.',
  //   thumbnail: 'https://i.imgur.com/Qp8v7zP.png',
  //   links: [getProjectLinkById('goding-ai-gallery')],
  //   skills: mapStacksToSkills('iOS,AI,Machine Learning,LLM,Fine-tuning'),
  // },
  // {
  //   id: 'genesort-ai',
  //   title: 'GeneSort AI',
  //   verified: false,
  //   subtitle: 'DNA Sequencing for Sorting Attributes with AI',
  //   date: '2023-2024',
  //   featured: false,
  //   headline:
  //     'Artificial intelligence-based organism characteristic discrimination program using nanopore DNA sequencing',
  //   description:
  //     'Research on a program that extracts DNA information using nanopore DNA sequencing and analyzes what characteristics new DNA has through artificial intelligence that learned DNA characteristics.',
  //   thumbnail: 'https://i.imgur.com/a4yo3Yc.png',
  //   links: [],
  //   skills: mapStacksToSkills(
  //     'Biology,AI,Machine Learning,Genetic Engineering',
  //   ),
  // },
  // {
  //   id: 'jobara',
  //   title: 'jobAra',
  //   verified: false,
  //   subtitle: 'Job Recommendation Program based on Linear Algebra',
  //   date: '2024',
  //   featured: false,
  //   headline:
  //     'User-customized career suggestion platform based on recommendation algorithms through matrices and natural language processing',
  //   description:
  //     'jobAra is a service that recommends careers that best match user preferences using mathematical algorithms and matrices.',
  //   thumbnail: 'https://i.imgur.com/qEOq5Ph.png',
  //   links: [getProjectLinkById('jobara-service')],
  //   skills: mapStacksToSkills(
  //     'Web,React,Mathematics,Node.js,Career,Linear Algebra',
  //   ),
  // },
  // {
  //   id: 'blog-scian',
  //   title: 'Blog SCIAN',
  //   verified: false,
  //   subtitle: 'Science, Creativity, Invention, Art, and Nature',
  //   date: '2020~',
  //   featured: true,
  //   headline: 'Mathematics and science, IT knowledge notes and sharing blog',
  //   description:
  //     'Contains and shares mathematical and scientific knowledge, IT information, programming, and various knowledge. AdSense approval has been received and revenue is being generated.',
  //   thumbnail: 'https://i.imgur.com/vHPG7nD.png',
  //   links: [getProjectLinkById('blog-scian')],
  //   skills: mapStacksToSkills(
  //     'Web,SNS,Environment,Physics,Chemistry,Biology,Earth Science,IT',
  //   ),
  // },
]
