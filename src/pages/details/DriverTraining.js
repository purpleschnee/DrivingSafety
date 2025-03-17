import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Row, Col, Card, Typography, Button, Steps, Table, Tag, Progress, Statistic, Space, Timeline, List } from 'antd';
import { ArrowLeftOutlined, CheckCircleOutlined, ClockCircleOutlined, ExclamationCircleOutlined, TrophyOutlined, BookOutlined, VideoCameraOutlined, FileTextOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;
const { Step } = Steps;

const DriverTraining = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock driver data - in a real app, you would fetch this based on the id parameter
  const driverData = {
    id: id,
    name: 'Zhang Ming',
    trainingStatus: 'In Progress',
    completedCourses: 3,
    totalCourses: 4,
    averageScore: 95,
  };

  // Training records data
  const trainingRecordsData = [
    { 
      key: '1', 
      course: 'Safe Driving Fundamentals', 
      type: 'Core', 
      completionDate: '2025-01-15', 
      score: 95, 
      status: 'Completed',
      instructor: 'Li Wei',
      duration: '4 hours',
      description: 'This course covers the fundamentals of safe driving, including defensive driving techniques, hazard perception, and risk management.',
    },
    { 
      key: '2', 
      course: 'Emergency Situation Handling', 
      type: 'Core', 
      completionDate: '2025-02-10', 
      score: 92, 
      status: 'Completed',
      instructor: 'Wang Jun',
      duration: '6 hours',
      description: 'This course teaches drivers how to handle emergency situations, including accident avoidance, vehicle control in adverse conditions, and emergency response procedures.',
    },
    { 
      key: '3', 
      course: 'Passenger Service and Communication', 
      type: 'Supplementary', 
      completionDate: '2025-03-05', 
      score: 98, 
      status: 'Completed',
      instructor: 'Chen Xiao',
      duration: '3 hours',
      description: 'This course focuses on passenger service excellence, effective communication, and handling difficult situations with passengers.',
    },
    { 
      key: '4', 
      course: 'Advanced Safe Driving Techniques', 
      type: 'Advanced', 
      completionDate: '-', 
      score: '-', 
      status: 'In Progress',
      instructor: 'Zhang Lei',
      duration: '8 hours',
      description: 'This advanced course covers sophisticated driving techniques, including anticipatory driving, eco-driving, and advanced hazard perception.',
    },
  ];

  // Training records columns
  const trainingRecordsColumns = [
    { title: 'Training Course', dataIndex: 'course', key: 'course' },
    { 
      title: 'Type', 
      dataIndex: 'type', 
      key: 'type',
      render: (type) => {
        let color = type === 'Core' ? 'blue' : type === 'Advanced' ? 'purple' : 'cyan';
        return <Tag color={color}>{type}</Tag>;
      },
    },
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
      title: 'Actions', 
      key: 'actions', 
      render: (_, record) => (
        <Space>
          <Button 
            type="link" 
            size="small" 
            onClick={() => console.log('View details for', record.course)}
          >
            Details
          </Button>
          {record.status === 'Completed' && (
            <Button 
              type="link" 
              size="small" 
              onClick={() => navigate(`/training-certificate/${record.key}`)}
            >
              Certificate
            </Button>
          )}
        </Space>
      ) 
    },
  ];

  // Current training modules data
  const currentTrainingData = {
    course: 'Advanced Safe Driving Techniques',
    progress: 65,
    instructor: 'Zhang Lei',
    startDate: '2025-03-10',
    endDate: '2025-03-25',
    modules: [
      { name: 'Module 1: Advanced Hazard Perception', status: 'Completed', duration: '2 hours' },
      { name: 'Module 2: Anticipatory Driving', status: 'Completed', duration: '2 hours' },
      { name: 'Module 3: Eco-Driving Techniques', status: 'In Progress', duration: '2 hours' },
      { name: 'Module 4: Advanced Vehicle Control', status: 'Not Started', duration: '2 hours' },
    ],
  };

  // Upcoming training data
  const upcomingTrainingData = [
    { title: 'Fatigue Management', date: '2025-04-10', duration: '3 hours', type: 'Supplementary' },
    { title: 'Vehicle Technology and Safety Systems', date: '2025-05-15', duration: '4 hours', type: 'Technical' },
    { title: 'Defensive Driving Refresher', date: '2025-06-20', duration: '4 hours', type: 'Refresher' },
  ];

  return (
    <div className="driver-training-container">
      <Button 
        type="link" 
        icon={<ArrowLeftOutlined />} 
        onClick={() => navigate(`/driver-details/${id}`)}
        style={{ marginBottom: 16, padding: 0 }}
      >
        Back to Driver Details
      </Button>

      <Title level={3}>Training Records: {driverData.name}</Title>
      <Text type="secondary" style={{ marginBottom: 24, display: 'block' }}>
        View and manage training records and progress for this driver
      </Text>

      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Training Status"
              value={driverData.trainingStatus}
              valueStyle={{ color: '#5ac8fa' }}
              prefix={<ClockCircleOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Completed Courses"
              value={`${driverData.completedCourses}/${driverData.totalCourses}`}
              valueStyle={{ color: '#34c759' }}
              prefix={<CheckCircleOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Completion Rate"
              value={Math.round((driverData.completedCourses / driverData.totalCourses) * 100)}
              suffix="%"
              valueStyle={{ color: '#0071e3' }}
              prefix={<TrophyOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Average Score"
              value={driverData.averageScore}
              suffix="/ 100"
              valueStyle={{ color: '#ff9500' }}
              prefix={<BookOutlined />}
            />
          </Card>
        </Col>
      </Row>

      <Card title="Training History" style={{ marginTop: 24 }}>
        <Table 
          columns={trainingRecordsColumns} 
          dataSource={trainingRecordsData} 
          pagination={false}
          expandable={{
            expandedRowRender: (record) => (
              <div style={{ padding: '0 48px' }}>
                <Paragraph><strong>Instructor:</strong> {record.instructor}</Paragraph>
                <Paragraph><strong>Duration:</strong> {record.duration}</Paragraph>
                <Paragraph><strong>Description:</strong> {record.description}</Paragraph>
              </div>
            ),
          }}
        />
      </Card>

      <Card title="Current Training Progress" style={{ marginTop: 24 }}>
        <Row gutter={[24, 24]}>
          <Col xs={24} md={8}>
            <div style={{ textAlign: 'center', marginBottom: 16 }}>
              <Progress type="circle" percent={currentTrainingData.progress} width={120} />
              <Title level={4} style={{ marginTop: 16 }}>{currentTrainingData.course}</Title>
              <Text>Instructor: {currentTrainingData.instructor}</Text>
              <br />
              <Text type="secondary">{currentTrainingData.startDate} to {currentTrainingData.endDate}</Text>
            </div>
          </Col>
          <Col xs={24} md={16}>
            <Steps direction="vertical" current={2}>
              {currentTrainingData.modules.map((module, index) => {
                let status = module.status === 'Completed' ? 'finish' : 
                             module.status === 'In Progress' ? 'process' : 'wait';
                let icon = module.status === 'Completed' ? <CheckCircleOutlined /> : 
                           module.status === 'In Progress' ? <ClockCircleOutlined /> : 
                           <ExclamationCircleOutlined />;
                
                return (
                  <Step 
                    key={index} 
                    title={module.name} 
                    description={`Duration: ${module.duration} | Status: ${module.status}`}
                    status={status}
                    icon={icon}
                  />
                );
              })}
            </Steps>
            <div style={{ marginTop: 24, textAlign: 'right' }}>
              <Space>
                <Button>Resume Training</Button>
                <Button type="primary">Take Assessment</Button>
              </Space>
            </div>
          </Col>
        </Row>
      </Card>

      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col xs={24} md={12}>
          <Card title="Upcoming Training">
            <List
              itemLayout="horizontal"
              dataSource={upcomingTrainingData}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <Button type="link" size="small">Details</Button>,
                    <Button type="link" size="small">Reschedule</Button>
                  ]}
                >
                  <List.Item.Meta
                    avatar={<BookOutlined style={{ fontSize: 24, color: '#0071e3' }} />}
                    title={item.title}
                    description={
                      <>
                        <Tag color="blue">{item.type}</Tag>
                        <Text style={{ marginLeft: 8 }}>{item.date} | {item.duration}</Text>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Training Resources">
            <List
              itemLayout="horizontal"
              dataSource={[
                { title: 'Safe Driving Handbook', type: 'Document', icon: <FileTextOutlined /> },
                { title: 'Defensive Driving Techniques Video', type: 'Video', icon: <VideoCameraOutlined /> },
                { title: 'Emergency Response Procedures', type: 'Document', icon: <FileTextOutlined /> },
                { title: 'Vehicle Safety Systems Tutorial', type: 'Video', icon: <VideoCameraOutlined /> },
              ]}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <Button type="link" size="small">View</Button>,
                    <Button type="link" size="small">Download</Button>
                  ]}
                >
                  <List.Item.Meta
                    avatar={item.icon}
                    title={item.title}
                    description={<Tag color={item.type === 'Document' ? 'green' : 'volcano'}>{item.type}</Tag>}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DriverTraining;
