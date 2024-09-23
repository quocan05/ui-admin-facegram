import { Card, Col, Empty, Flex, Popconfirm, Row, Spin, Tooltip, Typography, notification } from 'antd';
import { memo, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IconChevronDown, IconChevronUp, IconPen1, IconPlus, IconRefreshList, IconUnlink } from 'src/assets/icons';
import Button from 'src/components/button';
import ResponseError from 'src/interfaces/error-response-interface';
import { IMenu } from 'src/interfaces/menu-interface';
import { IVenue } from 'src/interfaces/venue-interface';
import CreateVenueModal from 'src/pages/venue/components/CreateVenueModal';
import { RoutePaths } from 'src/routes/routes-constants';
import { getVenueMenuList, unassignVenue } from 'src/services/venue-service';
import { CONFIRM_UNASSIGN_VENUE, UNASSIGN_VENUE_SUCCESS } from 'src/variables/messages';
import { EVenueDetailTabItem } from 'src/variables/route';
import MenuListItem from '../menu/MenuListItem';
import './VenueListItem.scss';
import CreateMenuModal from 'src/pages/menu/components/CreateMenuModal';

type Props = {
  data: IVenue;
  openByDefault: boolean;
  isDisabled?: boolean;
  onUnassignSuccess?(): void;
};

const VenueListItem = memo((props: Props) => {
  const { data, openByDefault, isDisabled, onUnassignSuccess } = props;
  const [list, setList] = useState<IMenu[]>([]);
  const [isOpenMenuList, setIsOpenMenuList] = useState(openByDefault);
  const [isOpenCreateMenuModal, setIsOpenCreateMenuModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [noti, contextHolder] = notification.useNotification();

  const fetchData = useCallback(async () => {
    try {
      if (!data.id) return;
      setIsLoading(true);
      const response = await getVenueMenuList(data.id);
      setList(response.data);
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

  const handleUnassign = async (venueId: string) => {
    try {
      if (!data.id) return;
      await unassignVenue(venueId);
      noti.success({ message: UNASSIGN_VENUE_SUCCESS });
      onUnassignSuccess?.();
    } catch (error) {
      console.log(error);
      noti.error({ message: (error as ResponseError).message });
    }
  };

  useEffect(() => {
    if (openByDefault) {
      fetchData();
    }
  }, [openByDefault]);

  return (
    <>
      {contextHolder}
      <CreateMenuModal
        parent_venue_id={data.id}
        isOpen={isOpenCreateMenuModal}
        onClose={() => setIsOpenCreateMenuModal(false)}
        onSuccess={fetchData}
      />
      <Card className="CardVenue" size="small" style={{ marginTop: 15, padding: 0 }}>
        <Flex align="center" gap={10} style={{ marginTop: 5 }}>
          <Button
            onClick={() => (isOpenMenuList ? setIsOpenMenuList(false) : handleExpand())}
            loading={isLoading}
            shape="circle"
            icon={isOpenMenuList ? <IconChevronUp /> : <IconChevronDown />}
          />
          <Typography.Title style={{ margin: 0 }} level={5}>
            {data.name}
          </Typography.Title>
          <Flex style={{ marginLeft: 'auto' }} gap={4}>
            <Tooltip title="Refresh list">
              <Button
                shape="circle"
                loading={isLoading}
                disabled={isDisabled}
                onClick={fetchData}
                icon={<IconRefreshList className="icon-active" width={20} height={20} />}
              />
            </Tooltip>
            <Tooltip title="Add new menu">
              <Button
                onClick={() => setIsOpenCreateMenuModal(true)}
                loading={isLoading}
                disabled={isDisabled}
                shape="circle"
                icon={<IconPlus width={16} height={16} className="icon-active" />}
              />
            </Tooltip>
            <Tooltip title="Edit Venue">
              <Button
                disabled={isDisabled}
                shape="circle"
                icon={
                  <Link
                    style={{ display: 'flex', alignItems: 'center' }}
                    to={RoutePaths.VENUE_DETAIL(data.id, EVenueDetailTabItem.VENUE)}
                    target="_blank"
                  >
                    <IconPen1 className="icon-active" />
                  </Link>
                }
              />
            </Tooltip>
            <Popconfirm
              placement="topLeft"
              title="Unassign venue"
              description={CONFIRM_UNASSIGN_VENUE}
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
          </Flex>
        </Flex>
      </Card>
      <Row style={{ display: isOpenMenuList ? 'flex' : 'none' }}>
        <Col offset={1} flex="auto">
          <Spin spinning={isLoading}>
            {list.length ? (
              list.map((menuItem) => <MenuListItem key={menuItem.id} data={menuItem} onUnassignSuccess={fetchData} isDisabled={isDisabled} />)
            ) : (
              <Card style={{ marginTop: 5 }}>
                <Empty description="No menus" />
              </Card>
            )}
          </Spin>
        </Col>
      </Row>
    </>
  );
});

export default VenueListItem;
