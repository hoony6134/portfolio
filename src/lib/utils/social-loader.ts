import { socialData, type SocialItem } from '../data/social-data'
import { fetchStackOverFlowData } from './loaders/stack-overflow'
import { fetchGitHubUserData } from './loaders/github'

export const loadSocialDataWithDynamicValues = async (): Promise<
  SocialItem[]
> => {
  try {
    // 동적 데이터 로드 (병렬 처리)
    const [stackOverflowReputation, githubData] = await Promise.all([
      fetchStackOverFlowData(),
      fetchGitHubUserData('hoony6134'),
    ])

    // socialData 복사본 생성
    const enhancedSocialData = [...socialData]

    // Stack Overflow 항목 찾기 및 reputation 추가
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

    // GitHub 항목 찾기 및 followers 추가
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

    return enhancedSocialData
  } catch (error) {
    console.error('Failed to load dynamic social data:', error)
    return socialData
  }
}
