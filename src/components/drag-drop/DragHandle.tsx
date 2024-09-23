import type { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';
import { Button } from 'antd';
import React, { useContext } from 'react';
import { IconOrder } from 'src/assets/icons';

export interface RowContextProps {
  setActivatorNodeRef?: (element: HTMLElement | null) => void;
  listeners?: SyntheticListenerMap;
}
export const RowContext = React.createContext<RowContextProps>({});

export const DragHandle: React.FC = () => {
  const { setActivatorNodeRef, listeners } = useContext(RowContext);
  return (
    <Button
      type="text"
      size="small"
      icon={<IconOrder />}
      style={{ cursor: 'move' }}
      ref={setActivatorNodeRef}
      {...listeners}
    />
  );
};
