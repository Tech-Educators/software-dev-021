import { useContext } from "react";
import { CountContext } from "../context/countContext";

export default function Footer() {
  const { count } = useContext(CountContext);

  return <footer>I am footer {count}</footer>;
}
