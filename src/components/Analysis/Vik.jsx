/* eslint-disable react/prop-types */
import Analysis from "./Analysis";
import { Row, Col, Tabs, Typography } from "antd";

const { Title } = Typography;
const { TabPane } = Tabs;

const Vik = ({ data }) => {
  return (
    <div>
      <Tabs>
        {data.map((cityData, index) => {
          const city = Object.keys(cityData)[0];
          const yearData = cityData[city];
          const isKyiv = city === "Київ";
          const title = isKyiv ? "Виконано бюджету" : "Відхилення від бюджету";

          return (
            <TabPane tab={city} key={index}>
              <Title level={3} style={{ textAlign: "center" }}>
                {title}
              </Title>
              <Row gutter={[16, 16]}>
                {yearData.map((yearObj, yearIndex) => {
                  const year = Object.keys(yearObj)[0];
                  const chartData = yearObj[year];

                  const previousYearBudget = chartData.reduce((sum, item) => {
                    const budget = parseFloat(
                      item[isKyiv ? "Виконано." : "Відхилення."] || 0
                    );
                    return sum + budget;
                  }, 0);

                  let nextYearBudget = 0;
                  if (yearIndex < yearData.length - 1) {
                    const nextYearObj = yearData[yearIndex + 1];
                    const nextYearChartData =
                      nextYearObj[Object.keys(nextYearObj)[0]];
                    nextYearBudget = nextYearChartData.reduce((sum, item) => {
                      const budget = parseFloat(
                        item[isKyiv ? "Виконано." : "Відхилення."] || 0
                      );
                      return sum + budget;
                    }, 0);
                  }

                  return (
                    <Col span={12} key={yearIndex}>
                      <Analysis
                        year={year}
                        previousYearBudget={previousYearBudget}
                        nextYearBudget={nextYearBudget}
                      />
                    </Col>
                  );
                })}
              </Row>
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};

export default Vik;
