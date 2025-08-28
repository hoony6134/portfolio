const SOLVEDAC_API_BASE = '/api/solvedac'
const USERNAME = 'hoony6134'

export interface SolvedacUserData {
  handle: string
  tier: number
  rating: number
  arenaTier: number
  arenaRating: number
  arenaMaxTier: number
  arenaMaxRating: number
  rank: number
  solvedCount: number
  tierName: string
  tierColor: string
  arenaTierName: string
  arenaTierColor: string
  arenaMaxTierName: string
  arenaMaxTierColor: string
  displayText: string
}

export const resolveSolvedacAlgoTier = (tier: number): string => {
  const tierNames = [
    'Unrated',
    'Bronze V',
    'Bronze IV',
    'Bronze III',
    'Bronze II',
    'Bronze I',
    'Silver V',
    'Silver IV',
    'Silver III',
    'Silver II',
    'Silver I',
    'Gold V',
    'Gold IV',
    'Gold III',
    'Gold II',
    'Gold I',
    'Platinum V',
    'Platinum IV',
    'Platinum III',
    'Platinum II',
    'Platinum I',
    'Diamond V',
    'Diamond IV',
    'Diamond III',
    'Diamond II',
    'Diamond I',
    'Ruby V',
    'Ruby IV',
    'Ruby III',
    'Ruby II',
    'Ruby I',
    'Master',
  ]
  return tierNames[tier] || 'Unrated'
}

export const resolveSolvedacArenaTier = (tier: number): string => {
  if (tier <= 0) return 'Unrated'
  if (tier <= 2) return 'Bronze'
  if (tier <= 4) return 'Silver'
  if (tier <= 6) return 'Gold'
  if (tier <= 8) return 'Platinum'
  if (tier <= 10) return 'Diamond'
  if (tier <= 13) return 'Ruby'
  return 'Master'
}

export const resolveSolvedacAlgoColor = (tier: number) => {
  if (tier == 1) return '#9d4900'
  if (tier == 2) return '#a54f00'
  if (tier == 3) return '#ad5600'
  if (tier == 4) return '#b55d0a'
  if (tier == 5) return '#c67739'
  // silver
  if (tier == 6) return '#38546e'
  if (tier == 7) return '#3d5a74'
  if (tier == 8) return '#435f7a'
  if (tier == 9) return '#496580'
  if (tier == 10) return '#4e6a86'
  // gold
  if (tier == 11) return '#d28500'
  if (tier == 12) return '#df8f00'
  if (tier == 13) return '#ec9a00'
  if (tier == 14) return '#f9a518'
  if (tier == 15) return '#ffb028'
  // platinum
  if (tier == 16) return '#00c78b'
  if (tier == 17) return '#00d497'
  if (tier == 18) return '#27e2a4'
  if (tier == 19) return '#3ef0b1'
  if (tier == 20) return '#51fdbd'
  // diamond
  if (tier == 21) return '#009ee5'
  if (tier == 22) return '#00a9f0'
  if (tier == 23) return '#00b4fc'
  if (tier == 24) return '#2bbfff'
  if (tier == 25) return '#41caff'
  // ruby
  if (tier == 26) return '#e0004c'
  if (tier == 27) return '#ea0053'
  if (tier == 28) return '#f5005a'
  if (tier == 29) return '#ff0062'
  if (tier == 30) return '#ff3071'
  // master
  if (tier == 31) return '#b300e0'
  return '#000000'
}

export const resolveSolvedacArenaColor = (tier: number): string => {
  if (tier <= 0) return '#818996'
  if (tier <= 2) return '#725039'
  if (tier <= 4) return '#2c4182'
  if (tier <= 6) return '#ffa515'
  if (tier <= 8) return '#46db66'
  if (tier <= 10) return '#30a1e5'
  if (tier <= 13) return '#ff143b'
  return '#818996'
}

export const fetchSolvedac = async (): Promise<SolvedacUserData | null> => {
  try {
    const response = await fetch(
      `${SOLVEDAC_API_BASE}/api/v3/user/show?handle=${USERNAME}`,
    )
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()

    return {
      handle: data.handle || USERNAME,
      tier: data.tier || 0,
      rating: data.rating || 0,
      arenaTier: data.arenaTier || 0,
      arenaRating: data.arenaRating || 0,
      arenaMaxTier: data.arenaMaxTier || 0,
      arenaMaxRating: data.arenaMaxRating || 0,
      rank: data.rank || 0,
      solvedCount: data.solvedCount || 0,
      tierName: `${resolveSolvedacAlgoTier(data.tier || 0)} / ${data.rating || 0}`,
      tierColor: resolveSolvedacAlgoColor(data.tier || 0),
      arenaTierName: resolveSolvedacArenaTier(data.arenaTier || 0),
      arenaTierColor: resolveSolvedacArenaColor(data.arenaTier || 0),
      arenaMaxTierName: resolveSolvedacArenaTier(data.arenaMaxTier || 0),
      arenaMaxTierColor: resolveSolvedacArenaColor(data.arenaMaxTier || 0),
      displayText: `#${(data.rank || 0).toLocaleString()} / ${(data.solvedCount || 0).toLocaleString()}`,
    }
  } catch (error) {
    console.error('Failed to fetch Solved.ac user data:', error)
    return null
  }
}

export type SolvedacResponse = SolvedacUserData
