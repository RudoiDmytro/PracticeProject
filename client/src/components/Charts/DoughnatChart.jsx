import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DoughnatChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const data = {
      labels: [
        "Податкові надходження",
        "Неподаткові надходження",
        "Доходи від операцій з капіталом",
        "Офіційні трансферти",
        "Цільові фонди",
      ],
      datasets: [
        {
          label: "Виконання бюджету",
          data: [100.33, 216.48, 48.81, 99.16, 116.25],
          backgroundColor: [
            "rgba(255, 99, 132, 0.5)",
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 206, 86, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(153, 102, 255, 0.5)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    new Chart(ctx, {
      type: "doughnut",
      data: data,
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <canvas ref={chartRef} />
    </div>
  );
};

export default DoughnatChart;
