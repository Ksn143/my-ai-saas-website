"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid lg:grid-cols-12 gap-12">
        
        {/* LEFT: Value Proposition */}
        <div className="lg:col-span-5 pt-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#2C6CF2] text-xs font-bold mb-6 uppercase tracking-wide">
              Free Strategy Session
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              See how Kewa can <br/>
              <span className="text-[#2C6CF2]">automate your business.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Book a 30-minute consultation. No aggressive sales pitch. We’ll audit your current workflow and show you exactly how our DFY system can save you 20+ hours a week.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1"><CheckCircle2 className="text-green-500 w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-lg">Live System Demo</h4>
                  <p className="text-sm text-gray-600">See a real AI agent handling leads and bookings.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><CheckCircle2 className="text-green-500 w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-lg">Custom ROI Plan</h4>
                  <p className="text-sm text-gray-600">We'll calculate exactly how much revenue you're losing to missed leads.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><CheckCircle2 className="text-green-500 w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-lg">48-Hour Roadmap</h4>
                  <p className="text-sm text-gray-600">Walk away with a plan to launch your system in 2 days.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-100">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full"></div> {/* Replace with your photo */}
                  <div>
                     <div className="font-bold">Your Name</div>
                     <div className="text-xs text-gray-500">Founder, Hikewa</div>
                  </div>
               </div>
               <p className="text-sm text-gray-600 italic">
                 "I personally guarantee you'll leave this call with at least one automation idea that pays for itself."
               </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: Calendly Embed */}
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden h-[700px]"
          >
            {/* --- CALENDLY EMBED START --- */}
            {/* Instruction: 
               1. Go to Calendly.com -> Share -> Add to Website -> Inline Embed 
               2. Copy the code and replace the iframe below.
               3. Make sure to style the iframe with w-full and h-full.
            */}
            <iframe 
              src="https://calendly.com/YOUR_CALENDLY_LINK/30min?hide_gdpr_banner=1&text_color=333333&primary_color=2c6cf2" 
              width="100%" 
              height="100%" 
              frameBorder="0"
              title="Select a Date & Time - Calendly"
            ></iframe>
            {/* --- CALENDLY EMBED END --- */}
          </motion.div>
        </div>

      </div>
    </div>
  );
}