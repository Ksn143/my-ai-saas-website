// src/app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { Header } from "@/components/Header"; // Make sure Header.tsx is in components folder
// NOTE: For production, move <Header /> and <Footer /> to your layout.tsx file.

type Industry = {
  id: string;
  name: string;
  emoji: string;
  desc: string;
  examplePrompt?: string;
};

const INDUSTRIES: Industry[] = [
  { id: "dentists", name: "Dentists & Clinics", emoji: "🦷", desc: "Auto-book patients, reduce no-shows with SMS reminders, and answer FAQs 24/7.", examplePrompt: "Create a patient booking & reminder flow for a dental clinic with SMS reminders 24h and 1h before." },
  { id: "homeservices", name: "Home Services", emoji: "🔧", desc: "Instant quotes for Plumbers & HVAC. Capture leads while you are on the job site.", examplePrompt: "Create a quick quote funnel for home plumbing with 'book now' and 'get quote' flows." },
  { id: "law", name: "Law Firms", emoji: "⚖️", desc: "Qualify potential clients instantly and schedule consultations without back-and-forth.", examplePrompt: "Qualify a civil litigation lead and schedule a consult using intake questions." },
  { id: "fitness", name: "Fitness & Gyms", emoji: "🏋️", desc: "Class bookings, reminders and upsells for memberships.", examplePrompt: "Build a class booking funnel with upsell for a 1-month membership." },
  { id: "salons", name: "Salons & Spas", emoji: "💇‍♀️", desc: "Smart booking with no-show reductions and rebooking incentives.", examplePrompt: "Create a rebooking incentive flow with SMS coupons after appointment." },
  { id: "realestate", name: "Real Estate", emoji: "🏠", desc: "Schedule showings, follow up with leads and automate open-house reminders.", examplePrompt: "Schedule property showings and follow up automatically with interested prospects." },
];

export default function HomePage() {
  const [openIndustry, setOpenIndustry] = useState<Industry | null>(null);

  // Lock body scroll when modal open
  useEffect(() => {
    if (openIndustry) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [openIndustry]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* 1. MOBILE NAV FIX: Using the Component */}
      <Header />

      <main className="pt-16">
        {/* HERO SECTION */}
        <section className="bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Copy */}
            <div className="lg:col-span-6">
              <motion.h1 
                initial={{ y: 10, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.5 }} 
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
              >
                Put Your Business on Autopilot. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2C6CF2] to-[#7A4BFF]">
                  Managed by AI & Experts.
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ y: 10, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: 0.1 }} 
                className="mt-6 text-lg text-gray-600 max-w-xl"
              >
                Stop wrestling with software. We build, train, and manage your AI workforce (Kewa) to handle leads, bookings, and support 24/7.
                <span className="block mt-2 font-medium text-gray-900">
                  100% Done-For-You Setup in 48 Hours.
                </span>
              </motion.p>

              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.2 }} 
                className="mt-8 flex flex-wrap gap-3"
              >
                <a href="#start-dfy" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#2C6CF2] to-[#7A4BFF] text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all">
                  Get Started (DFY)
                </a>
                <a href="#demo" className="inline-flex items-center px-6 py-3 border border-gray-200 bg-white rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-all">
                  View Demo
                </a>
              </motion.div>
              
              <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
                <div className="flex -space-x-2">
                   {[1,2,3,4].map(i => <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>)}
                </div>
                <p>Trusted by 100+ early adopters</p>
              </div>
            </div>

            {/* Right Side: 2. HERO UI UPGRADE (Chat Mockup) */}
            <div className="lg:col-span-6 relative">
               <motion.div 
                 initial={{ scale: 0.95, opacity: 0 }} 
                 animate={{ scale: 1, opacity: 1 }} 
                 transition={{ duration: 0.6 }}
                 className="relative rounded-2xl border bg-white shadow-2xl overflow-hidden border-gray-200"
               >
                {/* Fake Browser Header */}
                <div className="bg-gray-50 border-b px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-4 text-xs text-gray-400 font-mono">kewa.ai/dashboard</div>
                </div>

                {/* Chat UI Mockup */}
                <div className="p-6 space-y-6 bg-slate-50 h-[340px] flex flex-col justify-center">
                  {/* User Msg */}
                  <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-end"
                  >
                    <div className="bg-[#2C6CF2] text-white px-5 py-3 rounded-2xl rounded-tr-sm text-sm max-w-[85%] shadow-sm">
                      I need a booking funnel for my Dental Clinic.
                    </div>
                  </motion.div>

                  {/* AI Kewa Msg */}
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="flex justify-start items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] flex items-center justify-center text-white text-sm font-bold shrink-0">KW</div>
                    <div className="bg-white text-gray-800 px-5 py-4 rounded-2xl rounded-tl-sm text-sm shadow-sm border max-w-[90%]">
                      <p className="font-semibold text-[#2C6CF2] mb-2">On it! I've built your system:</p>
                      <ul className="space-y-2 text-gray-600 text-xs sm:text-sm mb-3">
                        <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-green-500"/> Landing Page (Live)</li>
                        <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-green-500"/> Calendar Sync (Google)</li>
                        <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-green-500"/> SMS Reminders (24h before)</li>
                      </ul>
                      <div className="flex gap-2 flex-wrap">
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-md text-xs font-medium transition">Preview Funnel</button>
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-md text-xs font-medium transition">Edit Copy</button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border flex items-center gap-3 animate-bounce-slow hidden sm:flex"
              >
                 <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl">💰</div>
                 <div>
                    <div className="text-xs text-gray-500">New Lead Captured</div>
                    <div className="font-bold text-sm">+$150 Value</div>
                 </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* INTEGRATIONS STRIP */}
        <section className="bg-gray-50 py-10 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500 mb-6">WE INTEGRATE SEAMLESSLY WITH</p>
            <div className="flex items-center justify-center gap-4 flex-wrap opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {["Google","Gmail","Outlook","Facebook","Instagram","Twilio","Zapier","Stripe"].map((n) => (
                <div key={n} className="bg-white px-4 py-2 rounded-lg border shadow-sm text-sm font-semibold text-gray-600">
                  {n}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS (Process) */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold">Zero Tech Skills Required.</h2>
              <p className="mt-4 text-lg text-gray-600">Our "Done-For-You" process is designed for busy owners.</p>
            </div>

            <div className="relative grid md:grid-cols-3 gap-8">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 -z-10"></div>

              {/* Step 1 */}
              <div className="bg-white p-8 rounded-2xl border shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto bg-[#EFF6FF] rounded-full flex items-center justify-center text-2xl mb-6 border-4 border-white relative z-10">
                  📅
                </div>
                <h3 className="text-xl font-bold mb-2">1. Choose & Consult</h3>
                <p className="text-gray-600">Pick a plan or book a strategy call. We map out your exact needs.</p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-2xl border shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto bg-[#FFF7ED] rounded-full flex items-center justify-center text-2xl mb-6 border-4 border-white relative z-10">
                  ⚙️
                </div>
                <h3 className="text-xl font-bold mb-2">2. We Build Everything</h3>
                <p className="text-gray-600">Our experts build your funnel, train Kewa (AI), and sync your calendar.</p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-8 rounded-2xl border shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto bg-[#F0FDF4] rounded-full flex items-center justify-center text-2xl mb-6 border-4 border-white relative z-10">
                  🚀
                </div>
                <h3 className="text-xl font-bold mb-2">3. Go Live in 48 Hours</h3>
                <p className="text-gray-600">Start getting leads and bookings automatically. We manage the rest.</p>
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRY SOLUTIONS */}
        <section id="solutions" className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6">Tailored AI Agents for Your Industry</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Pick your industry to see how Kewa works for you.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {INDUSTRIES.map((it) => (
                <motion.div 
                  key={it.id} 
                  whileHover={{ y: -6 }} 
                  className="bg-white p-6 rounded-2xl border hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => setOpenIndustry(it)}
                >
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-5 text-2xl">{it.emoji}</div>
                  <h3 className="text-xl font-bold">{it.name}</h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">{it.desc}</p>
                  <div className="mt-5 flex items-center gap-2 text-[#2C6CF2] font-semibold text-sm group">
                    View Demo 
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON: Old Way vs New Way */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">Why Switch to Hikewa?</h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Old Way */}
              <div className="p-10 rounded-3xl bg-red-50 border border-red-100 relative">
                <h3 className="text-2xl font-bold text-red-900 flex items-center gap-3 mb-6">
                  ❌ The Old Way
                </h3>
                <ul className="space-y-5 text-red-800 font-medium">
                  <li className="flex gap-4 items-center">
                    <span className="text-2xl">😰</span>
                    <span>Hiring expensive agencies ($2k+/mo)</span>
                  </li>
                  <li className="flex gap-4 items-center">
                    <span className="text-2xl">🧩</span>
                    <span>Stitching 5 different tools together</span>
                  </li>
                  <li className="flex gap-4 items-center">
                    <span className="text-2xl">📉</span>
                    <span>Missed calls & slow follow-ups</span>
                  </li>
                </ul>
              </div>

              {/* New Way */}
              <div className="p-10 rounded-3xl bg-[#2C6CF2] text-white shadow-2xl scale-105 relative z-10">
                <div className="absolute top-6 right-6 bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
                  Hikewa DFY
                </div>
                <h3 className="text-2xl font-bold flex items-center gap-3 mb-6">
                  ✅ The Hikewa Way
                </h3>
                <ul className="space-y-5">
                  <li className="flex gap-4 items-center">
                    <span className="text-2xl">🤖</span>
                    <span>AI Agent (Kewa) works 24/7</span>
                  </li>
                  <li className="flex gap-4 items-center">
                    <span className="text-2xl">⚡</span>
                    <span>All-in-one platform (No extra costs)</span>
                  </li>
                  <li className="flex gap-4 items-center">
                    <span className="text-2xl">🤝</span>
                    <span>We build it for you (48hr Setup)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. SOCIAL PROOF STRIP (New) */}
        <section className="py-12 border-t border-gray-100 bg-gray-50">
           <div className="max-w-7xl mx-auto px-6 text-center">
             <p className="text-sm text-gray-400 mb-8 font-bold tracking-widest uppercase">Proven Results For</p>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
               <div>
                  <div className="text-3xl font-bold text-gray-900">30%</div>
                  <div className="text-sm text-gray-500 mt-1">Increase in Bookings</div>
               </div>
               <div>
                  <div className="text-3xl font-bold text-gray-900">48hr</div>
                  <div className="text-sm text-gray-500 mt-1">Average Setup Time</div>
               </div>
               <div>
                  <div className="text-3xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-500 mt-1">Automated Response</div>
               </div>
               <div>
                  <div className="text-3xl font-bold text-gray-900">Zero</div>
                  <div className="text-sm text-gray-500 mt-1">Tech Skills Needed</div>
               </div>
             </div>
           </div>
        </section>

        {/* FAQ + CTA */}
        <section className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">Frequently asked</h3>
              <div className="space-y-4">
                <details className="group bg-white p-5 rounded-xl border shadow-sm cursor-pointer">
                  <summary className="font-semibold flex justify-between items-center list-none">
                    What is Kewa? 
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <div className="mt-3 text-gray-600 text-sm leading-relaxed">Kewa is your AI business employee. Unlike a dumb chatbot, Kewa can write emails, check your calendar, book appointments, and follow up with leads automatically.</div>
                </details>
                <details className="group bg-white p-5 rounded-xl border shadow-sm cursor-pointer">
                  <summary className="font-semibold flex justify-between items-center list-none">
                    How long does setup take?
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <div className="mt-3 text-gray-600 text-sm leading-relaxed">We guarantee a 48-hour turnaround for our Done-For-You setup. Once you fill out the onboarding form, our team builds your system immediately.</div>
                </details>
                <details className="group bg-white p-5 rounded-xl border shadow-sm cursor-pointer">
                  <summary className="font-semibold flex justify-between items-center list-none">
                    Can I use my own CRM?
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <div className="mt-3 text-gray-600 text-sm leading-relaxed">Yes! We integrate with HubSpot, Salesforce, Pipedrive, and more via API or Zapier. Or you can use Hikewa's built-in simple CRM.</div>
                </details>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] p-10 rounded-3xl text-white shadow-xl flex flex-col justify-center">
              <h3 className="text-3xl font-bold">Ready to automate?</h3>
              <p className="mt-4 text-white/90 text-lg">Start your free trial or book a strategy call — no credit card required to chat.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#start" className="px-6 py-3 bg-white text-[#2C6CF2] rounded-xl font-bold text-center shadow-lg hover:bg-gray-50 transition">Start Free Trial</a>
                <a href="/contact" className="px-6 py-3 border border-white/30 rounded-xl font-bold text-center hover:bg-white/10 transition">Book Strategy Call</a>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-white border-t py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] flex items-center justify-center text-white font-bold">KW</div>
                <div className="font-bold text-xl">Hikewa</div>
              </div>
              <p className="text-xs text-gray-500">
                AI-powered business OS for Solopreneurs & Agencies.
                <br/>© 2025 Hikewa Inc.
              </p>
            </div>

            <div>
              <div className="font-bold mb-4">Product</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="/product" className="hover:text-[#2C6CF2]">CRM & Auto</a></li>
                <li><a href="/pricing" className="hover:text-[#2C6CF2]">Pricing</a></li>
                <li><a href="/dfy" className="hover:text-[#2C6CF2]">DFY Services</a></li>
              </ul>
            </div>

            <div>
              <div className="font-bold mb-4">Company</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="/about" className="hover:text-[#2C6CF2]">About Us</a></li>
                <li><a href="/contact" className="hover:text-[#2C6CF2]">Contact</a></li>
                <li><a href="/blog" className="hover:text-[#2C6CF2]">Blog</a></li>
              </ul>
            </div>

            <div>
              <div className="font-bold mb-4">Legal</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="/privacy" className="hover:text-[#2C6CF2]">Privacy</a></li>
                <li><a href="/terms" className="hover:text-[#2C6CF2]">Terms</a></li>
              </ul>
            </div>
          </div>
        </footer>

        {/* ----------------------------- */}
        {/* INDUSTRY DEMO MODAL (Updated) */}
        {/* ----------------------------- */}
        <AnimatePresence>
          {openIndustry && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} exit={{ opacity: 0 }} onClick={() => setOpenIndustry(null)} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
              
              <motion.div 
                initial={{ y: 20, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 20, opacity: 0, scale: 0.95 }}
                className="relative z-50 w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* Modal Header */}
                <div className="p-5 border-b flex items-center justify-between bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white border flex items-center justify-center text-2xl shadow-sm">{openIndustry.emoji}</div>
                    <div>
                      <div className="font-bold text-lg">{openIndustry.name}</div>
                      <div className="text-xs text-gray-500">AI Agent Preview</div>
                    </div>
                  </div>
                  <button onClick={() => setOpenIndustry(null)} className="p-2 hover:bg-gray-200 rounded-full transition">
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                  {/* Left: Description */}
                  <div>
                    <h4 className="font-semibold mb-2">How Kewa helps {openIndustry.name}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mb-6">{openIndustry.desc}</p>
                    
                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-6">
                      <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Example Prompt</div>
                      <p className="text-sm font-mono text-blue-900">"{openIndustry.examplePrompt}"</p>
                    </div>

                    <ul className="space-y-3 text-sm text-gray-700 mb-8">
                      <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-green-500"/> 24/7 Booking Agent</li>
                      <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-green-500"/> Instant Lead Follow-up</li>
                      <li className="flex gap-2 items-center"><Check className="w-4 h-4 text-green-500"/> Done-For-You Setup</li>
                    </ul>
                  </div>

                  {/* Right: Visual Placeholder */}
                  <div className="bg-gray-900 rounded-xl p-6 flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] opacity-20"></div>
                    <div className="text-center relative z-10">
                       <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                         ▶️
                       </div>
                       <p className="text-white font-medium text-sm">Watch {openIndustry.name} Demo</p>
                       <p className="text-white/60 text-xs mt-1">(1 min video)</p>
                    </div>
                  </div>
                </div>

                {/* Modal Footer with 3. MODAL CTA UPDATE */}
                <div className="p-5 border-t bg-gray-50 flex flex-col sm:flex-row gap-3 justify-end">
                   <a href="/contact" className="px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 transition">
                     Get Free Strategy Audit
                   </a>
                   <a href="#start" className="px-6 py-2.5 bg-[#2C6CF2] text-white rounded-lg text-sm font-bold hover:bg-blue-600 transition shadow-md">
                     Start DFY Setup ($499)
                   </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}