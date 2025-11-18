// src/app/dfy/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Clock, Settings, Users, Zap, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button"; // replace with <a> if you don't have this

const packages = [
  {
    id: "starter",
    name: "48-Hour Launch",
    price: "$499",
    bullets: [
      "Industry pack install",
      "1 Funnel (landing + booking)",
      "CRM & calendar sync",
      "3-email sequence",
      "Basic Kewa scripts",
    ],
    cta: "Get 48-Hour Launch",
  },
  {
    id: "growth",
    name: "Growth Package",
    price: "$1,299",
    bullets: [
      "Everything in 48-Hour",
      "Advanced automations (5)",
      "SMS + Email sequences",
      "Facebook Lead sync",
      "2 hours training",
    ],
    popular: true,
    cta: "Start Growth",
  },
  {
    id: "agency",
    name: "Agency / Enterprise",
    price: "Custom",
    bullets: [
      "White-label option",
      "Multi-location & multi-workspace",
      "Dedicated success manager",
      "Custom integrations & SSO",
      "Monthly DFY management",
    ],
    cta: "Talk to Sales",
  },
];

const addons = [
  { title: "WhatsApp Integration (Meta API)", price: "$99/mo" },
  { title: "HubSpot / Salesforce Sync", price: "$79/mo" },
  { title: "Migration from other platforms", price: "One-time $599+" },
  { title: "Monthly DFY Management", price: "$499/mo" },
];

const faqs = [
  { q: "How is 48-Hour possible?", a: "We use industry packs + prebuilt templates. After intake & access, our DFY team configures and tests your funnel, automations & calendar in 48 hours for single-location setups." },
  { q: "What access do you need?", a: "We typically need domain access (optional), Google/Email access for sending, calendar access, and any ad account access for lead integrations. Each project has a short intake form." },
  { q: "Do you migrate existing data?", a: "Yes — migrations are supported. Complex migrations are scoped separately and priced accordingly." },
];

export default function DfyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 antialiased">
      {/* HERO */}
      <section className="pt-28 pb-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h1 initial={{ y: 12, opacity: 0 }} animate={{ y:0, opacity:1 }} transition={{ duration:0.6 }} className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Done-For-You business systems — built & launched in 48 hours.
            </motion.h1>
            <motion.p initial={{ y:8, opacity:0 }} animate={{ y:0, opacity:1 }} transition={{ delay:0.08 }} className="mt-6 text-lg text-gray-600 max-w-2xl">
              We deliver funnels, automations, CRM setup and Kewa AI scripts so you can start converting customers immediately — no tech headaches, no delays.
            </motion.p>

            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.16 }} className="mt-8 flex gap-3">
              <Button asChild className="rounded-full bg-gradient-to-r from-[#2C6CF2] to-[#7A4BFF] px-6 py-3 text-white font-semibold shadow-lg">
                <Link href="/start-dfy">Start DFY Setup</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-5 py-3">
                <Link href="/dfy-pricing">See Packages</Link>
              </Button>
            </motion.div>

            <div className="mt-6 flex gap-6 items-center text-sm text-gray-500">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#EFF6FF] flex items-center justify-center">⏱️</div>
                <div>
                  <div className="font-medium">Fast Turnaround</div>
                  <div className="text-xs">Most single-location setups live in 48 hours.</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#FFF7FF] flex items-center justify-center">🔧</div>
                <div>
                  <div className="font-medium">Hands-On Team</div>
                  <div className="text-xs">Experienced DFY engineers & copywriters.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - visual / workflow */}
          <div className="lg:col-span-5">
            <motion.div initial={{ scale:0.98, opacity:0 }} animate={{ scale:1, opacity:1 }} transition={{ duration:0.6 }} className="rounded-2xl bg-white border shadow-lg p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">DFY Preview</div>
                  <div className="text-xl font-semibold">Launch Funnel • Automations • Calendar</div>
                </div>
                <div className="text-xs text-gray-400">Ready</div>
              </div>

              <div className="mt-4 space-y-3">
                <div className="p-3 bg-gray-50 rounded flex items-start gap-3">
                  <div className="bg-white rounded p-2 border"><Clock className="h-5 w-5 text-[#2C6CF2]" /></div>
                  <div>
                    <div className="text-sm font-medium">48-Hour Workflow</div>
                    <div className="text-xs text-gray-600">Intake → Build → Test → Launch</div>
                  </div>
                </div>

                <div className="p-3 bg-gray-50 rounded flex items-start gap-3">
                  <div className="bg-white rounded p-2 border"><Settings className="h-5 w-5 text-[#7A4BFF]" /></div>
                  <div>
                    <div className="text-sm font-medium">Customizations</div>
                    <div className="text-xs text-gray-600">Branding, domain, email sender, rules.</div>
                  </div>
                </div>

                <div className="p-3 bg-gray-50 rounded flex items-start gap-3">
                  <div className="bg-white rounded p-2 border"><Users className="h-5 w-5 text-[#2C6CF2]" /></div>
                  <div>
                    <div className="text-sm font-medium">Training</div>
                    <div className="text-xs text-gray-600">Short walk-through & playbook for your team.</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-gradient-to-r from-white to-gray-50 rounded border">
                <div className="text-sm font-medium">Satisfaction Guarantee</div>
                <div className="text-xs text-gray-600 mt-1">If you’re not satisfied in the first 7 days, we’ll fix it or refund.</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 mt-8">
        <h2 className="text-3xl font-bold text-center">DFY Packages</h2>
        <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">Choose the package that fits your stage. Add-ons available for integrations, messaging and migrations.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <motion.div key={p.id} whileHover={{ y:-6 }} className={`p-6 rounded-2xl border bg-white shadow ${p.popular ? "ring-2 ring-[#7A4BFF]" : ""}`}>
              {p.popular && <div className="absolute -mt-16 ml-6 bg-[#7A4BFF] text-white px-3 py-1 rounded-full text-xs font-semibold">Popular</div>}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="text-sm text-gray-500 mt-1">{p.price}</div>

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
                  <Link href={p.id === "agency" ? "/contact" : "/start-dfy"}>{p.cta}</Link>
                </Button>
              </div>

              <div className="mt-4 text-xs text-gray-500">Need custom scope? <Link href="/contact" className="text-[#2C6CF2]">Contact sales</Link></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 mt-12">
        <div className="rounded-2xl bg-white border p-8 shadow">
          <h3 className="text-2xl font-semibold">What’s included in a DFY project</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold">Setup & Configuration</h4>
              <ul className="mt-3 text-sm space-y-2 text-gray-700">
                <li>• Intake & strategy call</li>
                <li>• Funnel & page publish</li>
                <li>• CRM fields & pipeline setup</li>
                <li>• Calendar & booking rules</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold">Content & Sequences</h4>
              <ul className="mt-3 text-sm space-y-2 text-gray-700">
                <li>• 5-email nurture sequence</li>
                <li>• SMS reminders & templates</li>
                <li>• Landing page copy (AI-assisted)</li>
                <li>• Kewa-generated follow-ups</li>
              </ul>
            </div>

            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold">Testing & Handover</h4>
              <ul className="mt-3 text-sm space-y-2 text-gray-700">
                <li>• End-to-end QA</li>
                <li>• Tracking & analytics setup</li>
                <li>• 30-min training session</li>
                <li>• Handover checklist & playbook</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 mt-12">
        <h3 className="text-2xl font-semibold text-center">Popular Add-Ons</h3>
        <div className="mt-6 grid md:grid-cols-4 gap-4">
          {addons.map(a => (
            <div key={a.title} className="p-4 bg-white rounded-lg border shadow-sm flex flex-col">
              <div className="text-sm font-medium">{a.title}</div>
              <div className="mt-2 text-xs text-gray-600">{a.price}</div>
              <div className="mt-4"><Link href="/contact" className="text-[#2C6CF2] text-sm">Request Add-On</Link></div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS / OUTCOMES */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 mt-12">
        <h3 className="text-2xl font-semibold text-center">Results clients see after DFY</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-white border rounded-lg shadow-sm">
            <div className="text-lg font-semibold">+32% Booking Conversions</div>
            <div className="mt-2 text-sm text-gray-600">Funnel & timely reminders recovered lost leads and improved show rates.</div>
          </div>
          <div className="p-4 bg-white border rounded-lg shadow-sm">
            <div className="text-lg font-semibold">70% Faster Delivery</div>
            <div className="mt-2 text-sm text-gray-600">DFY templates cut setup time and consistent delivery across clients.</div>
          </div>
          <div className="p-4 bg-white border rounded-lg shadow-sm">
            <div className="text-lg font-semibold">Higher Retention</div>
            <div className="mt-2 text-sm text-gray-600">Automations & onboarding sequences improved customer retention by double digits.</div>
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 mt-12">
        <div className="rounded-2xl bg-gradient-to-r from-white to-gray-50 border p-6 shadow">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <ShieldCheck className="h-8 w-8 text-[#2C6CF2]" />
              <div>
                <div className="font-semibold">48-Hour Setup Guarantee</div>
                <div className="text-sm text-gray-600">Single-location projects live in 48 hours or your next month is free.</div>
              </div>
            </div>

            <div>
              <div className="font-semibold">30-Day Money-Back</div>
              <div className="text-sm text-gray-600">If DFY results don’t meet the scope, we’ll refund.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 mt-12 pb-20 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold">Frequently asked</h3>
          <div className="mt-4 space-y-3">
            {faqs.map(f => (
              <details key={f.q} className="bg-white p-4 border rounded-lg">
                <summary className="font-medium cursor-pointer">{f.q}</summary>
                <div className="mt-2 text-gray-600">{f.a}</div>
              </details>
            ))}
          </div>
        </div>

        <aside className="rounded-2xl bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] p-8 text-white">
          <h3 className="text-2xl font-bold">Ready for DFY?</h3>
          <p className="mt-2 text-white/90">Start with a short intake — we’ll map your funnel and go live in 48 hours for single-location setups.</p>
          <div className="mt-6 flex gap-3">
            <Button asChild className="bg-white text-[#2C6CF2] rounded-full px-4 py-3">
              <Link href="/start-dfy">Start DFY</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-4 py-3 border-white text-white">
              <Link href="/contact">Talk to an Expert</Link>
            </Button>
          </div>
        </aside>
      </section>

      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] flex items-center justify-center text-white font-bold">KW</div>
              <div>
                <div className="font-semibold">Hikewa</div>
                <div className="text-xs text-gray-500">DFY & AI business systems</div>
              </div>
            </div>
          </div>

          <div>
            <div className="font-medium">Services</div>
            <ul className="mt-3 text-sm text-gray-600 space-y-2">
              <li>DFY Setup</li>
              <li>Monthly DFY</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div>
            <div className="font-medium">Contact</div>
            <ul className="mt-3 text-sm text-gray-600 space-y-2">
              <li><Link href="/contact">Contact form</Link></li>
              <li>support@hikewa.com</li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
}
