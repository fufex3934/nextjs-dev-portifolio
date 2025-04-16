"use client";

import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-12">
      <div className="flex-1 text-center lg:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Hi, I am  <span className="text-blue-400 ">Fufa</span>
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          A passionate full-stack developer who loves building clean, efficient,
          and user-friendly applications using React, Node.js, and modern web
          technologies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link
            href="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 0 px-6 py-3 rounded-md font-medium transition"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="flex-1 mb-10 lg:mb-0 flex justify-center">
        <Image
          src="/favicon.png"
          alt="Profile picture"
          width={300}
          height={300}
          className="rounded-full shadow-lg border-4 border-blue-400"
        />
      </div>
    </section>
  );
}
