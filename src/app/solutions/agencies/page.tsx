"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Layers, Globe, Briefcase, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AgenciesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="pt-32 pb-16 text-center px-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block py-1 px-3 rounded-full bg-purple-50 text-purple-600 text-xs font-bold tracking-wide mb-6 uppercase">For Marketing Agencies</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            The All-In-One <br/><span className="text-[#2C6CF2]">Client Delivery System.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Replace your client's messy tech stack (Calendly, Mailchimp, Zapier) with one white-labeled platform.
          </p>
          <Button asChild className="rounded-full bg-[#2C6CF2] px-8 py-6 text-lg shadow-lg">
            <Link href="/contact">Book Agency Demo</Link>
          </Button>
        </motion.div>
      </section>

      {/* FEATURE 1: Multi-Tenant */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center mb-6"><Layers size={24}/></div>
            <h2 className="text-3xl font-bold mb-4">Manage 100 Clients as Easily as 1.</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Switch between client sub-accounts with one click. Clone entire funnels, automations, and websites from one client to another using "Snapshots".
            </p>
            <ul className="space-y-3">
              {["Unlimited Sub-Accounts", "One-Click Snapshot Cloning", "Centralized Agency View"].map(i => (
                <li key={i} className="flex gap-2 items-center font-medium"><Check size={18} className="text-green-500"/> {i}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border h-80 flex items-center justify-center text-gray-300 font-bold">
            Agency Dashboard Mockup
          </div>
        </div>
      </section>

      {/* FEATURE 2: White Label */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6"><Globe size={24}/></div>
            <h2 className="text-3xl font-bold mb-4">Your Brand, Not Ours.</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Resell Hikewa under your own domain and logo. Your clients will see "YourAgency App", not Hikewa. Charge them whatever you want.
            </p>
            <ul className="space-y-3">
              {["Custom Domain Setup", "Custom Logo & Colors", "Set Your Own Pricing"].map(i => (
                <li key={i} className="flex gap-2 items-center font-medium"><Check size={18} className="text-green-500"/> {i}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border h-80 flex items-center justify-center text-gray-600 font-bold lg:order-1">
            White Label Settings Mockup
          </div>
        </div>
      </section>

      {/* AGENCY PARTNER BANNER */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gray-900 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Become a White-Label Partner</h2>
          <p className="text-xl text-gray-400 mb-8">Get wholesale pricing and dedicated support for your agency.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
            Apply for Partner Program <ArrowRight size={20}/>
          </Link>
        </div>
      </section>
    </div>
  );
}