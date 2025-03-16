import { io } from 'socket.io-client';

// Socket.IO 客户端实例
let socket;

// 连接状态
let isConnected = false;

// 事件监听器
const listeners = {};

/**
 * 初始化 Socket.IO 连接
 * @param {string} url - 服务器URL
 * @returns {Object} socket 实例
 */
export const initSocket = (url = 'http://localhost:5000') => {
  if (!socket) {
    socket = io(url, {
      reconnectionAttempts: 5,
      reconnectionDelay: 1000,
      autoConnect: true
    });

    // 连接事件处理
    socket.on('connect', () => {
      console.log('已连接到服务器');
      isConnected = true;
      notifyListeners('connect');
    });

    socket.on('disconnect', () => {
      console.log('与服务器断开连接');
      isConnected = false;
      notifyListeners('disconnect');
    });

    socket.on('connect_error', (error) => {
      console.error('连接错误:', error);
      notifyListeners('error', error);
    });

    // 数据事件监听
    socket.on('safety-data', (data) => {
      notifyListeners('safety-data', data);
    });

    socket.on('incident-data', (data) => {
      notifyListeners('incident-data', data);
    });

    socket.on('training-data', (data) => {
      notifyListeners('training-data', data);
    });

    socket.on('scripts', (data) => {
      notifyListeners('scripts', data);
    });

    socket.on('clue-cards', (data) => {
      notifyListeners('clue-cards', data);
    });

    socket.on('script-started', (data) => {
      notifyListeners('script-started', data);
    });

    socket.on('script-step-changed', (data) => {
      notifyListeners('script-step-changed', data);
    });

    socket.on('script-status-update', (data) => {
      notifyListeners('script-status-update', data);
    });

    socket.on('clue-cards-updated', (data) => {
      notifyListeners('clue-cards-updated', data);
    });
  }

  return socket;
};

/**
 * 添加事件监听器
 * @param {string} event - 事件名称
 * @param {Function} callback - 回调函数
 */
export const addSocketListener = (event, callback) => {
  if (!listeners[event]) {
    listeners[event] = [];
  }
  listeners[event].push(callback);
};

/**
 * 移除事件监听器
 * @param {string} event - 事件名称
 * @param {Function} callback - 要移除的回调函数
 */
export const removeSocketListener = (event, callback) => {
  if (listeners[event]) {
    listeners[event] = listeners[event].filter(cb => cb !== callback);
  }
};

/**
 * 通知所有监听特定事件的监听器
 * @param {string} event - 事件名称
 * @param {*} data - 事件数据
 */
const notifyListeners = (event, data) => {
  if (listeners[event]) {
    listeners[event].forEach(callback => {
      callback(data);
    });
  }
};

/**
 * 请求安全数据
 */
export const getSafetyData = () => {
  if (socket && isConnected) {
    socket.emit('get-safety-data');
  }
};

/**
 * 请求事件数据
 */
export const getIncidentData = () => {
  if (socket && isConnected) {
    socket.emit('get-incident-data');
  }
};

/**
 * 请求培训数据
 */
export const getTrainingData = () => {
  if (socket && isConnected) {
    socket.emit('get-training-data');
  }
};

/**
 * 请求脚本数据
 */
export const getScripts = () => {
  if (socket && isConnected) {
    socket.emit('get-scripts');
  }
};

/**
 * 请求线索卡数据
 */
export const getClueCards = () => {
  if (socket && isConnected) {
    socket.emit('get-clue-cards');
  }
};

/**
 * 开始执行脚本
 * @param {string} scriptId - 脚本ID
 */
export const startScript = (scriptId) => {
  if (socket && isConnected) {
    socket.emit('start-script', scriptId);
  }
};

/**
 * 执行脚本的下一步
 * @param {string} scriptId - 脚本ID
 * @param {number} currentStep - 当前步骤索引
 */
export const nextScriptStep = (scriptId, currentStep) => {
  if (socket && isConnected) {
    socket.emit('next-script-step', { scriptId, currentStep });
  }
};

/**
 * 添加新线索卡
 * @param {Object} card - 线索卡数据
 */
export const addClueCard = (card) => {
  if (socket && isConnected) {
    socket.emit('add-clue-card', card);
  }
};

/**
 * 更新线索卡
 * @param {Object} card - 更新后的线索卡数据
 */
export const updateClueCard = (card) => {
  if (socket && isConnected) {
    socket.emit('update-clue-card', card);
  }
};

/**
 * 删除线索卡
 * @param {string} cardId - 线索卡ID
 */
export const deleteClueCard = (cardId) => {
  if (socket && isConnected) {
    socket.emit('delete-clue-card', cardId);
  }
};

/**
 * 关闭Socket连接
 */
export const closeSocket = () => {
  if (socket) {
    socket.close();
    socket = null;
    isConnected = false;
  }
};

/**
 * 检查连接状态
 * @returns {boolean} 是否已连接
 */
export const isSocketConnected = () => {
  return isConnected;
};
