import React, { useState } from 'react';
import { Row, Col, Card, Typography, Table, Button, Select, DatePicker, Tabs, Statistic, Progress, Tag, Space, Alert, Tooltip, Divider, List, Badge, Switch, Input, Timeline, Rate, Steps } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, DownloadOutlined, InfoCircleOutlined, CarOutlined, MobileOutlined, WarningOutlined, CheckCircleOutlined, RiseOutlined, FallOutlined, ExclamationCircleOutlined, FilterOutlined, ReloadOutlined, SearchOutlined, BellOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Line, Radar, Gauge, Column, Pie, DualAxes, Heatmap } from '@ant-design/charts';

const { Title, Text, Paragraph } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;
const { TabPane } = Tabs;

const SafetyMetrics = () => {
  const [timeRange, setTimeRange] = useState('month');
  const [activeTab, setActiveTab] = useState('1');

  // Safety indicator trend data
  const safetyTrendData = [
    { date: '2025-01-01', score: 78, incidents: 42 },
    { date: '2025-01-15', score: 80, incidents: 38 },
    { date: '2025-02-01', score: 82, incidents: 35 },
    { date: '2025-02-15', score: 83, incidents: 33 },
    { date: '2025-03-01', score: 85, incidents: 30 },
    { date: '2025-03-15', score: 87, incidents: 28 },
    { date: '2025-04-01', score: 86, incidents: 29 },
    { date: '2025-04-15', score: 88, incidents: 26 },
    { date: '2025-05-01', score: 90, incidents: 24 },
    { date: '2025-05-15', score: 91, incidents: 22 },
    { date: '2025-06-01', score: 92, incidents: 20 },
  ];

  // Safety indicator trend chart configuration
  const safetyTrendConfig = {
    data: safetyTrendData,
    height: 300,
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

  // Incident trend chart configuration
  const incidentTrendConfig = {
    data: safetyTrendData,
    height: 300,
    xField: 'date',
    yField: 'incidents',
    point: {
      size: 5,
      shape: 'circle',
    },
    label: {
      style: {
        fill: '#aaa',
      },
    },
    smooth: true,
    lineStyle: {
      stroke: '#ff9500',
      lineWidth: 3,
    },
  };

  // Radar chart data
  const radarData = [
    { metric: 'Sudden Braking', value: 85 },
    { metric: 'Rapid Acceleration', value: 78 },
    { metric: 'Sharp Turning', value: 82 },
    { metric: 'Speeding', value: 90 },
    { metric: 'Fatigue Driving', value: 95 },
    { metric: 'Distracted Driving', value: 88 },
  ];

  // Radar chart configuration
  const radarConfig = {
    data: radarData,
    height: 300,
    xField: 'metric',
    yField: 'value',
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
            lineDash: [4, 4],
          },
        },
      },
    },
    area: {},
    point: {
      size: 4,
    },
  };

  // Gauge chart configuration
  const gaugeConfig = {
    percent: 0.85,
    height: 300,
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
    statistic: {
      content: {
        formatter: () => '85',
        style: {
          fontSize: '36px',
          lineHeight: '36px',
        },
      },
    },
  };

  // Safety metrics table columns
  const metricsColumns = [
    {
      title: 'Metric Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Current Value',
      dataIndex: 'current',
      key: 'current',
      sorter: (a, b) => a.current - b.current,
    },
    {
      title: 'Target Value',
      dataIndex: 'target',
      key: 'target',
    },
    {
      title: 'Completion Rate',
      dataIndex: 'completion',
      key: 'completion',
      render: (completion) => (
        <Progress 
          percent={completion} 
          size="small" 
          status={completion >= 100 ? 'success' : 'active'}
        />
      ),
    },
    {
      title: 'vs Last Month',
      dataIndex: 'change',
      key: 'change',
      render: (change) => {
        if (change > 0) {
          return <Text type="success"><ArrowUpOutlined /> {change}%</Text>;
        } else if (change < 0) {
          return <Text type="danger"><ArrowDownOutlined /> {Math.abs(change)}%</Text>;
        } else {
          return <Text>0%</Text>;
        }
      },
    },
    {
      title: 'Weight',
      dataIndex: 'weight',
      key: 'weight',
      render: (weight) => `${weight}%`,
    },
  ];

  const metricsData = [
    {
      key: '1',
      name: 'Safe Driving Score',
      current: 85,
      target: 90,
      completion: 94,
      change: 3.2,
      weight: 40,
    },
    {
      key: '2',
      name: 'Number of Accidents',
      current: 38,
      target: 30,
      completion: 79,
      change: -8.5,
      weight: 15,
    },
    {
      key: '3',
      name: 'Number of Near Misses',
      current: 25,
      target: 20,
      completion: 80,
      change: -5.2,
      weight: 10,
    },
    {
      key: '4',
      name: 'Number of Traffic Violations',
      current: 18,
      target: 15,
      completion: 83,
      change: -10.0,
      weight: 10,
    },
    {
      key: '5',
      name: 'Number of Speeding Incidents',
      current: 15,
      target: 10,
      completion: 67,
      change: -12.5,
      weight: 15,
    },
    {
      key: '6',
      name: 'Passenger Complaint Rate',
      current: 2.1,
      target: 1.5,
      completion: 71,
      change: -15.0,
      weight: 10,
    },
  ];

  // OBD与手机数据对比
  const deviceComparisonData = [
    { date: '2025-01', obd: 95, mobile: 92, incidents: 42 },
    { date: '2025-02', obd: 96, mobile: 91, incidents: 35 },
    { date: '2025-03', obd: 97, mobile: 94, incidents: 30 },
    { date: '2025-04', obd: 96, mobile: 93, incidents: 28 },
    { date: '2025-05', obd: 98, mobile: 95, incidents: 24 },
    { date: '2025-06', obd: 99, mobile: 96, incidents: 20 },
  ];

  // OBD与手机数据对比图表配置
  const deviceComparisonConfig = {
    data: [deviceComparisonData, deviceComparisonData],
    xField: 'date',
    yField: ['obd', 'mobile'],
    geometryOptions: [
      {
        geometry: 'line',
        smooth: true,
        color: '#5ac8fa',
        lineStyle: {
          lineWidth: 3,
        },
      },
      {
        geometry: 'line',
        smooth: true,
        color: '#ff9500',
        lineStyle: {
          lineWidth: 3,
        },
      },
    ],
    legend: {
      itemName: {
        formatter: (text) => {
          if (text === 'obd') return 'OBD Device Accuracy';
          if (text === 'mobile') return 'Mobile Device Accuracy';
          return text;
        },
      },
    },
    yAxis: {
      obd: {
        min: 80,
        max: 100,
        title: {
          text: 'Accuracy (%)',
        },
      },
      mobile: {
        min: 80,
        max: 100,
      },
    },
    meta: {
      obd: {
        alias: 'OBD Device Accuracy',
      },
      mobile: {
        alias: 'Mobile Device Accuracy',
      },
    },
  };

  // 乘客评分与安全指标相关性数据
  const correlationData = [
    { metric: 'Hard Braking', correlation: 0.85 },
    { metric: 'Rapid Acceleration', correlation: 0.72 },
    { metric: 'Hard Turning', correlation: 0.78 },
    { metric: 'Speeding', correlation: 0.92 },
    { metric: 'Fatigue Driving', correlation: 0.89 },
    { metric: 'Distracted Driving', correlation: 0.81 },
  ];

  // 乘客评分与安全指标相关性图表配置
  const correlationConfig = {
    data: correlationData,
    xField: 'metric',
    yField: 'correlation',
    columnWidthRatio: 0.6,
    color: ({ correlation }) => {
      if (correlation >= 0.9) return '#34c759';
      if (correlation >= 0.8) return '#5ac8fa';
      if (correlation >= 0.7) return '#ff9500';
      return '#ff3b30';
    },
    label: {
      position: 'top',
      style: {
        fill: '#666',
      },
      formatter: (datum) => `${(datum.correlation * 100).toFixed(0)}%`,
    },
    meta: {
      correlation: {
        alias: 'Correlation Coefficient',
        min: 0,
        max: 1,
      },
    },
  };

  // 安全培训效果数据
  const trainingEffectData = [
    { type: 'Before Training', value: 68 },
    { type: 'After Training', value: 86 },
  ];

  // 安全培训效果图表配置
  const trainingEffectConfig = {
    data: trainingEffectData,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    innerRadius: 0.6,
    color: ['#ff9500', '#34c759'],
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    statistic: {
      title: {
        content: 'Improvement',
        style: {
          fontSize: '14px',
        },
      },
      content: {
        content: '26.5%',
        style: {
          fontSize: '24px',
        },
      },
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
  };

  // 预测分析数据
  const predictionData = [
    { date: '2025-01', actual: 78, predicted: null },
    { date: '2025-02', actual: 82, predicted: null },
    { date: '2025-03', actual: 79, predicted: null },
    { date: '2025-04', actual: 85, predicted: null },
    { date: '2025-05', actual: 88, predicted: null },
    { date: '2025-06', actual: 85, predicted: null },
    { date: '2025-07', actual: null, predicted: 87 },
    { date: '2025-08', actual: null, predicted: 89 },
    { date: '2025-09', actual: null, predicted: 91 },
    { date: '2025-10', actual: null, predicted: 90 },
    { date: '2025-11', actual: null, predicted: 92 },
    { date: '2025-12', actual: null, predicted: 94 },
  ];

  // 预测分析图表配置
  const predictionConfig = {
    data: predictionData,
    xField: 'date',
    yField: ['actual', 'predicted'],
    geometryOptions: [
      {
        geometry: 'line',
        color: '#5ac8fa',
        lineStyle: {
          lineWidth: 3,
        },
      },
      {
        geometry: 'line',
        color: '#34c759',
        lineStyle: {
          lineWidth: 3,
          lineDash: [5, 5],
        },
      },
    ],
    legend: {
      itemName: {
        formatter: (text) => {
          if (text === 'actual') return 'Historical Data';
          if (text === 'predicted') return 'Predicted Data';
          return text;
        },
      },
    },
    meta: {
      actual: {
        alias: 'Historical Safety Score',
      },
      predicted: {
        alias: 'Predicted Safety Score',
      },
    },
    annotations: [
      {
        type: 'regionFilter',
        start: ['2025-06', 'min'],
        end: ['max', 'max'],
        color: 'rgba(52, 199, 89, 0.1)',
      },
      {
        type: 'text',
        position: ['2025-07', 95],
        content: 'Prediction Interval',
        style: {
          fill: '#34c759',
          fontSize: 12,
          textAlign: 'center',
          textBaseline: 'bottom',
        },
      },
    ],
  };

  // 风险热力图数据
  const riskHeatmapData = [];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const hours = [
    '00:00', '01:00', '02:00', '03:00', '04:00', '05:00',
    '06:00', '07:00', '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',
  ];

  // 生成风险热力图数据
  days.forEach(day => {
    hours.forEach(hour => {
      // 高风险时段：周末晚上和工作日高峰期
      let value = Math.floor(Math.random() * 30) + 10;
      
      // 周五和周六晚上
      if ((day === 'Friday' || day === 'Saturday') && 
          (hour === '22:00' || hour === '23:00' || hour === '00:00' || hour === '01:00')) {
        value = Math.floor(Math.random() * 30) + 70;
      }
      
      // 工作日早晚高峰
      if (['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].includes(day) && 
          (hour === '08:00' || hour === '09:00' || hour === '17:00' || hour === '18:00')) {
        value = Math.floor(Math.random() * 20) + 50;
      }
      
      // 深夜时段
      if (hour === '03:00' || hour === '04:00') {
        value = Math.floor(Math.random() * 20) + 40;
      }
      
      riskHeatmapData.push({
        day,
        hour,
        value,
      });
    });
  });

  // 风险热力图配置
  const riskHeatmapConfig = {
    data: riskHeatmapData,
    xField: 'hour',
    yField: 'day',
    colorField: 'value',
    legend: {
      position: 'bottom',
    },
    color: ['#34c759', '#5ac8fa', '#ffcc00', '#ff9500', '#ff3b30'],
    meta: {
      value: {
        alias: 'Risk Index',
      },
    },
    tooltip: {
      title: 'Risk Index',
      formatter: (datum) => {
        return { name: `${datum.day} ${datum.hour}`, value: datum.value };
      },
    },
  };

  // 高风险驾驶员数据
  const highRiskDriversData = [
    { key: '1', id: 'D-8294', name: 'Joel', score: 62, incidents: 8, trend: 'down', riskLevel: 'high' },
    { key: '2', id: 'D-7391', name: 'Liam', score: 65, incidents: 6, trend: 'down', riskLevel: 'high' },
    { key: '3', id: 'D-5672', name: 'Ethan', score: 68, incidents: 5, trend: 'stable', riskLevel: 'medium' },
    { key: '4', id: 'D-9012', name: 'Oscar', score: 70, incidents: 4, trend: 'up', riskLevel: 'medium' },
    { key: '5', id: 'D-3458', name: 'Max', score: 71, incidents: 4, trend: 'up', riskLevel: 'medium' },
  ];

  // 高风险驾驶员表格列配置
  const highRiskDriversColumns = [
    {
      title: 'Driver ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Safety Score',
      dataIndex: 'score',
      key: 'score',
      render: (score) => (
        <span style={{ color: score < 65 ? '#ff3b30' : score < 75 ? '#ff9500' : '#34c759' }}>
          {score}
        </span>
      ),
    },
    {
      title: 'Events in the past 30 days',
      dataIndex: 'incidents',
      key: 'incidents',
    },
    {
      title: 'Trend',
      dataIndex: 'trend',
      key: 'trend',
      render: (trend) => {
        if (trend === 'up') {
          return <Tag color="green"><RiseOutlined /> Improving</Tag>;
        } else if (trend === 'down') {
          return <Tag color="red"><FallOutlined /> Deteriorating</Tag>;
        } else {
          return <Tag color="blue">Stable</Tag>;
        }
      },
    },
    {
      title: 'Risk Level',
      dataIndex: 'riskLevel',
      key: 'riskLevel',
      render: (level) => {
        if (level === 'high') {
          return <Tag color="red">High Risk</Tag>;
        } else if (level === 'medium') {
          return <Tag color="orange">Medium Risk</Tag>;
        } else {
          return <Tag color="green">Low Risk</Tag>;
        }
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Space size="small">
          <Button type="link" size="small">Details</Button>
          <Button type="link" size="small">Intervention</Button>
        </Space>
      ),
    },
  ];

  // 风险干预建议
  const interventionSuggestions = [
    {
      title: 'Increase patrols during high-risk periods',
      description: 'Friday and Saturday evenings from 22:00 to 02:00, increase road patrols and random checks, focusing on drunk driving and fatigue driving.',
      priority: 'high',
    },
    {
      title: 'Specialized training for high-risk drivers',
      description: 'For drivers with safety scores below 70, arrange specialized safety training focusing on defensive driving techniques.',
      priority: 'high',
    },
    {
      title: 'Optimize peak period rotations',
      description: 'Workday early and late peak periods (8-9am, 5-6pm) increase driver rotation frequency to avoid single driver working for too long.',
      priority: 'medium',
    },
    {
      title: 'Fatigue monitoring for night drivers',
      description: 'For drivers working late at night (23:00-5:00), install fatigue monitoring devices to alert drivers of signs of fatigue.',
      priority: 'medium',
    },
    {
      title: 'Install Advanced Driver Assistance Systems (ADAS) in all vehicles',
      description: 'Install Advanced Driver Assistance Systems (ADAS) in all vehicles, providing features such as lane departure warning and forward collision warning.',
      priority: 'low',
    },
  ];

  // 乘客安全反馈数据
  const passengerFeedbackData = [
    {
      key: '1',
      date: '2025-06-01',
      tripId: 'T-78945',
      driverId: 'D-7391',
      driverName: 'Liam',
      passengerName: 'Wang Xiaoming',
      safetyRating: 2,
      feedbackType: 'Speeding',
      feedbackDetail: 'Driver speeding on the highway, making passengers feel unsafe.',
      status: 'Processed',
      resolution: 'Warned driver and scheduled safety training.',
    },
    {
      key: '2',
      date: '2025-06-02',
      tripId: 'T-78946',
      driverId: 'D-8294',
      driverName: 'Zhang Ming',
      passengerName: 'Zhang San',
      safetyRating: 1,
      feedbackType: 'Braking',
      feedbackDetail: "Driver repeatedly made emergency stops, causing the passenger's head to hit the front seat.",
      status: 'In Progress',
      resolution: 'Investigating driver behavior and arranging further training.',
    },
    {
      key: '3',
      date: '2025-06-03',
      tripId: 'T-78947',
      driverId: 'D-5672',
      driverName: 'Wang Wei',
      passengerName: 'Li Si',
      safetyRating: 3,
      feedbackType: 'Fatigue driving',
      feedbackDetail: 'Driver looking very tired, nodding off multiple times while driving.',
      status: 'Pending',
      resolution: '',
    },
    {
      key: '4',
      date: '2025-06-04',
      tripId: 'T-78948',
      driverId: 'D-3458',
      driverName: 'Chen Yong',
      passengerName: 'Zhao Wu',
      safetyRating: 2,
      feedbackType: 'Distraction',
      feedbackDetail: 'Driver repeatedly distracted while driving, missing several intersections.',
      status: 'Pending',
      resolution: '',
    },
    {
      key: '5',
      date: '2025-06-05',
      tripId: 'T-78949',
      driverId: 'D-9012',
      driverName: 'Zhao Gang',
      passengerName: 'Wang Liu',
      safetyRating: 4,
      feedbackType: 'Vehicle Condition',
      feedbackDetail: 'Vehicle braking system is poor, with unusual noise when braking.',
      status: 'Processed',
      resolution: 'Arranged vehicle maintenance and replaced braking system.',
    },
  ];

  // 乘客安全反馈类型分布
  const feedbackTypeData = [
    { type: 'Speeding', value: 35 },
    { type: 'Braking', value: 28 },
    { type: 'Distraction', value: 22 },
    { type: 'Fatigue driving', value: 18 },
    { type: 'Vehicle Condition', value: 12 },
    { type: 'Other', value: 5 },
  ];

  // 乘客安全满意度趋势
  const safetyRatingTrendData = [
    { month: '2025-01', rating: 3.2 },
    { month: '2025-02', rating: 3.3 },
    { month: '2025-03', rating: 3.4 },
    { month: '2025-04', rating: 3.6 },
    { month: '2025-05', rating: 3.8 },
    { month: '2025-06', rating: 3.9 },
  ];

  // 乘客安全反馈表格列配置
  const passengerFeedbackColumns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Trip ID',
      dataIndex: 'tripId',
      key: 'tripId',
    },
    {
      title: 'Driver ID',
      dataIndex: 'driverId',
      key: 'driverId',
    },
    {
      title: 'Driver Name',
      dataIndex: 'driverName',
      key: 'driverName',
    },
    {
      title: 'Passenger Name',
      dataIndex: 'passengerName',
      key: 'passengerName',
    },
    {
      title: 'Safety Rating',
      dataIndex: 'safetyRating',
      key: 'safetyRating',
      render: (rating) => (
        <Rate value={rating} disabled />
      ),
    },
    {
      title: 'Feedback Type',
      dataIndex: 'feedbackType',
      key: 'feedbackType',
    },
    {
      title: 'Feedback Detail',
      dataIndex: 'feedbackDetail',
      key: 'feedbackDetail',
      ellipsis: true,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        if (status === 'Processed') {
          return <Tag color="green">Processed</Tag>;
        } else if (status === 'In Progress') {
          return <Tag color="blue">In Progress</Tag>;
        } else {
          return <Tag color="red">Pending</Tag>;
        }
      },
    },
    {
      title: 'Resolution',
      dataIndex: 'resolution',
      key: 'resolution',
      ellipsis: true,
    },
  ];

  // 实时监控数据
  const realTimeAlerts = [
    {
      id: 'RT-1001',
      time: '10:35:22',
      driverId: 'D-7391',
      driverName: 'Li Qiang',
      event: 'Speeding',
      location: 'Beijing Chaoyang District Jiuji Road',
      severity: 'high',
      status: 'new',
    },
    {
      id: 'RT-1002',
      time: '10:28:45',
      driverId: 'D-8294',
      driverName: 'Zhang Ming',
      event: 'Braking',
      location: 'Beijing Haidian District Zhongzhuan Street',
      severity: 'medium',
      status: 'processing',
    },
    {
      id: 'RT-1003',
      time: '10:15:33',
      driverId: 'D-5672',
      driverName: 'Wang Wei',
      event: 'Fatigue driving',
      location: 'Beijing Xicheng District Xianan Street',
      severity: 'high',
      status: 'processing',
    },
    {
      id: 'RT-1004',
      time: '10:02:18',
      driverId: 'D-3458',
      driverName: 'Chen Yong',
      event: 'Distraction',
      location: 'Beijing Dongcheng District Dongduan Street',
      severity: 'medium',
      status: 'resolved',
    },
    {
      id: 'RT-1005',
      time: '09:48:52',
      driverId: 'D-9012',
      driverName: 'Zhao Gang',
      event: 'Hard Turning',
      location: 'Beijing Fengtai District Fengtai Road',
      severity: 'low',
      status: 'resolved',
    },
  ];

  return (
    <div className="safety-metrics-container">
      <Title level={3}>Safety Metrics Analysis</Title>
      <Text type="secondary" style={{ marginBottom: '24px', display: 'block' }}>
        Comprehensive analysis and monitoring of driving safety metrics, trends, and correlations
      </Text>
      
      {/* 筛选和控制区域 */}
      <Card style={{ marginBottom: '24px' }}>
        <Row gutter={[16, 16]} align="middle" justify="space-between">
          <Col xs={24} md={6}>
            <Space align="center">
              <Text strong>Time Range:</Text>
              <Select 
                style={{ width: 180 }} 
                defaultValue="month"
                onChange={(value) => setTimeRange(value)}
              >
                <Option value="week">The past week</Option>
                <Option value="month">The past month</Option>
                <Option value="quarter">The past quarter</Option>
                <Option value="year">The past year</Option>
              </Select>
            </Space>
          </Col>
          <Col xs={24} md={10}>
            <Space align="center">
              <Text strong>Custom Date Range:</Text>
              <RangePicker style={{ width: 280 }} />
            </Space>
          </Col>
          <Col xs={24} md={6} style={{ textAlign: 'right' }}>
            <Button icon={<DownloadOutlined />} type="primary">Export Report</Button>
          </Col>
        </Row>
      </Card>

      {/* 安全指标概览 */}
      <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Average Safety Score"
              value={85}
              suffix="/ 100"
              valueStyle={{ color: '#0071e3' }}
            />
            <div style={{ marginTop: '10px' }}>
              <Text type="success">
                <ArrowUpOutlined /> 3.5% compared to last month
              </Text>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Total Safety Events"
              value={247}
              valueStyle={{ color: '#ff9500' }}
            />
            <div style={{ marginTop: '10px' }}>
              <Text type="success">
                <ArrowDownOutlined /> 8.5% compared to last month
              </Text>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Safety Metrics Compliance Rate"
              value={92}
              suffix="%"
              valueStyle={{ color: '#34c759' }}
            />
            <div style={{ marginTop: '10px' }}>
              <Text type="success">
                <ArrowUpOutlined /> 4.2% compared to last month
              </Text>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="Driver Training Completion Rate"
              value={78}
              suffix="%"
              valueStyle={{ color: '#5ac8fa' }}
            />
            <div style={{ marginTop: '10px' }}>
              <Text type="success">
                <ArrowUpOutlined /> 12.3% compared to last month
              </Text>
            </div>
          </Card>
        </Col>
      </Row>

      {/* 安全指标详细分析 */}
      <Card style={{ marginBottom: '24px' }}>
        <Tabs defaultActiveKey="1" onChange={setActiveTab}>
          <TabPane tab="Safety Trends" key="1">
            <Row gutter={[24, 24]}>
              <Col xs={24} lg={12}>
                <Card title="Safety Score Trend" bordered={false}>
                  <Line {...safetyTrendConfig} />
                </Card>
              </Col>
              <Col xs={24} lg={12}>
                <Card title="Safety Incident Trend" bordered={false}>
                  <Line {...incidentTrendConfig} />
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Safety Metrics Details" key="2">
            <Row gutter={[24, 24]}>
              <Col xs={24} lg={12}>
                <Card title="Safety Metrics Radar Chart" bordered={false}>
                  <Radar {...radarConfig} />
                </Card>
              </Col>
              <Col xs={24} lg={12}>
                <Card title="Overall Safety Score" bordered={false}>
                  <Gauge {...gaugeConfig} />
                </Card>
              </Col>
              <Col xs={24}>
                <Card title="Safety Metrics Details" bordered={false}>
                  <Table 
                    columns={metricsColumns} 
                    dataSource={metricsData} 
                    pagination={false} 
                  />
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Data Collection Analysis" key="3">
            <Row gutter={[24, 24]}>
              <Col xs={24}>
                <Alert
                  message="Data Collection Technology Comparison"
                  description={
                    <Paragraph>
                      <Text>This page compares the data collection of OBD devices and mobile devices. OBD devices have a sampling rate of 100Hz, while mobile devices have a sampling rate of 50Hz.</Text>
                      <ul>
                        <li><Text strong>OBD advantage:</Text> Direct connection to vehicle systems, more accurate data, but higher installation costs.</li>
                        <li><Text strong>Mobile device advantage:</Text> Easy deployment, low cost, but slightly lower accuracy in some cases.</li>
                      </ul>
                    </Paragraph>
                  }
                  type="info"
                  showIcon
                  style={{ marginBottom: '24px' }}
                />
              </Col>
              <Col xs={24} lg={16}>
                <Card 
                  title="OBD with Mobile Device Data Accuracy Comparison" 
                  bordered={false}
                  extra={<Tooltip title="Data sourced from combined laboratory tests and actual road tests"><InfoCircleOutlined /></Tooltip>}
                >
                  <DualAxes {...deviceComparisonConfig} />
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card title="Data Collection Method Comparison" bordered={false}>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Card type="inner" title="OBD Device" extra={<CarOutlined />}>
                      <Statistic title="Data Accuracy" value="97.5%" valueStyle={{ color: '#5ac8fa' }} />
                      <Statistic title="Sampling Frequency" value="100Hz" style={{ marginTop: '16px' }} />
                      <Statistic title="Packet Loss" value="0.5%" style={{ marginTop: '16px' }} valueStyle={{ color: '#34c759' }} />
                      <div style={{ marginTop: '16px' }}>
                        <Tag color="green">High precision</Tag>
                        <Tag color="blue">Stable</Tag>
                        <Tag color="orange">High cost</Tag>
                      </div>
                    </Card>
                    <Card type="inner" title="Mobile Device" extra={<MobileOutlined />}>
                      <Statistic title="Data Accuracy" value="93.8%" valueStyle={{ color: '#ff9500' }} />
                      <Statistic title="Sampling Frequency" value="50Hz" style={{ marginTop: '16px' }} />
                      <Statistic title="Packet Loss" value="2.3%" style={{ marginTop: '16px' }} valueStyle={{ color: '#ff9500' }} />
                      <div style={{ marginTop: '16px' }}>
                        <Tag color="blue">Easy deployment</Tag>
                        <Tag color="green">Cost-effective</Tag>
                        <Tag color="orange">Poor performance in weak signal areas</Tag>
                      </div>
                    </Card>
                  </Space>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Passenger Feedback Correlation" key="4">
            <Row gutter={[24, 24]}>
              <Col xs={24}>
                <Alert
                  message="Passenger Feedback Correlation Analysis"
                  description="Below data shows the correlation coefficients between various safety metrics and passenger ratings. The higher the correlation, the greater the impact of the metric on passenger safety perception."
                  type="info"
                  showIcon
                  style={{ marginBottom: '24px' }}
                />
              </Col>
              <Col xs={24} lg={16}>
                <Card title="Passenger Rating Correlation" bordered={false}>
                  <Column {...correlationConfig} />
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card title="Key Findings" bordered={false}>
                  <ul>
                    <li>
                      <Text strong>Speeding Behavior</Text> passengers' safety<Text type="danger">correlation highest(92%)</Text>，
                      should be controlled.
                    </li>
                    <li>
                      <Text strong>Fatigue Driving</Text> is the second factor of concern for passengers, with a correlation of<Text type="warning">89%</Text>。
                    </li>
                    <li>
                      <Text strong>Sudden Braking</Text> significantly affects passengers' safety, with a correlation of<Text type="warning">85%</Text>。
                    </li>
                    <li>
                      <Text strong>Sudden Acceleration</Text> has a relative low correlation, but still reaches<Text type="success">72%</Text>。
                    </li>
                  </ul>
                  <Divider />
                  
                  <Paragraph>
                    <Text type="secondary">
                      Based on the analysis, it is recommended to prioritize improvements in speeding and fatigue driving, which can significantly enhance passenger safety satisfaction.
                    </Text>
                  </Paragraph>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Training Effect Analysis" key="5">
            <Row gutter={[24, 24]}>
              <Col xs={24} lg={12}>
                <Card title="Safety Training Effect" bordered={false}>
                  <Pie {...trainingEffectConfig} />
                </Card>
              </Col>
              <Col xs={24} lg={12}>
                <Card title="Training Effect Details" bordered={false}>
                  <Paragraph>
                    <Text>Safety training significantly improves driver safety scores, with an average increase of</Text>
                    <Text strong style={{ fontSize: '18px', color: '#34c759' }}> 26.5% </Text>
                    <Text>. Training reduces safety event occurrences by</Text>
                    <Text strong style={{ fontSize: '18px', color: '#34c759' }}> 38.2% </Text>
                    <Text>.</Text>
                  </Paragraph>
                  
                  <Title level={5} style={{ marginTop: '16px' }}>Training Course Effectiveness Ranking:</Title>
                  <ol>
                    <li><Text strong>Emergency Situation Handling</Text> - Improvement <Text type="success">34.7%</Text></li>
                    <li><Text strong>Basic Safety Driving</Text> - Improvement <Text type="success">29.3%</Text></li>
                    <li><Text strong>Fatigue Driving Prevention</Text> - Improvement <Text type="success">25.8%</Text></li>
                    <li><Text strong>Defensive Driving Techniques</Text> - Improvement <Text type="success">22.1%</Text></li>
                  </ol>
                  
                  <Alert
                    message="Training Recommendations"
                    description="Based on the analysis, it is recommended to increase the frequency of emergency situation handling and basic safety driving training, and to make these two courses mandatory for all drivers."
                    type="success"
                    showIcon
                    style={{ marginTop: '16px' }}
                  />
                </Card>
              </Col>
              <Col xs={24}>
                <Card title="Training Completion Status" bordered={false}>
                  <Table 
                    columns={[
                      { title: 'Training Course', dataIndex: 'course', key: 'course' },
                      { title: 'Participants', dataIndex: 'participants', key: 'participants' },
                      { title: 'Completion Rate', dataIndex: 'completion', key: 'completion',
                        render: (completion) => (
                          <Progress 
                            percent={completion} 
                            size="small" 
                            status={completion >= 90 ? 'success' : completion >= 70 ? 'normal' : 'exception'}
                          />
                        ),
                      },
                      { title: 'Average Score', dataIndex: 'avgScore', key: 'avgScore' },
                      { title: 'Safety Score Improvement', dataIndex: 'improvement', key: 'improvement',
                        render: (improvement) => <Text type="success">+{improvement}%</Text>,
                      },
                    ]} 
                    dataSource={[
                      { key: '1', course: 'Basic Safety Driving', participants: 120, completion: 95, avgScore: 88, improvement: 29.3 },
                      { key: '2', course: 'Emergency Situation Handling', participants: 98, completion: 87, avgScore: 92, improvement: 34.7 },
                      { key: '3', course: 'Fatigue Driving Prevention', participants: 105, completion: 82, avgScore: 85, improvement: 25.8 },
                      { key: '4', course: 'Defensive Driving Techniques', participants: 86, completion: 76, avgScore: 83, improvement: 22.1 },
                      { key: '5', course: 'Passenger Service and Communication', participants: 112, completion: 91, avgScore: 90, improvement: 18.5 },
                    ]} 
                    pagination={false} 
                  />
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Prediction Analysis" key="6">
            <Row gutter={[24, 24]}>
              <Col xs={24}>
                <Alert
                  message="Safety Score Prediction Analysis"
                  description="Based on historical data and machine learning algorithms, the system predicts future 6-month safety score trends. The prediction considers seasonal factors, driver training plans, and historical improvement rates."
                  type="info"
                  showIcon
                  style={{ marginBottom: '24px' }}
                />
              </Col>
              <Col xs={24} lg={16}>
                <Card 
                  title="Safety Score Prediction Trend" 
                  bordered={false}
                  extra={<Tooltip title="Prediction based on past 12 months of data, using time series analysis and machine learning algorithms"><InfoCircleOutlined /></Tooltip>}
                >
                  <DualAxes {...predictionConfig} />
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card title="Prediction Analysis Conclusion" bordered={false}>
                  <List
                    itemLayout="horizontal"
                    dataSource={[
                      {
                        title: 'Safety Score Expected Increase',
                        description: 'It is expected that the safety score will increase from the current 85 points to 94 points over the next 6 months, an improvement of approximately 10.6%.',
                        icon: <RiseOutlined style={{ color: '#34c759' }} />,
                      },
                      {
                        title: 'Key Improvement Factors',
                        description: 'The completion rate of driver training plans and the deployment of new safety monitoring devices are the main contributing factors.',
                        icon: <CheckCircleOutlined style={{ color: '#5ac8fa' }} />,
                      },
                      {
                        title: 'Potential Risk Factors',
                        description: 'The prediction model shows that, without addressing fatigue driving issues, it may limit the increase in safety scores.',
                        icon: <ExclamationCircleOutlined style={{ color: '#ff9500' }} />,
                      },
                    ]}
                    renderItem={(item) => (
                      <List.Item
                        extra={
                          <Tag color={item.priority === 'high' ? 'red' : item.priority === 'medium' ? 'orange' : 'blue'}>
                            {item.priority === 'high' ? 'High Priority' : item.priority === 'medium' ? 'Medium Priority' : 'Low Priority'}
                          </Tag>
                        }
                      >
                        <List.Item.Meta
                          title={<Text strong>{item.title}</Text>}
                          description={item.description}
                        />
                      </List.Item>
                    )}
                  />
                  
                  <Divider orientation="left">Action Recommendations</Divider>
                  
                  <ul>
                    <li>Continue to promote a driver safety training program, with a key focus on preventing fatigue driving.</li>
                    <li>Accelerate the deployment of new safety monitoring devices to improve data collection accuracy.</li>
                    <li>Optimize driver schedules to reduce long consecutive working hours.</li>
                  </ul>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Risk Assessment" key="7">
            <Row gutter={[24, 24]}>
              <Col xs={24}>
                <Alert
                  message="Risk Time Analysis"
                  description="The following heat map shows the safety risk index at different times, helping to identify high-risk time periods and optimize resource allocation and safety management strategies."
                  type="warning"
                  showIcon
                  style={{ marginBottom: '24px' }}
                />
              </Col>
              <Col xs={24} lg={16}>
                <Card 
                  title="Risk Heatmap" 
                  bordered={false}
                  extra={<Tooltip title="Data based on past 3 months of safety events"><InfoCircleOutlined /></Tooltip>}
                >
                  <Heatmap {...riskHeatmapConfig} />
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card title="Risk Time Analysis" bordered={false}>
                  <Paragraph>
                    <Text>Heatmap analysis shows that the following periods have high safety risks:</Text>
                  </Paragraph>
                  
                  <List
                    size="small"
                    dataSource={[
                      { time: 'Friday and Saturday nights (22:00-02:00)', risk: 'Alcohol driving risk increase, passenger behavior increase' },
                      { time: 'Workday mornings and afternoons (8-9am, 5-6pm)', risk: 'Traffic congestion, driver stress, impulsive driving' },
                      { time: 'Late-night hours (11pm-3am)', risk: 'Driver fatigue, distracted driving' },
                    ]}
                    renderItem={(item) => (
                      <List.Item>
                        <Space direction="vertical" size={0} style={{ width: '100%' }}>
                          <Text strong>{item.time}</Text>
                          <Text type="secondary">{item.risk}</Text>
                        </Space>
                      </List.Item>
                    )}
                  />
                  
                  <Divider />
                  
                  <Title level={5}>High-Risk Drivers</Title>
                  <Table 
                    columns={highRiskDriversColumns} 
                    dataSource={highRiskDriversData} 
                    pagination={false} 
                    size="small"
                  />
                </Card>
              </Col>
              
              <Col xs={24}>
                <Card title="Risk Intervention Suggestions" bordered={false}>
                  <List
                    itemLayout="horizontal"
                    dataSource={interventionSuggestions}
                    renderItem={(item) => (
                      <List.Item
                        extra={
                          <Tag color={item.priority === 'high' ? 'red' : item.priority === 'medium' ? 'orange' : 'blue'}>
                            {item.priority === 'high' ? 'High Priority' : item.priority === 'medium' ? 'Medium Priority' : 'Low Priority'}
                          </Tag>
                        }
                      >
                        <List.Item.Meta
                          title={<Text strong>{item.title}</Text>}
                          description={item.description}
                        />
                      </List.Item>
                    )}
                  />
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Real-time Monitoring" key="8">
            <Row gutter={[24, 24]}>
              <Col xs={24} lg={16}>
                <Card 
                  title="Real-time Safety Event Monitoring" 
                  bordered={false}
                  extra={<Badge count={2} style={{ backgroundColor: '#ff3b30' }} />}
                >
                  <Table
                    columns={[
                      {
                        title: 'Event ID',
                        dataIndex: 'id',
                        key: 'id',
                        width: 100,
                      },
                      {
                        title: 'Time',
                        dataIndex: 'time',
                        key: 'time',
                        width: 100,
                        render: (text) => <span><ClockCircleOutlined style={{ marginRight: '5px' }} />{text}</span>,
                      },
                      {
                        title: 'Driver',
                        dataIndex: 'driverName',
                        key: 'driverName',
                        width: 100,
                        render: (text, record) => <span>{text} ({record.driverId})</span>,
                      },
                      {
                        title: 'Event Type',
                        dataIndex: 'event',
                        key: 'event',
                        width: 120,
                      },
                      {
                        title: 'Location',
                        dataIndex: 'location',
                        key: 'location',
                        ellipsis: true,
                      },
                      {
                        title: 'Severity',
                        dataIndex: 'severity',
                        key: 'severity',
                        width: 100,
                        render: (severity) => {
                          let color = 'green';
                          if (severity === 'high') {
                            color = 'red';
                          } else if (severity === 'medium') {
                            color = 'orange';
                          }
                          return <Tag color={color}>{severity}</Tag>;
                        },
                      },
                      {
                        title: 'Status',
                        dataIndex: 'status',
                        key: 'status',
                        width: 120,
                        render: (status) => {
                          if (status === 'new') {
                            return <Badge status="error" text="New Event" />;
                          } else if (status === 'processing') {
                            return <Badge status="processing" text="Processing" />;
                          } else {
                            return <Badge status="success" text="Resolved" />;
                          }
                        },
                      },
                      {
                        title: 'Action',
                        key: 'action',
                        width: 120,
                        render: (_, record) => (
                          <Space size="small">
                            <Button type="link" size="small">Details</Button>
                            {record.status !== 'resolved' && (
                              <Button type="link" size="small">Process</Button>
                            )}
                          </Space>
                        ),
                      },
                    ]}
                    dataSource={realTimeAlerts}
                    pagination={false}
                    size="small"
                  />
                  
                  <div style={{ marginTop: '16px', textAlign: 'right' }}>
                    <Button type="primary" icon={<BellOutlined />}>Set Alert Rules</Button>
                  </div>
                </Card>
              </Col>
              
              <Col xs={24} lg={8}>
                <Card title="Today's Event Timeline" bordered={false}>
                  <Timeline style={{ marginTop: '16px' }}>
                    <Timeline.Item color="red">
                      <p><Text strong>10:35:22</Text> - Li Qiang <Tag color="red">Speeding</Tag></p>
                      <p><Text type="secondary">Beijing Chaoyang District Jiu'an Road, 35% over the speed limit</Text></p>
                    </Timeline.Item>
                    <Timeline.Item color="orange">
                      <p><Text strong>10:28:45</Text> - Zhang Ming <Tag color="orange">Sudden Braking</Tag></p>
                      <p><Text type="secondary">Beijing Haidian District Zhongguozhen Street, deceleration 0.8g</Text></p>
                    </Timeline.Item>
                    <Timeline.Item color="red">
                      <p><Text strong>10:15:33</Text> - Wang Wei <Tag color="red">Fatigue Driving</Tag></p>
                      <p><Text type="secondary">Beijing Xicheng District Xichang Street, 4.5 hours of continuous driving</Text></p>
                    </Timeline.Item>
                    <Timeline.Item color="orange">
                      <p><Text strong>10:02:18</Text> - Chen Yong <Tag color="orange">Distracted Driving</Tag></p>
                      <p><Text type="secondary">Beijing Dongcheng District Dongchangan Street, 15 seconds of distraction</Text></p>
                    </Timeline.Item>
                    <Timeline.Item color="green">
                      <p><Text strong>09:48:52</Text> - Zhao Gang <Tag color="green">Sharp Turn</Tag></p>
                      <p><Text type="secondary">Beijing Fengtai District Fengtai Road, horizontal acceleration 0.4g</Text></p>
                    </Timeline.Item>
                  </Timeline>
                  
                  <Divider />
                  
                  <Statistic 
                    title="Today's Total Safety Events" 
                    value={27} 
                    suffix="/ Compared to yesterday -12%" 
                    valueStyle={{ color: '#34c759' }}
                  />
                </Card>
              </Col>
              
              <Col xs={24}>
                <Alert
                  message="Real-time Monitoring Instructions"
                  description={
                    <div>
                      <Paragraph>
                        Real-time monitoring system collects driving behavior data through OBD devices and mobile sensors. When abnormal driving behavior is detected, it immediately generates safety event alerts. The system determines the severity of events based on the following rules:
                      </Paragraph>
                      <ul>
                        <li><Text strong>High-risk events (red)</Text>：Exceeding speed by 30% or more, severe fatigue driving (continuous driving for 4 hours), alcohol suspicion, etc.</li>
                        <li><Text strong>Medium-risk events (orange)</Text>：Sudden braking (deceleration > 0.7g), distracted driving (distracted for > 10 seconds), speed 10-30% over limit, etc.</li>
                        <li><Text strong>Low-risk events (green)</Text>：Minor sharp turns, minor sharp accelerations, brief distractions, etc.</li>
                      </ul>
                      <Paragraph>
                        The system automatically sends high-risk events to managers and intervenes according to company safety management procedures. All event data is used for driver safety score calculations and training needs analysis.
                      </Paragraph>
                    </div>
                  }
                  type="info"
                  showIcon
                />
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="Passenger Safety Feedback" key="9">
            <Row gutter={[24, 24]}>
              <Col xs={24} lg={16}>
                <Card 
                  title="Passenger Safety Feedback List" 
                  bordered={false}
                  extra={<Button type="primary" icon={<DownloadOutlined />} size="small">Export Data</Button>}
                >
                  <Table
                    columns={[
                      {
                        title: 'Date',
                        dataIndex: 'date',
                        key: 'date',
                        width: 100,
                        sorter: (a, b) => new Date(a.date) - new Date(b.date),
                      },
                      {
                        title: 'Trip ID',
                        dataIndex: 'tripId',
                        key: 'tripId',
                        width: 100,
                      },
                      {
                        title: 'Driver',
                        dataIndex: 'driverName',
                        key: 'driverName',
                        width: 100,
                        render: (text, record) => <span>{text} ({record.driverId})</span>,
                      },
                      {
                        title: 'Safety Rating',
                        dataIndex: 'safetyRating',
                        key: 'safetyRating',
                        width: 100,
                        sorter: (a, b) => a.safetyRating - b.safetyRating,
                        render: (rating) => {
                          const colors = ['#ff3b30', '#ff3b30', '#ff9500', '#ffcc00', '#34c759'];
                          return (
                            <Rate 
                              disabled 
                              defaultValue={rating} 
                              style={{ fontSize: '16px', color: colors[rating-1] }} 
                            />
                          );
                        },
                      },
                      {
                        title: 'Feedback Type',
                        dataIndex: 'feedbackType',
                        key: 'feedbackType',
                        width: 120,
                        filters: [
                          { text: 'Speeding', value: 'Speeding' },
                          { text: 'Sudden Braking', value: 'Sudden Braking' },
                          { text: 'Distracted Driving', value: 'Distracted Driving' },
                          { text: 'Fatigue Driving', value: 'Fatigue Driving' },
                          { text: 'Vehicle Condition', value: 'Vehicle Condition' },
                        ],
                        onFilter: (value, record) => record.feedbackType === value,
                      },
                      {
                        title: 'Feedback Detail',
                        dataIndex: 'feedbackDetail',
                        key: 'feedbackDetail',
                        ellipsis: true,
                      },
                      {
                        title: 'Status',
                        dataIndex: 'status',
                        key: 'status',
                        width: 100,
                        render: (status) => {
                          if (status === 'Pending') {
                            return <Badge status="error" text="Pending" />;
                          } else if (status === 'Processing') {
                            return <Badge status="processing" text="Processing" />;
                          } else {
                            return <Badge status="success" text="Processed" />;
                          }
                        },
                        filters: [
                          { text: 'Pending', value: 'Pending' },
                          { text: 'Processing', value: 'Processing' },
                          { text: 'Processed', value: 'Processed' },
                        ],
                        onFilter: (value, record) => record.status === value,
                      },
                      {
                        title: 'Action',
                        key: 'action',
                        width: 120,
                        render: (_, record) => (
                          <Space size="small">
                            <Button type="link" size="small">Details</Button>
                            {record.status !== 'Processed' && (
                              <Button type="link" size="small">Process</Button>
                            )}
                          </Space>
                        ),
                      },
                    ]}
                    dataSource={passengerFeedbackData}
                    pagination={{ pageSize: 5 }}
                    expandable={{
                      expandedRowRender: (record) => (
                        <p style={{ margin: 0 }}>
                          <Text strong>Processing Result:</Text> {record.resolution || 'No processing result'}
                        </p>
                      ),
                    }}
                  />
                </Card>
              </Col>
              
              <Col xs={24} lg={8}>
                <Row gutter={[0, 24]}>
                  <Col xs={24}>
                    <Card title="Feedback Type Distribution" bordered={false}>
                      <Pie
                        data={feedbackTypeData}
                        angleField="value"
                        colorField="type"
                        radius={0.8}
                        label={{
                          type: 'outer',
                          content: '{name} {percentage}',
                        }}
                        interactions={[{ type: 'element-active' }]}
                      />
                    </Card>
                  </Col>
                  
                  <Col xs={24}>
                    <Card title="Passenger Safety Satisfaction Trend" bordered={false}>
                      <Line
                        data={safetyRatingTrendData}
                        xField="month"
                        yField="rating"
                        point={{
                          size: 5,
                          shape: 'diamond',
                        }}
                        label={{}}
                        smooth
                        style={{ height: '220px' }}
                      />
                      
                      <div style={{ marginTop: '16px', textAlign: 'center' }}>
                        <Statistic 
                          title="Current month safety satisfaction" 
                          value={3.9} 
                          precision={1}
                          valueStyle={{ color: '#34c759' }}
                          suffix="/ 5"
                          prefix={<ArrowUpOutlined />}
                        />
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Col>
              
              <Col xs={24}>
                <Card title="Passenger Safety Feedback Analysis and Recommendations" bordered={false}>
                  <Row gutter={[24, 24]}>
                    <Col xs={24} md={8}>
                      <Statistic 
                        title="Current month safety feedback count" 
                        value={120} 
                        valueStyle={{ color: '#1890ff' }}
                      />
                      <Paragraph style={{ marginTop: '8px' }}>
                        <Text type="secondary">Decreased by 15, reduction rate 11.1%</Text>
                      </Paragraph>
                    </Col>
                    
                    <Col xs={24} md={8}>
                      <Statistic 
                        title="Serious safety issues (1-2 stars)" 
                        value={28} 
                        valueStyle={{ color: '#ff3b30' }}
                      />
                      <Paragraph style={{ marginTop: '8px' }}>
                        <Text type="secondary">23.3% of total feedback, decreased by 5.2%</Text>
                      </Paragraph>
                    </Col>
                    
                    <Col xs={24} md={8}>
                      <Statistic 
                        title="Resolved feedback ratio" 
                        value={78.3} 
                        suffix="%" 
                        valueStyle={{ color: '#34c759' }}
                      />
                      <Paragraph style={{ marginTop: '8px' }}>
                        <Text type="secondary">Increased by 8.7%, response speed significantly improved</Text>
                      </Paragraph>
                    </Col>
                  </Row>
                  
                  <Divider />
                  
                  <Title level={5}>Main Findings and Improvement Recommendations</Title>
                  
                  <List
                    size="small"
                    bordered
                    dataSource={[
                      'Speeding remains the most common safety issue; it is recommended to enhance driver speed management training and real-time monitoring.',
                      'Sudden braking and distracted driving issues are often interrelated; it is suggested to strengthen defensive driving training and attention concentration testing.',
                      'Safety satisfaction trends have been steadily improving, positively correlating with driver training completion rate and safety event handling efficiency.',
                      'It is recommended to focus on drivers receiving frequent safety feedback and provide personalized guidance, regularly tracking improvement progress.',
                      'Establish a passenger safety feedback quick response mechanism, ensuring that serious safety issues are resolved within 24 hours.',
                    ]}
                    renderItem={(item, index) => (
                      <List.Item>
                        <Text mark>{`Findings ${index + 1}:`}</Text> {item}
                      </List.Item>
                    )}
                  />
                  
                  <Alert
                    message="Passenger Safety Feedback Processing Flow"
                    description={
                      <Steps size="small" current={4} direction="vertical">
                        <Steps.Step title="Receive Feedback" description="System automatically collects passenger safety feedback and categorizes it" />
                        <Steps.Step title="Risk Assessment" description="Judges the severity of the issue based on feedback content and rating" />
                        <Steps.Step title="Issue Assignment" description="Assigns the issue to the relevant responsible person for processing" />
                        <Steps.Step title="Processing and Improvement" description="Takes appropriate measures to resolve the issue and records the resolution" />
                        <Steps.Step title="Feedback Tracking" description="Regularly tracks driver improvement and updates safety scores" />
                      </Steps>
                    }
                    type="info"
                    showIcon
                    style={{ marginTop: '16px' }}
                  />
                </Card>
              </Col>
            </Row>
          </TabPane>

          <TabPane tab="Driver Safety Training" key="10">
            <Row gutter={[24, 24]}>
              <Col xs={24} lg={16}>
                <Card 
                  title="Safety Training Courses and Completion" 
                  bordered={false}
                  extra={<Button type="primary" size="small">Add Training</Button>}
                >
                  <Table
                    columns={[
                      {
                        title: 'Course Name',
                        dataIndex: 'name',
                        key: 'name',
                        width: 220,
                      },
                      {
                        title: 'Type',
                        dataIndex: 'type',
                        key: 'type',
                        width: 120,
                        render: (type) => {
                          const typeMap = {
                            'defensive': { color: 'blue', text: 'Defensive driving' },
                            'emergency': { color: 'red', text: 'Emergency' },
                            'fatigue': { color: 'orange', text: 'Fatigue management' },
                            'eco': { color: 'green', text: 'Eco driving' },
                            'passenger': { color: 'purple', text: 'Passenger service' },
                          };
                          return <Tag color={typeMap[type].color}>{typeMap[type].text}</Tag>;
                        },
                        filters: [
                          { text: 'Defensive driving', value: 'defensive' },
                          { text: 'Emergency', value: 'emergency' },
                          { text: 'Fatigue management', value: 'fatigue' },
                          { text: 'Eco driving', value: 'eco' },
                          { text: 'Passenger service', value: 'passenger' },
                        ],
                        onFilter: (value, record) => record.type === value,
                      },
                      {
                        title: 'Target Drivers',
                        dataIndex: 'targetDrivers',
                        key: 'targetDrivers',
                        width: 120,
                      },
                      {
                        title: 'Completion Rate',
                        dataIndex: 'completionRate',
                        key: 'completionRate',
                        width: 200,
                        sorter: (a, b) => a.completionRate - b.completionRate,
                        render: (rate) => {
                          let color = '#34c759';
                          if (rate < 60) color = '#ff3b30';
                          else if (rate < 80) color = '#ff9500';
                          return (
                            <div>
                              <Progress 
                                percent={rate} 
                                size="small" 
                                strokeColor={color}
                                format={(percent) => `${percent}%`}
                              />
                            </div>
                          );
                        },
                      },
                      {
                        title: 'Deadline',
                        dataIndex: 'deadline',
                        key: 'deadline',
                        width: 120,
                        render: (date, record) => {
                          const today = new Date();
                          const deadlineDate = new Date(date);
                          const daysLeft = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));
                          
                          if (daysLeft < 0) {
                            return <Text type="danger">{date} (Expired)</Text>;
                          } else if (daysLeft <= 7) {
                            return <Text type="warning">{date} (Remaining {daysLeft} days)</Text>;
                          } else {
                            return <Text>{date}</Text>;
                          }
                        },
                        sorter: (a, b) => new Date(a.deadline) - new Date(b.deadline),
                      },
                      {
                        title: 'Action',
                        key: 'action',
                        width: 120,
                        render: () => (
                          <Space size="small">
                            <Button type="link" size="small">Details</Button>
                            <Button type="link" size="small">Remind</Button>
                          </Space>
                        ),
                      },
                    ]}
                    dataSource={[
                      {
                        key: '1',
                        name: 'Defensive driving skills',
                        type: 'defensive',
                        targetDrivers: 'All drivers',
                        completionRate: 92,
                        deadline: '2025-07-15',
                      },
                      {
                        key: '2',
                        name: 'Emergency response and handling',
                        type: 'emergency',
                        targetDrivers: 'All drivers',
                        completionRate: 78,
                        deadline: '2025-07-30',
                      },
                      {
                        key: '3',
                        name: 'Fatigue driving risk and management',
                        type: 'fatigue',
                        targetDrivers: 'Long-distance drivers',
                        completionRate: 65,
                        deadline: '2025-07-10',
                      },
                      {
                        key: '4',
                        name: 'Eco driving',
                        type: 'eco',
                        targetDrivers: 'All drivers',
                        completionRate: 85,
                        deadline: '2025-08-15',
                      },
                      {
                        key: '5',
                        name: 'Passenger safety and service',
                        type: 'passenger',
                        targetDrivers: 'City taxis',
                        completionRate: 95,
                        deadline: '2025-06-30',
                      },
                    ]}
                    pagination={false}
                    size="small"
                  />
                </Card>
              </Col>
              
              <Col xs={24} lg={8}>
                <Card title="Training Effectiveness Analysis" bordered={false}>
                  <Statistic 
                    title="Overall Training Completion Rate" 
                    value={83} 
                    suffix="%" 
                    valueStyle={{ color: '#34c759' }}
                  />
                  
                  <Divider />
                  
                  <div style={{ marginBottom: '16px' }}>
                    <Text strong>Training Safety Metrics Improvement</Text>
                  </div>
                  
                  <Row gutter={[16, 16]}>
                    <Col span={12}>
                      <Card size="small">
                        <Statistic 
                          title="Accident rate reduction" 
                          value={32} 
                          suffix="%" 
                          valueStyle={{ color: '#34c759' }}
                          prefix={<ArrowDownOutlined />}
                        />
                      </Card>
                    </Col>
                    <Col span={12}>
                      <Card size="small">
                        <Statistic 
                          title="Passenger Complaint Reduction" 
                          value={28} 
                          suffix="%" 
                          valueStyle={{ color: '#34c759' }}
                          prefix={<ArrowDownOutlined />}
                        />
                      </Card>
                    </Col>
                    <Col span={12}>
                      <Card size="small">
                        <Statistic 
                          title="Safety score improvement" 
                          value={15} 
                          suffix="%" 
                          valueStyle={{ color: '#34c759' }}
                          prefix={<ArrowUpOutlined />}
                        />
                      </Card>
                    </Col>
                    <Col span={12}>
                      <Card size="small">
                        <Statistic 
                          title="Fuel efficiency improvement" 
                          value={8} 
                          suffix="%" 
                          valueStyle={{ color: '#34c759' }}
                          prefix={<ArrowUpOutlined />}
                        />
                      </Card>
                    </Col>
                  </Row>
                  
                  <Divider />
                  
                  <div style={{ marginBottom: '16px' }}>
                    <Text strong>Training Demand Forecast</Text>
                  </div>
                  
                  <List
                    size="small"
                    dataSource={[
                      { title: 'Night driving safety', priority: 'high' },
                      { title: 'Winter driving skills', priority: 'high' },
                      { title: 'Road danger identification', priority: 'medium' },
                      { title: 'Vehicle safety inspection', priority: 'medium' },
                      { title: 'Passenger conflict handling', priority: 'low' },
                    ]}
                    renderItem={(item) => {
                      let tagColor = 'green';
                      if (item.priority === 'high') tagColor = 'red';
                      else if (item.priority === 'medium') tagColor = 'orange';
                      
                      return (
                        <List.Item>
                          <Space>
                            {item.title}
                            <Tag color={tagColor}>{item.priority === 'high' ? 'High priority' : item.priority === 'medium' ? 'Medium priority' : 'Low priority'}</Tag>
                          </Space>
                        </List.Item>
                      );
                    }}
                  />
                </Card>
              </Col>
              
              <Col xs={24}>
                <Alert
                  message="Training Plan Recommendations"
                  description={
                    <div>
                      <Paragraph>
                        Based on safety data analysis and driver performance, we recommend the following training priorities:
                      </Paragraph>
                      <ol>
                        <li><Text strong>Targeted Training</Text>：For drivers with safety scores below 80, provide personalized training plans focusing on their most common safety issues.</li>
                        <li><Text strong>Real-time Feedback</Text>：Provide instant voice feedback during driving to help drivers correct unsafe driving behaviors.</li>
                        <li><Text strong>Simulation Training</Text>：Use VR technology to simulate various dangerous driving scenarios, improving drivers' ability to handle emergency situations.</li>
                        <li><Text strong>Peer Learning</Text>：Organize safety-rated drivers to pair with those with lower scores, promoting experience sharing and skill enhancement.</li>
                        <li><Text strong>Regular Retraining</Text>：Conduct quarterly safety driving retraining to ensure drivers maintain good safety awareness.</li>
                      </ol>
                      <Paragraph>
                        By implementing the above training plans, we expect a 40% reduction in accident rates, a 35% reduction in passenger complaints, and a 20% increase in overall safety scores.
                      </Paragraph>
                    </div>
                  }
                  type="info"
                  showIcon
                />
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </Card>

      {/* Safety Metrics Table */}
      <Card title="Safety Metrics Details" style={{ marginBottom: '24px' }}>
        <Table 
          columns={metricsColumns} 
          dataSource={metricsData} 
          pagination={false}
        />
      </Card>
    </div>
  );
};

export default SafetyMetrics;
