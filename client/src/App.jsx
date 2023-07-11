import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import BarChart from "./components/Charts/BarChart";
import DoughnatChart from "./components/Charts/DoughnatChart";
import EX from "./components/Analysis/EX";
import Reports from "./components/Reports/Reports";
import "./App.css";

const { Content, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Layout className="app">
        <Header />
        <Layout>
          <Sidebar />
          <Layout>
            <Content style={{ padding: "24px" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/charts/barIncome" element={<BarChart />} />
                <Route
                  path="/charts/dougnatIncome"
                  element={<DoughnatChart />}
                />
                <Route path="/analysis" element={<EX />} />
                <Route path="/reports" element={<Reports />} />
              </Routes>
            </Content>
            <Footer
              style={{
                textAlign: "center",
              }}
            >
              Розроблено ©2023
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
