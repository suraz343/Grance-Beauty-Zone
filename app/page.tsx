import React from "react";
import Hero from "./components/Hero";
import Services from "./services/page";
import Contact from "./contact/page";


export default function Home(){
  return(
    <div className="bg-white max-w-full">    
      <Hero />
      <Services />
      <Contact />
    </div>
  );
}