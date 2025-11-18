// src/app/solutions/small-business/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Zap, Calendar, MessageCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  { title: "Save time", desc: "Automate follow-ups and bookings so you focus on customers.", icon: Zap },
  { title: "Increase bookings", desc: "Smart reminders and booking funnels reduce no-shows.", icon: Calendar },
  { title: "Better communication", desc: "Unified inbox: Email, SMS, IG/FB messages in one place.", icon: MessageCircle },
  { title: "Scale without hiring", desc: "DFY setups and templates let you deliver more with less.", icon: Users },
];

const features = [
  "48-hour DFY setup",
  "Kewa — AI agent included",
  "Google Calendar & Gmail sync",
  "SMS with Twilio",
  "FB/Instagram Lead capture",
  "Webhook & Zapier bridge",
];

const faqs = [
  { q: "How fast can you setup?", a: "Most small businesses are live within 48 hours with our DFY setup." },
  { q: "Do I need technical skills?", a: "No. Our DFY team handles setup; your team just uses the dashboard." },
  { q: "Can I keep my existing tools?", a: "Yes — you can sync leads to HubSpot/Sheets or keep everything inside Hikewa." },
];

export default function SmallBusinessSolutionPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* HERO */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <motion.h1 initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Hikewa for Small Businesses
            </motion.h1>
            <motion.p initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.08, duration: 0.5 }} className="mt-6 text-lg text-gray-600 max-w-xl">
              Save time, automate operations, and get more customers — without hiring a team. Kewa (our AI agent) builds funnels, writes follow-ups and runs your automations for you.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.16 }} className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-gradient-to-r from-[#2C6CF2] to-[#7A4BFF] text-white px-6 py-3 font-semibold shadow-lg">
                <Link href="/start-free">Start Free — 7d Trial</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-5 py-3">
                <Link href="/demo-smb">Book a Demo</Link>
              </Button>
            </motion.div>

            <div className="mt-6 flex gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#EFF6FF] flex items-center justify-center">🚀</div>
                <div>
                  <div className="font-medium">48-Hour DFY</div>
                  <div className="text-xs">We build everything — go live fast.</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#FFF7FF] flex items-center justify-center">🤖</div>
                <div>
                  <div className="font-medium">Includes Kewa AI</div>
                  <div className="text-xs">Automations, copy & insights.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: dashboard mock */}
          <div className="lg:col-span-6">
            <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="mx-auto max-w-2xl">
              <div className="relative rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden">
                <div className="px-5 py-4 flex items-center justify-between bg-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#F3F8FF] to-white flex items-center justify-center">📊</div>
                    <div>
                      <div className="text-sm font-medium">Hikewa Dashboard</div>
                      <div className="text-xs text-gray-400">Overview • Live</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">Synced • 4s</div>
                </div>

                <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <div className="rounded-lg bg-gradient-to-b from-white to-[#F8FAFF] border p-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-500">Leads</div>
                          <div className="text-2xl font-semibold">134</div>
                        </div>
                        <div className="text-xs text-green-600">+12% wk</div>
                      </div>

                      <div className="mt-4 h-28 bg-white rounded border flex items-center justify-center text-gray-300">Funnel preview</div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="p-3 bg-white rounded shadow-sm border">
                        <div className="text-xs text-gray-500">Appointments</div>
                        <div className="text-lg font-semibold">26</div>
                      </div>
                      <div className="p-3 bg-white rounded shadow-sm border">
                        <div className="text-xs text-gray-500">Tasks</div>
                        <div className="text-lg font-semibold">12</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="rounded-lg bg-white p-4 border shadow-sm">
                      <div className="text-xs text-gray-500">Kewa Suggestion</div>
                      <div className="mt-2 text-sm text-gray-700">Add 1-hour reminders to reduce no-shows — projected +14% bookings.</div>
                      <div className="mt-3 flex gap-2">
                        <button className="px-3 py-2 bg-[#2C6CF2] text-white rounded">Apply</button>
                        <button className="px-3 py-2 border rounded">Preview</button>
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
                      <div className="rounded-lg bg-white border p-3 text-sm text-gray-700">Hi — I’m Kewa. Try: “Create a booking funnel for a salon”.</div>
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

      {/* INTEGRATIONS STRIP */}
      <section className="mt-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 rounded-lg bg-white border shadow-sm flex items-center justify-between gap-6">
          <div className="flex items-center gap-4 overflow-x-auto">
            {["Google Calendar", "Gmail", "Facebook", "Instagram", "Twilio", "Zapier"].map((n) => (
              <motion.div key={n} whileHover={{ y: -4 }} className="flex items-center gap-3 bg-gray-50 px-3 py-2 rounded-lg">
                <div className="w-8 h-8 rounded bg-white flex items-center justify-center text-xs font-semibold">{n.split(" ")[0][0]}</div>
                <div className="text-xs text-gray-600">{n}</div>
              </motion.div>
            ))}
          </div>
          <div className="text-sm text-gray-500">Connect the tools you already use.</div>
        </div>
      </section>

      {/* BENEFITS GRID */}
      <section className="mt-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold">Everything small businesses need to grow</h2>
            <p className="mt-3 text-gray-600 max-w-xl">From booking to payments — Hikewa centralizes operations and lets Kewa handle the repetitive work so you can focus on customers.</p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <li key={b.title} className="flex gap-3 items-start bg-white p-4 rounded-lg border shadow-sm">
                    <div className="w-10 h-10 rounded-md bg-[#F3F8FF] flex items-center justify-center text-[#2C6CF2]"><Icon size={18} /></div>
                    <div>
                      <div className="font-semibold">{b.title}</div>
                      <div className="text-sm text-gray-600 mt-1">{b.desc}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-white to-[#FBFBFF] p-6 rounded-xl border shadow-sm">
            <h3 className="text-xl font-semibold">What's included</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check className="text-green-500 h-5 w-5 mt-1 flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <Button asChild className="w-full rounded-full bg-[#7A4BFF] text-white px-4 py-3">
                <Link href="/start-free">Start DFY Setup</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mt-12 max-w-7xl mx-auto px-6 lg:px-8">
        <h3 className="text-2xl font-semibold">What our customers say</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg border shadow-sm">
            <p className="text-sm">"Hikewa cut our no-shows by 40% — their DFY setup was flawless."</p>
            <div className="mt-3 text-xs text-gray-500">— Salon Owner</div>
          </div>
          <div className="p-4 bg-white rounded-lg border shadow-sm">
            <p className="text-sm">"Kewa writes better follow-ups than our previous agency."</p>
            <div className="mt-3 text-xs text-gray-500">— Gym Owner</div>
          </div>
          <div className="p-4 bg-white rounded-lg border shadow-sm">
            <p className="text-sm">"Easy to use and the automation increased bookings instantly."</p>
            <div className="mt-3 text-xs text-gray-500">— Local Clinic</div>
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="mt-12 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-8 pb-20">
        <div>
          <h3 className="text-2xl font-semibold">Frequently asked questions</h3>
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
          <h3 className="text-2xl font-bold">Ready to automate & grow?</h3>
          <p className="mt-2 text-white/90">Start your free trial or book a strategy call — we'll show how Hikewa reduces delivery time and increases revenue.</p>
          <div className="mt-6 flex gap-3">
            <Button asChild className="bg-white text-[#2C6CF2] rounded-full px-4 py-3">
              <Link href="/start-free">Start Free</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-4 py-3 border-white text-white/95">
              <Link href="/demo-smb">Book a Demo</Link>
            </Button>
          </div>
        </aside>
      </section>
    </main>
  );
}
