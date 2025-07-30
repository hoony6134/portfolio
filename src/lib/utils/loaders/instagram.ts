const INSTAGRAM_API_BASE = 'https://api.digitalbyte.cc/instagram/tucktools2.com'

export interface InstagramUserData {
  status?: boolean
  user_fullname?: string
  username?: string
  user_description?: string
  user_profile_pic?: string
  is_private?: boolean
  is_verified?: boolean
  user_followers?: number
  user_following?: number
  total_posts?: number
}

export const fetchInstagramUserData = async (
  username: string,
): Promise<InstagramUserData | null> => {
  try {
    const response = await fetch(`${INSTAGRAM_API_BASE}/${username}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()

    if (!data.status) {
      throw new Error('Instagram API returned unsuccessful status')
    }

    return data
  } catch (error) {
    console.error('Failed to fetch Instagram user data:', error)
    return null
  }
}
