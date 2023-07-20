/* eslint-disable react/prop-types */
import { Table, Tabs } from "antd";
const { TabPane } = Tabs;

const Reports = ({ data }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const renderTabs = () => {
    return data.map((cityData, index) => {
      const city = Object.keys(cityData)[0];
      const yearData = cityData[city];

      return (
        <TabPane tab={city} key={index}>
          {renderTables(yearData)}
        </TabPane>
      );
    });
  };

  const renderTables = (yearData) => {
    return yearData.map((yearObj) => {
      const year = Object.keys(yearObj)[0];
      const tableData = yearObj[year];
      const keys = Object.keys(tableData[0]);

      const columns = keys.map((key) => ({
        title: key,
        dataIndex: key,
        key: key,
      }));

      return (
        <div key={year}>
          <h2>{year}</h2>
          <Table columns={columns} dataSource={tableData} />
        </div>
      );
    });
  };

  return <Tabs defaultActiveKey="0">{renderTabs()}</Tabs>;
};

export default Reports;
