import { Flex, Tag } from 'antd';
import { CheckableTagProps } from 'antd/es/tag';
import './CustomTag.scss';
import { IConfigUI } from 'src/interfaces/generic-interface';

interface ICheckableTagProps extends Omit<CheckableTagProps, 'checked'> {
  label: string;
  value?: boolean;
  iconUrl?: string;
  config?: IConfigUI;
}

const CustomTag = ({ label, value = false, className, iconUrl, config, style, ...rest }: ICheckableTagProps) => {
  const shapeClassName = config?.shape === 'pill' ? 'pill' : 'square';
  const modifiedClassName = `fd-custom-tag ${className} ${shapeClassName}`;

  const normalStyles: React.CSSProperties = {
    backgroundColor: config?.unselected_colour_background ?? '#f1f2f2',
    color: config?.unselected_colour_text ?? '#414042',
    borderColor: config?.unselected_border_colour ?? '#f1f2f2',
    ...style,
  };
  const selectedStyles: React.CSSProperties = {
    backgroundColor: config?.selected_colour_background ?? '#414042',
    color: config?.selected_colour_text ?? '#f1f2f2',
    borderColor: config?.selected_border_colour ?? '#414042',
    ...style,
  };

  const dingbat = value && config?.selected_dingbat !== 'None' && config?.selected_dingbat;

  return (
    <Tag.CheckableTag
      className={modifiedClassName}
      checked={value}
      style={value ? selectedStyles : normalStyles}
      {...rest}
    >
      <Flex gap={4} align="center">
        {iconUrl ? <img src={iconUrl} alt={label} /> : ''}
        {dingbat}
        <p>{label}</p>
      </Flex>
    </Tag.CheckableTag>
  );
};

export default CustomTag;
