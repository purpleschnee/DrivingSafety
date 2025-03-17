import React from 'react';
import { Layout, Space, Typography } from 'antd';
import { BellOutlined, UserOutlined } from '@ant-design/icons';
import './Header.css';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header = () => {
  return (
    <AntHeader className="site-header">
      <div className="header-center">
        <Title level={2} className="app-title">Driving Safety Monitor</Title>
      </div>
      
      <div className="header-right">
        <Space size={20}>
          <div className="app-icon-rounded">
            <BellOutlined className="app-icon app-icon-md" />
          </div>
          <div className="app-icon-rounded user-avatar">
            <UserOutlined className="app-icon app-icon-md" />
          </div>
        </Space>
      </div>
    </AntHeader>
  );
};

export default Header;
