import React from 'react';
import { Layout, Typography, Space, Avatar, Badge, Button } from 'antd';
import { BellOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header = () => {
  return (
    <AntHeader style={{ 
      background: '#fff', 
      padding: '0 24px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      boxShadow: '0 1px 4px rgba(0,0,0,0.05)'
    }}>
      <Title level={4} style={{ margin: 0 }}>Safe Driving Platform</Title>
      <Space size={24}>
        <Button type="text" icon={<SearchOutlined style={{ fontSize: '18px' }} />} />
        <Badge count={5} dot>
          <Button type="text" icon={<BellOutlined style={{ fontSize: '18px' }} />} />
        </Badge>
        <Avatar icon={<UserOutlined />} />
      </Space>
    </AntHeader>
  );
};

export default Header;
