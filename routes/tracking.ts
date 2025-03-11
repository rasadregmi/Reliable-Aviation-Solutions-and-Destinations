import express from 'express';
import axios from 'axios';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

router.get('/live', authenticateToken, async (req, res) => {
  try {
    const { icao24 } = req.query;
    const response = await axios.get('https://opensky-network.org/api/states/all', {
      params: { icao24 },
      auth: {
        username: process.env.NEXT_PUBLIC_OPENSKY_USERNAME || '',
        password: process.env.ONEXT_PUBLIC_OPENSKY_PASSWORD || '',
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching live flight data', error });
  }
});

export default router;

