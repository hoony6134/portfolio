export default async function handler(req: any, res: any) {
  const { path } = req.query
  const pathArray = Array.isArray(path) ? path : [path]
  const apiPath = pathArray.join('/')

  // CORS 헤더 설정
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  try {
    const response = await fetch(`https://www.acmicpc.net/${apiPath}`, {
      method: req.method,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
        'Accept-Encoding': 'gzip, deflate, br',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Cache-Control': 'max-age=0',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const html = await response.text()
    
    if (!html || html.trim().length === 0) {
      throw new Error('Empty response received')
    }

    // HTML을 그대로 반환 (BOJ 파서가 HTML을 파싱함)
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.status(200).send(html)
  } catch (error) {
    console.error('BOJ API Error:', error)
    res.status(500).json({ 
      error: 'Failed to fetch from BOJ',
      message: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}
