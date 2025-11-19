// src/app/features/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Settings,
  Zap,
  Calendar,
  Database,
  Layers,
  ShieldCheck,
  MessageSquare,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Benefit-Driven Features for Zig-Zag Layout
const detailedFeatures = [
  {
    title: "The 'Zero-Admin' CRM",
    heading: "Stop updating spreadsheets manually.",
    desc: "Hikewa captures every lead from your website, Facebook, and Instagram automatically. It tracks every conversation, email, and appointment so you never lose a potential customer.",
    bullets: ["Auto-capture leads from any source", "See full conversation history", "Tag and segment VIP clients"],
    icon: Database,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Kewa Automation Engine",
    heading: "It follows up, so you don't have to.",
    desc: "Forget sticky notes. Kewa sends SMS reminders, requests reviews, and re-engages cold leads while you sleep. It's like having a 24/7 office manager.",
    bullets: ["Instant lead response (under 2 mins)", "Automated review requests", "Birthday & anniversary promos"],
    icon: Zap,
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    title: "Smart Booking System",
    heading: "Fill your calendar, not your inbox.",
    desc: "Eliminate the 'What time works for you?' email tag. Clients book directly into your calendar. Kewa handles the confirmations and reminders to prevent no-shows.",
    bullets: ["Syncs with Google/Outlook", "Collects payments on booking", "Auto-reminders via SMS"],
    icon: Calendar,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Unified Messaging Inbox",
    heading: "All your chats in one place.",
    desc: "Stop checking 5 different apps. Reply to Emails, SMS, Facebook Messenger, Instagram DMs, and Website Chat from a single, simple dashboard.",
    bullets: ["Email, SMS, FB, IG & Webchat", "Kewa AI drafts your replies", "Mobile app for on-the-go replies"],
    icon: MessageSquare,
    color: "bg-purple-50 text-purple-600",
  },
];

// Quick Feature Grid
const extraFeatures = [
  { icon: Layers, title: "Funnel Builder", desc: "High-converting landing page templates installed for you." },
  { icon: ShieldCheck, title: "Enterprise Security", desc: "Role-based access and encrypted data storage." },
  { icon: Settings, title: "Workflow Builder", desc: "Visual drag-and-drop builder for custom logic." },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      
      {/* HERO */}
      <section className="pt-28 pb-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
              Everything You Need to <br/>
              <span className="text-[#2C6CF2]">Replace Your Busy Work.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Don't buy 10 different tools. Hikewa gives you CRM, Automations, Booking, and AI in one platform — completely managed for you.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="rounded-full bg-[#2C6CF2] px-8 py-6 text-lg shadow-lg hover:bg-blue-600">
                <Link href="/signup">Start Free Trial</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 py-6 text-lg border-gray-300 text-gray-700">
                <Link href="/demo">Watch Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ZIG-ZAG FEATURES (The "Meat" of the page) */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">
          {detailedFeatures.map((feature, index) => {
            const isEven = index % 2 === 0;
            const Icon = feature.icon;
            
            return (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Text Side */}
                <div className="flex-1">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-6 ${feature.color}`}>
                    <Icon size={16} />
                    {feature.title}
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">{feature.heading}</h2>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {feature.desc}
                  </p>
                  <ul className="space-y-3">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3 text-gray-700 font-medium">
                        <CheckCircle2 className="text-green-500 h-5 w-5 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Side (Mockup Placeholder) */}
                <div className="flex-1 w-full">
                  <div className={`relative rounded-2xl border border-gray-200 bg-white shadow-xl aspect-[4/3] flex items-center justify-center overflow-hidden group hover:scale-[1.02] transition-transform duration-500`}>
                    <div className={`absolute inset-0 opacity-5 bg-gradient-to-br ${isEven ? 'from-blue-500 to-purple-500' : 'from-orange-500 to-red-500'}`}></div>
                    
                    {/* Replace this with actual screenshot later */}
                    <div className="text-center p-8">
                      <div className={`w-20 h-20 mx-auto rounded-2xl ${feature.color} flex items-center justify-center mb-4 shadow-sm`}>
                        <Icon size={40} />
                      </div>
                      <p className="text-sm font-mono text-gray-400 uppercase tracking-widest">Interface Preview</p>
                      <p className="font-bold text-gray-300 mt-1">{feature.title} Dashboard</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* DFY BREAK BANNER */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="bg-[#2C6CF2] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Overwhelmed by features?</h2>
            <p className="text-xl text-blue-100 mb-8">
              You don't have to set this up yourself. Our expert team will build your funnels, import your contacts, and train Kewa for you.
            </p>
            <Link href="/pricing" className="inline-flex items-center gap-2 bg-white text-[#2C6CF2] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors">
              See DFY Packages <ArrowRight size={20}/>
            </Link>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* EXTRA FEATURES GRID */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-center mb-12">More tools included in every plan</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {extraFeatures.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={i} className="p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-white rounded-lg border flex items-center justify-center mb-4 text-gray-700 shadow-sm">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-lg font-bold mb-2">{f.title}</h4>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to upgrade your business?</h2>
        <p className="text-gray-600 mb-10 text-lg">Join 100+ businesses running on autopilot.</p>
        <div className="flex justify-center gap-4">
          <Button asChild className="bg-[#2C6CF2] px-8 py-6 rounded-xl text-lg">
            <Link href="/signup">Get Started Free</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}