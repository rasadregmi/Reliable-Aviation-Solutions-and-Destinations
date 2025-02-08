'use client'

import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { trackFlight } from '@/app/api/route'
import { toast } from 'react-hot-toast'

export function FlightTracker() {
  const [icao24, setIcao24] = useState('')
  const [flightData, setFlightData] = useState<any>(null)

  const handleTrack = async () => {
    try {
      const response = await trackFlight(icao24)
      setFlightData(response.data)
    } catch (error) {
      console.error('Error tracking flight:', error)
      toast.error('Failed to track flight. Please try again.')
    }
  }

  return (
    <Card className="bg-gray-800 text-white">
      <CardHeader>
        <CardTitle>Flight Tracker</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-2 mb-4">
          <Input
            type="text"
            placeholder="Enter ICAO24 code"
            value={icao24}
            onChange={(e) => setIcao24(e.target.value)}
            className="bg-gray-700 text-white"
          />
          <Button onClick={handleTrack}>Track</Button>
        </div>
        {flightData && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Flight Information</h3>
            <p>Latitude: {flightData.states[0][6]}</p>
            <p>Longitude: {flightData.states[0][5]}</p>
            <p>Altitude: {flightData.states[0][7]} m</p>
            <p>Velocity: {flightData.states[0][9]} m/s</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

