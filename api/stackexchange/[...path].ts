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
    const response = await fetch(`https://api.stackexchange.com/${apiPath}`, {
      method: req.method,
      headers: {
        'User-Agent': 'portfolio-app/1.0',
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip',
        'Connection': 'keep-alive',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    console.error('Stack Exchange API Error:', error)
    res.status(500).json({ 
      error: 'Failed to fetch from Stack Exchange API',
      message: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}
