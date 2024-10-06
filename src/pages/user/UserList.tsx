import { Flex, Form, Popconfirm, Table, notification } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { ColumnType } from 'antd/es/table';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconRefresh, IconSearch, IconTrash1 } from 'src/assets/icons';
import Button from 'src/components/button';
import Input from 'src/components/input/Input';
import { IUser } from 'src/interfaces/user-interface';
import { RoutePaths } from 'src/routes/route-constant';
import { deleteUser, getUsers } from 'src/services/user-service';
import './UserList.scss';
import ModalCreateNewUser from './components/CreateUserModal';

const UserList = () => {
  const [list, setList] = useState<IUser[]>([]);
  const [filteredList, setFilteredList] = useState<IUser[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(''); // Track search term
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openModalCreate, setOpenModalCreate] = useState<boolean>(false);
  const [form] = useForm();
  const navigate = useNavigate();
  const [noti, contextHolder] = notification.useNotification();

  // Fetch user data
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await getUsers(); // Fetch all users initially
      setList(data.users);
      setFilteredList(data.users); // Set both list and filteredList initially
    } catch (error) {
      console.log(error);
      noti.error({ message: 'Failed to fetch users' });
    } finally {
      setIsLoading(false);
    }
  };

  // Search function to filter the list by username, email, or phone
  const applySearch = () => {
    if (!searchTerm) {
      setFilteredList(list); // Reset to full list when search is cleared
    } else {
      const filteredData = list.filter(
        (user) =>
          user.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.displayName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          user.phone?.toLowerCase().includes(searchTerm.toLowerCase()), // Ensure phone is included in the search
      );
      setFilteredList(filteredData);
    }
  };

  // Handle refresh
  const handleRefresh = () => {
    setSearchTerm(''); // Reset search term
    setFilteredList(list); // Reset filtered list when refreshing
  };

  const handleDelete = async (userId: string) => {
    try {
      await deleteUser(userId);
      fetchData();
      noti.success({ message: 'Delete user success!' });
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns: ColumnType<IUser>[] = [
    {
      key: 'email',
      title: 'EMAIL',
      render(_, record) {
        return <span>{record.email}</span>;
      },
      onCell: (record) => ({
        onClick: () => navigate(RoutePaths.USER_DETAIL(record._id, '')),
      }),
    },
    {
      key: '_id',
      title: 'ID',
      render(_, record) {
        return <span>{record._id}</span>;
      },
      onCell: (record) => ({
        onClick: () => navigate(RoutePaths.USER_DETAIL(record._id, '')),
      }),
    },
    {
      key: 'userName',
      title: 'USERNAME',
      align: 'center',
      render(_, record) {
        return <span>{record.userName}</span>;
      },
      onCell: (record) => ({
        onClick: () => navigate(RoutePaths.USER_DETAIL(record._id, '')),
      }),
    },
    {
      key: 'displayName',
      title: 'DISPLAY NAME',
      render(_, record) {
        return <span>{record.displayName}</span>;
      },
      onCell: (record) => ({
        onClick: () => navigate(RoutePaths.USER_DETAIL(record._id, '')),
      }),
    },
    {
      key: 'created_at',
      title: 'CREATED AT',
      render(_, record) {
        return <span>{dayjs(record.createdAt).format('DD/MM/YYYY')}</span>;
      },
      onCell: (record) => ({
        onClick: () => navigate(RoutePaths.USER_DETAIL(record._id, '')),
      }),
    },
    {
      key: 'phone',
      title: 'PHONE',
      align: 'center',
      render(_, record) {
        return <span>{record.phone}</span>;
      },
      onCell: (record) => ({
        onClick: () => navigate(RoutePaths.USER_DETAIL(record._id, '')),
      }),
    },

    {
      key: 'action',
      title: 'ACTION',
      render(_, record) {
        return (
          <Flex align="center">
            <Popconfirm
              title="Delete user"
              description="Are you sure you want to delete this user?"
              onConfirm={() => handleDelete(record._id)}
              okText="Yes"
              cancelText="No"
            >
              <Button icon={<IconTrash1 className={'icon-active-user'} />} type="link" />
            </Popconfirm>
          </Flex>
        );
      },
    },
  ];

  return (
    <>
      {contextHolder}
      <ModalCreateNewUser isOpen={openModalCreate} onClose={() => setOpenModalCreate(false)} onSuccess={fetchData} />
      <Flex vertical className="UserList">
        <Flex justify="space-between">
          <Flex justify="space-between">
            <Flex gap={8}>
              <Button onClick={handleRefresh}>
                <IconRefresh style={{ marginRight: 6, width: 17 }} /> Refresh
              </Button>
              <Flex>
                <Input
                  placeholder="Search by username, phone, or email"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                  style={{ width: 300 }}
                />
                <Button onClick={applySearch} type="primary" icon={<IconSearch />}>
                  Search
                </Button>
              </Flex>
            </Flex>
          </Flex>
          <Button onClick={() => setOpenModalCreate(true)}>Create</Button>
        </Flex>
        <div className="UserTable">
          <Table loading={isLoading} columns={columns} dataSource={filteredList} rowKey="_id" />
        </div>
      </Flex>
    </>
  );
};

export default UserList;
