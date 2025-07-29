import Profile from '/public/images/profile.jpeg'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { IconBrandGithub } from '@tabler/icons-react'
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
    <div className="hero-section flex items-center justify-start h-screen">
      <div className="flex flex-col items-start w-full">
        <div className="flex items-center justify-center gap-12">
          <Avatar className="size-32">
            <AvatarImage src={Profile} className="object-cover" />
            <AvatarFallback>JeongHoon Lim</AvatarFallback>
          </Avatar>
          <div className="flex-col">
            <h1 className="text-4xl font-bold mb-2">JeongHoon Lim</h1>
            <h2 className="text-2xl font-light mb-2">
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
            <div className="flex text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400 gap-4">
              <a
                href="https://github.com/hoony6134"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandGithub stroke={1.5} />
              </a>
            </div>
          </div>
          <div className="flex-grow" />
        </div>
        <p className="mt-8 text-lg">
          I am a student at the University of California, Berkeley, studying
          Computer Science and Business Administration. I am passionate about
          building products that make a difference.
        </p>
      </div>
    </div>
  )
}

export default Hero
