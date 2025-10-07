//set up a not-found page for this specific route

import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>Oooppspsss</h1>
      <h2>We cannot find this rollercoaster</h2>
      <Link href={"/rollercoasters"} className="text-emerald-400">
        Why not checking our list of rollercoasters?
      </Link>
    </>
  );
}
