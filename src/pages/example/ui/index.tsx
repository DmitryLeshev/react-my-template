import React from "react";
import { example as exampleHOC } from "shared/hoc";
import { useExample } from "shared/hook";

type Props = exampleHOC.InjectedCounterProps & {};
const View: React.FC<Props> = ({ count, onDecrement, onIncrement }) => {
  const exampleContext = useExample();
  return (
    <div>
      <h1>Example Page</h1>
      <hr />
      <h3>Example Context: </h3>
      <ul>
        <li>
          Number: {exampleContext?.number} |{" "}
          <input
            type="number"
            value={exampleContext?.number}
            onChange={(e) =>
              exampleContext?.set("number", Number(e.target.value))
            }
          />
        </li>
        <li>
          String: {exampleContext?.string} |{" "}
          <input
            type="string"
            value={exampleContext?.string}
            onChange={(e) =>
              exampleContext?.set("string", String(e.target.value))
            }
          />
        </li>
        <li>
          Boolean: {exampleContext?.boolean ? "true" : "false"} |{" "}
          <input
            type="checkbox"
            checked={exampleContext?.boolean}
            onChange={(e) =>
              exampleContext?.set("boolean", Boolean(e.target.checked))
            }
          />
        </li>
      </ul>

      <hr />
      <h3>Example HOC Count: {count}</h3>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <hr />
    </div>
  );
};

export const Page = exampleHOC.withExampleHOC(View);
