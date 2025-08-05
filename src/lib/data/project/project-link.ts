// import type of tabler icons
import { IconFileCheck } from '@tabler/icons-react'

export interface ProjectLink {
  id: string
  title: string
  url: string
  icon: any
  style?: string
}

export const projectLinks: ProjectLink[] = [
  {
    id: 'nutricheck-intro',
    title: 'Intro',
    url: 'https://science.go.kr/mps/1075/bbs/424/moveBbsNttDetail.do?nttSn=44406&page=1&searchCnd=aditfield4&aditfield10=&aditfield8=&searchKrwd=%EC%9E%84%EC%A0%95%ED%9B%88',
    icon: IconFileCheck,
  },
]
