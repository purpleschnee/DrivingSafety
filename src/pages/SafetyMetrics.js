import React, { useState } from 'react';
import { Row, Col, Card, Typography, Table, Button, Select, DatePicker, Tabs, Statistic, Progress, Tag, Space, Alert, Tooltip, Divider, List, Badge, Switch, Input, Timeline, Rate, Steps } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined, DownloadOutlined, InfoCircleOutlined, CarOutlined, MobileOutlined, WarningOutlined, CheckCircleOutlined, RiseOutlined, FallOutlined, ExclamationCircleOutlined, FilterOutlined, ReloadOutlined, SearchOutlined, BellOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Line, Radar, Gauge, Column, Pie, DualAxes, Heatmap } from '@ant-design/charts';
import PageHeader from '../components/PageHeader';

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
    height: 400,
    autoFit: true,
    padding: [30, 30, 120, 50],
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
    height: 400,
    autoFit: true,
    padding: [30, 30, 120, 50],
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
    height: 400,
    autoFit: true,
    padding: [50, 50, 120, 50],
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
    height: 500,
    autoFit: false,
    width: 500,
    padding: [30, 30, 120, 30],
    range: {
      color: '#30BF78',
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
          lineWidth: 2,
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
          lineWidth: 2,
        },
      },
    },
    statistic: {
      content: {
        formatter: () => '85',
        style: {
          fontSize: '64px',
          lineHeight: '64px',
          fontWeight: 'bold',
          color: '#333',
          marginTop: '20px',
        },
      },
    },
    axis: {
      label: {
        formatter: (v) => Number(v).toFixed(1),
        style: {
          fontSize: 14,
        },
      },
      tickLine: {
        length: 10,
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

  // OBD and Mobile Device Data Comparison Chart Configuration
  const deviceComparisonData = [
    { date: '2025-01', obd: 95, mobile: 92, incidents: 42 },
    { date: '2025-02', obd: 96, mobile: 91, incidents: 35 },
    { date: '2025-03', obd: 97, mobile: 94, incidents: 30 },
    { date: '2025-04', obd: 96, mobile: 93, incidents: 28 },
    { date: '2025-05', obd: 98, mobile: 95, incidents: 24 },
    { date: '2025-06', obd: 99, mobile: 96, incidents: 20 },
  ];

  // OBD and Mobile Device Data Comparison Chart Configuration
  const deviceComparisonConfig = {
    data: [deviceComparisonData, deviceComparisonData],
    height: 400,
    autoFit: true,
    padding: [30, 30, 50, 50],
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
    height: 350,
    autoFit: true,
    padding: 'auto',
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
    height: 350,
    autoFit: true,
    padding: 'auto',
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
    height: 350,
    autoFit: true,
    padding: 'auto',
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
    {
      title: 'Action',
      key: 'action',
      className: 'action-column',
      render: (_, record) => (
        <Space size="small">
          <Button type="link" size="small">Details</Button>
          {record.status !== 'Processed' && (
            <Button type="link" size="small">Process</Button>
          )}
        </Space>
      ),
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
      <div className="dashboard-header">
        <PageHeader 
          title="Driving Safety Monitor" 
          description="Monitor and analyze driving safety metrics and trends"
        />
        <div className="dashboard-actions">
          <Space>
            <Select 
              defaultValue="month" 
              style={{ width: 120 }} 
              onChange={setTimeRange}
            >
              <Option value="week">Last Week</Option>
              <Option value="month">Last Month</Option>
              <Option value="quarter">Last Quarter</Option>
              <Option value="year">Last Year</Option>
            </Select>
            <Button type="primary" icon={<DownloadOutlined />}>Export Report</Button>
          </Space>
        </div>
      </div>

      <Row gutter={[24, 24]} className="summary-cards">
        <Col xs={24} sm={12} lg={6}>
          <Card className="summary-card">
            <Statistic 
              title="Average Safety Score" 
              value={85} 
              suffix="/ 100" 
              valueStyle={{ color: '#0070e0' }}
            />
            <div className="trend-container">
              <span className="trend-up"><ArrowUpOutlined /> 3.5%</span>
              <span className="trend-text-secondary">compared to last month</span>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className="summary-card">
            <Statistic 
              title="Total Safety Events" 
              value={247} 
              valueStyle={{ color: '#ff9500' }}
            />
            <div className="trend-container">
              <span className="trend-down-positive"><ArrowDownOutlined /> 8.5%</span>
              <span className="trend-text-secondary">compared to last month</span>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className="summary-card">
            <Statistic 
              title="Safety Metrics Compliance Rate" 
              value={92} 
              suffix="%" 
              valueStyle={{ color: '#2a9d1c' }}
            />
            <div className="trend-container">
              <span className="trend-up"><ArrowUpOutlined /> 4.2%</span>
              <span className="trend-text-secondary">compared to last month</span>
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={6}>
          <Card className="summary-card">
            <Statistic 
              title="Driver Training Completion Rate" 
              value={78} 
              suffix="%" 
              valueStyle={{ color: '#e09600' }}
            />
            <div className="trend-container">
              <span className="trend-up"><ArrowUpOutlined /> 12.3%</span>
              <span className="trend-text-secondary">compared to last month</span>
            </div>
          </Card>
        </Col>
      </Row>

      <Card>
        <Tabs defaultActiveKey="1" onChange={setActiveTab} type="card">
          <TabPane 
            tab={
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <RiseOutlined style={{ fontSize: '18px', marginRight: '8px' }} />
                <span>Safety Trend Analysis</span>
              </span>
            } 
            key="1"
          >
            <Row gutter={[24, 24]}>
              <Col xs={24} lg={12}>
                <Card title="Safety Score Trend" bordered={false} className="chart-container">
                  <Line {...safetyTrendConfig} />
                </Card>
              </Col>
              <Col xs={24} lg={12}>
                <Card title="Safety Incidents Trend" bordered={false} className="chart-container">
                  <Line {...incidentTrendConfig} />
                </Card>
              </Col>
              <Col xs={24} lg={12}>
                <Card title="Safety Metrics Radar" bordered={false} className="chart-container">
                  <Radar {...radarConfig} />
                </Card>
              </Col>
              <Col xs={24} lg={12}>
                <Card title="Overall Safety Score" bordered={false} className="chart-container">
                  <Gauge {...gaugeConfig} />
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane 
            tab={
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <InfoCircleOutlined style={{ fontSize: '18px', marginRight: '8px' }} />
                <span>Safety Metrics Details</span>
              </span>
            } 
            key="2"
          >
            <Row gutter={[24, 24]}>
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
          <TabPane 
            tab={
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <CarOutlined style={{ fontSize: '18px', marginRight: '8px' }} />
                <span>Data Collection Analysis</span>
              </span>
            } 
            key="3"
          >
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
          <TabPane 
            tab={
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <MobileOutlined style={{ fontSize: '18px', marginRight: '8px' }} />
                <span>Passenger Feedback Correlation</span>
              </span>
            } 
            key="4"
          >
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
                      <Text strong>Speeding Behavior</Text> has the highest correlation with passengers' safety perception at <Text type="danger">92%</Text>,
                      and should be strictly controlled.
                    </li>
                    <li>
                      <Text strong>Fatigue Driving</Text> is the second factor of concern for passengers, with a correlation of <Text type="warning">89%</Text>.
                    </li>
                    <li>
                      <Text strong>Sudden Braking</Text> significantly affects passengers' safety perception, with a correlation of <Text type="warning">85%</Text>.
                    </li>
                    <li>
                      <Text strong>Sudden Acceleration</Text> has a relatively lower correlation, but still reaches <Text type="success">72%</Text>.
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
          <TabPane 
            tab={
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <CheckCircleOutlined style={{ fontSize: '18px', marginRight: '8px' }} />
                <span>Training Effect Analysis</span>
              </span>
            } 
            key="5"
          >
            <Row gutter={[24, 24]}>
              <Col xs={24} lg={12}>
                <Card title="Safety Training Effect" bordered={false} className="chart-container">
                  <Pie {...trainingEffectConfig} />
                </Card>
              </Col>
              <Col xs={24} lg={12}>
                <Card bordered={false} className="training-effect-card">
                  <div className="training-effect-title">Training Effect Details</div>
                  
                  <div className="training-effect-stat">
                    Safety training significantly improves driver safety scores, with an average increase of <strong>26.5%</strong>.
                  </div>
                  <div className="training-effect-stat">
                    Training reduces safety event occurrences by <strong>38.2%</strong>.
                  </div>
                  
                  <div className="training-course-ranking">
                    <Title level={5}>Training Course Effectiveness Ranking:</Title>
                    <div className="training-course-item">
                      <span className="training-course-item-number">1</span>
                      <span className="training-course-item-name">Emergency Situation Handling</span>
                      <span className="training-course-item-improvement">Improvement 34.7%</span>
                    </div>
                    <div className="training-course-item">
                      <span className="training-course-item-number">2</span>
                      <span className="training-course-item-name">Basic Safety Driving</span>
                      <span className="training-course-item-improvement">Improvement 29.3%</span>
                    </div>
                    <div className="training-course-item">
                      <span className="training-course-item-number">3</span>
                      <span className="training-course-item-name">Fatigue Driving Prevention</span>
                      <span className="training-course-item-improvement">Improvement 25.8%</span>
                    </div>
                    <div className="training-course-item">
                      <span className="training-course-item-number">4</span>
                      <span className="training-course-item-name">Defensive Driving Techniques</span>
                      <span className="training-course-item-improvement">Improvement 22.1%</span>
                    </div>
                  </div>
                  
                  <div className="training-recommendations">
                    <div className="training-recommendations-title">
                      <CheckCircleOutlined /> Training Recommendations
                    </div>
                    <div className="training-recommendations-content">
                      Based on the analysis, it is recommended to increase the frequency of emergency situation handling and basic safety driving training, and to make these two courses mandatory for all drivers.
                    </div>
                  </div>
                </Card>
              </Col>
              <Col xs={24}>
                <Card title="Training Completion Status" bordered={false}>
                  <Table 
                    columns={[
                      { title: 'Training Course', dataIndex: 'course', key: 'course' },
                      { title: 'Participants', dataIndex: 'participants', key: 'participants' },
                      { 
                        title: 'Completion Rate', 
                        dataIndex: 'completion', 
                        key: 'completion',
                        render: (completion) => (
                          <Progress 
                            percent={completion} 
                            size="small" 
                            status={completion >= 90 ? 'success' : completion >= 70 ? 'normal' : 'exception'}
                          />
                        ),
                      },
                      { title: 'Average Score', dataIndex: 'avgScore', key: 'avgScore' },
                      { 
                        title: 'Safety Score Improvement', 
                        dataIndex: 'improvement', 
                        key: 'improvement',
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
          <TabPane 
            tab={
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <WarningOutlined style={{ fontSize: '18px', marginRight: '8px' }} />
                <span>Risk Analysis</span>
              </span>
            } 
            key="6"
          >
            <Row gutter={[24, 24]}>
              <Col xs={24}>
                <Alert
                  message="Driver Risk Analysis"
                  description="This section analyzes driver risk patterns based on time of day and day of week. It identifies high-risk drivers who need additional training and monitoring."
                  type="warning"
                  showIcon
                  style={{ marginBottom: '24px' }}
                />
              </Col>
              <Col xs={24} lg={16}>
                <Card title="Risk Heatmap by Time" bordered={false} className="chart-container">
                  <Heatmap {...riskHeatmapConfig} />
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card title="High Risk Drivers" bordered={false}>
                  <Table 
                    columns={highRiskDriversColumns} 
                    dataSource={highRiskDriversData} 
                    pagination={false} 
                  />
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane 
            tab={
              <span style={{ display: 'flex', alignItems: 'center' }}>
                <FallOutlined style={{ fontSize: '18px', marginRight: '8px' }} />
                <span>Prediction Analysis</span>
              </span>
            } 
            key="7"
          >
            <Row gutter={[24, 24]}>
              <Col xs={24}>
                <Alert
                  message="Safety Score Prediction"
                  description="Using machine learning algorithms, we predict future safety scores based on historical data and current trends. The prediction model has an accuracy of 89%."
                  type="info"
                  showIcon
                  style={{ marginBottom: '24px' }}
                />
              </Col>
              <Col xs={24} lg={16}>
                <Card title="Safety Score Prediction" bordered={false} className="chart-container">
                  <DualAxes {...predictionConfig} />
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card title="Prediction Insights" bordered={false}>
                  <ul>
                    <li>
                      <Text strong>Projected Improvement:</Text> Safety scores are expected to improve by <Text type="success">10.6%</Text> over the next 6 months.
                    </li>
                    <li>
                      <Text strong>Key Factors:</Text> Driver training completion and reduced speeding incidents are the main contributors to the projected improvement.
                    </li>
                    <li>
                      <Text strong>Confidence Level:</Text> The prediction model has a confidence level of <Text type="success">89%</Text> based on historical accuracy.
                    </li>
                    <li>
                      <Text strong>Risk Factors:</Text> Seasonal variations and new driver onboarding may impact the actual results.
                    </li>
                  </ul>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default SafetyMetrics;
