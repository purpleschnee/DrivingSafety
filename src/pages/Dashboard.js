import React from 'react';
import { Row, Col, Card, Statistic, Progress, Typography, Table, Button } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, CarOutlined, ExclamationCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Line, Pie, Column } from '@ant-design/charts';
import PageHeader from '../components/PageHeader';

const { Title, Text } = Typography;

const Dashboard = () => {
  // Safety score data
  const safetyScoreData = [
    { date: '2025-01', score: 78 },
    { date: '2025-02', score: 82 },
    { date: '2025-03', score: 85 },
    { date: '2025-04', score: 83 },
    { date: '2025-05', score: 88 },
    { date: '2025-06', score: 91 },
  ];

  // Safety score chart configuration
  const safetyScoreConfig = {
    data: safetyScoreData,
    height: 250,
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
      stroke: '#0071e3',
      lineWidth: 3,
    },
    yAxis: {
      min: 60,
      max: 100,
    },
  };

  // Incident type distribution data
  const incidentTypeData = [
    { type: 'Hard Braking', value: 38 },
    { type: 'Rapid Acceleration', value: 25 },
    { type: 'Sharp Turning', value: 18 },
    { type: 'Speeding', value: 15 },
    { type: 'Fatigue Driving', value: 4 },
  ];

  // Incident type distribution chart configuration
  const incidentTypeConfig = {
    data: incidentTypeData,
    height: 250,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
  };

  // Safety score distribution data
  const safetyScoreDistributionData = [
    { score: '60-70', count: 12, color: '#ff3b30' },
    { score: '71-80', count: 28, color: '#ff9500' },
    { score: '81-90', count: 45, color: '#5ac8fa' },
    { score: '91-100', count: 15, color: '#34c759' },
  ];

  // Safety score distribution chart configuration
  const safetyScoreDistributionConfig = {
    data: safetyScoreDistributionData,
    xField: 'score',
    yField: 'count',
    color: ({ score }) => {
      const item = safetyScoreDistributionData.find(d => d.score === score);
      return item ? item.color : '#5ac8fa';
    },
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.8,
      },
    },
    meta: {
      score: { alias: 'Safety Score Range' },
      count: { alias: 'Number of Drivers' },
    },
  };

  // Real-time safety alerts data
  const realtimeAlertsData = [
    { id: 'A-1023', driver: 'D-10056', name: 'Liu Yang', event: 'Hard Braking', location: 'Zhongguancun South Street', time: '10 mins ago', severity: 'Medium' },
    { id: 'A-1022', driver: 'D-10023', name: 'Wang Wei', event: 'Speeding', location: 'Xizhimen Outer Street', time: '25 mins ago', severity: 'High' },
    { id: 'A-1021', driver: 'D-10078', name: 'Li Qiang', event: 'Sharp Turning', location: 'Chaoyang Road', time: '42 mins ago', severity: 'Low' },
    { id: 'A-1020', driver: 'D-10112', name: 'Chen Xiao', event: 'Rapid Acceleration', location: 'Jianguomen Outer Street', time: '1 hour ago', severity: 'Medium' },
  ];

  // Real-time safety alerts columns configuration
  const realtimeAlertsColumns = [
    {
      title: 'Alert ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Driver',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => `${text} (${record.driver})`,
    },
    {
      title: 'Event Type',
      dataIndex: 'event',
      key: 'event',
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Severity',
      dataIndex: 'severity',
      key: 'severity',
      render: (severity) => {
        let color = severity === 'High' ? '#ff3b30' : severity === 'Medium' ? '#ff9500' : '#34c759';
        return <Text strong style={{ color }}>{severity}</Text>;
      },
    },
    {
      title: 'Action',
      key: 'action',
      className: 'action-column',
      render: () => <div style={{ textAlign: 'left' }}><Button type="link" size="small" style={{ textAlign: 'left' }} className="action-button">Process</Button></div>,
    },
  ];

  // Driver performance data
  const driverPerformanceColumns = [
    {
      title: 'Driver ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Safety Score',
      dataIndex: 'safetyScore',
      key: 'safetyScore',
      sorter: (a, b) => a.safetyScore - b.safetyScore,
      render: (score) => {
        let color = score >= 90 ? '#34c759' : score >= 80 ? '#ff9500' : '#ff3b30';
        return <Text strong style={{ color }}>{score}</Text>;
      },
    },
    {
      title: 'Incidents',
      dataIndex: 'incidents',
      key: 'incidents',
      sorter: (a, b) => a.incidents - b.incidents,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        if (status === 'Excellent') {
          return <Text type="success"><CheckCircleOutlined /> {status}</Text>;
        } else if (status === 'Needs Attention') {
          return <Text type="warning"><ExclamationCircleOutlined /> {status}</Text>;
        } else {
          return <Text type="danger"><ExclamationCircleOutlined /> {status}</Text>;
        }
      },
    },
    {
      title: 'Action',
      key: 'action',
      className: 'action-column',
      render: () => <div style={{ textAlign: 'left' }}><Button type="link" size="small">View Details</Button></div>,
    },
  ];

  const driverPerformanceData = [
    {
      key: '1',
      id: 'D-10056',
      name: 'Liu Yang',
      safetyScore: 95,
      incidents: 2,
      status: 'Excellent',
    },
    {
      key: '2',
      id: 'D-10023',
      name: 'Wang Wei',
      safetyScore: 72,
      incidents: 8,
      status: 'Warning',
    },
    {
      key: '3',
      id: 'D-10078',
      name: 'Li Qiang',
      safetyScore: 88,
      incidents: 4,
      status: 'Needs Attention',
    },
  ];

  return (
    <div className="dashboard-container">
      <PageHeader 
        title="Safety Driving Data Overview" 
        description="Real-time monitoring of fleet safety performance"
      />
      
      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Average Safety Score"
              value={85.7}
              precision={1}
              valueStyle={{ color: '#0071e3' }}
              prefix={<CarOutlined />}
              suffix="pts"
            />
            <div className="trend-container">
              <span className="trend-up"><ArrowUpOutlined /> 3.2%</span>
              <span className="trend-text-secondary">from last month</span>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total Driving Hours"
              value={247}
              valueStyle={{ color: '#ff9500' }}
            />
            <div className="trend-container">
              <span className="trend-up"><ArrowUpOutlined /> 3.2%</span>
              <span className="trend-text-secondary">from last month</span>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Safety Compliance Rate"
              value={92.3}
              precision={1}
              valueStyle={{ color: '#34c759' }}
              suffix="%"
            />
            <div className="trend-container">
              <Progress percent={92.3} showInfo={false} strokeColor="#34c759" style={{ width: '100%' }} />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Critical Safety Incidents"
              value={8}
              valueStyle={{ color: '#ff3b30' }}
            />
            <div className="trend-container">
              <span className="trend-down-positive"><ArrowDownOutlined /> 2</span>
              <span className="trend-text-secondary">from last month</span>
            </div>
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col xs={24} lg={12}>
          <Card title={<span style={{ color: 'var(--heading-color)' }}>Safety Score Trend</span>}>
            <Line {...safetyScoreConfig} />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title={<span style={{ color: 'var(--heading-color)' }}>Incident Type Distribution</span>}>
            <Pie {...incidentTypeConfig} />
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col xs={24}>
          <Card title={<span style={{ color: 'var(--heading-color)' }}>Driver Safety Score Distribution</span>}>
            <Column {...safetyScoreDistributionConfig} />
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col xs={24}>
          <Card title={<span style={{ color: 'var(--heading-color)' }}>Real-time Safety Alerts</span>}>
            <Table 
              dataSource={realtimeAlertsData} 
              columns={realtimeAlertsColumns} 
              pagination={false}
              size="middle"
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col xs={24}>
          <Card title={<span style={{ color: 'var(--heading-color)' }}>Top Driver Performance</span>}>
            <Table 
              dataSource={driverPerformanceData} 
              columns={driverPerformanceColumns} 
              pagination={false}
              size="middle"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
