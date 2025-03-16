// u5b9eu65f6u6570u636eu670du52a1uff0cu6a21u62df Socket.IO u529fu80fd

import { useState, useEffect } from 'react';
import axios from 'axios';

// u6a21u62dfu7684u5b9eu65f6u6570u636eu66f4u65b0u95f4u9694uff08u6bebu79d2uff09
const UPDATE_INTERVAL = 5000;

// u6a21u62dfu670du52a1u5668u7aefu70b9
const API_ENDPOINT = 'https://api.example.com/safety-data';

/**
 * u4f7fu7528u8f6eu8be2u6a21u62dfu5b9eu65f6u6570u636eu66f4u65b0
 * @param {string} dataType - u6570u636eu7c7bu578buff0cu5982 'safety-scores', 'incidents', u7b49
 * @param {Object} initialData - u521du59cbu6570u636e
 * @returns {Object} u5305u542bu5f53u524du6570u636eu548cu52a0u8f7du72b6u6001u7684u5bf9u8c61
 */
export const useRealTimeData = (dataType, initialData = null) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        // u5728u771fu5b9eu73afu5883u4e2duff0cu8fd9u91ccu5c06u4f7fu7528 Socket.IO u8fdeu63a5
        // u73b0u5728u6211u4eecu4f7fu7528 axios u6a21u62dfu5b9eu65f6u6570u636eu83b7u53d6
        // const response = await axios.get(`${API_ENDPOINT}/${dataType}`);
        // if (isMounted) {
        //   setData(response.data);
        //   setLoading(false);
        // }
        
        // u4e3au4e86u6f14u793au76eeu7684uff0cu6211u4eecu751fu6210u968fu673au6570u636e
        if (isMounted) {
          // u6a21u62dfu6570u636eu66f4u65b0uff0cu6839u636eu4e0du540cu7684u6570u636eu7c7bu578bu751fu6210u4e0du540cu7684u6570u636e
          const mockData = generateMockData(dataType, data);
          setData(mockData);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
          setLoading(false);
        }
      }
    };

    fetchData();

    // u8bbeu7f6eu5b9au65f6u5668u6a21u62dfu5b9eu65f6u6570u636eu66f4u65b0
    const intervalId = setInterval(fetchData, UPDATE_INTERVAL);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, [dataType]);

  return { data, loading, error };
};

/**
 * u751fu6210u6a21u62dfu6570u636e
 * @param {string} dataType - u6570u636eu7c7bu578b
 * @param {Object} currentData - u5f53u524du6570u636e
 * @returns {Object} u66f4u65b0u540eu7684u6a21u62dfu6570u636e
 */
const generateMockData = (dataType, currentData) => {
  // u5982u679cu6ca1u6709u5f53u524du6570u636euff0cu8fd4u56deu521du59cbu6a21u62dfu6570u636e
  if (!currentData) {
    switch (dataType) {
      case 'safety-scores':
        return {
          average: 85,
          trend: [
            { time: new Date().toISOString(), score: 85 }
          ],
          drivers: [
            { id: 'D-10045', name: 'u5f20u660e', score: 94 },
            { id: 'D-10078', name: 'u674eu5f3a', score: 87 },
            { id: 'D-10023', name: 'u738bu4f1f', score: 76 },
            { id: 'D-10089', name: 'u8d75u9759', score: 92 },
            { id: 'D-10056', name: 'u5218u6d0b', score: 68 },
          ]
        };
      case 'incidents':
        return {
          total: 42,
          types: [
            { type: 'u6025u5239u8f66', count: 18 },
            { type: 'u6025u52a0u901f', count: 12 },
            { type: 'u6025u8f6cu5f2f', count: 8 },
            { type: 'u8d85u901f', count: 4 },
          ],
          recent: [
            { id: 'I-1001', driverId: 'D-10023', type: 'u6025u5239u8f66', time: new Date().toISOString(), severity: 'u4e2du5ea6' },
            { id: 'I-1002', driverId: 'D-10056', type: 'u8d85u901f', time: new Date(Date.now() - 1000*60*5).toISOString(), severity: 'u4e25u91cd' },
            { id: 'I-1003', driverId: 'D-10078', type: 'u6025u52a0u901f', time: new Date(Date.now() - 1000*60*15).toISOString(), severity: 'u8f7bu5ea6' },
          ]
        };
      case 'training':
        return {
          completion: 78,
          courses: [
            { id: 'T-10045', name: 'u5b89u5168u9a7eu9a76u57fau7840u77e5u8bc6', completion: 84 },
            { id: 'T-10046', name: 'u6025u5239u8f66u4e0eu6025u8f6cu5f2fu907fu514du6280u5de7', completion: 76 },
            { id: 'T-10047', name: 'u5b89u5168u6cd5u89c4u89e3u8bfb', completion: 100 },
            { id: 'T-10048', name: 'u75b2u52b3u9a7eu9a76u8bc6u522bu4e0eu9884u9632', completion: 70 },
            { id: 'T-10049', name: 'u7d27u6025u60c5u51b5u5904u7406u5b9eu64cd', completion: 56 },
          ]
        };
      default:
        return {};
    }
  }

  // u5982u679cu6709u5f53u524du6570u636euff0cu57fau4e8eu5f53u524du6570u636eu751fu6210u5c0fu53d8u5316
  switch (dataType) {
    case 'safety-scores':
      const newAverage = Math.max(60, Math.min(100, currentData.average + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 2));
      const newTrend = [...currentData.trend, { time: new Date().toISOString(), score: newAverage }];
      if (newTrend.length > 20) newTrend.shift(); // u4fddu6301u6700u8fd1 20 u4e2au6570u636eu70b9
      
      return {
        ...currentData,
        average: parseFloat(newAverage.toFixed(1)),
        trend: newTrend,
        drivers: currentData.drivers.map(driver => ({
          ...driver,
          score: Math.max(60, Math.min(100, driver.score + (Math.random() > 0.7 ? 1 : -1) * Math.random() * 3))
        }))
      };
    case 'incidents':
      // u6a21u62dfu65b0u589eu4e8bu4ef6u7684u6982u7387
      const hasNewIncident = Math.random() < 0.3;
      let newIncidents = [...currentData.recent];
      
      if (hasNewIncident) {
        const incidentTypes = ['u6025u5239u8f66', 'u6025u52a0u901f', 'u6025u8f6cu5f2f', 'u8d85u901f'];
        const driverIds = ['D-10045', 'D-10078', 'D-10023', 'D-10089', 'D-10056'];
        const severities = ['u8f7bu5ea6', 'u4e2du5ea6', 'u4e25u91cd'];
        
        const newIncident = {
          id: `I-${1000 + currentData.total + 1}`,
          driverId: driverIds[Math.floor(Math.random() * driverIds.length)],
          type: incidentTypes[Math.floor(Math.random() * incidentTypes.length)],
          time: new Date().toISOString(),
          severity: severities[Math.floor(Math.random() * severities.length)]
        };
        
        newIncidents.unshift(newIncident);
        if (newIncidents.length > 10) newIncidents.pop(); // u4fddu6301u6700u8fd1 10 u4e2au4e8bu4ef6
      }
      
      return {
        ...currentData,
        total: hasNewIncident ? currentData.total + 1 : currentData.total,
        recent: newIncidents,
        // u66f4u65b0u4e8bu4ef6u7c7bu578bu7edfu8ba1
        types: currentData.types.map(type => ({
          ...type,
          count: hasNewIncident && newIncidents[0].type === type.type ? type.count + 1 : type.count
        }))
      };
    case 'training':
      // u6a21u62dfu57f9u8badu5b8cu6210u7387u7684u7f13u6162u63d0u9ad8
      return {
        ...currentData,
        completion: Math.min(100, currentData.completion + Math.random() * 0.5),
        courses: currentData.courses.map(course => ({
          ...course,
          completion: Math.min(100, course.completion + (Math.random() > 0.7 ? Math.random() * 1 : 0))
        }))
      };
    default:
      return currentData;
  }
};

/**
 * u53d1u9001u6570u636eu5230u670du52a1u5668
 * @param {string} endpoint - APIu7aefu70b9
 * @param {Object} data - u8981u53d1u9001u7684u6570u636e
 * @returns {Promise} u8bf7u6c42u7ed3u679c
 */
export const sendData = async (endpoint, data) => {
  try {
    // u5728u771fu5b9eu73afu5883u4e2duff0cu8fd9u91ccu5c06u4f7fu7528 Socket.IO u53d1u9001u6570u636e
    // u73b0u5728u6211u4eecu4f7fu7528 axios u6a21u62df
    // return await axios.post(`${API_ENDPOINT}/${endpoint}`, data);
    
    // u6a21u62dfu6210u529fu54cdu5e94
    return { success: true, message: 'u6570u636eu53d1u9001u6210u529f' };
  } catch (error) {
    console.error('Error sending data:', error);
    throw error;
  }
};

/**
 * u5b9au4e49u5267u672cu6d41u7a0bu5f15u64ceu7c7bu578b
 */
export class ScriptEngine {
  constructor() {
    this.scripts = [];
    this.currentScriptIndex = -1;
    this.listeners = [];
  }

  /**
   * u52a0u8f7du5267u672c
   * @param {Array} scripts - u5267u672cu6570u7ec4
   */
  loadScripts(scripts) {
    this.scripts = scripts;
    this.currentScriptIndex = -1;
    this.notifyListeners('scriptsLoaded', { scripts });
  }

  /**
   * u5f00u59cbu6267u884cu5267u672c
   */
  start() {
    if (this.scripts.length > 0) {
      this.currentScriptIndex = 0;
      this.executeCurrentStep();
    }
  }

  /**
   * u6267u884cu5f53u524du6b65u9aa4
   */
  executeCurrentStep() {
    if (this.currentScriptIndex >= 0 && this.currentScriptIndex < this.scripts.length) {
      const currentScript = this.scripts[this.currentScriptIndex];
      this.notifyListeners('stepExecuted', { step: currentScript });
    }
  }

  /**
   * u524du8fdbu5230u4e0bu4e00u6b65
   */
  next() {
    if (this.currentScriptIndex < this.scripts.length - 1) {
      this.currentScriptIndex++;
      this.executeCurrentStep();
      return true;
    }
    return false;
  }

  /**
   * u8fd4u56deu4e0au4e00u6b65
   */
  previous() {
    if (this.currentScriptIndex > 0) {
      this.currentScriptIndex--;
      this.executeCurrentStep();
      return true;
    }
    return false;
  }

  /**
   * u6dfbu52a0u4e8bu4ef6u76d1u542cu5668
   * @param {Function} listener - u76d1u542cu5668u51fdu6570
   */
  addListener(listener) {
    this.listeners.push(listener);
  }

  /**
   * u79fbu9664u4e8bu4ef6u76d1u542cu5668
   * @param {Function} listener - u8981u79fbu9664u7684u76d1u542cu5668u51fdu6570
   */
  removeListener(listener) {
    this.listeners = this.listeners.filter(l => l !== listener);
  }

  /**
   * u901au77e5u6240u6709u76d1u542cu5668
   * @param {string} event - u4e8bu4ef6u540du79f0
   * @param {Object} data - u4e8bu4ef6u6570u636e
   */
  notifyListeners(event, data) {
    this.listeners.forEach(listener => {
      if (typeof listener === 'function') {
        listener(event, data);
      }
    });
  }
}

/**
 * u7ebfu7d22u5361u7ba1u7406u7cfbu7edf
 */
export class ClueCardSystem {
  constructor() {
    this.cards = [];
    this.listeners = [];
  }

  /**
   * u52a0u8f7du7ebfu7d22u5361
   * @param {Array} cards - u7ebfu7d22u5361u6570u7ec4
   */
  loadCards(cards) {
    this.cards = cards;
    this.notifyListeners('cardsLoaded', { cards });
  }

  /**
   * u83b7u53d6u6240u6709u7ebfu7d22u5361
   * @returns {Array} u7ebfu7d22u5361u6570u7ec4
   */
  getAllCards() {
    return [...this.cards];
  }

  /**
   * u83b7u53d6u6307u5b9au7c7bu578bu7684u7ebfu7d22u5361
   * @param {string} type - u7ebfu7d22u5361u7c7bu578b
   * @returns {Array} u7b26u5408u7c7bu578bu7684u7ebfu7d22u5361u6570u7ec4
   */
  getCardsByType(type) {
    return this.cards.filter(card => card.type === type);
  }

  /**
   * u6dfbu52a0u65b0u7ebfu7d22u5361
   * @param {Object} card - u65b0u7ebfu7d22u5361
   */
  addCard(card) {
    this.cards.push(card);
    this.notifyListeners('cardAdded', { card });
  }

  /**
   * u66f4u65b0u7ebfu7d22u5361
   * @param {string} cardId - u7ebfu7d22u5361ID
   * @param {Object} updates - u66f4u65b0u5185u5bb9
   */
  updateCard(cardId, updates) {
    const index = this.cards.findIndex(card => card.id === cardId);
    if (index !== -1) {
      this.cards[index] = { ...this.cards[index], ...updates };
      this.notifyListeners('cardUpdated', { card: this.cards[index] });
    }
  }

  /**
   * u5220u9664u7ebfu7d22u5361
   * @param {string} cardId - u8981u5220u9664u7684u7ebfu7d22u5361ID
   */
  removeCard(cardId) {
    const index = this.cards.findIndex(card => card.id === cardId);
    if (index !== -1) {
      const removedCard = this.cards[index];
      this.cards.splice(index, 1);
      this.notifyListeners('cardRemoved', { card: removedCard });
    }
  }

  /**
   * u6dfbu52a0u4e8bu4ef6u76d1u542cu5668
   * @param {Function} listener - u76d1u542cu5668u51fdu6570
   */
  addListener(listener) {
    this.listeners.push(listener);
  }

  /**
   * u79fbu9664u4e8bu4ef6u76d1u542cu5668
   * @param {Function} listener - u8981u79fbu9664u7684u76d1u542cu5668u51fdu6570
   */
  removeListener(listener) {
    this.listeners = this.listeners.filter(l => l !== listener);
  }

  /**
   * u901au77e5u6240u6709u76d1u542cu5668
   * @param {string} event - u4e8bu4ef6u540du79f0
   * @param {Object} data - u4e8bu4ef6u6570u636e
   */
  notifyListeners(event, data) {
    this.listeners.forEach(listener => {
      if (typeof listener === 'function') {
        listener(event, data);
      }
    });
  }
}

// u521bu5efau5267u672cu5f15u64ceu548cu7ebfu7d22u5361u7cfbu7edfu7684u5355u4f8b
export const scriptEngine = new ScriptEngine();
export const clueCardSystem = new ClueCardSystem();
