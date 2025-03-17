import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';
import './themes/BloombergTheme.css';

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
  
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout style={{ 
          marginLeft: collapsed ? 80 : 240,
          transition: 'all 0.2s'
        }}>
          <Header />
          <Content style={{ 
            margin: '0',
            padding: '24px',
            background: 'var(--bg-light)',
            minHeight: 'calc(100vh - 64px)',
            overflow: 'auto'
          }}>
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
