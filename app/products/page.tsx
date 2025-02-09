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
        <div id="products" className="">
            <div className="mt-6 flex justify-center items-center">
            <h1 className="font-bold text-black text-3xl">Our Products</h1>
            </div>
            <div className="m-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 shadow-lg border rounded-lg bg-white">
                {products.map((product,index) =>(
                    <div key={index} className="flex flex-col m-6 p-6 shadow border rounded-lg hover:scale-105 transition">
                    <Image src={product.image} alt={product.name} height={200} width={400} className="w-full h-48 object-cover rounded-t-lg" />
            
                    
                    <h1 className="text-2xl font-bold text-black">{product.name}</h1>
                    <p className="text-sm text-gray-500">{product.description}</p>
                    <p className="mt-4 text-2xl font-bold">{product.price}</p>
                    <button className="w-full h-10 rounded-lg bg-yellow-400 p-2">Add to Cart</button>
                    </div>

                ))}
            </div>
        </div>
    );
}