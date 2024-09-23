import { FormLogin } from './components/FormLogin';
import './Login.scss';
import { Col, notification, Row, Typography } from 'antd';
export const LoginPage = () => {
  const [noti, contextHolder] = notification.useNotification();

  return (
    <Row align={'middle'} justify={'center'} style={{ height: '100$' }}>
      {contextHolder}
      <Col span={6}>
        <Typography.Title level={2} style={{ textAlign: 'center' }}>
          Sign In to Admin FaceGram
        </Typography.Title>
        <div className="wrapper-form-login">
          <FormLogin />
        </div>
      </Col>
    </Row>
  );
};
