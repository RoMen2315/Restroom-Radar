import mongoose from 'mongoose';

const businessSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  companyName: String,
  subscribedPlan: String,
  autoCleanThreshold: { type: Number, default: 0 },
  activeRestrooms: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bathroom' }]
});

export default mongoose.model('Business', businessSchema);
