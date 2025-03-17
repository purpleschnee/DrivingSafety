import React from 'react';
import { Layout, Input, Badge, Avatar, Space, Typography } from 'antd';
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
            prefix={<SearchOutlined style={{ color: 'var(--text-secondary)' }} />}
            className="search-input"
          />
        </div>
        
        <Space size={16}>
          <Badge count={5} size="small">
            <BellOutlined style={{ fontSize: '20px', color: 'var(--text-secondary)' }} />
          </Badge>
          <Avatar icon={<UserOutlined />} className="user-avatar" />
        </Space>
      </div>
    </AntHeader>
  );
};

export default Header;
