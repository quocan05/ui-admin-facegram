import { Typography } from 'antd';
import { useSearchParams } from 'react-router-dom';
import './style.scss';
import Button from '../../components/button';
import { EAuthNotiType } from '../../variables/enum-variables';
import { RoutePaths } from 'src/routes/route-constant';
import { useEffect } from 'react';
import { getItem } from 'src/utils/storage-utils';
import { EAuthToken } from 'src/variables/storage';

const AuthPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get('type') || EAuthNotiType.LOGOUT;

  useEffect(() => {
    if (getItem(EAuthToken.ACCESS_TOKEN)) window.location.href = RoutePaths.USER_LIST;
  }, []);

  const goLogin = () => {
    window.location.href = RoutePaths.LOGIN;
  };

  return (
    <div className="Auth">
      <div className="Auth__noti">
        <Typography.Title level={3}>
          {type === EAuthNotiType.LOGOUT
            ? `You have successfully logged out!`
            : `You're not authorized to view this content.`}
        </Typography.Title>
        <Button type="primary" onClick={goLogin}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default AuthPage;
