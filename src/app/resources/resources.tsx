// src/app/resources/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, BookOpen, FileText, Video, Download, Play, FileMinus } from "lucide-react";
import { Button } from "@/components/ui/button"; // replace if you don't have

const resourceCategories = [
  { id: "guides", title: "Guides & How-tos", desc: "Step-by-step setup guides, funnel playbooks and best practices.", icon: BookOpen },
  { id: "docs", title: "Documentation", desc: "API docs, integration guides, and developer references.", icon: FileText },
  { id: "videos", title: "Video Tutorials", desc: "Short videos — from quick wins to full walkthroughs.", icon: Video },
  { id: "case-studies", title: "Case Studies", desc: "Real client outcomes and DFY success stories.", icon: Play },
  { id: "templates", title: "Templates & Downloads", desc: "Industry packs, email templates and funnel blueprints.", icon: Download },
];

const latestResources = [
  { title: "Getting started with Kewa AI (Quickstart)", type: "Guide", href: "/resources/guides/kewa-quickstart" },
  { title: "48-Hour DFY Checklist (PDF)", type: "Download", href: "/resources/templates/dfy-checklist.pdf" },
  { title: "Automations that recover lost leads", type: "Case Study", href: "/resources/case-studies/lead-recovery" },
];

const faqs = [
  { q: "Where can I find API docs?", a: "Our API docs and webhook guide are under Documentation → API Reference." },
  { q: "Can I request a custom template?", a: "Yes — contact support or request a DFY add-on and we’ll build one for you." },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 antialiased">
      {/* HERO */}
      <section className="pt-28 pb-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <motion.h1 initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl sm:text-5xl font-extrabold">
                Resources to get the most from Hikewa
              </motion.h1>
              <motion.p initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.08 }} className="mt-4 text-lg text-gray-600 max-w-2xl">
                Guides, templates, videos and case studies — everything to launch, optimize and scale using Kewa and Hikewa’s DFY services.
              </motion.p>

              {/* Search */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.16 }} className="mt-6">
                <div className="relative max-w-xl">
                  <Search className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input aria-label="search-resources" placeholder="Search guides, templates or docs..." className="w-full pl-10 pr-4 py-3 rounded-full border bg-white shadow-sm" />
                  <Button asChild className="absolute right-2 top-2 h-9 rounded-full px-4 py-1">
                    <Link href="/search">Search</Link>
                  </Button>
                </div>
                <div className="mt-3 text-sm text-gray-500">Tip: try “Kewa funnel” or “DFY checklist”.</div>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }} className="mt-6 flex gap-3">
                <Button asChild className="rounded-full bg-gradient-to-r from-[#2C6CF2] to-[#7A4BFF] px-5 py-3 text-white font-semibold">
                  <Link href="/dfy">Request DFY Support</Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full px-5 py-3">
                  <Link href="/contact">Contact Support</Link>
                </Button>
              </motion.div>
            </div>

            <div className="lg:col-span-5">
              <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white rounded-2xl p-6 border shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-500">Latest</div>
                    <div className="text-lg font-semibold">New resources added weekly</div>
                  </div>
                  <div className="text-xs text-gray-400">Updated</div>
                </div>

                <ul className="mt-4 space-y-3">
                  {latestResources.map((r) => (
                    <li key={r.title} className="flex items-start gap-3 p-3 rounded border hover:shadow">
                      <div className="w-9 h-9 rounded bg-gray-50 flex items-center justify-center text-sm font-semibold">{r.type[0]}</div>
                      <div className="flex-1">
                        <Link href={r.href} className="font-medium hover:underline">{r.title}</Link>
                        <div className="text-xs text-gray-500 mt-1">{r.type}</div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 text-sm text-gray-500">Need a specific guide? <Link href="/contact" className="text-[#2C6CF2]">Request a custom resource</Link></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-8">
        <motion.h2 initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-3xl font-bold text-center">Browse by category</motion.h2>
        <p className="mt-2 text-center text-gray-600 max-w-2xl mx-auto">Find quick walkthroughs, in-depth documentation and ready-to-use templates.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {resourceCategories.map((c) => {
            const Icon = c.icon;
            return (
              <motion.div key={c.id} whileHover={{ y: -6 }} className="p-6 bg-white rounded-lg border shadow-sm flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#F3F8FF] to-white flex items-center justify-center text-[#2C6CF2]">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{c.desc}</p>
                  <div className="mt-3">
                    <Link href={`/resources/${c.id}`} className="text-[#2C6CF2] text-sm">Explore →</Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FEATURED GUIDES & TEMPLATES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white p-6 border shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">Featured guide: Kewa Quickstart</h3>
                <p className="text-sm text-gray-600 mt-1">Step-by-step setup to start automating within hours.</p>
              </div>
              <div className="text-xs text-gray-400">Guide</div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <Link href="/resources/guides/kewa-quickstart" className="p-3 rounded border hover:shadow flex items-center gap-3">
                <BookOpen /> <span className="text-sm">Read guide</span>
              </Link>
              <Link href="/resources/templates/dfy-checklist.pdf" className="p-3 rounded border hover:shadow flex items-center gap-3">
                <Download /> <span className="text-sm">Download checklist (PDF)</span>
              </Link>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 border shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">Video: Build a booking funnel</h3>
                <p className="text-sm text-gray-600 mt-1">10-minute walkthrough showing a full funnel build and automate flow.</p>
              </div>
              <div className="text-xs text-gray-400">Video</div>
            </div>

            <div className="mt-4">
              <Link href="/resources/videos/build-booking-funnel" className="p-4 rounded-lg bg-gray-50 border flex items-center gap-3 hover:shadow">
                <Play /> <span className="font-medium">Watch tutorial</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DOCS HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <div className="rounded-2xl bg-gradient-to-r from-white to-gray-50 border p-6 shadow sm:flex sm:items-center sm:justify-between">
          <div>
            <h3 className="text-xl font-semibold">Developer & API docs</h3>
            <p className="text-sm text-gray-600 mt-1">Full API reference, webhook examples, and SDKs for rapid integrations.</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link href="/docs" className="px-4 py-2 rounded-full border bg-white">Open Docs</Link>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <h3 className="text-2xl font-semibold">Selected case studies</h3>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <article className="p-4 bg-white border rounded-lg shadow-sm">
            <h4 className="font-semibold">Agency doubled revenue</h4>
            <p className="text-sm text-gray-600 mt-1">DFY + Kewa automations increased retention and delivered faster client onboarding.</p>
            <div className="mt-3 text-xs text-gray-500"><Link href="/resources/case-studies/agency-revenue" className="text-[#2C6CF2]">Read →</Link></div>
          </article>
          <article className="p-4 bg-white border rounded-lg shadow-sm">
            <h4 className="font-semibold">Local clinic reduced no-shows</h4>
            <p className="text-sm text-gray-600 mt-1">Automations + reminders cut no-shows & improved conversions.</p>
            <div className="mt-3 text-xs text-gray-500"><Link href="/resources/case-studies/clinic-no-shows" className="text-[#2C6CF2]">Read →</Link></div>
          </article>
          <article className="p-4 bg-white border rounded-lg shadow-sm">
            <h4 className="font-semibold">E-commerce: 18% repeat purchases</h4>
            <p className="text-sm text-gray-600 mt-1">Kewa-driven flows increased repeat purchase rates with cart recovery & emails.</p>
            <div className="mt-3 text-xs text-gray-500"><Link href="/resources/case-studies/ecom-repeat" className="text-[#2C6CF2]">Read →</Link></div>
          </article>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <div className="rounded-2xl bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] p-8 text-white shadow-xl grid md:grid-cols-3 gap-4 items-center">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold">Get product tips & DFY updates</h3>
            <p className="mt-2 text-white/90">Join our newsletter for the best Kewa prompts, templates and product updates.</p>
          </div>

          <form className="flex gap-2 md:justify-end items-center">
            <input aria-label="newsletter-email" placeholder="Your email" className="px-4 py-3 rounded-full text-gray-900" />
            <Button asChild className="rounded-full px-5 py-3 bg-white text-[#2C6CF2] font-semibold">
              <Link href="/subscribe">Subscribe</Link>
            </Button>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 pb-20">
        <h3 className="text-2xl font-semibold text-center">FAQ</h3>
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {faqs.map((f) => (
            <details key={f.q} className="bg-white p-4 border rounded-lg">
              <summary className="font-medium cursor-pointer">{f.q}</summary>
              <div className="mt-2 text-gray-600">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] flex items-center justify-center text-white font-bold">KW</div>
              <div>
                <div className="font-semibold">Hikewa</div>
                <div className="text-xs text-gray-500">Resources & docs</div>
              </div>
            </div>
          </div>

          <div>
            <div className="font-medium">Resources</div>
            <ul className="mt-3 text-sm text-gray-600 space-y-2">
              <li><Link href="/resources/guides">Guides</Link></li>
              <li><Link href="/docs">Docs</Link></li>
              <li><Link href="/resources/videos">Videos</Link></li>
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
