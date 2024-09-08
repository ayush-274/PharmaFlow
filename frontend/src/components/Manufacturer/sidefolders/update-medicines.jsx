import React, { useState } from 'react';

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
    <div className="p-6">
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
  );
};

export default UpdateMedicines;
