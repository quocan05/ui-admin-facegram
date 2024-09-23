import { ConfigProvider, Tag, TagProps } from 'antd';
import './MenuCardinalityTag.scss';
import { ECardinality } from 'src/variables/enum-variables';

interface ITagProps extends TagProps {
  children?: React.ReactNode;
  type?: ECardinality;
}

const MenuCardinalityTag = ({ className, children, type, ...rest }: ITagProps) => {
  return (
    <Tag
      className={
        type === ECardinality.FLEXI_SELECT
          ? 'FlexiSelect'
          : type === ECardinality.MANDATORY
          ? 'Mandatory'
          : 'SingleSelect'
      }
    >
      {children}
    </Tag>
  );
};

export default MenuCardinalityTag;
