import { Flex, Skeleton, theme, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { IconRefresh } from 'src/assets/icons';
import Button from 'src/components/button';
import { IPost } from 'src/interfaces/post-interface';
import { IUser } from 'src/interfaces/user-interface';
import { getAllPost } from 'src/services/post-service';
import { getUsers } from 'src/services/user-service';
import { ETitleCard } from 'src/variables/enum-variables';
import CardDisplay from './components/CardDisplay';
import { ClockComponent } from './components/Clock';
import './Dashboard.scss';
const Dashboard = () => {
  const { token } = theme.useToken();
  const [amountUsers, setAmountUsers] = useState<IUser[]>();
  const [amountPost, setAmountPosts] = useState<IPost[]>();
  const [amountReacts, setAmountReacts] = useState<number>(0);
  const [amountComments, setAmountComments] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const userData = await getUsers();
      const postsData = await getAllPost();
      if (postsData) {
        const reacts = postsData.posts.reduce((acc: any, post: any) => acc + post.reacts.length, 0);
        const comments = postsData.posts.reduce((acc: any, post: any) => acc + post.comments.length, 0);
        setAmountReacts(reacts);
        setAmountComments(comments);
      }
      setAmountPosts(postsData.posts ?? []);
      setAmountUsers(userData.users ?? []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <>
          <Skeleton.Input block style={{ height: 48 }} active />
          <Flex justify="space-between" vertical gap={100}>
            <Skeleton active />
            <Flex>
              <Skeleton.Node active style={{ width: 300, height: 140 }} />
              <Skeleton.Node active style={{ width: 300, height: 140 }} />
              <Skeleton.Node active style={{ width: 300, height: 140 }} />
              <Skeleton.Node active style={{ width: 300, height: 140 }} />
            </Flex>
          </Flex>
        </>
      ) : (
        <>
          <Typography.Title level={1} style={{ background: '#f1f2f2', padding: 24 }}>
            Dashboard & Statistic
          </Typography.Title>
          <Flex className="WrapperExtra" justify="space-between">
            <ClockComponent />
            <Button onClick={() => fetchData()}>
              <IconRefresh style={{ marginRight: 6, width: 17 }} /> Refresh
            </Button>
            {/* <Card style={{ width: 480, borderRadius: token.borderRadiusLG, border: '1px solid #000' }}>
          <Typography.Title level={3}>Calendar</Typography.Title>
          <Calendar fullscreen={false} mode="month" />
        </Card> */}
          </Flex>
          <Flex className="WrapperDashboard" justify="space-between">
            <CardDisplay title={ETitleCard.USER} amount={amountUsers?.length ?? 0} />
            <CardDisplay title={ETitleCard.POST} amount={amountPost?.length ?? 0} />
            <CardDisplay title={ETitleCard.REACT} amount={amountReacts ?? 0} />
            <CardDisplay title={ETitleCard.COMMENT} amount={amountComments ?? 0} />
          </Flex>
        </>
      )}
    </>
  );
};

export default Dashboard;
