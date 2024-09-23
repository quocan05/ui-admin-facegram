import { Input as AntInput, InputNumber as AntInputNumber, ConfigProvider, InputRef } from 'antd';
import { ComponentProps, LegacyRef } from 'react';

type Props = {
  squad?: boolean;
  removeBlank?: boolean;
  autoLowercase?: boolean;
  inputRef?: LegacyRef<InputRef>;
} & ComponentProps<typeof AntInput>;

const Input = (props: Props) => {
  const { squad = true, removeBlank = false, inputRef, ref, autoLowercase = false, onChange, ...otherProps } = props;
  const customOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (removeBlank) {
      e.target.value = e.target.value.replace(/\s/g, '');
    }
    if (autoLowercase) {
      e.target.value = e.target.value.toLowerCase();
    }
    onChange?.(e);
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            borderRadius: squad ? 0 : 6,
          },
        },
      }}
    >
      <AntInput onChange={customOnChange} ref={inputRef} {...otherProps} />
    </ConfigProvider>
  );
};

const InputPassword = ({ squad = true, removeBlank = false, onChange, ...otherProps }: Props) => {
  const customOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (removeBlank) {
      e.target.value = e.target.value.replace(/\s/g, '');
    }

    onChange?.(e);
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            borderRadius: squad ? 0 : 6,
          },
        },
      }}
    >
      <AntInput.Password onChange={customOnChange} {...otherProps} />
    </ConfigProvider>
  );
};

type NumberProps = {
  squad?: boolean;
} & ComponentProps<typeof AntInputNumber>;

const InputNumber = ({ squad = true, ...otherProps }: NumberProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          InputNumber: {
            borderRadius: squad ? 0 : 6,
          },
        },
      }}
    >
      <AntInputNumber {...otherProps} />
    </ConfigProvider>
  );
};

const InputSearch = (props: Props) => {
  const { squad = true, removeBlank = false, onChange, ...otherProps } = props;
  const customOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (removeBlank) {
      e.target.value = e.target.value.replace(/\s/g, '');
    }
    onChange?.(e);
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            borderRadius: squad ? 0 : undefined,
          },
        },
      }}
    >
      <AntInput.Search onChange={customOnChange} {...otherProps} />
    </ConfigProvider>
  );
};

Input.Search = InputSearch;
Input.Password = InputPassword;
Input.Number = InputNumber;

export default Input;
