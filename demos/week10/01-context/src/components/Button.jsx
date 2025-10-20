import { useContext } from "react";
import { CountContext } from "../context/countContext";

export default function Button() {
  const { count, increment } = useContext(CountContext);

  return <button onClick={increment}>{count}</button>;
}
