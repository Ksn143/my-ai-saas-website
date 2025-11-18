"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, MapPin, MessageSquare, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SmallBusinessPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="pt-32 pb-16 text-center px-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block py-1 px-3 rounded-full bg-orange-50 text-orange-600 text-xs font-bold tracking-wide mb-6 uppercase">For Local Services</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Turn Your Website into a <br/><span className="text-[#2C6CF2]">Lead Machine.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Stop relying on expensive ads. Capture every visitor, get more Google Reviews, and automate your appointment booking.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild className="rounded-full bg-[#2C6CF2] px-8 py-6 text-lg shadow-lg">
              <Link href="/demo">View Demo</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* FEATURE 1: Unified Inbox */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6"><MessageSquare size={24}/></div>
            <h2 className="text-3xl font-bold mb-4">All Your Messages in One Place.</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Don't check Facebook, Instagram, and Email separately. Hikewa brings all messages into one simple inbox.
            </p>
            <ul className="space-y-3">
              {["Facebook & Instagram DM", "Website Chat Widget", "SMS Text Messages"].map(i => (
                <li key={i} className="flex gap-2 items-center font-medium"><Check size={18} className="text-green-500"/> {i}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border h-80 flex items-center justify-center text-gray-300 font-bold">
            Unified Inbox Mockup
          </div>
        </div>
      </section>

      {/* FEATURE 2: Reviews */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <div className="w-12 h-12 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-6"><Star size={24}/></div>
            <h2 className="text-3xl font-bold mb-4">Automate Your Google Reviews.</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              More reviews = More customers. Kewa automatically texts your happy customers after a job and asks for a 5-star review.
            </p>
            <ul className="space-y-3">
              {["Rank higher on Google Maps", "Filter out negative feedback", "One-click review link"].map(i => (
                <li key={i} className="flex gap-2 items-center font-medium"><Check size={18} className="text-green-500"/> {i}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border h-80 flex items-center justify-center text-gray-600 font-bold lg:order-1">
            Review Request Mockup
          </div>
        </div>
      </section>

      {/* INDUSTRY GRID */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
           <h2 className="text-2xl font-bold mb-12">Tailored for your industry</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["Dentists", "Plumbers", "Gyms", "Lawyers", "Real Estate", "Salons", "Auto Repair", "HVAC"].map(i => (
                  <div key={i} className="bg-white p-6 rounded-xl border shadow-sm font-semibold text-gray-700">{i}</div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
}