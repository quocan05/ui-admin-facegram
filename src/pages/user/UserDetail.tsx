import { Flex, Spin, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IUser } from 'src/interfaces/user-interface';
import { editUser, getUser } from 'src/services/user-service';
import UserForm from './components/UserForm';
import './UserDetail.scss';
import useNotification from 'antd/es/notification/useNotification';

const UserDetail = () => {
  const { userId } = useParams();
  const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState<boolean>(false);
  const [noti, contextHolder] = useNotification();
  const fetchUserDetail = async () => {
    if (!userId) return;
    try {
      const data = await getUser(userId);
      setUser(data.user);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (data: any) => {
    try {
      setLoading(true);
      if (!userId) return;
      await editUser(userId, data);
      noti.success({ message: 'Edit user success' });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserDetail();
  }, []);
  return (
    <Flex vertical className="User">
      {contextHolder}
      <div style={{ width: '60%' }}>
        <Flex align="center" gap={30}>
          <Typography.Title level={3}>User: {user?.displayName}</Typography.Title>
        </Flex>
        <Typography.Title level={5} className="UserID">
          User ID: {user?._id}
        </Typography.Title>
        <Flex align="center" gap={30} className="UserDetail">
          <Typography.Title level={5}>{`User Detail:`} </Typography.Title>
        </Flex>
        <UserForm type="edit" loading={loading} defaultValues={user} handleProcess={handleEdit} />
      </div>
    </Flex>
  );
};

export default UserDetail;
