import React, { useState } from 'react';
import { Row, Col, Card, Typography, Form, Input, Button, Select, Switch, Tabs, Divider, Space, Upload, message } from 'antd';
import { SaveOutlined, UploadOutlined } from '@ant-design/icons';
import PageHeader from '../components/PageHeader';
import './Settings.css';

const { Title, Text } = Typography;
const { Option } = Select;
const { TabPane } = Tabs;
const { TextArea } = Input;

const Settings = () => {
  const [form] = Form.useForm();
  const [apiForm] = Form.useForm();
  const [notificationForm] = Form.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
    message.success('Settings saved successfully');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('Save failed, please check the form');
  };

  return (
    <div className="settings-container">
      <PageHeader 
        title="System Settings" 
        description="Configure platform parameters, data sources, and notification settings"
      />
      
      <Card>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Account Settings" key="1">
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              initialValues={{
                company: 'Safe Driving Technology Co., Ltd.',
                adminName: 'Administrator',
                email: 'admin@safedriving.com',
                language: 'English',
                timezone: 'GMT+8',
                theme: 'light',
              }}
            >
              <Row gutter={24}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="company"
                    label="Company Name"
                    rules={[{ required: true, message: 'Please enter company name' }]}
                  >
                    <Input placeholder="Please enter company name" style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="adminName"
                    label="Administrator Name"
                    rules={[{ required: true, message: 'Please enter administrator name' }]}
                  >
                    <Input placeholder="Please enter administrator name" style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
              </Row>
              
              <Row gutter={24}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { required: true, message: 'Please enter email' },
                      { type: 'email', message: 'Please enter a valid email' }
                    ]}
                  >
                    <Input placeholder="Please enter email" style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="password"
                    label="Change Password"
                  >
                    <Input.Password placeholder="Leave blank to keep unchanged" style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
              </Row>
              
              <Row gutter={24}>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="language"
                    label="System Language"
                    rules={[{ required: true, message: 'Please select system language' }]}
                  >
                    <Select placeholder="Please select system language" style={{ width: '100%' }}>
                      <Option value="English">English</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="timezone"
                    label="Time Zone"
                    rules={[{ required: true, message: 'Please select time zone' }]}
                  >
                    <Select placeholder="Please select time zone" style={{ width: '100%' }}>
                      <Option value="GMT+8">China Standard Time (GMT+8)</Option>
                      <Option value="GMT-5">Eastern Time (GMT-5)</Option>
                      <Option value="GMT+0">UK Time (GMT+0)</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="theme"
                    label="Interface Theme"
                    rules={[{ required: true, message: 'Please select interface theme' }]}
                  >
                    <Select placeholder="Please select interface theme" style={{ width: '100%' }}>
                      <Option value="light">Light Theme</Option>
                      <Option value="dark">Dark Theme</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          
          <TabPane tab="Data Source Configuration" key="2">
            <Form
              form={apiForm}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              initialValues={{
                apiEndpoint: 'https://api.safedriving.com/v1',
                apiKey: '••••••••••••••••',
                obdSamplingRate: 10,
                mobileSamplingRate: 5,
                dataRetentionPeriod: 90,
                backupFrequency: 'daily',
              }}
            >
              <Title level={4}>Data Collection Configuration</Title>
              <Divider />
              
              <Row gutter={24}>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="obdEnabled"
                    label="OBD Device Data Collection"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="mobileEnabled"
                    label="Mobile Monitoring Data Collection"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="passengerEnabled"
                    label="Passenger Rating Data Collection"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </Col>
              </Row>
              
              <Row gutter={24}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="obdSamplingRate"
                    label="OBD Device Sampling Rate (Hz)"
                    rules={[{ required: true, message: 'Please enter OBD device sampling rate' }]}
                  >
                    <Input type="number" min={1} max={1000} style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="mobileSamplingRate"
                    label="Mobile Monitoring Sampling Rate (Hz)"
                    rules={[{ required: true, message: 'Please enter mobile monitoring sampling rate' }]}
                  >
                    <Input type="number" min={1} max={1000} style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
              </Row>
              
              <Row gutter={24}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="dataRetentionPeriod"
                    label="Data Retention Period (days)"
                    rules={[{ required: true, message: 'Please enter data retention period' }]}
                  >
                    <Input type="number" min={1} addonAfter="days" style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="dataBackupFrequency"
                    label="Data Backup Frequency"
                    rules={[{ required: true, message: 'Please select data backup frequency' }]}
                    initialValue="daily"
                  >
                    <Select style={{ width: '100%' }}>
                      <Option value="hourly">Hourly</Option>
                      <Option value="daily">Daily</Option>
                      <Option value="weekly">Weekly</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              
              <Title level={4} style={{ marginTop: '20px' }}>Data Import Configuration</Title>
              <Divider />
              
              <Row gutter={24}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="companyApiEndpoint"
                    label="Company API Endpoint"
                  >
                    <Input placeholder="Please enter API endpoint URL" style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="companyApiKey"
                    label="API Key"
                  >
                    <Input.Password placeholder="Please enter API key" style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
              </Row>
              
              <Row gutter={24}>
                <Col xs={24}>
                  <Form.Item
                    name="dataImportConfig"
                    label="Data Import Configuration"
                  >
                    <TextArea rows={4} placeholder="Please enter JSON formatted data import configuration" style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
              </Row>
              
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
                <div style={{ marginTop: '16px' }}>
                  <Upload>
                    <Button icon={<UploadOutlined />}>Upload Configuration File</Button>
                  </Upload>
                </div>
              </Form.Item>
            </Form>
          </TabPane>
          
          <TabPane tab="Notification Settings" key="3">
            <Form
              form={notificationForm}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              initialValues={{
                emailNotifications: true,
                smsNotifications: false,
                appNotifications: true,
                safetyScoreThreshold: 75,
                incidentThreshold: 5,
                dailyReportEnabled: true,
                weeklyReportEnabled: true,
                monthlyReportEnabled: true,
              }}
            >
              <Title level={4}>Notification Channels</Title>
              <Divider />
              
              <Row gutter={24}>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="emailNotifications"
                    label="Email Notifications"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="smsNotifications"
                    label="SMS Notifications"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="appNotifications"
                    label="App Notifications"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </Col>
              </Row>
              
              <Title level={4} style={{ marginTop: '20px' }}>Alert Thresholds</Title>
              <Divider />
              
              <Row gutter={24}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="safetyScoreThreshold"
                    label="Safety Score Alert Threshold"
                    rules={[{ required: true, message: 'Please enter safety score threshold' }]}
                  >
                    <Input type="number" min={0} max={100} addonAfter="points" style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="incidentThreshold"
                    label="Incident Count Alert Threshold"
                    rules={[{ required: true, message: 'Please enter incident threshold' }]}
                  >
                    <Input type="number" min={0} addonAfter="incidents" style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
              </Row>
              
              <Title level={4} style={{ marginTop: '20px' }}>Report Schedule</Title>
              <Divider />
              
              <Row gutter={24}>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="dailyReportEnabled"
                    label="Daily Reports"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="weeklyReportEnabled"
                    label="Weekly Reports"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="monthlyReportEnabled"
                    label="Monthly Reports"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </Col>
              </Row>
              
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default Settings;
