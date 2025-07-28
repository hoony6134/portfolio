import Hero from './components/hero'
import Skills from './components/skills'

function HomePage() {
  return (
    <div>
      <Hero />
      <Skills />
      <h1>Welcome to the Home Page</h1>
      <p>This is the main content of the home page.</p>
    </div>
  )
}

export { HomePage }
