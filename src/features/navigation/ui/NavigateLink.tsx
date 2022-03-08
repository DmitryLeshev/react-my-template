import React from "react";
import { Link, useMatch } from "react-router-dom";

type Props = {
  url: string;
  name: string;
};
const NavigateLink: React.FC<Props> = ({ name, url }) => {
  const math = useMatch({ path: url, end: false });
  return (
    <Link to={url} style={{ color: math ? "blue" : "black" }}>
      {name}
    </Link>
  );
};

export { NavigateLink };
