import React, { useState } from "react";
import { FaCoins } from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const WasteContributorPage = () => {
  const [wasteType, setWasteType] = useState(""); // State for selected waste type
  const [photo, setPhoto] = useState(null); // State for storing the captured photo
  const [coins, setCoins] = useState(0); // State for tracking reward coins
  const fileInputRef = React.createRef(); // Reference to file input

  const navigate = useNavigate();

  // Waste Type Options
  const wasteTypes = ["vegetables","food waste", "agriculture waste","Organic","garden hand yard waste","paper and cardboard waste","animal waste","other bio waste"];

  // Handle file/photo capture
  const handlePhotoCapture = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result); // Convert image to base64 for preview
      };
      reader.readAsDataURL(file);
    }
  };

  // Simulate camera activation on button click
  const openCamera = () => {
    fileInputRef.current.click(); // Trigger the hidden file input
  };

  // Handle form submission
  const handleSubmit = () => {
    if (!wasteType || !photo) {
      alert("Please select a waste type and take a photo.");
      
      return;
    }

    // Mock API call or upload process
    console.log("Waste Type:", wasteType);
    console.log("Photo Data:", photo);

    // Increase reward coins by 5
    setCoins(coins + 5);

    alert("Waste contribution submitted successfully! You earned 5 coins.");

    // Reset form
    setWasteType("");
    setPhoto(null);
    navigate("/biogas");
  };

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Waste Contributor Page</h1>

      <div className="row justify-content-center">
        <div className="col-md-6">
          {/* Display Contribution Coins */}
          <div className="text-center mb-3">
            <h5>
              Contribution Coins: <FaCoins className="text-warning" />{" "}
              <span className="badge bg-success">{coins}</span>
            </h5>
          </div>

          {/* Waste Type Selection */}
          <div className="mb-3">
            <label htmlFor="wasteType" className="form-label">
              <strong>Type of Waste:</strong>
            </label>
            <select
              id="wasteType"
              value={wasteType}
              onChange={(e) => setWasteType(e.target.value)}
              className="form-select"
            >
              <option value="">-- Select Waste Type --</option>
              {wasteTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Take Photo Button */}
          <div className="mb-3">
            <label className="form-label">
              <strong>Take a Photo of the Waste:</strong>
            </label>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                onClick={openCamera}
                className="btn btn-primary"
              >
                Open Camera
              </button>
            </div>

            {/* Hidden File Input to Trigger Camera */}
            <input
              type="file"
              accept="image/*"
              capture="environment" // Opens camera on mobile devices
              ref={fileInputRef}
              onChange={handlePhotoCapture}
              style={{ display: "none" }}
            />
          </div>

          {/* Photo Preview */}
          {photo && (
            <div className="mb-3 text-center">
              <p className="fw-bold">Photo Preview:</p>
              <img
                src={photo}
                alt="Captured Waste"
                className="img-fluid rounded"
                style={{ maxHeight: "300px", objectFit: "cover" }}
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="btn btn-success w-100"
            disabled={!wasteType || !photo} // Disable button if no selection or photo
          >
            Submit Contribution
          </button>
        </div>
      </div>
    </div>
  );
};

export default WasteContributorPage;
