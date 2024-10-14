'use client';
import Navbar from '@/components/Navbar';
import { url } from '@/helper';
import { useState } from 'react';

const Upload = () => {
  const [formData, setFormData] = useState({
    complexity: '',
    dataStructure: '',
    company: '',
    platform: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission with fetch
  const handleSubmit = async (e, type) => {
    e.preventDefault();
    let urls = '';

    switch (type) {
      case 'dataStructure':
        urls = 'api/add/createDatastructure';
        break;
      case 'company':
        urls = 'api/add/createCompany';
        break;
      case 'platform':
        urls = 'api/add/createPlatform';
        break;
      default:
        console.error('Invalid form type');
        return;
    }

    try {
      const res = await fetch(`${url + urls}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: formData[type] }), // Send only relevant field
        credentials: 'include',
      });

      const data = await res.json();

      if (res.ok) {
        alert('Success! ' + type + ' created successfully.');
      } else {
        if (data.msg?.includes('already exists')) {
          alert('Error: ' + data.msg);
        } else {
          alert('Error occurred, please try again.');
        }
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('Error occurred, please try again.');
    }
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create Tags</h2>

        {/* Data Structure Form */}
        <form onSubmit={(e) => handleSubmit(e, 'dataStructure')} className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Data Structure Name:
          </label>
          <input
            type="text"
            name="dataStructure"
            value={formData.dataStructure}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button className="mt-3 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition">
            Create Data Structure
          </button>
        </form>

        {/* Company Form */}
        <form onSubmit={(e) => handleSubmit(e, 'company')} className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Company Name:</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button className="mt-3 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition">
            Create Company
          </button>
        </form>

        {/* Platform Form */}
        <form onSubmit={(e) => handleSubmit(e, 'platform')} className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Platform Name:</label>
          <input
            type="text"
            name="platform"
            value={formData.platform}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
          <button className="mt-3 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition">
            Create Platform
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Upload;
