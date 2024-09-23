import { Button, Card, Col, Flex, Popconfirm, Row, Tooltip, Typography, notification } from 'antd';
import { memo, useState } from 'react';
import Truncate from 'react-truncate-inside/es';
import { IconPen1, IconUnlink } from 'src/assets/icons';
import LabelField from 'src/components/label-field/LabelField';
import ResponseError from 'src/interfaces/error-response-interface';
import { IMenuItemIngredient } from 'src/interfaces/menu-interface';
import EditMenuItemIngredientModal from 'src/pages/menu/components/EditMenuItemIngredientModal';
import { unassignMenuItemIngredient } from 'src/services/menu-service';
import { ECardinality } from 'src/variables/enum-variables';
import { cardinalityMapping } from 'src/variables/menu';
import { CONFIRM_UNASSIGN_MENU_ITEM_INGREDIENT, UNASSIGN_MENU_ITEM_INGREDIENT_SUCCESS } from 'src/variables/messages';
import MenuCardinalityTag from './MenuCardinalityTag';
import StatusTag from 'src/components/tag/StatusTag';

type Props = {
  data: IMenuItemIngredient;
  isDisabled?: boolean;
  onUpdateSuccess?(): void;
};

const MenuIngredientListItem = memo((props: Props) => {
  const { data, isDisabled, onUpdateSuccess } = props;
  const [noti, contextHolder] = notification.useNotification();
  const [editData, setEditData] = useState<IMenuItemIngredient>();

  const handleUnassign = async (menuId: string) => {
    try {
      if (!data.id) return;
      await unassignMenuItemIngredient(menuId);
      noti.success({ message: UNASSIGN_MENU_ITEM_INGREDIENT_SUCCESS });
      onUpdateSuccess?.();
    } catch (error) {
      console.log(error);
      noti.error({ message: (error as ResponseError).message });
    }
  };

  return (
    <>
      {contextHolder}
      <EditMenuItemIngredientModal
        data={editData}
        onClose={() => setEditData(undefined)}
        onSuccess={() => onUpdateSuccess?.()}
      />
      <Card size="small" style={{ marginTop: 5, padding: 0 }}>
        <Flex align="center" gap={10} style={{ marginTop: 5, marginBottom: 10 }}>
          <Row style={{ flexGrow: 1, alignContent: 'center' }} gutter={[10, 0]}>
            <Col style={{ alignContent: 'center', marginRight: 10, minWidth: 60 }} span={1}>
              <StatusTag type={data.status}>{data.status}</StatusTag>
            </Col>
            <Tooltip title={data.name}>
              <Col span={5}>
                <LabelField label="Display name">
                  <Truncate text={data.name} offset={0} />
                </LabelField>
              </Col>
            </Tooltip>
            <Col span={3} style={{ alignContent: 'center', minWidth: 80 }}>
              <MenuCardinalityTag type={data.cardinality}>{cardinalityMapping[data.cardinality]}</MenuCardinalityTag>
            </Col>
            {data.linked_ingredient ? (
              <Tooltip title={data.linked_ingredient.name}>
                <Col style={{ alignContent: 'center' }} span={5}>
                  <LabelField label="Ingredient name">
                    <Truncate text={data.linked_ingredient.name} offset={0} />
                  </LabelField>
                </Col>
              </Tooltip>
            ) : (
              <Col span={5}></Col>
            )}
            {data.cardinality_group &&
              [ECardinality.FLEXI_SELECT, ECardinality.SINGLE_SELECT].includes(data.cardinality) && (
                <Tooltip title={data.cardinality_group}>
                  <Col span={3} style={{ minWidth: 140 }}>
                    <LabelField label="Cardinality Group">
                      <p style={{ overflow: 'hidden' }}>
                        <Truncate text={data.cardinality_group ?? ' '} offset={0} />
                      </p>
                    </LabelField>
                  </Col>
                </Tooltip>
              )}
            {data.cardinality === ECardinality.FLEXI_SELECT && data.is_selected && (
              <Col style={{ alignContent: 'center' }}>
                <MenuCardinalityTag type={ECardinality.FLEXI_SELECT}>Default</MenuCardinalityTag>
              </Col>
            )}
          </Row>
          <Flex style={{ marginLeft: 'auto' }} align="center" gap={4}>
            <Tooltip title="Edit Menu Item Ingredient">
              <Button
                disabled={isDisabled}
                onClick={() => setEditData(data)}
                shape="circle"
                icon={<IconPen1 className="icon-active" />}
              />
            </Tooltip>
            <Popconfirm
              placement="topLeft"
              title="Unassign menu item ingredient"
              description={CONFIRM_UNASSIGN_MENU_ITEM_INGREDIENT}
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
    </>
  );
});

export default MenuIngredientListItem;
