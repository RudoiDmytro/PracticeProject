import { Layout, Typography } from "antd";
import "./Header.css"; // Import the CSS file

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header = () => {
  return (
    <AntHeader className="header">
      <Title level={2} className="header-title">
        Огляд виконання бюджету міста києва
      </Title>
    </AntHeader>
  );
};

export default Header;
