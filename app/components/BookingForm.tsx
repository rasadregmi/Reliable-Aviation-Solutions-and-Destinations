'use client'

import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { createBooking } from '@/app/api/route'

interface BookingFormProps {
  flightId: string;
  price: number;
}

export default function BookingForm({ flightId, price }: BookingFormProps) {
  const [passengers, setPassengers] = useState([{ name: '', age: '' }]);

  const handlePassengerChange = (index: number, field: string, value: string) => {
    const newPassengers = [...passengers];
    newPassengers[index] = { ...newPassengers[index], [field]: value };
    setPassengers(newPassengers);
  };

  const handleAddPassenger = () => {
    setPassengers([...passengers, { name: '', age: '' }]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await createBooking(flightId, passengers, price * passengers.length);
      // Show success message and redirect to bookings page
      window.location.href = '/bookings';
    } catch (error) {
      console.error('Booking failed:', error);
      // Show error message to user
    }
  };

  return (
    <Card className="max-w-md mx-auto bg-gray-800 text-white">
      <CardHeader>
        <CardTitle>Book Your Flight</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {passengers.map((passenger, index) => (
            <div key={index} className="space-y-2">
              <Label htmlFor={`passenger-name-${index}`}>Passenger {index + 1} Name</Label>
              <Input
                id={`passenger-name-${index}`}
                value={passenger.name}
                onChange={(e) => handlePassengerChange(index, 'name', e.target.value)}
                required
                className="bg-gray-700 text-white"
              />
              <Label htmlFor={`passenger-age-${index}`}>Passenger {index + 1} Age</Label>
              <Input
                id={`passenger-age-${index}`}
                type="number"
                value={passenger.age}
                onChange={(e) => handlePassengerChange(index, 'age', e.target.value)}
                required
                className="bg-gray-700 text-white"
              />
            </div>
          ))}
          <Button type="button" onClick={handleAddPassenger} variant="outline">Add Passenger</Button>
          <div>
            <Label>Total Price</Label>
            <p className="text-xl font-bold">${price * passengers.length}</p>
          </div>
          <Button type="submit" className="w-full">Book Now</Button>
        </form>
      </CardContent>
    </Card>
  );
}

