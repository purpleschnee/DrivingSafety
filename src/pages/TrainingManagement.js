import React, { useState } from 'react';
import { Row, Col, Card, Typography, Table, Button, Progress, Tag, Space, Tabs, List, Avatar, Statistic, Timeline, Calendar, Modal, Form, Input, Select, DatePicker, Upload, message } from 'antd';
import { UserOutlined, CheckCircleOutlined, ClockCircleOutlined, FileOutlined, VideoCameraOutlined, ReadOutlined, PlusOutlined, UploadOutlined, SearchOutlined, FilterOutlined, EditOutlined, DeleteOutlined, EyeOutlined, DownloadOutlined, StarOutlined, StarFilled, CalendarOutlined } from '@ant-design/icons';
import PageHeader from '../components/PageHeader';

const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;
const { TextArea } = Input;

const TrainingManagement = () => {
  const [activeTab, setActiveTab] = useState('1');
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  // Training course data
  const trainingCourses = [
    {
      id: 'TC-001',
      title: 'Defensive Driving Techniques',
      type: 'Online Course',
      duration: '4 hours',
      completion: 78,
      enrolled: 156,
      rating: 4.7,
      status: 'Active',
    },
    {
      id: 'TC-002',
      title: 'Hazardous Weather Driving',
      type: 'Video Training',
      duration: '2.5 hours',
      completion: 92,
      enrolled: 124,
      rating: 4.5,
      status: 'Active',
    },
    {
      id: 'TC-003',
      title: 'Vehicle Safety Inspection',
      type: 'Practical Workshop',
      duration: '6 hours',
      completion: 65,
      enrolled: 98,
      rating: 4.8,
      status: 'Active',
    },
    {
      id: 'TC-004',
      title: 'Fatigue Management',
      type: 'Online Course',
      duration: '3 hours',
      completion: 85,
      enrolled: 142,
      rating: 4.3,
      status: 'Active',
    },
    {
      id: 'TC-005',
      title: 'Emergency Response Procedures',
      type: 'Simulation Training',
      duration: '5 hours',
      completion: 72,
      enrolled: 112,
      rating: 4.9,
      status: 'Active',
    },
  ];

  // Training course columns
  const courseColumns = [
    {
      title: 'Course ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Course Title',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (type) => {
        let icon;
        if (type === 'Online Course') {
          icon = <ReadOutlined />;
        } else if (type === 'Video Training') {
          icon = <VideoCameraOutlined />;
        } else if (type === 'Practical Workshop') {
          icon = <UserOutlined />;
        } else {
          icon = <FileOutlined />;
        }
        return (
          <Space>
            {icon} {type}
          </Space>
        );
      },
    },
    {
      title: 'Duration',
      dataIndex: 'duration',
      key: 'duration',
    },
    {
      title: 'Completion Rate',
      dataIndex: 'completion',
      key: 'completion',
      render: (completion) => (
        <Progress percent={completion} size="small" />
      ),
    },
    {
      title: 'Enrolled',
      dataIndex: 'enrolled',
      key: 'enrolled',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      render: (rating) => (
        <Space>
          <StarFilled style={{ color: '#fadb14' }} />
          {rating}
        </Space>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = status === 'Active' ? 'green' : status === 'Pending' ? 'gold' : 'volcano';
        return (
          <Tag color={color}>
            {status}
          </Tag>
        );
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="small">
          <Button type="text" icon={<EyeOutlined />} />
          <Button type="text" icon={<EditOutlined />} />
          <Button type="text" icon={<DeleteOutlined />} />
        </Space>
      ),
    },
  ];

  // Driver training status data
  const driverTrainingData = [
    {
      key: '1',
      id: 'D-10045',
      name: 'John Smith',
      completed: 5,
      inProgress: 1,
      required: 6,
      lastActivity: '2025-05-15',
      status: 'Compliant',
    },
    {
      key: '2',
      id: 'D-10078',
      name: 'Michael Johnson',
      completed: 4,
      inProgress: 1,
      required: 6,
      lastActivity: '2025-05-12',
      status: 'In Progress',
    },
    {
      key: '3',
      id: 'D-10023',
      name: 'Robert Williams',
      completed: 3,
      inProgress: 0,
      required: 6,
      lastActivity: '2025-05-08',
      status: 'Non-Compliant',
    },
    {
      key: '4',
      id: 'D-10089',
      name: 'Emily Davis',
      completed: 6,
      inProgress: 0,
      required: 6,
      lastActivity: '2025-05-18',
      status: 'Compliant',
    },
    {
      key: '5',
      id: 'D-10056',
      name: 'David Miller',
      completed: 2,
      inProgress: 2,
      required: 6,
      lastActivity: '2025-05-10',
      status: 'Non-Compliant',
    },
  ];

  // Driver training columns
  const driverColumns = [
    {
      title: 'Driver ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Completed',
      dataIndex: 'completed',
      key: 'completed',
    },
    {
      title: 'In Progress',
      dataIndex: 'inProgress',
      key: 'inProgress',
    },
    {
      title: 'Required',
      dataIndex: 'required',
      key: 'required',
    },
    {
      title: 'Completion Rate',
      key: 'completionRate',
      render: (_, record) => (
        <Progress 
          percent={Math.round((record.completed / record.required) * 100)} 
          size="small" 
        />
      ),
    },
    {
      title: 'Last Activity',
      dataIndex: 'lastActivity',
      key: 'lastActivity',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = status === 'Compliant' ? 'green' : status === 'In Progress' ? 'gold' : 'volcano';
        return (
          <Tag color={color}>
            {status}
          </Tag>
        );
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="small">
          <Button type="text" icon={<EyeOutlined />} />
          <Button type="text" icon={<EditOutlined />} />
        </Space>
      ),
    },
  ];

  // Upcoming training events
  const upcomingEvents = [
    {
      title: 'Advanced Defensive Driving Workshop',
      date: 'June 15, 2025',
      location: 'Training Center A',
      participants: 24,
      instructor: 'James Wilson',
    },
    {
      title: 'Safety Regulations Update Seminar',
      date: 'June 22, 2025',
      location: 'Conference Room B',
      participants: 45,
      instructor: 'Sarah Thompson',
    },
    {
      title: 'Emergency Response Simulation',
      date: 'July 5, 2025',
      location: 'Simulation Center',
      participants: 18,
      instructor: 'Robert Chen',
    },
  ];

  const handleAddCourse = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleSubmit = () => {
    form.validateFields().then(values => {
      console.log('Form values:', values);
      message.success('Course added successfully');
      setVisible(false);
      form.resetFields();
    }).catch(errorInfo => {
      console.log('Validation failed:', errorInfo);
    });
  };

  return (
    <div className="training-management-container">
      <PageHeader 
        title="Training Management" 
        description="Manage driver training programs, courses, and compliance"
      />

      <Tabs activeKey={activeTab} onChange={setActiveTab}>
        <TabPane 
          tab={
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <FileOutlined style={{ fontSize: '18px', marginRight: '16px' }} />
              <span>Training Courses</span>
            </span>
          } 
          key="1"
        >
          <Card 
            title="Training Course Catalog" 
            extra={
              <Space>
                <Button icon={<SearchOutlined />}>Search</Button>
                <Button icon={<FilterOutlined />}>Filter</Button>
                <Button type="primary" icon={<PlusOutlined />} onClick={handleAddCourse}>Add Course</Button>
              </Space>
            }
          >
            <Table 
              columns={courseColumns} 
              dataSource={trainingCourses} 
              pagination={{ pageSize: 5 }}
            />
          </Card>

          <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
            <Col xs={24} lg={12}>
              <Card title="Training Completion Statistics">
                <Row gutter={[24, 24]}>
                  <Col span={8}>
                    <Statistic 
                      title="Total Courses" 
                      value={12} 
                      valueStyle={{ color: '#0071e3' }}
                    />
                  </Col>
                  <Col span={8}>
                    <Statistic 
                      title="Active Enrollments" 
                      value={632} 
                      valueStyle={{ color: '#ff9500' }}
                    />
                  </Col>
                  <Col span={8}>
                    <Statistic 
                      title="Avg. Completion" 
                      value={78.5} 
                      precision={1}
                      valueStyle={{ color: '#34c759' }}
                      suffix="%"
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card title="Upcoming Training Events">
                <List
                  itemLayout="horizontal"
                  dataSource={upcomingEvents}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar icon={<CalendarOutlined />} style={{ backgroundColor: '#0071e3' }} />}
                        title={<a>{item.title}</a>}
                        description={
                          <Space direction="vertical" size={0}>
                            <Text type="secondary">{item.date} at {item.location}</Text>
                            <Text>Instructor: {item.instructor} | Participants: {item.participants}</Text>
                          </Space>
                        }
                      />
                      <Button type="link">Details</Button>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </TabPane>

        <TabPane 
          tab={
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <UserOutlined style={{ fontSize: '18px', marginRight: '16px' }} />
              <span>Driver Training Status</span>
            </span>
          } 
          key="2"
        >
          <Card 
            title="Driver Training Compliance" 
            extra={
              <Space>
                <Button icon={<SearchOutlined />}>Search</Button>
                <Button icon={<FilterOutlined />}>Filter</Button>
                <Button icon={<DownloadOutlined />}>Export</Button>
              </Space>
            }
          >
            <Row gutter={[24, 24]} style={{ marginBottom: 24 }}>
              <Col xs={24} sm={8}>
                <Card>
                  <Statistic 
                    title="Compliant Drivers" 
                    value={68} 
                    suffix="%"
                    valueStyle={{ color: '#34c759' }}
                  />
                  <Progress percent={68} showInfo={false} strokeColor="#34c759" />
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card>
                  <Statistic 
                    title="In Progress" 
                    value={22} 
                    suffix="%"
                    valueStyle={{ color: '#ff9500' }}
                  />
                  <Progress percent={22} showInfo={false} strokeColor="#ff9500" />
                </Card>
              </Col>
              <Col xs={24} sm={8}>
                <Card>
                  <Statistic 
                    title="Non-Compliant" 
                    value={10} 
                    suffix="%"
                    valueStyle={{ color: '#ff3b30' }}
                  />
                  <Progress percent={10} showInfo={false} strokeColor="#ff3b30" />
                </Card>
              </Col>
            </Row>

            <Table 
              columns={driverColumns} 
              dataSource={driverTrainingData} 
              pagination={{ pageSize: 5 }}
            />
          </Card>
        </TabPane>

        <TabPane 
          tab={
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <CalendarOutlined style={{ fontSize: '18px', marginRight: '16px' }} />
              <span>Training Schedule</span>
            </span>
          } 
          key="3"
        >
          <Card title="Training Calendar">
            <Calendar />
          </Card>
        </TabPane>

        <TabPane 
          tab={
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <ReadOutlined style={{ fontSize: '18px', marginRight: '16px' }} />
              <span>Training Resources</span>
            </span>
          } 
          key="4"
        >
          <Card title="Training Materials and Resources">
            <List
              itemLayout="horizontal"
              dataSource={[
                {
                  title: 'Defensive Driving Manual',
                  type: 'PDF Document',
                  size: '4.2 MB',
                  updated: 'May 10, 2025',
                },
                {
                  title: 'Safety Regulations Handbook',
                  type: 'PDF Document',
                  size: '6.8 MB',
                  updated: 'April 22, 2025',
                },
                {
                  title: 'Emergency Response Procedures',
                  type: 'Video Tutorial',
                  size: '256 MB',
                  updated: 'May 5, 2025',
                },
                {
                  title: 'Vehicle Inspection Checklist',
                  type: 'Excel Spreadsheet',
                  size: '1.2 MB',
                  updated: 'May 18, 2025',
                },
                {
                  title: 'Fatigue Management Guide',
                  type: 'PDF Document',
                  size: '3.5 MB',
                  updated: 'March 30, 2025',
                },
              ]}
              renderItem={item => (
                <List.Item
                  actions={[
                    <Button type="link" icon={<DownloadOutlined />}>Download</Button>,
                    <Button type="link" icon={<EyeOutlined />}>Preview</Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar icon={<FileOutlined />} style={{ backgroundColor: '#0071e3' }} />}
                    title={<a>{item.title}</a>}
                    description={
                      <Space direction="vertical" size={0}>
                        <Text type="secondary">{item.type} • {item.size}</Text>
                        <Text type="secondary">Last updated: {item.updated}</Text>
                      </Space>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </TabPane>
      </Tabs>

      <Modal
        title="Add New Training Course"
        visible={visible}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>Cancel</Button>,
          <Button key="submit" type="primary" onClick={handleSubmit}>Add Course</Button>,
        ]}
        width={700}
      >
        <Form
          form={form}
          layout="vertical"
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="title"
                label="Course Title"
                rules={[{ required: true, message: 'Please enter course title' }]}
              >
                <Input placeholder="Enter course title" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="type"
                label="Course Type"
                rules={[{ required: true, message: 'Please select course type' }]}
              >
                <Select placeholder="Select course type">
                  <Option value="Online Course">Online Course</Option>
                  <Option value="Video Training">Video Training</Option>
                  <Option value="Practical Workshop">Practical Workshop</Option>
                  <Option value="Simulation Training">Simulation Training</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="duration"
                label="Duration"
                rules={[{ required: true, message: 'Please enter duration' }]}
              >
                <Input placeholder="e.g. 4 hours" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="status"
                label="Status"
                rules={[{ required: true, message: 'Please select status' }]}
              >
                <Select placeholder="Select status">
                  <Option value="Active">Active</Option>
                  <Option value="Pending">Pending</Option>
                  <Option value="Inactive">Inactive</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="description"
            label="Course Description"
            rules={[{ required: true, message: 'Please enter course description' }]}
          >
            <TextArea rows={4} placeholder="Enter course description" />
          </Form.Item>
          <Form.Item
            name="materials"
            label="Course Materials"
          >
            <Upload>
              <Button icon={<UploadOutlined />}>Upload Files</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TrainingManagement;
