import { Flex, Popconfirm, Table, notification } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { ColumnType } from 'antd/es/table';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconRefresh, IconSearch, IconTrash1 } from 'src/assets/icons';
import Button from 'src/components/button';
import Input from 'src/components/input/Input';
import { IPost } from 'src/interfaces/post-interface';
import { RoutePaths } from 'src/routes/route-constant';
import { getAllPost, filterPostByUserId, deletePost } from 'src/services/post-service'; // Import filter API
import { deleteUser } from 'src/services/user-service';
import './PostList.scss';

const PostList = () => {
  const [list, setList] = useState<IPost[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(''); // Track search term
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [openModalCreate, setOpenModalCreate] = useState<boolean>(false);
  const [form] = useForm();
  const navigate = useNavigate();
  const [noti, contextHolder] = notification.useNotification();

  // Fetch all posts or filter by user ID if search term exists
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await getAllPost();
      setList(data.posts);
    } catch (error) {
      console.log(error);
      noti.error({ message: 'Failed to fetch posts' });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle refresh
  const handleRefresh = () => {
    setSearchTerm(''); // Reset search term
    fetchData(); // Fetch all posts
  };

  // Handle search/filter by authorId
  const handleSearch = async () => {
    if (searchTerm) {
      try {
        setIsLoading(true);
        const data = await filterPostByUserId(searchTerm);
        setList(data.posts);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleDelete = async (postId: string) => {
    try {
      await deletePost(postId);
      fetchData();
      noti.success({ message: 'Delete post success!' });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(list);
  }, [list]);

  const columns: ColumnType<IPost>[] = [
    {
      key: '_id',
      title: 'ID',
      render(_, record) {
        return <span>{record._id}</span>;
      },
      onCell: (record) => ({
        onClick: () => navigate(RoutePaths.POST_DETAIL(record._id)),
      }),
    },
    {
      key: 'author',
      title: 'AUTHOR',
      align: 'center',
      render(_, record) {
        return <span>{record.author.displayName}</span>;
      },
    },
    {
      key: 'content',
      title: 'CONTENT',
      render(_, record) {
        return <span>{record.content}</span>;
      },
      onCell: (record) => ({
        onClick: () => navigate(RoutePaths.POST_DETAIL(record._id)),
      }),
    },
    {
      key: 'created_at',
      title: 'CREATED AT',
      render(_, record) {
        return <span>{dayjs(record.createdAt).format('DD/MM/YYYY')}</span>;
      },
      onCell: (record) => ({
        onClick: () => navigate(RoutePaths.POST_DETAIL(record._id)),
      }),
    },
    {
      key: 'reacts',
      title: 'REACTS',
      align: 'center',
      render(_, record) {
        return <span>{record.reacts.length}</span>;
      },
      onCell: (record) => ({
        onClick: () => navigate(RoutePaths.POST_DETAIL(record._id)),
      }),
    },
    {
      key: 'comments',
      title: 'COMMENTS',
      align: 'center',
      render(_, record) {
        return <span>{record.comments.length}</span>;
      },
      onCell: (record) => ({
        onClick: () => navigate(RoutePaths.POST_DETAIL(record._id)),
      }),
    },
    {
      key: 'action',
      title: 'ACTION',
      render(_, record) {
        return (
          <Flex align="center">
            <Popconfirm
              title="Delete Post"
              description="Are you sure you want to delete this post?"
              onConfirm={() => handleDelete(record._id)}
              okText="Yes"
              cancelText="No"
            >
              <Button icon={<IconTrash1 className={'icon-active'} />} type="link" />
            </Popconfirm>
          </Flex>
        );
      },
    },
  ];

  return (
    <>
      {contextHolder}
      <Flex vertical className="UserList">
        <Flex justify="space-between">
          <Flex justify="space-between">
            <Flex gap={8}>
              <Button onClick={handleRefresh}>
                <IconRefresh style={{ marginRight: 6, width: 17 }} /> Refresh
              </Button>
              <Flex>
                <Input
                  placeholder="Filter post by user ID"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                  style={{ width: 300 }}
                />
                <Button type="primary" icon={<IconSearch />} onClick={handleSearch}>
                  Filter
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <div className="UserTable">
          <Table loading={isLoading} columns={columns} dataSource={list} rowKey="_id" />
        </div>
      </Flex>
    </>
  );
};

export default PostList;
