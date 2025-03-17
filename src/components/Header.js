import React from 'react';
import { Layout, Avatar, Button, Input } from 'antd';
import { BellOutlined, UserOutlined, MenuOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;
const { Search } = Input;

const Header = ({ collapsed, setCollapsed }) => {
  return (
    <AntHeader style={{ 
      padding: '0 24px', 
      height: '64px',
      lineHeight: '64px',
      background: 'white',
      boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button 
            type="text" 
            icon={collapsed ? <MenuOutlined /> : <MenuFoldOutlined />} 
            onClick={() => setCollapsed(!collapsed)}
            style={{ 
              fontSize: '16px',
              width: '40px',
              height: '40px',
              marginRight: '24px',
              border: '1px solid var(--border-color)',
              borderRadius: '6px'
            }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            background: 'var(--bg-light)',
            borderRadius: '4px',
            padding: '6px 12px',
            marginRight: '20px'
          }}>
            <Search 
              placeholder="Search..." 
              style={{ 
                width: 200,
                border: 'none',
                backgroundColor: 'transparent'
              }} 
              className="header-search"
            />
          </div>
          
          <Button 
            type="text" 
            icon={<BellOutlined style={{ fontSize: '20px', color: 'var(--text-primary)' }} />} 
            style={{ marginRight: '20px' }}
          />
          
          <Avatar 
            size="large"
            icon={<UserOutlined />} 
            style={{ backgroundColor: 'var(--primary-color)' }} 
          />
        </div>
      </div>
    </AntHeader>
  );
};

export default Header;
