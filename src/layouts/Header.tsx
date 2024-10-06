import { useCallback } from 'react';
import { Avatar, Dropdown, Flex, Layout, Modal, Tooltip } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import './Header.scss';
import { CONFIRM_LOGOUT } from '../variables/messages';
import { IconBell1, IconQuestionMark1 } from '../assets/icons';
import { authLogout } from 'src/services/auth.service';

const Header = () => {
  const [modal, contextHolder] = Modal.useModal();
  const logout = () => {
    modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: CONFIRM_LOGOUT,
      okText: 'Yes',
      cancelText: 'No',
      onOk: () => {
        authLogout();
      },
    });
  };

  return (
    <Layout.Header className="Header" style={{ backgroundColor: '#FFFFFF' }}>
      <Flex className="Header__container" align="center" gap={12}>
        <Tooltip title={'questions'} arrow={false}>
          <IconQuestionMark1 className="Header__icon" />
        </Tooltip>
        <Tooltip title={'questions'} arrow={false}>
          <IconBell1 className="Header__icon" />
        </Tooltip>
        {true ? (
          <Dropdown
            arrow
            placement="bottomRight"
            menu={{
              items: [
                {
                  key: '2',
                  label: <span>Logout</span>,
                  onClick: logout,
                },
              ],
            }}
          >
            <Avatar style={{ width: 36, height: 36 }}>Admin</Avatar>
          </Dropdown>
        ) : (
          <span style={{ cursor: 'pointer' }}>Login</span>
        )}
      </Flex>
      {contextHolder}
    </Layout.Header>
  );
};

export default Header;
