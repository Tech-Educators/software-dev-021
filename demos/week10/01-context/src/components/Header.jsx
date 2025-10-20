// get the CountContext, and use the count state variable defined in the prodiver
import { useContext } from "react";
import { CountContext } from "../context/countContext";

export default function Header() {
  const { count } = useContext(CountContext);

  return <header>I am header {count}</header>;
}
