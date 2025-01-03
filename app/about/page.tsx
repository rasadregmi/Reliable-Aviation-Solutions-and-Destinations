import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">About R.A.S.A.D.</h1>
      
      <Card className="bg-gray-800 bg-opacity-50 backdrop-blur-sm text-white">
        <CardHeader>
          <CardTitle className="text-2xl">Reliable Aviation Solutions and Destinations</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>
            R.A.S.A.D. is your trusted partner in air travel, providing reliable aviation solutions and connecting you to destinations around the world. Our mission is to make air travel accessible, comfortable, and enjoyable for everyone.
          </p>
          
          <h2 className="text-xl font-semibold">Our Vision</h2>
          <p>
            To be the leading flight booking platform, known for our reliability, customer service, and innovative travel solutions.
          </p>
          
          <h2 className="text-xl font-semibold">What We Offer</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Access to a wide range of airlines and destinations</li>
            <li>User-friendly booking experience</li>
            <li>Competitive prices and exclusive deals</li>
            <li>24/7 customer support</li>
            <li>Flexible booking options</li>
          </ul>
          
          <h2 className="text-xl font-semibold">Our Commitment</h2>
          <p>
            At R.A.S.A.D., we are committed to providing you with the best possible travel experience. From the moment you search for a flight to the time you reach your destination, we're here to ensure your journey is smooth and enjoyable.
          </p>
          
          <p>
            Thank you for choosing R.A.S.A.D. for your travel needs. We look forward to helping you explore the world!
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

