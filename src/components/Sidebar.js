import React from 'react';
import { Layout, Menu, Button, Input } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {
  DashboardOutlined,
  CarOutlined,
  SafetyOutlined,
  ReadOutlined,
  TeamOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined
} from '@ant-design/icons';
import './Sidebar.css';

const { Sider } = Layout;

const Sidebar = ({ collapsed, setCollapsed }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Menu items configuration
  const menuItems = [
    {
      key: '/',
      icon: <DashboardOutlined className="app-icon app-icon-md" />,
      label: <Link to="/">Dashboard</Link>,
    },
    {
      key: '/driver-analytics',
      icon: <CarOutlined className="app-icon app-icon-md" />,
      label: <Link to="/driver-analytics">Driver Analytics</Link>,
    },
    {
      key: '/safety-metrics',
      icon: <SafetyOutlined className="app-icon app-icon-md" />,
      label: <Link to="/safety-metrics">Safety Metrics</Link>,
    },
    {
      key: '/training',
      icon: <ReadOutlined className="app-icon app-icon-md" />,
      label: <Link to="/training">Training Management</Link>,
    },
    {
      key: '/company-comparison',
      icon: <TeamOutlined className="app-icon app-icon-md" />,
      label: <Link to="/company-comparison">Company Comparison</Link>,
    },
    {
      key: '/settings',
      icon: <SettingOutlined className="app-icon app-icon-md" />,
      label: <Link to="/settings">Settings</Link>,
    },
  ];

  return (
    <Sider
      width={240}
      collapsedWidth={80}
      collapsed={collapsed}
      className="site-sidebar"
      trigger={null}
    >
      <div className="sidebar-header">
        <Button 
          type="text"
          icon={collapsed ? 
            <MenuUnfoldOutlined className="app-icon app-icon-md" /> : 
            <MenuFoldOutlined className="app-icon app-icon-md" />
          }
          onClick={() => setCollapsed(!collapsed)}
          className="sidebar-toggle app-icon-btn"
        />
        
        {!collapsed && (
          <Input
            placeholder="Search..."
            prefix={<SearchOutlined className="app-icon app-icon-md" />}
            className="search-input"
          />
        )}
      </div>
      
      <Menu
        mode="inline"
        selectedKeys={[currentPath]}
        items={menuItems}
        className="sidebar-menu"
      />
    </Sider>
  );
};

export default Sidebar;
