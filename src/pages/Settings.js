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
    message.success('u8bbeu7f6eu5df2u4fddu5b58');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error('u4fddu5b58u5931u8d25uff0cu8bf7u68c0u67e5u8868u5355');
  };

  return (
    <div className="settings-container">
      <Title level={3}>u7cfbu7edfu8bbeu7f6e</Title>
      <Text type="secondary" style={{ marginBottom: '24px', display: 'block' }}>
        u914du7f6eu5e73u53f0u53c2u6570u3001u6570u636eu6e90u548cu901au77e5u8bbeu7f6e
      </Text>
      
      <Card style={{ marginBottom: '24px' }}>
        <Tabs defaultActiveKey="1">
          <TabPane 
            tab={
              <span>
                <UserOutlined />
                u8d26u6237u8bbeu7f6e
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
                company: 'u5b89u5168u51fau884cu79d1u6280u6709u9650u516cu53f8',
                adminName: 'u7ba1u7406u5458',
                email: 'admin@safedriving.com',
                language: 'zh_CN',
                timezone: 'Asia/Shanghai',
                theme: 'light',
              }}
            >
              <Row gutter={24}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="company"
                    label="u516cu53f8u540du79f0"
                    rules={[{ required: true, message: 'u8bf7u8f93u5165u516cu53f8u540du79f0' }]}
                  >
                    <Input placeholder="u8bf7u8f93u5165u516cu53f8u540du79f0" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="adminName"
                    label="u7ba1u7406u5458u540du79f0"
                    rules={[{ required: true, message: 'u8bf7u8f93u5165u7ba1u7406u5458u540du79f0' }]}
                  >
                    <Input placeholder="u8bf7u8f93u5165u7ba1u7406u5458u540du79f0" />
                  </Form.Item>
                </Col>
              </Row>
              
              <Row gutter={24}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="email"
                    label="u7535u5b50u90aeu7bb1"
                    rules={[
                      { required: true, message: 'u8bf7u8f93u5165u7535u5b50u90aeu7bb1' },
                      { type: 'email', message: 'u8bf7u8f93u5165u6709u6548u7684u7535u5b50u90aeu7bb1' }
                    ]}
                  >
                    <Input placeholder="u8bf7u8f93u5165u7535u5b50u90aeu7bb1" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="password"
                    label="u4feeu6539u5bc6u7801"
                  >
                    <Input.Password placeholder="u7559u7a7au8868u793au4e0du4feeu6539" />
                  </Form.Item>
                </Col>
              </Row>
              
              <Row gutter={24}>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="language"
                    label="u7cfbu7edfu8bedu8a00"
                    rules={[{ required: true, message: 'u8bf7u9009u62e9u7cfbu7edfu8bedu8a00' }]}
                  >
                    <Select placeholder="u8bf7u9009u62e9u7cfbu7edfu8bedu8a00">
                      <Option value="zh_CN">u7b80u4f53u4e2du6587</Option>
                      <Option value="en_US">English</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="timezone"
                    label="u65f6u533a"
                    rules={[{ required: true, message: 'u8bf7u9009u62e9u65f6u533a' }]}
                  >
                    <Select placeholder="u8bf7u9009u62e9u65f6u533a">
                      <Option value="Asia/Shanghai">u4e2du56fdu6807u51c6u65f6u95f4 (GMT+8)</Option>
                      <Option value="America/New_York">u7f8eu56fdu4e1cu90e8u65f6u95f4 (GMT-5)</Option>
                      <Option value="Europe/London">u82f1u56fdu65f6u95f4 (GMT+0)</Option>
                    </Select>
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="theme"
                    label="u754cu9762u4e3bu9898"
                    rules={[{ required: true, message: 'u8bf7u9009u62e9u754cu9762u4e3bu9898' }]}
                  >
                    <Select placeholder="u8bf7u9009u62e9u754cu9762u4e3bu9898">
                      <Option value="light">u6d45u8272u4e3bu9898</Option>
                      <Option value="dark">u6df1u8272u4e3bu9898</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              
              <Form.Item>
                <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
                  u4fddu5b58u8bbeu7f6e
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          
          <TabPane 
            tab={
              <span>
                <ApiOutlined />
                u6570u636eu6e90u914du7f6e
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
              <Title level={4}>u6570u636eu91c7u96c6u914du7f6e</Title>
              <Divider />
              
              <Row gutter={24}>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="obdEnabled"
                    label="OBDu8bbeu5907u6570u636eu91c7u96c6"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="mobileEnabled"
                    label="u624bu673au76d1u6d4bu6570u636eu91c7u96c6"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="passengerEnabled"
                    label="u4e58u5ba2u8bc4u4ef7u6570u636eu91c7u96c6"
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
                    label="OBDu8bbeu5907u91c7u6837u7387 (Hz)"
                    rules={[{ required: true, message: 'u8bf7u8f93u5165OBDu8bbeu5907u91c7u6837u7387' }]}
                  >
                    <Input type="number" min={1} max={1000} />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="mobileSamplingRate"
                    label="u624bu673au76d1u6d4bu91c7u6837u7387 (Hz)"
                    rules={[{ required: true, message: 'u8bf7u8f93u5165u624bu673au76d1u6d4bu91c7u6837u7387' }]}
                  >
                    <Input type="number" min={1} max={1000} />
                  </Form.Item>
                </Col>
              </Row>
              
              <Row gutter={24}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="dataRetentionPeriod"
                    label="u6570u636eu4fddu7559u5929u6570"
                    rules={[{ required: true, message: 'u8bf7u8f93u5165u6570u636eu4fddu7559u5929u6570' }]}
                  >
                    <Input type="number" min={1} addonAfter="u5929" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="dataBackupFrequency"
                    label="u6570u636eu5907u4efdu9891u7387"
                    rules={[{ required: true, message: 'u8bf7u9009u62e9u6570u636eu5907u4efdu9891u7387' }]}
                    initialValue="daily"
                  >
                    <Select>
                      <Option value="hourly">u6bcfu5c0fu65f6</Option>
                      <Option value="daily">u6bcfu5929</Option>
                      <Option value="weekly">u6bcfu5468</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </Row>
              
              <Title level={4} style={{ marginTop: '20px' }}>u6570u636eu96c6u6210u914du7f6e</Title>
              <Divider />
              
              <Row gutter={24}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="companyApiEndpoint"
                    label="u516cu53f8u7cfbu7edf API u7aefu70b9"
                  >
                    <Input placeholder="u8bf7u8f93u5165APIu7aefu70b9URL" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="companyApiKey"
                    label="API u5bc6u94a5"
                  >
                    <Input.Password placeholder="u8bf7u8f93u5165APIu5bc6u94a5" />
                  </Form.Item>
                </Col>
              </Row>
              
              <Row gutter={24}>
                <Col xs={24}>
                  <Form.Item
                    name="dataImportConfig"
                    label="u6570u636eu5bfcu5165u914du7f6e"
                  >
                    <TextArea rows={4} placeholder="u8bf7u8f93u5165JSONu683cu5f0fu7684u6570u636eu5bfcu5165u914du7f6e" />
                  </Form.Item>
                </Col>
              </Row>
              
              <Form.Item>
                <Space>
                  <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
                    u4fddu5b58u8bbeu7f6e
                  </Button>
                  <Upload>
                    <Button icon={<UploadOutlined />}>u4e0au4f20u914du7f6eu6587u4ef6</Button>
                  </Upload>
                </Space>
              </Form.Item>
            </Form>
          </TabPane>
          
          <TabPane 
            tab={
              <span>
                <BellOutlined />
                u901au77e5u8bbeu7f6e
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
              <Title level={4}>u901au77e5u6e20u9053</Title>
              <Divider />
              
              <Row gutter={24}>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="emailNotifications"
                    label="u7535u5b50u90aeu4ef6u901au77e5"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="smsNotifications"
                    label="u77edu4fe1u901au77e5"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="appNotifications"
                    label="u5e94u7528u5185u901au77e5"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </Col>
              </Row>
              
              <Title level={4} style={{ marginTop: '20px' }}>u901au77e5u89e6u53d1u6761u4ef6</Title>
              <Divider />
              
              <Row gutter={24}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="safetyScoreThreshold"
                    label="u5b89u5168u8bc4u5206u9608u503cu8b66u62a5"
                    tooltip="u5f53u9a7eu9a76u5458u5b89u5168u8bc4u5206u4f4eu4e8eu6b64u9608u503cu65f6u89e6u53d1u901au77e5"
                    rules={[{ required: true, message: 'u8bf7u8f93u5165u5b89u5168u8bc4u5206u9608u503c' }]}
                  >
                    <Input type="number" min={0} max={100} addonAfter="u5206" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="incidentThreshold"
                    label="u4e8bu4ef6u6570u91cfu9608u503cu8b66u62a5"
                    tooltip="u5f53u9a7eu9a76u5458u5355u65e5u4e8bu4ef6u6570u91cfu8d85u8fc7u6b64u9608u503cu65f6u89e6u53d1u901au77e5"
                    rules={[{ required: true, message: 'u8bf7u8f93u5165u4e8bu4ef6u6570u91cfu9608u503c' }]}
                  >
                    <Input type="number" min={0} addonAfter="u6b21" />
                  </Form.Item>
                </Col>
              </Row>
              
              <Title level={4} style={{ marginTop: '20px' }}>u62a5u544au8bbeu7f6e</Title>
              <Divider />
              
              <Row gutter={24}>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="dailyReportEnabled"
                    label="u6bcfu65e5u62a5u544a"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="weeklyReportEnabled"
                    label="u6bcfu5468u62a5u544a"
                    valuePropName="checked"
                  >
                    <Switch />
                  </Form.Item>
                </Col>
                <Col xs={24} md={8}>
                  <Form.Item
                    name="monthlyReportEnabled"
                    label="u6bcfu6708u62a5u544a"
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
                    label="u62a5u544au6536u4ef6u4eba"
                    rules={[{ required: true, message: 'u8bf7u8f93u5165u62a5u544au6536u4ef6u4eba' }]}
                    initialValue="admin@safedriving.com"
                  >
                    <TextArea rows={2} placeholder="u8bf7u8f93u5165u6536u4ef6u4ebau90aeu7bb1uff0cu591au4e2au6536u4ef6u4ebau8bf7u7528u9017u53f7u5206u9694" />
                  </Form.Item>
                </Col>
              </Row>
              
              <Form.Item>
                <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
                  u4fddu5b58u8bbeu7f6e
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
