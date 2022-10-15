import { PageContainer } from '@ant-design/pro-components';
import { Card, Input, Button, message, Form } from 'antd';
import { post } from 'axios';
import React from 'react';
const {TextArea} = Input;
import styles from './List.less';

/**
 * create article
 * @zh-CN 新建文章
 *
 * @param values
 */
 const createArticle = async (values: any) => {
  try {
    await post('/article',values);
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
      <Form onFinish={createArticle} className={styles.article}>
        <Card>
          文章标题
          <Form.Item name="title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Card>
        <Card>
          文章作者
          <Form.Item name="author" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Card>
        <Card>
          文章内容
          <Form.Item name="content" rules={[{ required: true }]}>
            <TextArea rows={18}/>
          </Form.Item>
        </Card>
        <Card>
          文章标签
          <Form.Item name="tags" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Card>
        <Card>
          <Button onClick={createArticle}>保存</Button>
          <Button type="primary" htmlType="submit">发表</Button>
        </Card>
      </Form>
    </PageContainer>
  );
};

export default Welcome;
