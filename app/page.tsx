import React from "react";
import Hero from "./components/Hero";
import Services from "./services/page";
import Contact from "./contact/page";
import ProductPage from "./products/page";
import Book from "./book/page";


export default function Home(){
  return(
    <div className="bg-white max-w-full">    
      <Hero />
      <Services />
      <Contact />
      <ProductPage />
      <Book />
    </div>
  );
}