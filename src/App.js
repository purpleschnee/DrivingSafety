import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';
import './themes/BloombergTheme.css'; // 导入Bloomberg主题

// Components
import Sidebar from './components/Sidebar';
import Header from './components/Header';

// Pages
import Dashboard from './pages/Dashboard';
import DriverAnalytics from './pages/DriverAnalytics';
import SafetyMetrics from './pages/SafetyMetrics';
import TrainingManagement from './pages/TrainingManagement';
import CompanyComparison from './pages/CompanyComparison';
import Settings from './pages/Settings';

const { Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  
  // 计算内容区域的左边距，以适应固定侧边栏
  const marginLeft = collapsed ? 80 : 240;
  
  return (
    <Router>
      <Layout className="app-container">
        <Sidebar collapsed={collapsed} />
        <Layout className="site-layout" style={{ marginLeft }}>
          <Header collapsed={collapsed} setCollapsed={setCollapsed} />
          <Content className="site-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/driver-analytics" element={<DriverAnalytics />} />
              <Route path="/safety-metrics" element={<SafetyMetrics />} />
              <Route path="/training" element={<TrainingManagement />} />
              <Route path="/company-comparison" element={<CompanyComparison />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
