import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

/**
 * 页面标题和描述组件
 * 用于统一所有页面的标题和描述样式
 * 
 * @param {string} title - 页面标题
 * @param {string} description - 页面描述
 */
const PageHeader = ({ title, description }) => {
  return (
    <div className="page-header mb-lg">
      <Title level={2} className="mb-xs">{title}</Title>
      {description && <div className="page-description">{description}</div>}
    </div>
  );
};

export default PageHeader;
