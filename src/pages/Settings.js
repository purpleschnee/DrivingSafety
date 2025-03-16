import React, { useState } from 'react';
import { Row, Col, Card, Typography, Form, Input, Button, Select, Switch, Tabs, Divider, Space, Upload, message } from 'antd';
import { SaveOutlined, UploadOutlined, UserOutlined, LockOutlined, BellOutlined, ApiOutlined } from '@ant-design/icons';

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
      <Title level={3}>System Settings</Title>
      <Text type="secondary" style={{ marginBottom: '24px', display: 'block' }}>
        Configure platform parameters, data sources, and notification settings
      </Text>
      
      <Card style={{ marginBottom: '24px' }}>
        <Tabs defaultActiveKey="1">
          <TabPane 
            tab={
              <span>
                <UserOutlined />
                Account Settings
              </span>
            } 
            key="1"
          >
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              initialValues={{
                company: 'Safe Driving Technology Co., Ltd.',
                adminName: 'Administrator',
                email: 'admin@safedriving.com',
                language: 'en_US',
                timezone: 'Asia/Shanghai',
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
                    <Input placeholder="Please enter company name" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="adminName"
                    label="Administrator Name"
                    rules={[{ required: true, message: 'Please enter administrator name' }]}
                  >
                    <Input placeholder="Please enter administrator name" />
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
                    <Input placeholder="Please enter email" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="password"
                    label="Change Password"
                  >
                    <Input.Password placeholder="Leave blank to keep unchanged" />
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
                    <Select placeholder="Please select system language">
                      <Option value="zh_CN">Simplified Chinese</Option>
                      <Option value="en_US">English</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="timezone"
                    label="Time Zone"
                    rules={[{ required: true, message: 'Please select time zone' }]}
                  >
                    <Select placeholder="Please select time zone">
                      <Option value="Asia/Shanghai">China Standard Time (GMT+8)</Option>
                      <Option value="America/New_York">Eastern Time (GMT-5)</Option>
                      <Option value="Europe/London">UK Time (GMT+0)</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="theme"
                    label="Interface Theme"
                    rules={[{ required: true, message: 'Please select interface theme' }]}
                  >
                    <Select placeholder="Please select interface theme">
                      <Option value="light">Light Theme</Option>
                      <Option value="dark">Dark Theme</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              
              <Form.Item>
                <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
                  Save Settings
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          
          <TabPane 
            tab={
              <span>
                <ApiOutlined />
                Data Source Configuration
              </span>
            } 
            key="2"
          >
            <Form
              form={apiForm}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              initialValues={{
                obdEnabled: true,
                mobileEnabled: true,
                passengerEnabled: true,
                obdSamplingRate: 100,
                mobileSamplingRate: 50,
                dataRetentionPeriod: 90,
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
                    <Input type="number" min={1} max={1000} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="mobileSamplingRate"
                    label="Mobile Monitoring Sampling Rate (Hz)"
                    rules={[{ required: true, message: 'Please enter mobile monitoring sampling rate' }]}
                  >
                    <Input type="number" min={1} max={1000} />
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
                    <Input type="number" min={1} addonAfter="days" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="dataBackupFrequency"
                    label="Data Backup Frequency"
                    rules={[{ required: true, message: 'Please select data backup frequency' }]}
                    initialValue="daily"
                  >
                    <Select>
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
                    <Input placeholder="Please enter API endpoint URL" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="companyApiKey"
                    label="API Key"
                  >
                    <Input.Password placeholder="Please enter API key" />
                  </Form.Item>
                </Col>
              </Row>
              
              <Row gutter={24}>
                <Col xs={24}>
                  <Form.Item
                    name="dataImportConfig"
                    label="Data Import Configuration"
                  >
                    <TextArea rows={4} placeholder="Please enter JSON formatted data import configuration" />
                  </Form.Item>
                </Col>
              </Row>
              
              <Form.Item>
                <Space>
                  <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
                    Save Configuration
                  </Button>
                  <Upload>
                    <Button icon={<UploadOutlined />}>Upload Configuration File</Button>
                  </Upload>
                </Space>
              </Form.Item>
            </Form>
          </TabPane>
          
          <TabPane 
            tab={
              <span>
                <BellOutlined />
                Notification Settings
              </span>
            } 
            key="3"
          >
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
              
              <Title level={4} style={{ marginTop: '20px' }}>Notification Triggers</Title>
              <Divider />
              
              <Row gutter={24}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="safetyScoreThreshold"
                    label="Safety Score Threshold"
                    tooltip="Trigger notification when safety score falls below this threshold"
                    rules={[{ required: true, message: 'Please enter safety score threshold' }]}
                  >
                    <Input type="number" min={0} max={100} addonAfter="%" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="incidentThreshold"
                    label="Incident Threshold"
                    tooltip="Trigger notification when incident count exceeds this threshold"
                    rules={[{ required: true, message: 'Please enter incident threshold' }]}
                  >
                    <Input type="number" min={0} addonAfter="times" />
                  </Form.Item>
                </Col>
              </Row>
              
              <Title level={4} style={{ marginTop: '20px' }}>Report Generation</Title>
              <Divider />
              
              <Row gutter={24}>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="dailyReportEnabled"
                    label="Daily Report"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="weeklyReportEnabled"
                    label="Weekly Report"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="monthlyReportEnabled"
                    label="Monthly Report"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </Col>
              </Row>
              
              <Row gutter={24}>
                <Col xs={24}>
                  <Form.Item
                    name="reportRecipients"
                    label="Report Recipients"
                    rules={[{ required: true, message: 'Please enter report recipients' }]}
                    initialValue="admin@safedriving.com"
                  >
                    <TextArea rows={2} placeholder="Please enter recipient email addresses, separated by commas" />
                  </Form.Item>
                </Col>
              </Row>
              
              <Form.Item>
                <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
                  Save Notification Settings
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
