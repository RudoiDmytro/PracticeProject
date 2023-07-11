import { Layout, Menu, Button } from "antd";
import { useState } from "react";

import { Link } from "react-router-dom";
import {
  HomeOutlined,
  BarChartOutlined,
  PieChartOutlined,
  LineChartOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import "./Sidebar.css";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      width={200}
      theme="light"
      className="sidebar"
      style={{ borderRadius: "10px" }}
      breakpoint="lg"
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={
          collapsed
            ? {
                fontSize: "14px",
                width: 64,
                height: 64,
                margin: "10%",
              }
            : {
                fontSize: "14px",
                width: 180,
                height: 64,
                margin: "5%",
              }
        }
      />
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ height: "100%", borderRight: 0, borderRadius: "10px" }}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Домашня сторінка</Link>
        </Menu.Item>
        <Menu.SubMenu key="2" icon={<BarChartOutlined />} title="Графіки">
          <Menu.Item key="2.1">
            <Link to="/charts/barIncome">Доходи</Link>
          </Menu.Item>
          <Menu.Item key="2.2">
            <Link to="/charts/dougnatIncome">Доходи 2</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="3" icon={<PieChartOutlined />}>
          <Link to="/analysis">Аналітика</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<LineChartOutlined />}>
          <Link to="/reports">Звіти</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
