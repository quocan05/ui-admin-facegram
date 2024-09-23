import { IMenuItemPrice } from 'src/interfaces/menuitem-price-interface';
import { ECommonStatus } from './enum-variables';

export const defaultMenuItemPrice: IMenuItemPrice = {
  status: ECommonStatus.ACTIVE,
  batch_id: '',
  source_type: '',
  source_key: '',
  affiliate_type: '',
  affiliate_id: '',
  name: '',
  ordering: 100,
  price: 0,
  is_default: false,
  parent_menuitem_id: '',
  id: '',
  is_deleted: false,
};
