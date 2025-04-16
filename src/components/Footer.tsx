import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white dark:bg-black py-6 mt-10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
      
        <p className="text-sm">&copy; {new Date().getFullYear()} Fufa wakgari. All rights reserved.</p>
        
       
        <div className="flex space-x-4 text-xl">
          <Link href="https://github.com/fufex3934" target="_blank" className="hover:text-blue-400 transition">
            <FaGithub />
          </Link>
          <Link href="www.linkedin.com/in/fufa-wakgari-85b412228" target="_blank" className="hover:text-blue-400 transition">
            <FaLinkedin />
          </Link>
          <Link href="https://x.com/home" target="_blank" className="hover:text-blue-400 transition">
            <FaTwitter />
          </Link>
        </div>
      </div>
    </footer>
  );
}
