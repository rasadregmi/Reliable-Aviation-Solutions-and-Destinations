import axios, { AxiosError } from 'axios';
import { toast } from 'react-hot-toast';

const API_URL = 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const message = (error.response?.data as { message?: string })?.message || 'An error occurred';
    toast.error(message);
    return Promise.reject(error);
  }
);

export const login = (email: string, password: string) => api.post('/auth/login', { email, password });
export const register = (name: string, email: string, password: string) => api.post('/auth/register', { name, email, password });
export const searchFlights = (from: string, to: string, date: string) => api.get('/flights/search', { params: { from, to, date } });
export const getFlightPrices = (from: string, to: string, date: string) => api.get('/flights/prices', { params: { from, to, date } });
export const trackFlight = (icao24: string) => api.get('/tracking/live', { params: { icao24 } });
export const getDestinationInfo = (location: string) => api.get('/destinations/info', { params: { location } });
export const createBooking = (flightId: string, passengers: any[], totalPrice: number) => api.post('/bookings', { flightId, passengers, totalPrice });
export const getBookings = () => api.get('/bookings');
export const cancelBooking = (bookingId: string) => api.post(`/bookings/${bookingId}/cancel`);
export const getUserProfile = () => api.get('/user/profile');
export const updateUserProfile = (data: any) => api.put('/user/profile', data);

export default api;

