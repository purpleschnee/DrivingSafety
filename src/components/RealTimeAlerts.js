import React from 'react';
import { Card, Table, Tag, Typography, Button, Space, Badge, Tooltip } from 'antd';
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
      render: (id) => <span style={{ fontSize: '14px' }}>{id}</span>,
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      width: 100,
      render: (time) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <ClockCircleOutlined style={{ color: '#8c8c8c', marginRight: '4px', fontSize: '14px' }} />
          <span style={{ fontSize: '14px' }}>{time}</span>
        </div>
      ),
    },
    {
      title: 'Driver',
      dataIndex: 'driverName',
      key: 'driverName',
      width: 120,
      render: (name, record) => (
        <div style={{ lineHeight: '1.3' }}>
          <div style={{ display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>
            <UserOutlined style={{ color: '#8c8c8c', marginRight: '4px', fontSize: '14px' }} />
            <span style={{ fontSize: '14px' }}>{name}</span>
          </div>
          <div style={{ marginLeft: '18px', fontSize: '12px', color: 'rgba(0, 0, 0, 0.45)' }}>
            ({record.driverId})
          </div>
        </div>
      ),
    },
    {
      title: 'Event',
      dataIndex: 'event',
      key: 'event',
      width: 120,
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
      ellipsis: {
        showTitle: false,
      },
      render: (location) => (
        <Tooltip placement="topLeft" title={location}>
          <span className="nowrap-cell">
            <EnvironmentOutlined style={{ color: '#8c8c8c', marginRight: '4px', fontSize: '14px' }} />
            <span style={{ fontSize: '14px' }}>{location}</span>
          </span>
        </Tooltip>
      ),
    },
    {
      title: 'Severity',
      dataIndex: 'severity',
      key: 'severity',
      width: 100,
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
      width: 100,
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
      width: 160,
      render: (_, record) => (
        <div style={{ display: 'flex' }}>
          <div style={{ width: '45%', textAlign: 'right', paddingRight: '10px' }}>
            <Button type="link" size="small">View</Button>
          </div>
          <div style={{ width: '55%', textAlign: 'left' }}>
            {record.status !== 'resolved' && (
              <Button type="link" size="small">Process</Button>
            )}
          </div>
        </div>
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
      <style jsx="true">{`
        .nowrap-cell {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          display: inline-flex;
          align-items: center;
          font-size: 14px;
        }
        .real-time-alerts-table {
          font-size: 14px;
        }
        .real-time-alerts-table .ant-table-cell {
          padding: 12px 8px;
          vertical-align: middle;
          font-size: 14px;
        }
        .real-time-alerts-table .ant-btn-link {
          padding: 0;
          height: 22px;
          line-height: 22px;
          font-size: 14px;
          color: #1890ff;
        }
        .real-time-alerts-table .ant-table-container {
          border-radius: 8px;
          overflow: hidden;
        }
        .real-time-alerts-table .ant-table-tbody > tr > td {
          border-bottom: 1px solid #f0f0f0;
          font-size: 14px;
        }
        .real-time-alerts-table .ant-table-thead > tr > th {
          background-color: #f5f5f5;
          font-weight: 500;
          padding: 16px 8px;
          border-bottom: 1px solid #f0f0f0;
          font-size: 14px;
        }
        .real-time-alerts-table .ant-tag {
          margin-right: 0;
          font-size: 12px;
        }
        .nowrap-column {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .alert-table-row {
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .alert-table-row:hover {
          background-color: #f5f5f5;
        }
      `}</style>
      <Table 
        columns={columns} 
        dataSource={alertsData} 
        rowKey="id"
        pagination={{ pageSize: 5 }}
        size="middle"
        scroll={{ x: 1100 }}
        className="real-time-alerts-table"
        rowClassName={() => 'alert-table-row'}
        bordered={false}
        onRow={(record) => ({
          onClick: () => {
            // Handle row click if needed
          },
        })}
      />
    </Card>
  );
};

export default RealTimeAlerts;
