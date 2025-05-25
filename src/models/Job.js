import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  bathroomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bathroom', required: true },
  cleanerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cleaner' },
  status: { type: String, enum: ['Open', 'InProgress', 'Complete'], default: 'Open' },
  beforePhotoURL: String,
  afterPhotoURL: String,
  payAmount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  completedAt: Date
});

export default mongoose.model('Job', jobSchema);
