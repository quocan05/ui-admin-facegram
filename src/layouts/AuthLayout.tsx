import { Layout } from 'antd';
import { useEffect, useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import Header from './Header';
import { EAuthToken } from 'src/variables/storage';
import { RoutePaths } from 'src/routes/route-constant';
import { getItem } from 'src/utils/storage-utils';

const { Content } = Layout;

const AuthLayout = () => {
  useEffect(() => {
    if (!localStorage.getItem(EAuthToken.ACCESS_TOKEN)) {
      console.log('no auth');
      window.location.href = RoutePaths.AUTH;
    }
  }, [localStorage.getItem(EAuthToken.ACCESS_TOKEN)]);

  if (!localStorage.getItem(EAuthToken.ACCESS_TOKEN)) {
    console.log('no auth');
    window.location.href = RoutePaths.AUTH;
    return null;
  }

  return (
    <Layout hasSider style={{ minHeight: '100%', height: '100%', overflow: 'auto' }}>
      <Sidebar />
      <Layout style={{ height: '100%', overflow: 'auto' }}>
        <Header />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AuthLayout;
