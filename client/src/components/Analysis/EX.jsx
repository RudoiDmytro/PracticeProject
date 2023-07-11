import Analysis from "./Analysis";
import { Row, Col } from "antd";

const EX = () => {
  const currentYearBudget = 54813363018;
  const nextYearBudget = 60367341645;
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Analysis
            currentYearRevenue={currentYearBudget}
            nextYearRevenue={nextYearBudget}
          />
        </Col>
        <Col span={12}>
          <Analysis
            currentYearRevenue={currentYearBudget}
            nextYearRevenue={nextYearBudget}
          />
        </Col>
      </Row>
    </div>
  );
};

export default EX;
