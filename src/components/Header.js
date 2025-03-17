import React from 'react';
import { Layout, Space, Typography } from 'antd';
import { BellOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header = () => {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate('/');
  };

  return (
    <AntHeader className="site-header">
      <div className="header-center">
        <Title 
          level={2} 
          className="app-title" 
          onClick={handleTitleClick}
          style={{ cursor: 'pointer' }}
        >
          Driving Safety Monitor
        </Title>
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
