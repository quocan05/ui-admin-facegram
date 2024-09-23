import { Button as AntButton, ButtonProps, ConfigProvider } from "antd";

import "./Button.scss";

interface IButtonProps extends ButtonProps {
  noBorder?: boolean;
  children?: React.ReactNode;
  squad?: boolean;
  isActive?: boolean;
  styleType?: "v1" | "v2";
}

const Button = ({
  className,
  styleType = "v1",
  noBorder,
  children,
  isActive = false,
  squad = true,
  ...rest
}: IButtonProps) => {
  const isV2Style = styleType === "v2";
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorBorder: noBorder ? "transparent" : "#d9d9d9",
            borderRadius: squad && !isV2Style ? 0 : 6,
          },
        },
      }}
    >
      <AntButton className={`Button ${className ?? ""}`} {...rest}>
        {children}
      </AntButton>
    </ConfigProvider>
  );
};

export default Button;
