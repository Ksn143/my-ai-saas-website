// src/app/dfy/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Clock, Settings, Users, ShieldCheck, ArrowRight, XCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    id: "starter",
    name: "48-Hour Launch",
    price: "$499",
    desc: "Perfect for solo owners needing a quick start.",
    bullets: [
      "Full Account Setup & Branding",
      "1 High-Converting Funnel",
      "Google Calendar & Email Sync",
      "3-Email Nurture Sequence",
      "Basic Kewa Training",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    id: "growth",
    name: "Growth System",
    price: "$1,299",
    desc: "Complete automation for scaling businesses.",
    bullets: [
      "Everything in Launch",
      "5 Custom Automations",
      "SMS + Email Sequences",
      "Facebook Lead Ad Sync",
      "1-Hour Strategy & Training Call",
      "Priority Support (30 Days)",
    ],
    cta: "Get Growth System",
    popular: true,
  },
];

export default function DfyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased">
      
      {/* HERO */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold mb-6 border border-green-200"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            ACCEPTING NEW CLIENTS FOR THIS WEEK
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            We Build Your Entire AI System.<br/>
            <span className="text-[#2C6CF2]">You Just Log In.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
          >
            Stop watching YouTube tutorials. Our expert team will build your funnels, connect your CRM, and train your AI agent Kewa. <strong>Live in 48 hours.</strong>
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="rounded-full bg-[#2C6CF2] px-8 py-6 text-lg shadow-lg hover:bg-blue-600">
              <Link href="/pricing">See Packages</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-8 py-6 text-lg border-gray-300 text-gray-700">
              <Link href="/demo">Book Strategy Call</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PAIN VS GAIN (Why DFY?) */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* The Hard Way */}
            <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 opacity-80">
              <h3 className="text-xl font-bold text-gray-500 mb-6 flex items-center gap-2">
                <XCircle className="text-gray-400" /> The DIY Nightmare
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3">😩 Spend 20+ hours learning new software</li>
                <li className="flex gap-3">🧩 Stitching Zapier, Calendly & Mailchimp</li>
                <li className="flex gap-3">❌ Broken automations & lost leads</li>
                <li className="flex gap-3">📉 Generic AI that sounds like a robot</li>
              </ul>
            </div>

            {/* The Hikewa Way */}
            <div className="p-8 rounded-3xl bg-[#F0F7FF] border border-[#2C6CF2] relative shadow-xl">
              <div className="absolute top-4 right-4 bg-[#2C6CF2] text-white text-xs font-bold px-3 py-1 rounded-full">RECOMMENDED</div>
              <h3 className="text-xl font-bold text-[#2C6CF2] mb-6 flex items-center gap-2">
                <CheckCircle2 /> The DFY Shortcut
              </h3>
              <ul className="space-y-4 text-gray-800 font-medium">
                <li className="flex gap-3">✅ We build everything for you</li>
                <li className="flex gap-3">✅ Custom-trained Kewa AI Agent</li>
                <li className="flex gap-3">✅ Tested & Verified before launch</li>
                <li className="flex gap-3">✅ 100% Ownership of your data</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* THE 48-HOUR TIMELINE (Visual) */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">The 48-Hour Sprint</h2>
            <p className="text-gray-400 mt-2">How we go from "Zero" to "Live System" in 2 days.</p>
          </div>

          <div className="relative grid md:grid-cols-3 gap-8">
             {/* Line */}
             <div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-0.5 bg-gray-700 -z-10"></div>

             <div className="text-center">
               <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center text-2xl mb-6 border-4 border-gray-900 text-blue-400 font-bold">1</div>
               <h3 className="text-xl font-bold mb-2">Day 1: Intake</h3>
               <p className="text-sm text-gray-400 px-4">You fill out a simple form with your offer, pricing, and brand voice. We get access to your domain.</p>
             </div>

             <div className="text-center">
               <div className="w-16 h-16 mx-auto bg-gray-800 rounded-full flex items-center justify-center text-2xl mb-6 border-4 border-gray-900 text-blue-400 font-bold">2</div>
               <h3 className="text-xl font-bold mb-2">Day 2: The Build</h3>
               <p className="text-sm text-gray-400 px-4">Our engineers build your funnel, connect APIs, and train Kewa on your specific data.</p>
             </div>

             <div className="text-center">
               <div className="w-16 h-16 mx-auto bg-[#2C6CF2] rounded-full flex items-center justify-center text-2xl mb-6 border-4 border-gray-900 text-white font-bold">3</div>
               <h3 className="text-xl font-bold mb-2">Launch & Handover</h3>
               <p className="text-sm text-gray-400 px-4">We test everything, then hand you the keys (and a training video). You start getting leads.</p>
             </div>
          </div>
        </div>
      </section>


      {/* GUARANTEE */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
         <div className="max-w-3xl mx-auto px-6 text-center">
            <ShieldCheck className="w-12 h-12 text-gray-800 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4">The 48-Hour Guarantee</h3>
            <p className="text-gray-600">
              If we don't have your system built and ready for review within 48 business hours of receiving your intake form, <strong>we will refund 50% of your setup fee.</strong> We value your time.
            </p>
         </div>
      </section>

      

    </main>
  );
}