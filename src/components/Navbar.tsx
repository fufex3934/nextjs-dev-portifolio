"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
      <h1 className="text-2xl font-bold">Developer Portfolio</h1>

      <div className="flex gap-4 text-sm md:text-base">
        <Link href="/" className="hover:text-blue-400 transition">Home</Link>
        <Link href="/about" className="hover:text-blue-400 transition">About</Link>
        <Link href="/projects" className="hover:text-blue-400 transition">Projects</Link>
        <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
      </div>
    </nav>
  );
}
