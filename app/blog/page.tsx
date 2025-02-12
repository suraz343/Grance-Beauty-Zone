import React from "react";
import Image from "next/image";

const posts = [
  {
    title: "10 Summer Hair Care Tips",
    excerpt: "Keep your hair healthy and vibrant during the hot summer months with these essential tips.",
    date: "June 15, 2023",
    image: "/blogs/b1.jpg",
    slug: "summer-hair-care-tips",
  },
  {
    title: "The Ultimate Skincare Routine",
    excerpt: "Discover the perfect skincare routine for glowing, healthy skin all year round.",
    date: "July 2, 2023",
    image: "/blogs/b2.jpg",
    slug: "ultimate-skincare-routine",
  },
  {
    title: "Nail Art Trends for 2023",
    excerpt: "Stay on top of the latest nail art trends with our comprehensive guide.",
    date: "July 20, 2023",
    image: "/blogs/b3.jpg",
    slug: "nail-art-trends-2023",
  },
  {
    title: "Makeup Tips for a Natural Look",
    excerpt: "Learn how to achieve a flawless, natural makeup look for everyday wear.",
    date: "August 5, 2023",
    image: "/blogs/b4.jpg",
    slug: "natural-makeup-tips",
  },
];

export default function Blogs() {
  return (
    <div className="container mx-auto px-6 py-2">
      <div className="mt-6 flex justify-center items-center">
        <h1 className="mt-6 text-3xl font-bold text-center">Read Our Blogs</h1>
      </div>
      <div className="mt-6 md:m-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div
            key={index}
            className="flex flex-col m-2 p-2 shadow border rounded-lg hover:scale-105 transition"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h1 className="text-xl text-red-500 mt-2 font-bold">{post.title}</h1>
            <p className="mt-1 text-gray-600">{post.excerpt}</p>
            <p className="mt-1 text-sm text-gray-500">{post.date}</p>
            <button className="mt-4 w-full h-10 rounded-lg bg-red-500 hover:bg-red-700"> Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
}
