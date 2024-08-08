"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function BlogList() {
  const [blogData, setBlogData] = useState();
  const router = useRouter();

  useEffect(() => {
    const getBlogData = async () => {
      try {
        const response = await fetch("api/blog/all");
        const data = await response.json();
        setBlogData(data);
      } catch (error) {
        console.log(error);
        return error;
      }
    };
    getBlogData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/blog/delete?id=${id}`, { method: "DELETE" });
      setBlogData((prevData) => prevData.filter((blog) => blog._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between items-center mb-9 py-2">
        <h1 className="text-3xl font-bold text-center">Blog Posts</h1>
        <button
          onClick={() => router.push("/add-blog")}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          Add new
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
        {blogData &&
          blogData.map((blog) => {
            return (
              <div
                key={blog._id}
                className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
              >
                <h2 className="text-2xl font-semibold mb-4">{blog.title}</h2>
                <p className="text-gray-700 mb-4 text-lg">{blog.description}</p>
                <button
                  onClick={() => handleDelete(blog._id)}
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
                <button
                  onClick={() => router.push(`blog-list/${blog._id}`)}
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors ml-3"
                >
                  Blog Details
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
