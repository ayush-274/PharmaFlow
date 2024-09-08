import React, { useState } from 'react';
import Sidebar from '../Sidebar'; // Ensure the path is correct

const UpdateMedicines = () => {
  const [medicine, setMedicine] = useState({
    name: '',
    batchNumber: '',
    expiryDate: '',
    quantity: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMedicine({ ...medicine, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Medicine details submitted:', medicine);
    // Add the logic to send data to the backend
  };

  return (
    <div className="flex">
      {/* Fixed sidebar */}
      <div className="fixed top-0 left-0 h-full w-64 bg-gray-800">
        <Sidebar />
      </div>
      {/* Main content */}
      <div className="ml-64 p-6 flex-1">
        <h2 className="text-2xl font-bold mb-4">Update Medicines</h2>
        <form onSubmit={handleSubmit} className="bg-white p-4 rounded-md shadow-md">
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Medicine Name</label>
            <input
              type="text"
              name="name"
              value={medicine.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Batch Number</label>
            <input
              type="text"
              name="batchNumber"
              value={medicine.batchNumber}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Expiry Date</label>
            <input
              type="date"
              name="expiryDate"
              value={medicine.expiryDate}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={medicine.quantity}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
            Update Medicine
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMedicines;
