import {
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandSpotify,
  IconHome,
  IconBrandInstagram,
  IconBrandDiscord,
  IconBrandReddit,
  IconBrandGooglePlay,
  IconBrandChrome,
  IconBrandSteam,
  IconBrandStackoverflow,
} from '@tabler/icons-react'

export interface SocialItem {
  id: string
  name: string
  username: string
  icon: any
  href: string
  gradientClasses: string
  verified?: boolean
  category: string
  additionalValue?: {
    label: string
    value: string | number
    style?: 'stack-overflow' | 'github' | 'reddit' | 'instagram'
    className?: string
  }
}

export const socialData: SocialItem[] = [
  {
    id: 'email',
    name: 'E-mail',
    username: 'Click to send me an email',
    icon: IconMail,
    href: 'mailto:admin@scian.xyz',
    gradientClasses: 'from-blue-500 to-blue-600',
    verified: false,
    category: 'contacts',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    username: 'hoony6134',
    icon: IconBrandLinkedin,
    href: 'https://www.linkedin.com/in/hoony6134',
    gradientClasses: 'from-[#0077B5] to-[#008CC9]',
    verified: true,
    category: 'contacts',
  },
  {
    id: 'github',
    name: 'GitHub',
    username: '@hoony6134',
    icon: IconBrandGithub,
    href: 'https://github.com/hoony6134',
    gradientClasses: 'from-[#24292e] to-[#2b3137]',
    verified: false,
    category: 'development',
  },
  {
    id: 'googleplay',
    name: 'Google Play',
    username: 'SCIAN',
    icon: IconBrandGooglePlay,
    href: 'https://play.google.com/store/apps/dev?id=6515470085947911101',
    gradientClasses: 'from-[#4285F4] to-[#DB4437]',
    verified: false,
    category: 'development',
  },
  {
    id: 'chromewebstore',
    name: 'Chrome Web Store',
    username: 'scian.xyz',
    icon: IconBrandChrome,
    href: 'https://chromewebstore.google.com/detail/languard/ifgpkoomfngpmnjmoaidmkmmjjkdhfmn',
    gradientClasses: 'from-[#DB4437] to-[#F4B400]',
    verified: true,
    category: 'development',
  },
  {
    id: 'tistory',
    name: 'Tistory',
    username: 'SCIAN',
    icon: IconHome,
    href: 'https://scian.xyz',
    gradientClasses: 'from-[#FF604F] to-[#F06936]',
    verified: false,
    category: 'social',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    username: '@_jh_0105',
    icon: IconBrandInstagram,
    href: 'https://www.instagram.com/_jh_0105',
    gradientClasses: 'from-[#D300C5] via-[#FF0069] to-[#FFD600]',
    verified: false,
    category: 'social',
  },
  {
    id: 'spotify',
    name: 'Spotify',
    username: 'Cyan',
    icon: IconBrandSpotify,
    href: 'https://open.spotify.com/artist/73DiCrbvla9WAvdUvwuznm',
    gradientClasses: 'from-[#1BD760] to-[#1BD760]',
    verified: true,
    category: 'entertainment',
  },
  {
    id: 'discord',
    name: 'Discord',
    username: '@scian_',
    icon: IconBrandDiscord,
    href: 'https://discord.com/users/695454523518615564',
    gradientClasses: 'from-[#5865F2] to-[#5865F2]',
    verified: false,
    category: 'contacts',
  },
  {
    id: 'reddit',
    name: 'Reddit',
    username: 'u/applr_',
    icon: IconBrandReddit,
    href: 'https://www.reddit.com/user/applr_',
    gradientClasses: 'from-[#FF4500] to-[#FF4500]',
    verified: false,
    category: 'social',
  },
  {
    id: 'steam',
    name: 'Steam',
    username: 'scian_',
    icon: IconBrandSteam,
    href: 'https://steamcommunity.com/id/scian_/',
    gradientClasses: 'from-[#09172A] to-[#0B88B9]',
    verified: false,
    category: 'entertainment',
  },
  {
    id: 'stackoverflow',
    name: 'Stack Overflow',
    username: 'hoony6134',
    icon: IconBrandStackoverflow,
    href: 'https://stackoverflow.com/users/15921510/hoony6134',
    gradientClasses: 'from-[#F48024] to-[#F58A07]',
    verified: false,
    category: 'development',
  },
]
