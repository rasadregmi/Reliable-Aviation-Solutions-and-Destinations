'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { getBookings, cancelBooking } from '@/app/api/route'
import { toast } from 'react-hot-toast'

interface Booking {
  id: string;
  airline: string;
  from: string;
  to: string;
  date: string;
  status: string;
}

export default function Bookings() {
  const [userBookings, setUserBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await getBookings()
        setUserBookings(response.data)
      } catch (error) {
        console.error('Error fetching bookings:', error)
        toast.error('Failed to fetch bookings. Please try again.')
      } finally {
        setLoading(false)
      }
    }

    fetchBookings()
  }, [])

  const handleCancel = async (id: string) => {
    try {
      await cancelBooking(id)
      setUserBookings(prevBookings => 
        prevBookings.map(booking => 
          booking.id === id ? {...booking, status: 'Cancelled'} : booking
        )
      )
      toast.success('Booking cancelled successfully')
    } catch (error) {
      console.error('Error cancelling booking:', error)
      toast.error('Failed to cancel booking. Please try again.')
    }
  }

  if (loading) {
    return <div className="container mx-auto px-4 py-8 text-white">Loading bookings...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">My Bookings</h1>
      {userBookings.length > 0 ? (
        userBookings.map(booking => (
          <Card key={booking.id} className="mb-4 bg-gray-800 text-white">
            <CardHeader>
              <CardTitle>{booking.airline}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>From: {booking.from}</p>
              <p>To: {booking.to}</p>
              <p>Date: {booking.date}</p>
              <p>Status: {booking.status}</p>
              {booking.status !== 'Cancelled' && (
                <Button 
                  onClick={() => handleCancel(booking.id)}
                  className="mt-4 bg-red-600 hover:bg-red-700"
                >
                  Cancel Booking
                </Button>
              )}
            </CardContent>
          </Card>
        ))
      ) : (
        <p className="text-white">You have no bookings yet.</p>
      )}
    </div>
  )
}

