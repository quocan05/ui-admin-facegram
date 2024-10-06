import type { MenuProps } from 'antd';
import { Flex, Menu, Typography } from 'antd';
import { FunctionComponent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import '../../themes/_colors.scss';
import './MenuComponent.scss';
import { RoutePaths } from '../../routes/route-constant';
import { IconClipboard, IconDashboard, IconUser } from '../../assets/icons';

type MenuItem = Required<MenuProps>['items'][number];

const MenuComponent = () => {
  const [selectedKey, setSelectedKey] = useState<string>('');
  const navigate = useNavigate();
  const getTitle = (key: string, label: string, Icon?: FunctionComponent<React.SVGProps<SVGSVGElement>>) => {
    const isSelected = key == selectedKey;
    return (
      <Flex align="center" gap={10}>
        {!!Icon && (
          <Icon
            style={{
              width: 24,
              height: 24,
            }}
            className={isSelected ? 'active-item' : 'inactive-item'}
          />
        )}
        <Typography.Text className={isSelected ? 'active-item' : 'inactive-item'}>{label}</Typography.Text>
      </Flex>
    );
  };

  const menuList: MenuItem[] = [
    {
      key: RoutePaths.DASHBOARD,
      label: getTitle(RoutePaths.DASHBOARD, 'Dashboard', IconDashboard),
    },
    {
      key: RoutePaths.USER_LIST,
      label: getTitle(RoutePaths.USER_LIST, 'Users', IconUser),
    },
    {
      key: RoutePaths.POST_LIST,
      label: getTitle(RoutePaths.POST_LIST, 'Posts', IconClipboard),
    },
  ].map((item) => ({ ...item, style: { marginTop: 10 } }));

  const onMenuClick = (path: string) => {
    setSelectedKey(path);
    navigate(path);
  };

  useEffect(() => {
    const key = `/${location.pathname.split('/')[1]}`;
    setSelectedKey(key);
  }, [location.pathname]);

  return (
    <Flex vertical style={{ flexGrow: 1 }}>
      <Menu
        onClick={(menu) => onMenuClick(menu.key)}
        className="MenuComponent"
        mode="inline"
        defaultSelectedKeys={[RoutePaths.USER_LIST]}
        selectedKeys={[selectedKey]}
        items={menuList}
        style={{ gap: 10 }}
      />
    </Flex>
  );
};

export default MenuComponent;
