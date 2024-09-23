import { Flex, Avatar, notification, Image, Button as AntButton, Typography } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextArea from 'antd/es/input/TextArea';
import { IPost } from 'src/interfaces/post-interface';
import { IUser } from 'src/interfaces/user-interface';
import dayjs from 'dayjs';
import './PostForm.scss';

type Props = {
  defaultValues?: IPost;
  loading?: boolean;
  type?: string;
  onClose?(): void;
  handleProcess?(data: IUser): Promise<void>;
};

const PostForm = function (props: Props) {
  const { type, loading, defaultValues, handleProcess } = props;
  const [form] = useForm();
  const [noti, contextHolder] = notification.useNotification();
  const navigate = useNavigate();

  useEffect(() => {
    if (defaultValues) {
      form.setFieldsValue(defaultValues);
    }
  }, [defaultValues]);

  const handleBackToList = () => {
    // Go back to previous page or list
    // window.history.back();
  };

  return (
    <div className="post-card">
      {contextHolder}
      <Flex gap={16} vertical>
        {/* User Info */}
        <Flex justify="start" gap={12} align="center">
          <Avatar src={defaultValues?.author.avatar} size={40} />
          <Flex gap={10}>
            <span className="post-author">{defaultValues?.author.displayName}</span>
            <span className="post-timestamp">{dayjs(defaultValues?.createdAt).format('DD/MM/YYYY HH:mm')}</span>
          </Flex>
        </Flex>

        {/* Post Content */}
        <div className="post-content">
          <p>{defaultValues?.content}</p>
          {defaultValues?.images && defaultValues?.images.map((i) => <Image src={i} alt="Post image" />)}
        </div>

        {/* Post Actions */}
        <Flex gap={10} className="post-actions">
          <Typography>{`${defaultValues?.reacts.length} likes`}</Typography>
          <Typography>{`${defaultValues?.comments.length} comments`}</Typography>
        </Flex>
      </Flex>
    </div>
  );
};

export default PostForm;
