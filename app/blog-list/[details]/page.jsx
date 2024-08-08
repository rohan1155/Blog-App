"use client";
import React, { useEffect, useState } from "react";

export default function BlogDetails({ params }) {
  const [blogDetails, setBlogDetails] = useState();

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const res = await fetch(`/api/blog/get?id=${params.details}`);
        const data = await res.json();
        setBlogDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogDetails();
  }, [params.details]);

  return (
    <div className="container mx-auto p-4 md:p-8">
      {blogDetails ? (
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{blogDetails.title}</h1>
          <p className="text-lg text-gray-700">{blogDetails.description}</p>
        </div>
      ) : (
        <p className="text-center mt-3 text-lg text-gray-500">Loading...</p>
      )}
    </div>
  );
}
