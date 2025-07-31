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

    const response = await fetch(proxyUrl)

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`)
    }

    const data = await response.text()

    if (data.length === 0) {
      throw new Error('Empty response received')
    }

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
  } catch (error) {
    console.error('Failed to fetch Baekjoon user data:', error)
    return null
  }
}

export type BaekjoonResponse = BojUserData
