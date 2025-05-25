import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import reviewRoutes from './routes/review.js';
import bathroomRoutes from './routes/bathrooms.js';
import jobRoutes from './routes/jobs.js';
import businessRoutes from './routes/businesses.js';

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/review', reviewRoutes);
app.use('/bathrooms', bathroomRoutes);
app.use('/jobs', jobRoutes);
app.use('/businesses', businessRoutes);

app.get('/dashboard', async (req, res) => {
  // Placeholder dashboard logic
  res.json({ message: 'Dashboard endpoint' });
});

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/restroom-radar";
mongoose.connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.error(err));
