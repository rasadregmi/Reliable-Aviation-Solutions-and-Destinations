import { Button } from './components/ui/button'
import Image from 'next/image'
import { SearchForm } from './components/SearchForm'
import { FlightTracker } from './components/FlightTracker'

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
                  { value: '0k+', label: 'Travelers' },
                  { value: '0+', label: 'Airlines' },
                  { value: '0%', label: 'Satisfaction' },
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

        {/* Flight Tracker Section */}
        <div className="mt-16 md:mt-24">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Track Your Flight</h2>
          <FlightTracker />
        </div>
      </div>
    </div>
  )
}

