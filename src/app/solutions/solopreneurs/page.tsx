"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Zap, Clock, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SolopreneurPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="pt-32 pb-16 text-center px-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold tracking-wide mb-6 uppercase">For Coaches & Creators</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Clone Yourself with <span className="text-[#2C6CF2]">Kewa.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            You are a one-person army. Let our AI Agent handle the admin work, booking, and follow-ups so you can focus on your craft.
          </p>
          <Button asChild className="rounded-full bg-[#2C6CF2] px-8 py-6 text-lg shadow-lg">
            <Link href="/signup">Start Free Trial</Link>
          </Button>
        </motion.div>
      </section>

      {/* FEATURE 1: Booking */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6"><Clock size={24}/></div>
            <h2 className="text-3xl font-bold mb-4">Stop Playing Email Tag.</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Kewa syncs with your Google Calendar. When a lead asks "Are you free?", Kewa sends your link or books them directly. No more back-and-forth.
            </p>
            <ul className="space-y-3">
              {["Auto-reminders via SMS", "Collect payments on booking", "Syncs with Zoom/Meet"].map(i => (
                <li key={i} className="flex gap-2 items-center font-medium"><Check size={18} className="text-green-500"/> {i}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border h-80 flex items-center justify-center text-gray-300 font-bold">
            Calendar UI Mockup
          </div>
        </div>
      </section>

      {/* FEATURE 2: Follow up */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6"><Zap size={24}/></div>
            <h2 className="text-3xl font-bold mb-4">Never Ghost a Lead.</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              If you don't reply in 5 minutes, you lose the client. Kewa replies instantly, answers basic questions, and qualifies the lead for you.
            </p>
            <ul className="space-y-3">
              {["Responds 24/7", "Sounds exactly like you", "Drafts replies for approval"].map(i => (
                <li key={i} className="flex gap-2 items-center font-medium"><Check size={18} className="text-green-500"/> {i}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border h-80 flex items-center justify-center text-gray-600 font-bold lg:order-1">
            Chat UI Mockup
          </div>
        </div>
      </section>

      {/* DFY CALLOUT */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-[#2C6CF2] rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Too busy to set this up?</h2>
          <p className="text-xl text-blue-100 mb-8">Our DFY team will build your funnel and train Kewa for you in 48 hours.</p>
          <Link href="/pricing" className="inline-flex items-center gap-2 bg-white text-[#2C6CF2] px-8 py-3 rounded-lg font-bold hover:bg-gray-50">
            Get DFY Setup <ArrowRight size={20}/>
          </Link>
        </div>
      </section>
    </div>
  );
}