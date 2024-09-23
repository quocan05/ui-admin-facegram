import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

type Props = PropsWithChildren<{}>;

const NonAuthLayout = ({ children }: Props) => {
  return (
    <>
      {children} <Outlet />
    </>
  );
};

export default NonAuthLayout;
