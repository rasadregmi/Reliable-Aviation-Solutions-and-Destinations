'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { SearchForm } from '../components/SearchForm'
import BookingForm from '@/app/components/BookingForm'
import { searchFlights, getFlightPrices } from '@/app/api/route'
import { toast } from 'react-hot-toast'

interface Flight {
  id: string;
  airline: string;
  departure: string;
  arrival: string;
  price: number;
  departureAirport: string;
  departureTime: string;
  arrivalAirport: string;
  arrivalTime: string;
  flightStatus: string;
}

export default function SearchResults() {
  const searchParams = useSearchParams()
  const [searchResults, setSearchResults] = useState<Flight[]>([])
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchFlights = async () => {
      setLoading(true);
      try {
        const from = searchParams.get('from') || '';
        const to = searchParams.get('to') || '';
        const date = searchParams.get('departDate') || '';

        const { data } = await searchFlights(from, to, date);

        setSearchResults(data); // Data is already simplified from the backend
      } catch (error) {
        console.error('Error fetching flights:', error);
        toast.error('Failed to fetch flights. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (searchParams.get('from') && searchParams.get('to') && searchParams.get('departDate')) {
      fetchFlights();
    }
  }, [searchParams]);


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Flight Search Results</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Card className="bg-gray-800 text-white">
            <CardHeader>
              <CardTitle>Refine Your Search</CardTitle>
            </CardHeader>
            <CardContent>
              <SearchForm />
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2">
          {loading ? (
            <p className="text-white">Loading flights...</p>
          ) : searchResults.length > 0 ? (
            searchResults.map(flight => (
              <Card key={flight.id} className="mb-4 bg-gray-800 text-white">
                <CardContent className="flex items-center justify-between p-6">
                  <div>
                    <h3 className="text-xl font-semibold">{flight.airline}</h3>
                    <p className="text-gray-400">Departure: {flight.departureAirport} at {flight.departureTime}</p>
                    <p className="text-gray-400">Arrival: {flight.arrivalAirport} at {flight.arrivalTime}</p>
                    <p className="text-gray-400">Status: {flight.flightStatus}</p>
                  </div>
                  <div className="text-right">
                    <Button onClick={() => setSelectedFlight(flight)}>Book</Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-white">No flights found. Please try different search criteria.</p>
          )}

        </div>
      </div>
      {selectedFlight && (
        <BookingForm flightId={selectedFlight.id} price={selectedFlight.price} />
      )}
    </div>
  )
}

