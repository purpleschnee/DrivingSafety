import React, { useState } from 'react';
import { Row, Col, Card, Typography, Table, Button, Select, DatePicker, Input, Tag, Space, Tabs, Avatar, Rate, Statistic, Progress } from 'antd';
import { SearchOutlined, FilterOutlined, DownloadOutlined, UserOutlined, CarOutlined, ExclamationCircleOutlined, CheckCircleOutlined, StarOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
import { Line, Column, Radar, Gauge } from '@ant-design/charts';

const { Title, Text, Paragraph } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;
const { TabPane } = Tabs;

const DriverAnalytics = () => {
  const [selectedDriver, setSelectedDriver] = useState('all');
  const [activeTab, setActiveTab] = useState('1');

  // 驾驶员详细数据
  const driversColumns = [
    {
      title: '司机ID',
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
      title: '急刹车',
      dataIndex: 'hardBraking',
      key: 'hardBraking',
      sorter: (a, b) => a.hardBraking - b.hardBraking,
    },
    {
      title: '急加速',
      dataIndex: 'rapidAcceleration',
      key: 'rapidAcceleration',
      sorter: (a, b) => a.rapidAcceleration - b.rapidAcceleration,
    },
    {
      title: '急转弯',
      dataIndex: 'hardTurning',
      key: 'hardTurning',
      sorter: (a, b) => a.hardTurning - b.hardTurning,
    },
    {
      title: '超速',
      dataIndex: 'speeding',
      key: 'speeding',
      sorter: (a, b) => a.speeding - b.speeding,
    },
    {
      title: '乘客评分',
      dataIndex: 'passengerRating',
      key: 'passengerRating',
      sorter: (a, b) => a.passengerRating - b.passengerRating,
      render: (rating) => {
        let color = rating >= 4.5 ? '#34c759' : rating >= 4.0 ? '#ff9500' : '#ff3b30';
        return <Text strong style={{ color }}>{rating}</Text>;
      },
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
      title: '操作',
      key: 'action',
      render: () => (
        <Space>
          <Button type="link" size="small">详情</Button>
          <Button type="link" size="small">培训</Button>
        </Space>
      ),
    },
  ];

  const driversData = [
    {
      key: '1',
      id: 'D-10045',
      name: '张明',
      safetyScore: 94,
      hardBraking: 2,
      rapidAcceleration: 1,
      hardTurning: 0,
      speeding: 1,
      passengerRating: 4.8,
      trainingStatus: '已完成',
    },
    {
      key: '2',
      id: 'D-10078',
      name: '李强',
      safetyScore: 87,
      hardBraking: 5,
      rapidAcceleration: 3,
      hardTurning: 2,
      speeding: 1,
      passengerRating: 4.5,
      trainingStatus: '已完成',
    },
    {
      key: '3',
      id: 'D-10023',
      name: '王伟',
      safetyScore: 76,
      hardBraking: 8,
      rapidAcceleration: 6,
      hardTurning: 4,
      speeding: 3,
      passengerRating: 3.9,
      trainingStatus: '进行中',
    },
    {
      key: '4',
      id: 'D-10089',
      name: '赵静',
      safetyScore: 92,
      hardBraking: 3,
      rapidAcceleration: 2,
      hardTurning: 1,
      speeding: 0,
      passengerRating: 4.7,
      trainingStatus: '已完成',
    },
    {
      key: '5',
      id: 'D-10056',
      name: '刘洋',
      safetyScore: 68,
      hardBraking: 12,
      rapidAcceleration: 8,
      hardTurning: 5,
      speeding: 7,
      passengerRating: 3.6,
      trainingStatus: '未开始',
    },
    {
      key: '6',
      id: 'D-10112',
      name: '陈晓',
      safetyScore: 89,
      hardBraking: 4,
      rapidAcceleration: 3,
      hardTurning: 2,
      speeding: 1,
      passengerRating: 4.6,
      trainingStatus: '已完成',
    },
    {
      key: '7',
      id: 'D-10098',
      name: '杨华',
      safetyScore: 81,
      hardBraking: 6,
      rapidAcceleration: 4,
      hardTurning: 3,
      speeding: 2,
      passengerRating: 4.2,
      trainingStatus: '进行中',
    },
  ];

  // 驾驶行为雷达图数据
  const driverBehaviorData = [
    { metric: '安全驾驶', driver: '张明', value: 94 },
    { metric: '平稳行驶', driver: '张明', value: 92 },
    { metric: '转弯技巧', driver: '张明', value: 90 },
    { metric: '车距控制', driver: '张明', value: 88 },
    { metric: '车速控制', driver: '张明', value: 95 },
    { metric: '路况应对', driver: '张明', value: 91 },
    { metric: '安全驾驶', driver: '行业平均', value: 82 },
    { metric: '平稳行驶', driver: '行业平均', value: 78 },
    { metric: '转弯技巧', driver: '行业平均', value: 80 },
    { metric: '车距控制', driver: '行业平均', value: 76 },
    { metric: '车速控制', driver: '行业平均', value: 84 },
    { metric: '路况应对', driver: '行业平均', value: 79 },
  ];

  // 驾驶行为雷达图配置
  const driverBehaviorConfig = {
    data: driverBehaviorData,
    xField: 'metric',
    yField: 'value',
    seriesField: 'driver',
    meta: {
      value: {
        min: 0,
        max: 100,
      },
    },
    xAxis: {
      line: null,
      tickLine: null,
    },
    yAxis: {
      label: false,
      grid: {
        line: {
          style: {
            lineDash: null,
          },
        },
      },
    },
    point: {},
    area: {},
  };

  // 乘客评价数据
  const passengerFeedbackData = [
    { id: 'F-2025', passenger: '乘客152***890', date: '2025-03-15', rating: 5, comment: '司机驾驶非常平稳，全程感觉很安全，非常满意。' },
    { id: 'F-2024', passenger: '乘客138***456', date: '2025-03-14', rating: 4, comment: '整体不错，但在拐弯处速度有点快。' },
    { id: 'F-2023', passenger: '乘客177***234', date: '2025-03-12', rating: 5, comment: '司机技术很好，即使在拥堵路段也能平稳驾驶。' },
    { id: 'F-2022', passenger: '乘客135***789', date: '2025-03-10', rating: 5, comment: '非常专业的驾驶员，让人感到安心。' },
    { id: 'F-2021', passenger: '乘客186***567', date: '2025-03-08', rating: 4, comment: '总体满意，但刹车有时候有点急。' },
  ];

  // 乘客评价列配置
  const passengerFeedbackColumns = [
    {
      title: '反馈ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '乘客',
      dataIndex: 'passenger',
      key: 'passenger',
    },
    {
      title: '日期',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '评分',
      dataIndex: 'rating',
      key: 'rating',
      render: (rating) => <Rate disabled defaultValue={rating} />,
    },
    {
      title: '评价',
      dataIndex: 'comment',
      key: 'comment',
      ellipsis: true,
    },
  ];

  // 安全评分仪表盘配置
  const safetyGaugeConfig = {
    percent: 0.94,
    range: {
      color: '#30BF78',
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
    axis: {
      label: {
        formatter(v) {
          return Number(v) * 100;
        },
      },
      subTickLine: {
        count: 3,
      },
    },
    statistic: {
      content: {
        formatter: () => '94分',
        style: {
          fontSize: '30px',
          lineHeight: '30px',
          color: '#30BF78',
          fontWeight: 'bold',
        },
      },
    },
  };

  // 安全评分趋势配置
  const safetyTrendConfig = {
    data: [
      { month: '2025-01', score: 88 },
      { month: '2025-02', score: 90 },
      { month: '2025-03', score: 89 },
      { month: '2025-04', score: 92 },
      { month: '2025-05', score: 94 },
      { month: '2025-06', score: 94 },
    ],
    xField: 'month',
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
  };

  return (
    <div className="driver-analytics-container">
      <Title level={3}>驾驶员安全分析</Title>
      <Text type="secondary" style={{ marginBottom: '24px', display: 'block' }}>
        深入分析驾驶员安全表现和行为模式
      </Text>
      
      {/* 搜索和筛选区域 */}
      <Card style={{ marginBottom: '24px' }}>
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} sm={8} md={6} lg={4}>
            <Text strong>驾驶员：</Text>
            <Select
              style={{ width: '100%', marginTop: '8px' }}
              placeholder="选择驾驶员"
              value={selectedDriver}
              onChange={setSelectedDriver}
            >
              <Option value="all">全部驾驶员</Option>
              <Option value="D-10045">张明 (D-10045)</Option>
              <Option value="D-10078">李强 (D-10078)</Option>
              <Option value="D-10023">王伟 (D-10023)</Option>
              <Option value="D-10089">赵静 (D-10089)</Option>
              <Option value="D-10056">刘洋 (D-10056)</Option>
            </Select>
          </Col>
          <Col xs={24} sm={8} md={6} lg={5}>
            <Text strong>时间范围：</Text>
            <RangePicker style={{ width: '100%', marginTop: '8px' }} />
          </Col>
          <Col xs={24} sm={8} md={6} lg={5}>
            <Text strong>安全评分：</Text>
            <Select
              style={{ width: '100%', marginTop: '8px' }}
              placeholder="安全评分范围"
              defaultValue="all"
            >
              <Option value="all">全部</Option>
              <Option value="90-100">优秀 (90-100)</Option>
              <Option value="80-89">良好 (80-89)</Option>
              <Option value="70-79">一般 (70-79)</Option>
              <Option value="0-69">需改进 (0-69)</Option>
            </Select>
          </Col>
          <Col xs={24} sm={8} md={6} lg={4}>
            <Text strong>培训状态：</Text>
            <Select
              style={{ width: '100%', marginTop: '8px' }}
              placeholder="培训状态"
              defaultValue="all"
            >
              <Option value="all">全部</Option>
              <Option value="completed">已完成</Option>
              <Option value="in-progress">进行中</Option>
              <Option value="not-started">未开始</Option>
            </Select>
          </Col>
          <Col xs={24} sm={8} md={6} lg={6}>
            <Input.Search
              placeholder="搜索驾驶员姓名或ID"
              prefix={<SearchOutlined />}
              style={{ marginTop: '30px' }}
            />
          </Col>
        </Row>
        <Row justify="end" style={{ marginTop: '16px' }}>
          <Space>
            <Button icon={<FilterOutlined />}>重置筛选</Button>
            <Button type="primary" icon={<SearchOutlined />}>搜索</Button>
            <Button icon={<DownloadOutlined />}>导出数据</Button>
          </Space>
        </Row>
      </Card>

      {/* 驾驶员详细信息 - 仅在选择特定驾驶员时显示 */}
      {selectedDriver !== 'all' && (
        <Card style={{ marginBottom: '24px' }}>
          <Tabs defaultActiveKey="1" onChange={setActiveTab}>
            <TabPane tab="驾驶员概览" key="1">
              <Row gutter={[24, 24]}>
                <Col xs={24} md={6}>
                  <div style={{ textAlign: 'center', padding: '20px' }}>
                    <Avatar size={100} icon={<UserOutlined />} />
                    <Title level={4} style={{ marginTop: '16px', marginBottom: '4px' }}>张明</Title>
                    <Text type="secondary">ID: D-10045</Text>
                    <div style={{ margin: '16px 0' }}>
                      <Tag color="green">优秀驾驶员</Tag>
                      <Tag color="blue">5年经验</Tag>
                    </div>
                    <Button type="primary">查看完整档案</Button>
                  </div>
                </Col>
                <Col xs={24} md={18}>
                  <Row gutter={[24, 24]}>
                    <Col xs={24} sm={8}>
                      <Card bordered={false}>
                        <Statistic
                          title="安全评分"
                          value={94}
                          suffix="/ 100"
                          valueStyle={{ color: '#34c759' }}
                        />
                        <Text type="success">
                          <ArrowUpOutlined /> 较上月提升2分
                        </Text>
                      </Card>
                    </Col>
                    <Col xs={24} sm={8}>
                      <Card bordered={false}>
                        <Statistic
                          title="乘客评分"
                          value={4.8}
                          suffix="/ 5"
                          valueStyle={{ color: '#5ac8fa' }}
                          prefix={<StarOutlined />}
                        />
                        <Text type="secondary">基于128次评价</Text>
                      </Card>
                    </Col>
                    <Col xs={24} sm={8}>
                      <Card bordered={false}>
                        <Statistic
                          title="安全事件"
                          value={4}
                          valueStyle={{ color: '#ff9500' }}
                          prefix={<ExclamationCircleOutlined />}
                        />
                        <Text type="success">
                          <ArrowDownOutlined /> 较上月减少3次
                        </Text>
                      </Card>
                    </Col>
                  </Row>
                  <Row style={{ marginTop: '24px' }}>
                    <Col span={24}>
                      <Card bordered={false} title="驾驶行为分析">
                        <Radar {...driverBehaviorConfig} />
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="安全评分详情" key="2">
              <Row gutter={[24, 24]}>
                <Col xs={24} md={8}>
                  <Card bordered={false} title="安全评分">
                    <div style={{ textAlign: 'center' }}>
                      <Gauge {...safetyGaugeConfig} />
                    </div>
                    <Paragraph style={{ marginTop: '16px' }}>
                      <Text strong>评分解释：</Text> 该驾驶员的安全评分处于优秀水平，高于行业平均水平12分。
                    </Paragraph>
                  </Card>
                </Col>
                <Col xs={24} md={16}>
                  <Card bordered={false} title="安全评分历史趋势">
                    <Line {...safetyTrendConfig} />
                  </Card>
                </Col>
                <Col xs={24}>
                  <Card bordered={false} title="安全事件明细">
                    <Table 
                      columns={[
                        { title: '日期', dataIndex: 'date', key: 'date' },
                        { title: '事件类型', dataIndex: 'type', key: 'type' },
                        { title: '位置', dataIndex: 'location', key: 'location' },
                        { title: '严重程度', dataIndex: 'severity', key: 'severity',
                          render: (severity) => {
                            let color = severity === '严重' ? '#ff3b30' : severity === '中度' ? '#ff9500' : '#34c759';
                            return <Text strong style={{ color }}>{severity}</Text>;
                          },
                        },
                        { title: '详情', key: 'action', render: () => <Button type="link" size="small">查看</Button> },
                      ]} 
                      dataSource={[
                        { key: '1', date: '2025-03-10', type: '急刹车', location: '中关村南大街', severity: '中度' },
                        { key: '2', date: '2025-03-05', type: '急转弯', location: '西直门外大街', severity: '轻度' },
                        { key: '3', date: '2025-02-28', type: '急加速', location: '朝阳路', severity: '轻度' },
                        { key: '4', date: '2025-02-15', type: '超速', location: '建国门外大街', severity: '中度' },
                      ]} 
                      pagination={false}
                    />
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="乘客反馈" key="3">
              <Row gutter={[24, 24]}>
                <Col xs={24} md={8}>
                  <Card bordered={false}>
                    <div style={{ textAlign: 'center', padding: '20px' }}>
                      <Title level={1} style={{ color: '#34c759' }}>4.8</Title>
                      <Rate disabled defaultValue={4.8} allowHalf />
                      <Title level={5}>乘客满意度评分</Title>
                      <Text type="secondary">基于128次乘客评价</Text>
                    </div>
                    <Row gutter={[8, 8]} style={{ marginTop: '20px' }}>
                      <Col span={8}>5星: <Text strong>85%</Text></Col>
                      <Col span={16}><Progress percent={85} showInfo={false} strokeColor="#34c759" /></Col>
                      <Col span={8}>4星: <Text strong>12%</Text></Col>
                      <Col span={16}><Progress percent={12} showInfo={false} strokeColor="#5ac8fa" /></Col>
                      <Col span={8}>3星: <Text strong>3%</Text></Col>
                      <Col span={16}><Progress percent={3} showInfo={false} strokeColor="#ff9500" /></Col>
                      <Col span={8}>2星: <Text strong>0%</Text></Col>
                      <Col span={16}><Progress percent={0} showInfo={false} strokeColor="#ff3b30" /></Col>
                      <Col span={8}>1星: <Text strong>0%</Text></Col>
                      <Col span={16}><Progress percent={0} showInfo={false} strokeColor="#ff3b30" /></Col>
                    </Row>
                  </Card>
                </Col>
                <Col xs={24} md={16}>
                  <Card bordered={false} title="最近乘客评价">
                    <Table 
                      columns={passengerFeedbackColumns} 
                      dataSource={passengerFeedbackData} 
                      pagination={false}
                    />
                  </Card>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="培训记录" key="4">
              <Row gutter={[24, 24]}>
                <Col xs={24}>
                  <Card bordered={false} title="培训完成情况">
                    <Table 
                      columns={[
                        { title: '培训课程', dataIndex: 'course', key: 'course' },
                        { title: '完成日期', dataIndex: 'completionDate', key: 'completionDate' },
                        { title: '得分', dataIndex: 'score', key: 'score' },
                        { title: '状态', dataIndex: 'status', key: 'status',
                          render: (status) => {
                            let color = status === '已完成' ? 'success' : status === '进行中' ? 'processing' : 'warning';
                            return <Tag color={color}>{status}</Tag>;
                          },
                        },
                        { title: '证书', key: 'certificate', render: (_, record) => record.status === '已完成' ? <Button type="link" size="small">查看证书</Button> : '-' },
                      ]} 
                      dataSource={[
                        { key: '1', course: '安全驾驶基础', completionDate: '2025-01-15', score: 95, status: '已完成' },
                        { key: '2', course: '应急情况处理', completionDate: '2025-02-10', score: 92, status: '已完成' },
                        { key: '3', course: '乘客服务与沟通', completionDate: '2025-03-05', score: 98, status: '已完成' },
                        { key: '4', course: '高级安全驾驶技巧', completionDate: '-', score: '-', status: '进行中' },
                      ]} 
                      pagination={false}
                    />
                  </Card>
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        </Card>
      )}

      {/* 驾驶员列表 */}
      <Card title="驾驶员安全表现列表">
        <Table 
          columns={driversColumns} 
          dataSource={driversData} 
          pagination={{ pageSize: 10 }}
        />
      </Card>
    </div>
  );
};

export default DriverAnalytics;
