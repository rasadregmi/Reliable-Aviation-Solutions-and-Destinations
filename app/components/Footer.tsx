import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-50 text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4">R.A.S.A.D.</h3>
            <p className="text-sm md:text-base text-gray-400">Reliable Aviation Solutions and Destinations for your travel needs.</p>
          </div>
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/search" className="text-gray-400 hover:text-white transition-colors">Search Flights</Link></li>
              <li><Link href="/bookings" className="text-gray-400 hover:text-white transition-colors">My Bookings</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm md:text-base text-gray-400">
          <p>&copy; 2023 R.A.S.A.D. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

