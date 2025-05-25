import express from 'express';
import Bathroom from '../models/Bathroom.js';

const router = express.Router();

// GET /bathrooms -> list nearby bathrooms (simplified without geospatial query)
router.get('/', async (req, res) => {
  const bathrooms = await Bathroom.find();
  res.json(bathrooms);
});

export default router;
