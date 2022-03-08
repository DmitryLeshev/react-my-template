import React from "react";
import { theme } from "shared/config";

type Props = {};
export const Footer: React.FC<Props> = () => {
  return <footer style={{ height: theme.footer.height }}>Footer</footer>;
};
