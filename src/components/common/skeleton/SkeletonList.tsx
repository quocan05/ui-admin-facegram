import { Flex, Skeleton } from 'antd';
import React from 'react';

type Props = {
  count?: number;
};

const SkeletonList = (props: Props) => {
  const { count = 3 } = props;
  return (
    <Flex vertical gap={15}>
      {[...Array(count).keys()].map((_, i) => (
        <Skeleton.Input key={i} active size="large" block />
      ))}
    </Flex>
  );
};

export default SkeletonList;
