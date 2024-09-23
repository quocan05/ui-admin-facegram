import { Flex, Form, Image, notification } from 'antd';
import { useForm } from 'antd/es/form/Form';
import TextArea from 'antd/es/input/TextArea';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'src/components/button';
import Input from 'src/components/input/Input';
import { TSelectOption } from 'src/interfaces/common-interface';
import { IUser } from 'src/interfaces/user-interface';

type Props = {
  defaultValues?: IUser;
  defaultIngredientOptions?: TSelectOption[];
  loading?: boolean;
  type?: string;
  onClose?(): void;
  handleProcess?(data: IUser): Promise<void>;
};

const UserForm = function (props: Props) {
  const { type, loading, defaultValues, handleProcess } = props;
  const [form] = useForm();
  const [noti, contextHolder] = notification.useNotification();

  const navigate = useNavigate();

  const handleBackToList = () => {
    // history.length > 1 ? window.history.back() : navigate(RoutePaths.MENU_ITEM_INGREDIENT_LIST);
  };

  useEffect(() => {
    form.setFieldsValue(defaultValues);
  }, [defaultValues]);

  return (
    <>
      {contextHolder}
      <Form form={form} name="basic" labelCol={{ span: 3 }} onFinish={handleProcess} autoComplete="off">
        <Form.Item
          labelAlign="left"
          label={'Username'}
          name={'userName'}
          labelCol={{ span: 9 }}
          rules={[{ required: true, message: 'Please enter username' }]}
        >
          <Input disabled={type === 'edit'} />
        </Form.Item>
        <Form.Item
          labelAlign="left"
          label={'Phone'}
          name={'phone'}
          labelCol={{ span: 9 }}
          rules={[{ required: true, message: 'Please enter phone' }]}
        >
          <Input disabled={type === 'edit'} />
        </Form.Item>
        <Form.Item
          labelAlign="left"
          label={'Email'}
          name={'email'}
          labelCol={{ span: 9 }}
          rules={[{ required: true, message: 'Please enter email address' }]}
        >
          <Input disabled={type === 'edit'} />
        </Form.Item>
        <Form.Item
          labelAlign="left"
          label={'First Name'}
          name={'firstName'}
          labelCol={{ span: 9 }}
          rules={[{ required: true, message: 'Please enter first name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          labelAlign="left"
          label={'Last Name'}
          name={'lastName'}
          labelCol={{ span: 9 }}
          rules={[{ required: true, message: 'Please enter last name' }]}
        >
          <Input />
        </Form.Item>
        {type === 'edit' && (
          <Form.Item labelAlign="left" label={'Avatar'} name={'avatar'} labelCol={{ span: 9 }}>
            <Image src={defaultValues?.avatar} />
          </Form.Item>
        )}
        {type === 'create' && (
          <Form.Item
            labelAlign="left"
            label={'Password'}
            name={'password'}
            labelCol={{ span: 9 }}
            rules={[{ required: true, message: 'Please enter password' }]}
          >
            <Input type="password" />
          </Form.Item>
        )}
        <Form.Item labelAlign="left" label={'Bio'} name={'bio'} labelCol={{ span: 9 }}>
          <TextArea />
        </Form.Item>
        <Flex justify="flex-end" gap={10}>
          <Button loading={loading} type="primary" htmlType="submit">
            {type === 'edit' ? 'Apply' : 'Create'}
          </Button>
        </Flex>
      </Form>
    </>
  );
};

export default UserForm;
