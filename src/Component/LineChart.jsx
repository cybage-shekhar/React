import React from "react";


import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'

import { Line } from "react-chartjs-2";

const LineChart = () =>{
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774"
    }
  ]
};
return(<Line data={data} height="270" />)
}
export default LineChart;


