// src/app/faq/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, HelpCircle, ShieldCheck, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button"; // replace if you don't have

const faqCategories = [
  { id: "getting-started", title: "Getting started", subtitle: "Onboarding, setup & DFY", count: 6 },
  { id: "pricing-billing", title: "Pricing & Billing", subtitle: "Plans, trials & refunds", count: 4 },
  { id: "integrations", title: "Integrations", subtitle: "Connect Gmail, Calendar, Twilio...", count: 5 },
  { id: "security", title: "Security & Compliance", subtitle: "Data handling & enterprise", count: 3 },
];

const faqs = [
  {
    q: "How fast is DFY setup?",
    a: "For single-location setups we typically deliver in 48 hours after intake & access. Complex multi-location projects are scoped separately.",
    cat: "getting-started",
  },
  {
    q: "Do you offer a trial?",
    a: "Yes — 7-day free trial on all paid plans. DFY packages are separate from the trial and start on purchase.",
    cat: "pricing-billing",
  },
  {
    q: "Can I use my own CRM?",
    a: "Yes — sync leads to HubSpot, Salesforce, Pipedrive, or keep them in Hikewa's built-in CRM.",
    cat: "integrations",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "You retain access for the remainder of your billing period. We provide export options and can assist with a data export on request.",
    cat: "security",
  },
  {
    q: "How do I connect Google Calendar & Gmail?",
    a: "From Settings → Integrations, click Google, follow the OAuth flow and choose the account to connect. We handle token refresh automatically.",
    cat: "integrations",
  },
  {
    q: "Is Kewa secure? Where is data stored?",
    a: "We store data encrypted at rest and in transit. Enterprise customers can request data residency discussions and SOC2 readiness info.",
    cat: "security",
  },
  {
    q: "Can Hikewa send SMS?",
    a: "Yes — via Twilio or our managed messaging. WhatsApp Business API is available as an add-on.",
    cat: "integrations",
  },
  {
    q: "What is included in the 48-Hour Launch package?",
    a: "Funnel + CRM + 3 automations + email + calendar setup + 30min training. See DFY page for full details.",
    cat: "getting-started",
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 antialiased">
      {/* HERO */}
      <section className="pt-28 pb-8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <motion.h1 initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Frequently asked questions — all answers about Hikewa & Kewa
              </motion.h1>
              <motion.p initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.08 }} className="mt-4 text-lg text-gray-600 max-w-2xl">
                Quick answers to common questions about setup, integrations, pricing, security, and our DFY services. Still stuck? Contact support or book a quick demo.
              </motion.p>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.16 }} className="mt-6">
                <div className="relative max-w-md">
                  <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input aria-label="search-faq" placeholder="Search FAQs — e.g. 'refund', 'Google Calendar'..." className="w-full pl-10 pr-4 py-3 rounded-full border bg-white shadow-sm" />
                  <Button asChild className="absolute right-2 top-2 h-9 rounded-full px-4 py-1">
                    <Link href="/contact">Contact</Link>
                  </Button>
                </div>
                <div className="mt-3 text-sm text-gray-500">Tip: try searching for "DFY", "Kewa", or "integrations".</div>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="rounded-2xl bg-white border shadow-lg p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] flex items-center justify-center text-white">?</div>
                  <div>
                    <div className="text-sm text-gray-500">Need help now?</div>
                    <div className="text-lg font-semibold">Chat with Kewa or book a demo</div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3">
                  <Link href="/demo" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#2C6CF2] text-white">Book a Demo</Link>
                  <Link href="/start-dfy" className="inline-flex items-center justify-center px-4 py-2 rounded-lg border">Request DFY</Link>
                </div>

                <div className="mt-4 text-xs text-gray-500">
                  <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> Live support hours: Mon-Fri, 6am-6pm (ET)</div>
                  <div className="flex items-center gap-2 mt-2"><ShieldCheck className="h-4 w-4" /> SOC2-readiness & encrypted backups</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-6">
        <motion.h2 initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-2xl font-semibold text-center">Browse by topic</motion.h2>
        <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">Jump to the topic you care about — or search above.</p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }} className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {faqCategories.map((c, i) => (
            <motion.article key={c.id} whileHover={{ y: -6 }} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 * i }} className="p-5 rounded-lg border bg-white shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F3F8FF] flex items-center justify-center text-[#2C6CF2]"><HelpCircle /></div>
                <div>
                  <div className="font-semibold">{c.title}</div>
                  <div className="text-sm text-gray-500 mt-1">{c.subtitle}</div>
                  <div className="text-xs text-gray-400 mt-2">{c.count} questions</div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* ACCORDIONS */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 mt-10">
        <motion.h3 initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-2xl font-semibold">Common questions & quick answers</motion.h3>
        <p className="text-sm text-gray-600 mt-2 max-w-2xl">Click a question to reveal the answer. If you don't find it, contact our team.</p>

        <div className="mt-6 space-y-3">
          {faqs.map((f, idx) => (
            <motion.details key={f.q} whileHover={{ scale: 1.01 }} className="bg-white border rounded-lg p-4" open={idx < 2}>
              <summary className="font-medium cursor-pointer flex items-center justify-between">
                <span>{f.q}</span>
                <span className="text-xs text-gray-400">{/* category label */}{f.cat.replace("-", " ")}</span>
              </summary>
              <div className="mt-3 text-gray-600">{f.a}</div>
            </motion.details>
          ))}
        </div>
      </section>

      {/* TRUST + GUARANTEES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-10">
        <div className="rounded-2xl bg-gradient-to-r from-white to-gray-50 border p-6 shadow-sm grid md:grid-cols-3 gap-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="h-6 w-6 text-[#2C6CF2]" />
            <div>
              <div className="font-semibold">Secure & Compliant</div>
              <div className="text-sm text-gray-600 mt-1">Encrypted backups, audit logs, and enterprise controls.</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Check className="h-6 w-6 text-green-600" />
            <div>
              <div className="font-semibold">48-Hour DFY Guarantee</div>
              <div className="text-sm text-gray-600 mt-1">Single-location DFY projects live in 48 hours or your next month is free.</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="h-6 w-6 text-[#7A4BFF]" />
            <div>
              <div className="font-semibold">Support</div>
              <div className="text-sm text-gray-600 mt-1">Live chat, email and priority support for Enterprise customers.</div>
            </div>
          </div>
        </div>
      </section>

      {/* STILL NEED HELP */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-10 pb-20">
        <div className="rounded-2xl bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] p-8 text-white shadow-xl grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h4 className="text-2xl font-bold">Still got questions?</h4>
            <p className="mt-2 text-white/90">Book a 15-minute call and our team will walk you through a solution tailored to your business.</p>
          </div>
          <div className="flex gap-3 justify-end">
            <Button asChild className="bg-white text-[#2C6CF2] rounded-full px-5 py-3 font-semibold">
              <Link href="/demo">Book a Call</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-5 py-3 border-white text-white/95">
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* JSON-LD FAQ schema (SEO) */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((f) => ({
              "@type": "Question",
              "name": f.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": f.a,
              },
            })),
          }),
        }}
      />

    </main>
  );
}
