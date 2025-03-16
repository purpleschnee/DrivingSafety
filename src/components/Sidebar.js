import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { 
  DashboardOutlined, 
  CarOutlined, 
  SafetyOutlined, 
  ReadOutlined,
  BarChartOutlined,
  SettingOutlined
} from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  
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
      icon: <BarChartOutlined />,
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
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={{
        background: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.09)',
        zIndex: 10
      }}
    >
      <div style={{ 
        height: '64px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '16px'
      }}>
        {!collapsed ? (
          <h2 style={{ margin: 0, color: '#0071e3' }}>Safe Driving Platform</h2>
        ) : (
          <h2 style={{ margin: 0, color: '#0071e3' }}>SDP</h2>
        )}
      </div>
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
      />
    </Sider>
  );
};

export default Sidebar;
