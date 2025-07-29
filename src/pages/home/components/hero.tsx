import Profile from '/public/images/profile.jpeg'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Typewriter } from 'react-simple-typewriter'

function Hero() {
  const words = [
    'a student.',
    'a full stack developer.',
    'a product manager.',
    'an entrepreneur.',
    'a researcher.',
  ]
  return (
    <div className="hero-section items-center w-screen h-screen justify-center">
      <div className="flex items-center justify-center w-full h-full gap-12">
        <Avatar className="size-32">
          <AvatarImage src={Profile} className="object-cover" />
          <AvatarFallback>JeongHoon Lim</AvatarFallback>
        </Avatar>
        <div className="flex-col">
          <h1 className="text-4xl font-bold mb-4">JeongHoon Lim</h1>
          <h2 className="text-2xl font-light">
            I'm&nbsp;
            <Typewriter
              words={words}
              cursor={true}
              loop={true}
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
        </div>
        <div className="flex-grow" />
      </div>
    </div>
  )
}

export default Hero
