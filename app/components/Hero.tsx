import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-3/4">
        <Image
          src="/Images/grance_beauty_zone.jpg"
          alt="grance_beauty_zone_image"
          fill
          className="object-cover"
        />
        
    
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/40 p-4">
          <h1 className="text-3xl md:text-7xl font-bold">Discover Your True Beauty</h1>
          <p className="mt-4 text-lg md:text-2xl">Experience luxury beauty treatments at Grace Beauty Parlour</p>
          <Link href="#book" className="mt-6 px-4 py-2 text-white rounded-lg bg-yellow-400">Book Now</Link>
        </div>
      </div>
    </div>
  );
}
