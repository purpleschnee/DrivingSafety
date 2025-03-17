import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Row, Col, Card, Typography, Button, Divider, Tag, Space, QRCode, Descriptions } from 'antd';
import { ArrowLeftOutlined, DownloadOutlined, PrinterOutlined, ShareAltOutlined, CheckCircleOutlined, TrophyOutlined, BookOutlined, CalendarOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const TrainingCertificate = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock certificate data - in a real app, you would fetch this based on the id parameter
  const certificateData = {
    id: id || 'TC-10045',
    driverId: 'D-10056',
    driverName: 'Zhang Ming',
    course: 'Safe Driving Fundamentals',
    instructor: 'Li Wei',
    issuedDate: 'January 15, 2025',
    expiryDate: 'January 15, 2027',
    score: 95,
    duration: '4 hours',
    status: 'Valid',
    certificateNumber: 'CERT-SD-2025-0045',
    issuer: 'National Safe Driving Association',
    description: 'This certificate verifies that the driver has successfully completed the Safe Driving Fundamentals course, demonstrating proficiency in defensive driving techniques, hazard perception, and risk management.',
    modules: [
      'Defensive Driving Techniques',
      'Hazard Perception',
      'Risk Management',
      'Vehicle Control',
      'Traffic Rules and Regulations',
    ],
    skills: [
      { name: 'Defensive Driving', level: 'Advanced' },
      { name: 'Hazard Perception', level: 'Advanced' },
      { name: 'Vehicle Control', level: 'Intermediate' },
      { name: 'Emergency Response', level: 'Intermediate' },
    ],
  };

  return (
    <div className="training-certificate-container">
      <Button 
        type="link" 
        icon={<ArrowLeftOutlined />} 
        onClick={() => navigate(`/driver-training/${certificateData.driverId}`)}
        style={{ marginBottom: 16, padding: 0 }}
      >
        Back to Training Records
      </Button>

      <Card className="certificate-card" style={{ marginBottom: 24 }}>
        <div className="certificate-header" style={{ textAlign: 'center', marginBottom: 24 }}>
          <Title level={2} style={{ color: '#0071e3' }}>Certificate of Completion</Title>
          <Title level={4}>{certificateData.course}</Title>
        </div>

        <div className="certificate-body" style={{ textAlign: 'center', margin: '24px 0' }}>
          <Paragraph>
            This is to certify that
          </Paragraph>
          <Title level={3} style={{ margin: '16px 0' }}>{certificateData.driverName}</Title>
          <Paragraph>
            has successfully completed the training course
          </Paragraph>
          <Title level={3} style={{ margin: '16px 0', color: '#0071e3' }}>{certificateData.course}</Title>
          <Paragraph>
            with a score of
          </Paragraph>
          <Title level={2} style={{ margin: '16px 0', color: '#34c759' }}>{certificateData.score}/100</Title>
        </div>

        <Divider style={{ margin: '24px 0' }} />

        <Row gutter={[24, 24]} style={{ textAlign: 'center' }}>
          <Col xs={24} sm={8}>
            <Text type="secondary">Issue Date</Text>
            <br />
            <Text strong>{certificateData.issuedDate}</Text>
          </Col>
          <Col xs={24} sm={8}>
            <Text type="secondary">Certificate Number</Text>
            <br />
            <Text strong>{certificateData.certificateNumber}</Text>
          </Col>
          <Col xs={24} sm={8}>
            <Text type="secondary">Expiry Date</Text>
            <br />
            <Text strong>{certificateData.expiryDate}</Text>
          </Col>
        </Row>

        <Divider style={{ margin: '24px 0' }} />

        <Row gutter={[24, 24]}>
          <Col xs={24} sm={16}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
              <div>
                <Text type="secondary">Issued by</Text>
                <br />
                <Text strong>{certificateData.issuer}</Text>
              </div>
              <div style={{ marginTop: 16 }}>
                <Text type="secondary">Instructor</Text>
                <br />
                <Text strong>{certificateData.instructor}</Text>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={8} style={{ textAlign: 'center' }}>
            <QRCode
              value={`https://safedrivingplatform.com/verify-certificate/${certificateData.certificateNumber}`}
              size={120}
              bordered={false}
            />
            <div style={{ marginTop: 8 }}>
              <Text type="secondary">Scan to verify</Text>
            </div>
          </Col>
        </Row>

        <div className="certificate-actions" style={{ marginTop: 24, textAlign: 'center' }}>
          <Space>
            <Button type="primary" icon={<DownloadOutlined />}>Download Certificate</Button>
            <Button icon={<PrinterOutlined />}>Print Certificate</Button>
            <Button icon={<ShareAltOutlined />}>Share Certificate</Button>
          </Space>
        </div>
      </Card>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={16}>
          <Card title="Certificate Details">
            <Descriptions bordered column={{ xxl: 3, xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}>
              <Descriptions.Item label="Certificate ID" span={1}>{certificateData.id}</Descriptions.Item>
              <Descriptions.Item label="Certificate Number" span={2}>{certificateData.certificateNumber}</Descriptions.Item>
              <Descriptions.Item label="Driver Name" span={1}>{certificateData.driverName}</Descriptions.Item>
              <Descriptions.Item label="Driver ID" span={2}>{certificateData.driverId}</Descriptions.Item>
              <Descriptions.Item label="Course" span={3}>{certificateData.course}</Descriptions.Item>
              <Descriptions.Item label="Instructor" span={1}>{certificateData.instructor}</Descriptions.Item>
              <Descriptions.Item label="Duration" span={2}>{certificateData.duration}</Descriptions.Item>
              <Descriptions.Item label="Score" span={1}>{certificateData.score}/100</Descriptions.Item>
              <Descriptions.Item label="Status" span={2}>
                <Tag color="success">{certificateData.status}</Tag>
              </Descriptions.Item>
              <Descriptions.Item label="Issued Date" span={1}>{certificateData.issuedDate}</Descriptions.Item>
              <Descriptions.Item label="Expiry Date" span={2}>{certificateData.expiryDate}</Descriptions.Item>
              <Descriptions.Item label="Issuer" span={3}>{certificateData.issuer}</Descriptions.Item>
              <Descriptions.Item label="Description" span={3}>{certificateData.description}</Descriptions.Item>
            </Descriptions>
          </Card>

          <Card title="Course Modules" style={{ marginTop: 24 }}>
            <ul style={{ paddingLeft: 20 }}>
              {certificateData.modules.map((module, index) => (
                <li key={index} style={{ marginBottom: 8 }}>
                  <Space>
                    <CheckCircleOutlined style={{ color: '#34c759' }} />
                    <Text>{module}</Text>
                  </Space>
                </li>
              ))}
            </ul>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card title="Skills Acquired">
            {certificateData.skills.map((skill, index) => (
              <div key={index} style={{ marginBottom: 16 }}>
                <Space align="center" style={{ marginBottom: 8 }}>
                  <TrophyOutlined style={{ color: '#0071e3' }} />
                  <Text strong>{skill.name}</Text>
                  <Tag color={skill.level === 'Advanced' ? 'blue' : skill.level === 'Intermediate' ? 'cyan' : 'green'}>
                    {skill.level}
                  </Tag>
                </Space>
              </div>
            ))}
          </Card>

          <Card title="Renewal Information" style={{ marginTop: 24 }}>
            <div style={{ marginBottom: 16 }}>
              <Space direction="vertical">
                <Space>
                  <CalendarOutlined style={{ color: '#ff9500' }} />
                  <Text strong>Expiry Date:</Text>
                  <Text>{certificateData.expiryDate}</Text>
                </Space>
                <Space>
                  <BookOutlined style={{ color: '#ff9500' }} />
                  <Text strong>Renewal Course:</Text>
                  <Text>Safe Driving Refresher</Text>
                </Space>
                <Paragraph style={{ marginTop: 8 }}>
                  This certificate must be renewed before the expiry date. The renewal process requires completion of a refresher course.
                </Paragraph>
                <Button type="primary" style={{ marginTop: 8 }}>Schedule Renewal</Button>
              </Space>
            </div>
          </Card>

          <Card title="Verification" style={{ marginTop: 24 }}>
            <div style={{ textAlign: 'center', marginBottom: 16 }}>
              <QRCode
                value={`https://safedrivingplatform.com/verify-certificate/${certificateData.certificateNumber}`}
                size={180}
                bordered={false}
              />
              <Paragraph style={{ marginTop: 16 }}>
                Scan this QR code or enter the certificate number below to verify the authenticity of this certificate.
              </Paragraph>
              <Button type="link">Verify Certificate Online</Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default TrainingCertificate;
