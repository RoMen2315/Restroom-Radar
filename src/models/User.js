import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  isCleaner: { type: Boolean, default: false },
  isBusinessOwner: { type: Boolean, default: false }
});

export default mongoose.model('User', userSchema);
