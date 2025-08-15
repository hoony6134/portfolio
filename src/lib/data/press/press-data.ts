export interface PressData {
  id: string
  title: string
  source: string
  author: string
  date: string
  excerpt: string
  url: string
  category: 'research' | 'award' | 'interview' | 'feature' | 'other'
}

export const pressData: PressData[] = [
  {
    id: 'nobel-prize-research',
    title:
      '[창의융합인재 키우는 노벨과학 교육] "목표 향해 인내하며 연구한 결과"',
    source: '금강일보',
    author: '이준섭 기자',
    date: '2021-07-18',
    excerpt:
      '임 군은 "노벨상 수상에 필요한 기초과학 역량과 후속연구를 조사하고 연구하는 과정은 소중한 경험이었다"며 "특히 노벨과학동아리에서 연구와 조사를 지속해 오면서 배운 인내력, 창의력도 키워보는 등을 이번 대회를 통해 직접 연결시켜 보는 귀한 시간이었다"고 솔직하게밝혔다.',
    url: 'https://www.ggilbo.com/news/articleView.html?idxno=858991',
    category: 'interview',
  },
]

export function getPressDataByCategory(category?: string): PressData[] {
  if (!category) return pressData
  return pressData.filter((item) => item.category === category)
}

export function getPressDataById(id: string): PressData | undefined {
  return pressData.find((item) => item.id === id)
}
