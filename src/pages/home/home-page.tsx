import Hero from './components/hero'
import Skills from './components/skills'
import { Element } from 'react-scroll'

function HomePage() {
  return (
    <div>
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
    </div>
  )
}

export { HomePage }
