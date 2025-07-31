import { socialData } from './social-data'
import type { SocialItem } from './social-data'

export interface SocialCategory {
  id: string
  name: string
  items: SocialItem[]
}

export const categoryLabels: Record<string, string> = {
  contacts: 'Contacts',
  development: 'Development',
  social: 'Blog & SNS',
  entertainment: 'Games & Music',
}

export const createSocialCategories = (
  socialDataItems: SocialItem[],
): SocialCategory[] => [
  {
    id: 'contacts',
    name: 'Contacts',
    items: socialDataItems.filter((item) => item.category === 'contacts'),
  },
  {
    id: 'development',
    name: 'Development',
    items: socialDataItems.filter((item) => item.category === 'development'),
  },
  {
    id: 'social',
    name: 'Blog & SNS',
    items: socialDataItems.filter((item) => item.category === 'social'),
  },
  {
    id: 'entertainment',
    name: 'Games & Music',
    items: socialDataItems.filter((item) => item.category === 'entertainment'),
  },
]

export const socialCategories: SocialCategory[] =
  createSocialCategories(socialData)
