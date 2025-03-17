import React, { useState } from 'react';
import { Row, Col, Card, Typography, Table, Button, Select, DatePicker, Tabs, Statistic, Progress, Space } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, DownloadOutlined } from '@ant-design/icons';
import { Line, Column, Radar, DualAxes } from '@ant-design/charts';

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;
const { TabPane } = Tabs;

const CompanyComparison = () => {
  const [comparisonType, setComparisonType] = useState('industry');

  // Company comparison data
  const companyComparisonData = [
    { month: '2025-01', company: 85, industry: 78, competitor: 80 },
    { month: '2025-02', company: 87, industry: 79, competitor: 82 },
    { month: '2025-03', company: 89, industry: 80, competitor: 83 },
    { month: '2025-04', company: 88, industry: 81, competitor: 85 },
    { month: '2025-05', company: 91, industry: 82, competitor: 86 },
    { month: '2025-06', company: 93, industry: 83, competitor: 87 },
  ];

  // Company comparison chart configuration
  const comparisonConfig = {
    data: companyComparisonData,
    height: 300,
    xField: 'month',
    yField: ['company', 'industry', 'competitor'],
    seriesField: 'type',
    yAxis: {
      min: 70,
      max: 100,
    },
    legend: {
      position: 'top',
    },
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 1000,
      },
    },
  };

  // Safety metrics radar chart data
  const safetyRadarData = [
    { metric: 'Safety Score', company: 93, industry: 83, competitor: 87 },
    { metric: 'Hard Braking', company: 95, industry: 85, competitor: 90 },
    { metric: 'Rapid Acceleration', company: 90, industry: 82, competitor: 85 },
    { metric: 'Sharp Turns', company: 92, industry: 80, competitor: 83 },
    { metric: 'Speeding', company: 88, industry: 78, competitor: 80 },
    { metric: 'Fatigue Driving', company: 94, industry: 84, competitor: 88 },
  ];

  // Convert radar chart data format
  const radarDataFormatted = [];
  safetyRadarData.forEach(item => {
    radarDataFormatted.push({ metric: item.metric, type: 'Our Company', value: item.company });
    radarDataFormatted.push({ metric: item.metric, type: 'Industry Average', value: item.industry });
    radarDataFormatted.push({ metric: item.metric, type: 'Main Competitor', value: item.competitor });
  });

  // Safety metrics radar chart configuration
  const radarConfig = {
    data: radarDataFormatted,
    height: 300,
    xField: 'metric',
    yField: 'value',
    seriesField: 'type',
    meta: {
      value: {
        min: 70,
        max: 100,
      },
    },
    xAxis: {
      line: null,
      tickLine: null,
    },
    yAxis: {
      label: false,
      grid: {
        line: {
          style: {
            lineDash: [4, 4],
          },
        },
      },
    },
    point: {
      size: 3,
    },
    area: {},
  };

  // Safety and cost dual axes chart data
  const safetyAndCostData = [
    { month: '2025-01', safety: 85, cost: 120 },
    { month: '2025-02', safety: 87, cost: 115 },
    { month: '2025-03', safety: 89, cost: 110 },
    { month: '2025-04', safety: 88, cost: 112 },
    { month: '2025-05', safety: 91, cost: 105 },
    { month: '2025-06', safety: 93, cost: 100 },
  ];

  // Safety and cost dual axes chart configuration
  const dualAxesConfig = {
    data: [safetyAndCostData, safetyAndCostData],
    height: 300,
    xField: 'month',
    yField: ['safety', 'cost'],
    geometryOptions: [
      {
        geometry: 'line',
        smooth: true,
        color: '#0071e3',
        lineStyle: {
          lineWidth: 3,
        },
      },
      {
        geometry: 'column',
        color: '#ff9500',
        columnWidthRatio: 0.4,
      },
    ],
    yAxis: {
      safety: {
        min: 70,
        max: 100,
        title: {
          text: 'Safety Score',
        },
      },
      cost: {
        min: 90,
        max: 130,
        title: {
          text: 'Operating Cost Index',
        },
      },
    },
  };

  // Company comparison table data
  const comparisonColumns = [
    {
      title: 'Metric',
      dataIndex: 'metric',
      key: 'metric',
    },
    {
      title: 'Our Company',
      dataIndex: 'company',
      key: 'company',
      sorter: (a, b) => a.company - b.company,
      render: (value, record) => {
        return (
          <Space direction="vertical" size={0}>
            <Text strong>{value}</Text>
            {record.companyChange > 0 ? (
              <Text type="success" style={{ fontSize: '12px' }}>
                <ArrowUpOutlined /> {record.companyChange}%
              </Text>
            ) : (
              <Text type="danger" style={{ fontSize: '12px' }}>
                <ArrowDownOutlined /> {Math.abs(record.companyChange)}%
              </Text>
            )}
          </Space>
        );
      },
    },
    {
      title: 'Industry Average',
      dataIndex: 'industry',
      key: 'industry',
      sorter: (a, b) => a.industry - b.industry,
    },
    {
      title: 'Difference',
      dataIndex: 'difference',
      key: 'difference',
      render: (_, record) => {
        const diff = record.company - record.industry;
        return diff > 0 ? (
          <Text type="success">+{diff.toFixed(1)}</Text>
        ) : (
          <Text type="danger">{diff.toFixed(1)}</Text>
        );
      },
    },
    {
      title: 'Main Competitor',
      dataIndex: 'competitor',
      key: 'competitor',
      sorter: (a, b) => a.competitor - b.competitor,
    },
    {
      title: 'Comparison with Competitor',
      dataIndex: 'competitorDiff',
      key: 'competitorDiff',
      render: (_, record) => {
        const diff = record.company - record.competitor;
        return diff > 0 ? (
          <Text type="success">+{diff.toFixed(1)}</Text>
        ) : (
          <Text type="danger">{diff.toFixed(1)}</Text>
        );
      },
    },
    {
      title: 'Industry Ranking',
      dataIndex: 'rank',
      key: 'rank',
      render: (rank, record) => {
        return (
          <Space>
            <Text strong>{rank}</Text>
            <Text type="secondary">/ {record.total}</Text>
          </Space>
        );
      },
    },
  ];

  const comparisonData = [
    {
      key: '1',
      metric: 'Safety Score',
      company: 93,
      companyChange: 2.5,
      industry: 83,
      competitor: 87,
      rank: 2,
      total: 15,
    },
    {
      key: '2',
      metric: 'Incident Rate (per 100k miles)',
      company: 2.1,
      companyChange: -15.3,
      industry: 3.8,
      competitor: 2.8,
      rank: 1,
      total: 15,
    },
    {
      key: '3',
      metric: 'Hard Braking Events (per 1k miles)',
      company: 1.2,
      companyChange: -18.5,
      industry: 2.5,
      competitor: 1.8,
      rank: 1,
      total: 15,
    },
    {
      key: '4',
      metric: 'Rapid Acceleration Events (per 1k miles)',
      company: 1.5,
      companyChange: -12.8,
      industry: 2.8,
      competitor: 2.2,
      rank: 1,
      total: 15,
    },
    {
      key: '5',
      metric: 'Speeding Events (per 1k miles)',
      company: 3.2,
      companyChange: -8.5,
      industry: 5.6,
      competitor: 4.1,
      rank: 2,
      total: 15,
    },
    {
      key: '6',
      metric: 'Driver Compliance Rate',
      company: 96.5,
      companyChange: 1.8,
      industry: 88.2,
      competitor: 92.3,
      rank: 1,
      total: 15,
    },
    {
      key: '7',
      metric: 'Training Completion Rate',
      company: 98.2,
      companyChange: 3.5,
      industry: 85.6,
      competitor: 90.1,
      rank: 1,
      total: 15,
    },
  ];

  return (
    <div className="company-comparison-container">
      <Title level={3}>Company Comparison</Title>
      <Text type="secondary" style={{ marginBottom: '24px', display: 'block' }}>
        Compare our company's safety metrics with industry averages and competitors
      </Text>
      
      {/* Control Panel */}
      <Card style={{ marginBottom: '24px' }}>
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} md={8}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Text strong style={{ whiteSpace: 'nowrap', marginRight: '10px' }}>Comparison Type:</Text>
              <Select 
                style={{ width: '100%' }} 
                defaultValue="industry"
                onChange={(value) => setComparisonType(value)}
              >
                <Option value="industry">Industry Average</Option>
                <Option value="competitor">Main Competitor</Option>
                <Option value="historical">Historical Data</Option>
              </Select>
            </div>
          </Col>
          <Col xs={24} md={10}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Text strong style={{ whiteSpace: 'nowrap', marginRight: '10px' }}>Date Range:</Text>
              <RangePicker style={{ width: '100%' }} />
            </div>
          </Col>
          <Col xs={24} md={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button icon={<DownloadOutlined />} type="primary">Export Report</Button>
          </Col>
        </Row>
      </Card>

      {/* Statistics Cards */}
      <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Safety Score Ranking"
              value={2}
              suffix="/ 15"
              valueStyle={{ color: '#0071e3' }}
            />
            <div style={{ marginTop: '10px' }}>
              <Text type="success">
                <ArrowUpOutlined /> Up 1 position from last month
              </Text>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Above Industry Average"
              value={12}
              precision={0}
              valueStyle={{ color: '#34c759' }}
              suffix="%"
            />
            <div style={{ marginTop: '10px' }}>
              <Progress percent={12} showInfo={false} strokeColor="#34c759" />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Above Main Competitor"
              value={6.9}
              precision={1}
              valueStyle={{ color: '#34c759' }}
              suffix="%"
            />
            <div style={{ marginTop: '10px' }}>
              <Progress percent={6.9} showInfo={false} strokeColor="#34c759" />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Safety Investment Return"
              value={185}
              precision={0}
              valueStyle={{ color: '#0071e3' }}
              suffix="%"
            />
            <div style={{ marginTop: '10px' }}>
              <Text type="success">
                <ArrowUpOutlined /> 15% from last quarter
              </Text>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Chart Tabs */}
      <Card style={{ marginBottom: '24px' }}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Safety Score Trends" key="1">
            <Line {...comparisonConfig} />
          </TabPane>
          <TabPane tab="Safety Metrics Radar Chart" key="2">
            <Radar {...radarConfig} />
          </TabPane>
          <TabPane tab="Safety vs. Cost" key="3">
            <DualAxes {...dualAxesConfig} />
          </TabPane>
        </Tabs>
      </Card>

      {/* Comparison Table */}
      <Card title="Safety Metrics Comparison" style={{ marginBottom: '24px' }}>
        <Table 
          columns={comparisonColumns} 
          dataSource={comparisonData} 
          pagination={false}
        />
      </Card>

      {/* Analysis Summary */}
      <Card title="Comparison Analysis Summary">
        <Row gutter={[24, 24]}>
          <Col xs={24} md={8}>
            <Card type="inner" title="Advantages">
              <ul>
                <li>Safety score consistently above industry average by 12%</li>
                <li>Incident rate is the lowest in the industry, 43% lower than the average</li>
                <li>Training completion rate is the highest in the industry, 20% above the average</li>
                <li>Passenger satisfaction is continuously improving, leading the industry</li>
              </ul>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card type="inner" title="Disadvantages">
              <ul>
                <li>Safety score fluctuates in some regions</li>
                <li>New driver safety performance is below industry average</li>
                <li>Nighttime driving safety metrics need improvement</li>
                <li>Safety performance is unstable in adverse weather conditions</li>
              </ul>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card type="inner" title="Improvement Suggestions">
              <ul>
                <li>Enhance new driver training and increase the entry threshold</li>
                <li>Develop a specialized training module for nighttime driving</li>
                <li>Introduce an adverse weather driving assistance system</li>
                <li>Establish a regional safety management team to reduce regional differences</li>
              </ul>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default CompanyComparison;
