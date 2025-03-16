import React, { useState } from 'react';
import { Row, Col, Card, Typography, Table, Button, Select, Progress, Tag, Space, Tabs, List, Avatar, Statistic } from 'antd';
import { PlusOutlined, FileOutlined, VideoCameraOutlined, BookOutlined, CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;
const { Option } = Select;
const { TabPane } = Tabs;

const TrainingManagement = () => {
  const [trainingStatus, setTrainingStatus] = useState('all');

  // 培训课程数据
  const coursesColumns = [
    {
      title: '课程ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '课程名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      render: (type) => {
        const icons = {
          '视频': <VideoCameraOutlined />,
          '文档': <FileOutlined />,
          '实操': <BookOutlined />,
        };
        return (
          <Space>
            {icons[type]}
            {type}
          </Space>
        );
      },
    },
    {
      title: '时长',
      dataIndex: 'duration',
      key: 'duration',
    },
    {
      title: '完成人数',
      dataIndex: 'completedCount',
      key: 'completedCount',
      render: (count, record) => `${count}/${record.totalCount}`,
    },
    {
      title: '完成率',
      dataIndex: 'completionRate',
      key: 'completionRate',
      render: (rate) => <Progress percent={rate} size="small" />,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = status === '进行中' ? 'processing' : status === '已完成' ? 'success' : 'default';
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <Space>
          <Button type="link" size="small">详情</Button>
          <Button type="link" size="small">分配</Button>
        </Space>
      ),
    },
  ];

  const coursesData = [
    {
      key: '1',
      id: 'T-10045',
      name: '安全驾驶基础知识',
      type: '视频',
      duration: '2小时',
      completedCount: 42,
      totalCount: 50,
      completionRate: 84,
      status: '进行中',
    },
    {
      key: '2',
      id: 'T-10046',
      name: '急刹车与急转弯避免技巧',
      type: '视频',
      duration: '1.5小时',
      completedCount: 38,
      totalCount: 50,
      completionRate: 76,
      status: '进行中',
    },
    {
      key: '3',
      id: 'T-10047',
      name: '安全法规解读',
      type: '文档',
      duration: '3小时',
      completedCount: 50,
      totalCount: 50,
      completionRate: 100,
      status: '已完成',
    },
    {
      key: '4',
      id: 'T-10048',
      name: '疲劳驾驶识别与预防',
      type: '视频',
      duration: '1小时',
      completedCount: 35,
      totalCount: 50,
      completionRate: 70,
      status: '进行中',
    },
    {
      key: '5',
      id: 'T-10049',
      name: '紧急情况处理实操',
      type: '实操',
      duration: '4小时',
      completedCount: 28,
      totalCount: 50,
      completionRate: 56,
      status: '进行中',
    },
  ];

  // 驾驶员培训状态数据
  const driverTrainingColumns = [
    {
      title: '驾驶员ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '安全评分',
      dataIndex: 'safetyScore',
      key: 'safetyScore',
      sorter: (a, b) => a.safetyScore - b.safetyScore,
      render: (score) => {
        let color = score >= 90 ? '#34c759' : score >= 80 ? '#ff9500' : '#ff3b30';
        return <Text strong style={{ color }}>{score}</Text>;
      },
    },
    {
      title: '已完成课程',
      dataIndex: 'completedCourses',
      key: 'completedCourses',
      render: (count, record) => `${count}/${record.totalCourses}`,
    },
    {
      title: '培训进度',
      dataIndex: 'trainingProgress',
      key: 'trainingProgress',
      render: (progress) => <Progress percent={progress} size="small" />,
    },
    {
      title: '培训状态',
      dataIndex: 'trainingStatus',
      key: 'trainingStatus',
      render: (status) => {
        let color = status === '已完成' ? 'success' : status === '进行中' ? 'processing' : 'warning';
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: '最近培训',
      dataIndex: 'lastTraining',
      key: 'lastTraining',
    },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <Space>
          <Button type="link" size="small">详情</Button>
          <Button type="link" size="small">分配课程</Button>
        </Space>
      ),
    },
  ];

  const driverTrainingData = [
    {
      key: '1',
      id: 'D-10045',
      name: '张明',
      safetyScore: 94,
      completedCourses: 5,
      totalCourses: 5,
      trainingProgress: 100,
      trainingStatus: '已完成',
      lastTraining: '2025-03-10',
    },
    {
      key: '2',
      id: 'D-10078',
      name: '李强',
      safetyScore: 87,
      completedCourses: 4,
      totalCourses: 5,
      trainingProgress: 80,
      trainingStatus: '进行中',
      lastTraining: '2025-03-12',
    },
    {
      key: '3',
      id: 'D-10023',
      name: '王伟',
      safetyScore: 76,
      completedCourses: 3,
      totalCourses: 5,
      trainingProgress: 60,
      trainingStatus: '进行中',
      lastTraining: '2025-03-08',
    },
    {
      key: '4',
      id: 'D-10089',
      name: '赵静',
      safetyScore: 92,
      completedCourses: 5,
      totalCourses: 5,
      trainingProgress: 100,
      trainingStatus: '已完成',
      lastTraining: '2025-03-15',
    },
    {
      key: '5',
      id: 'D-10056',
      name: '刘洋',
      safetyScore: 68,
      completedCourses: 2,
      totalCourses: 5,
      trainingProgress: 40,
      trainingStatus: '进行中',
      lastTraining: '2025-03-05',
    },
  ];

  // 培训计划列表数据
  const trainingPlanData = [
    {
      title: '新司机入职培训计划',
      description: '针对新入职司机的安全驾驶基础培训，包含安全法规、基本驾驶技能和紧急情况处理。',
      courses: 5,
      duration: '12小时',
      status: '进行中',
    },
    {
      title: '季度安全复训计划',
      description: '每季度对所有司机进行安全意识和技能的复训，强化安全驾驶理念。',
      courses: 3,
      duration: '6小时',
      status: '即将开始',
    },
    {
      title: '高风险司机专项培训',
      description: '针对安全评分低于80分的司机进行的专项培训，重点关注其薄弱环节。',
      courses: 4,
      duration: '8小时',
      status: '进行中',
    },
    {
      title: '新技术应用培训',
      description: '介绍新的安全驾驶辅助技术和系统使用方法，提高驾驶效率和安全性。',
      courses: 2,
      duration: '4小时',
      status: '已完成',
    },
  ];

  return (
    <div className="training-management-container">
      <Title level={3}>培训管理</Title>
      <Text type="secondary" style={{ marginBottom: '24px', display: 'block' }}>
        管理司机安全培训课程、计划和进度，提升整体安全驾驶水平
      </Text>
      
      {/* 控制面板 */}
      <Card style={{ marginBottom: '24px' }}>
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} md={8}>
            <Text strong>培训状态：</Text>
            <Select 
              style={{ width: '80%', marginLeft: '10px' }} 
              defaultValue="all"
              onChange={(value) => setTrainingStatus(value)}
            >
              <Option value="all">所有状态</Option>
              <Option value="inProgress">进行中</Option>
              <Option value="completed">已完成</Option>
              <Option value="notStarted">未开始</Option>
            </Select>
          </Col>
          <Col xs={24} md={8}>
            <Text strong>课程类型：</Text>
            <Select style={{ width: '80%', marginLeft: '10px' }} defaultValue="all">
              <Option value="all">所有类型</Option>
              <Option value="video">视频课程</Option>
              <Option value="document">文档课程</Option>
              <Option value="practical">实操课程</Option>
            </Select>
          </Col>
          <Col xs={24} md={8} style={{ textAlign: 'right' }}>
            <Button type="primary" icon={<PlusOutlined />}>新增培训课程</Button>
          </Col>
        </Row>
      </Card>

      {/* 培训内容标签页 */}
      <Card style={{ marginBottom: '24px' }}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="培训课程" key="1">
            <Table 
              columns={coursesColumns} 
              dataSource={coursesData} 
              pagination={{ pageSize: 5 }}
            />
          </TabPane>
          <TabPane tab="驾驶员培训状态" key="2">
            <Table 
              columns={driverTrainingColumns} 
              dataSource={driverTrainingData} 
              pagination={{ pageSize: 5 }}
            />
          </TabPane>
          <TabPane tab="培训计划" key="3">
            <List
              itemLayout="horizontal"
              dataSource={trainingPlanData}
              renderItem={item => (
                <List.Item
                  actions={[
                    <Button type="link">查看详情</Button>,
                    <Button type="link">编辑</Button>
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar icon={<BookOutlined />} style={{ backgroundColor: '#0071e3' }} />}
                    title={<Text strong>{item.title}</Text>}
                    description={
                      <>
                        <Paragraph>{item.description}</Paragraph>
                        <Space>
                          <Text type="secondary">课程数: {item.courses}</Text>
                          <Text type="secondary">总时长: {item.duration}</Text>
                          <Tag color={item.status === '已完成' ? 'success' : item.status === '进行中' ? 'processing' : 'default'}>
                            {item.status === '已完成' ? <CheckCircleOutlined /> : <ClockCircleOutlined />} {item.status}
                          </Tag>
                        </Space>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </TabPane>
        </Tabs>
      </Card>

      {/* 培训效果分析 */}
      <Card title="培训效果分析">
        <Row gutter={[24, 24]}>
          <Col xs={24} md={8}>
            <Card type="inner" title="安全评分提升">
              <Statistic 
                title="平均提升" 
                value={12.5} 
                precision={1} 
                valueStyle={{ color: '#34c759' }} 
                suffix="%" 
              />
              <Text type="secondary">完成培训后司机安全评分平均提升幅度</Text>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card type="inner" title="事故率降低">
              <Statistic 
                title="降低比例" 
                value={18.3} 
                precision={1} 
                valueStyle={{ color: '#34c759' }} 
                suffix="%" 
              />
              <Text type="secondary">完成培训后司机事故发生率降低比例</Text>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card type="inner" title="投诉率降低">
              <Statistic 
                title="降低比例" 
                value={15.7} 
                precision={1} 
                valueStyle={{ color: '#34c759' }} 
                suffix="%" 
              />
              <Text type="secondary">完成培训后乘客投诉率降低比例</Text>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default TrainingManagement;
