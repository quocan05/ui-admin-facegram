import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import { TFilter } from 'src/interfaces/common-interface';
import { IVenueActionCreate, IVenueCreate, IVenueGroupCreate } from 'src/interfaces/venue-interface';
import { FilterType } from './common';
import {
  EAffiliateType,
  ECommonStatus,
  EHourFormat,
  ERegion,
  ESpecialHoursStatus,
  EVenueActions,
  EVenueGroupType,
  EVenueType,
  EWeekDay,
} from './enum-variables';
import { regionOptionsFilter } from './region';

export enum EVenueFormType {
  EDIT = 'edit',
  CREATE = 'create',
}

export enum EVenueGroupFormType {
  EDIT = 'edit',
  CREATE = 'create',
}

export const UNCATEGORIZED = "uncategorized"

export const venueMenuWeekOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: EWeekDay.MONDAY, label: 'Mon' },
  { value: EWeekDay.TUESDAY, label: 'Tue' },
  { value: EWeekDay.WEDNESDAY, label: 'Wed' },
  { value: EWeekDay.THURSDAY, label: 'Thu' },
  { value: EWeekDay.FRIDAY, label: 'Fri' },
  { value: EWeekDay.SATURDAY, label: 'Sat' },
  { value: EWeekDay.SUNDAY, label: 'Sun' },
];

export const venueHoursSpecialStatusOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: ESpecialHoursStatus.DISABLED, label: 'Disabled' },
  { value: ESpecialHoursStatus.ACTIVE, label: 'Active' },
];

export const venueMenuHourFormatOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: EHourFormat.AM, label: 'AM' },
  { value: EHourFormat.PM, label: 'PM' },
];

export const venueDiscoverableOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '--Select--' },
  { value: 'true', label: 'Discoverable' },
  { value: 'false', label: 'Un-discoverable' },
];

export const venueDiscoverableFormOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: true, label: 'Discoverable' },
  { value: false, label: 'Un-discoverable' },
];

export const venueVerifiedFormOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: true, label: 'Verified' },
  { value: false, label: 'Un-Verified' },
];

export const venueDeletedOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '--Select--' },
  { value: 'true', label: 'Deleted' },
  { value: 'false', label: 'Un-deleted' },
];

export const venueStatusOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '--Select--' },
  { value: ECommonStatus.ACTIVE, label: 'Active' },
  { value: ECommonStatus.DISABLED, label: 'Disabled' },
  { value: ECommonStatus.PENDING, label: 'Pending' },
];

export const venueTypeOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: EVenueType.SCREENED, label: 'Screened' },
  { value: EVenueType.PARTNER, label: 'Partner' },
];

export const venueGroupTypeOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: EVenueGroupType.GROUP, label: 'Group' },
];

export const venueActionOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: EVenueActions.BOOK_URL, label: 'Book URL' },
  { value: EVenueActions.CALL, label: 'Call' },
  { value: EVenueActions.EMAIL, label: 'Email' },
  { value: EVenueActions.ORDER_URL, label: 'Order URL' },
  { value: EVenueActions.SOCIAL_FACEBOOK, label: 'Social Facebook' },
  { value: EVenueActions.SOCIAL_INSTAGRAM, label: 'Social Instagram' },
  { value: EVenueActions.SOCIAL_OTHER, label: 'Social Other' },
  { value: EVenueActions.SOCIAL_TIKTOK, label: 'Social Tiktok' },
  { value: EVenueActions.SOCIAL_X, label: 'Social X' },
];

export const defaultValuesCreateVenueForm: IVenueCreate = {
  is_verified: false,
  is_discoverable: false,
  affiliate_type: EAffiliateType.FOODINI,
  batch_id: '',
  source_key: '',
  source_type: '',
  affiliate_id: '',
  contact_email: '',
  contact_phone: '',
  contact_web: '',
  logo: '',
  status: ECommonStatus.ACTIVE,
  type: EVenueType.SCREENED,
  info_dietary: '',
  region: ERegion.ALL,
  info_general: '',
  info_short: '',
  cuisine_flags: '',
  diet_flags: '',
  hours_regular: '',
  hours_special: '',
  backdrop_large: '',
  backdrop_small: '',
};

export const defaultValuesCreateVenueGroupForm: IVenueGroupCreate = {
  is_discoverable: false,
  affiliate_type: EAffiliateType.FOODINI,
  type: EVenueGroupType.GROUP,
  batch_id: '',
  source_key: '',
  source_type: '',
  affiliate_id: '',
  contact_email: '',
  region: ERegion.ALL,
  contact_phone: '',
  contact_web: '',
  logo: '',
  status: ECommonStatus.ACTIVE,
  address_id: '',
};

export const defaultValuesCreateVenueActionForm: IVenueActionCreate = {
  id: '',
  created_at: '',
  updated_at: '',
  is_deleted: false,
  status: ECommonStatus.ACTIVE,
  batch_id: '',
  source_type: '',
  source_key: '',
  type: EVenueActions.CALL,
  label: '',
  value: '',
  parent_group_id: '',
  parent_venue_id: '',
};

export const venueFieldMapping: Record<string, string> = {
  name: 'Name',
  region: 'Region',
  status: 'Status',
  is_deleted: 'Deleted',
  is_discoverable: 'Discoverable',
  parent_group_id: 'Parent group Id',
  source_key: 'Source key',
  source_type: 'Source type',
};

export const venueFilter: TFilter[] = [
  {
    label: 'Name',
    name: venueFieldMapping['name'],
    field: 'name',
    type: FilterType.TEXT,
  },
  {
    label: 'Region',
    name: venueFieldMapping['region'],
    field: 'region',
    type: FilterType.SELECT,
    list: regionOptionsFilter,
  },
  {
    label: 'Status',
    name: venueFieldMapping['status'],
    field: 'status',
    type: FilterType.SELECT,
    list: venueStatusOptions,
  },
  {
    label: 'Deleted',
    name: venueFieldMapping['is_deleted'],
    field: 'is_deleted',
    type: FilterType.SELECT,
    list: venueDeletedOptions,
  },
  {
    label: 'Discoverable',
    name: venueFieldMapping['is_discoverable'],
    field: 'is_discoverable',
    type: FilterType.SELECT,
    list: venueDiscoverableOptions,
  },
  {
    label: 'Parent group Id',
    name: venueFieldMapping['parent_group_id'],
    field: 'parent_group_id',
    type: FilterType.TEXT,
  },
  {
    label: 'Source key',
    name: venueFieldMapping['source_key'],
    field: 'source_key',
    type: FilterType.TEXT,
  },
  {
    label: 'Source type',
    name: venueFieldMapping['source_type'],
    field: 'source_type',
    type: FilterType.TEXT,
  },
];

export const venueGroupDiscoverableOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '--Select--' },
  { value: 'true', label: 'Discoverable' },
  { value: 'false', label: 'Un-discoverable' },
];

export const venueGroupDeletedOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '--Select--' },
  { value: 'true', label: 'Deleted' },
  { value: 'false', label: 'Un-deleted' },
];

export const venueGroupStatusOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '--Select--' },
  { value: ECommonStatus.ACTIVE, label: 'Active' },
  { value: ECommonStatus.DISABLED, label: 'Disabled' },
  { value: ECommonStatus.PENDING, label: 'Pending' },
];

export const venueGroupFieldMapping: Record<string, string> = {
  name: 'Name',
  region: 'Region',
  status: 'Status',
  is_deleted: 'Deleted',
  is_discoverable: 'Discoverable',
  contact_phone: 'Contact phone',
  contact_email: 'Contact email',
  source_key: 'Source Key',
  source_type: 'Source Type',
};

export const venueGroupFilter: TFilter[] = [
  {
    label: 'Name',
    name: venueGroupFieldMapping['name'],
    field: 'name',
    type: FilterType.TEXT,
  },
  {
    label: 'Region',
    name: venueGroupFieldMapping['region'],
    field: 'region',
    type: FilterType.SELECT,
    list: regionOptionsFilter,
  },
  {
    label: 'Status',
    name: venueGroupFieldMapping['status'],
    field: 'status',
    type: FilterType.SELECT,
    list: venueGroupStatusOptions,
  },
  {
    label: 'Deleted',
    name: venueGroupFieldMapping['is_deleted'],
    field: 'is_deleted',
    type: FilterType.SELECT,
    list: venueGroupDeletedOptions,
  },
  {
    label: 'Discoverable',
    name: venueGroupFieldMapping['is_discoverable'],
    field: 'is_discoverable',
    type: FilterType.SELECT,
    list: venueDiscoverableOptions,
  },
  {
    label: 'Contact phone',
    name: venueGroupFieldMapping['contact_phone'],
    field: 'contact_phone',
    type: FilterType.TEXT,
  },
  {
    label: 'Contact email',
    name: venueGroupFieldMapping['contact_email'],
    field: 'contact_email',
    type: FilterType.TEXT,
  },
  {
    label: 'Source key',
    name: venueGroupFieldMapping['source_key'],
    field: 'source_key',
    type: FilterType.TEXT,
  },
  {
    label: 'Source type',
    name: venueGroupFieldMapping['source_type'],
    field: 'source_type',
    type: FilterType.TEXT,
  },
];
