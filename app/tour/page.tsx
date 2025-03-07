"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const images = [
  "/tour/tour-1.jpg",
  "/tour/tour-2.jpg",
  "/tour/tour-3.jpg",
];

export default function Tour() {
  return (
    <div id="tour" className="container px-6 py-16">
      <h1 className="font-extrabold text-3xl text-center mb-6 text-gray-800">
        Have a Virtual Tour
      </h1>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }}
        className="m-6 w-full max-w-4xl mx-auto overflow-hidden"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="relative w-full h-[350px] group">
              <Image
                src={src}
                alt={`Slide ${index}`}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl shadow-lg transition-all duration-500 ease-in-out transform group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #333 !important;
        }
      `}</style>
    </div>
  );
}
