import { Tag, TagProps } from "antd";
import './BackTag.scss'

interface ITagProps extends TagProps {
    children?: React.ReactNode;
    squad?: boolean;
  }
  
  const BackTag = ({ className, children, squad = true, ...rest }: ITagProps) => {
    return (
      <Tag className="BackTag">
        {children}
      </Tag>
    );
  };
  
  export default BackTag;