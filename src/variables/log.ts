import { BaseOptionType, DefaultOptionType } from 'antd/es/select';
import { TFilter } from 'src/interfaces/common-interface';
import { LOG_SEVERITY } from '../interfaces/log.interface';
import { FilterType } from './common';

export const LOG_NAME_PREFIX = 'projects/foodining/logs/';

export const logSeverityMapping = {
  [LOG_SEVERITY.WARNING]: 'Warning',
  [LOG_SEVERITY.INFO]: 'Info',
  [LOG_SEVERITY.CRITICAL]: 'Critical',
  [LOG_SEVERITY.DEBUG]: 'Debug',
  [LOG_SEVERITY.EMERGENCY]: 'Emergency',
};

export const logSeverityOptions: (BaseOptionType | DefaultOptionType)[] = [
  { value: LOG_SEVERITY.CRITICAL, label: logSeverityMapping[LOG_SEVERITY.CRITICAL] },
  { value: LOG_SEVERITY.DEBUG, label: logSeverityMapping[LOG_SEVERITY.DEBUG] },
  { value: LOG_SEVERITY.EMERGENCY, label: logSeverityMapping[LOG_SEVERITY.EMERGENCY] },
  { value: LOG_SEVERITY.INFO, label: logSeverityMapping[LOG_SEVERITY.INFO] },
  { value: LOG_SEVERITY.WARNING, label: logSeverityMapping[LOG_SEVERITY.WARNING] },
];

export const logFieldMapping: Record<string, string> = {
  project: 'Project',
  id: 'ID',
  level: 'Level',
  message: 'Message',
  severity: 'Severity',
  time: 'Time',
};

export const logFilters: TFilter[] = [
  {
    label: 'Severity',
    name: logFieldMapping['severity'],
    field: 'severity',
    type: FilterType.SELECT,
    list: [{ value: '', label: '--Select all--' }, ...logSeverityOptions],
  },
  {
    label: 'Time from',
    name: logFieldMapping['time'],
    field: 'time_from',
    type: FilterType.DATE,
  },
  {
    label: 'Time to',
    name: logFieldMapping['time'],
    field: 'time_to',
    type: FilterType.DATE,
  },
  {
    label: 'Project',
    name: logFieldMapping['project'],
    field: 'log_names',
    type: FilterType.MULTI_SELECT,
    list: [],
    style: { width: '595px' },
    labelCol: { style: { width: '125px' } },
  },
];
