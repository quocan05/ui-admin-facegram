import { Select as AntSelect, ConfigProvider, RefSelectProps } from 'antd';
import { ComponentProps, LegacyRef } from 'react';
import { getThemeColor } from 'src/utils/common-utils';

type Props = {
  squad?: boolean;
  inputRef?: LegacyRef<RefSelectProps>;
  isActive?: boolean;
} & ComponentProps<typeof AntSelect>;

const Select = ({ squad = true, isActive = false, inputRef, ...otherProps }: Props) => {
  const themeColor = getThemeColor();
  let activeObject = {};

  if (isActive) {
    activeObject = {
      colorBorderBg: isActive ? themeColor : undefined,
      colorBorder: isActive ? themeColor : undefined,
      defaultShadow: '0',
    };
  }
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            ...activeObject,
            borderRadius: squad ? 0 : 6,
          },
        },
      }}
    >
      <AntSelect {...otherProps} ref={inputRef} />
    </ConfigProvider>
  );
};
Select.Option = AntSelect.Option;

export default Select;
