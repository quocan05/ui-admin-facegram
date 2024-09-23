import { Button, Card, Col, Empty, Flex, notification, Popconfirm, Row, Spin, Tooltip, Typography } from 'antd';
import { memo, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { DragDropContext, Draggable, DraggableProvided, Droppable, DropResult } from 'react-beautiful-dnd';
import {
  IconChevronDown,
  IconChevronUp,
  IconDrag,
  IconPen1,
  IconPlus,
  IconRefreshList,
  IconUnlink,
} from 'src/assets/icons';
import StatusTag from 'src/components/tag/StatusTag';
import ResponseError from 'src/interfaces/error-response-interface';
import { IMenu, IMenuItemSection } from 'src/interfaces/menu-interface';
import CreateMenuItemSectionModal from 'src/pages/menu/components/CreateMenuItemSectionModal';
import { RoutePaths } from 'src/routes/routes-constants';
import { getMenuItemSectionList, menuSectionOrdering, unassignMenu } from 'src/services/menu-service';
import { DEFAULT_PAGE } from 'src/variables/common';
import { ESortType } from 'src/variables/enum-variables';
import { uncategorizedSectionData } from 'src/variables/menu';
import { CONFIRM_UNASSIGN_MENU, ORDERING_MENU_SECTION_SUCCESS, UNASSIGN_MENU_SUCCESS } from 'src/variables/messages';
import { EMenuDetailTabItem } from 'src/variables/route';
import MenuItemSectionListItem from './MenuItemSectionListItem';
import './MenuListItem.scss';

type Props = {
  data: IMenu;
  openByDefault?: boolean;
  isDisabled?: boolean;
  provided?: DraggableProvided;
  onUnassignSuccess?(): void;
};

const MenuListItem = memo((props: Props) => {
  const { data, openByDefault, isDisabled, provided, onUnassignSuccess } = props;
  const [list, setList] = useState<IMenuItemSection[]>([]);
  const [ids, setIds] = useState<string[]>([]);
  const [isOpenMenuItemSectionList, setIsOpenMenuList] = useState(openByDefault);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreateMenuItemSection, setIsCreateMenuItemSection] = useState(false);
  const [noti, contextHolder] = notification.useNotification();

  const fetchData = useCallback(async () => {
    try {
      if (!data.id) return;
      setIsLoading(true);
      const response = await getMenuItemSectionList(data.id, {
        page: DEFAULT_PAGE,
        itemsPerPage: 100,
        sort_orders: ESortType.ASC,
        sort_columns: 'ordering',
      });
      setList([uncategorizedSectionData(data.id), ...response.data]);
    } catch (error) {
      console.log(error);
      noti.error({ message: (error as ResponseError).message });
    } finally {
      setIsLoading(false);
    }
  }, [data.id]);

  const handleExpand = async () => {
    if (list.length) setIsOpenMenuList(true);
    else {
      await fetchData();
      setIsOpenMenuList(true);
    }
  };

  const handleUnassign = async (menuId: string) => {
    try {
      if (!data.id) return;
      await unassignMenu(menuId, { parent_group_id: data.parent_group_id, parent_venue_id: data.parent_venue_id });
      noti.success({ message: UNASSIGN_MENU_SUCCESS });
      onUnassignSuccess?.();
    } catch (error) {
      console.log(error);
      noti.error({ message: (error as ResponseError).message });
    }
  };

  const orderingList = async () => {
    try {
      await menuSectionOrdering(data.id, ids);
      noti.success({ message: ORDERING_MENU_SECTION_SUCCESS });
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
      <CreateMenuItemSectionModal
        isOpen={isCreateMenuItemSection}
        onClose={() => setIsCreateMenuItemSection(false)}
        onSuccess={fetchData}
        parent_menu_id={data.id}
      />
      <Card size="small" className="CardMenu" style={{ marginTop: 5, padding: 0 }}>
        <Flex align="center" gap={10} style={{ marginTop: 5 }}>
          <Button
            onClick={() => (isOpenMenuItemSectionList ? setIsOpenMenuList(false) : handleExpand())}
            loading={isLoading}
            shape="circle"
            icon={isOpenMenuItemSectionList ? <IconChevronUp /> : <IconChevronDown />}
          />
          <StatusTag type={data.status}>{data.status}</StatusTag>
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
            <Tooltip title="Add new menu item section">
              <Button
                disabled={isDisabled}
                onClick={() => setIsCreateMenuItemSection(true)}
                loading={isLoading}
                shape="circle"
                icon={<IconPlus width={16} height={16} className="icon-active" />}
              />
            </Tooltip>
            <Tooltip title="Edit Menu">
              <Button
                disabled={isDisabled}
                shape="circle"
                icon={
                  <Link
                    style={{ display: 'flex', alignItems: 'center' }}
                    to={RoutePaths.MENU_DETAIL(data.id, EMenuDetailTabItem.MENU)}
                    target="_blank"
                  >
                    <IconPen1 className="icon-active" />
                  </Link>
                }
              />
            </Tooltip>
            <Popconfirm
              placement="topLeft"
              title="Unassign menu"
              description={CONFIRM_UNASSIGN_MENU}
              onConfirm={() => handleUnassign(data.id)}
              okText="Yes"
              cancelText="No"
            >
              <Tooltip title={'Unlink'}>
                <Button
                  disabled={isDisabled}
                  shape="circle"
                  icon={<IconUnlink width={16} height={16} className="icon-active" />}
                  style={{ marginLeft: 'auto' }}
                />
              </Tooltip>
            </Popconfirm>
            <Tooltip title={'Click to drag item'}>
              <Button
                disabled={isDisabled || !data.id}
                shape="circle"
                icon={<IconDrag width={16} height={16} className="icon-active" />}
                {...provided?.dragHandleProps}
              />
            </Tooltip>
          </Flex>
        </Flex>
      </Card>
      <Row style={{ display: isOpenMenuItemSectionList ? 'flex' : 'none' }}>
        <Col offset={1} flex={'auto'}>
          <Spin spinning={isLoading}>
            <Spin spinning={isLoading}>
              {!!list.length ? (
                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable droppableId="menu">
                    {(provided) => (
                      <div {...provided.droppableProps} ref={provided.innerRef}>
                        {list.map((item, index) => (
                          <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided) => (
                              <div ref={provided.innerRef} {...provided.draggableProps}>
                                <MenuItemSectionListItem
                                  openByDefault={index === 0}
                                  data={item}
                                  onRefreshList={fetchData}
                                  isDisabled={data?.is_deleted}
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
                  <Empty description="No menu item section" />
                </Card>
              )}
            </Spin>
          </Spin>
        </Col>
      </Row>
    </>
  );
});

export default MenuListItem;
