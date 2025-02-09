import React, { useState } from "react";
// import { Navbar } from "./Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ProducerForm = () => {
  const [user_id,setUserid] = useState('');
    const[production_capacity,setProductionCapacity] = useState('');
    const[status,setStatus] = useState('');

const handleUseridChange = (value) => {
  setUserid(value);
};
const handleProductionCapacityChange = (value) => {
  setProductionCapacity(value);
};
const handleStatusChange = (value) => {
  setStatus(value);
};


   const navigate = useNavigate();

  const handleSave = () => {
    const data = {
      user_id: user_id,
      production_capacity :production_capacity,
      status: status,
    };
    const url = "https://localhost:44321/api/Test/AddBiogasProducer";
    axios
      .post(url, data)
      .then((result) => {
        alert(result.data);
        console.log(result.data);
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  };

  return (
    <div className="bg-gradient-to-r from-green-400 to-green-600 min-h-screen">
      {/* Hero Section */}
      <section
        className="bg-opacity-75 text-white py-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('https://images.pexels.com/photos/5433129/pexels-photo-5433129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="container mx-auto text-center px-4">
          <h1 className="text-5xl font-extrabold mb-4">Biogas Producer Form</h1>
          <p className="text-lg mb-4">
            Help us contribute to a sustainable future by becoming a biogas
            producer.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <div className="bg-white py-16 px-6 sm:px-12 lg:px-24 rounded-lg shadow-lg max-w-7xl mx-auto mt-16 mb-24">
        <form onSubmit="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* User ID */}
            <div className="flex flex-col">
              <label
                htmlFor="user_id"
                className="text-lg font-semibold text-gray-700 mb-2"
              >
                User ID
              </label>
              <input
                type="number"
                id="user_id"
                name="user_id"
                onChange={(e) => handleUseridChange(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              />
            </div>

            {/* Production Capacity */}
            <div className="flex flex-col">
              <label
                htmlFor="production_capacity"
                className="text-lg font-semibold text-gray-700 mb-2"
              >
                Production Capacity (in m³)
              </label>
              <input
                type="number"
                id="production_capacity"
                name="production_capacity"
                onChange={(e) => handleProductionCapacityChange(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
                min="0"
              />
            </div>

            {/* Status */}
            <div className="flex flex-col">
              <label
                htmlFor="status"
                className="text-lg font-semibold text-gray-700 mb-2"
              >
                Status
              </label>
              <select
                id="status"
                name="status"
                onChange={(e) => handleStatusChange(e.target.value)}
                className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 focus:outline-none"
                required
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              type="submit"
              onClick={() => handleSave()}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-green-400 hover:to-green-500 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
