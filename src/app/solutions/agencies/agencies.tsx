// src/app/solutions/agencies/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import React from "react";

const whyChooseFeatures = [
  "Replace multiple client tools with one platform",
  "White-label option (Enterprise)",
  "Easy onboarding for new clients",
  "DFY setups you can resell",
  "AI content + automation builder",
  "Save 100+ hours monthly",
  "Increase client retention",
];

const whatYouGetItems = [
  {
    title: "Centralized Client Management",
    description: "Switch between clients, view activity, and manage pipelines from one place.",
  },
  {
    title: "DFY Systems You Can Resell",
    description: "Funnels, Automations, Booking, CRM, Messaging — fully configured and brandable.",
  },
  {
    title: "AI-Powered Client Delivery",
    description: "Kewa writes campaigns, sequences, follow-ups, landing copy and optimizes funnels.",
  },
  {
    title: "Scalable Operations",
    description: "Templates, Automation packs, role-based access and multi-client dashboards.",
  },
];

const perfectForItems = [
  "Marketing agencies",
  "Real estate agencies",
  "Digital service agencies",
  "Coaching agencies",
  "Niche service agencies",
];

const faqs = [
  {
    q: "Can we white-label Hikewa for clients?",
    a: "Yes — Enterprise plans include white-label options and custom domains so you can present Hikewa as your delivery platform.",
  },
  {
    q: "How quickly can you deliver a DFY client system?",
    a: "Our standard DFY turnaround is 48 hours for single-location setups. Complex multi-location projects vary and are scoped individually.",
  },
  {
    q: "Do we keep client data private?",
    a: "Absolutely. Each client's data is segregated and accessible only to accounts with proper permissions. We can support agency-level privacy controls.",
  },
];

export default function AgenciesPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Deliver better client results — faster.
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl">
              Hikewa gives agencies an all-in-one delivery platform: CRM, funnels, automations and an AI agent (Kewa) that builds campaigns and runs client workflows for you.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <Button asChild size="lg" className="rounded-lg bg-[#2C6CF2] text-white shadow">
                <Link href="/start-free">Start Free — 7d trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-lg">
                <Link href="/demo-agency">See Agency Demo</Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-[#EFF6FF] w-10 h-10 flex items-center justify-center text-xl">🚀</div>
                <div>
                  <div className="font-medium">48-Hour DFY</div>
                  <div className="text-xs">Onboard clients fast with our setup team.</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-md bg-[#FFF7FF] w-10 h-10 flex items-center justify-center text-xl">🤖</div>
                <div>
                  <div className="font-medium">Kewa AI</div>
                  <div className="text-xs">Automations, copy & optimization — handled.</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 text-xs text-gray-400 items-center">
              <span>Trusted by agencies & teams</span>
              <div className="flex items-center gap-3">
                <div className="h-6 bg-white/80 rounded px-3 py-1 text-gray-600">Google</div>
                <div className="h-6 bg-white/80 rounded px-3 py-1 text-gray-600">FB</div>
                <div className="h-6 bg-white/80 rounded px-3 py-1 text-gray-600">Stripe</div>
              </div>
            </div>
          </div>

          {/* Right: agency dashboard / quick stats */}
          <div className="lg:col-span-5">
            <div className="bg-white border shadow rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500">Agency Dashboard</div>
                  <div className="text-xl font-semibold">Acme Marketing</div>
                </div>
                <div className="text-xs text-green-600 font-medium">Live</div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-3 bg-gray-50 rounded">
                  <div className="text-xs text-gray-500">Clients</div>
                  <div className="text-2xl font-bold">24</div>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <div className="text-xs text-gray-500">Active Funnels</div>
                  <div className="text-2xl font-bold">42</div>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <div className="text-xs text-gray-500">Monthly Revenue</div>
                  <div className="text-2xl font-bold">$18.7k</div>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <div className="text-xs text-gray-500">Avg. Setup Time</div>
                  <div className="text-2xl font-bold">48h</div>
                </div>
              </div>

              <div className="mt-4 border rounded p-3 bg-gradient-to-r from-white to-gray-50">
                <div className="text-sm font-medium">Kewa Suggestion</div>
                <div className="text-sm text-gray-700 mt-1">Add 1-hour reminders to reduce no-shows — projected +14% bookings.</div>
                <div className="mt-3 flex gap-2">
                  <Button size="sm" className="bg-[#2C6CF2] text-white rounded">Apply</Button>
                  <Button size="sm" variant="outline" className="rounded">Preview</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="mx-auto max-w-7xl px-6 mt-10">
        <div className="rounded-xl bg-white border p-8 shadow">
          <h2 className="text-3xl font-bold text-center">Why Agencies Choose Hikewa</h2>
          <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">Everything an agency needs to deliver client results at scale — with less hiring and more margin.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseFeatures.map((feature) => (
              <div key={feature} className="flex gap-4 items-start p-4 rounded-lg border hover:shadow">
                <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="mx-auto max-w-5xl px-6 mt-12">
        <h2 className="text-3xl font-bold text-center">What You Get</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {whatYouGetItems.map((item) => (
            <article key={item.title} className="rounded-xl border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="mx-auto max-w-7xl px-6 mt-12">
        <div className="rounded-xl bg-gradient-to-r from-white to-gray-50 border p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Connect the tools your agency already uses</h3>
            <p className="mt-2 text-gray-600 max-w-xl">Google Calendar, Gmail, Facebook Leads, Instagram DMs, Twilio for SMS and webhook support for hundreds more.</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            {["Google Calendar","Gmail","Facebook","Instagram","Twilio","Zapier","Stripe"].map((n) => (
              <div key={n} className="px-3 py-2 bg-white rounded shadow text-sm">{n}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY / OUTCOME */}
      <section className="mx-auto max-w-7xl px-6 mt-12">
        <div className="rounded-xl bg-white border p-8 shadow grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold">Case study: Local agency doubled client revenue</h3>
            <p className="mt-2 text-gray-600">A boutique marketing agency used Hikewa's DFY system + Kewa automations to increase booking conversions by 32% and cut delivery time by 70%.</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li>• 32% increase in booking conversions</li>
              <li>• 70% faster delivery for client setups</li>
              <li>• 18% increase in monthly retained revenue</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <Button asChild className="bg-[#2C6CF2] text-white rounded-lg">
              <Link href="/contact">Talk to Sales</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-lg">
              <Link href="/demo-agency">Request Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* PERFECT FOR */}
      <section className="mx-auto max-w-4xl px-6 mt-12">
        <h2 className="text-2xl font-bold text-center">Perfect for</h2>
        <ul className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          {perfectForItems.map((p) => (
            <li key={p} className="bg-white rounded-lg p-4 border flex items-center gap-3">
              <Check className="text-green-500 h-6 w-6" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ + CTA */}
      <section className="mx-auto max-w-7xl px-6 mt-12 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold">Frequently asked</h2>
          <div className="mt-4 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="bg-white p-4 border rounded-lg">
                <summary className="font-medium cursor-pointer">{f.q}</summary>
                <div className="mt-2 text-gray-600">{f.a}</div>
              </details>
            ))}
          </div>
        </div>

        <aside className="rounded-xl bg-gradient-to-r from-[#2C6CF2] to-[#7A4BFF] p-8 text-white">
          <h3 className="text-2xl font-bold">Ready to scale your agency?</h3>
          <p className="mt-2 text-white/90">Start with a free trial or schedule a strategy call — we’ll show how Hikewa reduces delivery time and increases margin.</p>
          <div className="mt-6 flex gap-3">
            <Button asChild className="bg-white text-[#2C6CF2] rounded-lg">
              <Link href="/start-free">Start Free</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-lg border-white text-white">
              <Link href="/demo-agency">Book Strategy Call</Link>
            </Button>
          </div>
        </aside>
      </section>
    </main>
  );
}
