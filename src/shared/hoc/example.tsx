import { ComponentType, useState } from "react";

export type InjectedCounterProps = {
  count: number;
  onIncrement(): void;
  onDecrement(): void;
};

export function withExampleHOC<P>(WrapperComponent: ComponentType<P>) {
  return (hocProps: Omit<P, keyof InjectedCounterProps>) => {
    const [count, setCount] = useState<number>(0);
    const onIncrement = () => setCount((prev) => ++prev);
    const onDecrement = () => setCount((prev) => --prev);

    const exampleProps = { count, onIncrement, onDecrement };

    return <WrapperComponent {...(hocProps as P)} {...exampleProps} />;
  };
}
