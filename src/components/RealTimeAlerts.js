import React from 'react';
import { Card, Table, Tag, Typography, Button, Space, Badge } from 'antd';
import { WarningOutlined, ClockCircleOutlined, EnvironmentOutlined, UserOutlined } from '@ant-design/icons';

const { Text } = Typography;

const RealTimeAlerts = ({ alerts = [] }) => {
  // 如果没有传入 alerts 数据，使用默认数据
  const alertsData = alerts.length > 0 ? alerts : [
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

  // 表格列配置
  const columns = [
    {
      title: 'Alert ID',
      dataIndex: 'id',
      key: 'id',
      width: 100,
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      width: 100,
      render: (time) => (
        <Space>
          <ClockCircleOutlined style={{ color: '#8c8c8c' }} />
          <Text>{time}</Text>
        </Space>
      ),
    },
    {
      title: 'Driver',
      dataIndex: 'driverName',
      key: 'driverName',
      width: 150,
      render: (name, record) => (
        <Space>
          <UserOutlined style={{ color: '#8c8c8c' }} />
          <Text>{name}</Text>
          <Text type="secondary">({record.driverId})</Text>
        </Space>
      ),
    },
    {
      title: 'Event',
      dataIndex: 'event',
      key: 'event',
      width: 150,
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      ellipsis: true,
      render: (location) => (
        <Space>
          <EnvironmentOutlined style={{ color: '#8c8c8c' }} />
          <Text>{location}</Text>
        </Space>
      ),
    },
    {
      title: 'Severity',
      dataIndex: 'severity',
      key: 'severity',
      width: 120,
      render: (severity) => {
        let color = 'green';
        let text = 'Low';
        
        if (severity === 'high') {
          color = 'red';
          text = 'High';
        } else if (severity === 'medium') {
          color = 'orange';
          text = 'Medium';
        }
        
        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      width: 120,
      render: (status) => {
        let color = 'green';
        let text = 'Resolved';
        
        if (status === 'new') {
          color = 'red';
          text = 'New';
        } else if (status === 'processing') {
          color = 'blue';
          text = 'Processing';
        }
        
        return <Tag color={color}>{text}</Tag>;
      },
    },
    {
      title: 'Action',
      key: 'action',
      width: 120,
      render: (_, record) => (
        <Space>
          <Button type="link" size="small">View</Button>
          {record.status !== 'resolved' && (
            <Button type="link" size="small">Process</Button>
          )}
        </Space>
      ),
    },
  ];

  // 计算新警报的数量
  const newAlertsCount = alertsData.filter(alert => alert.status === 'new').length;

  return (
    <Card 
      title={
        <Space>
          <WarningOutlined style={{ color: '#ff4d4f', fontSize: '18px' }} />
          <span style={{ fontSize: '16px', fontWeight: 500 }}>Real-Time Alerts</span>
          {newAlertsCount > 0 && (
            <Badge count={newAlertsCount} style={{ backgroundColor: '#ff4d4f' }} />
          )}
        </Space>
      }
      className="real-time-alerts-card"
      style={{ 
        marginTop: '24px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.09)',
        borderRadius: '8px'
      }}
    >
      <Table 
        columns={columns} 
        dataSource={alertsData} 
        rowKey="id"
        pagination={{ pageSize: 5 }}
        size="middle"
        className="real-time-alerts-table"
        style={{ fontSize: '14px' }}
      />
    </Card>
  );
};

export default RealTimeAlerts;
