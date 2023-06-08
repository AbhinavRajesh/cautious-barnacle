import type { ChartData, ChartOptions } from "chart.js";

export const lineChartOptions: ChartOptions<"line"> = {
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        // maxTicksLimit: 6,
        count: 6,
        stepSize: 100,
      },
    },
    x: {
      grid: {
        color: "rgba(0, 0, 0, 0)",
      },
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: true,
};

export const labels = ["", "Week 1", "Week 2", "Week 3", "Week 4", ""];

export const lineChartData: ChartData<"line"> = {
  labels,
  datasets: [
    {
      label: "Guest",
      data: [
        100,
        Math.floor(Math.random() * 401 + 100),
        Math.floor(Math.random() * 401 + 100),
        Math.floor(Math.random() * 401 + 100),
        Math.floor(Math.random() * 401 + 100),
        Math.floor(Math.random() * 401 + 100),
      ],
      borderColor: "#E9A0A0",
      backgroundColor: "#E9A0A0",
      tension: 0.3,
    },
    {
      label: "User",
      data: [
        200,
        Math.floor(Math.random() * 401 + 100),
        Math.floor(Math.random() * 401 + 100),
        Math.floor(Math.random() * 401 + 100),
        Math.floor(Math.random() * 401 + 100),
        Math.floor(Math.random() * 401 + 100),
      ],
      borderColor: "#9BDD7C",
      backgroundColor: "#9BDD7C",
      tension: 0.3,
    },
  ],
};

export const pieChartData: ChartData<"pie"> = {
  labels: [
    "Super Hoodies",
    "Custom Short Pants",
    "Basic Tees",
    "Green",
    "Purple",
    "Orange",
  ],
  datasets: [
    {
      data: [14, 31, 55],
      backgroundColor: ["#EE8484", "#F6DC7D", "#98D89E"],
      borderWidth: 0,
    },
  ],
};

export const pieChartOptions: ChartOptions<"pie"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};
