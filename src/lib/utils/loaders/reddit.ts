const REDDIT_API_BASE = 'https://www.reddit.com'

export interface RedditUserData {
  kind?: string
  data?: {
    total_karma?: number
    name?: string
    link_karma?: number
    comment_karma?: number
    awarder_karma?: number
    awardee_karma?: number
  }
}

export const fetchRedditUserData = async (
  username: string,
): Promise<number | null> => {
  try {
    const response = await fetch(
      `${REDDIT_API_BASE}/user/${username}/about.json`,
    )
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    const userData = data as RedditUserData
    return userData.data?.total_karma ?? null
  } catch (error) {
    console.error('Failed to fetch Reddit user data:', error)
    return null
  }
}
