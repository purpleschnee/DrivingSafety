import React, { useState } from 'react';
import { Row, Col, Card, Typography, Table, Button, Select, DatePicker, Tabs, Statistic, Progress, Space } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, DownloadOutlined } from '@ant-design/icons';
import { Line, Column, Radar, DualAxes } from '@ant-design/charts';

const { Title, Text } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;
const { TabPane } = Tabs;

const CompanyComparison = () => {
  const [comparisonType, setComparisonType] = useState('industry');

  // 公司对比数据
  const companyComparisonData = [
    { month: '2025-01', company: 85, industry: 78, competitor: 80 },
    { month: '2025-02', company: 87, industry: 79, competitor: 82 },
    { month: '2025-03', company: 89, industry: 80, competitor: 83 },
    { month: '2025-04', company: 88, industry: 81, competitor: 85 },
    { month: '2025-05', company: 91, industry: 82, competitor: 86 },
    { month: '2025-06', company: 93, industry: 83, competitor: 87 },
  ];

  // 公司对比图表配置
  const comparisonConfig = {
    data: companyComparisonData,
    height: 300,
    xField: 'month',
    yField: ['company', 'industry', 'competitor'],
    seriesField: 'type',
    yAxis: {
      min: 70,
      max: 100,
    },
    legend: {
      position: 'top',
    },
    smooth: true,
    animation: {
      appear: {
        animation: 'path-in',
        duration: 1000,
      },
    },
  };

  // 安全指标雷达图数据
  const safetyRadarData = [
    { metric: '安全评分', company: 93, industry: 83, competitor: 87 },
    { metric: '急刹车', company: 95, industry: 85, competitor: 90 },
    { metric: '急加速', company: 90, industry: 82, competitor: 85 },
    { metric: '急转弯', company: 92, industry: 80, competitor: 83 },
    { metric: '超速', company: 88, industry: 78, competitor: 80 },
    { metric: '疲劳驾驶', company: 94, industry: 84, competitor: 88 },
  ];

  // 转换雷达图数据格式
  const radarDataFormatted = [];
  safetyRadarData.forEach(item => {
    radarDataFormatted.push({ metric: item.metric, type: '我司', value: item.company });
    radarDataFormatted.push({ metric: item.metric, type: '行业平均', value: item.industry });
    radarDataFormatted.push({ metric: item.metric, type: '主要竞争对手', value: item.competitor });
  });

  // 安全指标雷达图配置
  const radarConfig = {
    data: radarDataFormatted,
    height: 300,
    xField: 'metric',
    yField: 'value',
    seriesField: 'type',
    meta: {
      value: {
        min: 70,
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
            lineDash: [4, 4],
          },
        },
      },
    },
    point: {
      size: 3,
    },
    area: {},
  };

  // 安全与成本双轴图数据
  const safetyAndCostData = [
    { month: '2025-01', safety: 85, cost: 120 },
    { month: '2025-02', safety: 87, cost: 115 },
    { month: '2025-03', safety: 89, cost: 110 },
    { month: '2025-04', safety: 88, cost: 112 },
    { month: '2025-05', safety: 91, cost: 105 },
    { month: '2025-06', safety: 93, cost: 100 },
  ];

  // 安全与成本双轴图配置
  const dualAxesConfig = {
    data: [safetyAndCostData, safetyAndCostData],
    height: 300,
    xField: 'month',
    yField: ['safety', 'cost'],
    geometryOptions: [
      {
        geometry: 'line',
        smooth: true,
        color: '#0071e3',
        lineStyle: {
          lineWidth: 3,
        },
      },
      {
        geometry: 'column',
        color: '#ff9500',
        columnWidthRatio: 0.4,
      },
    ],
    yAxis: {
      safety: {
        min: 70,
        max: 100,
        title: {
          text: '安全评分',
        },
      },
      cost: {
        min: 90,
        max: 130,
        title: {
          text: '运营成本指数',
        },
      },
    },
  };

  // 公司对比表格数据
  const comparisonColumns = [
    {
      title: '指标',
      dataIndex: 'metric',
      key: 'metric',
    },
    {
      title: '我司',
      dataIndex: 'company',
      key: 'company',
      sorter: (a, b) => a.company - b.company,
      render: (value, record) => {
        return (
          <Space direction="vertical" size={0}>
            <Text strong>{value}</Text>
            {record.companyChange > 0 ? (
              <Text type="success" style={{ fontSize: '12px' }}>
                <ArrowUpOutlined /> {record.companyChange}%
              </Text>
            ) : (
              <Text type="danger" style={{ fontSize: '12px' }}>
                <ArrowDownOutlined /> {Math.abs(record.companyChange)}%
              </Text>
            )}
          </Space>
        );
      },
    },
    {
      title: '行业平均',
      dataIndex: 'industry',
      key: 'industry',
      sorter: (a, b) => a.industry - b.industry,
    },
    {
      title: '差异',
      dataIndex: 'difference',
      key: 'difference',
      render: (_, record) => {
        const diff = record.company - record.industry;
        return diff > 0 ? (
          <Text type="success">+{diff}</Text>
        ) : (
          <Text type="danger">{diff}</Text>
        );
      },
    },
    {
      title: '主要竞争对手',
      dataIndex: 'competitor',
      key: 'competitor',
      sorter: (a, b) => a.competitor - b.competitor,
    },
    {
      title: '对比竞争对手',
      dataIndex: 'competitorDiff',
      key: 'competitorDiff',
      render: (_, record) => {
        const diff = record.company - record.competitor;
        return diff > 0 ? (
          <Text type="success">+{diff}</Text>
        ) : (
          <Text type="danger">{diff}</Text>
        );
      },
    },
    {
      title: '行业排名',
      dataIndex: 'rank',
      key: 'rank',
      render: (rank, record) => {
        return (
          <Space>
            <Text strong>{rank}</Text>
            <Text type="secondary">/ {record.total}</Text>
          </Space>
        );
      },
    },
  ];

  const comparisonData = [
    {
      key: '1',
      metric: '安全评分',
      company: 93,
      companyChange: 2.2,
      industry: 83,
      competitor: 87,
      rank: 2,
      total: 15,
    },
    {
      key: '2',
      metric: '事故率',
      company: 1.2,
      companyChange: -0.3,
      industry: 2.8,
      competitor: 2.1,
      rank: 1,
      total: 15,
    },
    {
      key: '3',
      metric: '培训完成率',
      company: 95,
      companyChange: 5.0,
      industry: 75,
      competitor: 82,
      rank: 1,
      total: 15,
    },
    {
      key: '4',
      metric: '乘客满意度',
      company: 4.8,
      companyChange: 0.2,
      industry: 4.2,
      competitor: 4.5,
      rank: 1,
      total: 15,
    },
    {
      key: '5',
      metric: '投诉率',
      company: 1.5,
      companyChange: -0.5,
      industry: 3.2,
      competitor: 2.4,
      rank: 2,
      total: 15,
    },
  ];

  return (
    <div className="company-comparison-container">
      <Title level={3}>公司对比分析</Title>
      <Text type="secondary" style={{ marginBottom: '24px', display: 'block' }}>
        将我司安全驾驶表现与行业平均水平和主要竞争对手进行对比分析
      </Text>
      
      {/* 控制面板 */}
      <Card style={{ marginBottom: '24px' }}>
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} md={8}>
            <Text strong>对比类型：</Text>
            <Select 
              style={{ width: '80%', marginLeft: '10px' }} 
              defaultValue="industry"
              onChange={(value) => setComparisonType(value)}
            >
              <Option value="industry">行业对比</Option>
              <Option value="competitor">竞争对手对比</Option>
              <Option value="historical">历史数据对比</Option>
            </Select>
          </Col>
          <Col xs={24} md={8}>
            <Text strong>时间范围：</Text>
            <RangePicker style={{ width: '80%', marginLeft: '10px' }} />
          </Col>
          <Col xs={24} md={8} style={{ textAlign: 'right' }}>
            <Button icon={<DownloadOutlined />} type="primary">导出报告</Button>
          </Col>
        </Row>
      </Card>

      {/* 统计卡片 */}
      <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="安全评分排名"
              value={2}
              suffix="/ 15"
              valueStyle={{ color: '#0071e3' }}
            />
            <div style={{ marginTop: '10px' }}>
              <Text type="success">
                <ArrowUpOutlined /> 较上月提升1位
              </Text>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="高于行业平均"
              value={12}
              precision={0}
              valueStyle={{ color: '#34c759' }}
              suffix="%"
            />
            <div style={{ marginTop: '10px' }}>
              <Progress percent={12} showInfo={false} strokeColor="#34c759" />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="高于主要竞争对手"
              value={6.9}
              precision={1}
              valueStyle={{ color: '#34c759' }}
              suffix="%"
            />
            <div style={{ marginTop: '10px' }}>
              <Progress percent={6.9} showInfo={false} strokeColor="#34c759" />
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="安全投入回报率"
              value={185}
              precision={0}
              valueStyle={{ color: '#0071e3' }}
              suffix="%"
            />
            <div style={{ marginTop: '10px' }}>
              <Text type="success">
                <ArrowUpOutlined /> 15% 较上季度
              </Text>
            </div>
          </Card>
        </Col>
      </Row>

      {/* 图表标签页 */}
      <Card style={{ marginBottom: '24px' }}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="安全评分对比趋势" key="1">
            <Line {...comparisonConfig} />
          </TabPane>
          <TabPane tab="安全指标雷达图" key="2">
            <Radar {...radarConfig} />
          </TabPane>
          <TabPane tab="安全与成本关系" key="3">
            <DualAxes {...dualAxesConfig} />
          </TabPane>
        </Tabs>
      </Card>

      {/* 对比数据表格 */}
      <Card title="安全指标对比详情" style={{ marginBottom: '24px' }}>
        <Table 
          columns={comparisonColumns} 
          dataSource={comparisonData} 
          pagination={false}
        />
      </Card>

      {/* 分析总结 */}
      <Card title="对比分析总结">
        <Row gutter={[24, 24]}>
          <Col xs={24} md={8}>
            <Card type="inner" title="优势">
              <ul>
                <li>安全评分持续领先行业平均12%</li>
                <li>事故率为行业最低，仅为平均水平的43%</li>
                <li>培训完成率行业第一，高出平均水平20%</li>
                <li>乘客满意度持续提升，行业领先</li>
              </ul>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card type="inner" title="劣势">
              <ul>
                <li>部分区域安全评分波动较大</li>
                <li>新入职司机安全表现低于行业平均</li>
                <li>夜间行车安全指标有待提高</li>
                <li>恶劣天气条件下安全表现不稳定</li>
              </ul>
            </Card>
          </Col>
          <Col xs={24} md={8}>
            <Card type="inner" title="改进建议">
              <ul>
                <li>加强新司机入职培训，提高准入门槛</li>
                <li>针对夜间驾驶开发专项培训模块</li>
                <li>引入恶劣天气驾驶辅助系统</li>
                <li>建立区域安全管理团队，减少区域差异</li>
              </ul>
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default CompanyComparison;
