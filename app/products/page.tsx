import React from "react";
import Image from "next/image";

const products = [
    {
      name: "Luxury Shampoo",
      description: "Nourishing shampoo for all hair types",
      price: 24.99,
      image: "/products/p1.jpg",
    },
    {
      name: "Hydrating Face Cream",
      description: "Deep hydration for radiant skin",
      price: 34.99,
      image: "/products/p2.jpg",
    },
    {
      name: "Nail Polish Set",
      description: "Set of 5 trendy nail polish colors",
      price: 19.99,
      image: "/products/p3.jpg",
    },
    {
      name: "Makeup Brush Set",
      description: "Professional-grade makeup brushes",
      price: 49.99,
      image: "/products/p4.jpg",
    },
    {
      name: "Hair Styling Tools Kit",
      description: "Complete kit for perfect hairstyles",
      price: 79.99,
      image: "/products/p5.jpg",
    },
    {
      name: "Aromatherapy Candle",
      description: "Relaxing scented candle for home spa",
      price: 29.99,
      image: "/products/p6.jpg",
    },
  ]

export default function ProductPage(){
    return(
        <div id="products" className="px-2 py-2">
            <div className="mt-6 flex justify-center items-center">
            <h1 className="mt-10 font-bold text-black text-3xl">Our Products</h1>
            </div>
            <div className="md:m-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 rounded-lg">
                {products.map((product,index) =>(
                    <div key={index} className="md:m-10 mt-4 flex flex-col p-2 shadow border rounded-lg hover:scale-105 transition">
                    <Image src={product.image} alt={product.name} height={200} width={400} className="w-full h-48 object-cover rounded-lg" />
                    <h1 className="text-lg md:text-2xl font-bold text-black">{product.name}</h1>
                    <p className="text-sm text-gray-500">{product.description}</p>
                    <p className="mt-4 text-xl md:text-2xl font-bold">Rs.{product.price}</p>
                    <button className="mt-4 w-full h-10 rounded-lg bg-yellow-400 p-2">Add to Cart</button>
                    </div>

                ))}
            </div>
        </div>
    );
}