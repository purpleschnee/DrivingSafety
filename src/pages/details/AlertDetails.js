import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Row, Col, Card, Typography, Button, Descriptions, Tag, Timeline, Space, Divider, Statistic, Steps, Alert } from 'antd';
import { ArrowLeftOutlined, CarOutlined, EnvironmentOutlined, ClockCircleOutlined, ExclamationCircleOutlined, CheckCircleOutlined, UserOutlined, InfoCircleOutlined, WarningOutlined } from '@ant-design/icons';
import { Line } from '@ant-design/charts';

const { Title, Text, Paragraph } = Typography;
const { Step } = Steps;

const AlertDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock alert data - in a real app, you would fetch this based on the id parameter
  const alertData = {
    id: id || 'A-1023',
    driver: 'D-10056',
    driverName: 'Liu Yang',
    event: 'Hard Braking',
    location: 'Zhongguancun South Street',
    coordinates: '39.9847° N, 116.3046° E',
    time: '2025-03-17 02:45:23',
    severity: 'Medium',
    status: 'Processing',
    vehicle: 'V-2045',
    vehicleModel: 'Toyota Camry',
    speed: '65 km/h',
    speedLimit: '50 km/h',
    deceleration: '8.2 m/s²',
    description: 'Vehicle detected hard braking event exceeding threshold. Driver applied brakes suddenly to avoid a pedestrian crossing the road.',
    weatherCondition: 'Clear',
    roadCondition: 'Dry',
    trafficCondition: 'Moderate',
    driverFatigue: 'Low',
  };

  // Alert processing steps
  const processingSteps = [
    {
      title: 'Alert Generated',
      description: 'System detected hard braking event',
      time: '2025-03-17 02:45:23',
      status: 'finish',
    },
    {
      title: 'Initial Assessment',
      description: 'Severity classified as Medium',
      time: '2025-03-17 02:45:25',
      status: 'finish',
    },
    {
      title: 'Alert Processing',
      description: 'Safety officer reviewing the alert',
      time: '2025-03-17 02:50:10',
      status: 'process',
    },
    {
      title: 'Driver Contact',
      description: 'Contact driver for explanation',
      time: 'Pending',
      status: 'wait',
    },
    {
      title: 'Resolution',
      description: 'Final decision and action',
      time: 'Pending',
      status: 'wait',
    },
  ];

  // Driver recent alerts data
  const driverRecentAlertsData = [
    { date: '2025-03-15', count: 1 },
    { date: '2025-03-14', count: 0 },
    { date: '2025-03-13', count: 2 },
    { date: '2025-03-12', count: 0 },
    { date: '2025-03-11', count: 1 },
    { date: '2025-03-10', count: 0 },
    { date: '2025-03-09', count: 0 },
    { date: '2025-03-08', count: 1 },
    { date: '2025-03-07', count: 0 },
    { date: '2025-03-06', count: 0 },
    { date: '2025-03-05', count: 2 },
    { date: '2025-03-04', count: 1 },
    { date: '2025-03-03', count: 0 },
    { date: '2025-03-02', count: 0 },
  ];

  // Driver recent alerts chart configuration
  const driverAlertsConfig = {
    data: driverRecentAlertsData,
    xField: 'date',
    yField: 'count',
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
      stroke: '#ff9500',
      lineWidth: 3,
    },
  };

  // Similar alerts data
  const similarAlertsData = [
    { 
      time: '2025-03-15 14:23:45', 
      driver: 'Wang Wei (D-10023)', 
      location: 'Chaoyang Road', 
      severity: 'Medium',
      status: 'Resolved',
    },
    { 
      time: '2025-03-10 08:12:30', 
      driver: 'Li Qiang (D-10078)', 
      location: 'Jianguomen Outer Street', 
      severity: 'High',
      status: 'Resolved',
    },
    { 
      time: '2025-03-05 18:45:12', 
      driver: 'Chen Xiao (D-10112)', 
      location: 'Xidan North Street', 
      severity: 'Low',
      status: 'Resolved',
    },
  ];

  return (
    <div className="alert-details-container">
      <Button 
        type="link" 
        icon={<ArrowLeftOutlined />} 
        onClick={() => navigate('/')}
        style={{ marginBottom: 16, padding: 0 }}
      >
        Back to Dashboard
      </Button>

      <Row gutter={[24, 24]}>
        <Col xs={24}>
          <Card>
            <Row gutter={[24, 24]} align="middle">
              <Col xs={24} md={18}>
                <Title level={3}>Alert {alertData.id}: {alertData.event}</Title>
                <Space size="large">
                  <Text><UserOutlined /> Driver: {alertData.driverName} ({alertData.driver})</Text>
                  <Text><CarOutlined /> Vehicle: {alertData.vehicleModel} ({alertData.vehicle})</Text>
                  <Text><ClockCircleOutlined /> Time: {alertData.time}</Text>
                </Space>
                <div style={{ marginTop: 8 }}>
                  <Space size="large">
                    <Text><EnvironmentOutlined /> Location: {alertData.location}</Text>
                    <Text>
                      Severity: 
                      <Tag 
                        color={alertData.severity === 'High' ? '#ff3b30' : alertData.severity === 'Medium' ? '#ff9500' : '#34c759'}
                        style={{ marginLeft: 8 }}
                      >
                        {alertData.severity}
                      </Tag>
                    </Text>
                    <Text>
                      Status: 
                      <Tag 
                        color={alertData.status === 'Resolved' ? 'green' : alertData.status === 'Processing' ? 'blue' : 'orange'}
                        style={{ marginLeft: 8 }}
                      >
                        {alertData.status}
                      </Tag>
                    </Text>
                  </Space>
                </div>
              </Col>
              <Col xs={24} md={6} style={{ textAlign: 'right' }}>
                <Space>
                  <Button type="primary" icon={<CheckCircleOutlined />}>Resolve Alert</Button>
                  <Button icon={<WarningOutlined />}>Escalate</Button>
                </Space>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col xs={24} md={16}>
          <Card title="Alert Details">
            <Descriptions bordered column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
              <Descriptions.Item label="Event Type" span={2}>{alertData.event}</Descriptions.Item>
              <Descriptions.Item label="Severity" span={1}>
                <Tag 
                  color={alertData.severity === 'High' ? '#ff3b30' : alertData.severity === 'Medium' ? '#ff9500' : '#34c759'}
                >
                  {alertData.severity}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Status" span={1}>
                <Tag 
                  color={alertData.status === 'Resolved' ? 'green' : alertData.status === 'Processing' ? 'blue' : 'orange'}
                >
                  {alertData.status}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Driver" span={2}>{alertData.driverName} ({alertData.driver})</Descriptions.Item>
              <Descriptions.Item label="Vehicle" span={2}>{alertData.vehicleModel} ({alertData.vehicle})</Descriptions.Item>
              <Descriptions.Item label="Location" span={2}>{alertData.location}</Descriptions.Item>
              <Descriptions.Item label="Coordinates" span={2}>{alertData.coordinates}</Descriptions.Item>
              <Descriptions.Item label="Time" span={2}>{alertData.time}</Descriptions.Item>
              <Descriptions.Item label="Speed" span={2}>{alertData.speed} (Limit: {alertData.speedLimit})</Descriptions.Item>
              <Descriptions.Item label="Deceleration" span={2}>{alertData.deceleration}</Descriptions.Item>
              <Descriptions.Item label="Weather Condition" span={2}>{alertData.weatherCondition}</Descriptions.Item>
              <Descriptions.Item label="Road Condition" span={2}>{alertData.roadCondition}</Descriptions.Item>
              <Descriptions.Item label="Traffic Condition" span={2}>{alertData.trafficCondition}</Descriptions.Item>
              <Descriptions.Item label="Driver Fatigue Level" span={2}>{alertData.driverFatigue}</Descriptions.Item>
              <Descriptions.Item label="Description" span={4}>{alertData.description}</Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="Alert Processing Status">
            <Steps direction="vertical" current={2}>
              {processingSteps.map((step, index) => (
                <Step 
                  key={index} 
                  title={step.title} 
                  description={
                    <div>
                      <div>{step.description}</div>
                      <div style={{ fontSize: '12px', color: '#999' }}>{step.time}</div>
                    </div>
                  }
                  status={step.status}
                />
              ))}
            </Steps>
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col xs={24} md={12}>
          <Card title="Driver Recent Alerts">
            <Line {...driverAlertsConfig} />
            <Divider />
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <Statistic 
                  title="Last 7 Days" 
                  value={4} 
                  valueStyle={{ color: '#ff9500' }}
                />
              </Col>
              <Col span={8}>
                <Statistic 
                  title="Last 30 Days" 
                  value={12} 
                  valueStyle={{ color: '#ff3b30' }}
                />
              </Col>
              <Col span={8}>
                <Statistic 
                  title="Trend" 
                  value="+15%" 
                  valueStyle={{ color: '#ff3b30' }}
                />
              </Col>
            </Row>
            <Divider />
            <Alert
              message="Driver Risk Assessment"
              description="This driver has shown an increasing trend in safety alerts. Consider scheduling additional training."
              type="warning"
              showIcon
              icon={<InfoCircleOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Similar Recent Alerts">
            <Timeline>
              {similarAlertsData.map((alert, index) => (
                <Timeline.Item 
                  key={index} 
                  color={alert.severity === 'High' ? 'red' : alert.severity === 'Medium' ? 'orange' : 'green'}
                >
                  <div>
                    <Text strong>{alert.time}</Text>
                    <Tag 
                      color={alert.severity === 'High' ? '#ff3b30' : alert.severity === 'Medium' ? '#ff9500' : '#34c759'}
                      style={{ marginLeft: 8 }}
                    >
                      {alert.severity}
                    </Tag>
                    <Tag 
                      color={alert.status === 'Resolved' ? 'green' : alert.status === 'Processing' ? 'blue' : 'orange'}
                      style={{ marginLeft: 8 }}
                    >
                      {alert.status}
                    </Tag>
                  </div>
                  <div style={{ marginTop: 4 }}>
                    <Text>Driver: {alert.driver}</Text>
                  </div>
                  <div>
                    <Text>Location: {alert.location}</Text>
                  </div>
                  <div style={{ marginTop: 8 }}>
                    <Button type="link" size="small" onClick={() => console.log('View details for', alert.time)}>View Details</Button>
                  </div>
                </Timeline.Item>
              ))}
            </Timeline>
            <div style={{ textAlign: 'center', marginTop: 16 }}>
              <Button type="link">View All Similar Alerts</Button>
            </div>
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col xs={24}>
          <Card title="Recommended Actions">
            <Row gutter={[16, 16]}>
              <Col xs={24} md={8}>
                <Card bordered={false} className="inner-card">
                  <Title level={4}>Contact Driver</Title>
                  <Paragraph>
                    Contact the driver to understand the circumstances of the event and provide immediate feedback.
                  </Paragraph>
                  <Button type="primary">Contact Now</Button>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card bordered={false} className="inner-card">
                  <Title level={4}>Schedule Training</Title>
                  <Paragraph>
                    Schedule a targeted training session focused on braking techniques and hazard perception.
                  </Paragraph>
                  <Button>Schedule Training</Button>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card bordered={false} className="inner-card">
                  <Title level={4}>Review Route</Title>
                  <Paragraph>
                    Review the route for potential hazards or infrastructure issues that may have contributed to the event.
                  </Paragraph>
                  <Button>Review Route</Button>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AlertDetails;
