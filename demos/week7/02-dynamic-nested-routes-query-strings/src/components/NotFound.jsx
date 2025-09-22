import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <h1>404 Not Found</h1>
      <p>You seem to be lost.</p>
      <Link to={"/"}>Go Home</Link>
    </>
  );
}
