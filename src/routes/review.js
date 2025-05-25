import express from 'express';
import Review from '../models/Review.js';
import Bathroom from '../models/Bathroom.js';
import Job from '../models/Job.js';

const router = express.Router();

// POST /review -> submits a user review
router.post('/', async (req, res) => {
  try {
    const review = await Review.create(req.body);

    // Recalculate bathroom rating
    const reviews = await Review.find({ bathroomId: review.bathroomId });
    const avg = reviews.reduce((a, r) => a + r.rating, 0) / reviews.length;
    await Bathroom.findByIdAndUpdate(review.bathroomId, { avgRating: avg });

    // Flag bathroom and create job if needed
    if (review.flaggedDirty) {
      const bathroom = await Bathroom.findById(review.bathroomId);
      if (bathroom && !bathroom.isFlagged) {
        bathroom.isFlagged = true;
        await bathroom.save();
        await Job.create({ bathroomId: bathroom._id, status: 'Open', payAmount: 10 });
      }
    }

    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
