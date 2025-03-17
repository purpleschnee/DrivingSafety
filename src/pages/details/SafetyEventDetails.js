import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Row, Col, Card, Typography, Button, Descriptions, Tag, Space, Divider, Statistic, Timeline, Alert } from 'antd';
import { ArrowLeftOutlined, CarOutlined, EnvironmentOutlined, ClockCircleOutlined, ExclamationCircleOutlined, CheckCircleOutlined, UserOutlined, InfoCircleOutlined, WarningOutlined, LineChartOutlined } from '@ant-design/icons';
import { Line, Gauge } from '@ant-design/charts';

const { Title, Text, Paragraph } = Typography;

const SafetyEventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock safety event data - in a real app, you would fetch this based on the id parameter
  const eventData = {
    id: id || 'E-2045',
    driver: 'D-10056',
    driverName: 'Liu Yang',
    eventType: 'Hard Braking',
    location: 'Zhongguancun South Street',
    coordinates: '39.9847° N, 116.3046° E',
    time: '2025-03-17 02:45:23',
    severity: 'Moderate',
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
    impactOnSafetyScore: '-2 points',
  };

  // Safety score trend data
  const safetyScoreData = [
    { date: '2025-03-01', score: 88 },
    { date: '2025-03-05', score: 89 },
    { date: '2025-03-10', score: 87 },
    { date: '2025-03-15', score: 85 },
    { date: '2025-03-17', score: 83 }, // Date of the event
    { date: '2025-03-20', score: 83 },
  ];

  // Safety score trend configuration
  const safetyScoreConfig = {
    data: safetyScoreData,
    xField: 'date',
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
    annotations: [
      {
        type: 'regionFilter',
        start: ['2025-03-17', 'min'],
        end: ['2025-03-17', 'max'],
        color: 'rgba(255, 0, 0, 0.1)',
      },
      {
        type: 'text',
        position: ['2025-03-17', 83],
        content: 'Event',
        offsetY: -4,
        style: {
          textAlign: 'center',
          fontSize: 12,
          fill: 'rgba(255, 0, 0, 0.85)',
        },
      },
    ],
  };

  // Gauge chart configuration
  const severityGaugeConfig = {
    percent: 0.65, // Moderate severity (65%)
    range: {
      color: '#ff9500',
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
    statistic: {
      content: {
        formatter: () => 'Moderate',
        style: {
          fontSize: '24px',
          lineHeight: '24px',
          color: '#ff9500',
          fontWeight: 'bold',
        },
      },
    },
  };

  // Related events data
  const relatedEventsData = [
    { 
      time: '2025-03-15 14:23:45', 
      type: 'Hard Braking',
      location: 'Chaoyang Road', 
      severity: 'Moderate',
    },
    { 
      time: '2025-03-10 08:12:30', 
      type: 'Rapid Acceleration',
      location: 'Jianguomen Outer Street', 
      severity: 'Mild',
    },
    { 
      time: '2025-03-05 18:45:12', 
      type: 'Hard Turning',
      location: 'Xidan North Street', 
      severity: 'Moderate',
    },
  ];

  return (
    <div className="safety-event-details-container">
      <Button 
        type="link" 
        icon={<ArrowLeftOutlined />} 
        onClick={() => navigate(`/driver-details/${eventData.driver}`)}
        style={{ marginBottom: 16, padding: 0 }}
      >
        Back to Driver Details
      </Button>

      <Row gutter={[24, 24]}>
        <Col xs={24}>
          <Card>
            <Row gutter={[24, 24]} align="middle">
              <Col xs={24} md={18}>
                <Title level={3}>Safety Event {eventData.id}: {eventData.eventType}</Title>
                <Space size="large">
                  <Text><UserOutlined /> Driver: {eventData.driverName} ({eventData.driver})</Text>
                  <Text><CarOutlined /> Vehicle: {eventData.vehicleModel} ({eventData.vehicle})</Text>
                  <Text><ClockCircleOutlined /> Time: {eventData.time}</Text>
                </Space>
                <div style={{ marginTop: 8 }}>
                  <Space size="large">
                    <Text><EnvironmentOutlined /> Location: {eventData.location}</Text>
                    <Text>
                      Severity: 
                      <Tag 
                        color={eventData.severity === 'Severe' ? '#ff3b30' : eventData.severity === 'Moderate' ? '#ff9500' : '#34c759'}
                        style={{ marginLeft: 8 }}
                      >
                        {eventData.severity}
                      </Tag>
                    </Text>
                    <Text>
                      Impact: 
                      <Tag color="#ff3b30" style={{ marginLeft: 8 }}>{eventData.impactOnSafetyScore}</Tag>
                    </Text>
                  </Space>
                </div>
              </Col>
              <Col xs={24} md={6} style={{ textAlign: 'right' }}>
                <Space>
                  <Button type="primary" icon={<LineChartOutlined />}>View Analytics</Button>
                  <Button icon={<WarningOutlined />}>Report Issue</Button>
                </Space>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col xs={24} md={16}>
          <Card title="Event Details">
            <Descriptions bordered column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
              <Descriptions.Item label="Event Type" span={2}>{eventData.eventType}</Descriptions.Item>
              <Descriptions.Item label="Severity" span={2}>
                <Tag 
                  color={eventData.severity === 'Severe' ? '#ff3b30' : eventData.severity === 'Moderate' ? '#ff9500' : '#34c759'}
                >
                  {eventData.severity}
                </Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Driver" span={2}>{eventData.driverName} ({eventData.driver})</Descriptions.Item>
              <Descriptions.Item label="Vehicle" span={2}>{eventData.vehicleModel} ({eventData.vehicle})</Descriptions.Item>
              <Descriptions.Item label="Location" span={2}>{eventData.location}</Descriptions.Item>
              <Descriptions.Item label="Coordinates" span={2}>{eventData.coordinates}</Descriptions.Item>
              <Descriptions.Item label="Time" span={2}>{eventData.time}</Descriptions.Item>
              <Descriptions.Item label="Speed" span={2}>{eventData.speed} (Limit: {eventData.speedLimit})</Descriptions.Item>
              <Descriptions.Item label="Deceleration" span={2}>{eventData.deceleration}</Descriptions.Item>
              <Descriptions.Item label="Weather Condition" span={2}>{eventData.weatherCondition}</Descriptions.Item>
              <Descriptions.Item label="Road Condition" span={2}>{eventData.roadCondition}</Descriptions.Item>
              <Descriptions.Item label="Traffic Condition" span={2}>{eventData.trafficCondition}</Descriptions.Item>
              <Descriptions.Item label="Driver Fatigue Level" span={2}>{eventData.driverFatigue}</Descriptions.Item>
              <Descriptions.Item label="Impact on Safety Score" span={2}>{eventData.impactOnSafetyScore}</Descriptions.Item>
              <Descriptions.Item label="Description" span={4}>{eventData.description}</Descriptions.Item>
            </Descriptions>
          </Card>
        </Col>
        <Col xs={24} md={8}>
          <Card title="Event Severity Assessment">
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <Gauge {...severityGaugeConfig} />
            </div>
            <Divider />
            <Row gutter={[16, 16]}>
              <Col span={12}>
                <Statistic 
                  title="Deceleration" 
                  value={eventData.deceleration.split(' ')[0]} 
                  suffix="m/s²"
                  valueStyle={{ color: '#ff9500' }}
                />
              </Col>
              <Col span={12}>
                <Statistic 
                  title="Speed" 
                  value={eventData.speed.split(' ')[0]} 
                  suffix="km/h"
                  valueStyle={{ color: '#ff3b30' }}
                />
              </Col>
            </Row>
            <Divider />
            <Alert
              message="Safety Assessment"
              description="This event indicates moderate risk driving behavior. The driver was exceeding the speed limit and applied hard braking, which could have been avoided with better anticipation."
              type="warning"
              showIcon
              icon={<InfoCircleOutlined />}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
        <Col xs={24} md={12}>
          <Card title="Impact on Safety Score">
            <Line {...safetyScoreConfig} />
            <Divider />
            <Alert
              message="Safety Score Impact"
              description="This event resulted in a 2-point reduction in the driver's safety score. The score will gradually recover if no similar events occur in the next 30 days."
              type="info"
              showIcon
              icon={<InfoCircleOutlined />}
            />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Related Events from Same Driver">
            <Timeline>
              {relatedEventsData.map((event, index) => (
                <Timeline.Item 
                  key={index} 
                  color={event.severity === 'Severe' ? 'red' : event.severity === 'Moderate' ? 'orange' : 'green'}
                >
                  <div>
                    <Text strong>{event.time}</Text>
                    <Tag 
                      color={event.severity === 'Severe' ? '#ff3b30' : event.severity === 'Moderate' ? '#ff9500' : '#34c759'}
                      style={{ marginLeft: 8 }}
                    >
                      {event.severity}
                    </Tag>
                  </div>
                  <div style={{ marginTop: 4 }}>
                    <Text>Type: {event.type}</Text>
                  </div>
                  <div>
                    <Text>Location: {event.location}</Text>
                  </div>
                  <div style={{ marginTop: 8 }}>
                    <Button type="link" size="small" onClick={() => navigate(`/safety-event/${index + 1}`)}>View Details</Button>
                  </div>
                </Timeline.Item>
              ))}
            </Timeline>
            <div style={{ textAlign: 'center', marginTop: 16 }}>
              <Button type="link">View All Driver Events</Button>
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
                  <Title level={4}>Driver Feedback</Title>
                  <Paragraph>
                    Provide feedback to the driver about this event and discuss strategies to avoid similar situations in the future.
                  </Paragraph>
                  <Button type="primary">Provide Feedback</Button>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card bordered={false} className="inner-card">
                  <Title level={4}>Assign Training Module</Title>
                  <Paragraph>
                    Assign a targeted training module focused on braking techniques and hazard perception.
                  </Paragraph>
                  <Button>Assign Training</Button>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card bordered={false} className="inner-card">
                  <Title level={4}>Route Analysis</Title>
                  <Paragraph>
                    Analyze the route for potential hazards or infrastructure issues that may have contributed to the event.
                  </Paragraph>
                  <Button>Analyze Route</Button>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default SafetyEventDetails;
