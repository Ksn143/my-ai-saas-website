// src/app/features/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Check,
  Settings,
  Zap,
  Calendar,
  Phone,
  Database,
  Layers,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button"; // if you don't have this component, replace with <a> or <button>

const featureList = [
  {
    icon: Settings,
    title: "Automations Engine",
    desc: "Create trigger-based workflows, conditional logic, delays and actions — or have Kewa build them for you.",
  },
  {
    icon: Zap,
    title: "Messaging Suite",
    desc: "Email, SMS, and social DM unified inbox with templates, personalization and AI-generated copy.",
  },
  {
    icon: Calendar,
    title: "Calendar & Booking",
    desc: "Smart booking rules, availability mapping and reminders to reduce no-shows.",
  },
  {
    icon: Database,
    title: "Unified CRM",
    desc: "Contacts, tags, pipelines and custom fields designed for lead-to-cash workflows.",
  },
  {
    icon: Layers,
    title: "Funnels & Pages",
    desc: "High-converting funnel templates that we install as part of DFY packages.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    desc: "Role-based access, audit logs, SSO & enterprise-grade controls.",
  },
];

const workflowSteps = [
  { icon: Layers, title: "Design Funnels", desc: "Pick a template or custom design for landing, booking, checkout." },
  { icon: Zap, title: "Automate Workflows", desc: "Trigger follow-ups, reminders, and revenue recovery flows." },
  { icon: Database, title: "Centralize Data", desc: "Keep leads, payments and client records in one place." },
  { icon: Calendar, title: "Book & Confirm", desc: "Smart reminders and calendar sync to reduce no-shows." },
];

const packs = [
  { title: "Starter Pack", price: "$499", bullets: ["1 Funnel", "CRM setup", "3 Automations", "1 training"] },
  { title: "Growth Pack", price: "$1,299", bullets: ["Unlimited Funnels", "5 Automations", "SMS + Email", "Monthly check-in"], popular: true },
  { title: "Agency Pack", price: "Custom", bullets: ["White-label", "Multi-client", "Dedicated manager", "SLA & onboarding"] },
];

const integrations = ["Google Calendar", "Gmail", "Facebook", "Instagram", "Twilio", "Zapier", "Stripe", "Slack"];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 antialiased">
      {/* HERO */}
      <section className="pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h1 initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Features designed to automate growth — built around Kewa, your AI agent.
            </motion.h1>

            <motion.p initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.08 }} className="mt-6 text-lg text-gray-600 max-w-2xl">
              From funnels and automations to messaging and billing — Hikewa brings the tools, templates and DFY delivery so you can scale faster without hiring more staff.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.16 }} className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-gradient-to-r from-[#2C6CF2] to-[#7A4BFF] px-6 py-3 text-white font-semibold shadow-lg">
                <Link href="/start-free">Start Free — 7d Trial</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-5 py-3">
                <Link href="/demo">Book a Demo</Link>
              </Button>
            </motion.div>

            <div className="mt-6 flex gap-6 items-center text-sm text-gray-500">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#EFF6FF] flex items-center justify-center">🤖</div>
                <div>
                  <div className="font-medium">Kewa AI</div>
                  <div className="text-xs">Writes funnels, sequences, and automation rules — you approve and run.</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#FFF7FF] flex items-center justify-center">⚡</div>
                <div>
                  <div className="font-medium">48-Hour DFY</div>
                  <div className="text-xs">Pick a pack and go live quickly with our DFY team.</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Live Kewa preview / product mock */}
          <div className="lg:col-span-5">
            <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="mx-auto max-w-md">
              <div className="relative rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden">
                <div className="px-5 py-4 flex items-center justify-between bg-white">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-md bg-gradient-to-br from-[#F3F8FF] to-white flex items-center justify-center">📊</div>
                    <div>
                      <div className="text-sm font-medium">Feature Explorer</div>
                      <div className="text-xs text-gray-400">Interactive preview</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">Live</div>
                </div>

                <div className="p-5">
                  <div className="rounded-lg bg-gradient-to-b from-white to-[#F8FAFF] border p-4 shadow-sm">
                    <div className="text-xs text-gray-500">Top Feature</div>
                    <div className="text-lg font-semibold mt-1">Automations Builder</div>
                    <div className="mt-3 h-28 bg-white rounded border flex items-center justify-center text-gray-300">Visual Flow Preview</div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="p-3 bg-white rounded shadow-sm border">
                      <div className="text-xs text-gray-500">Integrations</div>
                      <div className="text-lg font-semibold">100+</div>
                    </div>
                    <div className="p-3 bg-white rounded shadow-sm border">
                      <div className="text-xs text-gray-500">Avg Setup</div>
                      <div className="text-lg font-semibold">48h</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t bg-gray-50">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7A4BFF] to-[#2C6CF2] flex items-center justify-center text-white">🤖</div>
                    <div className="flex-1">
                      <div className="rounded-lg bg-white border p-3 text-sm text-gray-700">Kewa: "Suggested sequence: Welcome → Day1 Reminder → Nurture (3 emails)".</div>
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
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-10">
        <motion.h2 initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-3xl font-bold text-center">Core features — built for speed & scale</motion.h2>
        <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">Everything you need to acquire, engage, and retain customers — without stitching multiple tools together.</p>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
          hidden: {},
          visible: {},
        }} className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureList.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.article
                key={f.title}
                whileHover={{ y: -6 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.45 }}
                className="p-6 bg-white rounded-lg border shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#F3F8FF] to-white flex items-center justify-center text-[#2C6CF2]">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{f.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
                    <div className="mt-4 text-sm">
                      <Link href="/product" className="text-[#2C6CF2] font-medium">Learn more →</Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      {/* WORKFLOW VISUAL */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <div className="rounded-2xl bg-gradient-to-r from-white to-gray-50 border p-8 shadow">
          <h3 className="text-2xl font-semibold text-center">Typical workflow — from ad to appointment</h3>
          <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">Set up once, optimize forever. Or let Kewa design a workflow for your industry pack.</p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }} className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            {workflowSteps.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div key={s.title} whileHover={{ scale: 1.02 }} className="p-4 bg-white border rounded-lg text-center">
                  <div className="mx-auto w-12 h-12 rounded-md bg-[#F3F8FF] flex items-center justify-center text-[#2C6CF2]">
                    <Icon size={20} />
                  </div>
                  <div className="font-semibold mt-3">{s.title}</div>
                  <div className="text-sm text-gray-600 mt-2">{s.desc}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* PACKS / PRICING HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <h3 className="text-2xl font-semibold text-center">Industry Packs & DFY options</h3>
        <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">Pick a pack and our DFY team will implement it — funnels, automations, reminders, payments and training included.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {packs.map((p, idx) => (
            <motion.div key={p.title} whileHover={{ y: -6 }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 * idx }} className={`relative p-6 rounded-2xl border bg-white shadow ${p.popular ? "ring-2 ring-[#7A4BFF]" : ""}`}>
              {p.popular && <div className="absolute left-6 -top-4 bg-[#7A4BFF] text-white px-3 py-1 rounded-full text-xs font-semibold">Popular</div>}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-bold">{p.title}</h4>
                  <div className="text-sm text-gray-500">{p.price}</div>
                </div>
                <div className="text-sm text-gray-400">DFY</div>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-green-500 mt-1" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Button asChild className="w-full rounded-full bg-gradient-to-r from-[#2C6CF2] to-[#7A4BFF] text-white py-3 font-semibold">
                  <Link href={p.title === "Agency Pack" ? "/contact" : "/start-dfy"}>{p.title === "Agency Pack" ? "Talk to Sales" : "Start DFY"}</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <div className="rounded-2xl bg-white border p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold">Integrations</h4>
            <div className="text-sm text-gray-500">Connect the tools you already use</div>
          </div>

          <div className="mt-4 flex items-center gap-3 overflow-x-auto py-3">
            {integrations.map((n) => (
              <motion.div key={n} whileHover={{ y: -6 }} className="flex items-center gap-3 bg-gray-50 px-3 py-2 rounded-lg border">
                <div className="w-8 h-8 rounded bg-white flex items-center justify-center text-xs font-semibold">{n.split(" ")[0][0]}</div>
                <div className="text-sm text-gray-600">{n}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <h4 className="text-2xl font-semibold">Frequently asked about features</h4>
            <p className="text-sm text-gray-600 mt-2">Short answers for common questions about automations, DFY and Kewa.</p>

            <div className="mt-4 space-y-3">
              <details className="bg-white p-4 border rounded-lg">
                <summary className="font-medium cursor-pointer">Can Kewa build automations for my industry?</summary>
                <div className="mt-2 text-gray-600">Yes — we maintain industry packs and Kewa can generate rules, sequences and copy tailored to your vertical.</div>
              </details>

              <details className="bg-white p-4 border rounded-lg">
                <summary className="font-medium cursor-pointer">Do integrations cost extra?</summary>
                <div className="mt-2 text-gray-600">Most standard integrations are included. Enterprise-level integrations (custom APIs, SSO) may be scoped separately.</div>
              </details>

              <details className="bg-white p-4 border rounded-lg">
                <summary className="font-medium cursor-pointer">How does DFY work with my team?</summary>
                <div className="mt-2 text-gray-600">We run a short intake, request access, build and QA the system, then handover with training. We can also manage monthly DFY tasks.</div>
              </details>
            </div>
          </div>

          <aside className="rounded-2xl bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] p-8 text-white">
            <h4 className="text-2xl font-bold">Want a walkthrough?</h4>
            <p className="mt-2 text-white/90">Book a demo and we’ll show the exact flows for your business — or request a DFY pack and go live in 48 hours.</p>
            <div className="mt-6 flex gap-3">
              <Button asChild className="bg-white text-[#2C6CF2] rounded-full px-4 py-3">
                <Link href="/demo">Book Demo</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-4 py-3 border-white text-white/95">
                <Link href="/start-dfy">Start DFY</Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 pb-16">
        <div className="rounded-2xl bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] p-10 text-white shadow-xl">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-3xl font-extrabold">Everything you need to automate growth</h3>
              <p className="mt-2 text-white/90">Start with a free trial or schedule a strategy call — we’ll recommend the perfect pack for your industry.</p>
            </div>
            <div className="flex gap-3 justify-end">
              <Link href="/start-free" className="px-6 py-3 rounded-full bg-white text-[#2C6CF2] font-semibold">Start Free</Link>
              <Link href="/contact" className="px-6 py-3 rounded-full border border-white text-white">Contact Sales</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
