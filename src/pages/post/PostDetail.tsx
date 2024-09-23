import { Flex, Typography } from 'antd';
import useNotification from 'antd/es/notification/useNotification';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IPost } from 'src/interfaces/post-interface';
import { getPost } from 'src/services/post-service';
import { editUser } from 'src/services/user-service';
import PostForm from './components/PostForm';
import './PostDetail.scss';

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<IPost>();
  const [loading, setLoading] = useState<boolean>(false);
  const [noti, contextHolder] = useNotification();
  const fetchPostDetail = async () => {
    if (!postId) return;
    try {
      const data = await getPost(postId);
      setPost(data.post);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (data: any) => {
    try {
      setLoading(true);
      if (!postId) return;
      await editUser(postId, data);
      noti.success({ message: 'Edit user success' });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPostDetail();
  }, []);
  return (
    <Flex vertical className="User">
      {contextHolder}
      <div style={{ width: '60%' }}>
        <Flex align="center" gap={30}>
          <Typography.Title level={3}>Post author: {post?.author.displayName}</Typography.Title>
        </Flex>
        <Typography.Title level={5} className="UserID">
          Post ID: {post?._id}
        </Typography.Title>
        <Flex align="center" gap={30} className="UserDetail">
          <Typography.Title level={5}>{`Post Detail:`} </Typography.Title>
        </Flex>
        <PostForm type="edit" loading={loading} defaultValues={post} handleProcess={handleEdit} />
      </div>
    </Flex>
  );
};

export default PostDetail;
