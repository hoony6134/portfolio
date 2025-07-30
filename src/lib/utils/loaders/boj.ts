import parse from 'node-html-parser'
import { extractOnlyKeyValueTables, extractNumber } from '../boj-parser'

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
    const directUrl = `https://www.acmicpc.net/user/${USERNAME}`

    let response = await fetch(proxyUrl, {
      headers: {
        'User-Agent': userAgent,
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'ko-KR,ko;q=0.8,en-US;q=0.5,en;q=0.3',
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache',
      },
    })

    if (!response.ok) {
      try {
        response = await fetch(directUrl, {
          mode: 'no-cors',
          headers: {
            'User-Agent': userAgent,
          },
        })
      } catch (directError) {
        throw new Error(
          `Both proxy and direct requests failed. Proxy status: ${response.status}`,
        )
      }
    }

    const data = await response.text()

    if (data.length === 0) {
      throw new Error('Empty response received')
    }
    const dom = parse(data)
    const candidateTables = extractOnlyKeyValueTables(dom)

    const table = candidateTables.find(
      (table) =>
        table.some(({ key }) => key.text === '등수') &&
        table.some(({ key }) => key.text === '맞은 문제'),
    )

    if (!table) {
      throw new Error('No such user or table structure changed')
    }

    const rankRow = table.find(({ key }) => key.text === '등수')
    const acceptedRow = table.find(({ key }) => key.text === '맞은 문제')

    if (!rankRow || !acceptedRow) {
      throw new Error('Required fields not found')
    }

    const rank = +extractNumber(rankRow.value.text)
    const accepted = +extractNumber(acceptedRow.value.text)

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
