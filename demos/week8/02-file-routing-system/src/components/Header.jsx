//There is an optimised <a> component called Link
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>This is the header</header>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/staff"}>Staff</Link>
      </nav>
    </>
  );
}
