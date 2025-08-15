import PressCard from '@/components/press-card'
import { pressData } from '@/lib/data/press/press-data'

function Press() {
  return (
    <div className="hero-section flex items-center justify-start min-h-screen">
      <div className="flex flex-col items-start w-full">
        <h1 className="text-4xl font-bold mb-2">Press</h1>
        <p className="text-xl mb-8">
          Here you can find my press coverage and mentions.
        </p>
        <div className="grid grid-cols-2 gap-6 w-full">
          {pressData.map((press) => (
            <PressCard key={press.id} press={press} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Press
