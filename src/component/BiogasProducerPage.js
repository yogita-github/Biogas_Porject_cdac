// import React, { useState } from "react";

// function BiogasProducerPage() {
//   const [quantity, setQuantity] = useState("");
//   const [wasteType, setWasteType] = useState("");
//   const [price, setPrice] = useState("");
//   const [date, setDate] = useState("");
//   const [error, setError] = useState("");

//   const handleDateChange = (e) => {
//     const selectedDate = new Date(e.target.value);
//     const minDate = new Date();
//     minDate.setDate(minDate.getDate() + 3); // Minimum 3-day limit

//     if (selectedDate < minDate) {
//       setError("Date must be at least 3 days from today.");
//       setDate("");
//     } else {
//       setError("");
//       setDate(e.target.value);
//     }
//   };

//   const handleSubmit = () => {
//     if (!quantity || !wasteType || !price || !date) {
//       alert("Please fill all fields.");
//       return;
//     }

//     alert(`Biogas purchased successfully:
//       Quantity: ${quantity} kg
//       Type of Waste: ${wasteType}
//       Price: $${price}
//       Delivery Date: ${date}`);
//   };

//   return (
//     <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
//       <h2>Biogas Producer</h2>

//       <div style={{ marginBottom: "10px" }}>
//         <label>Quantity (kg):</label>
//         <input
//           type="number"
//           value={quantity}
//           onChange={(e) => setQuantity(e.target.value)}
//           placeholder="Enter quantity in kg"
//           style={{ width: "100%", padding: "8px", marginTop: "5px" }}
//         />
//       </div>

//       <div style={{ marginBottom: "10px" }}>
//         <label>Type of Waste:</label>
//         <select
//           value={wasteType}
//           onChange={(e) => setWasteType(e.target.value)}
//           style={{ width: "100%", padding: "8px", marginTop: "5px" }}
//         >
//           <option value="">Select waste type</option>
//           <option value="Food Waste">Food Waste</option>
//           <option value="Animal Waste">Animal Waste</option>
//           <option value="Plant Waste">Plant Waste</option>
//         </select>
//       </div>

//       <div style={{ marginBottom: "10px" }}>
//         <label>Price of Biogas (₹):</label>
//         <input
//           type="number"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           placeholder="Enter price"
//           style={{ width: "100%", padding: "8px", marginTop: "5px" }}
//         />
//       </div>

//       <div style={{ marginBottom: "10px" }}>
//         <label>Delivery Date (Minimum 3 days from today):</label>
//         <input
//           type="date"
//           value={date}
//           onChange={handleDateChange}
//           style={{ width: "100%", padding: "8px", marginTop: "5px" }}
//         />
//         {error && <p style={{ color: "red" }}>{error}</p>}
//       </div>

//       <button
//         onClick={handleSubmit}
//         style={{
//           padding: "10px 20px",
//           backgroundColor: "#4CAF50",
//           color: "white",
//           border: "none",
//           cursor: "pointer",
//         }}
//       >
//         Buy Biogas
//       </button>
//     </div>
//   );
// }

// export default BiogasProducerPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BiogasProducerPage = () => {
  const [quantity, setQuantity] = useState(0);

  // Calculate today's date and the minimum delivery date (today + 3 days)
  const today = new Date();
  const minDate = new Date();
  minDate.setDate(today.getDate() + 3);
  const minDateString = minDate.toISOString().split("T")[0]; // Format as YYYY-MM-DD

  // Set the initial date state to the minimum date
  const [date, setDate] = useState(minDateString);
  const pricePerKg = 200;
  const navigate = useNavigate();

  const handleBuy = () => {
    if (quantity > 0 && date) {
      const totalPrice = quantity * pricePerKg;
      navigate("/qr-payment", { state: { quantity, totalPrice, date } });
    } else {
      alert("Please enter a valid quantity and date.");
    }
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Customer</h1>

      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Quantity Input */}
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">
              <strong>Quantity of Biogas (in kg):</strong>
            </label>
            <input
              type="number"
              id="quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min="0.5" // Set minimum value to 0.5
              step="0.5" // Increment or decrement by 0.5
              className="form-control"
            />
          </div>

          {/* Delivery Date Input */}
          <div className="mb-3">
            <label htmlFor="date" className="form-label">
              <strong>Delivery Date:</strong>
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={minDateString} // Ensure the date cannot be earlier than the minimum date
              className="form-control"
            />
          </div>

          {/* Price Per Kg */}
          <div className="mb-3">
            <p className="fw-bold">
              <strong>Price per kg:</strong> ₹{pricePerKg}
            </p>
          </div>

          {/* Total Price */}
          <div className="mb-3">
            <p className="fw-bold">
              <strong>Total Price:</strong> ₹{quantity * pricePerKg || 0}
            </p>
          </div>

          {/* Buy Button */}
          <button onClick={handleBuy} className="btn btn-success w-100">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default BiogasProducerPage;
