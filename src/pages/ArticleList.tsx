import { PageContainer } from '@ant-design/pro-components';
import { Alert, Card, Typography, Input, Button, message, Form, List } from 'antd';
import { get } from 'axios';
import moment from 'moment';
import React from 'react';
import { FormattedMessage, useIntl } from 'umi';
import styles from './ArticleList.less';
const {TextArea} = Input;

/**
 * create article
 * @zh-CN 新建文章
 *
 * @param selectedRows
 */
 const getArticles = async () => {
  try {
    const res = await get('/article');
    const articles = res.data.data;
    console.log(articles);
    return articles;
  } catch (error) {
    message.error('文章列表获取失败');
    return [];
  }
};

const articles: any[]= await getArticles(); 

const ArticleList: React.FC = () => {
  // const intl = useIntl();
  return (
    <PageContainer>
      <List
        size="default"
        dataSource={articles}
        renderItem={item => <List.Item><span>{item.title}</span> 创建于<span>{moment(item.create_at).format('YYYY-MM-DD HH:mm:ss')}</span></List.Item>}
      />       
    </PageContainer>
  );
};

export default ArticleList;
