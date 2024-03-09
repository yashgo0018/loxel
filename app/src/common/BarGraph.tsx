import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { twMerge } from "tailwind-merge";
import twConf from "../utils/tailwindConf";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarGraph(props: {
  className?: string;
  data: { labels: string[]; values: number[] };
}) {
  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
  };

  const data = {
    labels: props.data.labels,
    datasets: [
      {
        data: props.data.values,
        backgroundColor: twConf.theme.colors.primary,
      },
    ],
  };

  return (
    <div className={twMerge("", props.className)}>
      <Bar options={options} data={data} />
    </div>
  );
}
