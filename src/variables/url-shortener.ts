import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import { ECommonStatus, ECommonType } from './enum-variables';

export enum EUrlShortenerFormType {
  CREATE = 'CREATE',
  EDIT = 'EDIT',
}

export enum EUrlShortenerFormatImage {
  SVG = 'svg',
  PNG = 'png',
}

export const urlShortenerImageFormat: (BaseOptionType | DefaultOptionType)[] = [
  { value: EUrlShortenerFormatImage.PNG, label: 'PNG' },
  { value: EUrlShortenerFormatImage.SVG, label: 'SVG' },
];

export const urlShortenerStatusOption: (BaseOptionType | DefaultOptionType)[] = [
  { value: ECommonStatus.ACTIVE, label: 'Active' },
  { value: ECommonStatus.DISABLED, label: 'Disabled' },
  { value: ECommonStatus.PENDING, label: 'Pending' },
];

export const urlShortenerTypeOption: (BaseOptionType | DefaultOptionType)[] = [
  { value: ECommonType.MENU, label: 'Menu' },
  { value: ECommonType.VENUE, label: 'Venue' },
  { value: ECommonType.OTHER, label: 'Other' },
];
