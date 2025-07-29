import parse from 'node-html-parser'
import { extractOnlyKeyValueTables } from './parse/extract-tables.ts'
import { extractNumber } from './parse/extract-number.ts'

const userAgent = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3`

const BAEKJOON_URL_BASE = 'https://www.acmicpc.net/user/hoony6134'

export interface BaekjoonUserData {
  rank?: number
  accepted?: number
}

export const fetchBaekjoon = async (
  username: string,
): Promise<BaekjoonUserData | null> => {
  try {
    const response = await fetch(`${BAEKJOON_URL_BASE}/${username}`, {
      headers: {
        'User-Agent': userAgent,
      },
    })
    if (!response.ok) {
      return null
    }
    const data = await response.text()
    const dom = parse(data)
    const candidateTables = extractOnlyKeyValueTables(dom)
    const table = candidateTables.find(
      (table) =>
        table.some(({ key }) => key.text === '등수') &&
        table.some(({ key }) => key.text === '맞은 문제'),
    )
    if (!table) {
      throw new Error('No such user')
    }

    const rank = +extractNumber(
      table.find(({ key }) => key.text === '등수')!.value.text,
    )
    const accepted = +extractNumber(
      table.find(({ key }) => key.text === '맞은 문제')!.value.text,
    )

    return {
      rank,
      accepted,
    }
  } catch (error) {
    console.error('Failed to fetch Baekjoon user data:', error)
    return null
  }
}
