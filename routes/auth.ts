import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { json } from 'stream/consumers';

const router = express.Router();

router.post('/register', (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;
  const user = new User({ name, email, password });
  user.save()
    .then(() => {
      res.status(201).json({ message: 'User registered successfully' });
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/login', (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      return user.comparePassword(password).then((isMatch) => {
        if (!isMatch) {
          return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ userId: user._id }, process.env.NEXT_PUBLIC_JWT_SECRET as string, { expiresIn: '1h' });
        res.json({ token });
        console.log(token);
      });
    })
    .catch((error) => {
      next(error);
    });
});

// Error handling middleware
router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'An error occurred', error: err.message });
});

export default router;

