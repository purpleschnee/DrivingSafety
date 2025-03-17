import React, { useState } from 'react';
import { Row, Col, Card, Typography, Select, DatePicker, Button, Tabs, Statistic, Progress, Tag, Space, Tooltip } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, DownloadOutlined, InfoCircleOutlined, CarOutlined, 
         WarningOutlined, CheckCircleOutlined, ExclamationCircleOutlined, FilterOutlined, 
         ReloadOutlined, SearchOutlined } from '@ant-design/icons';
import { Line, Radar, Gauge } from '@ant-design/charts';

const { Title, Text, Paragraph } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;
const { TabPane } = Tabs;

const OptimizedDashboard = () => {
  const [timeRange, setTimeRange] = useState('month');
  const [activeTab, setActiveTab] = useState('1');

  // Sample data for charts
  const safetyTrendData = [
    { date: '2025-01-01', score: 78, incidents: 42 },
    { date: '2025-01-15', score: 80, incidents: 38 },
    { date: '2025-02-01', score: 82, incidents: 35 },
    { date: '2025-02-15', score: 83, incidents: 33 },
    { date: '2025-03-01', score: 85, incidents: 30 },
    { date: '2025-03-15', score: 87, incidents: 28 },
    { date: '2025-04-01', score: 86, incidents: 29 },
    { date: '2025-04-15', score: 88, incidents: 26 },
    { date: '2025-05-01', score: 90, incidents: 24 },
    { date: '2025-05-15', score: 91, incidents: 22 },
    { date: '2025-06-01', score: 92, incidents: 20 },
  ];

  // Safety trend chart configuration
  const safetyTrendConfig = {
    data: safetyTrendData,
    height: 400,
    autoFit: true,
    padding: [30, 30, 50, 50],
    xField: 'date',
    yField: 'score',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
    smooth: true,
    lineStyle: {
      stroke: '#007BFF',
      lineWidth: 3,
    },
    yAxis: {
      min: 60,
      max: 100,
    },
  };

  // Incident trend chart configuration
  const incidentTrendConfig = {
    data: safetyTrendData,
    height: 400,
    autoFit: true,
    padding: [30, 30, 50, 50],
    xField: 'date',
    yField: 'incidents',
    point: {
      size: 5,
      shape: 'circle',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
    smooth: true,
    lineStyle: {
      stroke: '#FF5722',
      lineWidth: 3,
    },
  };

  return (
    <div className="container">
      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-md">
        <div>
          <Title level={2} className="mb-xs">Safety Dashboard</Title>
          <Text className="text-secondary">Overview of fleet safety metrics and trends</Text>
        </div>
        <Space>
          <Button type="default" icon={<DownloadOutlined />}>Export Report</Button>
          <Button type="primary" icon={<ReloadOutlined />}>Refresh Data</Button>
        </Space>
      </div>

      {/* Filter Bar */}
      <div className="filter-bar mb-lg">
        <div className="filter-group">
          <span className="filter-label">Time Period:</span>
          <Select 
            defaultValue="month" 
            className="filter-control" 
            onChange={value => setTimeRange(value)}
          >
            <Option value="day">Today</Option>
            <Option value="week">This Week</Option>
            <Option value="month">This Month</Option>
            <Option value="quarter">This Quarter</Option>
            <Option value="year">This Year</Option>
          </Select>
        </div>
        
        <div className="filter-group">
          <span className="filter-label">Date Range:</span>
          <RangePicker className="filter-control" />
        </div>
        
        <div className="filter-group">
          <span className="filter-label">Vehicle Type:</span>
          <Select defaultValue="all" className="filter-control">
            <Option value="all">All Vehicles</Option>
            <Option value="sedan">Sedans</Option>
            <Option value="suv">SUVs</Option>
            <Option value="van">Vans</Option>
            <Option value="truck">Trucks</Option>
          </Select>
        </div>
        
        <Button type="default" icon={<FilterOutlined />}>More Filters</Button>
      </div>

      {/* Safety Score Overview */}
      <Row gutter={[24, 24]} className="mb-lg">
        <Col xs={24} sm={12} md={6}>
          <div className="card safety-score-card">
            <div className="card-body">
              <div className="safety-score-label">Overall Safety Score</div>
              <div className="safety-score-value">87</div>
              <div className="safety-score-trend text-success">
                <ArrowUpOutlined className="safety-score-trend-icon" />
                <span>+2.4% from last month</span>
              </div>
            </div>
          </div>
        </Col>
        
        <Col xs={24} sm={12} md={6}>
          <div className="card stat-card">
            <div className="stat-card-title">Total Incidents</div>
            <div className="stat-card-value">28</div>
            <div className="stat-card-trend stat-card-trend-down-positive">
              <ArrowDownOutlined /> 12% decrease
            </div>
            <div className="stat-card-icon">
              <WarningOutlined />
            </div>
          </div>
        </Col>
        
        <Col xs={24} sm={12} md={6}>
          <div className="card stat-card">
            <div className="stat-card-title">Active Drivers</div>
            <div className="stat-card-value">42</div>
            <div className="stat-card-trend stat-card-trend-up">
              <ArrowUpOutlined /> 3 new this month
            </div>
            <div className="stat-card-icon">
              <CarOutlined />
            </div>
          </div>
        </Col>
        
        <Col xs={24} sm={12} md={6}>
          <div className="card stat-card">
            <div className="stat-card-title">Training Completion</div>
            <div className="stat-card-value">93%</div>
            <div className="stat-card-trend stat-card-trend-up">
              <ArrowUpOutlined /> 5% increase
            </div>
            <div className="stat-card-icon">
              <CheckCircleOutlined />
            </div>
          </div>
        </Col>
      </Row>

      {/* Incident Types */}
      <Title level={3} className="mb-sm">Incident Breakdown</Title>
      <Row gutter={[24, 24]} className="mb-lg">
        <Col xs={24} sm={12} md={8} lg={6}>
          <div className="card incident-type-card warning">
            <div className="card-body">
              <div className="d-flex align-items-center mb-sm">
                <div className="incident-type-icon">
                  <WarningOutlined />
                </div>
                <div>
                  <div className="incident-type-title">Hard Braking</div>
                </div>
              </div>
              <div className="incident-type-count">12</div>
              <div className="incident-type-trend text-success">
                <ArrowDownOutlined /> 15% decrease
              </div>
            </div>
          </div>
        </Col>
        
        <Col xs={24} sm={12} md={8} lg={6}>
          <div className="card incident-type-card critical">
            <div className="card-body">
              <div className="d-flex align-items-center mb-sm">
                <div className="incident-type-icon">
                  <ExclamationCircleOutlined />
                </div>
                <div>
                  <div className="incident-type-title">Rapid Acceleration</div>
                </div>
              </div>
              <div className="incident-type-count">8</div>
              <div className="incident-type-trend text-success">
                <ArrowDownOutlined /> 20% decrease
              </div>
            </div>
          </div>
        </Col>
        
        <Col xs={24} sm={12} md={8} lg={6}>
          <div className="card incident-type-card warning">
            <div className="card-body">
              <div className="d-flex align-items-center mb-sm">
                <div className="incident-type-icon">
                  <WarningOutlined />
                </div>
                <div>
                  <div className="incident-type-title">Sharp Turning</div>
                </div>
              </div>
              <div className="incident-type-count">5</div>
              <div className="incident-type-trend text-success">
                <ArrowDownOutlined /> 10% decrease
              </div>
            </div>
          </div>
        </Col>
        
        <Col xs={24} sm={12} md={8} lg={6}>
          <div className="card incident-type-card good">
            <div className="card-body">
              <div className="d-flex align-items-center mb-sm">
                <div className="incident-type-icon">
                  <InfoCircleOutlined />
                </div>
                <div>
                  <div className="incident-type-title">Speeding</div>
                </div>
              </div>
              <div className="incident-type-count">3</div>
              <div className="incident-type-trend text-success">
                <ArrowDownOutlined /> 25% decrease
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* Charts */}
      <Row gutter={[24, 24]} className="mb-lg">
        <Col xs={24} lg={12}>
          <div className="card">
            <div className="card-header">
              <div className="card-title">Safety Score Trend</div>
              <Tooltip title="Shows the overall safety score trend over time">
                <InfoCircleOutlined />
              </Tooltip>
            </div>
            <div className="card-body">
              <div className="chart-container">
                <Line {...safetyTrendConfig} />
              </div>
            </div>
          </div>
        </Col>
        
        <Col xs={24} lg={12}>
          <div className="card">
            <div className="card-header">
              <div className="card-title">Incident Trend</div>
              <Tooltip title="Shows the number of safety incidents over time">
                <InfoCircleOutlined />
              </Tooltip>
            </div>
            <div className="card-body">
              <div className="chart-container">
                <Line {...incidentTrendConfig} />
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* Top Performing Drivers */}
      <Title level={3} className="mb-sm">Top Performing Drivers</Title>
      <Row gutter={[24, 24]} className="mb-lg">
        <Col xs={24} md={8}>
          <div className="card">
            <div className="card-body">
              <div className="driver-profile-card">
                <div className="driver-avatar">ZM</div>
                <div className="driver-info">
                  <div className="driver-name">Zhang Ming</div>
                  <div className="driver-id">ID: D-10045</div>
                  <Tag color="success">Top Performer</Tag>
                  <div className="driver-stats">
                    <div className="driver-stat">
                      <span className="driver-stat-value">94</span>
                      <span className="driver-stat-label">Safety Score</span>
                    </div>
                    <div className="driver-stat">
                      <span className="driver-stat-value">2</span>
                      <span className="driver-stat-label">Incidents</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        
        <Col xs={24} md={8}>
          <div className="card">
            <div className="card-body">
              <div className="driver-profile-card">
                <div className="driver-avatar">ZJ</div>
                <div className="driver-info">
                  <div className="driver-name">Zhao Jing</div>
                  <div className="driver-id">ID: D-10089</div>
                  <Tag color="success">Top Performer</Tag>
                  <div className="driver-stats">
                    <div className="driver-stat">
                      <span className="driver-stat-value">92</span>
                      <span className="driver-stat-label">Safety Score</span>
                    </div>
                    <div className="driver-stat">
                      <span className="driver-stat-value">3</span>
                      <span className="driver-stat-label">Incidents</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        
        <Col xs={24} md={8}>
          <div className="card">
            <div className="card-body">
              <div className="driver-profile-card">
                <div className="driver-avatar">CX</div>
                <div className="driver-info">
                  <div className="driver-name">Chen Xiao</div>
                  <div className="driver-id">ID: D-10112</div>
                  <Tag color="success">Top Performer</Tag>
                  <div className="driver-stats">
                    <div className="driver-stat">
                      <span className="driver-stat-value">89</span>
                      <span className="driver-stat-label">Safety Score</span>
                    </div>
                    <div className="driver-stat">
                      <span className="driver-stat-value">4</span>
                      <span className="driver-stat-label">Incidents</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default OptimizedDashboard;
