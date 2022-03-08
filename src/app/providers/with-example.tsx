import React, { Suspense } from "react";
import { example } from "shared/context";
import { Progress } from "shared/ui";

const DEFAULT_STATE_EXAMPLE_CONTEXT: example.ExampleContextState = {
  string: "Example",
  number: 777,
  boolean: true,
};

export const withExample = (component: () => React.ReactNode) => {
  return () => {
    const [state, setState] = React.useState<example.ExampleContextState>(
      DEFAULT_STATE_EXAMPLE_CONTEXT
    );

    const set: example.ExampleContextType["set"] = (key, value) => {
      setState((prev) => ({ ...prev, [key]: value }));
    };

    return (
      <example.ExampleContext.Provider value={{ ...state, set }}>
        <Suspense fallback={Progress.Circular}>{component()}</Suspense>
      </example.ExampleContext.Provider>
    );
  };
};
