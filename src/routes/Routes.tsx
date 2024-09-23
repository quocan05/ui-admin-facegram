import { Suspense, useMemo } from 'react';
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { LoginPage } from 'src/pages/auth/login/Login';
import UserDetail from 'src/pages/auth/user/UserDetail';
import PostList from 'src/pages/post/PostList';
import AuthLayout from '../layouts/AuthLayout';
import NonAuthLayout from '../layouts/NonAuthLayout';
import AuthPage from '../pages/auth';
import UserList from '../pages/auth/user/UserList';
import { RoutePaths } from './route-constant';
import PostDetail from 'src/pages/post/PostDetail';

const Routes = () => {
  const routes = useMemo(
    () =>
      createBrowserRouter(
        createRoutesFromElements(
          <>
            {/* non auth */}
            <Route element={<NonAuthLayout />}>
              <Route path={RoutePaths.AUTH} element={<AuthPage />} />
              <Route path={RoutePaths.LOGIN} element={<LoginPage />} />
            </Route>

            {/*auth */}
            <Route element={<AuthLayout />}>
              <Route index element={<Navigate to={RoutePaths.USER_LIST} replace />} />
              {/* user */}
              <Route path="*" element={<UserList />} />
              <Route path={RoutePaths.USER_DETAIL()} element={<UserDetail />} />
              <Route path={RoutePaths.POST_LIST} element={<PostList />} />
              <Route path={RoutePaths.POST_DETAIL()} element={<PostDetail />} />
            </Route>
          </>,
        ),
      ),
    [],
  );

  return (
    <Suspense>
      <RouterProvider router={routes} />
    </Suspense>
  );
};

export default Routes;
