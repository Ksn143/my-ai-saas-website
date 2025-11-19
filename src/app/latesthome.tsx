// src/app/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";

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
// Updated Integrations (Colorful & Fixed Outlook)
const INTEGRATIONS = [
  { name: "Google", logo: "https://cdn.simpleicons.org/google" },
  { name: "Gmail", logo: "https://cdn.simpleicons.org/gmail" },
  { name: "Facebook", logo: "https://cdn.simpleicons.org/facebook" },
  { name: "Instagram", logo: "https://cdn.simpleicons.org/instagram" },
  { name: "WhatsApp", logo: "https://cdn.simpleicons.org/whatsapp" }, // Added
  { name: "Slack", logo: "https://cdn.simpleicons.org/slack" },       // Added
  { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify" },   // Added
  { name: "Twilio", logo: "https://cdn.simpleicons.org/twilio" },
  { name: "Stripe", logo: "https://cdn.simpleicons.org/stripe" },
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

  // Common Gradient Text Class reuse साठी
  const gradientTextClass = "text-transparent bg-clip-text bg-gradient-to-r from-[#2C6CF2] to-[#7A4BFF]";

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 font-sans">
      
      <main>
        {/* HERO SECTION */}
        <section className="bg-white overflow-hidden relative">
          {/* Background Decoration (Optional for depth) */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Side: Copy */}
            <div className="lg:col-span-6">
              <motion.h1 
                initial={{ y: 10, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.5 }} 
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
              >
                Put Your Business on Autopilot. <br/>
                <span className={gradientTextClass}>
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
                <a href="/pricing" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#2C6CF2] to-[#7A4BFF] text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300">
                  Get Started (DFY)
                </a>
                <a href="/demo" className="inline-flex items-center px-8 py-4 border border-gray-200 bg-white rounded-xl text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
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

            {/* Right Side: HERO UI UPGRADE (Chat Mockup) */}
            <div className="lg:col-span-6 relative perspective-1000">
               <motion.div 
                 initial={{ rotateY: 10, rotateX: 5, opacity: 0 }} 
                 animate={{ rotateY: 0, rotateX: 0, opacity: 1 }} 
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 className="relative rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden"
                 style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
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
                    <div className="bg-[#2C6CF2] text-white px-5 py-3 rounded-2xl rounded-tr-sm text-sm max-w-[85%] shadow-md">
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
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-lg">KW</div>
                    <div className="bg-white text-gray-800 px-5 py-4 rounded-2xl rounded-tl-sm text-sm shadow-md border border-gray-100 max-w-[90%]">
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
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-slow hidden sm:flex"
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

        {/* INTEGRATIONS STRIP (Updated: Colorful & More Icons) */}
        <section className="bg-gray-50 py-12 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">We Integrate Seamlessly With</p>
            
            <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
              {INTEGRATIONS.map((app) => (
                <div key={app.name} className="group relative flex flex-col items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 hover:scale-110 transition-transform duration-300">
                    {/* Logos are colorful by default now */}
                    <img src={app.logo} alt={app.name} width={48} height={48} />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 text-sm text-gray-500 font-medium">
              + 5,000 more integrations via <span className="text-[#FF4F00] font-bold">Zapier</span> & Webhooks
            </div>
          </div>
        </section>

        {/* HOW IT WORKS (Process) */}
        <section className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-3xl sm:text-4xl font-bold ${gradientTextClass}`}>
                Zero Tech Skills Required.
              </h2>
              <p className="mt-4 text-lg text-gray-600">Our "Done-For-You" process is designed for busy owners.</p>
            </div>

            <div className="relative grid md:grid-cols-3 gap-8">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-100 via-purple-100 to-blue-100 -z-10"></div>

              {/* Step 1 - Card Style Updated */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-20 h-20 mx-auto bg-[#EFF6FF] rounded-full flex items-center justify-center text-3xl mb-6 border-4 border-white shadow-md relative z-10 group-hover:scale-110 transition-transform duration-300">
                  📅
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#2C6CF2] transition-colors">1. Choose & Consult</h3>
                <p className="text-gray-600">Pick a plan or book a strategy call. We map out your exact needs.</p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-20 h-20 mx-auto bg-[#FFF7ED] rounded-full flex items-center justify-center text-3xl mb-6 border-4 border-white shadow-md relative z-10 group-hover:scale-110 transition-transform duration-300">
                  ⚙️
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#2C6CF2] transition-colors">2. We Build Everything</h3>
                <p className="text-gray-600">Our experts build your funnel, train Kewa (AI), and sync your calendar.</p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-20 h-20 mx-auto bg-[#F0FDF4] rounded-full flex items-center justify-center text-3xl mb-6 border-4 border-white shadow-md relative z-10 group-hover:scale-110 transition-transform duration-300">
                  🚀
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#2C6CF2] transition-colors">3. Go Live in 48 Hours</h3>
                <p className="text-gray-600">Start getting leads and bookings automatically. We manage the rest.</p>
              </div>
            </div>
          </div>
        </section>

        {/* INDUSTRY SOLUTIONS - PREMIUM CARD STYLE */}
        <section id="solutions" className="py-24 bg-slate-50"> {/* Background थोडा डार्क केला (slate-50) जेणेकरून व्हाईट कार्ड्स उठून दिसतील */}
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-6 ${gradientTextClass}`}>
                Tailored AI Agents for Your Industry
            </h2>
            <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12 text-lg">Pick your industry to see how Kewa works for you.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {INDUSTRIES.map((it) => (
                <motion.div 
                  key={it.id} 
                  whileHover={{ y: -8 }} 
                  className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl hover:shadow-2xl hover:border-blue-300 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                  onClick={() => setOpenIndustry(it)}
                >
                  {/* Subtle Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"></div>

                  <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-4xl border border-gray-100 shadow-inner group-hover:scale-110 transition-transform duration-300 relative z-10">
                      {it.emoji}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#2C6CF2] transition-colors relative z-10">
                      {it.name}
                  </h3>
                  
                  <p className="mt-3 text-base text-gray-600 leading-relaxed relative z-10">
                      {it.desc}
                  </p>
                  
                  <div className="mt-6 flex items-center gap-2 text-[#2C6CF2] font-bold text-sm group-hover:translate-x-2 transition-transform duration-300 relative z-10">
                    View Demo <span>→</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON: Old Way vs New Way */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-16 ${gradientTextClass}`}>
                Why Switch to Hikewa?
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Old Way Card */}
              <div className="p-10 rounded-3xl bg-red-50 border border-red-100 flex flex-col justify-center h-full">
                <h3 className="text-2xl font-bold text-red-900 flex items-center gap-3 mb-8">
                  ❌ The Old Way
                </h3>
                <ul className="space-y-6 text-red-800 font-medium text-lg">
                  <li className="flex gap-4 items-start">
                    <span className="text-2xl shrink-0">😰</span>
                    <span>Hiring expensive agencies ($2k+/mo)</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-2xl shrink-0">🧩</span>
                    <span>Stitching 5 different tools together</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-2xl shrink-0">📉</span>
                    <span>Missed calls & slow follow-ups</span>
                  </li>
                </ul>
              </div>

              {/* New Way Card */}
              <div className="p-10 rounded-3xl bg-[#2C6CF2] text-white shadow-2xl relative flex flex-col justify-center h-full">
                <div className="absolute top-6 right-6 bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase">
                  Hikewa DFY
                </div>
                <h3 className="text-2xl font-bold flex items-center gap-3 mb-8">
                  ✅ The Hikewa Way
                </h3>
                <ul className="space-y-6 text-white font-medium text-lg">
                  <li className="flex gap-4 items-start">
                    <span className="text-2xl shrink-0">🤖</span>
                    <span>AI Agent (Kewa) works 24/7</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-2xl shrink-0">⚡</span>
                    <span>All-in-one platform (No extra costs)</span>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="text-2xl shrink-0">🤝</span>
                    <span>We build it for you (48hr Setup)</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* 3. SOCIAL PROOF STRIP */}
        <section className="py-16 bg-slate-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <p className="text-sm text-[#2C6CF2] mb-10 font-extrabold tracking-widest uppercase">Proven Results For</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
                  <div className="text-4xl font-extrabold text-gray-900">30%</div>
                  <div className="text-sm font-medium text-gray-500 mt-2">Increase in Bookings</div>
                </div>
                <div className="p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
                  <div className="text-4xl font-extrabold text-gray-900">48hr</div>
                  <div className="text-sm font-medium text-gray-500 mt-2">Average Setup Time</div>
                </div>
                <div className="p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
                  <div className="text-4xl font-extrabold text-gray-900">24/7</div>
                  <div className="text-sm font-medium text-gray-500 mt-2">Automated Response</div>
                </div>
                <div className="p-4 rounded-2xl bg-white shadow-sm border border-gray-100">
                  <div className="text-4xl font-extrabold text-gray-900">Zero</div>
                  <div className="text-sm font-medium text-gray-500 mt-2">Tech Skills Needed</div>
                </div>
              </div>
            </div>
        </section>

        {/* FAQ + CTA */}
        <section className="max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-3xl font-bold mb-8 ${gradientTextClass}`}>Frequently Asked</h3>
              <div className="space-y-4">
                <details className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-md cursor-pointer transition-all hover:shadow-lg">
                  <summary className="font-bold text-gray-800 flex justify-between items-center list-none text-lg">
                    What is Kewa? 
                    <span className="transition group-open:rotate-180 text-[#2C6CF2]">▼</span>
                  </summary>
                  <div className="mt-4 text-gray-600 text-base leading-relaxed">Kewa is your AI business employee. Unlike a dumb chatbot, Kewa can write emails, check your calendar, book appointments, and follow up with leads automatically.</div>
                </details>
                <details className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-md cursor-pointer transition-all hover:shadow-lg">
                  <summary className="font-bold text-gray-800 flex justify-between items-center list-none text-lg">
                    How long does setup take?
                    <span className="transition group-open:rotate-180 text-[#2C6CF2]">▼</span>
                  </summary>
                  <div className="mt-4 text-gray-600 text-base leading-relaxed">We guarantee a 48-hour turnaround for our Done-For-You setup. Once you fill out the onboarding form, our team builds your system immediately.</div>
                </details>
                <details className="group bg-white p-6 rounded-2xl border border-gray-100 shadow-md cursor-pointer transition-all hover:shadow-lg">
                  <summary className="font-bold text-gray-800 flex justify-between items-center list-none text-lg">
                    Can I use my own CRM?
                    <span className="transition group-open:rotate-180 text-[#2C6CF2]">▼</span>
                  </summary>
                  <div className="mt-4 text-gray-600 text-base leading-relaxed">Yes! We integrate with HubSpot, Salesforce, Pipedrive, and more via API or Zapier. Or you can use Hikewa's built-in simple CRM.</div>
                </details>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] p-10 rounded-3xl text-white shadow-2xl shadow-blue-500/40 flex flex-col justify-center transform hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-3xl font-bold">Ready to automate?</h3>
              <p className="mt-4 text-white/90 text-lg leading-relaxed">Start your free trial or book a strategy call — no credit card required to chat.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#start" className="px-8 py-4 bg-white text-[#2C6CF2] rounded-xl font-bold text-center shadow-lg hover:bg-gray-50 transition-colors">Start Free Trial</a>
                <a href="/contact" className="px-8 py-4 border border-white/30 rounded-xl font-bold text-center hover:bg-white/10 transition-colors">Book Strategy Call</a>
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------------- */}
        {/* INDUSTRY DEMO MODAL (Updated) */}
        {/* ----------------------------- */}
        <AnimatePresence>
          {openIndustry && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} exit={{ opacity: 0 }} onClick={() => setOpenIndustry(null)} className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" />
              
              <motion.div 
                initial={{ y: 20, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 20, opacity: 0, scale: 0.95 }}
                className="relative z-50 w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
              >
                {/* Modal Header */}
                <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-3xl shadow-sm">{openIndustry.emoji}</div>
                    <div>
                      <div className="font-bold text-xl text-gray-900">{openIndustry.name}</div>
                      <div className="text-xs font-bold text-[#2C6CF2] uppercase tracking-wider">AI Agent Preview</div>
                    </div>
                  </div>
                  <button onClick={() => setOpenIndustry(null)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <X className="w-6 h-6 text-gray-400 hover:text-gray-700" />
                  </button>
                </div>

                <div className="p-8 grid md:grid-cols-2 gap-10">
                  {/* Left: Description */}
                  <div>
                    <h4 className="font-bold text-lg mb-3 text-gray-900">How Kewa helps {openIndustry.name}</h4>
                    <p className="text-gray-600 leading-relaxed mb-8">{openIndustry.desc}</p>
                    
                    <div className="bg-slate-50 p-5 rounded-2xl border border-blue-100 mb-8 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#2C6CF2]"></div>
                      <div className="text-xs font-bold text-[#2C6CF2] uppercase tracking-wider mb-2">Example Prompt</div>
                      <p className="text-sm font-mono text-gray-800 italic">"{openIndustry.examplePrompt}"</p>
                    </div>

                    <ul className="space-y-4 text-sm text-gray-700 font-medium">
                      <li className="flex gap-3 items-center"><div className="bg-green-100 p-1 rounded-full"><Check className="w-3 h-3 text-green-600"/></div> 24/7 Booking Agent</li>
                      <li className="flex gap-3 items-center"><div className="bg-green-100 p-1 rounded-full"><Check className="w-3 h-3 text-green-600"/></div> Instant Lead Follow-up</li>
                      <li className="flex gap-3 items-center"><div className="bg-green-100 p-1 rounded-full"><Check className="w-3 h-3 text-green-600"/></div> Done-For-You Setup</li>
                    </ul>
                  </div>

                  {/* Right: Visual Placeholder */}
                  <div className="bg-gray-900 rounded-2xl p-6 flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-inner">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] opacity-30 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    
                    <div className="text-center relative z-10 transform group-hover:scale-105 transition-transform duration-300">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center mx-auto mb-5 text-3xl shadow-lg">
                          ▶️
                        </div>
                        <p className="text-white font-bold text-lg">Watch {openIndustry.name} Demo</p>
                        <p className="text-white/70 text-sm mt-1">(1 min video)</p>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row gap-4 justify-end items-center">
                   <div className="text-sm text-gray-500 mr-auto hidden sm:block">
                      Need a custom solution? <a href="/contact" className="text-[#2C6CF2] font-semibold hover:underline">Let's chat.</a>
                   </div>
                   <a href="/demo" className="px-6 py-3 text-sm font-bold text-gray-600 hover:text-gray-900 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition shadow-sm">
                     Get Free Strategy Audit
                   </a>
                   <a href="/pricing" className="px-6 py-3 bg-[#2C6CF2] text-white rounded-xl text-sm font-bold hover:bg-blue-600 transition shadow-lg shadow-blue-200">
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