import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend } from "chart.js";

// Registering chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const AdminDashboard = () => {
  // Dummy data for bar chart and pie chart
  const barChartData = {
    labels: ["Contributors", "Customers", "Producers"], // Proper headings horizontally
    datasets: [
      {
        label: "User Count",
        data: [50, 30, 20],
        backgroundColor: ["rgba(54, 162, 235, 0.6)", "rgba(75, 192, 192, 0.6)", "rgba(255, 206, 86, 0.6)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)", "rgba(255, 206, 86, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ["Contributors (50%)", "Customers (30%)", "Producers (20%)"],
    datasets: [
      {
        data: [50, 30, 20],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 205, 86, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 205, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold text-center mb-6">Admin Dashboard</h1>

      {/* Compact Grid Layout */}
      <div className="grid grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-sm font-semibold mb-4">User Distribution</h2>
          <div style={{ width: "100%", height: "500px" }}>
            <Bar
              data={barChartData}
              options={{
                plugins: {
                  legend: { display: true, position: "bottom" },
                  tooltip: { enabled: true },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    title: {
                      display: true,
                      text: "User Roles",
                      font: { size: 14 },
                    },
                  },
                  y: {
                    title: {
                      display: true,
                      text: "Count",
                      font: { size: 14 },
                    },
                    ticks: { stepSize: 10 },
                  },
                },
              }}
            />
          </div>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
          <h2 className="text-sm font-semibold mb-4">User Percentage</h2>
          <div style={{ width: "100%", height: "500px" }}>
            <Pie
              data={pieChartData}
              options={{
                plugins: {
                  legend: { display: true, position: "bottom" },
                  tooltip: { enabled: true },
                },
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
