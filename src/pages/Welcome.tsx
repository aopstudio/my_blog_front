import { PageContainer } from '@ant-design/pro-components';
import { Alert, Card, Typography, Input, Button, message } from 'antd';
import { post } from 'axios';
import React from 'react';
import { FormattedMessage, useIntl } from 'umi';
import styles from './Welcome.less';
const {TextArea} = Input;
const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

/**
 * create article
 * @zh-CN 新建文章
 *
 * @param selectedRows
 */
 const createArticle = async () => {
  try {
    await post('/article',{
      title:'123',
      author:'yi',
      content:'312',
      tags:'r'
    });
    message.success('创建成功');
    return true;
  } catch (error) {
    message.error('Delete failed, please try again');
    return false;
  }
};

const Welcome: React.FC = () => {
  // const intl = useIntl();

  return (
    <PageContainer>
      <Card>
        文章标题
        <Input />
      </Card>
      <Card>
        文章内容
        <TextArea rows={18}/>
      </Card>
      <Card>
        文章标签
        <Input />
      </Card>
      <Card>
        <Button onClick={createArticle}>保存</Button>
        <Button type="primary">发表</Button>
      </Card>
    </PageContainer>
  );
};

export default Welcome;
