import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import { TFilter } from 'src/interfaces/common-interface';
import { IGenericAddressCreate, IGenericConfig, IGenericConfigDomain } from 'src/interfaces/generic-interface';
import { FilterType } from './common';
import { ECommonStatus, EPayloadType } from './enum-variables';

export const defaultCreateGenericConfig: IGenericConfig = {
  id: '',
  created_at: '',
  updated_at: '',
  is_deleted: false,
  status: ECommonStatus.ACTIVE,
  batch_id: '',
  source_type: '',
  source_key: '',
  domain: '',
  type: '',
  key: '',
  description: '',
  ordering: 100,
  payload: '',
};

export const defaultCreateGenericConfigDomain: IGenericConfigDomain = {
  id: '',
  created_at: '',
  updated_at: '',
  is_deleted: false,
  status: ECommonStatus.ACTIVE,
  batch_id: '',
  source_type: '',
  source_key: '',
  domain: '',
  type: '',
  description: '',
  payload_type: EPayloadType.TEXT,
  min_select: 0,
  max_select: 99,
  ui_chip_colour: '',
  ui_label: '',
};

export const defaultValueCreateGenericAddress: IGenericAddressCreate = {
  id: '',
  created_at: '',
  updated_at: '',
  is_deleted: false,
  status: '',
  batch_id: '',
  source_type: '',
  source_key: '',
  formatted_address: '',
  line1: '',
  line2: '',
  suburb: '',
  city: '',
  state: '',
  postcode: '',
  country: '',
};

export const payloadTypeOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '-Select-' },
  { value: EPayloadType.JSON, label: 'Json' },
  { value: EPayloadType.MARKUP, label: 'Markup' },
  { value: EPayloadType.TEXT, label: 'Text' },
  { value: EPayloadType.YAML, label: 'Yaml' },
];

export const configDomainFilters: TFilter[] = [
  {
    label: 'Domain',
    name: 'domain',
    field: 'domain',
    type: FilterType.TEXT,
  },
  {
    label: 'Type',
    name: 'type',
    field: 'region',
    type: FilterType.TEXT,
  },
  {
    label: 'Description',
    name: 'description',
    field: 'description',
    type: FilterType.TEXT,
  },
  {
    label: 'Payload type',
    name: 'payload_type',
    field: 'payload_type',
    type: FilterType.SELECT,
    list: payloadTypeOptions,
  },
];

export const configFilters: TFilter[] = [
  {
    label: 'Key',
    name: 'key',
    field: 'key',
    type: FilterType.TEXT,
  },
  {
    label: 'Description',
    name: 'description',
    field: 'description',
    type: FilterType.TEXT,
  },
];
