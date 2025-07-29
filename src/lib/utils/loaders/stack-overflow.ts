const URL = 'https://stackoverflow.com/users/flair/15921510.json'

export interface StackOverflowData {
  displayName?: string
  reputation?: string | number
  profileUrl?: string
  badgeCounts?: {
    bronze?: number
    silver?: number
    gold?: number
  }
}

export const fetchStackOverFlowData =
  async (): Promise<StackOverflowData | null> => {
    try {
      const response = await fetch(URL)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      return data
    } catch (error) {
      console.error('Failed to fetch Stack Overflow data:', error)
      return null
    }
  }
