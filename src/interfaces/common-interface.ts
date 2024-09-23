import { ColProps } from 'antd';
import { Rule } from 'antd/es/form';
import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import { ChangeEvent, ReactNode } from 'react';
import { FilterType } from 'src/variables/common';
import { ESortType } from 'src/variables/enum-variables';

// event interface
export type TChangeInputEvent = ChangeEvent<HTMLInputElement>;
export type TChangeTextAreaEvent = ChangeEvent<HTMLTextAreaElement>;
export type TMouseEventSVGHandler = React.MouseEvent<SVGSVGElement, MouseEvent>;
export type TMouseEventDivHandler = React.MouseEvent<HTMLDivElement, MouseEvent>;

// get common list api interface
export type TCommonGetListParams = {
  page: number;
  itemsPerPage: number;
  keyword?: string;
  sort_columns?: string;
  sort_orders?: ESortType;
  parent_group_id?: string;
  parent_venue_id?: string;
};

export type TTabItem = {
  label: string;
  key: string;
  children: ReactNode;
  forceRender?: boolean;
};

export type TGetListFilters = Record<string, any>;

export type TPagination = {
  page: number;
  items_per_page: number;
  total_count: number;
  total_page: number;
};

export type TPaginationResponse<T> = {
  data: T[];
  page: number;
  items_per_page: number;
  total_count: number;
  total_page: number;
};

export type TPaginationQrResponse<T> = {
  items: T[];
  page: number;
  per_page: number;
  total: number;
  pages: number;
};

export type TLogParams = {
  page_token?: string;
  itemsPerPage: number;
  sort_orders?: ESortType;
};

export type TResultsResponse<T> = {
  count: number;
  results: T[];
};

// select
export type TSelectOption<T = {}> = {
  label: string | ReactNode;
  value: string | number;
} & T;

// Filter
export type TFilter = {
  label: string;
  name: string;
  field: string;
  type: FilterType;
  list?: (BaseOptionType | DefaultOptionType)[];
  rules?: Rule[];
  // style
  style?: React.CSSProperties;
  labelCol?: ColProps;
};

export type FilterData = {
  name: string;
  value: string | string[] | number | number[];
};

export type TResponse = {
  data: any;
};

export interface IImageUrls {
  backdrop_large?: string;
  backdrop_small?: string;
  logo?: string;
  image?: string;
}

export interface IUpdateImgResponse {
  Location: string;
}
