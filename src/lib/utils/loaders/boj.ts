import parse from 'node-html-parser'
import { extractOnlyKeyValueTables } from './parse/extract-tables.ts'
import { extractNumber } from './parse/extract-number.ts'

const BOJ_API_BASE = 'https://www.acmicpc.net/user/hoony6134'
const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'

export interface BOJUserData {
  rank?: number
  accepted?: number
  tier?: string
}

export const fetchBOJUserData = async (
  username: string,
): Promise<BOJUserData | null> => {
  try {
    const response = await fetch(`${BOJ_API_BASE}/${username}`, {
      headers: {
        'User-Agent': USER_AGENT,
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const html = await response.text()
    const dom = parse(html)
    const candidateTables = extractOnlyKeyValueTables(dom)

    const table = candidateTables.find(
      (table) =>
        table.some(({ key }) => key.text === '등수') &&
        table.some(({ key }) => key.text === '맞은 문제'),
    )

    if (!table) {
      throw new Error('BOJ user data table not found')
    }

    const rankElement = table.find(({ key }) => key.text === '등수')
    const acceptedElement = table.find(({ key }) => key.text === '맞은 문제')

    const rank = rankElement
      ? +extractNumber(rankElement.value.text)
      : undefined
    const accepted = acceptedElement
      ? +extractNumber(acceptedElement.value.text)
      : undefined

    return {
      rank,
      accepted,
    }
  } catch (error) {
    console.error('Failed to fetch BOJ user data:', error)
    return null
  }
}
