import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import { TFilter } from 'src/interfaces/common-interface';
import { IMenu, IMenuItem, IMenuItemIngredient, IMenuItemSection } from 'src/interfaces/menu-interface';
import { FilterType } from './common';
import {
  EAffiliateType,
  ECardinality,
  ECommonStatus,
  EMenuItemIngredientType,
  EMenuItemType,
  EMenuType,
} from './enum-variables';

export enum EMenuItemIngredientFormType {
  CREATE = 'CREATE',
  EDIT = 'EDIT',
}

export enum EMenuFormType {
  CREATE = 'CREATE',
  EDIT = 'EDIT',
}
export enum EMenuItemFormType {
  CREATE = 'CREATE',
  EDIT = 'EDIT',
}
export enum EMenuItemSectionFormType {
  CREATE = 'CREATE',
  EDIT = 'EDIT',
}
export const menuFieldMapping: Record<string, string> = {
  name: 'Name',
  status: 'Status',
  type: 'Type',
  is_deleted: 'Deleted',
  parent_venue_id: 'Parent venue ID',
  parent_group_id: 'Parent group ID',
  source_key: 'Source Key',
  source_type: 'Source Type',
};

export const defaultValueCreateMenu: IMenu = {
  id: '',
  status: ECommonStatus.ACTIVE,
  batch_id: '',
  source_type: '',
  is_deleted: false,
  source_key: '',
  affiliate_type: EAffiliateType.FOODINI,
  affiliate_id: '',
  name: '',
  type: EMenuType.STANDARD,
  is_verified: false,
  info_short: '',
  info_general: '',
  info_dietary: '',
  diet_flags: '',
  last_reviewed_at: '',
  hours_regular: '',
  hours_special: '',
  parent_venue_id: '',
  parent_group_id: '',
};

export const defaultValueCreateMenuItem: IMenuItem = {
  id: '',
  created_at: '',
  updated_at: '',
  is_deleted: false,
  status: ECommonStatus.ACTIVE,
  batch_id: '',
  source_type: '',
  source_key: '',
  affiliate_type: EAffiliateType.FOODINI,
  affiliate_id: '',
  region: '*',
  section: '',
  name: '',
  type: EMenuItemType.STANDARD,
  ordering: 100,
  info_short: '',
  image: '',
  info_general: '',
  info_dietary: '',
  hours_regular: '',
  hours_special: '',
  parent_menu_id: '',
  parent_section_id: '',
};
export const defaultValueCreateMenuItemSection: IMenuItemSection = {
  id: '',
  name: '',
  created_at: '',
  updated_at: '',
  is_deleted: false,
  batch_id: '',
  source_type: '',
  source_key: '',
  parent_menu_id: '',
  ordering: 100,
};

export const defaultValueCreateMenuItemIngredient: IMenuItemIngredient = {
  id: '',
  name: '',
  is_deleted: false,
  created_at: '',
  updated_at: '',
  cardinality_group: '',
  type: EMenuItemIngredientType.INGREDIENT,
  cardinality: ECardinality.MANDATORY,
  status: ECommonStatus.ACTIVE,
  batch_id: '',
  source_type: '',
  source_key: '',
  ordering: 100,
  is_selected: false,
  flexi_group_min: 0,
  flexi_group_max: 0,
};

export const menuDeletedOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '--Select--' },
  { value: 'true', label: 'Deleted' },
  { value: 'false', label: 'Un-deleted' },
];

export const menuStatusOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '--Select--' },
  { value: ECommonStatus.ACTIVE, label: 'Active' },
  { value: ECommonStatus.DISABLED, label: 'Disabled' },
  { value: ECommonStatus.PENDING, label: 'Pending' },
];

export const menuStatusOptionsForm: (BaseOptionType | DefaultOptionType)[] = [
  { value: ECommonStatus.ACTIVE, label: 'Active' },
  { value: ECommonStatus.DISABLED, label: 'Disabled' },
  { value: ECommonStatus.PENDING, label: 'Pending' },
];

export const menuTypeOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '--Select--' },
  { value: EMenuType.STANDARD, label: 'Standard' },
];

export const menuTypeOptionsForm: (BaseOptionType | DefaultOptionType)[] = [
  { value: EMenuType.STANDARD, label: 'Standard' },
];

export const menuIsVerifiedOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: true, label: 'Verified' },
  { value: false, label: 'Un-verified' },
];

export const menuAffiliateTypeOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: EAffiliateType.FOODINI, label: 'Foodini' },
  { value: EAffiliateType.GROUP, label: 'Group' },
  { value: EAffiliateType.INTEGRATOR, label: 'Integrator' },
  { value: EAffiliateType.VENUE, label: 'Venue' },
];

export const venueMenuFilter: TFilter[] = [
  {
    label: 'Name',
    name: menuFieldMapping['name'],
    field: 'name',
    type: FilterType.TEXT,
  },
  {
    label: 'Type',
    name: menuFieldMapping['type'],
    field: 'type',
    type: FilterType.SELECT,
    list: menuTypeOptions,
  },
  {
    label: 'Status',
    name: menuFieldMapping['status'],
    field: 'status',
    type: FilterType.SELECT,
    list: menuStatusOptions,
  },
  {
    label: 'Parent group',
    name: menuFieldMapping['parent_group'],
    field: 'parent_group',
    type: FilterType.TEXT,
  },
  {
    label: 'Source key',
    name: menuFieldMapping['source_key'],
    field: 'source_key',
    type: FilterType.TEXT,
  },
  {
    label: 'Source type',
    name: menuFieldMapping['source_type'],
    field: 'source_type',
    type: FilterType.TEXT,
  },
];

export const menuFilter: TFilter[] = [
  {
    label: 'Name',
    name: menuFieldMapping['name'],
    field: 'name',
    type: FilterType.TEXT,
  },
  {
    label: 'Type',
    name: menuFieldMapping['type'],
    field: 'type',
    type: FilterType.SELECT,
    list: menuTypeOptions,
  },
  {
    label: 'Status',
    name: menuFieldMapping['status'],
    field: 'status',
    type: FilterType.SELECT,
    list: menuStatusOptions,
  },
  {
    label: 'Deleted',
    name: menuFieldMapping['is_deleted'],
    field: 'is_deleted',
    type: FilterType.SELECT,
    list: menuDeletedOptions,
  },
  {
    label: 'Parent venue ID',
    name: menuFieldMapping['parent_venue_id'],
    field: 'parent_venue_id',
    type: FilterType.TEXT,
  },
  {
    label: 'Parent group ID',
    name: menuFieldMapping['parent_group_id'],
    field: 'parent_group_id',
    type: FilterType.TEXT,
  },
  {
    label: 'Source key',
    name: menuFieldMapping['source_key'],
    field: 'source_key',
    type: FilterType.TEXT,
  },
  {
    label: 'Source type',
    name: menuFieldMapping['source_type'],
    field: 'source_type',
    type: FilterType.TEXT,
  },
];

export const menuItemDeletedOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '--Select--' },
  { value: 'true', label: 'Deleted' },
  { value: 'false', label: 'Un-deleted' },
];

export const menuItemTypeOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '--Select--' },
  { value: EMenuType.STANDARD, label: 'Standard' },
];

export const menuItemStatusOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '--Select--' },
  { value: ECommonStatus.ACTIVE, label: 'Active' },
  { value: ECommonStatus.DISABLED, label: 'Disabled' },
  { value: ECommonStatus.PENDING, label: 'Pending' },
];

export const menuItemFieldMapping: Record<string, string> = {
  name: 'Name',
  status: 'Status',
  type: 'Type',
  is_deleted: 'Deleted',
  parent_venue_id: 'Parent venue ID',
  info_short: 'Info short',
  source_key: 'Source Key',
  source_type: 'Source Type',
};

export const menuItemFilter: TFilter[] = [
  {
    label: 'Name',
    name: menuItemFieldMapping['name'],
    field: 'name',
    type: FilterType.TEXT,
  },
  {
    label: 'Type',
    name: menuItemFieldMapping['type'],
    field: 'type',
    type: FilterType.SELECT,
    list: menuItemTypeOptions,
  },
  {
    label: 'Status',
    name: menuItemFieldMapping['status'],
    field: 'status',
    type: FilterType.SELECT,
    list: menuItemStatusOptions,
  },
  {
    label: 'Deleted',
    name: menuItemFieldMapping['is_deleted'],
    field: 'is_deleted',
    type: FilterType.SELECT,
    list: menuItemDeletedOptions,
  },
  {
    label: 'Parent venue ID',
    name: menuItemFieldMapping['parent_venue_id'],
    field: 'parent_venue_id',
    type: FilterType.TEXT,
  },
  {
    label: 'Info short',
    name: menuItemFieldMapping['info_short'],
    field: 'info_short',
    type: FilterType.TEXT,
  },
  {
    label: 'Source key',
    name: menuItemFieldMapping['source_key'],
    field: 'source_key',
    type: FilterType.TEXT,
  },
  {
    label: 'Source type',
    name: menuItemFieldMapping['source_type'],
    field: 'source_type',
    type: FilterType.TEXT,
  },
];

export const menuIngredientFieldMapping: Record<string, string> = {
  is_deleted: 'Deleted',
  status: 'Status',
  source_type: 'Source type',
  source_key: 'Source key',
  name: 'Name',
  type: 'Type',
  cardinality: 'Cardinality',
  cardinality_group: 'Cardinality Group',
  optional_default: 'Optional default',
  parent_menuitem_id: 'Parent menu item ID',
  linked_ingredient: 'Linked ingredient name',
};

export const cardinalityMapping: Record<ECardinality, string> = {
  [ECardinality.MANDATORY]: 'Mandatory',
  [ECardinality.FLEXI_SELECT]: 'Flexi select',
  [ECardinality.SINGLE_SELECT]: 'Single select',
};

export const menuItemIngredientStatusOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '--Select--' },
  { value: ECommonStatus.ACTIVE, label: 'Active' },
  { value: ECommonStatus.DISABLED, label: 'Disabled' },
  { value: ECommonStatus.PENDING, label: 'Pending' },
];

export const menuItemIngredientTypeOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '--Select--' },
  { value: EMenuItemIngredientType.INGREDIENT, label: 'Ingredient' },
  { value: EMenuItemIngredientType.PRODUCT, label: 'Product' },
];

export const menuItemIngredientCardinalityOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: ECardinality.MANDATORY, label: 'Mandatory' },
  { value: ECardinality.FLEXI_SELECT, label: 'Flexi select' },
  { value: ECardinality.SINGLE_SELECT, label: 'Single select' },
];

export const menuItemIngredientGroupOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: ECardinality.MANDATORY, label: 'Mandatory' },
  { value: ECardinality.FLEXI_SELECT, label: 'Multiple choices' },
  { value: ECardinality.SINGLE_SELECT, label: 'Single choice' },
];

export const menuItemIngredientDeletedOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '--Select--' },
  { value: 'true', label: 'Deleted' },
  { value: 'false', label: 'Un-deleted' },
];

export const menuIngredientFilter: TFilter[] = [
  {
    label: 'Name',
    name: menuIngredientFieldMapping['name'],
    field: 'name',
    type: FilterType.TEXT,
  },
  {
    label: 'Type',
    name: menuIngredientFieldMapping['type'],
    field: 'type',
    type: FilterType.SELECT,
    list: menuItemIngredientTypeOptions,
  },
  {
    label: 'Status',
    name: menuIngredientFieldMapping['status'],
    field: 'status',
    type: FilterType.SELECT,
    list: menuItemIngredientStatusOptions,
  },
  {
    label: 'Deleted',
    name: menuIngredientFieldMapping['is_deleted'],
    field: 'is_deleted',
    type: FilterType.SELECT,
    list: menuItemIngredientDeletedOptions,
  },
  {
    label: 'Cardinality',
    name: menuIngredientFieldMapping['cardinality'],
    field: 'cardinality',
    type: FilterType.SELECT,
    list: [{ value: '', label: '--Select--' }, ...menuItemIngredientCardinalityOptions],
  },
  {
    label: 'Cardinality group',
    name: menuIngredientFieldMapping['cardinality_group'],
    field: 'cardinality_group',
    type: FilterType.TEXT,
  },
  {
    label: 'Optional default',
    name: menuIngredientFieldMapping['optional_default'],
    field: 'optional_default',
    type: FilterType.SELECT,
  },
  {
    label: 'Source key',
    name: menuIngredientFieldMapping['source_key'],
    field: 'source_key',
    type: FilterType.TEXT,
  },
  {
    label: 'Source type',
    name: menuIngredientFieldMapping['source_type'],
    field: 'source_type',
    type: FilterType.TEXT,
  },
  {
    label: 'Parent menu item ID',
    name: menuIngredientFieldMapping['parent_menuitem_id'],
    field: 'parent_menuitem_id',
    type: FilterType.TEXT,
  },
  {
    label: 'Linked ingredient name',
    name: 'linked_ingredient_name',
    field: 'linked_ingredient_name',
    type: FilterType.TEXT,
  },
  {
    label: 'None Ingredient',
    name: 'is_none_ingredient',
    field: 'is_none_ingredient',
    type: FilterType.CHECK,
    rules: [],
  },
];

export const DEFAULT_UNCATEGORIZED_SECTION_NAME = 'Uncategorized';

export const uncategorizedSectionData = (menuId: string): IMenuItemSection => ({
  ...defaultValueCreateMenuItemSection,
  name: DEFAULT_UNCATEGORIZED_SECTION_NAME,
  ordering: -100,
  parent_menu_id: menuId,
});
