// components/RevenueStatistics.js
import React, { useEffect } from "react";
import Chart from "chart.js/auto";

const AdminRevenueStatistics = ({current_balance="50",  chartData=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]}) => {

  const maxY = Math.max(...chartData).toFixed(2) || 10;


  useEffect(() => {
    const ctx = document.getElementById("revenueChart").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Revenue",
            data: chartData,
            borderColor: "#0038FF",
            backgroundColor: "rgba(0, 56, 255, 0.1)",
            fill: true,
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: maxY, 
            ticks: {
              callback: function (value) {
                return value;
              },
            },
          },
        },
      },
    });

    console.log("MaxY: ", maxY)
  }, []);

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold"> Payment Graph</h2>
      <div className="container mx-auto rounded-lg bg-white p-4 shadow-md">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="ml-2 text-xl font-semibold">Statistics</h2>
          <span className="text-lightgray">
            Total Profit {" "}
            <span className="ml-2 rounded-lg bg-[#E0E6FF] px-4 py-2 text-lg font-semibold text-[#0038FF]">
              ${current_balance}
            </span>{" "}
            {/* <span>
              <select
                id="timeframe"
                className="rounded-md bg-gray-200 px-4 py-2"
              >
                <option value="Monthly">Monthly</option>
                <option value="Daily">Daily</option>
                <option value="Yearly">Yearly</option>
              </select>
            </span> */}
            {/* <span>
              <select
                id="timeframe"
                className="ml-2 rounded-md bg-gray-200 px-4 py-2"
              >
                <option value="Monthly">All</option>
                <option value="Daily">Daily</option>
                <option value="Yearly">Yearly</option>
              </select>
            </span> */}
          </span>
          {/* <span className="text-lg font-semibold text-green-500">$21,476</span> */}
        </div>
        <div className="relative">
          {/* <div>
            <select id="timeframe" className="rounded-md bg-gray-200 px-4 py-2">
              <option value="Monthly">Monthly</option>
              <option value="Daily">Daily</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div> */}
          <div className="h-64">
            <canvas id="revenueChart" className="h-full w-full"></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRevenueStatistics;
