import React from 'react';
import { Layout, Menu, Typography } from 'antd';
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
const { Title } = Typography;

const Sidebar = ({ collapsed }) => {
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
      style={{
        height: '100vh',
        position: 'fixed',
        left: 0
      }}
      width={240}
      collapsedWidth={80}
      trigger={null} 
      theme="light"
    >
      <div style={{ 
        height: '64px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '16px',
        borderBottom: '1px solid var(--border-color)'
      }}>
        {!collapsed ? (
          <Title level={4} style={{ margin: 0, color: 'var(--primary-color)' }}>Driving Safety Monitor</Title>
        ) : (
          <Title level={4} style={{ margin: 0, color: 'var(--primary-color)' }}>DSM</Title>
        )}
      </div>
      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
        style={{ borderRight: 0 }}
      />
    </Sider>
  );
};

export default Sidebar;
