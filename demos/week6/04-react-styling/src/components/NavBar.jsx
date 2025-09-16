export default function NavBar({ data }) {
  return (
    <>
      <nav className="flex flex-col items-center">
        <a href="#" className="bg-amber-600 text-2xl">
          {data}
        </a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </>
  );
}
