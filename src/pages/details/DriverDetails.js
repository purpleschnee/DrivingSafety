import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Row, Col, Card, Typography, Button, Statistic, Tag, Tabs, Table, Avatar, Rate, Progress, Space } from 'antd';
import { ArrowLeftOutlined, UserOutlined, CarOutlined, SafetyOutlined, StarOutlined, CheckCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Line, Radar } from '@ant-design/charts';

const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;

const DriverDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock driver data - in a real app, you would fetch this based on the id parameter
  const driverData = {
    id: id,
    name: 'Zhang Ming',
    safetyScore: 94,
    passengerRating: 4.8,
    totalTrips: 1254,
    experience: '5 years',
    status: 'Active',
    incidents: 4,
    trainingStatus: 'Completed',
    phone: '+86 138-7890-1234',
    email: 'zhang.ming@example.com',
    address: 'Chaoyang District, Beijing',
    licenseNumber: 'BJ2020371829',
    licenseExpiry: '2027-05-15',
  };

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

  // Safety score trend data
  const safetyTrendData = [
    { month: '2025-01', score: 88 },
    { month: '2025-02', score: 90 },
    { month: '2025-03', score: 89 },
    { month: '2025-04', score: 92 },
    { month: '2025-05', score: 94 },
    { month: '2025-06', score: 94 },
  ];

  // Safety score trend configuration
  const safetyTrendConfig = {
    data: safetyTrendData,
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

  // Safety events data
  const safetyEventsData = [
    { key: '1', date: '2025-03-10', type: 'Hard Braking', location: 'Zhongguancun South Street', severity: 'Moderate' },
    { key: '2', date: '2025-03-05', type: 'Hard Turning', location: 'Xizhimen Outer Street', severity: 'Mild' },
    { key: '3', date: '2025-02-28', type: 'Rapid Acceleration', location: 'Chaoyang Road', severity: 'Mild' },
    { key: '4', date: '2025-02-15', type: 'Speeding', location: 'Jianguomen Outer Street', severity: 'Moderate' },
  ];

  // Safety events columns
  const safetyEventsColumns = [
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Event Type', dataIndex: 'type', key: 'type' },
    { title: 'Location', dataIndex: 'location', key: 'location' },
    { 
      title: 'Severity', 
      dataIndex: 'severity', 
      key: 'severity',
      render: (severity) => {
        let color = severity === 'Severe' ? '#ff3b30' : severity === 'Moderate' ? '#ff9500' : '#34c759';
        return <Text strong style={{ color }}>{severity}</Text>;
      },
    },
    { 
      title: 'Details', 
      key: 'action', 
      render: (_, record) => (
        <Button 
          type="link" 
          size="small" 
          onClick={() => navigate(`/safety-event/${record.key}`)}
        >
          View
        </Button>
      ) 
    },
  ];

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

  // Training records data
  const trainingRecordsData = [
    { key: '1', course: 'Safe Driving Fundamentals', completionDate: '2025-01-15', score: 95, status: 'Completed' },
    { key: '2', course: 'Emergency Situation Handling', completionDate: '2025-02-10', score: 92, status: 'Completed' },
    { key: '3', course: 'Passenger Service and Communication', completionDate: '2025-03-05', score: 98, status: 'Completed' },
    { key: '4', course: 'Advanced Safe Driving Techniques', completionDate: '-', score: '-', status: 'In Progress' },
  ];

  // Training records columns
  const trainingRecordsColumns = [
    { title: 'Training Course', dataIndex: 'course', key: 'course' },
    { title: 'Completion Date', dataIndex: 'completionDate', key: 'completionDate' },
    { title: 'Score', dataIndex: 'score', key: 'score' },
    { 
      title: 'Status', 
      dataIndex: 'status', 
      key: 'status',
      render: (status) => {
        let color = status === 'Completed' ? 'success' : status === 'In Progress' ? 'processing' : 'warning';
        return <Tag color={color}>{status}</Tag>;
      },
    },
    { 
      title: 'Certificate', 
      key: 'certificate', 
      render: (_, record) => (
        record.status === 'Completed' ? 
          <Button 
            type="link" 
            size="small" 
            onClick={() => navigate(`/training-certificate/${record.key}`)}
          >
            View Certificate
          </Button> : '-'
      ) 
    },
  ];

  return (
    <div className="driver-details-container">
      <Button 
        type="link" 
        icon={<ArrowLeftOutlined />} 
        onClick={() => navigate('/driver-analytics')}
        style={{ marginBottom: 16, padding: 0 }}
      >
        Back to Driver Analytics
      </Button>

      <Card>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={6}>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <Avatar size={100} icon={<UserOutlined />} />
              <Title level={4} style={{ marginTop: '16px', marginBottom: '4px' }}>{driverData.name}</Title>
              <Text type="secondary">ID: {driverData.id}</Text>
              <div style={{ margin: '16px 0' }}>
                <Tag color="green">Excellent Driver</Tag>
                <Tag color="blue">{driverData.experience} of Experience</Tag>
              </div>
            </div>
          </Col>
          <Col xs={24} md={18}>
            <Row gutter={[24, 24]}>
              <Col xs={24} sm={8}>
                <Card bordered={false}>
                  <Statistic
                    title="Safety Score"
                    value={driverData.safetyScore}
                    suffix="/ 100"
                    valueStyle={{ color: '#34c759' }}
                    prefix={<SafetyOutlined />}
                  />
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card bordered={false}>
                  <Statistic
                    title="Passenger Rating"
                    value={driverData.passengerRating}
                    suffix="/ 5"
                    valueStyle={{ color: '#5ac8fa' }}
                    prefix={<StarOutlined />}
                  />
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card bordered={false}>
                  <Statistic
                    title="Total Trips"
                    value={driverData.totalTrips}
                    valueStyle={{ color: '#0071e3' }}
                    prefix={<CarOutlined />}
                  />
                </Card>
              </Col>
            </Row>

            <Row gutter={[24, 24]} style={{ marginTop: 16 }}>
              <Col xs={24} sm={8}>
                <Card bordered={false}>
                  <Statistic
                    title="Safety Incidents"
                    value={driverData.incidents}
                    valueStyle={{ color: '#ff9500' }}
                    prefix={<ExclamationCircleOutlined />}
                  />
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card bordered={false}>
                  <Statistic
                    title="Training Status"
                    value={driverData.trainingStatus}
                    valueStyle={{ color: '#34c759' }}
                    prefix={<CheckCircleOutlined />}
                  />
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card bordered={false}>
                  <Statistic
                    title="Status"
                    value={driverData.status}
                    valueStyle={{ color: '#34c759' }}
                  />
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>

      <Card style={{ marginTop: 24 }}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Driver Profile" key="1">
            <Row gutter={[24, 24]}>
              <Col xs={24} md={12}>
                <Card title="Personal Information" bordered={false}>
                  <p><strong>Full Name:</strong> {driverData.name}</p>
                  <p><strong>Phone:</strong> {driverData.phone}</p>
                  <p><strong>Email:</strong> {driverData.email}</p>
                  <p><strong>Address:</strong> {driverData.address}</p>
                </Card>
              </Col>
              <Col xs={24} md={12}>
                <Card title="License Information" bordered={false}>
                  <p><strong>License Number:</strong> {driverData.licenseNumber}</p>
                  <p><strong>Expiry Date:</strong> {driverData.licenseExpiry}</p>
                  <p><strong>Experience:</strong> {driverData.experience}</p>
                  <p><strong>Status:</strong> {driverData.status}</p>
                </Card>
              </Col>
              <Col xs={24}>
                <Card title="Driver Behavior Analysis" bordered={false}>
                  <Radar {...driverBehaviorConfig} />
                </Card>
              </Col>
            </Row>
          </TabPane>

          <TabPane tab="Safety Performance" key="2">
            <Row gutter={[24, 24]}>
              <Col xs={24}>
                <Card title="Safety Score Trend" bordered={false}>
                  <Line {...safetyTrendConfig} />
                </Card>
              </Col>
              <Col xs={24}>
                <Card title="Safety Events" bordered={false}>
                  <Table 
                    columns={safetyEventsColumns} 
                    dataSource={safetyEventsData} 
                    pagination={false}
                  />
                </Card>
              </Col>
            </Row>
          </TabPane>

          <TabPane tab="Passenger Feedback" key="3">
            <Row gutter={[24, 24]}>
              <Col xs={24} md={8}>
                <Card bordered={false}>
                  <div style={{ textAlign: 'center', padding: '20px' }}>
                    <Title level={1} style={{ color: '#34c759' }}>{driverData.passengerRating}</Title>
                    <Rate disabled defaultValue={driverData.passengerRating} allowHalf />
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
                <Card title="Recent Passenger Feedback" bordered={false}>
                  <Table 
                    columns={passengerFeedbackColumns} 
                    dataSource={passengerFeedbackData} 
                    pagination={false}
                  />
                </Card>
              </Col>
            </Row>
          </TabPane>

          <TabPane tab="Training Records" key="4">
            <Row gutter={[24, 24]}>
              <Col xs={24}>
                <Card title="Training Completion Status" bordered={false}>
                  <Table 
                    columns={trainingRecordsColumns} 
                    dataSource={trainingRecordsData} 
                    pagination={false}
                  />
                </Card>
              </Col>
              <Col xs={24}>
                <Space style={{ marginTop: 16 }}>
                  <Button 
                    type="primary" 
                    onClick={() => navigate(`/driver-training/${id}`)}
                  >
                    View All Training Details
                  </Button>
                  <Button>Assign New Training</Button>
                </Space>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default DriverDetails;
