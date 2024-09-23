import { DefaultOptionType } from 'antd/es/cascader';
import { BaseOptionType } from 'antd/es/select';
import { ERegion } from './enum-variables';

export const regionOptionsFilter: (BaseOptionType | DefaultOptionType)[] = [
  { value: '', label: '--Select--' },
  { value: ERegion.ALL, label: 'ALL' },
  { value: ERegion.ANZ, label: 'ANZ' },
  { value: ERegion.AU, label: 'AU' },
  { value: ERegion.NONE, label: 'NONE' },
  { value: ERegion.NZ, label: 'NZ' },
  { value: ERegion.US, label: 'US' },
];

export const regionOptionsForm: (BaseOptionType | DefaultOptionType)[] = [
    { value: ERegion.ALL, label: 'ALL' },
    { value: ERegion.ANZ, label: 'ANZ' },
    { value: ERegion.AU, label: 'AU' },
    { value: ERegion.NONE, label: 'NONE' },
    { value: ERegion.NZ, label: 'NZ' },
    { value: ERegion.US, label: 'US' },
  ];
