import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Statistic, Table, List, Tag, Typography, Badge, Space } from 'antd';
import { Line } from '@ant-design/charts';
import { CarOutlined, ExclamationCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { useRealTimeData } from '../services/realTimeService';

const { Title, Text } = Typography;

/**
 * 实时安全监控组件
 * 显示实时安全评分、最近事件和驾驶员状态
 */
const RealTimeMonitor = () => {
  // 使用实时数据服务获取安全评分数据
  const { data: safetyData, loading: safetyLoading } = useRealTimeData('safety-scores');
  
  // 使用实时数据服务获取事件数据
  const { data: incidentData, loading: incidentLoading } = useRealTimeData('incidents');

  // 格式化时间显示
  const formatTime = (isoString) => {
    if (!isoString) return '';
    const date = new Date(isoString);
    return date.toLocaleTimeString();
  };

  // 安全评分趋势图配置
  const safetyScoreConfig = {
    data: safetyData?.trend || [],
    padding: 'auto',
    xField: 'time',
    yField: 'score',
    xAxis: {
      type: 'time',
      tickCount: 5,
    },
    yAxis: {
      min: 60,
      max: 100,
    },
    smooth: true,
    lineStyle: {
      stroke: '#1890ff',
      lineWidth: 3,
    },
    point: {
      size: 5,
      shape: 'circle',
      style: {
        fill: '#1890ff',
        stroke: '#fff',
        lineWidth: 2,
      },
    },
  };

  // 驾驶员表格列定义
  const driverColumns = [
    {
      title: '驾驶员ID',
      dataIndex: 'id',
      key: 'id',
      width: 100,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: 100,
    },
    {
      title: '安全评分',
      dataIndex: 'score',
      key: 'score',
      width: 100,
      render: (score) => {
        let color = 'green';
        if (score < 70) color = 'red';
        else if (score < 85) color = 'orange';
        
        return (
          <Text strong style={{ color }}>
            {score.toFixed(1)}
          </Text>
        );
      },
      sorter: (a, b) => a.score - b.score,
      defaultSortOrder: 'descend',
    },
  ];

  // 事件严重程度对应的标签颜色
  const severityColors = {
    '轻度': 'blue',
    '中度': 'orange',
    '严重': 'red',
  };

  return (
    <Card title="实时安全监控" className="real-time-monitor">
      <Row gutter={[16, 16]}>
        {/* 安全评分统计 */}
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic
              title="平均安全评分"
              value={safetyData?.average || 0}
              precision={1}
              valueStyle={{ color: '#3f8600' }}
              prefix={<CarOutlined />}
              suffix="分"
              loading={safetyLoading}
            />
          </Card>
        </Col>
        
        {/* 事件统计 */}
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic
              title="今日事件总数"
              value={incidentData?.total || 0}
              valueStyle={{ color: '#cf1322' }}
              prefix={<ExclamationCircleOutlined />}
              loading={incidentLoading}
            />
          </Card>
        </Col>
        
        {/* 最后更新时间 */}
        <Col xs={24} sm={12} md={8}>
          <Card>
            <Statistic
              title="最后更新时间"
              value={formatTime(new Date().toISOString())}
              prefix={<ClockCircleOutlined />}
            />
          </Card>
        </Col>
      </Row>
      
      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        {/* 安全评分趋势图 */}
        <Col xs={24} md={12}>
          <Card title="实时安全评分趋势">
            {safetyData?.trend && safetyData.trend.length > 0 ? (
              <Line {...safetyScoreConfig} height={250} />
            ) : (
              <div style={{ height: 250, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Text type="secondary">加载中...</Text>
              </div>
            )}
          </Card>
        </Col>
        
        {/* 最近事件列表 */}
        <Col xs={24} md={12}>
          <Card 
            title="最近事件" 
            extra={<Badge count={incidentData?.recent?.length || 0} style={{ backgroundColor: '#52c41a' }} />}
          >
            <List
              size="small"
              dataSource={incidentData?.recent || []}
              renderItem={item => (
                <List.Item>
                  <Space>
                    <Text strong>{item.driverId}</Text>
                    <Tag color="blue">{item.type}</Tag>
                    <Tag color={severityColors[item.severity]}>{item.severity}</Tag>
                    <Text type="secondary">{formatTime(item.time)}</Text>
                  </Space>
                </List.Item>
              )}
              locale={{ emptyText: '暂无事件' }}
            />
          </Card>
        </Col>
      </Row>
      
      <Row gutter={[16, 16]} style={{ marginTop: '16px' }}>
        {/* 驾驶员安全评分表格 */}
        <Col xs={24}>
          <Card title="驾驶员实时安全评分">
            <Table 
              columns={driverColumns} 
              dataSource={safetyData?.drivers || []} 
              rowKey="id"
              pagination={false}
              size="small"
              loading={safetyLoading}
            />
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

export default RealTimeMonitor;
