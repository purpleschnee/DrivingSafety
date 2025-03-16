/**
 * 安全驾驶平台后端服务器
 * 使用 Node.js + Socket.IO 实现实时数据同步
 */

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const path = require('path');

// 创建 Express 应用
const app = express();

// 启用 CORS
app.use(cors());

// 解析 JSON 请求体
app.use(express.json());

// 创建 HTTP 服务器
const server = http.createServer(app);

// 初始化 Socket.IO
const io = socketIo(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// 设置静态文件目录
app.use(express.static(path.join(__dirname, '../build')));

// 模拟数据
let safetyData = {
  average: 85,
  trend: [
    { time: new Date().toISOString(), score: 85 }
  ],
  drivers: [
    { id: 'D-10045', name: '张明', score: 94 },
    { id: 'D-10078', name: '李强', score: 87 },
    { id: 'D-10023', name: '王伟', score: 76 },
    { id: 'D-10089', name: '赵静', score: 92 },
    { id: 'D-10056', name: '刘洋', score: 68 },
  ]
};

let incidentData = {
  total: 42,
  types: [
    { type: '急刹车', count: 18 },
    { type: '急加速', count: 12 },
    { type: '急转弯', count: 8 },
    { type: '超速', count: 4 },
  ],
  recent: [
    { id: 'I-1001', driverId: 'D-10023', type: '急刹车', time: new Date().toISOString(), severity: '中度' },
    { id: 'I-1002', driverId: 'D-10056', type: '超速', time: new Date(Date.now() - 1000*60*5).toISOString(), severity: '严重' },
    { id: 'I-1003', driverId: 'D-10078', type: '急加速', time: new Date(Date.now() - 1000*60*15).toISOString(), severity: '轻度' },
  ]
};

let trainingData = {
  completion: 78,
  courses: [
    { id: 'T-10045', name: '安全驾驶基础知识', completion: 84 },
    { id: 'T-10046', name: '急刹车与急转弯避免技巧', completion: 76 },
    { id: 'T-10047', name: '安全法规解读', completion: 100 },
    { id: 'T-10048', name: '疲劳驾驶识别与预防', completion: 70 },
    { id: 'T-10049', name: '紧急情况处理实操', completion: 56 },
  ]
};

// 剧本数据
let scripts = [
  { id: 'S-001', title: '安全驾驶培训流程', steps: [
    { id: 1, title: '基础理论学习', description: '完成安全驾驶基础知识学习', duration: '2小时' },
    { id: 2, title: '案例分析', description: '分析真实事故案例，了解危险驾驶行为的后果', duration: '1小时' },
    { id: 3, title: '模拟练习', description: '在模拟器上练习应对各种危险情况', duration: '3小时' },
    { id: 4, title: '实车训练', description: '在专业教练指导下进行实车安全驾驶训练', duration: '4小时' },
    { id: 5, title: '考核评估', description: '进行安全驾驶技能评估和考核', duration: '1小时' },
  ]},
  { id: 'S-002', title: '事故应急处理流程', steps: [
    { id: 1, title: '事故现场保护', description: '了解如何保护事故现场，防止二次事故', duration: '30分钟' },
    { id: 2, title: '伤员救护', description: '学习基本的伤员救护知识和技能', duration: '1小时' },
    { id: 3, title: '报警与信息收集', description: '正确报警和收集事故相关信息', duration: '30分钟' },
    { id: 4, title: '保险理赔', description: '了解保险理赔流程和注意事项', duration: '1小时' },
  ]},
];

// 线索卡数据
let clueCards = [
  { id: 'C-001', type: '安全知识', title: '安全距离保持', content: '与前车保持安全距离的标准是：时速每增加10公里，安全距离增加1车身长度。', status: 'active' },
  { id: 'C-002', type: '安全知识', title: '盲区识别', content: '车辆有四个主要盲区：前方、两侧后视镜区域和车辆正后方。变道前一定要转头观察。', status: 'active' },
  { id: 'C-003', type: '法规知识', title: '酒驾标准', content: '血液酒精含量达到或超过20mg/100ml，未达到80mg/100ml为饮酒驾驶；达到或超过80mg/100ml为醉酒驾驶。', status: 'active' },
  { id: 'C-004', type: '应急处理', title: '爆胎应对', content: '爆胎时切勿急刹车，应握紧方向盘，轻踩刹车减速，缓慢靠边停车。', status: 'active' },
  { id: 'C-005', type: '应急处理', title: '车辆自燃', content: '发现车辆自燃，立即停车熄火，使用车载灭火器灭火，情况严重应迅速撤离并报警。', status: 'active' },
];

// 更新安全数据的函数
function updateSafetyData() {
  const newAverage = Math.max(60, Math.min(100, safetyData.average + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 2));
  const newTrend = [...safetyData.trend, { time: new Date().toISOString(), score: newAverage }];
  if (newTrend.length > 20) newTrend.shift(); // 保持最近 20 个数据点
  
  safetyData = {
    ...safetyData,
    average: parseFloat(newAverage.toFixed(1)),
    trend: newTrend,
    drivers: safetyData.drivers.map(driver => ({
      ...driver,
      score: Math.max(60, Math.min(100, driver.score + (Math.random() > 0.7 ? 1 : -1) * Math.random() * 3))
    }))
  };
  
  return safetyData;
}

// 更新事件数据的函数
function updateIncidentData() {
  // 模拟新增事件的概率
  const hasNewIncident = Math.random() < 0.3;
  let newIncidents = [...incidentData.recent];
  
  if (hasNewIncident) {
    const incidentTypes = ['急刹车', '急加速', '急转弯', '超速'];
    const driverIds = ['D-10045', 'D-10078', 'D-10023', 'D-10089', 'D-10056'];
    const severities = ['轻度', '中度', '严重'];
    
    const newIncident = {
      id: `I-${1000 + incidentData.total + 1}`,
      driverId: driverIds[Math.floor(Math.random() * driverIds.length)],
      type: incidentTypes[Math.floor(Math.random() * incidentTypes.length)],
      time: new Date().toISOString(),
      severity: severities[Math.floor(Math.random() * severities.length)]
    };
    
    newIncidents.unshift(newIncident);
    if (newIncidents.length > 10) newIncidents.pop(); // 保持最近 10 个事件
  }
  
  incidentData = {
    ...incidentData,
    total: hasNewIncident ? incidentData.total + 1 : incidentData.total,
    recent: newIncidents,
    // 更新事件类型统计
    types: incidentData.types.map(type => ({
      ...type,
      count: hasNewIncident && newIncidents[0].type === type.type ? type.count + 1 : type.count
    }))
  };
  
  return incidentData;
}

// 更新培训数据的函数
function updateTrainingData() {
  // 模拟培训完成率的缓慢提高
  trainingData = {
    ...trainingData,
    completion: Math.min(100, trainingData.completion + Math.random() * 0.5),
    courses: trainingData.courses.map(course => ({
      ...course,
      completion: Math.min(100, course.completion + (Math.random() > 0.7 ? Math.random() * 1 : 0))
    }))
  };
  
  return trainingData;
}

// Socket.IO 连接处理
io.on('connection', (socket) => {
  console.log('新客户端连接:', socket.id);
  
  // 发送初始数据
  socket.emit('safety-data', safetyData);
  socket.emit('incident-data', incidentData);
  socket.emit('training-data', trainingData);
  socket.emit('scripts', scripts);
  socket.emit('clue-cards', clueCards);
  
  // 监听客户端请求
  socket.on('get-safety-data', () => {
    socket.emit('safety-data', safetyData);
  });
  
  socket.on('get-incident-data', () => {
    socket.emit('incident-data', incidentData);
  });
  
  socket.on('get-training-data', () => {
    socket.emit('training-data', trainingData);
  });
  
  socket.on('get-scripts', () => {
    socket.emit('scripts', scripts);
  });
  
  socket.on('get-clue-cards', () => {
    socket.emit('clue-cards', clueCards);
  });
  
  // 处理剧本流程相关请求
  socket.on('start-script', (scriptId) => {
    console.log(`开始执行剧本: ${scriptId}`);
    // 在这里可以添加剧本执行的逻辑
    socket.emit('script-started', { scriptId });
    // 广播给所有连接的客户端
    io.emit('script-status-update', { scriptId, status: 'started' });
  });
  
  socket.on('next-script-step', (data) => {
    console.log(`执行剧本下一步: ${data.scriptId}, 当前步骤: ${data.currentStep}`);
    // 在这里可以添加处理下一步的逻辑
    socket.emit('script-step-changed', { scriptId: data.scriptId, step: data.currentStep + 1 });
    // 广播给所有连接的客户端
    io.emit('script-status-update', { scriptId: data.scriptId, currentStep: data.currentStep + 1 });
  });
  
  // 处理线索卡相关请求
  socket.on('add-clue-card', (card) => {
    const newCard = { ...card, id: `C-${clueCards.length + 1}`.padStart(6, '0'), status: 'active' };
    clueCards.push(newCard);
    console.log(`添加新线索卡: ${newCard.id}`);
    // 广播给所有连接的客户端
    io.emit('clue-cards-updated', clueCards);
  });
  
  socket.on('update-clue-card', (card) => {
    const index = clueCards.findIndex(c => c.id === card.id);
    if (index !== -1) {
      clueCards[index] = { ...clueCards[index], ...card };
      console.log(`更新线索卡: ${card.id}`);
      // 广播给所有连接的客户端
      io.emit('clue-cards-updated', clueCards);
    }
  });
  
  socket.on('delete-clue-card', (cardId) => {
    const index = clueCards.findIndex(c => c.id === cardId);
    if (index !== -1) {
      clueCards.splice(index, 1);
      console.log(`删除线索卡: ${cardId}`);
      // 广播给所有连接的客户端
      io.emit('clue-cards-updated', clueCards);
    }
  });
  
  // 断开连接处理
  socket.on('disconnect', () => {
    console.log('客户端断开连接:', socket.id);
  });
});

// 定时更新数据并广播
setInterval(() => {
  const updatedSafetyData = updateSafetyData();
  const updatedIncidentData = updateIncidentData();
  const updatedTrainingData = updateTrainingData();
  
  io.emit('safety-data', updatedSafetyData);
  io.emit('incident-data', updatedIncidentData);
  io.emit('training-data', updatedTrainingData);
}, 5000); // 每5秒更新一次

// API 路由
app.get('/api/safety-data', (req, res) => {
  res.json(safetyData);
});

app.get('/api/incident-data', (req, res) => {
  res.json(incidentData);
});

app.get('/api/training-data', (req, res) => {
  res.json(trainingData);
});

app.get('/api/scripts', (req, res) => {
  res.json(scripts);
});

app.get('/api/clue-cards', (req, res) => {
  res.json(clueCards);
});

// 所有其他请求返回React应用
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// 启动服务器
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`服务器运行在端口 ${PORT}`);
});
