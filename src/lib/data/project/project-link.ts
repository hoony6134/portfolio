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
    url: 'https://viewer.science.go.kr:8080/SynapDocViewServer/viewer/doc.html?key=ffc3d805310a4bf7bd0440a280c3b64e&convType=img&convLocale=ko_KR&contextPath=/SynapDocViewServer',
    icon: IconFileCheck,
  },
]
