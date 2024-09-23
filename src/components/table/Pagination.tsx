import { Pagination as AntPagination } from 'antd';
import { ComponentProps } from 'react';

type Props = {} & ComponentProps<typeof AntPagination>;

const Pagination = (props: Props) => {
  return <AntPagination {...props} />;
};

export default Pagination;
