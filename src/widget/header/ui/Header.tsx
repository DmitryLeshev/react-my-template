import React from "react";
import { theme } from "shared/config";

type Props = {};
export const Header: React.FC<Props> = () => {
  return <header style={{ height: theme.header.height }}>Header</header>;
};
