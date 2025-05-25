import mongoose from 'mongoose';

const cleanerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bio: String,
  rating: { type: Number, default: 0 },
  availability: { type: Boolean, default: true }
});

export default mongoose.model('Cleaner', cleanerSchema);
