import { DatePicker, Divider, Flex, Form, Switch } from 'antd';
import { useForm } from 'antd/es/form/Form';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { TFilter } from 'src/interfaces/common-interface';
import { convertUrlSearchParamsToObject } from 'src/utils/common-utils';
import { validateMaxLength } from 'src/utils/validate-utils';
import { FilterType } from 'src/variables/common';
import { COMMON_FIELD_LENGTH } from 'src/variables/constants';
import Button from '../button';
import Input from '../input/Input';
import Select from '../input/Select';
import './FilterComponent.scss';

type Props<T> = {
  fields: TFilter[];
  applyBtnIcon?: React.ReactNode;
};

function FilterComponent<T>(props: Props<T>) {
  const { fields, applyBtnIcon } = props;
  const [searchParams, setSearchParams] = useSearchParams();
  const [form] = useForm();

  const handleSubmit = (data: any) => {
    const formattedData = { ...data };
    // filter undefined field
    Object.keys(formattedData).forEach((key) => !formattedData[key] && delete formattedData[key]);
    // convert date field to string
    Object.keys(formattedData).forEach((key) => {
      if (fields.find((field) => field.field === key)?.type === FilterType.DATE) {
        // convert to UTC timestamp - default dayjs is local timezone
        formattedData[key] = dayjs(formattedData[key]).unix();
      }
    });
    setSearchParams(formattedData);
  };

  const handleClearAll = () => {
    form.resetFields();
    const result: Record<string, any> = {};
    fields.forEach((field) => {
      if (field.type === FilterType.SELECT && result[field.field] === undefined) {
        result[field.field] = '';
      }
    });
    form.setFieldsValue(result);
    setSearchParams();
  };

  useEffect(() => {
    const result = convertUrlSearchParamsToObject(searchParams);
    // convert string-date field to date
    Object.keys(result).forEach((key) => {
      if (fields.find((field) => field.field === key)?.type === FilterType.DATE) {
        result[key] = dayjs(result[key] * 1000);
      }
    });

    if (!Object.keys(result).length) {
      form.resetFields();
    }

    fields.forEach((field) => {
      if (field.type === FilterType.SELECT && result[field.field] === undefined) {
        result[field.field] = '';
      }
    });

    form.setFieldsValue(result);
  }, [searchParams]);

  return (
    <>
      <Divider />
      <Form form={form} className="FilterComponent" layout="inline" onFinish={handleSubmit}>
        <Flex wrap="wrap" gap={5}>
          {fields.map((field) => (
            <Form.Item
              rules={field.rules || (field.type === FilterType.TEXT ? [validateMaxLength(COMMON_FIELD_LENGTH)] : [])}
              labelAlign="left"
              key={field.field}
              className="Item"
              label={field.label}
              labelCol={field.labelCol ?? { span: 13 }}
              name={field.field}
              style={field.style}
            >
              {field.type === FilterType.TEXT ? (
                <Input />
              ) : field.type === FilterType.SELECT ? (
                <Select options={field.list} />
              ) : field.type === FilterType.CHECK ? (
                <Switch />
              ) : field.type === FilterType.MULTI_SELECT ? (
                <Select
                  options={field.list}
                  mode="multiple"
                  allowClear
                  popupMatchSelectWidth={false}
                  placeholder="Select all"
                />
              ) : (
                <DatePicker format={'YYYY-MM-DD'} />
              )}
            </Form.Item>
          ))}
        </Flex>
        <Flex gap={20} style={{ marginTop: 20, width: '100%' }} className="FilterComponent__footer">
          <Button type="primary" htmlType="submit" icon={applyBtnIcon}>
            Apply
          </Button>
          <Button onClick={handleClearAll}>Clear all</Button>
        </Flex>
      </Form>
      <Divider />
    </>
  );
}

export default FilterComponent;
