import * as React from "react";

export type ExampleContextState = Omit<ExampleContextType, "set">;

export type ExampleContextType = {
  string: string;
  number: number;
  boolean: boolean;
  set: (
    key: keyof ExampleContextState,
    value: ExampleContextState[keyof ExampleContextState]
  ) => void;
};

export const ExampleContext = React.createContext<ExampleContextType | null>(
  null
);
