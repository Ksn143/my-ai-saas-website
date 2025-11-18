// src/app/product/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Settings, Smartphone, Database, BarChart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button"; // replace if you don't have

const features = [
  {
    title: "Unified CRM",
    body: "Contacts, pipelines and tags built for small businesses and agencies — no extra tools needed.",
    icon: Database,
  },
  {
    title: "Automations Engine",
    body: "Trigger-based flows, conditional logic, delays and actions — or let Kewa build them for you.",
    icon: Settings,
  },
  {
    title: "Funnels & Pages",
    body: "High-converting funnel templates with DFY installation — publish and start running ads.",
    icon: Smartphone,
  },
  {
    title: "Messaging Suite",
    body: "Email, SMS and social inbox in one place with templates and AI personalization.",
    icon: Zap,
  },
  {
    title: "Dashboard & Analytics",
    body: "Real-time metrics, conversion tracking, and AI insights to optimize performance.",
    icon: BarChart,
  },
];

const sections = [
  { title: "All-in-one", text: "Run CRM, Funnels, Messaging, Booking and Automation from one dashboard." },
  { title: "AI-first", text: "Kewa writes copy, builds workflows and suggests improvements — like a cofounder." },
  { title: "DFY-ready", text: "Pick an industry pack and our team configures everything in 48 hours." },
];

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 antialiased text-gray-900">
      {/* HERO */}
      <section className="pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <motion.h1 initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl font-extrabold leading-tight">
              The all-in-one business platform — built around an AI agent.
            </motion.h1>
            <motion.p initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.08, duration: 0.6 }} className="mt-6 text-lg text-gray-600 max-w-2xl">
              Hikewa brings CRM, automations, funnels, messaging and AI together — so you can automate growth, deliver DFY systems, and run your business from a single dashboard.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.16 }} className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-gradient-to-r from-[#2C6CF2] to-[#7A4BFF] px-6 py-3 text-white font-semibold shadow-lg">
                <Link href="/start-free">Start Free — 7d Trial</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-5 py-3">
                <Link href="/demo">Book a Demo</Link>
              </Button>
            </motion.div>

            <div className="mt-6 flex gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#EFF6FF] flex items-center justify-center">🤖</div>
                <div>
                  <div className="font-medium">Kewa — AI Agent</div>
                  <div className="text-xs">Write copy, build flows, and optimize automatically.</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#FFF7FF] flex items-center justify-center">⚡</div>
                <div>
                  <div className="font-medium">48-Hour DFY</div>
                  <div className="text-xs">We set up funnels, automations & booking — fast.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mockup */}
          <div className="lg:col-span-6">
            <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl">
              <div className="relative rounded-2xl bg-white border border-gray-100 shadow-2xl overflow-hidden">
                <div className="px-6 py-4 flex items-center justify-between bg-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#F3F8FF] to-white flex items-center justify-center">📊</div>
                    <div>
                      <div className="text-sm font-medium">Hikewa Product</div>
                      <div className="text-xs text-gray-400">Realtime • AI-driven</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">Connected</div>
                </div>

                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <div className="rounded-lg bg-gradient-to-b from-white to-[#F8FAFF] border p-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-500">Leads</div>
                          <div className="text-2xl font-semibold">218</div>
                        </div>
                        <div className="text-xs text-green-600">+14% wk</div>
                      </div>

                      <div className="mt-4 h-28 bg-white rounded border flex items-center justify-center text-gray-300">Funnel preview</div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="p-3 bg-white rounded shadow-sm border">
                        <div className="text-xs text-gray-500">Appointments</div>
                        <div className="text-lg font-semibold">45</div>
                      </div>
                      <div className="p-3 bg-white rounded shadow-sm border">
                        <div className="text-xs text-gray-500">Automations</div>
                        <div className="text-lg font-semibold">82</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="rounded-lg bg-white p-4 border shadow-sm">
                      <div className="text-xs text-gray-500">Kewa Suggestion</div>
                      <div className="mt-2 text-sm text-gray-700">Add a same-day SMS follow-up to new inbound leads — expected +20% replies.</div>
                      <div className="mt-3 flex gap-2">
                        <button className="px-3 py-2 bg-[#2C6CF2] text-white rounded text-sm">Apply</button>
                        <button className="px-3 py-2 border rounded text-sm">Preview</button>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-gray-50 rounded text-xs text-gray-600 border">
                      <div className="font-medium">DFY</div>
                      <div className="mt-1">48-hour full install available</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t bg-gray-50">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7A4BFF] to-[#2C6CF2] flex items-center justify-center text-white">🤖</div>
                    <div className="flex-1">
                      <div className="rounded-lg bg-white border p-3 text-sm text-gray-700">Ask Kewa: “Draft a 3-step welcome sequence for new leads.”</div>
                      <div className="mt-3 flex gap-2">
                        <input aria-label="kewa-input" placeholder="Ask Kewa…" className="flex-1 rounded-md border px-3 py-2 text-sm" />
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

      {/* FEATURES GRID */}
      <section className="mt-12 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2 initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-3xl font-bold text-center">Product features</motion.h2>
        <p className="mt-2 text-center text-gray-600 max-w-2xl mx-auto">Everything you need to run and grow — designed for speed and scale.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title} whileHover={{ y: -6 }} className="p-6 bg-white rounded-lg border shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#F3F8FF] to-white flex items-center justify-center text-[#2C6CF2]">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{f.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{f.body}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SECTIONS / BENEFITS */}
      <section className="mt-12 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-white to-gray-50 border p-8 shadow">
          <div className="grid md:grid-cols-3 gap-6">
            {sections.map((s) => (
              <div key={s.title} className="p-4">
                <h4 className="font-semibold">{s.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="mt-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 bg-white rounded-lg border shadow-sm flex items-center justify-between gap-6">
          <div className="flex items-center gap-4 overflow-x-auto">
            {["Google Calendar","Gmail","Outlook","Facebook","Instagram","Twilio","Zapier","Stripe"].map((name) => (
              <motion.div key={name} whileHover={{ y: -6 }} className="flex items-center gap-3 bg-gray-50 px-3 py-2 rounded-lg">
                <div className="w-8 h-8 rounded bg-white flex items-center justify-center text-xs font-semibold">{name.split(" ")[0][0]}</div>
                <div className="text-xs text-gray-600">{name}</div>
              </motion.div>
            ))}
          </div>
          <div className="text-sm text-gray-500">Works with your favorite tools.</div>
        </div>
      </section>

      {/* PRICING CTA */}
      <section className="mt-12 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] p-10 text-white shadow-xl grid md:grid-cols-2 gap-4 items-center">
          <div>
            <h3 className="text-2xl font-bold">Transparent Pricing. No surprises.</h3>
            <p className="mt-2 text-white/90">All plans include Kewa and DFY options — scale when you’re ready.</p>
          </div>
          <div className="flex gap-3 justify-end">
            <Link href="/pricing" className="px-5 py-3 bg-white text-[#2C6CF2] rounded-lg font-semibold">See Pricing</Link>
            <Link href="/start-free" className="px-5 py-3 border border-white rounded-lg text-white">Start Free</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12 max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <h3 className="text-2xl font-bold text-center">Frequently asked</h3>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <details className="bg-white p-4 border rounded-lg">
            <summary className="font-medium cursor-pointer">How does Kewa integrate with my tools?</summary>
            <div className="mt-2 text-gray-600">Kewa uses APIs, webhooks and native integrations (Google, Facebook, Twilio etc.). We also support Zapier & Make for extended connections.</div>
          </details>
          <details className="bg-white p-4 border rounded-lg">
            <summary className="font-medium cursor-pointer">What is included in DFY?</summary>
            <div className="mt-2 text-gray-600">DFY includes full funnel and automation setup, calendar & payment linking, and a short training session for your team.</div>
          </details>
        </div>
      </section>

      {/* FINAL CTA + FOOTER */}
      <section className="mt-12 max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        <div className="rounded-2xl bg-white border p-8 shadow">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold">Ready to simplify operations with AI?</h3>
              <p className="mt-2 text-gray-600">Start your free trial or book a demo and we’ll show a DFY funnel in under 48 hours.</p>
            </div>
            <div className="flex gap-3 justify-end">
              <Link href="/start-free" className="px-5 py-3 bg-[#2C6CF2] text-white rounded-lg font-semibold">Start Free</Link>
              <Link href="/demo" className="px-5 py-3 border rounded-lg">Book Demo</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] flex items-center justify-center text-white font-bold">KW</div>
              <div>
                <div className="font-semibold">Hikewa</div>
                <div className="text-xs text-gray-500">AI-powered business OS</div>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <div>
              <div className="font-medium">Product</div>
              <ul className="mt-3 text-sm text-gray-600 space-y-2">
                <li>CRM</li>
                <li>Automations</li>
                <li>Funnels</li>
                <li>Kewa</li>
              </ul>
            </div>

            <div>
              <div className="font-medium">Company</div>
              <ul className="mt-3 text-sm text-gray-600 space-y-2">
                <li>About</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="font-medium">Legal</div>
            <ul className="mt-3 text-sm text-gray-600 space-y-2">
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
