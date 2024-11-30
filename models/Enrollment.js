import mongoose from 'mongoose';

const EnrollmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  courseType: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  stripeSessionId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'cancelled'],
    default: 'pending',
  },
}, {
  timestamps: true,
});

export default mongoose.models.Enrollment || mongoose.model('Enrollment', EnrollmentSchema); 