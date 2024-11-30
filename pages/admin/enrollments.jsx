import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EnrollmentsAdmin() {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    try {
      console.log('Fetching enrollments...');
      const response = await axios.get('/api/get-enrollments');
      console.log('Response:', response.data);
      setEnrollments(response.data.data);
    } catch (err) {
      console.error('Error details:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Enrollments</h1>
      
      {/* Debug information */}
      <div className="mb-4 p-4 bg-gray-800 rounded">
        <p>Loading: {loading.toString()}</p>
        <p>Error: {error || 'None'}</p>
        <p>Number of enrollments: {enrollments.length}</p>
        <p>Raw data: {JSON.stringify(enrollments, null, 2)}</p>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div className="text-red-500">Error: {error}</div>
      ) : enrollments.length === 0 ? (
        <div>No enrollments found</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-[#1a1a1a] rounded-lg overflow-hidden">
            <thead className="bg-blue-900">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Phone</th>
                <th className="px-6 py-3 text-left">Course</th>
                <th className="px-6 py-3 text-left">Amount</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {enrollments.map((enrollment) => (
                <tr key={enrollment._id} className="border-t border-gray-800">
                  <td className="px-6 py-4">{enrollment.name}</td>
                  <td className="px-6 py-4">{enrollment.email}</td>
                  <td className="px-6 py-4">{enrollment.phone}</td>
                  <td className="px-6 py-4">{enrollment.courseType}</td>
                  <td className="px-6 py-4">{enrollment.amount}</td>
                  <td className="px-6 py-4">{enrollment.status}</td>
                  <td className="px-6 py-4">
                    {new Date(enrollment.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
} 