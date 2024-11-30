import dbConnect from '../../lib/mongodb';
import Enrollment from '../../models/Enrollment';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    console.log('Connecting to database...');
    await dbConnect();
    
    console.log('Fetching enrollments...');
    const enrollments = await Enrollment.find({}).sort({ createdAt: -1 });
    
    console.log('Found enrollments:', enrollments.length);
    
    return res.status(200).json({
      success: true,
      count: enrollments.length,
      data: enrollments
    });
  } catch (error) {
    console.error('Failed to fetch enrollments:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to fetch enrollments',
      error: error.message,
      stack: error.stack
    });
  }
} 