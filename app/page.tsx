import { Button } from './components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { SearchForm } from './components/SearchForm'

export default function Home() {
  return (
    <div className="relative">
      <div className="container mx-auto px-4 py-12 md:py-18 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
              Discover Your <br />
              Next Adventure <br />
              with R.A.S.A.D.
            </h1>
            <p className="text-base md:text-lg text-gray-400">
              Book your flights with ease and explore the world with confidence
            </p>
            <SearchForm />
          </div>

          {/* Right Column */}
          <div className="relative mt-8 lg:mt-0 flex flex-col items-center">
            <div className="relative z-10 mb-8 lg:mb-0">
              <Image
                src="/airplane.png?height=400&width=400"
                alt="Travel Illustration"
                width={400}
                height={400}
                className="w-full max-w-md mx-auto lg:max-w-full"
              />
            </div>
            <div className="text-center w-full mt-8 lg:mt-4">
              <h2 className="text-xl md:text-2xl text-white mb-2 md:mb-4">
                Join the Community of
              </h2>
              <div className="inline-block bg-blue-600 text-white px-4 py-2 md:px-6 md:py-2 rounded-full text-base md:text-xl">
                Happy Travelers
              </div>
              <div className="flex justify-center gap-4 md:gap-8 mt-4 md:mt-8">
                {[
                  { value: '100k+', label: 'Travelers' },
                  { value: '500+', label: 'Airlines' },
                  { value: '98%', label: 'Satisfaction' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="bg-blue-600 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-white text-sm md:text-xl font-bold glow">
                      {stat.value}
                    </div>
                    <p className="text-white mt-2 text-xs md:text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Destinations Section */}
        <div className="mt-20 md:mt-32">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">Featured Destinations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Paris', 'Tokyo', 'New York'].map((city, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=200&width=400&text=${city}`}
                  alt={city}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{city}</h3>
                  <p className="text-gray-400 mb-4">Experience the magic of {city}</p>
                  <Button variant="outline" className="w-full">Explore Flights</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

