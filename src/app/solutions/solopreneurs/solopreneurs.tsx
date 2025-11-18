// src/app/solutions/solopreneurs/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Calendar, MessageCircle, Zap, Users, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button"; // if not present, replace with <a> or <button>

const whyLoveFeatures = [
  "No learning curve",
  "AI agent (Kewa) handles daily tasks",
  "Automations that follow-up for you",
  "Funnels ready to convert leads",
  "48-hour DFY setup",
  "Affordable pricing",
  "One platform replaces 8+ tools",
];

const whatYouGetItems = [
  {
    title: "AI Assistant That Works Like a Virtual Team Member",
    description: "Kewa writes emails, sends messages, books appointments, follows-up, and reminds you what to do.",
  },
  {
    title: "Ready-Made Funnels",
    description: "Just turn them ON. We install everything for you.",
  },
  {
    title: "Lead → Client Automations",
    description: "Never forget a follow-up again — automated nurture, reminders and re-engagement.",
  },
  {
    title: "Simple CRM & Booking",
    description: "Track pipelines, schedule bookings and manage clients without extra tools.",
  },
  {
    title: "Payment & Invoicing",
    description: "Connect Stripe, send invoices, and track paid/unpaid right from the dashboard.",
  },
];

const perfectForItems = [
  "Coaches",
  "Freelancers",
  "Consultants",
  "Fitness trainers",
  "Real estate solopreneurs",
  "Content creators",
];

const testimonials = [
  { quote: "Hikewa replaced 6 tools and cut my admin hours in half.", who: "— Priya, Coach" },
  { quote: "Kewa built my booking funnel overnight — bookings jumped 28%.", who: "— Mike, Photographer" },
  { quote: "DFY setup was seamless. I started taking payments in 48 hours.", who: "— Jenna, Consultant" },
];

const faqs = [
  { q: "How fast is setup?", a: "Most solopreneurs are live within 48 hours with our DFY package." },
  { q: "Do I need technical skills?", a: "No. Our DFY team configures everything; you focus on clients." },
  { q: "Can I keep my Gmail / Calendar?", a: "Yes — sync Gmail & Google Calendar, or use Hikewa’s built-in inbox." },
];

export default function SolopreneursPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 antialiased">
      {/* HERO */}
      <section className="pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <motion.h1
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold leading-tight"
            >
              Hikewa for Solopreneurs — Automate & Grow, Without Hiring
            </motion.h1>

            <motion.p
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.08, duration: 0.6 }}
              className="mt-6 text-lg text-gray-600 max-w-2xl"
            >
              Get an AI assistant (Kewa) + Done-For-You setup that builds funnels, sends follow-ups, manages bookings and recovers lost leads — so you can focus on serving clients.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.18 }} className="mt-8 flex gap-3 flex-wrap">
              <Button asChild className="rounded-full bg-gradient-to-r from-[#2C6CF2] to-[#7A4BFF] px-6 py-3 text-white font-semibold shadow-lg">
                <Link href="/start-free">Start Free — 7d</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-5 py-3">
                <Link href="/demo-solopreneur">See Demo</Link>
              </Button>
            </motion.div>

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#EFF6FF] flex items-center justify-center">🚀</div>
                <div>
                  <div className="font-medium">48-Hour DFY</div>
                  <div className="text-xs">We build your system, you go live.</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#FFF7FF] flex items-center justify-center">🤖</div>
                <div>
                  <div className="font-medium">Includes Kewa AI</div>
                  <div className="text-xs">Automations, copy & suggestions.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: dashboard mock */}
          <div className="lg:col-span-6">
            <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl">
              <div className="relative rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden">
                <div className="px-5 py-4 flex items-center justify-between bg-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#F3F8FF] to-white flex items-center justify-center">📈</div>
                    <div>
                      <div className="text-sm font-medium">Your Dashboard</div>
                      <div className="text-xs text-gray-400">Overview • Live</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">Synced • 3s</div>
                </div>

                <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <div className="rounded-lg bg-gradient-to-b from-white to-[#F8FAFF] border p-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-500">Leads</div>
                          <div className="text-2xl font-semibold">86</div>
                        </div>
                        <div className="text-xs text-green-600">+8% wk</div>
                      </div>

                      <div className="mt-4 h-28 bg-white rounded border flex items-center justify-center text-gray-300">Funnel preview</div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="p-3 bg-white rounded shadow-sm border">
                        <div className="text-xs text-gray-500">Bookings</div>
                        <div className="text-lg font-semibold">12</div>
                      </div>
                      <div className="p-3 bg-white rounded shadow-sm border">
                        <div className="text-xs text-gray-500">Tasks</div>
                        <div className="text-lg font-semibold">7</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="rounded-lg bg-white p-4 border shadow-sm">
                      <div className="text-xs text-gray-500">Kewa Suggestion</div>
                      <div className="mt-2 text-sm text-gray-700">Add a same-day follow-up for new leads — projected +20% replies.</div>
                      <div className="mt-3 flex gap-2">
                        <button className="px-3 py-2 bg-[#2C6CF2] text-white rounded text-sm">Apply</button>
                        <button className="px-3 py-2 border rounded text-sm">Preview</button>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-gray-50 rounded text-xs text-gray-600 border">
                      <div className="font-medium">Avg. Setup</div>
                      <div className="mt-1">48 hours • DFY</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t bg-gray-50">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7A4BFF] to-[#2C6CF2] flex items-center justify-center text-white">🤖</div>
                    <div className="flex-1">
                      <div className="rounded-lg bg-white border p-3 text-sm text-gray-700">Hi — I’m Kewa. Ask: “Create a re-engagement SMS for leads”</div>
                      <div className="mt-3 flex gap-2">
                        <input aria-label="kewa-input" placeholder="Ask Kewa to build something…" className="flex-1 rounded-md border px-3 py-2 text-sm" />
                        <button className="px-3 py-2 bg-[#2C6CF2] text-white rounded-md">Run</button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY LOVED */}
      <section className="mt-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2 initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-3xl font-bold text-center">Why solopreneurs choose Hikewa</motion.h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">Everything you need to run and scale your solo business from one simple dashboard.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyLoveFeatures.map((f) => (
            <motion.div key={f} whileHover={{ y: -6 }} className="p-6 bg-white rounded-lg border shadow-sm flex items-start gap-4">
              <div className="p-2 bg-[#F0FFF4] rounded"><Check className="text-green-500 h-5 w-5" /></div>
              <div>
                <h3 className="font-semibold">{f}</h3>
                <p className="text-sm text-gray-600 mt-1">Small detail that helps you every day.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="mt-12 max-w-6xl mx-auto px-6 lg:px-8">
        <motion.h3 initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-2xl font-bold text-center">What you get</motion.h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {whatYouGetItems.map((item) => (
            <motion.article key={item.title} whileHover={{ scale: 1.02 }} className="rounded-xl bg-white border p-6 shadow-sm">
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* PERFECT FOR */}
      <section className="mt-12 max-w-4xl mx-auto px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-center">Perfect for</h3>
        <ul className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
          {perfectForItems.map((p) => (
            <li key={p} className="flex items-start gap-3 bg-white border rounded-lg p-4">
              <Check className="h-6 w-6 text-green-500 mt-1" />
              <div>
                <div className="font-medium">{p}</div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* INTEGRATIONS */}
      <section className="mt-12 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="rounded-xl bg-gradient-to-r from-white to-gray-50 border p-6 flex items-center justify-between gap-6">
          <div>
            <h4 className="font-semibold">Connect instantly</h4>
            <p className="mt-1 text-sm text-gray-600">Google Calendar, Gmail, Facebook Leads, Instagram DM, Twilio SMS and Zapier — integrations that make your work flow.</p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            {["GCalendar","Gmail","FB","IG","Twilio","Zapier"].map((n)=>(
              <div key={n} className="px-3 py-2 bg-white rounded shadow text-sm">{n}</div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mt-12 max-w-7xl mx-auto px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-center">What our customers say</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div key={i} whileHover={{ y: -6 }} className="p-6 bg-white border rounded-lg shadow-sm">
              <p className="text-sm">{t.quote}</p>
              <div className="mt-3 text-xs text-gray-500">{t.who}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="mt-12 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-8 pb-20">
        <div>
          <h3 className="text-2xl font-semibold">Frequently asked</h3>
          <div className="mt-4 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="bg-white p-4 border rounded-lg">
                <summary className="font-medium cursor-pointer">{f.q}</summary>
                <div className="mt-2 text-gray-600">{f.a}</div>
              </details>
            ))}
          </div>
        </div>

        <aside className="rounded-2xl bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] p-8 text-white">
          <h3 className="text-2xl font-bold">Ready to grow solo?</h3>
          <p className="mt-2 text-white/90">Start your trial or book a quick 15-minute demo — we’ll show a ready funnel for your business.</p>
          <div className="mt-6 flex gap-3">
            <Button asChild className="bg-white text-[#2C6CF2] rounded-full px-4 py-3">
              <Link href="/start-free">Start Free</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-4 py-3 border-white text-white/95">
              <Link href="/demo-solopreneur">Book Demo</Link>
            </Button>
          </div>
        </aside>
      </section>
    </main>
  );
}
