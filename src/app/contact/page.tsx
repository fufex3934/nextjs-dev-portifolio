"use client"

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // You can connect this to EmailJS, Formspree, or a backend API.
  };

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Get In Touch</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6 bg-white  shadow-md p-6 rounded-lg">
        <div>
          <label className="block mb-1 font-semibold" htmlFor="name">Name</label>
          <input
            className="w-full p-2 border rounded bg-gray-100  dark:text-white"
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="email">Email</label>
          <input
            className="w-full p-2 border rounded bg-gray-100  dark:text-white"
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold" htmlFor="message">Message</label>
          <textarea
            className="w-full p-2 border rounded h-32 bg-gray-100  dark:text-white"
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-all"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
