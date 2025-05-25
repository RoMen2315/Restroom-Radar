import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bathroomId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bathroom', required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: String,
  photoURL: String,
  flaggedDirty: { type: Boolean, default: false },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('Review', reviewSchema);
