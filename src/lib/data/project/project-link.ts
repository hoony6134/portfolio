// import type of tabler icons
import {
  IconFileCheck,
  IconWorld,
  IconBrandGithub,
  IconBrandGooglePlay,
  IconBrandSpotify,
  IconPresentation,
} from '@tabler/icons-react'

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
    title: 'Report',
    url: 'https://science.go.kr/mps/1075/bbs/424/moveBbsNttDetail.do?nttSn=44406',
    icon: IconFileCheck,
  },
  {
    id: 'cydial-web',
    title: 'Web Portal',
    url: 'https://cydial.scian.xyz/',
    icon: IconWorld,
  },
  {
    id: 'cydial-github',
    title: 'GitHub',
    url: 'https://github.com/hoony6134/cydial',
    icon: IconBrandGithub,
  },
  {
    id: 'cydial-app',
    title: 'Google Play',
    url: 'https://play.google.com/store/apps/details?id=appinventor.ai_hoony6134.Cydial_Beta',
    icon: IconBrandGooglePlay,
  },
  {
    id: 'ask-blog',
    title: 'Blog (Tistory)',
    url: 'https://agarseakeeper.tistory.com/category/%ED%95%B4%EC%96%91%EC%83%9D%EB%AC%BC%ED%83%90%EA%B5%AC%EB%8C%80%ED%9A%8C',
    icon: IconWorld,
  },
  {
    id: 'flocmatch-website',
    title: 'Website',
    url: 'https://fm.scian.xyz/',
    icon: IconWorld,
  },
  {
    id: 'livsak-website',
    title: 'Website',
    url: 'https://livsak.areumfit.com/',
    icon: IconWorld,
  },
  {
    id: 'ddshs-demo',
    title: 'Demo Page',
    url: 'https://ddshs-demo.scian.xyz/',
    icon: IconWorld,
  },
  {
    id: 'languard-chrome',
    title: 'Chrome Web Store',
    url: 'https://chromewebstore.google.com/detail/languard/ifgpkoomfngpmnjmoaidmkmmjjkdhfmn',
    icon: IconWorld,
  },
  {
    id: 'car-evaluation-github',
    title: 'GitHub',
    url: 'https://github.com/hoony6134/car-evaluation',
    icon: IconBrandGithub,
  },
  {
    id: 'cyan-spotify',
    title: 'Spotify',
    url: 'https://i.scian.xyz/spotify/',
    icon: IconBrandSpotify,
  },
  {
    id: 'wbc-github',
    title: 'GitHub',
    url: 'https://github.com/hoony6134/WBC-iD-iOS',
    icon: IconBrandGithub,
  },
  {
    id: 'elder-guardian-github',
    title: 'GitHub',
    url: 'https://github.com/hoony6134/Elder-Guardian',
    icon: IconBrandGithub,
  },
  {
    id: 'gravity-github',
    title: 'GitHub',
    url: 'https://github.com/hoony6134/gravity-correction-master',
    icon: IconBrandGithub,
  },
  {
    id: 'easyreact-keynote',
    title: 'Keynote Presentation',
    url: 'https://www.icloud.com/keynote/0b34IrlcFiCV2fffwjN-W-YZA',
    icon: IconPresentation,
  },
  {
    id: 'scian-links',
    title: 'Guide Blog',
    url: 'https://scian.xyz/tag/ep1',
    icon: IconWorld,
  },
  {
    id: 'goding-website',
    title: 'Website',
    url: 'https://goding.us/',
    icon: IconWorld,
  },
  {
    id: 'goding-ai-gallery',
    title: 'Gallery',
    url: 'https://imgur.com/a/LZs2Vo7',
    icon: IconWorld,
  },
  {
    id: 'jobara-service',
    title: 'Service',
    url: 'https://jobara.scian.xyz/',
    icon: IconWorld,
  },
  {
    id: 'blog-scian',
    title: 'Blog',
    url: 'https://scian.xyz',
    icon: IconWorld,
  },
  {
    id: 'hinguri-pingpong-github',
    title: 'GitHub',
    url: 'https://github.com/studio-void/hinguri-pingpong',
    icon: IconBrandGithub,
  },
  {
    id: 'campass-fe-github',
    title: 'GitHub (FE)',
    url: 'https://github.com/studio-void/campass-fe',
    icon: IconBrandGithub,
  },
  {
    id: 'campass-be-github',
    title: 'GitHub (BE)',
    url: 'https://github.com/studio-void/campass-be',
    icon: IconBrandGithub,
  },
  {
    id: 'campass-website',
    title: 'Demo',
    url: 'https://campass.scian.xyz/',
    icon: IconWorld,
  },
  {
    id: 'shimter-website',
    title: 'Website',
    url: 'https://shimter-fe.vercel.app/',
    icon: IconWorld,
  },
  {
    id: 'shimter-github',
    title: 'GitHub',
    url: 'https://github.com/hoony6134/shimter-fe',
    icon: IconBrandGithub,
  },
]
