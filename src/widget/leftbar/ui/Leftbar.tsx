import React from "react";
import { theme } from "shared/config";

type Props = {
  isHidden: boolean;
};
export const Leftbar: React.FC<Props> = ({ children, isHidden }) => {
  const shift = isHidden ? theme.leftbar.width : 0;
  return (
    <aside
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        width: theme.leftbar.width,
        transition: "0.3s all",
        transform: `translateX(-${shift}px)`,
        background: "red",
      }}
    >
      Leftbar
      {children}
    </aside>
  );
};
