const URL =
  'https://api.stackexchange.com/2.3/users/15921510?order=desc&sort=reputation&site=stackoverflow'

export interface StackOverflowResponse {
  items: StackOverflowUser[]
  has_more: boolean
  quota_max: number
  quota_remaining: number
}

export interface StackOverflowUser {
  badge_counts: BadgeCounts
  collectives: CollectiveUser[]
  account_id: number
  is_employee: boolean
  last_modified_date: number
  last_access_date: number
  reputation_change_year: number
  reputation_change_quarter: number
  reputation_change_month: number
  reputation_change_week: number
  reputation_change_day: number
  reputation: number
  creation_date: number
  user_type: string
  user_id: number
  website_url: string
  link: string
  profile_image: string
  display_name: string
}

export interface BadgeCounts {
  bronze: number
  silver: number
  gold: number
}

export interface CollectiveUser {
  collective: Collective
  role: string
}

export interface Collective {
  tags: string[]
  external_links: ExternalLink[]
  description: string
  link: string
  name: string
  slug: string
}

export interface ExternalLink {
  type: string
  link: string
}

export const fetchStackOverFlowData = async (): Promise<number | null> => {
  try {
    const response = await fetch(URL)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    const dataTyped = data as StackOverflowResponse
    return dataTyped.items[0]?.reputation ?? null
  } catch (error) {
    console.error('Failed to fetch Stack Overflow data:', error)
    return null
  }
}
