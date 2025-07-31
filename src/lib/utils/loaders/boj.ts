import * as cheerio from 'cheerio'

const BOJ_API_BASE = '/api/boj'
const USERNAME = 'hoony6134'

export interface BojUserData {
  rank: number
  accepted: number
  displayText: string
}

const userAgent = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3`

export const fetchBaekjoon = async (): Promise<BojUserData | null> => {
  try {
    const proxyUrl = `${BOJ_API_BASE}/user/${USERNAME}`

    console.log('Fetching Baekjoon data from proxy:', proxyUrl) // 디버깅용 로그 추가

    const response = await fetch(proxyUrl, {
      headers: {
        'User-Agent': userAgent,
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      },
    })

    console.log('Proxy response status:', response.status) // 응답 상태 로깅

    if (response.ok) {
      const data = await response.text()

      console.log('Proxy response data length:', data.length) // 응답 데이터 길이 로깅

      if (data.length > 0) {
        return parseBaekjoonData(data)
      }
    }

    console.warn('Proxy failed, falling back to direct API call.')

    // 프록시 실패 시 직접 API 호출
    const directUrl = `https://www.acmicpc.net/user/${USERNAME}`
    const directResponse = await fetch(directUrl, {
      headers: {
        'User-Agent': userAgent,
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      },
    })

    console.log('Direct API response status:', directResponse.status) // 직접 호출 응답 상태 로깅

    if (!directResponse.ok) {
      throw new Error(`Direct API call failed: ${directResponse.status}`)
    }

    const directData = await directResponse.text()

    console.log('Direct API response data length:', directData.length) // 직접 호출 응답 데이터 길이 로깅

    if (directData.length === 0) {
      throw new Error('Empty response received from direct API call')
    }

    return parseBaekjoonData(directData)
  } catch (error) {
    console.error('Failed to fetch Baekjoon user data:', error)
    return null
  }
}

const parseBaekjoonData = (data: string): BojUserData => {
  const $ = cheerio.load(data)
  let rank = 0
  let accepted = 0

  $('table tr').each((_, row) => {
    const th = $(row).find('th')
    const td = $(row).find('td')

    if (th.text() === '등수') {
      rank = parseInt(td.text().replace(/,/g, ''), 10)
    } else if (th.text() === '맞은 문제') {
      accepted = parseInt(td.text().replace(/,/g, ''), 10)
    }
  })

  if (rank === 0 || accepted === 0) {
    throw new Error(
      'Could not find rank or accepted problems count. The table structure might have changed.',
    )
  }

  return {
    rank,
    accepted,
    displayText: `#${rank} / ${accepted}`,
  }
}

export type BaekjoonResponse = BojUserData
