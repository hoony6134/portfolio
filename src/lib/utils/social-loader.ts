import { socialData, type SocialItem } from '../data/social-data'
import { fetchStackOverFlowData } from './loaders/stack-overflow'
import { fetchGitHubUserData } from './loaders/github'
import { fetchRedditUserData } from './loaders/reddit'
import { fetchInstagramUserData } from './loaders/instagram'
import { fetchSolvedac } from './loaders/solvedac'

export const loadSocialDataWithDynamicValues = async (): Promise<
  SocialItem[]
> => {
  try {
    const [stackOverflowReputation, githubData, redditKarma, instagramData, solvedacData] =
      await Promise.all([
        fetchStackOverFlowData(),
        fetchGitHubUserData('hoony6134'),
        fetchRedditUserData('applr_'),
        fetchInstagramUserData('_jh_0105'),
        fetchSolvedac(),
      ])

    const enhancedSocialData = [...socialData]

    if (stackOverflowReputation !== null) {
      const stackOverflowIndex = enhancedSocialData.findIndex(
        (item) => item.id === 'stackoverflow',
      )
      if (stackOverflowIndex !== -1) {
        enhancedSocialData[stackOverflowIndex] = {
          ...enhancedSocialData[stackOverflowIndex],
          additionalValue: {
            label: 'Reputation',
            value: stackOverflowReputation,
            style: 'stack-overflow',
          },
        }
      }
    }

    if (githubData?.followers !== undefined) {
      const githubIndex = enhancedSocialData.findIndex(
        (item) => item.id === 'github',
      )
      if (githubIndex !== -1) {
        enhancedSocialData[githubIndex] = {
          ...enhancedSocialData[githubIndex],
          additionalValue: {
            label: 'Followers',
            value: githubData.followers,
            style: 'github',
          },
        }
      }
    }

    if (redditKarma !== null) {
      const redditIndex = enhancedSocialData.findIndex(
        (item) => item.id === 'reddit',
      )
      if (redditIndex !== -1) {
        enhancedSocialData[redditIndex] = {
          ...enhancedSocialData[redditIndex],
          additionalValue: {
            label: 'Karma',
            value: redditKarma,
            style: 'reddit',
          },
        }
      }
    }

    if (instagramData?.user_followers !== undefined) {
      const instagramIndex = enhancedSocialData.findIndex(
        (item) => item.id === 'instagram',
      )
      if (instagramIndex !== -1) {
        enhancedSocialData[instagramIndex] = {
          ...enhancedSocialData[instagramIndex],
          additionalValue: {
            label: 'Followers',
            value: instagramData.user_followers,
            style: 'instagram',
          },
        }
      }
    }

    if (solvedacData?.tierName) {
      const solvedacIndex = enhancedSocialData.findIndex(
        (item) => item.id === 'solved.ac',
      )
      if (solvedacIndex !== -1) {
        enhancedSocialData[solvedacIndex] = {
          ...enhancedSocialData[solvedacIndex],
          additionalValue: {
            label: '',
            value: solvedacData.tierName,
            style: 'solvedac',
            className: `font-bold`,
          },
          gradientClasses: `from-[${solvedacData.tierColor}] to-[${solvedacData.tierColor}]`,
        }
      }
    }

    return enhancedSocialData
  } catch (error) {
    console.error('Failed to load dynamic social data:', error)
    return socialData
  }
}

export const loadStackOverflowData = async (): Promise<number | null> => {
  try {
    return await fetchStackOverFlowData()
  } catch (error) {
    console.error('Failed to load Stack Overflow data:', error)
    return null
  }
}

export const loadGithubData = async (): Promise<{
  followers: number
} | null> => {
  try {
    const data = await fetchGitHubUserData('hoony6134')
    if (data && data.followers !== undefined) {
      return { followers: data.followers }
    }
    return null
  } catch (error) {
    console.error('Failed to load GitHub data:', error)
    return null
  }
}

export const loadRedditData = async (): Promise<number | null> => {
  try {
    return await fetchRedditUserData('applr_')
  } catch (error) {
    console.error('Failed to load Reddit data:', error)
    return null
  }
}

export const loadInstagramData = async (): Promise<{
  followers: number
  following: number
  posts: number
} | null> => {
  try {
    const data = await fetchInstagramUserData('_jh_0105')
    if (data && data.user_followers !== undefined) {
      return {
        followers: data.user_followers,
        following: data.user_following || 0,
        posts: data.total_posts || 0,
      }
    }
    return null
  } catch (error) {
    console.error('Failed to load Instagram data:', error)
    return null
  }
}

export const loadSolvedacData = async () => {
  try {
    return await fetchSolvedac()
  } catch (error) {
    console.error('Failed to load Solved.ac data:', error)
    return null
  }
}
