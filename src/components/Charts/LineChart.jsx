/* eslint-disable react/prop-types */
import { Tabs } from "antd";
import Chart from "chart.js/auto";

const { TabPane } = Tabs;

const LineChartTabs = ({ data }) => {
  const renderLineCharts = () => {
    return data.map((cityData, index) => {
      const city = Object.keys(cityData)[0];
      const yearData = cityData[city];

      return (
        <TabPane tab={city} key={index}>
          <Tabs>{renderYearTabs(yearData)}</Tabs>
        </TabPane>
      );
    });
  };

  const renderYearTabs = (yearData) => {
    return yearData.map((yearObj, index) => {
      const year = Object.keys(yearObj)[0];
      const chartData = yearObj[year];
      const labels = Object.keys(chartData[0]);

      return (
        <TabPane tab={year} key={index}>
          <canvas ref={(ref) => createLineChart(ref, chartData, labels)} />
        </TabPane>
      );
    });
  };

  const createLineChart = (ref, chartData, labels) => {
    const planLabel = labels[1];

    if (ref && ref instanceof HTMLCanvasElement) {
      const ctx = ref.getContext("2d");
      const labelsData = chartData.map(
        (item) => item[labels[0]] || item[labels[1]]
      );
      const planData = chartData.map((item) => item[planLabel]);
      const deviationData = chartData.map(
        (item) => item["Відхилення."] || item["Виконано."]
      );

      const isKyivCity = chartData[0]["Виконано."];

      const chartConfig = {
        type: "line",
        data: {
          labels: labelsData,
          datasets: [
            {
              label: planLabel,
              data: planData,
              backgroundColor: isKyivCity
                ? "rgba(75, 192, 192, 0.5)"
                : "rgb(102, 153, 255)",
              borderColor: isKyivCity ? "rgba(75, 192, 192, 1)" : "",
              borderWidth: 1,
            },
            {
              label: isKyivCity ? labels[2] : labels[3],
              data: deviationData,
              backgroundColor: isKyivCity ? "" : "rgba(255, 99, 132, 0.5)",
              borderColor: isKyivCity ? "" : "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ],
        },
      };

      new Chart(ctx, chartConfig);
    }
  };

  return <Tabs>{renderLineCharts()}</Tabs>;
};

export default LineChartTabs;
