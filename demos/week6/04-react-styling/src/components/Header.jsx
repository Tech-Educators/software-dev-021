import NavBar from "./NavBar";
//import your component stylesheet
import "./Header.css";

export default function Header({ data }) {
  return (
    <header className="main-header">
      <h1 className="title">Header</h1>
      <NavBar data={data} />
    </header>
  );
}
