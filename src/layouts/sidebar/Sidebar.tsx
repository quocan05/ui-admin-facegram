import { Flex, Typography } from 'antd';
import Sider from 'antd/es/layout/Sider';
import FaceGramLogo from 'src/assets/images/facegramlogo.png';
import MenuComponent from './MenuComponent';
import './Sidebar.scss';
import Button from '../../components/button';
import { IconPlus } from '../../assets/icons';

type Props = {};

const Sidebar = (_props: Props) => {
  return (
    <Sider className="Sider" theme="light">
      <Flex style={{ marginTop: 15, marginBottom: 15, position: 'relative' }} align="center" vertical>
        <img src={FaceGramLogo} style={{ width: 100, textAlign: 'center', objectFit: 'contain' }} />
        <Typography.Text className="Sider_title">admin</Typography.Text>
      </Flex>
      <MenuComponent />
      <Button style={{ marginTop: 'auto', margin: 16 }}>
        <IconPlus style={{ marginRight: 6 }} /> Quick Action
      </Button>
    </Sider>
  );
};

export default Sidebar;
