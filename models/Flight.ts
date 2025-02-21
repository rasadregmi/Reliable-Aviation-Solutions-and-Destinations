import mongoose from 'mongoose';

const flightSchema = new mongoose.Schema({
  airline: { type: String, required: true },
  flightNumber: { type: String, required: true },
  departure: {
    airport: { type: String, required: true },
    time: { type: Date, required: true },
  },
  arrival: {
    airport: { type: String, required: true },
    time: { type: Date, required: true },
  },
  price: { type: Number, required: true },
  seats: { type: Number, required: true },
});

export default mongoose.model('Flight', flightSchema);

