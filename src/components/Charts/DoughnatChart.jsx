/* eslint-disable react/prop-types */
import { Tabs } from "antd";
import Chart from "chart.js/auto";

const { TabPane } = Tabs;
const DoughnatChartTabs = ({ data }) => {
  const renderDoughnatCharts = () => {
    const cityData = data.find((cityObj) => Object.keys(cityObj)[0] === "Київ");
    const yearData = cityData["Київ"];

    return yearData.map((yearObj, index) => {
      const year = Object.keys(yearObj)[0];
      const chartData = yearObj[year];
      const labels = Object.keys(chartData[0]);

      return (
        <TabPane tab={year} key={index}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "start",
              height: "100vh",
              width: "100%",
              marginLeft: "20%",
            }}
          >
            <canvas
              ref={(ref) => createDoughnatChart(ref, chartData, labels)}
            />
          </div>
        </TabPane>
      );
    });
  };

  const createDoughnatChart = (ref, chartData, labels) => {
    if (ref && ref instanceof HTMLCanvasElement) {
      const ctx = ref.getContext("2d");

      const labelsData = chartData.map((item) => item[labels[0]]);
      const deviationData = chartData.map((item) =>
        ((item[labels[1]] / item[labels[2]]) * 100).toFixed(2)
      );

      const chartConfig = {
        type: "doughnut",
        data: {
          labels: labelsData,
          datasets: [
            {
              data: deviationData,
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
        },
        options: {
          plugins: {
            legend: {
              position: "right",
            },
          },
        },
      };

      new Chart(ctx, chartConfig);
    }
  };
  return <Tabs>{renderDoughnatCharts()}</Tabs>;
};

export default DoughnatChartTabs;
