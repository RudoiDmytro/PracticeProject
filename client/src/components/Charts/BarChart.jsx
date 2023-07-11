import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const BarChart = () => {
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
          label: "Розпис на рік з урахуванням змін",
          data: [54813363018, 2174734600, 490625500, 15525895894, 260679400],
          backgroundColor: "rgba(75, 192, 192, 0.5)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
        {
          label: "Виконано",
          data: [
            57130808986.91, 4708038162.9, 239505387.18, 15396419271.45,
            303053193.92,
          ],
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    };

    new Chart(ctx, {
      type: "bar",
      data: data,
    });
  }, []);

  return <canvas ref={chartRef} />;
};

export default BarChart;
