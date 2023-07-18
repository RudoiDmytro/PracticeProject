/* eslint-disable react/prop-types */

import { Table } from "antd";

const Analysis = ({ year, previousYearBudget, nextYearBudget }) => {
  const budgetDifference = nextYearBudget - previousYearBudget;
  const budgetChangePercentage = nextYearBudget
    ? ((nextYearBudget - previousYearBudget) / previousYearBudget) * 100
    : 0;

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
      render: (value) => value.toLocaleString(),
    },
  ];

  const data = [
    {
      key: "1",
      year: `Попередній Рік (${+year})`,
      budget: previousYearBudget,
    },
    {
      key: "2",
      year: nextYearBudget
        ? `Наступний Рік (${+year + 1})`
        : "Наступний Рік (Недоступно)",
      budget: nextYearBudget || "-",
    },
    {
      key: "3",
      year: "Різниця",
      budget: nextYearBudget ? budgetDifference : "-",
    },
    {
      key: "4",
      year: "Зміна (%)",
      budget: nextYearBudget ? `${budgetChangePercentage.toFixed(2)}%` : "-",
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
