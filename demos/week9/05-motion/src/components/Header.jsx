import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="flex gap-y-2 p-2">
        <Link
          className="p-6 text-(--link-colour) hover:bg-(--accent-colour)"
          href={"/"}
        >
          Home
        </Link>
        <Link
          className="p-6 text-(--link-colour) hover:bg-(--accent-colour)"
          href={"/rollercoasters"}
        >
          Rollercoasters
        </Link>
        <Link
          className="p-6 text-(--link-colour) hover:bg-(--accent-colour)"
          href={"/rollercoasters/new-rollercoaster"}
        >
          New rollercoaster
        </Link>
      </nav>
    </header>
  );
}
