import React from 'react';
import { Layout, Input, Badge, Space, Typography } from 'antd';
import { SearchOutlined, BellOutlined, UserOutlined } from '@ant-design/icons';
import './Header.css';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header = () => {
  return (
    <AntHeader className="site-header">
      <div className="header-center">
        <Title level={4} className="app-title">Driving Safety Monitor</Title>
      </div>
      
      <div className="header-right">
        <div className="header-search">
          <Input
            placeholder="Search..."
            prefix={<SearchOutlined className="app-icon app-icon-sm" />}
            className="search-input"
          />
        </div>
        
        <Space size={16}>
          <Badge count={5} size="small">
            <div className="app-icon-rounded">
              <BellOutlined className="app-icon app-icon-md" />
            </div>
          </Badge>
          <div className="app-icon-rounded user-avatar">
            <UserOutlined className="app-icon app-icon-md" />
          </div>
        </Space>
      </div>
    </AntHeader>
  );
};

export default Header;
