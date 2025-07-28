import Profile from '/public/images/profile.jpeg'

function Hero() {
  return (
    <div className="hero-section items-center w-screen h-screen justify-center">
      <div className="flex *:flex-row items-center justify-center w-full h-full gap-12 mx-48">
        <img
          src={Profile}
          alt="Profile"
          className="rounded-full w-36 h-36 mb-8 object-cover"
        />
        <div className="flex-col">
          <p className="text-2xl font-bold mb-4">JeongHoon Lim</p>
          <p className="text-lg mb-8">Software Engineer</p>
        </div>
        <div className="flex-grow" />
      </div>
    </div>
  )
}

export default Hero
