import { Fief } from '@fief/fief';
import { FiefAuth, IFiefAuthStorage } from '@fief/fief/build/esm/browser';
import { DefaultOptionType } from 'antd/es/cascader';
import { BaseOptionType } from 'antd/es/select';
import { TCommonGetListParams, TPagination } from 'src/interfaces/common-interface';
import { ECommonStatus, EWeekDay } from './enum-variables';

export const globalVariables: {
  fief?: Omit<FiefAuth, 'client' | 'storage'> & { client?: Fief; storage: IFiefAuthStorage };
} = {};

export const ORDERING_POINT = -10000

export const DEFAULT_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_MAX_PAGE_SIZE = 9999;
export const DEFAULT_TOTAL_PAGE = 1;
export const DEFAULT_TOTAL_COUNT = 1;

export const DEFAULT_GET_LIST_PARAMS: TCommonGetListParams = {
  page: DEFAULT_PAGE,
  itemsPerPage: DEFAULT_PAGE_SIZE,
};

export const DEFAULT_PAGINATION: TPagination = {
  items_per_page: DEFAULT_PAGE_SIZE,
  page: DEFAULT_PAGE,
  total_count: DEFAULT_TOTAL_COUNT,
  total_page: DEFAULT_TOTAL_PAGE,
};

export enum FilterType {
  TEXT = 'text',
  SELECT = 'select',
  MULTI_SELECT = 'multi_select',
  DATE = 'date',
  CHECK = 'check',
}

export enum ECommonFormType {
  CREATE = 'CREATE',
  EDIT = 'EDIT',
}

export const commonStatusOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '-Select-' },
  { value: ECommonStatus.ACTIVE, label: 'Active' },
  { value: ECommonStatus.DISABLED, label: 'Disabled' },
  { value: ECommonStatus.PENDING, label: 'Pending' },
];

export enum ELocationImage {
  VENUE = 'venue/',
  MENU_ITEM = 'menuitem/',
}

export const weekDayMapping = {
  [EWeekDay.SUNDAY]: 7,
  [EWeekDay.MONDAY]: 1,
  [EWeekDay.TUESDAY]: 2,
  [EWeekDay.WEDNESDAY]: 3,
  [EWeekDay.THURSDAY]: 4,
  [EWeekDay.FRIDAY]: 5,
  [EWeekDay.SATURDAY]: 6,
};

export const weekDayKeys = {
  [EWeekDay.MONDAY]: EWeekDay.MONDAY,
  [EWeekDay.TUESDAY]: EWeekDay.TUESDAY,
  [EWeekDay.WEDNESDAY]: EWeekDay.WEDNESDAY,
  [EWeekDay.THURSDAY]: EWeekDay.THURSDAY,
  [EWeekDay.FRIDAY]: EWeekDay.FRIDAY,
  [EWeekDay.SATURDAY]: EWeekDay.SATURDAY,
  [EWeekDay.SUNDAY]: EWeekDay.SUNDAY,
};
