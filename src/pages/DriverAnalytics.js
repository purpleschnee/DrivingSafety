import React, { useState } from 'react';
import { Row, Col, Card, Typography, Table, Button, Select, DatePicker, Input, Tag, Space, Tabs, Avatar, Rate, Statistic, Progress } from 'antd';
import { SearchOutlined, FilterOutlined, DownloadOutlined, UserOutlined, CarOutlined, ExclamationCircleOutlined, CheckCircleOutlined, StarOutlined, ArrowUpOutlined, ArrowDownOutlined, SafetyOutlined, MessageOutlined, ReadOutlined } from '@ant-design/icons';
import { Line, Column, Radar, Gauge } from '@ant-design/charts';
import PageHeader from '../components/PageHeader';

const { Title, Text, Paragraph } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;
const { TabPane } = Tabs;

const DriverAnalytics = () => {
  const [selectedDriver, setSelectedDriver] = useState('all');
  const [activeTab, setActiveTab] = useState('1');

  // Driver detailed data
  const driversColumns = [
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
      title: 'Hard Braking',
      dataIndex: 'hardBraking',
      key: 'hardBraking',
      sorter: (a, b) => a.hardBraking - b.hardBraking,
    },
    {
      title: 'Rapid Acceleration',
      dataIndex: 'rapidAcceleration',
      key: 'rapidAcceleration',
      sorter: (a, b) => a.rapidAcceleration - b.rapidAcceleration,
    },
    {
      title: 'Hard Turning',
      dataIndex: 'hardTurning',
      key: 'hardTurning',
      sorter: (a, b) => a.hardTurning - b.hardTurning,
    },
    {
      title: 'Speeding',
      dataIndex: 'speeding',
      key: 'speeding',
      sorter: (a, b) => a.speeding - b.speeding,
    },
    {
      title: 'Passenger Rating',
      dataIndex: 'passengerRating',
      key: 'passengerRating',
      sorter: (a, b) => a.passengerRating - b.passengerRating,
      render: (rating) => {
        let color = rating >= 4.5 ? '#34c759' : rating >= 4.0 ? '#ff9500' : '#ff3b30';
        return <Text strong style={{ color }}>{rating}</Text>;
      },
    },
    {
      title: 'Training Status',
      dataIndex: 'trainingStatus',
      key: 'trainingStatus',
      render: (status) => {
        let color = status === 'Completed' ? 'success' : status === 'In Progress' ? 'processing' : 'warning';
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: 'Actions',
      key: 'action',
      render: (text, record) => (
        <Space>
          <Button type="link" size="small" onClick={() => window.location.href = `/driver-details/${record.id}`}>Details</Button>
          <Button type="link" size="small" onClick={() => window.location.href = `/driver-training/${record.id}`}>Training</Button>
        </Space>
      ),
    },
  ];

  const driversData = [
    {
      key: '1',
      id: 'D-10045',
      name: 'Zhang Ming',
      safetyScore: 94,
      hardBraking: 2,
      rapidAcceleration: 1,
      hardTurning: 0,
      speeding: 1,
      passengerRating: 4.8,
      trainingStatus: 'Completed',
    },
    {
      key: '2',
      id: 'D-10078',
      name: 'Li Qiang',
      safetyScore: 87,
      hardBraking: 5,
      rapidAcceleration: 3,
      hardTurning: 2,
      speeding: 1,
      passengerRating: 4.5,
      trainingStatus: 'Completed',
    },
    {
      key: '3',
      id: 'D-10023',
      name: 'Wang Wei',
      safetyScore: 76,
      hardBraking: 8,
      rapidAcceleration: 6,
      hardTurning: 4,
      speeding: 3,
      passengerRating: 3.9,
      trainingStatus: 'In Progress',
    },
    {
      key: '4',
      id: 'D-10089',
      name: 'Zhao Jing',
      safetyScore: 92,
      hardBraking: 3,
      rapidAcceleration: 2,
      hardTurning: 1,
      speeding: 0,
      passengerRating: 4.7,
      trainingStatus: 'Completed',
    },
    {
      key: '5',
      id: 'D-10056',
      name: 'Liu Yang',
      safetyScore: 68,
      hardBraking: 12,
      rapidAcceleration: 8,
      hardTurning: 5,
      speeding: 7,
      passengerRating: 3.6,
      trainingStatus: 'Not Started',
    },
    {
      key: '6',
      id: 'D-10112',
      name: 'Chen Xiao',
      safetyScore: 89,
      hardBraking: 4,
      rapidAcceleration: 3,
      hardTurning: 2,
      speeding: 1,
      passengerRating: 4.6,
      trainingStatus: 'Completed',
    },
    {
      key: '7',
      id: 'D-10098',
      name: 'Yang Hua',
      safetyScore: 81,
      hardBraking: 6,
      rapidAcceleration: 4,
      hardTurning: 3,
      speeding: 2,
      passengerRating: 4.2,
      trainingStatus: 'In Progress',
    },
  ];

  // Driver behavior radar chart data
  const driverBehaviorData = [
    { metric: 'Safe Driving', driver: 'Zhang Ming', value: 94 },
    { metric: 'Smooth Driving', driver: 'Zhang Ming', value: 92 },
    { metric: 'Turning Technique', driver: 'Zhang Ming', value: 90 },
    { metric: 'Distance Control', driver: 'Zhang Ming', value: 88 },
    { metric: 'Speed Control', driver: 'Zhang Ming', value: 95 },
    { metric: 'Road Condition Response', driver: 'Zhang Ming', value: 91 },
    { metric: 'Safe Driving', driver: 'Industry Average', value: 82 },
    { metric: 'Smooth Driving', driver: 'Industry Average', value: 78 },
    { metric: 'Turning Technique', driver: 'Industry Average', value: 80 },
    { metric: 'Distance Control', driver: 'Industry Average', value: 76 },
    { metric: 'Speed Control', driver: 'Industry Average', value: 84 },
    { metric: 'Road Condition Response', driver: 'Industry Average', value: 79 },
  ];

  // Driver behavior radar chart configuration
  const driverBehaviorConfig = {
    data: driverBehaviorData,
    xField: 'metric',
    yField: 'value',
    seriesField: 'driver',
    meta: {
      value: {
        min: 0,
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
            lineDash: null,
          },
        },
      },
    },
    point: {},
    area: {},
  };

  // Passenger feedback data
  const passengerFeedbackData = [
    { id: 'F-2025', passenger: 'Passenger 152***890', date: '2025-03-15', rating: 5, comment: 'The driver drove very smoothly, and I felt safe throughout the trip.' },
    { id: 'F-2024', passenger: 'Passenger 138***456', date: '2025-03-14', rating: 4, comment: 'The driver was good, but there was a bit of a bump during the trip.' },
    { id: 'F-2023', passenger: 'Passenger 177***234', date: '2025-03-12', rating: 5, comment: 'The driver was very professional and courteous.' },
    { id: 'F-2022', passenger: 'Passenger 135***789', date: '2025-03-10', rating: 5, comment: 'The driver was excellent, and I would definitely ride with them again.' },
    { id: 'F-2021', passenger: 'Passenger 186***567', date: '2025-03-08', rating: 4, comment: 'The driver was good, but there was a bit of a delay during the trip.' },
  ];

  // Passenger feedback columns
  const passengerFeedbackColumns = [
    {
      title: 'Feedback ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Passenger',
      dataIndex: 'passenger',
      key: 'passenger',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      render: (rating) => <Rate disabled defaultValue={rating} />,
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
      ellipsis: true,
    },
  ];

  // Safety score gauge configuration
  const safetyGaugeConfig = {
    percent: 0.94,
    range: {
      color: '#30BF78',
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
        },
      },
    },
    axis: {
      label: {
        formatter(v) {
          return Number(v) * 100;
        },
      },
      subTickLine: {
        count: 3,
      },
    },
    statistic: {
      content: {
        formatter: () => '94%',
        style: {
          fontSize: '30px',
          lineHeight: '30px',
          color: '#30BF78',
          fontWeight: 'bold',
        },
      },
    },
  };

  // Safety score trend configuration
  const safetyTrendConfig = {
    data: [
      { month: '2025-01', score: 88 },
      { month: '2025-02', score: 90 },
      { month: '2025-03', score: 89 },
      { month: '2025-04', score: 92 },
      { month: '2025-05', score: 94 },
      { month: '2025-06', score: 94 },
    ],
    xField: 'month',
    yField: 'score',
    smooth: true,
    point: {
      size: 5,
      shape: 'diamond',
    },
    lineStyle: {
      stroke: '#5ac8fa',
      lineWidth: 3,
    },
  };

  return (
    <div className="driver-analytics-container">
      <PageHeader 
        title="Driver Analytics" 
        description="Analyze driver behavior and safety performance metrics"
      />

      {/* Search and filter area */}
      <Card style={{ marginBottom: '24px' }}>
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} sm={8} md={6} lg={4}>
            <Text strong>Driver:</Text>
            <Select
              style={{ width: '100%', marginTop: '8px' }}
              placeholder="Select Driver"
              value={selectedDriver}
              onChange={setSelectedDriver}
            >
              <Option value="all">All Drivers</Option>
              <Option value="D-10045">Zhang Ming (D-10045)</Option>
              <Option value="D-10078">Li Qiang (D-10078)</Option>
              <Option value="D-10023">Wang Wei (D-10023)</Option>
              <Option value="D-10089">Zhao Jing (D-10089)</Option>
              <Option value="D-10056">Liu Yang (D-10056)</Option>
            </Select>
          </Col>
          <Col xs={24} sm={8} md={6} lg={5}>
            <Text strong>Date Range:</Text>
            <RangePicker style={{ width: '100%', marginTop: '8px' }} />
          </Col>
          <Col xs={24} sm={8} md={6} lg={5}>
            <Text strong>Safety Score:</Text>
            <Select
              style={{ width: '100%', marginTop: '8px' }}
              placeholder="Safety Score Range"
              defaultValue="all"
            >
              <Option value="all">All</Option>
              <Option value="90-100">Excellent (90-100)</Option>
              <Option value="80-89">Good (80-89)</Option>
              <Option value="70-79">Fair (70-79)</Option>
              <Option value="0-69">Needs Improvement (0-69)</Option>
            </Select>
          </Col>
          <Col xs={24} sm={8} md={6} lg={4}>
            <Text strong>Training Status:</Text>
            <Select
              style={{ width: '100%', marginTop: '8px' }}
              placeholder="Training Status"
              defaultValue="all"
            >
              <Option value="all">All</Option>
              <Option value="completed">Completed</Option>
              <Option value="in-progress">In Progress</Option>
              <Option value="not-started">Not Started</Option>
            </Select>
          </Col>
          <Col xs={24} sm={8} md={6} lg={6}>
            <Input.Search
              placeholder="Search Driver Name or ID"
              prefix={<SearchOutlined />}
              style={{ marginTop: '30px' }}
            />
          </Col>
        </Row>
        <Row justify="end" style={{ marginTop: '16px' }}>
          <Space>
            <Button icon={<FilterOutlined />}>Reset Filter</Button>
            <Button type="primary" icon={<SearchOutlined />}>Search</Button>
            <Button icon={<DownloadOutlined />}>Export Data</Button>
          </Space>
        </Row>
      </Card>

      {/* Driver detailed information - only shown when a specific driver is selected */}
      {selectedDriver !== 'all' && (
        <Card style={{ marginBottom: '24px' }}>
          <Tabs defaultActiveKey="1" onChange={setActiveTab}>
            <TabPane 
              tab={
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <UserOutlined style={{ fontSize: '18px', marginRight: '16px' }} />
                  <span>Driver Overview</span>
                </span>
              } 
              key="1"
            >
              <Row gutter={[24, 24]}>
                <Col xs={24} md={6}>
                  <div style={{ textAlign: 'center', padding: '20px' }}>
                    <Avatar size={100} icon={<UserOutlined />} />
                    <Title level={4} style={{ marginTop: '16px', marginBottom: '4px' }}>Zhang Ming</Title>
                    <Text type="secondary">ID: D-10045</Text>
                    <div style={{ margin: '16px 0' }}>
                      <Tag color="green">Excellent Driver</Tag>
                      <Tag color="blue">5 Years of Experience</Tag>
                    </div>
                    <Button type="primary">View Full Profile</Button>
                  </div>
                </Col>
                <Col xs={24} md={18}>
                  <Row gutter={[24, 24]}>
                    <Col xs={24} sm={8}>
                      <Card bordered={false}>
                        <Statistic
                          title="Safety Score"
                          value={94}
                          suffix="/ 100"
                          valueStyle={{ color: '#34c759' }}
                        />
                        <Text type="success">
                          <ArrowUpOutlined style={{ marginRight: '8px' }} /> Increased by 2 points from last month
                        </Text>
                      </Card>
                    </Col>
                    <Col xs={24} sm={8}>
                      <Card bordered={false}>
                        <Statistic
                          title="Passenger Rating"
                          value={4.8}
                          suffix="/ 5"
                          valueStyle={{ color: '#5ac8fa' }}
                          prefix={<StarOutlined />}
                        />
                        <Text type="secondary">Based on 128 passenger reviews</Text>
                      </Card>
                    </Col>
                    <Col xs={24} sm={8}>
                      <Card bordered={false}>
                        <Statistic
                          title="Safety Events"
                          value={4}
                          valueStyle={{ color: '#ff9500' }}
                          prefix={<ExclamationCircleOutlined />}
                        />
                        <Text type="success">
                          <ArrowDownOutlined style={{ marginRight: '8px' }} /> Decreased by 3 events from last month
                        </Text>
                      </Card>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '24px' }}>
                    <Col span={24}>
                      <Card bordered={false} title="Driver Behavior Analysis">
                        <Radar {...driverBehaviorConfig} />
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </TabPane>
            <TabPane 
              tab={
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <SafetyOutlined style={{ fontSize: '18px', marginRight: '16px' }} />
                  <span>Safety Score Details</span>
                </span>
              } 
              key="2"
            >
              <Row gutter={[24, 24]}>
                <Col xs={24} md={8}>
                  <Card bordered={false} title="Safety Score">
                    <div style={{ textAlign: 'center' }}>
                      <Gauge {...safetyGaugeConfig} />
                    </div>
                    <Paragraph style={{ marginTop: '16px' }}>
                      <Text strong>Safety Score Explanation:</Text> This driver's safety score is excellent, 12 points higher than the industry average.
                    </Paragraph>
                  </Card>
                </Col>
                <Col xs={24} md={16}>
                  <Card bordered={false} title="Safety Score Trend">
                    <Line {...safetyTrendConfig} />
                  </Card>
                </Col>
                <Col xs={24}>
                  <Card bordered={false} title="Safety Events Details">
                    <Table 
                      columns={[
                        { title: 'Date', dataIndex: 'date', key: 'date' },
                        { title: 'Event Type', dataIndex: 'type', key: 'type' },
                        { title: 'Location', dataIndex: 'location', key: 'location' },
                        { title: 'Severity', dataIndex: 'severity', key: 'severity',
                          render: (severity) => {
                            let color = severity === 'Severe' ? '#ff3b30' : severity === 'Moderate' ? '#ff9500' : '#34c759';
                            return <Text strong style={{ color }}>{severity}</Text>;
                          },
                        },
                        { title: 'Details', key: 'action', render: () => <Button type="link" size="small">View</Button> },
                      ]} 
                      dataSource={[
                        { key: '1', date: '2025-03-10', type: 'Hard Braking', location: 'Zhongguancun South Street', severity: 'Moderate' },
                        { key: '2', date: '2025-03-05', type: 'Hard Turning', location: 'Xizhimen Outer Street', severity: 'Mild' },
                        { key: '3', date: '2025-02-28', type: 'Rapid Acceleration', location: 'Chaoyang Road', severity: 'Mild' },
                        { key: '4', date: '2025-02-15', type: 'Speeding', location: 'Jianguomen Outer Street', severity: 'Moderate' },
                      ]} 
                      pagination={false}
                    />
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane 
              tab={
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <MessageOutlined style={{ fontSize: '18px', marginRight: '16px' }} />
                  <span>Passenger Feedback</span>
                </span>
              } 
              key="3"
            >
              <Row gutter={[24, 24]}>
                <Col xs={24} md={8}>
                  <Card bordered={false}>
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                      <Title level={1} style={{ color: '#34c759' }}>4.8</Title>
                      <Rate disabled defaultValue={4.8} allowHalf />
                      <Title level={5}>Passenger Satisfaction Rating</Title>
                      <Text type="secondary">Based on 128 passenger reviews</Text>
                    </div>
                    <Row gutter={[8, 8]} style={{ marginTop: '20px' }}>
                      <Col span={8}>5-star: <Text strong>85%</Text></Col>
                      <Col span={16}><Progress percent={85} showInfo={false} strokeColor="#34c759" /></Col>
                      <Col span={8}>4-star: <Text strong>12%</Text></Col>
                      <Col span={16}><Progress percent={12} showInfo={false} strokeColor="#5ac8fa" /></Col>
                      <Col span={8}>3-star: <Text strong>3%</Text></Col>
                      <Col span={16}><Progress percent={3} showInfo={false} strokeColor="#ff9500" /></Col>
                      <Col span={8}>2-star: <Text strong>0%</Text></Col>
                      <Col span={16}><Progress percent={0} showInfo={false} strokeColor="#ff3b30" /></Col>
                      <Col span={8}>1-star: <Text strong>0%</Text></Col>
                      <Col span={16}><Progress percent={0} showInfo={false} strokeColor="#ff3b30" /></Col>
                    </Row>
                  </Card>
                </Col>
                <Col xs={24} md={16}>
                  <Card bordered={false} title="Recent Passenger Feedback">
                    <Table 
                      columns={passengerFeedbackColumns} 
                      dataSource={passengerFeedbackData} 
                      pagination={false}
                    />
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane 
              tab={
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <ReadOutlined style={{ fontSize: '18px', marginRight: '16px' }} />
                  <span>Training Records</span>
                </span>
              } 
              key="4"
            >
              <Row gutter={[24, 24]}>
                <Col xs={24}>
                  <Card bordered={false} title="Training Completion Status">
                    <Table 
                      columns={[
                        { title: 'Training Course', dataIndex: 'course', key: 'course' },
                        { title: 'Completion Date', dataIndex: 'completionDate', key: 'completionDate' },
                        { title: 'Score', dataIndex: 'score', key: 'score' },
                        { title: 'Status', dataIndex: 'status', key: 'status',
                          render: (status) => {
                            let color = status === 'Completed' ? 'success' : status === 'In Progress' ? 'processing' : 'warning';
                            return <Tag color={color}>{status}</Tag>;
                          },
                        },
                        { title: 'Certificate', key: 'certificate', render: (_, record) => record.status === 'Completed' ? <Button type="link" size="small">View Certificate</Button> : '-' },
                      ]} 
                      dataSource={[
                        { key: '1', course: 'Safe Driving Fundamentals', completionDate: '2025-01-15', score: 95, status: 'Completed' },
                        { key: '2', course: 'Emergency Situation Handling', completionDate: '2025-02-10', score: 92, status: 'Completed' },
                        { key: '3', course: 'Passenger Service and Communication', completionDate: '2025-03-05', score: 98, status: 'Completed' },
                        { key: '4', course: 'Advanced Safe Driving Techniques', completionDate: '-', score: '-', status: 'In Progress' },
                      ]} 
                      pagination={false}
                    />
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        </Card>
      )}

      {/* Driver list */}
      <Card title="Driver Safety Performance List">
        <Table 
          columns={driversColumns} 
          dataSource={driversData} 
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </div>
  );
};

export default DriverAnalytics;
