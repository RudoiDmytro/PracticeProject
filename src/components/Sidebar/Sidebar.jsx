import { Layout, Menu, Button, Upload, message } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  LineChartOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FundOutlined,
  FileTextOutlined,
  UploadOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import "./Sidebar.css";

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleFileUpload = (file) => {
    // Handle file upload logic here
    console.log(file);
    message.success(`${file.name} uploaded successfully.`);
  };

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
        style={{ height: "100vh", borderRight: 0, borderRadius: "10px" }}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/PracticeProject">Домашня сторінка</Link>
        </Menu.Item>
        <Menu.SubMenu key="2" icon={<LineChartOutlined />} title="Графіки">
          <Menu.Item key="2.1">
            <Link to="/PracticeProject/charts/lineIncome">Бюджети</Link>
          </Menu.Item>
          <Menu.Item key="2.2">
            <Link to="/PracticeProject/charts/dougnatIncome">Відсотки</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="3" icon={<FundOutlined />} title="Аналітика">
          <Menu.Item key="3.1">
            <Link to="/PracticeProject/analysis/years">За роки</Link>
          </Menu.Item>
          <Menu.Item key="3.2">
            <Link to="/PracticeProject/analysis/deviation">Відхилення</Link>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.Item key="4" icon={<FileTextOutlined />}>
          <Link to="/PracticeProject/reports">Звіти</Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<UploadOutlined />}>
          <Upload
            showUploadList={false}
            beforeUpload={(file) => {
              handleFileUpload(file);
              return false;
            }}
          >
            Завантажити
          </Upload>
        </Menu.Item>
        <Menu.Item key="6" icon={<DownloadOutlined />}>
          <Button type="link" download="data.json" href="src\data.json">
            Завантажити
          </Button>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
