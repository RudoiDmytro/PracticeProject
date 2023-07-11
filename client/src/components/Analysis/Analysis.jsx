/* eslint-disable react/prop-types */

import { Table } from "antd";

const Analysis = ({ currentYearRevenue, nextYearRevenue }) => {
  // Calculate revenues for the next year
  const budgetDifference = nextYearRevenue - currentYearRevenue;
  const budgetChangePercentage =
    ((nextYearRevenue - currentYearRevenue) / currentYearRevenue) * 100;

  const columns = [
    {
      title: "Рік",
      dataIndex: "year",
      key: "year",
    },
    {
      title: "Бюджет",
      dataIndex: "budget",
      key: "budget",
    },
  ];

  const data = [
    {
      key: "1",
      year: "Поточний Рік",
      budget: currentYearRevenue,
    },
    {
      key: "2",
      year: "Наступний Рік",
      budget: nextYearRevenue,
    },
    {
      key: "3",
      year: "Різниця",
      budget: budgetDifference,
    },
    {
      key: "4",
      year: "Зміна (%)",
      budget: `${budgetChangePercentage.toFixed(2)}%`,
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      bordered
      pagination={false}
      size="middle"
    />
  );
};

export default Analysis;
