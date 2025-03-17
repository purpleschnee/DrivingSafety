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

// Detail Pages
import DriverDetails from './pages/details/DriverDetails';
import DriverTraining from './pages/details/DriverTraining';
import AlertDetails from './pages/details/AlertDetails';
import SafetyEventDetails from './pages/details/SafetyEventDetails';
import TrainingCertificate from './pages/details/TrainingCertificate';
import InterventionDetails from './pages/details/InterventionDetails';

const { Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <Router basename="/SafeDrivingPlatform">
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
              
              {/* Detail Pages */}
              <Route path="/driver-details/:id" element={<DriverDetails />} />
              <Route path="/driver-training/:id" element={<DriverTraining />} />
              <Route path="/alert-details/:id" element={<AlertDetails />} />
              <Route path="/safety-event/:id" element={<SafetyEventDetails />} />
              <Route path="/training-certificate/:id" element={<TrainingCertificate />} />
              <Route path="/intervention/:id" element={<InterventionDetails />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;
