import { Card, Col, Empty, Flex, notification, Popconfirm, Row, Spin, Tooltip, Typography } from 'antd';
import { memo, useCallback, useEffect, useState } from 'react';
import { DragDropContext, Draggable, DraggableProvided, Droppable, DropResult } from 'react-beautiful-dnd';

import {
  IconChevronDown,
  IconChevronUp,
  IconDrag,
  IconPen1,
  IconPlus,
  IconRefreshList,
  IconTrash1,
} from 'src/assets/icons';
import Button from 'src/components/button';
import ResponseError from 'src/interfaces/error-response-interface';
import { IMenuItem, IMenuItemSection, IMenuItemSectionEdit } from 'src/interfaces/menu-interface';
import CreateMenuItemModal from 'src/pages/menu/components/CreateMenuItemModal';
import EditMenuItemSectionModal from 'src/pages/menu/components/EditMenuItemSectionModal';
import { deleteMenuSection, getMenuItemList, menuItemOrdering } from 'src/services/menu-service';
import {
  CONFIRM_DELETE_MENU_ITEM_SECTION,
  DELETE_MENU_ITEM_SECTION_SUCCESS,
  ORDERING_MENU_ITEM_SUCCESS,
} from 'src/variables/messages';
import MenuItemListItem from './MenuItemListItem';

type ItemProps = {
  data: IMenuItemSection;
  openByDefault?: boolean;
  isDisabled?: boolean;
  provided?: DraggableProvided;
  onRefreshList?(): void;
};

const MenuItemSectionListItem = memo((props: ItemProps) => {
  const { data, openByDefault, isDisabled, provided, onRefreshList } = props;
  const [isExpand, setIsExpand] = useState(openByDefault);
  const [list, setList] = useState<IMenuItem[]>([]);
  const [ids, setIds] = useState<string[]>([]);
  const [editData, setEditData] = useState<IMenuItemSectionEdit>();
  const [isLoading, setIsLoading] = useState(false);
  const [noti, contextHolder] = notification.useNotification();
  const [isCreateMenuItemSection, setIsCreateMenuItemSection] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      if (!data.parent_menu_id) return;
      setIsLoading(true);
      const response = await getMenuItemList(data.parent_menu_id, data.id);
      const sortedList = response.data.sort((a, b) => {
        if (a.ordering === b.ordering) {
          return a.name.localeCompare(b.name);
        }
        return a.ordering - b.ordering;
      });
      setList(sortedList);
    } catch (error) {
      console.log(error);
      noti.error({ message: (error as ResponseError).message });
    } finally {
      setIsLoading(false);
    }
  }, [data.id]);

  const handleExpand = async () => {
    if (list.length) setIsExpand(true);
    else {
      await fetchData();
      setIsExpand(true);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteMenuSection(id);
      noti.success({ message: DELETE_MENU_ITEM_SECTION_SUCCESS });
    } catch (error) {
      noti.error({ message: (error as ResponseError).message });
    } finally {
      onRefreshList?.();
    }
  };

  const orderingList = async () => {
    try {
      await menuItemOrdering(data.id, ids);
      noti.success({ message: ORDERING_MENU_ITEM_SUCCESS });
    } catch (error) {
      noti.error({ message: (error as ResponseError).message });
    }
  };

  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) {
        return;
      }
      const newList = Array.from(list);
      const [movedItem] = newList.splice(result.source.index, 1);
      newList.splice(result.destination.index, 0, movedItem);
      setList(newList);
      const listIds = newList.filter((item) => item.id !== '');
      setIds(listIds.map((i) => i.id));
    },
    [list],
  );

  useEffect(() => {
    if (ids.length > 0) {
      orderingList();
    }
  }, [ids]);

  useEffect(() => {
    if (openByDefault) {
      fetchData();
    }
  }, [openByDefault]);

  return (
    <>
      {contextHolder}
      <CreateMenuItemModal
        isOpen={isCreateMenuItemSection}
        onClose={() => setIsCreateMenuItemSection(false)}
        onSuccess={fetchData}
        parent_section_id={data.id}
        parent_menu_id={data.parent_menu_id}
      />
      <EditMenuItemSectionModal
        data={editData}
        onClose={() => setEditData(undefined)}
        onSuccess={() => onRefreshList?.()}
      />
      <Card size="small" className="CardMenuItemSection" style={{ marginTop: 5, padding: 0, backgroundColor: 'white' }}>
        <Flex align="center" gap={10} style={{ marginTop: 5 }}>
          <Button
            onClick={() => (isExpand ? setIsExpand(false) : handleExpand())}
            loading={isLoading}
            shape="circle"
            icon={isExpand ? <IconChevronUp /> : <IconChevronDown />}
          />
          <Flex vertical>
            <Typography.Title style={{ margin: 0 }} level={5}>
              {data.name}
            </Typography.Title>
          </Flex>
          <Flex style={{ marginLeft: 'auto' }} gap={4}>
            <Tooltip title="Refresh list">
              <Button
                disabled={isDisabled}
                shape="circle"
                loading={isLoading}
                onClick={fetchData}
                icon={<IconRefreshList className="icon-active" width={20} height={20} />}
              />
            </Tooltip>
            <Tooltip title="Add new menu item">
              <Button
                disabled={isDisabled}
                onClick={() => setIsCreateMenuItemSection(true)}
                loading={isLoading}
                shape="circle"
                icon={<IconPlus width={16} height={16} className="icon-active" />}
              />
            </Tooltip>
            <Tooltip title={data.id ? 'Edit Section' : "Can't Edit. This is default section name"}>
              <Button
                loading={isLoading}
                onClick={() => setEditData(data)}
                disabled={isDisabled || !data.id}
                shape="circle"
                icon={<IconPen1 width={16} height={16} className="icon-active" />}
              />
            </Tooltip>
            {data.id && (
              <>
                <Popconfirm
                  placement="topLeft"
                  title="Delete menu section"
                  description={CONFIRM_DELETE_MENU_ITEM_SECTION}
                  onConfirm={() => handleDelete(data.id)}
                  okText="Yes"
                  cancelText="No"
                >
                  <Tooltip title={'Delete'}>
                    <Button
                      disabled={isDisabled}
                      shape="circle"
                      icon={<IconTrash1 width={16} height={16} className="icon-active" />}
                      style={{ marginLeft: 'auto' }}
                    />
                  </Tooltip>
                </Popconfirm>
              </>
            )}
            <Tooltip title={'Click to drag item'}>
              <Button
                // prevent drag, always need elem existed to prevent dnd show error missing dragHandler
                style={!data.id ? { display: 'none' } : {}}
                disabled={isDisabled}
                shape="circle"
                icon={<IconDrag width={16} height={16} className="icon-active" />}
                {...provided?.dragHandleProps}
              />
            </Tooltip>
          </Flex>
        </Flex>
      </Card>
      <Row style={{ display: isExpand ? 'flex' : 'none' }}>
        <Col offset={1} flex={'auto'}>
          <Spin spinning={isLoading}>
            {list.length ? (
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId={`drop-${data.id}`} type="section">
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      {list.map((menuItem, index) => (
                        <Draggable key={menuItem.id} draggableId={`drag-${menuItem.id}`} index={index}>
                          {(provided) => (
                            <div ref={provided.innerRef} {...provided.draggableProps}>
                              <MenuItemListItem
                                openMenuItemByDefault={index === 0}
                                key={menuItem.id}
                                data={menuItem}
                                onRefreshList={fetchData}
                                onDuplicateItem={fetchData}
                                isDisabled={isDisabled}
                                provided={provided}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            ) : (
              <Card style={{ marginTop: 5 }}>
                <Empty description="No menu item" />
              </Card>
            )}
          </Spin>
        </Col>
      </Row>
    </>
  );
});

export default MenuItemSectionListItem;
