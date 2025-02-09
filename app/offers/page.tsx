import React from "react";
import { CalendarDays, Percent, Users, Gift } from "lucide-react"

const offers = [
    {
      title: "Summer Beauty Package",
      description: "Get a complete makeover including hair styling, makeup, and nail care",
      discount: "20% off",
      validUntil: "August 31, 2023",
      icon: Gift,
    },
    {
      title: "Bring a Friend Discount",
      description: "Book with a friend and both get 15% off any service",
      discount: "15% off",
      validUntil: "Ongoing",
      icon: Users,
    },
    {
      title: "First-Time Customer Special",
      description: "Enjoy 25% off your first visit to Grace Beauty Parlour",
      discount: "25% off",
      validUntil: "Ongoing",
      icon: Percent,
    },
    {
      title: "Loyalty Program",
      description: "Earn points on every visit and redeem them for free services",
      discount: "Earn 1 point for every $10 spent",
      validUntil: "Ongoing",
      icon: CalendarDays,
    },
  ]
  

export default function Offers(){
    return(
        <div id="offers" className="">
            <div className="mt-6 flex justify-center items-center">
                <h1 className="text-3xl font-bold">Special Offers</h1>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 container border rounded-lg shadow">
                {offers.map((offer,index) =>(
                    <div key={index} className="flex flex-col m-6 p-6 shadow border rounded-lg hover:scale-105 transition">
                        <div className="flex items-center mb-4">
                        <offer.icon className="font-bold text-2xl text-red-700" />
                        <h1 className="ml-2 font-bold text-2xl text-red-700">{offer.title}</h1>
                        </div>
                        <p className="mt-1 text-sm text-gray-400">{offer.description}</p>
                        <p className="mt-4 text-2xl text-red-700 font-bold">{offer.discount}</p>
                        <p className="mt-1 text-xs text-gray-400">Valid Until:{offer.validUntil}</p>
                        <button className="text-xl bg-yellow-400 p-2 mt-4 rounded-lg">Book Now</button>


                    </div>
                ))}

            </div>

        </div>
    );
}