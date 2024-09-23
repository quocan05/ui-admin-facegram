import { Tag, TagProps } from 'antd';
import './StatusTag.scss';
import { ECommonStatus } from 'src/variables/enum-variables';

interface ITagProps extends TagProps {
  type?: ECommonStatus;
  children?: React.ReactNode;
  squad?: boolean;
}

const StatusTag = ({ className, children, squad = true, type, ...rest }: ITagProps) => {
  return (
    <Tag
      className="StatusTag"
      color={type === ECommonStatus.ACTIVE ? 'success' : type === ECommonStatus.PENDING ? 'warning' : 'default'}
    >
      {children}
    </Tag>
  );
};

export default StatusTag;
