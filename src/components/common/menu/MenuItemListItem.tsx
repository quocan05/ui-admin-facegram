import { Card, Col, Empty, Flex, Popconfirm, Row, Spin, Tooltip, Typography, notification } from 'antd';
import { memo, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { DraggableProvided } from 'react-beautiful-dnd';
import {
  IconChevronDown,
  IconChevronUp,
  IconCopyPlus,
  IconDrag,
  IconPen1,
  IconPlus,
  IconUnlink,
} from 'src/assets/icons';
import Button from 'src/components/button';
import StatusTag from 'src/components/tag/StatusTag';
import ResponseError from 'src/interfaces/error-response-interface';
import { IMenuItem, IMenuItemIngredient } from 'src/interfaces/menu-interface';
import CreateMenuItemIngredientModal from 'src/pages/menu/components/CreateMenuItemIngredientModal';
import { RoutePaths } from 'src/routes/routes-constants';
import { duplicateMenuItem, getMenuItemIngredientList, unassignMenuItem } from 'src/services/menu-service';
import {
  CONFIRM_UNASSIGN_MENU_ITEM,
  DUPLICATE_MENU_ITEM_SUCCESS,
  UNASSIGN_MENU_ITEM_SUCCESS,
} from 'src/variables/messages';
import { EMenuItemTabItem } from 'src/variables/route';
import MenuIngredientListItem from './MenuIngredientListItem';
import './MenuItemListItem.scss';
import { orderBy as _orderBy } from 'lodash';

type Props = {
  data: IMenuItem;
  openMenuItemByDefault: boolean;
  isDisabled?: boolean;
  provided?: DraggableProvided;
  onRefreshList?(): void;
  onDuplicateItem(item: IMenuItem): void;
};

const MenuItemListItem = memo((props: Props) => {
  const { data, openMenuItemByDefault, isDisabled, provided, onRefreshList, onDuplicateItem } = props;
  const [list, setList] = useState<IMenuItemIngredient[]>([]);
  const [isOpenMenuIngredientList, setIsOpenMenuIngredientList] = useState(openMenuItemByDefault);
  const [isLoading, setIsLoading] = useState(false);
  const [isCreateMenuItemIngredient, setIsCreateMenuItemIngredient] = useState(false);
  const [isLoadingDuplicate, setIsLoadingDuplicate] = useState(false);
  const [noti, contextHolder] = notification.useNotification();

  const fetchData = useCallback(async () => {
    try {
      if (!data.id) return;
      setIsLoading(true);
      const response = await getMenuItemIngredientList(data.id);      
      setList(_orderBy(response.data, ['ordering', 'name'], ['asc', 'asc']));
    } catch (error) {
      console.log(error);
      noti.error({ message: (error as ResponseError).message });
    } finally {
      setIsLoading(false);
    }
  }, [data.id]);

  const handleExpand = async () => {
    if (list.length) setIsOpenMenuIngredientList(true);
    else {
      await fetchData();
      setIsOpenMenuIngredientList(true);
    }
  };

  const handleDuplicate = async () => {
    try {
      if (!data.id) return;
      setIsLoadingDuplicate(true);
      const result = await duplicateMenuItem(data.id);
      onDuplicateItem(result);
      noti.success({ message: DUPLICATE_MENU_ITEM_SUCCESS });
    } catch (error) {
      console.log(error);
      noti.error({ message: (error as ResponseError).message });
    } finally {
      setIsLoadingDuplicate(false);
    }
  };

  const handleUnassign = async (menuId: string) => {
    try {
      if (!data.id) return;
      await unassignMenuItem(menuId);
      noti.success({ message: UNASSIGN_MENU_ITEM_SUCCESS });
      onRefreshList?.();
    } catch (error) {
      console.log(error);
      noti.error({ message: (error as ResponseError).message });
    }
  };

  useEffect(() => {
    if (openMenuItemByDefault) {
      fetchData();
    }
  }, [openMenuItemByDefault]);

  return (
    <>
      {contextHolder}
      <CreateMenuItemIngredientModal
        parent_menuitem_id={data.id}
        isOpen={isCreateMenuItemIngredient}
        onClose={() => setIsCreateMenuItemIngredient(false)}
        onSuccess={fetchData}
      />
      <Card size="small" className="CardMenuItem" style={{ marginTop: 5, padding: 0 }}>
        <Flex align="center" gap={10} style={{ marginTop: 5 }}>
          <Button
            onClick={() => (isOpenMenuIngredientList ? setIsOpenMenuIngredientList(false) : handleExpand())}
            loading={isLoading}
            shape="circle"
            icon={isOpenMenuIngredientList ? <IconChevronUp /> : <IconChevronDown />}
          />
          <StatusTag type={data.status}>{data.status}</StatusTag>
          <Flex vertical>
            <Typography.Title style={{ margin: 0 }} level={5}>
              {data.name}
            </Typography.Title>
          </Flex>
          <Flex style={{ marginLeft: 'auto' }} gap={4}>
            <Tooltip title="Duplicate menu item">
              <Button
                disabled={isDisabled}
                onClick={handleDuplicate}
                shape="circle"
                loading={isLoadingDuplicate}
                icon={<IconCopyPlus width={16} height={16} className="icon-active" />}
              />
            </Tooltip>
            <Tooltip title="Add new menu item ingredient">
              <Button
                disabled={isDisabled}
                onClick={() => setIsCreateMenuItemIngredient(true)}
                shape="circle"
                loading={isLoadingDuplicate}
                icon={<IconPlus width={16} height={16} className="icon-active" />}
              />
            </Tooltip>
            <Tooltip title="Edit Menu Item">
              <Button
                disabled={isDisabled}
                shape="circle"
                icon={
                  <Link
                    style={{ display: 'flex', alignItems: 'center' }}
                    to={RoutePaths.MENU_ITEM_DETAIL(data.id, EMenuItemTabItem.DEFAULT)}
                    target="_blank"
                  >
                    <IconPen1 className="icon-active" />
                  </Link>
                }
              />
            </Tooltip>
            <Popconfirm
              placement="topLeft"
              title="Detach menu"
              description={CONFIRM_UNASSIGN_MENU_ITEM}
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
            {data.parent_section_id && (
              <Tooltip title={'Click to drag item'}>
                <Button
                  disabled={isDisabled || !data.id}
                  shape="circle"
                  icon={<IconDrag width={16} height={16} className="icon-active" />}
                  {...provided?.dragHandleProps}
                />
              </Tooltip>
            )}
          </Flex>
        </Flex>
      </Card>
      <Row style={{ display: isOpenMenuIngredientList ? 'flex' : 'none' }}>
        <Col offset={1} flex={'auto'}>
          <Spin spinning={isLoading}>
            {list.length ? (
              list.map((menuItem, index) => (
                <MenuIngredientListItem
                  key={menuItem.id}
                  data={menuItem}
                  onUpdateSuccess={fetchData}
                  isDisabled={isDisabled}
                />
              ))
            ) : (
              <Card style={{ marginTop: 5 }}>
                <Empty description="No menu item ingredients" />
              </Card>
            )}
          </Spin>
        </Col>
      </Row>
    </>
  );
});

export default MenuItemListItem;
