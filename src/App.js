import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import './App.css';
import { LanguageProvider } from './contexts/LanguageContext';

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
  return (
    <LanguageProvider>
      <Router>
        <Layout className="app-container">
          <Sidebar />
          <Layout className="site-layout">
            <Header />
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
    </LanguageProvider>
  );
}

export default App;
