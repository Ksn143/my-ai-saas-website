// src/app/solutions/enterprise/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Users, PieChart, Zap, Check } from "lucide-react";

export default function EnterprisePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900 antialiased">
      {/* NAV SNIPPET (optional if your site has global nav) */}
      <header className="fixed top-4 left-0 right-0 z-40 pointer-events-none">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between pointer-events-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] flex items-center justify-center text-white font-bold">
                KW
              </div>
              <div className="font-semibold">Hikewa</div>
            </div>
            <div className="text-sm text-gray-600 hidden md:flex gap-6">
              <Link href="/pricing">Pricing</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left - Headline */}
          <div className="lg:col-span-6">
            <motion.h1
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl font-extrabold leading-tight"
            >
              Enterprise automation that runs like a team — without the hiring.
            </motion.h1>

            <motion.p
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.08, duration: 0.6 }}
              className="mt-6 text-lg text-gray-600 max-w-2xl"
            >
              Hikewa + Kewa deliver centralized client systems, secure multi-tenant
              workflows, and DFY operations for large teams and agencies. Reduce
              operational cost, increase throughput and scale delivery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.16 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#2C6CF2] to-[#7A4BFF] text-white font-semibold shadow-lg"
              >
                Request Enterprise Demo
              </Link>
              <Link
                href="/enterprise-whitepaper.pdf"
                className="inline-flex items-center px-5 py-3 rounded-full border border-gray-200 text-gray-700"
              >
                Download Whitepaper
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
              className="mt-6 flex gap-6 items-center text-sm text-gray-500"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-[#EFF6FF] w-10 h-10 flex items-center justify-center">🔒</div>
                <div>
                  <div className="font-medium">Enterprise-grade security</div>
                  <div className="text-xs text-gray-500">SOC2-ready controls & data isolation</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-md bg-[#FFF7FF] w-10 h-10 flex items-center justify-center">⚙️</div>
                <div>
                  <div className="font-medium">Custom integrations</div>
                  <div className="text-xs text-gray-500">SAML, SCIM, API & webhooks</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - interactive dashboard mock */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl"
            >
              <div className="relative rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden">
                <div className="px-6 py-4 flex items-center justify-between bg-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#F3F8FF] to-white flex items-center justify-center">🏢</div>
                    <div>
                      <div className="text-sm font-medium">Enterprise Console</div>
                      <div className="text-xs text-gray-400">Acme Corp • Multi-tenant</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">Synced • 6s</div>
                </div>

                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <div className="rounded-lg bg-gradient-to-br from-white to-[#F8FAFF] border p-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs text-gray-500">Open Opportunities</div>
                          <div className="text-2xl font-semibold">842</div>
                        </div>
                        <div className="text-xs text-gray-400">+9% MoM</div>
                      </div>

                      <div className="mt-4 h-28 bg-white rounded border flex items-center justify-center text-gray-300">Funnel / Pipeline preview</div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3">
                      <div className="p-3 bg-white rounded shadow-sm border">
                        <div className="text-xs text-gray-500">Active Clients</div>
                        <div className="text-lg font-semibold">112</div>
                      </div>
                      <div className="p-3 bg-white rounded shadow-sm border">
                        <div className="text-xs text-gray-500">Automations Running</div>
                        <div className="text-lg font-semibold">2,141</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="rounded-lg bg-white p-4 border shadow-sm">
                      <div className="text-xs text-gray-500">Kewa — Enterprise Insights</div>
                      <div className="mt-2 text-sm text-gray-700">Detected a drop in onboarding completion for client X. Suggesting an automated task reminder and follow-up series.</div>
                      <div className="mt-3 flex gap-2">
                        <button className="px-3 py-2 bg-[#2C6CF2] text-white rounded text-sm">Apply</button>
                        <button className="px-3 py-2 border rounded text-sm">Preview</button>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-gray-50 rounded text-xs text-gray-600 border">
                      <div className="font-medium">SLA</div>
                      <div className="mt-1">99.9% uptime • Audit logs • Role-based access</div>
                    </div>
                  </div>
                </div>

                {/* bottom chat / quick action */}
                <div className="p-4 border-t bg-gray-50">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7A4BFF] to-[#2C6CF2] flex items-center justify-center text-white">🤖</div>
                    <div className="flex-1">
                      <div className="rounded-lg bg-white border p-3 text-sm text-gray-700">Kewa: "I can generate a compliance report for Q3. Run now?"</div>
                      <div className="mt-3 flex gap-2">
                        <input aria-label="kea-enterprise-input" placeholder="Ask Kewa something..." className="flex-1 rounded-md border px-3 py-2 text-sm" />
                        <button className="px-3 py-2 bg-[#2C6CF2] text-white rounded-md">Run</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* decorative gradient blob bottom */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -right-12 w-48 h-48 rounded-2xl bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] opacity-20 blur-3xl"
            />
          </div>
        </div>
      </section>

      {/* VALUE & CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.06 }} className="grid lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border shadow-sm">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-[#2C6CF2]" />
              <div>
                <h3 className="font-semibold">Security & Compliance</h3>
                <p className="text-sm text-gray-600 mt-1">Data isolation, audit logs, SSO & SOC2-ready practices.</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border shadow-sm">
            <div className="flex items-center gap-3">
              <Users className="h-6 w-6 text-[#7A4BFF]" />
              <div>
                <h3 className="font-semibold">Multi-team Management</h3>
                <p className="text-sm text-gray-600 mt-1">Role-based access, client view switching, and workspace separation.</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border shadow-sm">
            <div className="flex items-center gap-3">
              <PieChart className="h-6 w-6 text-[#2C6CF2]" />
              <div>
                <h3 className="font-semibold">Enterprise Insights</h3>
                <p className="text-sm text-gray-600 mt-1">Cross-client analytics, SLA reporting & AI recommendations.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* INTEGRATIONS BAR */}
      <section className="mt-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 py-6 rounded-xl">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-4 overflow-x-auto">
              {["Google Calendar","Gmail","Outlook","Salesforce","Slack","Twilio","Zapier"].map((name)=>(
                <motion.div key={name} whileHover={{ y:-6 }} className="flex items-center gap-3 bg-white px-3 py-2 rounded-lg shadow-sm">
                  <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-xs font-semibold">{name.split(' ')[0][0]}</div>
                  <div className="text-xs text-gray-600">{name}</div>
                </motion.div>
              ))}
            </div>

            <div className="text-sm text-gray-500">Connect secure enterprise integrations via API, SSO and webhooks.</div>
          </div>
        </div>
      </section>

      {/* SCALE PROCESS / HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <div className="rounded-2xl bg-white border p-8 shadow">
          <h2 className="text-2xl font-semibold">Enterprise scale — simplified</h2>
          <p className="mt-2 text-gray-600 max-w-3xl">We handle security, migration, and multi-workspace orchestration so your teams can deliver predictable client results without burnout.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold">1. Assess</h4>
              <p className="text-sm text-gray-600 mt-2">We map your workflows and integrations in a kickoff session.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold">2. Deploy</h4>
              <p className="text-sm text-gray-600 mt-2">DFY setup and migration — rapid rollout with pilot clients.</p>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold">3. Scale</h4>
              <p className="text-sm text-gray-600 mt-2">Automated delivery templates and AI monitoring for growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <div className="rounded-2xl bg-gradient-to-r from-[#F7FAFF] to-white border p-8 shadow grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold">Case Study — National Chain reduced churn by 27%</h3>
            <p className="mt-2 text-gray-600">Using Hikewa’s enterprise automations and Kewa-driven follow-ups, a national franchise chain consolidated 7 tools into one platform and reduced client churn by 27%.</p>

            <ul className="mt-4 text-sm text-gray-700 space-y-2">
              <li>• Consolidated tools: 7 → 1</li>
              <li>• Churn reduction: -27%</li>
              <li>• Delivery time reduction: -62%</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <Link href="/contact" className="px-4 py-3 bg-[#2C6CF2] text-white rounded-lg text-center">Talk to an Enterprise Expert</Link>
            <Link href="/demo" className="px-4 py-3 border rounded-lg text-center">Request a Demo</Link>
          </div>
        </div>
      </section>

      {/* SECURITY & COMPLIANCE */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
        <div className="rounded-2xl bg-white border p-8 shadow grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-semibold">Security built for enterprises</h3>
            <p className="mt-2 text-gray-600">Hikewa supports SSO (SAML), SCIM provisioning, encrypted at-rest data, audit logs and role-based access controls. We can help you with compliance readiness and enterprise contracts.</p>

            <div className="mt-6 flex gap-4 items-start">
              <div className="p-3 bg-gray-50 rounded-lg border">
                <ShieldCheck className="h-6 w-6 text-[#2C6CF2]" />
              </div>
              <div>
                <div className="font-medium">SSO & Identity</div>
                <div className="text-sm text-gray-600">SAML, SCIM & SSO integrations available.</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="p-4 bg-gray-50 rounded border">
              <div className="text-sm font-medium">Compliance</div>
              <div className="text-xs text-gray-600 mt-1">SOC2 readiness, encrypted backups, secure data handling.</div>
            </div>
            <div className="p-4 bg-gray-50 rounded border">
              <div className="text-sm font-medium">Enterprise SLA</div>
              <div className="text-xs text-gray-600 mt-1">Custom uptime & support commitments available.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 pb-20 grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold">Frequently asked questions</h3>
          <div className="mt-4 space-y-3">
            <details className="bg-white p-4 rounded-lg border">
              <summary className="font-medium cursor-pointer">Can you migrate our existing data?</summary>
              <div className="mt-2 text-gray-600">Yes — we handle migrations from major CRMs and platforms. Enterprise migrations are scoped during onboarding.</div>
            </details>

            <details className="bg-white p-4 rounded-lg border">
              <summary className="font-medium cursor-pointer">How is pricing structured for enterprise?</summary>
              <div className="mt-2 text-gray-600">Enterprise pricing is custom — based on user count, integrations and DFY requirements. Contact our sales team for a quote.</div>
            </details>

            <details className="bg-white p-4 rounded-lg border">
              <summary className="font-medium cursor-pointer">Do you provide SLAs & dedicated support?</summary>
              <div className="mt-2 text-gray-600">Yes — Enterprise plans include optional SLAs and a dedicated success manager.</div>
            </details>
          </div>
        </div>

        <aside className="rounded-2xl bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] p-8 text-white">
          <h3 className="text-2xl font-bold">Ready to transform operations?</h3>
          <p className="mt-2 text-white/90">Book an enterprise discovery call — we'll map your needs and show a pilot in 7 days.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/contact" className="px-4 py-3 bg-white text-[#2C6CF2] rounded-lg">Contact Sales</Link>
            <Link href="/enterprise-demo" className="px-4 py-3 border rounded-lg border-white/30">Request Pilot</Link>
          </div>
        </aside>
      </section>

      <footer className="bg-white border-t">
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
                <li>Kewa</li>
                <li>DFY Services</li>
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
