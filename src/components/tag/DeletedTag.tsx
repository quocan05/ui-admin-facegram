import { ConfigProvider, Tag as AntTag, ButtonProps, TagProps, Badge } from 'antd';

import './DeletedTag.scss';

interface ITagProps extends TagProps {
  children?: React.ReactNode;
  squad?: boolean;
}

const DeletedTag = ({ className, children, squad = true, ...rest }: ITagProps) => {
  return (
    <Badge className="DeletedTag" count={'Deleted'}>
      {children}
    </Badge>
  );
};

export default DeletedTag;
