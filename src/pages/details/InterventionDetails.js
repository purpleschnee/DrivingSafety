import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Row, Col, Card, Typography, Button, Descriptions, Tag, Space, Steps, Timeline, List, Divider, Progress } from 'antd';
import { ArrowLeftOutlined, CheckCircleOutlined, ClockCircleOutlined, ExclamationCircleOutlined, UserOutlined, CarOutlined, FileTextOutlined, MessageOutlined, EnvironmentOutlined, AuditOutlined, WarningOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;
const { Step } = Steps;

const InterventionDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock intervention data - in a real app, you would fetch this based on the id parameter
  const interventionData = {
    id: id || 'I-2034',
    driverId: 'D-10056',
    driverName: 'Liu Yang',
    type: 'Safety Coaching',
    status: 'In Progress',
    priority: 'Medium',
    assignedTo: 'Wang Jun',
    createdDate: '2025-03-18',
    dueDate: '2025-03-25',
    completionDate: '-',
    reason: 'Multiple hard braking events in the past 30 days',
    description: 'Driver has exhibited a pattern of hard braking events, indicating potential issues with hazard perception and anticipatory driving. Safety coaching is recommended to address these behaviors.',
    relatedEvents: [
      { id: 'E-2045', type: 'Hard Braking', date: '2025-03-17', location: 'Zhongguancun South Street' },
      { id: 'E-2032', type: 'Hard Braking', date: '2025-03-10', location: 'Chaoyang Road' },
      { id: 'E-2018', type: 'Hard Braking', date: '2025-03-05', location: 'Jianguomen Outer Street' },
    ],
    interventionPlan: [
      { step: 'Initial Assessment', status: 'Completed', date: '2025-03-18' },
      { step: 'Driver Interview', status: 'Completed', date: '2025-03-20' },
      { step: 'Coaching Session', status: 'In Progress', date: '2025-03-22' },
      { step: 'Follow-up Assessment', status: 'Pending', date: '2025-03-24' },
      { step: 'Final Review', status: 'Pending', date: '2025-03-25' },
    ],
    notes: [
      { author: 'Wang Jun', date: '2025-03-18', content: 'Initial assessment completed. Driver acknowledges issues with braking technique.' },
      { author: 'Wang Jun', date: '2025-03-20', content: 'Interview conducted. Driver mentioned challenges with anticipating traffic flow in congested areas.' },
      { author: 'Wang Jun', date: '2025-03-22', content: 'First coaching session focused on anticipatory driving and hazard perception techniques.' },
    ],
  };

  // Calculate progress percentage
  const completedSteps = interventionData.interventionPlan.filter(step => step.status === 'Completed').length;
  const totalSteps = interventionData.interventionPlan.length;
  const progressPercentage = Math.round((completedSteps / totalSteps) * 100);

  return (
    <div className="intervention-details-container">
      <Button 
        type="link" 
        icon={<ArrowLeftOutlined />} 
        onClick={() => navigate(`/driver-details/${interventionData.driverId}`)}
        style={{ marginBottom: 16, padding: 0 }}
      >
        Back to Driver Details
      </Button>

      <Row gutter={[24, 24]}>
        <Col xs={24}>
          <Card>
            <Row gutter={[24, 24]} align="middle">
              <Col xs={24} md={18}>
                <Title level={4}>Intervention {interventionData.id}: {interventionData.type}</Title>
                <Space size="large">
                  <Text><UserOutlined /> Driver: {interventionData.driverName} ({interventionData.driverId})</Text>
                  <Text><ClockCircleOutlined /> Created: {interventionData.createdDate}</Text>
                  <Text><ClockCircleOutlined /> Due: {interventionData.dueDate}</Text>
                </Space>
                <div style={{ marginTop: 8 }}>
                  <Space size="large">
                    <Text>
                      Status: 
                      <Tag 
                        color={interventionData.status === 'Completed' ? 'success' : interventionData.status === 'In Progress' ? 'processing' : 'warning'}
                        style={{ marginLeft: 8 }}
                      >
                        {interventionData.status}
                      </Tag>
                    </Text>
                    <Text>
                      Priority: 
                      <Tag 
                        color={interventionData.priority === 'High' ? '#ff3b30' : interventionData.priority === 'Medium' ? '#ff9500' : '#34c759'}
                        style={{ marginLeft: 8 }}
                      >
                        {interventionData.priority}
                      </Tag>
                    </Text>
                    <Text>Assigned to: {interventionData.assignedTo}</Text>
                  </Space>
                </div>
              </Col>
              <Col xs={24} md={6} style={{ textAlign: 'right' }}>
                <Space>
                  <Button type="primary" icon={<CheckCircleOutlined />}>Complete Intervention</Button>
                  <Button icon={<WarningOutlined />}>Escalate</Button>
                </Space>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col xs={24} md={16}>
          <Card title="Intervention Details">
            <Descriptions bordered column={{ xxl: 3, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}>
              <Descriptions.Item label="Intervention ID" span={1}>{interventionData.id}</Descriptions.Item>
              <Descriptions.Item label="Type" span={2}>{interventionData.type}</Descriptions.Item>
              <Descriptions.Item label="Driver" span={1}>{interventionData.driverName}</Descriptions.Item>
              <Descriptions.Item label="Driver ID" span={2}>{interventionData.driverId}</Descriptions.Item>
              <Descriptions.Item label="Status" span={1}>
                <Tag 
                  color={interventionData.status === 'Completed' ? 'success' : interventionData.status === 'In Progress' ? 'processing' : 'warning'}
                >
                  {interventionData.status}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Priority" span={2}>
                <Tag 
                  color={interventionData.priority === 'High' ? '#ff3b30' : interventionData.priority === 'Medium' ? '#ff9500' : '#34c759'}
                >
                  {interventionData.priority}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Assigned To" span={3}>{interventionData.assignedTo}</Descriptions.Item>
              <Descriptions.Item label="Created Date" span={1}>{interventionData.createdDate}</Descriptions.Item>
              <Descriptions.Item label="Due Date" span={1}>{interventionData.dueDate}</Descriptions.Item>
              <Descriptions.Item label="Completion Date" span={1}>{interventionData.completionDate}</Descriptions.Item>
              <Descriptions.Item label="Reason" span={3}>{interventionData.reason}</Descriptions.Item>
              <Descriptions.Item label="Description" span={3}>{interventionData.description}</Descriptions.Item>
            </Descriptions>
          </Card>

          <Card title="Related Safety Events" style={{ marginTop: 24 }}>
            <List
              itemLayout="horizontal"
              dataSource={interventionData.relatedEvents}
              renderItem={item => (
                <List.Item
                  actions={[
                    <Button 
                      type="link" 
                      size="small"
                      onClick={() => navigate(`/safety-event/${item.id}`)}
                    >
                      View Details
                    </Button>
                  ]}
                >
                  <List.Item.Meta
                    avatar={<ExclamationCircleOutlined style={{ fontSize: 24, color: '#ff9500' }} />}
                    title={
                      <Space>
                        <Text strong>Event {item.id}: {item.type}</Text>
                        <Tag color="#ff9500">{item.type}</Tag>
                      </Space>
                    }
                    description={
                      <Space>
                        <Text><ClockCircleOutlined /> {item.date}</Text>
                        <Text><EnvironmentOutlined /> {item.location}</Text>
                      </Space>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>

          <Card title="Intervention Notes" style={{ marginTop: 24 }}>
            <Timeline>
              {interventionData.notes.map((note, index) => (
                <Timeline.Item key={index}>
                  <div>
                    <Text strong>{note.date}</Text> - <Text>{note.author}</Text>
                  </div>
                  <div style={{ marginTop: 8 }}>
                    <Paragraph>{note.content}</Paragraph>
                  </div>
                </Timeline.Item>
              ))}
            </Timeline>
            <Divider />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text strong>Add a new note</Text>
              <Button type="primary" icon={<MessageOutlined />}>Add Note</Button>
            </div>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card title="Intervention Progress">
            <div style={{ textAlign: 'center', marginBottom: 24 }}>
              <Progress type="circle" percent={progressPercentage} />
              <div style={{ marginTop: 16 }}>
                <Text strong>Overall Progress: {progressPercentage}%</Text>
              </div>
            </div>

            <Steps direction="vertical" current={2}>
              {interventionData.interventionPlan.map((step, index) => {
                let status = step.status === 'Completed' ? 'finish' : 
                             step.status === 'In Progress' ? 'process' : 'wait';
                let icon = step.status === 'Completed' ? <CheckCircleOutlined /> : 
                           step.status === 'In Progress' ? <ClockCircleOutlined /> : 
                           <ExclamationCircleOutlined />;
                
                return (
                  <Step 
                    key={index} 
                    title={step.step} 
                    description={`Status: ${step.status} | Date: ${step.date}`}
                    status={status}
                    icon={icon}
                  />
                );
              })}
            </Steps>
          </Card>

          <Card title="Available Resources" style={{ marginTop: 24 }}>
            <List
              itemLayout="horizontal"
              dataSource={[
                { title: 'Anticipatory Driving Guide', type: 'Document', icon: <FileTextOutlined /> },
                { title: 'Hazard Perception Training Video', type: 'Video', icon: <FileTextOutlined /> },
                { title: 'Braking Technique Assessment Form', type: 'Form', icon: <AuditOutlined /> },
                { title: 'Driver Coaching Checklist', type: 'Checklist', icon: <CheckCircleOutlined /> },
              ]}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <Button type="link" size="small">View</Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={item.icon}
                    title={item.title}
                    description={<Tag color="blue">{item.type}</Tag>}
                  />
                </List.Item>
              )}
            />
          </Card>

          <Card title="Next Steps" style={{ marginTop: 24 }}>
            <List
              itemLayout="horizontal"
              dataSource={[
                { title: 'Complete Coaching Session', dueDate: '2025-03-22', priority: 'High' },
                { title: 'Schedule Follow-up Assessment', dueDate: '2025-03-24', priority: 'Medium' },
                { title: 'Prepare Final Review', dueDate: '2025-03-25', priority: 'Medium' },
              ]}
              renderItem={(item) => (
                <List.Item
                  actions={[
                    <Button type="link" size="small">Complete</Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={<ClockCircleOutlined style={{ fontSize: 24, color: '#0071e3' }} />}
                    title={item.title}
                    description={
                      <Space>
                        <Text>Due: {item.dueDate}</Text>
                        <Tag 
                          color={item.priority === 'High' ? '#ff3b30' : item.priority === 'Medium' ? '#ff9500' : '#34c759'}
                        >
                          {item.priority}
                        </Tag>
                      </Space>
                    }
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

export default InterventionDetails;
