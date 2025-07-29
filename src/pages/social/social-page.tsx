import { useEffect, useState } from 'react'
import SocialCard from './components/social-card'
import {
  createSocialCategories,
  type SocialCategory,
} from '../../lib/data/social-categories'
import { socialData } from '../../lib/data/social-data'

function SocialPage() {
  const [socialCategories, setSocialCategories] = useState<SocialCategory[]>([])

  useEffect(() => {
    // 기본 소셜 데이터를 즉시 로드 (API 호출 없이)
    const categories = createSocialCategories(socialData)
    setSocialCategories(categories)
  }, [])

  return (
    <div className="hero-section flex items-center justify-start min-h-screen">
      <div className="flex flex-col items-start w-full">
        <h1 className="text-4xl font-bold mb-2 mt-24">Social</h1>
        <p className="text-xl mb-8">
          You can find me on various platforms. Feel free to connect!
        </p>

        <div className="w-full space-y-12">
          {socialCategories.map((category) => (
            <div key={category.id} className="w-full">
              <h2 className="text-2xl font-semibold mb-6 text-foreground">
                {category.name}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.items.map((social) => (
                  <SocialCard key={social.id} social={social} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SocialPage
