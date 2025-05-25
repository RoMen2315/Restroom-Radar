import express from 'express';
import Business from '../models/Business.js';
import Bathroom from '../models/Bathroom.js';

const router = express.Router();

// POST /businesses/:id/claim
router.post('/:id/claim', async (req, res) => {
  try {
    const business = await Business.findOne({ userId: req.body.userId });
    if (!business) return res.status(404).json({ error: 'Business not found' });

    const bathroom = await Bathroom.findByIdAndUpdate(req.params.id, { claimedBy: business._id });
    res.json(bathroom);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
