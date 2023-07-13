/* eslint-disable react/prop-types */
import { Layout, Typography } from "antd";
import "./Header.css"; // Import the CSS file

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header = ({ data, lvl }) => {
  return (
    <AntHeader className="header">
      <Title level={lvl} className="header-title">
        {data}
      </Title>
    </AntHeader>
  );
};

export default Header;
