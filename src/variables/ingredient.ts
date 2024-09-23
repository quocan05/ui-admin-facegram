import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import { TFilter } from 'src/interfaces/common-interface';
import { IIngredientCreate } from 'src/interfaces/ingredient-interface';
import { FilterType } from './common';
import { EAffiliateType, ECommonStatus, EIngredientType, ERegion } from './enum-variables';
import { regionOptionsFilter } from './region';

export enum EIngredientFormType {
  CREATE = 'CREATE',
  EDIT = 'EDIT',
}

export const ingredientTypeOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: EIngredientType.OLD_PRODUCT, label: 'Old product' },
  { value: EIngredientType.STANDARD, label: 'Standard' },
];

export const ingredientStatusOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: ECommonStatus.ACTIVE, label: 'Active' },
  { value: ECommonStatus.DISABLED, label: 'Disabled' },
  { value: ECommonStatus.PENDING, label: 'Pending' },
];

export const affiliateTypeOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: EAffiliateType.FOODINI, label: 'Foodini' },
  { value: EAffiliateType.GROUP, label: 'Group' },
  { value: EAffiliateType.INTEGRATOR, label: 'Integrator' },
  { value: EAffiliateType.VENUE, label: 'Venue' },
];

export const ingredientDeleteOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: 'true', label: 'Deleted' },
  { value: 'false', label: 'Un-deleted' },
];

export const ingredientFieldMapping: Record<string, string> = {
  id: 'ID',
  name: 'Name',
  region: 'Region',
  type: 'Type',
  status: 'Status',
  is_deleted: 'Deleted',
  affiliate_type: 'Affiliate type',
  categories_luv: 'Category luv',
  source_key: 'Source Key',
  source_type: 'Source Type',
};

export const defaultValueCreateIngredient: IIngredientCreate = {
  name: '',
  status: ECommonStatus.ACTIVE,
  region: ERegion.ALL,
  source_type: '',
  affiliate_id: '',
  batch_id: '',
  old_venue_id: '',
  source_key: '',
  description: '',
  config_ui: '',
  ui_name: '',
  id: '',
  created_at: '',
  updated_at: '',
  is_deleted: false,
  affiliate_type: EAffiliateType.FOODINI,
  type: EIngredientType.STANDARD,
  image: '',
};

export const ingredientFilters: TFilter[] = [
  {
    label: 'ID',
    name: ingredientFieldMapping['id'],
    field: 'id',
    type: FilterType.TEXT,
  },
  {
    label: 'Name',
    name: ingredientFieldMapping['name'],
    field: 'name',
    type: FilterType.TEXT,
  },
  {
    label: 'Affiliate type',
    name: ingredientFieldMapping['affiliate_type'],
    field: 'affiliate_type',
    type: FilterType.SELECT,
    list: [{ value: '', label: '--Select all--' }, ...affiliateTypeOptions],
  },
  {
    label: 'Region',
    name: ingredientFieldMapping['region'],
    field: 'region',
    type: FilterType.SELECT,
    list: regionOptionsFilter,
  },
  {
    label: 'Status',
    name: ingredientFieldMapping['status'],
    field: 'status',
    type: FilterType.SELECT,
    list: [{ value: '', label: '--Select all--' }, ...ingredientStatusOptions],
  },
  {
    label: 'Type',
    name: ingredientFieldMapping['type'],
    field: 'type',
    type: FilterType.SELECT,
    list: [{ value: '', label: '--Select all--' }, ...ingredientTypeOptions],
  },
  {
    label: 'Deleted',
    name: ingredientFieldMapping['is_deleted'],
    field: 'is_deleted',
    type: FilterType.SELECT,
    list: [{ value: '', label: '--Select all--' }, ...ingredientDeleteOptions],
  },
  {
    label: 'Source key',
    name: ingredientFieldMapping['source_key'],
    field: 'source_key',
    type: FilterType.TEXT,
  },
  {
    label: 'Source type',
    name: ingredientFieldMapping['source_type'],
    field: 'source_type',
    type: FilterType.TEXT,
  },
  {
    label: 'Categories luv',
    name: ingredientFieldMapping['categories_luv'],
    field: 'categories_luv',
    type: FilterType.TEXT,
  },
];
