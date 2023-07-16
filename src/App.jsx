import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import LineChart from "./components/Charts/LineChart";
import DoughnatChart from "./components/Charts/DoughnatChart";
import EX from "./components/Analysis/EX";
import Reports from "./components/Reports/Reports";
import "./App.css";
import jsonData from "./data.json";

const { Content, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Layout className="app" style={{ minHeight: "100vh" }}>
        <Header
          data={"Огляд виконання бюджетів територіальних громад"}
          lvl={2}
        />
        <Layout>
          <Sidebar />

          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: "100vh",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/charts/barIncome"
                element={<LineChart data={jsonData} />}
              />
              <Route
                path="/charts/dougnatIncome"
                element={<DoughnatChart data={jsonData} />}
              />
              <Route path="/analysis" element={<EX />} />
              <Route path="/reports" element={<Reports data={jsonData} />} />
            </Routes>
          </Content>
        </Layout>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Розроблено ©2023
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
