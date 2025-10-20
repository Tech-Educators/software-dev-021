import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Main() {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <h1>Woah cool looking website!</h1>
      <p>Yes. {theme}</p>
    </div>
  );
}
