import { CheckCircle2 } from "lucide-react";
import axios from 'axios';
import { useState } from 'react';

const Pricing = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const pricingOption = {
    title: "Pro Learning Path",
    price: "£500",
    features: [
      "Complete DevOps Curriculum",
      "Hands-on Cloud Projects",
      "CI/CD Pipeline Workshops",
      "1-on-1 Mentoring Sessions",
      "Industry Certification Prep",
      "Career Support & Networking"
    ],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to backend
      const response = await axios.post('/api/enrollments', {
        ...formData,
        courseType: pricingOption.title,
        amount: pricingOption.price
      });

      // If successful, redirect to payment
      if (response.data.success) {
        // You can store the enrollment ID in localStorage if needed
        localStorage.setItem('enrollmentId', response.data.enrollmentId);
        // Redirect to payment gateway
        window.location.href = response.data.paymentUrl;
      }
    } catch (error) {
      console.error('Enrollment failed:', error);
      alert('Failed to process enrollment. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="mt-20" id="pricing">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <div className="p-10 border border-blue-700 rounded-xl">
            <p className="text-4xl mb-8">{pricingOption.title}</p>
            <p className="mb-8">
              <span className="text-5xl mt-6 mr-2">{pricingOption.price}</span>
            </p>
            <ul>
              {pricingOption.features.map((feature, index) => (
                <li key={index} className="mt-8 flex items-center">
                  <CheckCircle2 />
                  <span className="ml-2">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-blue-900 border border-blue-700 rounded-lg transition duration-200"
            >
              Enroll
            </button>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
          <div className="bg-[#1a1a1a] p-8 rounded-xl max-w-md w-full border border-blue-700 shadow-xl">
            <h3 className="text-2xl mb-6 font-semibold">Enrollment Form</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#2a2a2a] border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-5">
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#2a2a2a] border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block mb-2 text-sm font-medium">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#2a2a2a] border border-blue-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 border border-blue-700 rounded-lg hover:bg-blue-900/50 transition duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-700 rounded-lg hover:bg-blue-800 transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pricing;