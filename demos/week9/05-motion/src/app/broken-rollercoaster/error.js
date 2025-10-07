//error pages are client components
"use client";
import Link from "next/link";

export default function ErrorPage({ error }) {
  return (
    <>
      <h1>This rollercoaster is broken.</h1>
      <h2>Safety hazard! Do not ride! ⚠️</h2>
      <p>{error.message}</p>
      <Link href={"/"} className="text-emerald-400">
        Go home
      </Link>
    </>
  );
}
