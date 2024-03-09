import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { twMerge } from "tailwind-merge";
import twConf from "../utils/tailwindConf";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart(props: {
  className?: string;
  data: { labels: string[]; values: number[] };
}) {
  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    elements: { line: { tension: 0.3 } },
  };

  const data = {
    labels: props.data.labels,
    datasets: [
      {
        data: props.data.values,
        backgroundColor: twConf.theme.colors.primary,
        borderColor: twConf.theme.colors.primary + "44",
      },
    ],
  };

  return (
    <div className={twMerge("", props.className)}>
      <Line options={options} data={data} />
    </div>
  );
}
