import Profile from '/public/images/profile.jpeg'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  IconAt,
  IconBrandGithub,
  IconBrandLinkedin,
  IconChevronDown,
  IconDots,
} from '@tabler/icons-react'
import { Link } from '@tanstack/react-router'
import { Link as ScrollLink } from 'react-scroll'
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
            <div className="flex gap-4">
              <a
                href="https://github.com/hoony6134"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400"
              >
                <IconBrandGithub stroke={1.5} />
              </a>
              <a
                href="mailto:admin@scian.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400"
              >
                <IconAt stroke={1.5} />
              </a>
              <a
                href="https://www.linkedin.com/in/hoony6134"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400"
              >
                <IconBrandLinkedin stroke={1.5} />
              </a>
              <Link
                to="/social"
                className="text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400"
              >
                <IconDots stroke={1.5} />
              </Link>
            </div>
          </div>
          <div className="flex-grow" />
        </div>
        <p className="mt-8 text-xl">
          I am a student at GIST, South Korea, studying Computer Science and
          Artificial Intelligence.
          <br />I am passionate about building innovative solutions that can{' '}
          <span className="font-black">make changes.</span>
        </p>
        <ScrollLink to="skills" smooth={true} duration={500}>
          <div className="flex *:items-center justify-center mt-8 mb-4 cursor-pointer font-semibold text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400">
            <IconChevronDown size={24} className="mr-1" />
            Learn More
          </div>
        </ScrollLink>
      </div>
    </div>
  )
}

export default Hero
