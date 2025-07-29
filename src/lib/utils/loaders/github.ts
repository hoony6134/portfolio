const GITHUB_API_BASE = 'https://api.github.com'

export interface GitHubUserData {
  login?: string
  name?: string
  public_repos?: number
  followers?: number
  following?: number
  bio?: string
}

export const fetchGitHubUserData = async (
  username: string,
): Promise<GitHubUserData | null> => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Failed to fetch GitHub user data:', error)
    return null
  }
}
