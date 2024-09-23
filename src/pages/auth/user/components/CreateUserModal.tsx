import { Modal, notification, Typography } from 'antd';
import { useState } from 'react';
import ResponseError from 'src/interfaces/error-response-interface';
import { IUser } from 'src/interfaces/user-interface';
import { CREATE_INGREDIENT_SUCCESS } from 'src/variables/messages';
import UserForm from './UserForm';
import { createUser } from 'src/services/user-service';

type Props = {
  isOpen: boolean;
  onClose(): void;
  onSuccess(): void;
};

const ModalCreateNewUser = (prop: Props) => {
  const { isOpen, onClose, onSuccess } = prop;
  const [loading, setLoading] = useState<boolean>(false);
  const [noti, contextHolder] = notification.useNotification();

  const handleCreate = async (data: IUser) => {
    try {
      setLoading(true);
      await createUser(data);
      noti.success({ message: 'User created successfully' });
      onClose();
      onSuccess();
    } catch (error) {
      noti.error({ message: (error as ResponseError).message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {contextHolder}
      <Modal
        width={600}
        maskClosable={false}
        destroyOnClose
        title={
          <Typography.Title level={4} className="text">
            Create User
          </Typography.Title>
        }
        onCancel={onClose}
        open={isOpen}
        footer={null}
      >
        <UserForm type="create" handleProcess={handleCreate} loading={loading} />
      </Modal>
    </>
  );
};

export default ModalCreateNewUser;
