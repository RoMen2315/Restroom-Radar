import mongoose from 'mongoose';

const bathroomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: {
    lat: Number,
    lng: Number
  },
  avgRating: { type: Number, default: 0 },
  claimedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Business', default: null },
  lastCleaned: Date,
  isFlagged: { type: Boolean, default: false }
});

export default mongoose.model('Bathroom', bathroomSchema);
