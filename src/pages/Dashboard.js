import React from 'react';
import { Row, Col, Card, Statistic, Progress, Typography, Table, Button } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, CarOutlined, ExclamationCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Line, Pie, Column } from '@ant-design/charts';

const { Title, Text } = Typography;

const Dashboard = () => {
  // 安全评分数据
  const safetyScoreData = [
    { date: '2025-01', score: 78 },
    { date: '2025-02', score: 82 },
    { date: '2025-03', score: 85 },
    { date: '2025-04', score: 83 },
    { date: '2025-05', score: 88 },
    { date: '2025-06', score: 91 },
  ];

  // 安全评分图表配置
  const safetyScoreConfig = {
    data: safetyScoreData,
    height: 250,
    xField: 'date',
    yField: 'score',
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
      stroke: '#0071e3',
      lineWidth: 3,
    },
    yAxis: {
      min: 60,
      max: 100,
    },
  };

  // 事件类型分布数据
  const incidentTypeData = [
    { type: '急刹车', value: 38 },
    { type: '急加速', value: 25 },
    { type: '急转弯', value: 18 },
    { type: '超速', value: 15 },
    { type: '疲劳驾驶', value: 4 },
  ];

  // 事件类型分布图表配置
  const incidentTypeConfig = {
    data: incidentTypeData,
    height: 250,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
  };

  // 安全评分分布数据
  const safetyScoreDistributionData = [
    { score: '60-70', count: 12, color: '#ff3b30' },
    { score: '71-80', count: 28, color: '#ff9500' },
    { score: '81-90', count: 45, color: '#5ac8fa' },
    { score: '91-100', count: 15, color: '#34c759' },
  ];

  // 安全评分分布图表配置
  const safetyScoreDistributionConfig = {
    data: safetyScoreDistributionData,
    xField: 'score',
    yField: 'count',
    color: ({ score }) => {
      const item = safetyScoreDistributionData.find(d => d.score === score);
      return item ? item.color : '#5ac8fa';
    },
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.8,
      },
    },
    meta: {
      score: { alias: '安全评分范围' },
      count: { alias: '驾驶员数量' },
    },
  };

  // 实时安全警报数据
  const realtimeAlertsData = [
    { id: 'A-1023', driver: 'D-10056', name: '刘洋', event: '急刹车', location: '中关村南大街', time: '10分钟前', severity: '中度' },
    { id: 'A-1022', driver: 'D-10023', name: '王伟', event: '超速', location: '西直门外大街', time: '25分钟前', severity: '严重' },
    { id: 'A-1021', driver: 'D-10078', name: '李强', event: '急转弯', location: '朝阳路', time: '42分钟前', severity: '轻度' },
    { id: 'A-1020', driver: 'D-10112', name: '陈晓', event: '急加速', location: '建国门外大街', time: '1小时前', severity: '中度' },
  ];

  // 实时安全警报列配置
  const realtimeAlertsColumns = [
    {
      title: '警报ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '司机',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => `${text} (${record.driver})`,
    },
    {
      title: '事件类型',
      dataIndex: 'event',
      key: 'event',
    },
    {
      title: '位置',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: '时间',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '严重程度',
      dataIndex: 'severity',
      key: 'severity',
      render: (severity) => {
        let color = severity === '严重' ? '#ff3b30' : severity === '中度' ? '#ff9500' : '#34c759';
        return <Text strong style={{ color }}>{severity}</Text>;
      },
    },
    {
      title: '操作',
      key: 'action',
      render: () => <Button type="link" size="small">处理</Button>,
    },
  ];

  // 司机表现数据
  const driverPerformanceColumns = [
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
      title: '事件数',
      dataIndex: 'incidents',
      key: 'incidents',
      sorter: (a, b) => a.incidents - b.incidents,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        if (status === '优秀') {
          return <Text type="success"><CheckCircleOutlined /> {status}</Text>;
        } else if (status === '需要关注') {
          return <Text type="warning"><ExclamationCircleOutlined /> {status}</Text>;
        } else {
          return <Text type="danger"><ExclamationCircleOutlined /> {status}</Text>;
        }
      },
    },
    {
      title: '操作',
      key: 'action',
      render: () => <Button type="link" size="small">查看详情</Button>,
    },
  ];

  const driverPerformanceData = [
    {
      key: '1',
      id: 'D-10045',
      name: '张明',
      safetyScore: 94,
      incidents: 2,
      status: '优秀',
    },
    {
      key: '2',
      id: 'D-10078',
      name: '李强',
      safetyScore: 87,
      incidents: 5,
      status: '良好',
    },
    {
      key: '3',
      id: 'D-10023',
      name: '王伟',
      safetyScore: 76,
      incidents: 12,
      status: '需要关注',
    },
    {
      key: '4',
      id: 'D-10089',
      name: '赵静',
      safetyScore: 92,
      incidents: 3,
      status: '优秀',
    },
    {
      key: '5',
      id: 'D-10056',
      name: '刘洋',
      safetyScore: 68,
      incidents: 18,
      status: '需要培训',
    },
  ];

  return (
    <div className="dashboard-container">
      <Title level={3}>安全驾驶数据概览</Title>
      <Text type="secondary" style={{ marginBottom: '24px', display: 'block' }}>
        实时监控驾驶员安全表现和关键指标
      </Text>
      
      {/* 统计卡片 */}
      <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="平均安全评分"
              value={85.7}
              precision={1}
              valueStyle={{ color: '#0071e3' }}
              prefix={<CarOutlined />}
              suffix="分"
            />
            <div style={{ marginTop: '10px' }}>
              <Text type="success">
                <ArrowUpOutlined /> 3.2% 较上月
              </Text>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="安全事件总数"
              value={247}
              valueStyle={{ color: '#ff9500' }}
              prefix={<ExclamationCircleOutlined />}
            />
            <div style={{ marginTop: '10px' }}>
              <Text type="success">
                <ArrowDownOutlined /> 8.5% 较上月
              </Text>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="培训完成率"
              value={92.3}
              precision={1}
              valueStyle={{ color: '#34c759' }}
              suffix="%"
            />
            <div style={{ marginTop: '10px' }}>
              <Progress percent={92.3} showInfo={false} strokeColor="#34c759" />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="需要关注的司机"
              value={8}
              valueStyle={{ color: '#ff3b30' }}
            />
            <div style={{ marginTop: '10px' }}>
              <Text type="danger">
                <ArrowUpOutlined /> 2 较上月
              </Text>
            </div>
          </Card>
        </Col>
      </Row>

      {/* 安全评分趋势和事件分布 */}
      <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
        <Col xs={24} lg={12}>
          <Card title="安全评分趋势">
            <Line {...safetyScoreConfig} />
          </Card>
        </Col>
        <Col xs={24} lg={12}>
          <Card title="事件类型分布">
            <Pie {...incidentTypeConfig} />
          </Card>
        </Col>
      </Row>

      {/* 安全评分分布 */}
      <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
        <Col xs={24}>
          <Card title="驾驶员安全评分分布" extra={<Button type="link">查看详情</Button>}>
            <Column {...safetyScoreDistributionConfig} />
          </Card>
        </Col>
      </Row>

      {/* 实时安全警报 */}
      <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
        <Col xs={24}>
          <Card 
            title="实时安全警报" 
            extra={<Button type="primary" ghost>查看全部警报</Button>}
          >
            <Table 
              columns={realtimeAlertsColumns} 
              dataSource={realtimeAlertsData} 
              pagination={false} 
              size="small"
            />
          </Card>
        </Col>
      </Row>

      {/* 司机表现表格 */}
      <Card title="司机安全表现排名" style={{ marginBottom: '24px' }}>
        <Table 
          columns={driverPerformanceColumns} 
          dataSource={driverPerformanceData} 
          pagination={false}
        />
      </Card>
    </div>
  );
};

export default Dashboard;
