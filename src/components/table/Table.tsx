import { Table as AntTable, ConfigProvider } from 'antd';
import { ComponentProps } from 'react';

type Props = {} & ComponentProps<typeof AntTable>;

const Table = ({ pagination = false, ...otherProps }: Props) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: 'white',
            colorBgContainer: '#F8F9FA',
            fontWeightStrong: 700,
            headerColor: '#171A1F',
          },
        },
      }}
    >
      <AntTable pagination={pagination} {...otherProps} />
    </ConfigProvider>
  );
};

export default Table;
