"use client"

import { useState, useRef } from "react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle");
  const formRef = useRef<HTMLFormElement | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus("loading");

    const formData = new FormData(event.currentTarget);
    const response = await fetch("https://formspree.io/f/xqaewgkv", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setFormStatus("success");
      formRef.current?.reset();
    } else {
      setFormStatus("error");
    }
  }

  return (
    <section id="contact" className="py-12 md:py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} ref={formRef}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
              disabled={formStatus === "loading"}
            >
              {formStatus === "loading" ? "Sending..." : "Send Message"}
            </button>
            {formStatus === "success" && <p className="mt-4 text-green-400">Thank you for your message!</p>}
            {formStatus === "error" && <p className="mt-4 text-red-400">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}