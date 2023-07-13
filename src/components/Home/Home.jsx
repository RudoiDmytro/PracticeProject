import { Tabs, Typography } from "antd";

const { TabPane } = Tabs;
const { Title } = Typography;

const Home = () => {
  return (
    <div>
      <Title level={2}>Загальна інформація</Title>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Бюджет 2022" key="1">
          <p>Інформація про бюджет міста Києва в 2022 році.</p>
        </TabPane>
        <TabPane tab="Бюджет 2021" key="2">
          <p>Інформація про бюджет міста Києва в 2021 році.</p>
        </TabPane>
        <TabPane tab="Бюджет 2020" key="3">
          <p>Інформація про бюджет міста Києва в 2020 році.</p>
        </TabPane>
        <TabPane tab="Бюджет 2019" key="4">
          <p>Інформація про бюджет міста Києва в 2019 році.</p>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Home;
