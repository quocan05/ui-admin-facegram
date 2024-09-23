import { Button, Form, Input } from 'antd';
import './FormLogin.scss';
import { IUserLogin } from 'src/interfaces/user-interface';
import { useState } from 'react';
import { authLogin } from 'src/services/auth.service';
import useNotification from 'antd/es/notification/useNotification';
import { setItem } from 'src/utils/storage-utils';
import { EAuthToken } from 'src/variables/storage';
import { RoutePaths } from 'src/routes/route-constant';

export const FormLogin = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [noti, contextHolder] = useNotification();
  const handleLogin = async () => {
    try {
      setLoading(true);
      const param: IUserLogin = form.getFieldsValue();
      const data = await authLogin(param);
      if (data) {
        setItem(EAuthToken.ACCESS_TOKEN, data.user.token);
      }
      noti.success({ message: 'Login success, redirect to Dashboard ' });
      window.location.href = RoutePaths.USER_LIST;
    } catch (error: any) {
      noti.error({ message: error.response.data.msg });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {contextHolder}
      <Form size="middle" layout="vertical" onFinish={handleLogin} form={form}>
        <Form.Item
          label={<p>Username</p>}
          name="userName"
          rules={[
            { required: true, message: 'Please input your Username!' },
            { max: 10, message: 'Username must be maximum 10 characters.' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={<p>Password</p>}
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input type="password" />
        </Form.Item>

        <Button
          loading={loading}
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{ width: '100%' }}
        >
          Log in
        </Button>
      </Form>
    </>
  );
};
