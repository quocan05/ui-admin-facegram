import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import { TFilter } from 'src/interfaces/common-interface';
import { IDietCategoryCreate, IDietCreate, IDietFoodFlagCreate } from 'src/interfaces/diet-interface';
import { commonStatusOptions, FilterType } from './common';
import {
  EAffiliateType,
  ECommonStatus,
  EDietCategoryStatus,
  EDietCategoryType,
  EDietFoodFlagStatus,
  EDietFoodFlagType,
  EDietVisibility,
  ERegion,
  EUserDietaryProfileStatus,
} from './enum-variables';
import { regionOptionsFilter } from './region';

export const affiliateTypeOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: EAffiliateType.FOODINI, label: 'Foodini' },
  { value: EAffiliateType.GROUP, label: 'Group' },
  { value: EAffiliateType.INTEGRATOR, label: 'Integrator' },
  { value: EAffiliateType.VENUE, label: 'Venue' },
];

export const userDietaryProfileStatusOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: EUserDietaryProfileStatus.SELECTED, label: 'Selected' },
  { value: EUserDietaryProfileStatus.STANDARD, label: 'Standard' },
];

export const userDietaryProfileIsSelectOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: true, label: 'Select' },
  { value: false, label: 'Not Select' },
];

export enum EUserDietaryProfileFormType {
  CREATE = 'CREATE',
  EDIT = 'EDIT',
}

export enum EDietFormType {
  CREATE = 'CREATE',
  EDIT = 'EDIT',
}

export enum EDietFoodFlagFormType {
  CREATE = 'CREATE',
  EDIT = 'EDIT',
}
export enum EDietCategoryFormType {
  CREATE = 'CREATE',
  EDIT = 'EDIT',
}

export const defaultValueCreateDiet: IDietCreate = {
  status: ECommonStatus.ACTIVE,
  batch_id: '',
  source_type: '',
  source_key: '',
  region: ERegion.ALL,
  name: '',
  config_ui: '{}',
  ui_help: '',
  ui_icon: '',
  ui_label: '',
  description: '',
  visibility: EDietVisibility.HIDDEN,
  id: '',
  created_at: '',
  updated_at: '',
  is_deleted: false,
};

export const defaultValueCreateDietCategory: IDietCategoryCreate = {
  status: EDietCategoryStatus.ACTIVE,
  batch_id: '',
  source_type: '',
  source_key: '',
  region: ERegion.ALL,
  name: '',
  description: '',
  visibility: EDietVisibility.NORMAL,
  type: EDietCategoryType.ALLERGIES,
  ui_treatments_luv: '',
  id: '',
  created_at: '',
  updated_at: '',
  ui_label: '',
  ui_help: '',
  is_deleted: false,
};

export const defaultValueCreateDietFoodFlag: IDietFoodFlagCreate = {
  status: EDietFoodFlagStatus.ACTIVE,
  batch_id: '',
  source_type: '',
  source_key: '',
  region: ERegion.ALL,
  name: '',
  description: '',
  id: '',
  created_at: '',
  updated_at: '',
  is_deleted: false,
  config_ui: '',
  ui_label: '',
  ui_help: '',
};

export const dietVisibilityOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '-Select-' },
  { value: EDietVisibility.DETAILED, label: 'Detailed' },
  { value: EDietVisibility.HIDDEN, label: 'Hidden' },
  { value: EDietVisibility.NORMAL, label: 'Normal' },
];

export const dietDeletedOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '-Select-' },
  { value: 'true', label: 'Deleted' },
  { value: 'false', label: 'Un-deleted' },
];

export const dietFieldMapping: Record<string, string> = {
  is_deleted: 'Deleted',
  status: 'Status',
  batch_id: 'Batch ID',
  source_type: 'Source type',
  region: 'Region',
  name: 'Name',
  visibility: 'Visibility',
  ui_treatments_luv: 'UI treatment luv',
};

export const dietFilter: TFilter[] = [
  {
    label: 'Name',
    name: dietFieldMapping['name'],
    field: 'name',
    type: FilterType.TEXT,
  },
  {
    label: 'Region',
    name: dietFieldMapping['region'],
    field: 'region',
    type: FilterType.SELECT,
    list: regionOptionsFilter,
  },
  {
    label: 'Status',
    name: dietFieldMapping['status'],
    field: 'status',
    type: FilterType.SELECT,
    list: commonStatusOptions,
  },
  {
    label: 'Deleted',
    name: dietFieldMapping['is_deleted'],
    field: 'is_deleted',
    type: FilterType.SELECT,
    list: dietDeletedOptions,
  },
  {
    label: 'Visibility',
    name: dietFieldMapping['visibility'],
    field: 'visibility',
    type: FilterType.SELECT,
    list: dietVisibilityOptions,
  },
  {
    label: 'Ui treatments luv',
    name: dietFieldMapping['ui_treatments_luv'],
    field: 'ui_treatments_luv',
    type: FilterType.TEXT,
  },
  {
    label: 'Source key',
    name: dietFieldMapping['source_key'],
    field: 'source_key',
    type: FilterType.TEXT,
  },
  {
    label: 'Source type',
    name: dietFieldMapping['source_type'],
    field: 'source_type',
    type: FilterType.TEXT,
  },
];

export const dietCategoryFieldMapping: Record<string, string> = {
  is_deleted: 'Deleted',
  status: 'Status',
  region: 'Region',
  name: 'Name',
  type: 'Type',
  ui_treatments_luv: 'Ui treatments luv',
};

export const dietCategoryDeletedOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '-Select-' },
  { value: 'true', label: 'Deleted' },
  { value: 'false', label: 'Un-deleted' },
];

export const dietCategoryStatusOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '-Select-' },
  { value: EDietCategoryStatus.ACTIVE, label: 'Active' },
  { value: EDietCategoryStatus.DISABLED, label: 'Disabled' },
  { value: EDietCategoryStatus.PROPOSED, label: 'Proposed' },
];

export const dietCategoryTypeOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '-Select-' },
  { value: EDietCategoryType.ALLERGIES, label: 'Allergies' },
  { value: EDietCategoryType.DIETS, label: 'Diets' },
  { value: EDietCategoryType.LIFESTYLE, label: 'Lifestyle' },
];

export const dietCategoryFilter: TFilter[] = [
  {
    label: 'Name',
    name: dietCategoryFieldMapping['name'],
    field: 'name',
    type: FilterType.TEXT,
  },
  {
    label: 'Type',
    name: dietCategoryFieldMapping['type'],
    field: 'type',
    type: FilterType.SELECT,
    list: dietCategoryTypeOptions,
  },
  {
    label: 'Region',
    name: dietCategoryFieldMapping['region'],
    field: 'region',
    type: FilterType.SELECT,
    list: regionOptionsFilter,
  },
  {
    label: 'Status',
    name: dietCategoryFieldMapping['status'],
    field: 'status',
    type: FilterType.SELECT,
    list: dietCategoryStatusOptions,
  },
  {
    label: 'Deleted',
    name: dietCategoryFieldMapping['is_deleted'],
    field: 'is_deleted',
    type: FilterType.SELECT,
    list: dietCategoryDeletedOptions,
  },
  {
    label: 'Ui treatments luv',
    name: dietFieldMapping['ui_treatments_luv'],
    field: 'ui_treatments_luv',
    type: FilterType.TEXT,
  },
];

export const dietFoodFlagFieldMapping: Record<string, string> = {
  name: 'Name',
  type: 'Type',
  region: 'Region',
  status: 'Status',
  visibility: 'Visibility',
  is_deleted: 'Deleted',
  ui_treatments_luv: 'Ui treatments luv',
  source_type: 'Source type',
  batch_id: 'Batch ID',
  source_key: 'Source key',
};

export const dietFoodFlagDeletedOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '-Select-' },
  { value: 'true', label: 'Deleted' },
  { value: 'false', label: 'Un-deleted' },
];

export const dietFoodFlagStatusOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '-Select-' },
  { value: EDietFoodFlagStatus.ACTIVE, label: 'Active' },
  { value: EDietFoodFlagStatus.DISABLED, label: 'Disabled' },
  { value: EDietFoodFlagStatus.PROPOSED, label: 'Proposed' },
];

export const dietFoodFlagTypeOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '-Select-' },
  { value: EDietFoodFlagType.ALLERGEN, label: 'Allergen' },
  { value: EDietFoodFlagType.ALLERGEN_GROUP, label: 'Allergen group' },
  { value: EDietFoodFlagType.DIET, label: 'Diet' },
];

export const dietFoodFlagVisibilityOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '-Select-' },
  { value: EDietVisibility.DETAILED, label: 'Detailed' },
  { value: EDietVisibility.HIDDEN, label: 'Hidden' },
  { value: EDietVisibility.NORMAL, label: 'Normal' },
];
export const dietFoodFlagFilter: TFilter[] = [
  {
    label: 'Batch ID',
    name: dietFoodFlagFieldMapping['batch_id'],
    field: 'batch_id',
    type: FilterType.TEXT,
  },
  {
    label: 'Source key',
    name: dietFoodFlagFieldMapping['source_key'],
    field: 'source_key',
    type: FilterType.TEXT,
  },
  {
    label: 'Source type',
    name: dietFoodFlagFieldMapping['source_type'],
    field: 'source_type',
    type: FilterType.TEXT,
  },
  {
    label: 'Region',
    name: dietFoodFlagFieldMapping['region'],
    field: 'region',
    type: FilterType.SELECT,
    list: regionOptionsFilter,
  },
  {
    label: 'Deleted',
    name: dietFoodFlagFieldMapping['is_deleted'],
    field: 'is_deleted',
    type: FilterType.SELECT,
    list: dietFoodFlagDeletedOptions,
  },
  {
    label: 'Visibility',
    name: dietFoodFlagFieldMapping['visibility'],
    field: 'visibility',
    type: FilterType.SELECT,
    list: dietFoodFlagVisibilityOptions,
  },
  {
    label: 'Status',
    name: dietFoodFlagFieldMapping['status'],
    field: 'status',
    type: FilterType.SELECT,
    list: dietFoodFlagStatusOptions,
  },
  {
    label: 'Type',
    name: dietFoodFlagFieldMapping['type'],
    field: 'type',
    type: FilterType.SELECT,
    list: dietFoodFlagTypeOptions,
  },
  {
    label: 'Name',
    name: dietFoodFlagFieldMapping['name'],
    field: 'name',
    type: FilterType.TEXT,
  },
  {
    label: 'Ui treatments luv',
    name: dietFoodFlagFieldMapping['ui_treatments_luv'],
    field: 'ui_treatments_luv',
    type: FilterType.TEXT,
  },
];
