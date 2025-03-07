import express from 'express';
import axios from 'axios';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

router.get('/info', authenticateToken, async (req, res) => {
  try {
    const { location } = req.query;
    const response = await axios.get('https://travel-advisor.p.rapidapi.com/answers/v2/list?currency=USD&units=km&lang=en_US', {
      params: {
        query: location,
        apikey: process.env.NEXT_PUBLIC_TRAVELADVISOR_API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching destination information', error });
  }
});

export default router;