import express, { Request, Response } from 'express';
import axios from 'axios';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

router.get('/search', authenticateToken, async (req: Request, res: Response) => {
  try {
    const { from, to, date } = req.query;
    const response = await axios.get('https://api.aviationstack.com/v1/flights', {
      params: {
        access_key: process.env.NEXT_PUBLIC_AVIATIONSTACK_API_KEY,
        dep_iata: from,
        arr_iata: to,
        flight_date: date,
      },
    });

    // Simplify response data for the frontend
    const formattedFlights = response.data.data.map((flight: any) => ({
      id: flight.flight?.iata || 'N/A',
      airline: flight.airline?.name || 'Unknown Airline',
      departureAirport: flight.departure?.airport || 'Unknown',
      departureTime: flight.departure?.scheduled || 'Unknown',
      arrivalAirport: flight.arrival?.airport || 'Unknown',
      arrivalTime: flight.arrival?.scheduled || 'Unknown',
      flightStatus: flight.flight_status || 'Unknown',
    }));

    res.json(formattedFlights);
  } catch (error) {
    console.error('Error fetching flights:', (error as any).message);
    res.status(500).json({ message: 'Error fetching flights' });
  }
});


router.get('/prices', authenticateToken, async (req: Request, res: Response) => {
  try {
    const { from, to, date } = req.query;
    const response = await axios.get('https://api.traveladvisor.com/v1/flights/search', {
      params: {
        origin: from,
        destination: to,
        departureDate: date,
        apikey: process.env.NEXT_PUBLIC_TRAVELADVISOR_API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching prices', error });
  }
});

export default router;

