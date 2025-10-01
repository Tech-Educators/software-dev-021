import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href={"/"}>Home</Link>
        <Link href={"/rollercoasters"}>Rollercoasters</Link>
        <Link href={"/rollercoasters/new-rollercoaster"}>
          New rollercoaster
        </Link>
      </nav>
    </header>
  );
}
