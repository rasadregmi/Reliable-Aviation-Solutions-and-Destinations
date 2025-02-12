'use client'

import { useState } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { useRouter } from 'next/navigation'

export function SearchForm() {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    passengers: '1',
  })
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const searchParams = new URLSearchParams(formData)
    router.push(`/search?${searchParams.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="from" className="text-white">From</Label>
          <Input
            id="from"
            name="from"
            value={formData.from}
            onChange={handleInputChange}
            placeholder="Departure City"
            required
            className="bg-white/10 border-gray-600 text-white placeholder-gray-400"
          />
        </div>
        <div>
          <Label htmlFor="to" className="text-white">To</Label>
          <Input
            id="to"
            name="to"
            value={formData.to}
            onChange={handleInputChange}
            placeholder="Destination City"
            required
            className="bg-white/10 border-gray-600 text-white placeholder-gray-400"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="departDate" className="text-white">Depart</Label>
          <Input
            id="departDate"
            name="departDate"
            type="date"
            value={formData.departDate}
            onChange={handleInputChange}
            required
            className="bg-white/10 border-gray-600 text-white"
          />
        </div>
        <div>
          <Label htmlFor="returnDate" className="text-white">Return</Label>
          <Input
            id="returnDate"
            name="returnDate"
            type="date"
            value={formData.returnDate}
            onChange={handleInputChange}
            className="bg-white/10 border-gray-600 text-white"
          />
        </div>
        <div>
          <Label htmlFor="passengers" className="text-white">Passengers</Label>
          <Input
            id="passengers"
            name="passengers"
            type="number"
            min="1"
            value={formData.passengers}
            onChange={handleInputChange}
            required
            className="bg-white/10 border-gray-600 text-white"
          />
        </div>
      </div>
      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
        Search Flights
      </Button>
    </form>
  )
}

