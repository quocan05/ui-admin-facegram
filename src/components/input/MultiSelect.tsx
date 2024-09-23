import { Tag } from 'antd';
import { BaseOptionType } from 'antd/es/select';
import { uniq } from 'lodash';
import { ComponentProps, useState } from 'react';
import { TSelectOption } from 'src/interfaces/common-interface';
import './MultiSelect.scss';
import Select from './Select';

type Props = {} & ComponentProps<typeof Select>;

const MultiSelect = (props: Props) => {
  const { value, onChange, onSelect, options, showSearch = true, ...otherProps } = props;
  const [cacheValues, setCacheValues] = useState<Partial<Record<string, TSelectOption>>>({});

  const handleSelect = (_value: unknown, option: BaseOptionType) => {
    setCacheValues((prev) => ({ ...prev, [_value as string]: option as TSelectOption }));
    onChange?.(uniq([...((value as string[]) ?? []), _value as string]), option);
  };

  const handleRemove = (id: string) => {
    onChange?.(
      (value as string[]).filter((v) => v !== id),
      {},
    );
  };

  return (
    <div className="MultiSelect" style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 8 }}>
      <Select value={value} onSelect={handleSelect} options={options} showSearch={showSearch} {...otherProps} />
      <div
        style={{
          borderRadius: 8,
          padding: '8px 16px',
          border: '2px solid #f1f1f1',
          minHeight: 176,
          backgroundColor: otherProps.disabled ? 'rgba(0, 0, 0, 0.04)' : undefined,
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {Array.isArray(value) &&
            (value as string[])?.map((v) => {
              const opt = cacheValues[v];
              if (!opt) return;
              return (
                <Tag
                  key={opt.value}
                  style={{ marginInlineEnd: 0 }}
                  closeIcon
                  onClose={() => handleRemove(String(opt.value))}
                >
                  {opt.label}
                </Tag>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MultiSelect;
