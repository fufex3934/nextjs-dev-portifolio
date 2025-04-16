import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white dark:bg-black py-6 mt-10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        
        {/* Social Icons */}
        <div className="flex space-x-4 text-xl">
          <Link href="https://github.com/yourusername" target="_blank" className="hover:text-blue-400 transition">
            <FaGithub />
          </Link>
          <Link href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </Link>
          <Link href="https://twitter.com/yourusername" target="_blank" className="hover:text-blue-400 transition">
            <FaTwitter />
          </Link>
        </div>
      </div>
    </footer>
  );
}
