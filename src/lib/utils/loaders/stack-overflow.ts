const URL =
  '/api/stackexchange/2.3/users/15921510?order=desc&sort=reputation&site=stackoverflow'

export interface StackOverflowResponse {
  items: StackOverflowUser[]
  has_more: boolean
  quota_max: number
  quota_remaining: number
}

export interface StackOverflowUser {
  reputation: number
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
