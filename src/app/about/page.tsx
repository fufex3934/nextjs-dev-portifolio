"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">
      
      <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
        <Image
          src="/favicon.png"
          alt="Profile"
          fill
          className="object-cover"
        />
      </div>

      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">
          About <span className="text-blue-400 ">Me</span>
        </h2>
        <p className="text-gray-700  mb-4">
          I&apos;m a passionate software developer who loves building clean and scalable web applications.
          I specialize in full-stack development using technologies like React, Node.js, and MongoDB.
          I enjoy problem-solving, learning new tools, and turning creative ideas into real-world solutions.
        </p>
        <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
        <ul className="flex flex-wrap gap-2 text-sm text-white">
          <li className="bg-blue-600 px-3 py-1 rounded">React</li>
          <li className="bg-green-600 px-3 py-1 rounded ">Node.js</li>
          <li className="bg-yellow-600 px-3 py-1 rounded">MongoDB</li>
          <li className="bg-purple-600 px-3 py-1 rounded">Tailwind CSS</li>
          <li className="bg-pink-600 px-3 py-1 rounded">PostgreSQL</li>
          <li className="bg-indigo-600 px-3 py-1 rounded">Next.js</li>
        </ul>
      </div>
    </section>
  );
}
