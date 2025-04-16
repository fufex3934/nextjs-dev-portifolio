import Link from "next/link"
export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-4 ">
        <h1 className="flex-grow font-bold text-2xl">Developer Portifolio</h1>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/contact"}>Contact</Link>

    </nav>
  )
}
