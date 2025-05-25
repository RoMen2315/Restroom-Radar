import express from 'express';
import Job from '../models/Job.js';
import Cleaner from '../models/Cleaner.js';

const router = express.Router();

// POST /jobs/:id/accept
router.post('/:id/accept', async (req, res) => {
  try {
    const cleaner = await Cleaner.findOne({ userId: req.body.userId, availability: true });
    if (!cleaner) return res.status(400).json({ error: 'Cleaner unavailable' });

    const job = await Job.findById(req.params.id);
    if (!job || job.status !== 'Open') return res.status(404).json({ error: 'Job not available' });

    job.cleanerId = cleaner._id;
    job.status = 'InProgress';
    await job.save();
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /jobs/:id/complete
router.post('/:id/complete', async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ error: 'Job not found' });

    job.beforePhotoURL = req.body.beforePhotoURL;
    job.afterPhotoURL = req.body.afterPhotoURL;
    job.completedAt = new Date();
    job.status = 'Complete';
    await job.save();
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
