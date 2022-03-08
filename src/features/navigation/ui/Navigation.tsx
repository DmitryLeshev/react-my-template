import React from "react";
import { NavigateLink } from "./NavigateLink";

type Props = {
  links: string[];
};
export const Navigation: React.FC<Props> = ({ links }) => {
  return (
    <nav style={{ display: "flex", flexDirection: "column" }}>
      {links.map((link) => (
        <NavigateLink key={link} url={link} name={link.toUpperCase()} />
      ))}
    </nav>
  );
};
