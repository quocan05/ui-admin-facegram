import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import { TFilter } from 'src/interfaces/common-interface';
import { FilterType } from './common';
import { EEmailStatus, ERecordStatus, ECommonStatus, EUserProfileType, EUserType } from './enum-variables';

export enum EUserFormType {
  CREATE = 'CREATE',
  EDIT = 'EDIT',
}

export const userTypeOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: EUserType.ANONYMOUS, label: 'Anonymous' },
  { value: EUserType.STANDARD, label: 'Standard' },
];

export const emailStatusOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: EEmailStatus.UNVERIFIED, label: 'Unverified' },
  { value: EEmailStatus.VERIFIED, label: 'Verified' },
];

export const userStatusOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '--Select all--' },
  { value: ERecordStatus.PENDING, label: 'Pending' },
  { value: ERecordStatus.ACTIVE, label: 'Active' },
  { value: ERecordStatus.DISABLED, label: 'Disabled' },
];

export const userDeleteOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '--Select all--' },
  { value: 'true', label: 'Deleted' },
  { value: 'false', label: 'Un-deleted' },
];

export const userProfileStatusOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: ECommonStatus.ACTIVE, label: 'Active' },
  { value: ECommonStatus.DISABLED, label: 'Disabled' },
  { value: ECommonStatus.PENDING, label: 'Pending' },
];

export const userProfileTypeOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: EUserProfileType.HOME, label: 'Home' },
  { value: EUserProfileType.OTHER, label: 'Other' },
  { value: EUserProfileType.WORK, label: 'Work' },
];

export const userFieldMapping: Record<string, string> = {
  id: 'ID',
  email_primary: 'Email',
  email_status: 'Email status',
  is_deleted: 'Deleted',
  name_first: 'First name',
  name_sur: 'Sur name',
  name_nick: 'Nick name',
  status: 'Status',
  type: 'Type',
  source_id: 'Source ID',
  source_type: 'Source Type',
  created_at: 'Created At',
  updated_at: 'Updated At',
};

export const userFilters: TFilter[] = [
  {
    label: 'ID',
    name: userFieldMapping['id'],
    field: 'id',
    type: FilterType.TEXT,
  },
  {
    label: 'Email',
    name: userFieldMapping['email_primary'],
    field: 'email_primary',
    type: FilterType.TEXT,
  },
  {
    label: 'First name',
    name: userFieldMapping['name_first'],
    field: 'name_first',
    type: FilterType.TEXT,
  },
  {
    label: 'Sur name',
    name: userFieldMapping['name_sur'],
    field: 'name_sur',
    type: FilterType.TEXT,
  },
  {
    label: 'Nick name',
    name: userFieldMapping['name_nick'],
    field: 'name_nick',
    type: FilterType.TEXT,
  },
  {
    label: 'Status',
    name: userFieldMapping['status'],
    field: 'status',
    type: FilterType.SELECT,
    list: userStatusOptions,
  },
  {
    label: 'Type',
    name: userFieldMapping['type'],
    field: 'type',
    type: FilterType.SELECT,
    list: [{ value: '', label: '--Select all--' }, ...userTypeOptions],
  },
  {
    label: 'Email Status',
    name: userFieldMapping['email_status'],
    field: 'email_status',
    type: FilterType.SELECT,
    list: [{ value: '', label: '--Select all--' }, ...emailStatusOptions],
  },
  {
    label: 'Deleted',
    name: userFieldMapping['is_deleted'],
    field: 'is_deleted',
    type: FilterType.SELECT,
    list: userDeleteOptions,
  },
  {
    label: 'Created at from',
    name: userFieldMapping['created_at'],
    field: 'created_at_from',
    type: FilterType.DATE,
  },
  {
    label: 'Created at to',
    name: userFieldMapping['created_at'],
    field: 'created_at_to',
    type: FilterType.DATE,
  },
  {
    label: 'Updated at from',
    name: userFieldMapping['updated_at'],
    field: 'updated_at_from',
    type: FilterType.DATE,
  },
  {
    label: 'Updated at to',
    name: userFieldMapping['updated_at'],
    field: 'updated_at_to',
    type: FilterType.DATE,
  },
];
