import React from "react";
import { useLocation } from "react-router-dom";
import QRCode from "react-qr-code";
import {useNavigate} from 'react-router-dom';

const QRPaymentPage = () => {
  const location = useLocation();
  const { quantity, totalPrice, date } = location.state || {};
  const [upiId, setUpiId] = React.useState("yogitavm2001@okaxis");
  const [qrValue, setQrValue] = React.useState("");
  // const [paymentSuccess, setPaymentSuccess] = React.useState(false);

   const navigate = useNavigate();

  // Generate the QR code for UPI Payment
  const generateQR = () => {
    if (!totalPrice || totalPrice <= 0) {
      alert("Invalid total price.");
      return;
    }

    const upiLink = `upi://pay?pa=${upiId}&pn=Biogas Seller&am=${totalPrice}&cu=INR`;
    setQrValue(upiLink);
  };

  // Handle Razorpay Payment Process
  // const payWithRazorpay = () => {
  //   if (!totalPrice || totalPrice <= 0) {
  //     alert("Invalid total price.");
  //     return;
  //   }

    // const options = {
    //   key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
    //   amount: totalPrice * 100, // Convert to paise
    //   currency: "INR",
    //   name: "Biogas Producer",
    //   description: "Payment for Biogas Purchase",
    //   image: "https://example.com/your-logo.png", // Optional, use your logo URL

      // handler: function (response) {
      //   alert(
      //     `Payment successful! Payment ID: ${response.razorpay_payment_id}`
      //   );
      // },
      // handler: function (response) {
      //   setPaymentSuccess(true); // Correct state update
      // },

      // prefill: {
      //   name: "Customer Name", // Add customer name
      //   email: "customer@example.com", // Add customer email
      //   contact: "1234567890", // Add customer contact
      // },
      // notes: {
      //   quantity: quantity,
      //   delivery_date: date,
      // },
      // theme: {
      //   color: "#4CAF50", // Optional, customize the theme color
      // },
  //   };

  //   const razorpay = new window.Razorpay(options);
  //   razorpay.open();
  // };

  // Dynamically load Razorpay script
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log("Razorpay script loaded successfully.");
    };
    script.onerror = () => {
      console.error("Failed to load Razorpay script.");
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Payment</h2>

      <div className="card mx-auto" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          <div className="mb-3">
            <strong>Quantity:</strong> {quantity} kg
          </div>
          <div className="mb-3">
            <strong>Total Price:</strong> ₹{totalPrice}
          </div>
          <div className="mb-3">
            <strong>Delivery Date:</strong> {date}
          </div>

          {/* UPI ID Input */}
          <div className="mb-3">
            <label htmlFor="upiId" className="form-label">
              UPI ID:
            </label>
            <input
              type="text"
              id="upiId"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              placeholder="Enter UPI ID"
              className="form-control"
            />
          </div>

          {/* Generate QR Code Button */}
          <button onClick={generateQR} className="btn btn-success w-100 mb-3">
            Generate QR Code
          </button>

          {/* Display the QR Code */}
          {qrValue && (
            <div className="text-center mt-4">
              <h3>Scan to Pay</h3>
              <QRCode value={qrValue} size={200} />
              <p className="mt-3">
                UPI ID: <strong>{upiId}</strong>
              </p>
            </div>
          )}

          {/* Razorpay Payment Button */}
          {/* <button
            onClick={payWithRazorpay}
            className="btn btn-primary w-100 mt-3"
          >
            Pay with Razorpay
          </button> */}
          <button
            onClick={() => navigate("/")}
            className="btn btn-danger w-100"
          >
            Sign Out & Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRPaymentPage;
