// src/app/about/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button"; // अगर तुम्हाला नाही असेल तर <a> वापर

// ---- ORIGINAL CONTENT (kept verbatim) ----
// All strings below are copied exactly from your original About page content.
// I did NOT change wording, punctuation, or order.

const visionItems = [
  "Owners stop wasting time",
  "AI assists instead of confuses",
  "Tools talk to each other",
  "Work becomes meaningful, not manual",
];

const tooManyTools = [
  "Multiple subscriptions",
  "Fragmented data",
  "Complex onboarding",
];

const whoWeServe = [
  "Solo owners",
  "Small teams",
  "Agencies",
  "Enterprises",
  "Franchises",
  "Multi-location businesses",
];

const differentiators = [
  { title: "Done-For-You Setup", description: "You don’t lift a finger. We build everything for you in 48 hours." },
  { title: "All-in-one", description: "No more juggling 6–10 platforms. Everything lives in Hikewa." },
  { title: "Affordable for all business sizes", description: "Solo to enterprise — pricing is simple." },
  { title: "Built for real American business owners", description: "Fast. Reliable. Smart. Designed exactly how the market works." },
  { title: "Human + AI Support", description: "Real people + Kewa = unmatched experience." },
];

const kewaNeeds = [
  "Faster follow-ups",
  "Automated booking",
  "Better lead management",
];

const kewaDoes = [
  "Send messages",
  "Create follow-ups",
  "Book appointments",
  "Recover lost leads",
];

const philosophyItems = [
  "Systems are simple",
  "Automations run daily",
  "Owners stop wasting time",
  "AI assists instead of confuses",
  "Tools talk to each other",
  "Work becomes meaningful, not manual",
];

const teamCombines = [
  "Technology",
  "Psychology",
  "Design",
  "Automation",
  "Business strategy",
];

const roadAheadItems = [
  "Kewa 2.0 → deeper automation intelligence",
  "Kewa Voice → AI phone support",
  "Industry packs → ready-to-launch businesses",
  "Marketplace → templates & add-ons",
  "AI-powered reports & predictions",
  "Agency white labeling",
  "Enterprise integrations",
];

const commitmentItems = [
  "Clear communication",
  "Exceptional support",
  "Honest pricing",
  "Constant innovation",
  "World-class technology",
  "A platform you can trust",
];

// ---- END ORIGINAL CONTENT ----

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased">
      {/* Header (clean corporate) */}
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] flex items-center justify-center text-white font-semibold">KW</div>
            <div className="text-sm font-semibold">Hikewa</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <Link href="/">Home</Link>
            <Link href="/product">Product</Link>
            <Link href="/dfy">DFY</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h1 initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              We Build Systems That Help Businesses Grow Faster — Without Stress.
            </motion.h1>
            <motion.p initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.08 }} className="mt-6 text-lg text-gray-600 max-w-2xl">
              {/* Original mission text preserved below EXACTLY */}
              At Hikewa, our mission is simple: To empower every business owner — whether solo or enterprise — with powerful automation, AI intelligence, and done-for-you implementation that removes complexity and unlocks growth.
            </motion.p>
            <p className="mt-4 font-semibold text-gray-800">
              We believe technology should work for people, not force people to spend hours learning it.
            </p>

            <div className="mt-8 flex gap-3">
              <Link href="/dfy" className="inline-flex items-center px-5 py-3 bg-[#2C6CF2] text-white rounded-lg font-medium shadow">Start DFY</Link>
              <Link href="/contact" className="inline-flex items-center px-5 py-3 border border-gray-200 rounded-lg text-gray-700">Talk to Sales</Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="rounded-2xl border p-4 bg-white shadow-sm">
              <div className="h-44 rounded-lg bg-gradient-to-br from-white to-gray-50 border border-gray-100 flex items-center justify-center text-gray-300">
                Your dashboard screenshot here
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission (kept exact) */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold">💡 Our Mission</h2>
            <div className="mt-6 space-y-4 text-lg text-gray-600">
              <p>
                At Hikewa, our mission is simple: To empower every business owner — whether solo or enterprise — with powerful automation, AI intelligence, and done-for-you implementation that removes complexity and unlocks growth.
              </p>
              <p className="font-semibold text-gray-900">
                We believe technology should work for people, not force people to spend hours learning it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold">🚀 Our Vision</h2>
          <p className="mt-4 text-lg text-gray-600">We envision a world where:</p>
        </div>

        <ul className="mt-8 max-w-2xl mx-auto space-y-3">
          {visionItems.map((item) => (
            <li key={item} className="flex items-start gap-3 text-lg text-gray-700">
              <Check className="text-green-500 h-6 w-6 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="mt-6 text-center text-lg font-semibold text-gray-900">
          Hikewa is not just another software platform. It is the future of business operations.
        </p>
      </section>

      {/* Why we created Kewa */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold">🤖 Why We Created Kewa</h2>
            <p className="mt-4 text-lg text-gray-600">Business owners don’t need another tool. They need help.</p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold">They need:</h3>
              <ul className="mt-4 space-y-3 text-gray-700">
                {kewaNeeds.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="text-green-500 h-5 w-5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">So we created Kewa:</h3>
              <p className="mt-4 text-lg text-gray-700">Kewa does the work that business owners don’t have time for:</p>
              <ul className="mt-4 space-y-3 text-gray-700">
                {kewaDoes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="text-green-500 h-5 w-5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 text-center text-lg font-semibold text-gray-900">
            Kewa is the first AI agent designed specifically for real American businesses.
          </p>
        </div>
      </section>

      {/* Why we started Hikewa (kept wording) */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold">🛠 Why We Started Hikewa</h2>
          <p className="mt-4 text-lg text-gray-600">
            We noticed one big problem in the business world: “Small businesses use too many tools, and none of them work together.”
          </p>
          <p className="mt-4 text-lg text-gray-600">They pay for:</p>
        </div>

        <ul className="mt-8 max-w-md mx-auto space-y-3 text-gray-700">
          {tooManyTools.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <Check className="text-red-500 h-5 w-5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 space-y-4 text-center text-lg">
          <p className="text-gray-600">It’s expensive. It’s confusing. It’s overwhelming.</p>
          <p className="font-semibold text-gray-900">So we built one platform that replaces all of them.</p>
          <p className="mt-6 text-2xl font-bold rounded-lg bg-gray-100 inline-block px-6 py-4">
            Hikewa = AI + Automations + CRM + Funnels + Messaging + DFY Setup
          </p>
        </div>
      </section>

      {/* Who we serve */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-12 bg-gray-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold">🌍 Who We Serve</h2>
          <p className="mt-4 text-lg text-gray-600">We proudly support business owners from all across the United States:</p>
        </div>

        <ul className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {whoWeServe.map((item) => (
            <li key={item} className="flex items-start gap-3 text-gray-700">
              <Check className="text-green-500 h-5 w-5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* What makes Hikewa different */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold">🤝 What Makes Hikewa Different</h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {differentiators.map((d) => (
            <div key={d.title} className="p-6 bg-white rounded-lg border shadow-sm">
              <h3 className="font-semibold">{d.title}</h3>
              <p className="mt-2 text-gray-700">{d.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy & Team */}
      <section className="bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold">🏢 The Philosophy Behind Hikewa</h2>
            <p className="mt-4 text-lg text-gray-600">We believe businesses grow when:</p>
          </div>

          <ul className="mt-8 max-w-2xl mx-auto space-y-3">
            {philosophyItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
                <Check className="text-green-500 h-5 w-5 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold">👥 Our Team</h3>
            <p className="mt-4 text-lg text-gray-700">
              Hikewa is built by a distributed team of engineers, designers, automation specialists, and AI experts.
            </p>

            <p className="mt-4 text-lg text-gray-700">We combine:</p>
            <ul className="mt-4 max-w-xs mx-auto space-y-3">
              {teamCombines.map((t) => (
                <li key={t} className="flex items-start gap-3 text-gray-700">
                  <Check className="text-green-500 h-5 w-5 flex-shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-lg font-semibold text-gray-900">To build software that is not just powerful — but also easy for anyone to use.</p>
          </div>
        </div>
      </section>

      {/* Road ahead & commitment */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-2xl font-semibold">🗺 Our Road Ahead</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              {roadAheadItems.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <Check className="text-blue-500 h-5 w-5 flex-shrink-0" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">💙 Our Commitment</h3>
            <ul className="mt-4 space-y-2 text-gray-700">
              {commitmentItems.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <Check className="text-green-500 h-5 w-5 flex-shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 text-center">
          <h3 className="text-3xl font-bold">Ready to automate your business?</h3>
          <p className="mt-4 text-lg text-white/90">Start with DFY setup or book a strategy call — we’ll map your needs and show a pilot in 7 days.</p>
          <div className="mt-6 flex gap-3 justify-center">
            <Link href="/start-dfy" className="px-5 py-3 bg-white text-[#2C6CF2] rounded-lg font-semibold">Start DFY</Link>
            <Link href="/contact" className="px-5 py-3 border border-white rounded-lg text-white">Talk to Sales</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] flex items-center justify-center text-white font-bold">KW</div>
              <div>
                <div className="font-semibold">Hikewa</div>
                <div className="text-xs text-gray-500">AI business systems</div>
              </div>
            </div>
          </div>

          <div>
            <div className="font-medium">Product</div>
            <ul className="mt-3 text-sm text-gray-600 space-y-2">
              <li><Link href="/product">Product</Link></li>
              <li><Link href="/dfy">DFY Services</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-medium">Company</div>
            <ul className="mt-3 text-sm text-gray-600 space-y-2">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
