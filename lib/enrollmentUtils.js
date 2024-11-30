import dbConnect from './mongodb';
import Enrollment from '../models/Enrollment';

export async function getEnrollment(id) {
  await dbConnect();
  return await Enrollment.findById(id);
}

export async function updateEnrollmentStatus(id, status) {
  await dbConnect();
  return await Enrollment.findByIdAndUpdate(id, { status }, { new: true });
} 