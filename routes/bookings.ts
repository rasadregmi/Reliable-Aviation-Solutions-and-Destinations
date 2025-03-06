import express from 'express';
import Booking from '../models/Booking';
import { authenticateToken } from '../middleware/auth';

const router = express.Router();

router.post('/', authenticateToken, async (req, res) => {
  try {
    const { flightId, passengers } = req.body;
    const booking = new Booking({
      user: req.user.userId,
      flight: flightId,
      passengers,
      totalPrice: req.body.totalPrice,
    });
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: 'Booking failed', error });
  }
});

router.get('/', authenticateToken, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.userId }).populate('flight');
    res.json(bookings);
  } catch (error) {
    res.status(400).json({ message: 'Failed to fetch bookings', error });
  }
});

export default router;

