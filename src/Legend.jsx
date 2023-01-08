import { useRef } from "react";
import {
  enableLegendStateReact,
  reactive,
  useComputed,
  useObservable,
} from "@legendapp/state/react";
import { Legend } from "@legendapp/state/react-components";

enableLegendStateReact();

const LegendComp = () => {
  const renderCount = ++useRef(0).current;

  const first = useObservable("");
  const last = useObservable("");
  const name = useComputed(
    () => (first.get() + " " + last.get()).trim() || "(unknown)"
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>Renders: {renderCount}</div>
      <h1>Using Legend</h1>
      <h2>Hi {name}</h2>
      <div>First:</div>
      <Legend.input value$={first} />
      <div>Last:</div>
      <Legend.input value$={last} />
    </div>
  );
};

export default LegendComp;
