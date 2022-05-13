import { useRef } from "react";

export function Ttwo() {
  return <div>hello</div>;
}
export function Tm({}) {
  const ref = useRef(null);
  const ref2 = useRef("hi");

  return <div ref={ref}>{ref2.current ?? "top"}</div>;
}
