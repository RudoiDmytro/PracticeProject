import { Layout } from "antd";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
// import Charts from './Charts';
// import Infographics from './Infographics';
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
                {/* <Route path="/charts" element={<Charts />} />
              <Route path="/infographics" element={<Infographics />} /> */}
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
