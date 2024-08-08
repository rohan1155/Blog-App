"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddBlog() {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/blog/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      console.log(result);
      setFormData({ title: "", description: "" });
      router.push("/blog-list");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Add Blog
      </h1>
      <form
        className="bg-white shadow-md rounded-lg p-8"
        onSubmit={handleSubmit}
      >
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Blog Title
          </label>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter your blog title"
            name="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Blog Description
          </label>
          <textarea
            rows={5}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your blog description"
            name="description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg px-6 py-2 text-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
