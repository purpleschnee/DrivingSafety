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
      title: 'u6743u91cd',
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
      name: 'u6025u5239u8f66u6b21u6570',
      current: 38,
      target: 30,
      completion: 79,
      change: -8.5,
      weight: 15,
    },
    {
      key: '3',
      name: 'u6025u52a0u901fu6b21u6570',
      current: 25,
      target: 20,
      completion: 80,
      change: -5.2,
      weight: 10,
    },
    {
      key: '4',
      name: 'u6025u8f6cu5f2fu6b21u6570',
      current: 18,
      target: 15,
      completion: 83,
      change: -10.0,
      weight: 10,
    },
    {
      key: '5',
      name: 'u8d85u901fu6b21u6570',
      current: 15,
      target: 10,
      completion: 67,
      change: -12.5,
      weight: 15,
    },
    {
      key: '6',
      name: 'u4e58u5ba2u6295u8bc9u7387',
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
          if (text === 'obd') return 'OBD设备准确率';
          if (text === 'mobile') return '手机监测准确率';
          return text;
        },
      },
    },
    yAxis: {
      obd: {
        min: 80,
        max: 100,
        title: {
          text: '准确率 (%)',
        },
      },
      mobile: {
        min: 80,
        max: 100,
      },
    },
    meta: {
      obd: {
        alias: 'OBD设备准确率',
      },
      mobile: {
        alias: '手机监测准确率',
      },
    },
  };

  // 乘客评分与安全指标相关性数据
  const correlationData = [
    { metric: '急刹车', correlation: 0.85 },
    { metric: '急加速', correlation: 0.72 },
    { metric: '急转弯', correlation: 0.78 },
    { metric: '超速', correlation: 0.92 },
    { metric: '疲劳驾驶', correlation: 0.89 },
    { metric: '分心驾驶', correlation: 0.81 },
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
        alias: '相关性系数',
        min: 0,
        max: 1,
      },
    },
  };

  // 安全培训效果数据
  const trainingEffectData = [
    { type: '培训前', value: 68 },
    { type: '培训后', value: 86 },
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
        content: '提升',
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
          if (text === 'actual') return '历史数据';
          if (text === 'predicted') return '预测数据';
          return text;
        },
      },
    },
    meta: {
      actual: {
        alias: '历史安全评分',
      },
      predicted: {
        alias: '预测安全评分',
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
        content: '预测区间',
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
  const days = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
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
      if ((day === '周五' || day === '周六') && 
          (hour === '22:00' || hour === '23:00' || hour === '00:00' || hour === '01:00')) {
        value = Math.floor(Math.random() * 30) + 70;
      }
      
      // 工作日早晚高峰
      if (['周一', '周二', '周三', '周四', '周五'].includes(day) && 
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
        alias: '风险指数',
      },
    },
    tooltip: {
      title: '风险指数',
      formatter: (datum) => {
        return { name: `${datum.day} ${datum.hour}`, value: datum.value };
      },
    },
  };

  // 高风险驾驶员数据
  const highRiskDriversData = [
    { key: '1', id: 'D-8294', name: '张明', score: 62, incidents: 8, trend: 'down', riskLevel: 'high' },
    { key: '2', id: 'D-7391', name: '李强', score: 65, incidents: 6, trend: 'down', riskLevel: 'high' },
    { key: '3', id: 'D-5672', name: '王伟', score: 68, incidents: 5, trend: 'stable', riskLevel: 'medium' },
    { key: '4', id: 'D-9012', name: '赵刚', score: 70, incidents: 4, trend: 'up', riskLevel: 'medium' },
    { key: '5', id: 'D-3458', name: '陈勇', score: 71, incidents: 4, trend: 'up', riskLevel: 'medium' },
  ];

  // 高风险驾驶员表格列配置
  const highRiskDriversColumns = [
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
      dataIndex: 'score',
      key: 'score',
      render: (score) => (
        <span style={{ color: score < 65 ? '#ff3b30' : score < 75 ? '#ff9500' : '#34c759' }}>
          {score}
        </span>
      ),
    },
    {
      title: '近30天事件',
      dataIndex: 'incidents',
      key: 'incidents',
    },
    {
      title: '趋势',
      dataIndex: 'trend',
      key: 'trend',
      render: (trend) => {
        if (trend === 'up') {
          return <Tag color="green"><RiseOutlined /> 改善中</Tag>;
        } else if (trend === 'down') {
          return <Tag color="red"><FallOutlined /> 恶化中</Tag>;
        } else {
          return <Tag color="blue">稳定</Tag>;
        }
      },
    },
    {
      title: '风险等级',
      dataIndex: 'riskLevel',
      key: 'riskLevel',
      render: (level) => {
        if (level === 'high') {
          return <Tag color="red">高风险</Tag>;
        } else if (level === 'medium') {
          return <Tag color="orange">中风险</Tag>;
        } else {
          return <Tag color="green">低风险</Tag>;
        }
      },
    },
    {
      title: '操作',
      key: 'action',
      render: () => (
        <Space size="small">
          <Button type="link" size="small">详情</Button>
          <Button type="link" size="small">干预</Button>
        </Space>
      ),
    },
  ];

  // 风险干预建议
  const interventionSuggestions = [
    {
      title: '针对高风险时段增加巡检',
      description: '周五和周六晚间22:00-02:00增加路面巡检和随机检查，重点关注酒驾和疲劳驾驶。',
      priority: 'high',
    },
    {
      title: '对高风险驾驶员进行专项培训',
      description: '为安全评分低于70分的驾驶员安排专项安全培训，重点培训防御性驾驶技巧。',
      priority: 'high',
    },
    {
      title: '优化高峰期排班',
      description: '工作日早晚高峰期（8-9点，17-18点）增加驾驶员轮换频率，避免单个驾驶员连续工作时间过长。',
      priority: 'medium',
    },
    {
      title: '深夜驾驶员疲劳监测',
      description: '为深夜（23:00-5:00）工作的驾驶员配备疲劳监测设备，发现疲劳驾驶迹象立即提醒。',
      priority: 'medium',
    },
    {
      title: '安装车载ADAS系统',
      description: '为所有车辆安装高级驾驶辅助系统(ADAS)，提供车道偏离警告、前方碰撞预警等功能。',
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
      driverName: '李强',
      passengerName: '王小明',
      safetyRating: 2,
      feedbackType: '超速行驶',
      feedbackDetail: '司机在高速公路上超速行驶，让人感到非常不安全。',
      status: '已处理',
      resolution: '已对驾驶员进行警告并安排参加安全驾驶培训。',
    },
    {
      key: '2',
      date: '2025-06-02',
      tripId: 'T-78946',
      driverId: 'D-8294',
      driverName: '张明',
      passengerName: '张三',
      safetyRating: 1,
      feedbackType: '急刹车',
      feedbackDetail: '司机多次紧急刹车，造成乘客头部撞到前排座椅。',
      status: '处理中',
      resolution: '正在调查驾驶员行为并安排进一步培训。',
    },
    {
      key: '3',
      date: '2025-06-03',
      tripId: 'T-78947',
      driverId: 'D-5672',
      driverName: '王伟',
      passengerName: '李四',
      safetyRating: 3,
      feedbackType: '疲劳驾驶',
      feedbackDetail: '司机看起来非常疲惫，驾驶过程中打哈欠多次。',
      status: '待处理',
      resolution: '',
    },
    {
      key: '4',
      date: '2025-06-04',
      tripId: 'T-78948',
      driverId: 'D-3458',
      driverName: '陈勇',
      passengerName: '赵五',
      safetyRating: 2,
      feedbackType: '分心驾驶',
      feedbackDetail: '司机在驾驶过程中不断玩手机，多次错过路口。',
      status: '待处理',
      resolution: '',
    },
    {
      key: '5',
      date: '2025-06-05',
      tripId: 'T-78949',
      driverId: 'D-9012',
      driverName: '赵刚',
      passengerName: '王六',
      safetyRating: 4,
      feedbackType: '车辆状况',
      feedbackDetail: '车辆制动系统差，刹车时有异响。',
      status: '已处理',
      resolution: '已安排车辆维修并更换制动系统。',
    },
  ];

  // 乘客安全反馈类型分布
  const feedbackTypeData = [
    { type: '超速行驶', value: 35 },
    { type: '急刹车', value: 28 },
    { type: '分心驾驶', value: 22 },
    { type: '疲劳驾驶', value: 18 },
    { type: '车辆状况', value: 12 },
    { type: '其他', value: 5 },
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
      title: '日期',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '行程ID',
      dataIndex: 'tripId',
      key: 'tripId',
    },
    {
      title: '驾驶员ID',
      dataIndex: 'driverId',
      key: 'driverId',
    },
    {
      title: '驾驶员姓名',
      dataIndex: 'driverName',
      key: 'driverName',
    },
    {
      title: '乘客姓名',
      dataIndex: 'passengerName',
      key: 'passengerName',
    },
    {
      title: '安全评分',
      dataIndex: 'safetyRating',
      key: 'safetyRating',
      render: (rating) => (
        <Rate value={rating} disabled />
      ),
    },
    {
      title: '反馈类型',
      dataIndex: 'feedbackType',
      key: 'feedbackType',
    },
    {
      title: '反馈详情',
      dataIndex: 'feedbackDetail',
      key: 'feedbackDetail',
      ellipsis: true,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        if (status === '已处理') {
          return <Tag color="green">已处理</Tag>;
        } else if (status === '处理中') {
          return <Tag color="blue">处理中</Tag>;
        } else {
          return <Tag color="red">待处理</Tag>;
        }
      },
    },
    {
      title: '解决方案',
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
      driverName: '李强',
      event: '超速行驶',
      location: '北京市朝阳区建国路',
      severity: 'high',
      status: 'new',
    },
    {
      id: 'RT-1002',
      time: '10:28:45',
      driverId: 'D-8294',
      driverName: '张明',
      event: '急刹车',
      location: '北京市海淀区中关村大街',
      severity: 'medium',
      status: 'processing',
    },
    {
      id: 'RT-1003',
      time: '10:15:33',
      driverId: 'D-5672',
      driverName: '王伟',
      event: '疲劳驾驶',
      location: '北京市西城区西长安街',
      severity: 'high',
      status: 'processing',
    },
    {
      id: 'RT-1004',
      time: '10:02:18',
      driverId: 'D-3458',
      driverName: '陈勇',
      event: '分心驾驶',
      location: '北京市东城区东长安街',
      severity: 'medium',
      status: 'resolved',
    },
    {
      id: 'RT-1005',
      time: '09:48:52',
      driverId: 'D-9012',
      driverName: '赵刚',
      event: '急转弯',
      location: '北京市丰台区丰台路',
      severity: 'low',
      status: 'resolved',
    },
  ];

  return (
    <div className="safety-metrics-container">
      <Title level={3}>安全指标分析</Title>
      <Text type="secondary" style={{ marginBottom: '24px', display: 'block' }}>
        全面分析和监控驾驶安全指标、趋势和相关性
      </Text>
      
      {/* 筛选和控制区域 */}
      <Card style={{ marginBottom: '24px' }}>
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} md={6}>
            <Text strong>时间范围：</Text>
            <Select 
              style={{ width: '80%', marginLeft: '10px' }} 
              defaultValue="month"
              onChange={(value) => setTimeRange(value)}
            >
              <Option value="week">最近一周</Option>
              <Option value="month">最近一个月</Option>
              <Option value="quarter">最近一个季度</Option>
              <Option value="year">最近一年</Option>
            </Select>
          </Col>
          <Col xs={24} md={8}>
            <Text strong>自定义日期：</Text>
            <RangePicker style={{ width: '80%', marginLeft: '10px' }} />
          </Col>
          <Col xs={24} md={6}>
            <Button icon={<DownloadOutlined />} type="primary">导出报告</Button>
          </Col>
        </Row>
      </Card>

      {/* 安全指标概览 */}
      <Row gutter={[24, 24]} style={{ marginBottom: '24px' }}>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="平均安全评分"
              value={85}
              suffix="/ 100"
              valueStyle={{ color: '#0071e3' }}
            />
            <div style={{ marginTop: '10px' }}>
              <Text type="success">
                <ArrowUpOutlined /> 3.5% 较上月
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
              title="安全指标达标率"
              value={92}
              suffix="%"
              valueStyle={{ color: '#34c759' }}
            />
            <div style={{ marginTop: '10px' }}>
              <Text type="success">
                <ArrowUpOutlined /> 4.2% 较上月
              </Text>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card>
            <Statistic
              title="驾驶员培训完成率"
              value={78}
              suffix="%"
              valueStyle={{ color: '#5ac8fa' }}
            />
            <div style={{ marginTop: '10px' }}>
              <Text type="success">
                <ArrowUpOutlined /> 12.3% 较上月
              </Text>
            </div>
          </Card>
        </Col>
      </Row>

      {/* 安全指标详细分析 */}
      <Card style={{ marginBottom: '24px' }}>
        <Tabs defaultActiveKey="1" onChange={setActiveTab}>
          <TabPane tab="安全趋势" key="1">
            <Row gutter={[24, 24]}>
              <Col xs={24} lg={12}>
                <Card title="安全评分趋势" bordered={false}>
                  <Line {...safetyTrendConfig} />
                </Card>
              </Col>
              <Col xs={24} lg={12}>
                <Card title="安全事件趋势" bordered={false}>
                  <Line {...incidentTrendConfig} />
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="安全指标详情" key="2">
            <Row gutter={[24, 24]}>
              <Col xs={24} lg={12}>
                <Card title="安全指标雷达图" bordered={false}>
                  <Radar {...radarConfig} />
                </Card>
              </Col>
              <Col xs={24} lg={12}>
                <Card title="总体安全评分" bordered={false}>
                  <Gauge {...gaugeConfig} />
                </Card>
              </Col>
              <Col xs={24}>
                <Card title="安全指标明细" bordered={false}>
                  <Table 
                    columns={metricsColumns} 
                    dataSource={metricsData} 
                    pagination={false} 
                  />
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="数据采集分析" key="3">
            <Row gutter={[24, 24]}>
              <Col xs={24}>
                <Alert
                  message="数据采集技术对比"
                  description={
                    <Paragraph>
                      <Text>本页展示了OBD设备与手机监测模块的数据采集对比。OBD设备采样率为100Hz，手机数据采样率为50Hz。</Text>
                      <ul>
                        <li><Text strong>OBD优势：</Text>直接连接车辆系统，数据更准确，但安装成本较高。</li>
                        <li><Text strong>手机监测优势：</Text>部署简单，成本低，但在某些情况下准确性略低。</li>
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
                  title="OBD与手机监测准确率对比" 
                  bordered={false}
                  extra={<Tooltip title="数据来源于实验室测试和实际道路测试的综合结果"><InfoCircleOutlined /></Tooltip>}
                >
                  <DualAxes {...deviceComparisonConfig} />
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card title="数据采集方式对比" bordered={false}>
                  <Space direction="vertical" style={{ width: '100%' }}>
                    <Card type="inner" title="OBD设备" extra={<CarOutlined />}>
                      <Statistic title="数据准确率" value="97.5%" valueStyle={{ color: '#5ac8fa' }} />
                      <Statistic title="采样频率" value="100Hz" style={{ marginTop: '16px' }} />
                      <Statistic title="丢包率" value="0.5%" style={{ marginTop: '16px' }} valueStyle={{ color: '#34c759' }} />
                      <div style={{ marginTop: '16px' }}>
                        <Tag color="green">高精度</Tag>
                        <Tag color="blue">稳定性强</Tag>
                        <Tag color="orange">成本较高</Tag>
                      </div>
                    </Card>
                    <Card type="inner" title="手机监测" extra={<MobileOutlined />}>
                      <Statistic title="数据准确率" value="93.8%" valueStyle={{ color: '#ff9500' }} />
                      <Statistic title="采样频率" value="50Hz" style={{ marginTop: '16px' }} />
                      <Statistic title="丢包率" value="2.3%" style={{ marginTop: '16px' }} valueStyle={{ color: '#ff9500' }} />
                      <div style={{ marginTop: '16px' }}>
                        <Tag color="blue">部署简便</Tag>
                        <Tag color="green">成本低</Tag>
                        <Tag color="orange">信号弱区表现欠佳</Tag>
                      </div>
                    </Card>
                  </Space>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="乘客反馈相关性" key="4">
            <Row gutter={[24, 24]}>
              <Col xs={24}>
                <Alert
                  message="乘客评分与安全指标相关性分析"
                  description="以下数据展示了各项安全指标与乘客评分之间的相关性系数。相关性越高，表示该指标对乘客感知安全的影响越大。"
                  type="info"
                  showIcon
                  style={{ marginBottom: '24px' }}
                />
              </Col>
              <Col xs={24} lg={16}>
                <Card title="乘客评分与安全指标相关性" bordered={false}>
                  <Column {...correlationConfig} />
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card title="关键发现" bordered={false}>
                  <ul>
                    <li>
                      <Text strong>超速行为</Text>与乘客安全感知<Text type="danger">相关性最高(92%)</Text>，
                      应重点控制车速。
                    </li>
                    <li>
                      <Text strong>疲劳驾驶</Text>是乘客关注的第二大因素，相关性达<Text type="warning">89%</Text>。
                    </li>
                    <li>
                      <Text strong>急刹车</Text>对乘客体验影响显著，相关性为<Text type="warning">85%</Text>。
                    </li>
                    <li>
                      <Text strong>急加速</Text>相关性相对较低，但仍达<Text type="success">72%</Text>。
                    </li>
                  </ul>
                  <Divider />
                  
                  <Paragraph>
                    <Text type="secondary">
                      基于上述分析，建议优先改善超速和疲劳驾驶问题，可显著提升乘客安全满意度。
                    </Text>
                  </Paragraph>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="培训效果分析" key="5">
            <Row gutter={[24, 24]}>
              <Col xs={24} lg={12}>
                <Card title="安全培训效果" bordered={false}>
                  <Pie {...trainingEffectConfig} />
                </Card>
              </Col>
              <Col xs={24} lg={12}>
                <Card title="培训效果详情" bordered={false}>
                  <Paragraph>
                    <Text>安全培训对驾驶员安全评分的提升效果显著，平均提升了</Text>
                    <Text strong style={{ fontSize: '18px', color: '#34c759' }}> 26.5% </Text>
                    <Text>。培训后的安全事件发生率降低了</Text>
                    <Text strong style={{ fontSize: '18px', color: '#34c759' }}> 38.2% </Text>
                    <Text>。</Text>
                  </Paragraph>
                  
                  <Title level={5} style={{ marginTop: '16px' }}>培训课程效果排名：</Title>
                  <ol>
                    <li><Text strong>应急情况处理</Text> - 提升效果 <Text type="success">34.7%</Text></li>
                    <li><Text strong>安全驾驶基础</Text> - 提升效果 <Text type="success">29.3%</Text></li>
                    <li><Text strong>疲劳驾驶防范</Text> - 提升效果 <Text type="success">25.8%</Text></li>
                    <li><Text strong>防御性驾驶技巧</Text> - 提升效果 <Text type="success">22.1%</Text></li>
                  </ol>
                  
                  <Alert
                    message="培训建议"
                    description="根据分析结果，建议增加应急情况处理和安全驾驶基础课程的培训频次，并将这两门课程设为所有驾驶员的必修课程。"
                    type="success"
                    showIcon
                    style={{ marginTop: '16px' }}
                  />
                </Card>
              </Col>
              <Col xs={24}>
                <Card title="培训完成情况" bordered={false}>
                  <Table 
                    columns={[
                      { title: '培训课程', dataIndex: 'course', key: 'course' },
                      { title: '参与人数', dataIndex: 'participants', key: 'participants' },
                      { title: '完成率', dataIndex: 'completion', key: 'completion',
                        render: (completion) => (
                          <Progress 
                            percent={completion} 
                            size="small" 
                            status={completion >= 90 ? 'success' : completion >= 70 ? 'normal' : 'exception'}
                          />
                        ),
                      },
                      { title: '平均分数', dataIndex: 'avgScore', key: 'avgScore' },
                      { title: '安全评分提升', dataIndex: 'improvement', key: 'improvement',
                        render: (improvement) => <Text type="success">+{improvement}%</Text>,
                      },
                    ]} 
                    dataSource={[
                      { key: '1', course: '安全驾驶基础', participants: 120, completion: 95, avgScore: 88, improvement: 29.3 },
                      { key: '2', course: '应急情况处理', participants: 98, completion: 87, avgScore: 92, improvement: 34.7 },
                      { key: '3', course: '疲劳驾驶防范', participants: 105, completion: 82, avgScore: 85, improvement: 25.8 },
                      { key: '4', course: '防御性驾驶技巧', participants: 86, completion: 76, avgScore: 83, improvement: 22.1 },
                      { key: '5', course: '乘客服务与沟通', participants: 112, completion: 91, avgScore: 90, improvement: 18.5 },
                    ]} 
                    pagination={false} 
                  />
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="预测分析" key="6">
            <Row gutter={[24, 24]}>
              <Col xs={24}>
                <Alert
                  message="安全评分预测分析"
                  description="基于历史数据和机器学习算法，系统预测了未来6个月的安全评分趋势。预测考虑了季节性因素、驾驶员培训计划和历史改进率。"
                  type="info"
                  showIcon
                  style={{ marginBottom: '24px' }}
                />
              </Col>
              <Col xs={24} lg={16}>
                <Card 
                  title="安全评分预测趋势" 
                  bordered={false}
                  extra={<Tooltip title="预测基于过去12个月数据，使用时间序列分析和机器学习算法"><InfoCircleOutlined /></Tooltip>}
                >
                  <DualAxes {...predictionConfig} />
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card title="预测分析结论" bordered={false}>
                  <List
                    itemLayout="horizontal"
                    dataSource={[
                      {
                        title: '安全评分预计提升',
                        description: '预计未来6个月安全评分将从当前的85分提升至94分，提升幅度约10.6%。',
                        icon: <RiseOutlined style={{ color: '#34c759' }} />,
                      },
                      {
                        title: '关键改进因素',
                        description: '驾驶员培训计划完成率提高和新安全监测设备部署是主要贡献因素。',
                        icon: <CheckCircleOutlined style={{ color: '#5ac8fa' }} />,
                      },
                      {
                        title: '潜在风险因素',
                        description: '预测模型显示，如果不解决疲劳驾驶问题，可能会限制安全评分的提升。',
                        icon: <ExclamationCircleOutlined style={{ color: '#ff9500' }} />,
                      },
                    ]}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={item.icon}
                          title={<Text strong>{item.title}</Text>}
                          description={item.description}
                        />
                      </List.Item>
                    )}
                  />
                  
                  <Divider orientation="left">建议行动</Divider>
                  
                  <ul>
                    <li>继续推进驾驶员安全培训计划，重点关注疲劳驾驶防范。</li>
                    <li>加速部署新一代安全监测设备，提高数据采集准确性。</li>
                    <li>优化驾驶员排班，减少连续工作时间过长的情况。</li>
                  </ul>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="风险评估" key="7">
            <Row gutter={[24, 24]}>
              <Col xs={24}>
                <Alert
                  message="风险时段分析"
                  description="以下热力图展示了不同时段的安全风险指数，帮助识别高风险时间段，优化资源分配和安全管理策略。"
                  type="warning"
                  showIcon
                  style={{ marginBottom: '24px' }}
                />
              </Col>
              <Col xs={24} lg={16}>
                <Card 
                  title="安全风险热力图" 
                  bordered={false}
                  extra={<Tooltip title="数据基于过去3个月的安全事件统计"><InfoCircleOutlined /></Tooltip>}
                >
                  <Heatmap {...riskHeatmapConfig} />
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card title="高风险时段分析" bordered={false}>
                  <Paragraph>
                    <Text>热力图分析显示，以下时段安全风险较高：</Text>
                  </Paragraph>
                  
                  <List
                    size="small"
                    dataSource={[
                      { time: '周五和周六晚间 (22:00-02:00)', risk: '酒驾风险增加，乘客不文明行为增多' },
                      { time: '工作日早晚高峰 (8-9点，17-18点)', risk: '交通拥堵导致驾驶员压力增大，急躁驾驶行为增多' },
                      { time: '凌晨时段 (03:00-05:00)', risk: '驾驶员疲劳程度高，注意力不集中' },
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
                  
                  <Title level={5}>高风险驾驶员</Title>
                  <Table 
                    columns={highRiskDriversColumns} 
                    dataSource={highRiskDriversData} 
                    pagination={false} 
                    size="small"
                  />
                </Card>
              </Col>
              
              <Col xs={24}>
                <Card title="风险干预建议" bordered={false}>
                  <List
                    itemLayout="horizontal"
                    dataSource={interventionSuggestions}
                    renderItem={(item) => (
                      <List.Item
                        extra={
                          <Tag color={item.priority === 'high' ? 'red' : item.priority === 'medium' ? 'orange' : 'blue'}>
                            {item.priority === 'high' ? '高优先级' : item.priority === 'medium' ? '中优先级' : '低优先级'}
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
          <TabPane tab="实时监控" key="8">
            <Row gutter={[24, 24]}>
              <Col xs={24} lg={16}>
                <Card 
                  title="实时安全事件监控" 
                  bordered={false}
                  extra={<Badge count={2} style={{ backgroundColor: '#ff3b30' }} />}
                >
                  <Table
                    columns={[
                      {
                        title: '事件ID',
                        dataIndex: 'id',
                        key: 'id',
                        width: 100,
                      },
                      {
                        title: '时间',
                        dataIndex: 'time',
                        key: 'time',
                        width: 100,
                        render: (text) => <span><ClockCircleOutlined style={{ marginRight: '5px' }} />{text}</span>,
                      },
                      {
                        title: '驾驶员',
                        dataIndex: 'driverName',
                        key: 'driverName',
                        width: 100,
                        render: (text, record) => <span>{text} ({record.driverId})</span>,
                      },
                      {
                        title: '事件类型',
                        dataIndex: 'event',
                        key: 'event',
                        width: 120,
                      },
                      {
                        title: '位置',
                        dataIndex: 'location',
                        key: 'location',
                        ellipsis: true,
                      },
                      {
                        title: '严重程度',
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
                        title: '状态',
                        dataIndex: 'status',
                        key: 'status',
                        width: 120,
                        render: (status) => {
                          if (status === 'new') {
                            return <Badge status="error" text="新事件" />;
                          } else if (status === 'processing') {
                            return <Badge status="processing" text="处理中" />;
                          } else {
                            return <Badge status="success" text="已解决" />;
                          }
                        },
                      },
                      {
                        title: '操作',
                        key: 'action',
                        width: 120,
                        render: (_, record) => (
                          <Space size="small">
                            <Button type="link" size="small">详情</Button>
                            {record.status !== 'resolved' && (
                              <Button type="link" size="small">处理</Button>
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
                    <Button type="primary" icon={<BellOutlined />}>设置警报规则</Button>
                  </div>
                </Card>
              </Col>
              
              <Col xs={24} lg={8}>
                <Card title="今日事件时间线" bordered={false}>
                  <Timeline style={{ marginTop: '16px' }}>
                    <Timeline.Item color="red">
                      <p><Text strong>10:35:22</Text> - 李强 <Tag color="red">超速行驶</Tag></p>
                      <p><Text type="secondary">北京市朝阳区建国路，超速35%</Text></p>
                    </Timeline.Item>
                    <Timeline.Item color="orange">
                      <p><Text strong>10:28:45</Text> - 张明 <Tag color="orange">急刹车</Tag></p>
                      <p><Text type="secondary">北京市海淀区中关村大街，减速度0.8g</Text></p>
                    </Timeline.Item>
                    <Timeline.Item color="red">
                      <p><Text strong>10:15:33</Text> - 王伟 <Tag color="red">疲劳驾驶</Tag></p>
                      <p><Text type="secondary">北京市西城区西长安街，连续驾驶4.5小时</Text></p>
                    </Timeline.Item>
                    <Timeline.Item color="orange">
                      <p><Text strong>10:02:18</Text> - 陈勇 <Tag color="orange">分心驾驶</Tag></p>
                      <p><Text type="secondary">北京市东城区东长安街，注意力分散15秒</Text></p>
                    </Timeline.Item>
                    <Timeline.Item color="green">
                      <p><Text strong>09:48:52</Text> - 赵刚 <Tag color="green">急转弯</Tag></p>
                      <p><Text type="secondary">北京市丰台区丰台路，横向加速度0.4g</Text></p>
                    </Timeline.Item>
                  </Timeline>
                  
                  <Divider />
                  
                  <Statistic 
                    title="今日安全事件总数" 
                    value={27} 
                    suffix="/ 较昨日 -12%" 
                    valueStyle={{ color: '#34c759' }}
                  />
                </Card>
              </Col>
              
              <Col xs={24}>
                <Alert
                  message="实时监控说明"
                  description={
                    <div>
                      <Paragraph>
                        实时监控系统通过OBD设备和手机传感器收集驾驶行为数据，当检测到异常驾驶行为时立即生成安全事件警报。系统根据以下规则判定事件严重程度：
                      </Paragraph>
                      <ul>
                        <li><Text strong>高风险事件（红色）</Text>：超速30%以上、严重疲劳驾驶（连续驾驶4小时以上）、酒驾嫌疑等</li>
                        <li><Text strong>中风险事件（橙色）</Text>：急刹车（减速度{'>'}0.7g）、分心驾驶（注意力分散{'>'}10秒）、超速10-30%等</li>
                        <li><Text strong>低风险事件（绿色）</Text>：轻微急转弯、轻微急加速、短暂分心等</li>
                      </ul>
                      <Paragraph>
                        系统会自动将高风险事件推送给管理人员，并根据公司安全管理流程进行干预。所有事件数据将用于驾驶员安全评分计算和培训需求分析。
                      </Paragraph>
                    </div>
                  }
                  type="info"
                  showIcon
                />
              </Col>
            </Row>
          </TabPane>
          <TabPane tab="乘客安全反馈" key="9">
            <Row gutter={[24, 24]}>
              <Col xs={24} lg={16}>
                <Card 
                  title="乘客安全反馈列表" 
                  bordered={false}
                  extra={<Button type="primary" icon={<DownloadOutlined />} size="small">导出数据</Button>}
                >
                  <Table
                    columns={[
                      {
                        title: '日期',
                        dataIndex: 'date',
                        key: 'date',
                        width: 100,
                        sorter: (a, b) => new Date(a.date) - new Date(b.date),
                      },
                      {
                        title: '行程号',
                        dataIndex: 'tripId',
                        key: 'tripId',
                        width: 100,
                      },
                      {
                        title: '驾驶员',
                        dataIndex: 'driverName',
                        key: 'driverName',
                        width: 100,
                        render: (text, record) => <span>{text} ({record.driverId})</span>,
                      },
                      {
                        title: '安全评分',
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
                        title: '问题类型',
                        dataIndex: 'feedbackType',
                        key: 'feedbackType',
                        width: 120,
                        filters: [
                          { text: '超速行驶', value: '超速行驶' },
                          { text: '急刹车', value: '急刹车' },
                          { text: '分心驾驶', value: '分心驾驶' },
                          { text: '疲劳驾驶', value: '疲劳驾驶' },
                          { text: '车辆状况', value: '车辆状况' },
                        ],
                        onFilter: (value, record) => record.feedbackType === value,
                      },
                      {
                        title: '反馈详情',
                        dataIndex: 'feedbackDetail',
                        key: 'feedbackDetail',
                        ellipsis: true,
                      },
                      {
                        title: '状态',
                        dataIndex: 'status',
                        key: 'status',
                        width: 100,
                        render: (status) => {
                          if (status === '待处理') {
                            return <Badge status="error" text="待处理" />;
                          } else if (status === '处理中') {
                            return <Badge status="processing" text="处理中" />;
                          } else {
                            return <Badge status="success" text="已处理" />;
                          }
                        },
                        filters: [
                          { text: '待处理', value: '待处理' },
                          { text: '处理中', value: '处理中' },
                          { text: '已处理', value: '已处理' },
                        ],
                        onFilter: (value, record) => record.status === value,
                      },
                      {
                        title: '操作',
                        key: 'action',
                        width: 120,
                        render: (_, record) => (
                          <Space size="small">
                            <Button type="link" size="small">详情</Button>
                            {record.status !== '已处理' && (
                              <Button type="link" size="small">处理</Button>
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
                          <Text strong>处理结果：</Text> {record.resolution || '暂无处理结果'}
                        </p>
                      ),
                    }}
                  />
                </Card>
              </Col>
              
              <Col xs={24} lg={8}>
                <Row gutter={[0, 24]}>
                  <Col xs={24}>
                    <Card title="安全问题类型分布" bordered={false}>
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
                    <Card title="乘客安全满意度趋势" bordered={false}>
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
                          title="当前月安全满意度" 
                          value={3.9} 
                          precision={1}
                          valueStyle={{ color: '#34c759' }}
                          suffix="/ 5分"
                          prefix={<ArrowUpOutlined />}
                        />
                      </div>
                    </Card>
                  </Col>
                </Row>
              </Col>
              
              <Col xs={24}>
                <Card title="乘客安全反馈分析与建议" bordered={false}>
                  <Row gutter={[24, 24]}>
                    <Col xs={24} md={8}>
                      <Statistic 
                        title="本月安全反馈总数" 
                        value={120} 
                        valueStyle={{ color: '#1890ff' }}
                      />
                      <Paragraph style={{ marginTop: '8px' }}>
                        <Text type="secondary">较上月减少 15 条，降低率 11.1%</Text>
                      </Paragraph>
                    </Col>
                    
                    <Col xs={24} md={8}>
                      <Statistic 
                        title="严重安全问题（1-2星）" 
                        value={28} 
                        valueStyle={{ color: '#ff3b30' }}
                      />
                      <Paragraph style={{ marginTop: '8px' }}>
                        <Text type="secondary">占总反馈的 23.3%，较上月降低 5.2%</Text>
                      </Paragraph>
                    </Col>
                    
                    <Col xs={24} md={8}>
                      <Statistic 
                        title="已解决反馈比例" 
                        value={78.3} 
                        suffix="%" 
                        valueStyle={{ color: '#34c759' }}
                      />
                      <Paragraph style={{ marginTop: '8px' }}>
                        <Text type="secondary">较上月提高 8.7%，响应速度明显改善</Text>
                      </Paragraph>
                    </Col>
                  </Row>
                  
                  <Divider />
                  
                  <Title level={5}>主要发现与改进建议</Title>
                  
                  <List
                    size="small"
                    bordered
                    dataSource={[
                      '超速行驶仍是乘客反馈最多的安全问题，建议加强驾驶员速度管理培训和实时监控。',
                      '急刹车和分心驾驶问题往往相互关联，建议强化防御性驾驶培训和注意力集中度检测。',
                      '安全满意度趋势持续上升，与驾驶员培训完成率和安全事件处理效率呈正相关。',
                      '建议对频繁收到安全反馈的驾驶员进行重点关注和个性化指导，并定期跟踪改进情况。',
                      '建立乘客安全反馈快速响应机制，确保严重安全问题在24小时内得到处理和反馈。',
                    ]}
                    renderItem={(item, index) => (
                      <List.Item>
                        <Text mark>{`发现 ${index + 1}:`}</Text> {item}
                      </List.Item>
                    )}
                  />
                  
                  <Alert
                    message="安全反馈问题处理流程"
                    description={
                      <Steps size="small" current={4} direction="vertical">
                        <Steps.Step title="接收反馈" description="系统自动收集乘客安全反馈并分类" />
                        <Steps.Step title="风险评估" description="根据反馈内容和评分判断问题严重程度" />
                        <Steps.Step title="问题分配" description="将问题分配给相关负责人进行处理" />
                        <Steps.Step title="处理与改进" description="采取相应措施解决问题并记录处理结果" />
                        <Steps.Step title="反馈跟踪" description="定期跟踪驾驶员改进情况并更新安全评分" />
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

          <TabPane tab="驾驶员安全培训" key="10">
            <Row gutter={[24, 24]}>
              <Col xs={24} lg={16}>
                <Card 
                  title="安全培训课程与完成情况" 
                  bordered={false}
                  extra={<Button type="primary" size="small">新增培训</Button>}
                >
                  <Table
                    columns={[
                      {
                        title: '课程名称',
                        dataIndex: 'name',
                        key: 'name',
                        width: 220,
                      },
                      {
                        title: '类型',
                        dataIndex: 'type',
                        key: 'type',
                        width: 120,
                        render: (type) => {
                          const typeMap = {
                            'defensive': { color: 'blue', text: '防御性驾驶' },
                            'emergency': { color: 'red', text: '紧急情况' },
                            'fatigue': { color: 'orange', text: '疲劳管理' },
                            'eco': { color: 'green', text: '经济驾驶' },
                            'passenger': { color: 'purple', text: '乘客服务' },
                          };
                          return <Tag color={typeMap[type].color}>{typeMap[type].text}</Tag>;
                        },
                        filters: [
                          { text: '防御性驾驶', value: 'defensive' },
                          { text: '紧急情况', value: 'emergency' },
                          { text: '疲劳管理', value: 'fatigue' },
                          { text: '经济驾驶', value: 'eco' },
                          { text: '乘客服务', value: 'passenger' },
                        ],
                        onFilter: (value, record) => record.type === value,
                      },
                      {
                        title: '目标驾驶员',
                        dataIndex: 'targetDrivers',
                        key: 'targetDrivers',
                        width: 120,
                      },
                      {
                        title: '完成率',
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
                        title: '截止日期',
                        dataIndex: 'deadline',
                        key: 'deadline',
                        width: 120,
                        render: (date, record) => {
                          const today = new Date();
                          const deadlineDate = new Date(date);
                          const daysLeft = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24));
                          
                          if (daysLeft < 0) {
                            return <Text type="danger">{date} (已过期)</Text>;
                          } else if (daysLeft <= 7) {
                            return <Text type="warning">{date} (剩余 {daysLeft} 天)</Text>;
                          } else {
                            return <Text>{date}</Text>;
                          }
                        },
                        sorter: (a, b) => new Date(a.deadline) - new Date(b.deadline),
                      },
                      {
                        title: '操作',
                        key: 'action',
                        width: 120,
                        render: () => (
                          <Space size="small">
                            <Button type="link" size="small">详情</Button>
                            <Button type="link" size="small">提醒</Button>
                          </Space>
                        ),
                      },
                    ]}
                    dataSource={[
                      {
                        key: '1',
                        name: '防御性驾驶技巧',
                        type: 'defensive',
                        targetDrivers: '全体驾驶员',
                        completionRate: 92,
                        deadline: '2025-07-15',
                      },
                      {
                        key: '2',
                        name: '紧急情况应对与处理',
                        type: 'emergency',
                        targetDrivers: '全体驾驶员',
                        completionRate: 78,
                        deadline: '2025-07-30',
                      },
                      {
                        key: '3',
                        name: '疲劳驾驶风险与管理',
                        type: 'fatigue',
                        targetDrivers: '长途驾驶员',
                        completionRate: 65,
                        deadline: '2025-07-10',
                      },
                      {
                        key: '4',
                        name: '经济与环保驾驶',
                        type: 'eco',
                        targetDrivers: '全体驾驶员',
                        completionRate: 85,
                        deadline: '2025-08-15',
                      },
                      {
                        key: '5',
                        name: '乘客安全与服务',
                        type: 'passenger',
                        targetDrivers: '城市出租车',
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
                <Card title="培训效果分析" bordered={false}>
                  <Statistic 
                    title="整体培训完成率" 
                    value={83} 
                    suffix="%" 
                    valueStyle={{ color: '#34c759' }}
                  />
                  
                  <Divider />
                  
                  <div style={{ marginBottom: '16px' }}>
                    <Text strong>培训后安全指标改善情况</Text>
                  </div>
                  
                  <Row gutter={[16, 16]}>
                    <Col span={12}>
                      <Card size="small">
                        <Statistic 
                          title="事故率降低" 
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
                          title="乘客投诉减少" 
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
                          title="安全评分提升" 
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
                          title="燃油效率提升" 
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
                    <Text strong>培训需求预测</Text>
                  </div>
                  
                  <List
                    size="small"
                    dataSource={[
                      { title: '夜间驾驶安全', priority: 'high' },
                      { title: '恶劣天气驾驶技巧', priority: 'high' },
                      { title: '道路危险识别', priority: 'medium' },
                      { title: '车辆安全检查', priority: 'medium' },
                      { title: '乘客冲突处理', priority: 'low' },
                    ]}
                    renderItem={(item) => {
                      let tagColor = 'green';
                      if (item.priority === 'high') tagColor = 'red';
                      else if (item.priority === 'medium') tagColor = 'orange';
                      
                      return (
                        <List.Item>
                          <Space>
                            {item.title}
                            <Tag color={tagColor}>{item.priority === 'high' ? '高优先级' : item.priority === 'medium' ? '中优先级' : '低优先级'}</Tag>
                          </Space>
                        </List.Item>
                      );
                    }}
                  />
                </Card>
              </Col>
              
              <Col xs={24}>
                <Alert
                  message="培训计划建议"
                  description={
                    <div>
                      <Paragraph>
                        基于安全数据分析和驾驶员表现，我们建议以下培训重点：
                      </Paragraph>
                      <ol>
                        <li><Text strong>针对性培训</Text>：为安全评分低于80分的驾驶员提供个性化培训计划，重点关注其最常见的安全问题。</li>
                        <li><Text strong>实时反馈</Text>：在驾驶过程中提供即时语音反馈，帮助驾驶员及时纠正不安全驾驶行为。</li>
                        <li><Text strong>模拟训练</Text>：利用VR技术模拟各种危险驾驶场景，提高驾驶员应对紧急情况的能力。</li>
                        <li><Text strong>同伴学习</Text>：组织安全评分高的驾驶员与评分低的驾驶员结对，促进经验分享和技能提升。</li>
                        <li><Text strong>定期复训</Text>：每季度组织一次安全驾驶复训，确保驾驶员持续保持良好的安全意识。</li>
                      </ol>
                      <Paragraph>
                        通过实施上述培训计划，预计可将安全事故率降低40%，乘客投诉减少35%，并提高整体安全评分20%。
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
