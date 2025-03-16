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
import { useLanguage } from '../contexts/LanguageContext';

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  
  const menuItems = [
    {
      key: '/',
      icon: <DashboardOutlined />,
      label: <Link to="/">{t('dashboard')}</Link>,
    },
    {
      key: '/driver-analytics',
      icon: <CarOutlined />,
      label: <Link to="/driver-analytics">{t('driverAnalytics')}</Link>,
    },
    {
      key: '/safety-metrics',
      icon: <SafetyOutlined />,
      label: <Link to="/safety-metrics">{t('safetyMetrics')}</Link>,
    },
    {
      key: '/training',
      icon: <ReadOutlined />,
      label: <Link to="/training">{t('training')}</Link>,
    },
    {
      key: '/company-comparison',
      icon: <BarChartOutlined />,
      label: <Link to="/company-comparison">{t('companyComparison')}</Link>,
    },
    {
      key: '/settings',
      icon: <SettingOutlined />,
      label: <Link to="/settings">{t('settings')}</Link>,
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
          <h2 style={{ margin: 0, color: '#0071e3' }}>{t('platformTitle')}</h2>
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
