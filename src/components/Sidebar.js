import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {
  DashboardOutlined,
  CarOutlined,
  SafetyOutlined,
  ReadOutlined,
  TeamOutlined,
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
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
      icon: <DashboardOutlined />,
      label: <Link to="/">Dashboard</Link>,
    },
    {
      key: '/driver-analytics',
      icon: <CarOutlined />,
      label: <Link to="/driver-analytics">Driver Analytics</Link>,
    },
    {
      key: '/safety-metrics',
      icon: <SafetyOutlined />,
      label: <Link to="/safety-metrics">Safety Metrics</Link>,
    },
    {
      key: '/training',
      icon: <ReadOutlined />,
      label: <Link to="/training">Training Management</Link>,
    },
    {
      key: '/company-comparison',
      icon: <TeamOutlined />,
      label: <Link to="/company-comparison">Company Comparison</Link>,
    },
    {
      key: '/settings',
      icon: <SettingOutlined />,
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
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className="sidebar-toggle"
        />
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
