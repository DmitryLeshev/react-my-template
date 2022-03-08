import React from "react";
import { example } from "shared/context";

export const useExample = () => {
  return React.useContext(example.ExampleContext);
};
