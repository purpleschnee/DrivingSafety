// 模拟数据文件，用于B2B安全驾驶平台原型

// 安全评分趋势数据
export const safetyScoreTrendData = [
  { date: '2025-01', score: 78 },
  { date: '2025-02', score: 82 },
  { date: '2025-03', score: 85 },
  { date: '2025-04', score: 83 },
  { date: '2025-05', score: 88 },
  { date: '2025-06', score: 91 },
];

// 事件类型分布数据
export const incidentTypeData = [
  { type: '急刹车', value: 38 },
  { type: '急加速', value: 25 },
  { type: '急转弯', value: 18 },
  { type: '超速', value: 15 },
  { type: '疲劳驾驶', value: 4 },
];

// 驾驶员表现数据
export const driverPerformanceData = [
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

// 驾驶员详细数据
export const driversDetailData = [
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
];

// 安全指标数据
export const safetyMetricsData = [
  {
    key: '1',
    name: '安全驾驶评分',
    current: 85,
    target: 90,
    completion: 94,
    change: 3.2,
    weight: 40,
  },
  {
    key: '2',
    name: '急刹车次数',
    current: 38,
    target: 30,
    completion: 79,
    change: -8.5,
    weight: 15,
  },
  {
    key: '3',
    name: '急加速次数',
    current: 25,
    target: 20,
    completion: 80,
    change: -5.2,
    weight: 10,
  },
  {
    key: '4',
    name: '急转弯次数',
    current: 18,
    target: 15,
    completion: 83,
    change: -10.0,
    weight: 10,
  },
  {
    key: '5',
    name: '超速次数',
    current: 15,
    target: 10,
    completion: 67,
    change: -12.5,
    weight: 15,
  },
  {
    key: '6',
    name: '乘客投诉率',
    current: 2.1,
    target: 1.5,
    completion: 71,
    change: -15.0,
    weight: 10,
  },
];

// 培训课程数据
export const trainingCoursesData = [
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

// 公司对比数据
export const companyComparisonData = [
  { month: '2025-01', company: 85, industry: 78, competitor: 80 },
  { month: '2025-02', company: 87, industry: 79, competitor: 82 },
  { month: '2025-03', company: 89, industry: 80, competitor: 83 },
  { month: '2025-04', company: 88, industry: 81, competitor: 85 },
  { month: '2025-05', company: 91, industry: 82, competitor: 86 },
  { month: '2025-06', company: 93, industry: 83, competitor: 87 },
];

// 安全指标雷达图数据
export const safetyRadarData = [
  { metric: '安全评分', company: 93, industry: 83, competitor: 87 },
  { metric: '急刹车', company: 95, industry: 85, competitor: 90 },
  { metric: '急加速', company: 90, industry: 82, competitor: 85 },
  { metric: '急转弯', company: 92, industry: 80, competitor: 83 },
  { metric: '超速', company: 88, industry: 78, competitor: 80 },
  { metric: '疲劳驾驶', company: 94, industry: 84, competitor: 88 },
];

// 安全与成本数据
export const safetyAndCostData = [
  { month: '2025-01', safety: 85, cost: 120 },
  { month: '2025-02', safety: 87, cost: 115 },
  { month: '2025-03', safety: 89, cost: 110 },
  { month: '2025-04', safety: 88, cost: 112 },
  { month: '2025-05', safety: 91, cost: 105 },
  { month: '2025-06', safety: 93, cost: 100 },
];
