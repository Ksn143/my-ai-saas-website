// src/app/pricing/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

export default function PricingPremium() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name: "Solo",
      price: 49,
      annualPrice: 39,
      tagline: "For freelancers & solo operators",
      popular: false,
      features: [
        "CRM (Basic)",
        "3 Funnels",
        "5 Automations",
        "Email + SMS Broadcasts",
        "Kewa AI (Basic)",
        "1 DFY Funnel Setup",
      ],
      cta: "Start Free",
    },
    {
      name: "Business",
      price: 149,
      annualPrice: 129,
      tagline: "Best for growing businesses",
      popular: true,
      features: [
        "Everything in Solo",
        "Unlimited Funnels",
        "Unlimited Automations",
        "Team Access (2 Users)",
        "Kewa Pro Mode",
        "48-Hour DFY Full Setup",
        "Monthly Optimization",
      ],
      cta: "Start Free",
    },
    {
      name: "Enterprise",
      price: 399,
      annualPrice: 349,
      tagline: "For teams, agencies & enterprises",
      popular: false,
      features: [
        "Everything in Business",
        "Team Access (10 Users)",
        "Custom Automations",
        "Dedicated Success Manager",
        "AI Insights (Advanced)",
        "DFY Monthly Management",
      ],
      cta: "Talk to Sales",
    },
  ];

  const allFeatures = [
    "AI Business Agent Kewa",
    "CRM + Automations",
    "Funnel & Website Builder",
    "Messaging Suite (Email/SMS/Chat)",
    "Calendar & Booking System",
    "Dashboard & Reporting",
    "24/7 Support",
  ];

  return (
    <main className="bg-gradient-to-b from-white via-gray-50 to-gray-100 pb-24 pt-10">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Simple Pricing. Powerful Automation.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg"
        >
          Choose a plan that scales with your business. Every plan includes the
          AI Agent <strong>Kewa</strong>.
        </motion.p>

        {/* Toggle */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <span className={!annual ? "font-semibold" : "text-gray-500"}>
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            aria-label="Toggle billing period"
            className={`h-6 w-12 rounded-full bg-gray-300 relative transition`}
          >
            <div
              className={`h-5 w-5 bg-white rounded-full shadow absolute top-0.5 transition ${
                annual ? "left-6" : "left-0.5"
              }`}
            />
          </button>
          <span className={annual ? "font-semibold" : "text-gray-500"}>
            Annual (Save 20%)
          </span>
        </div>
      </section>

      {/* ALL PLANS INCLUDE */}
      <section className="max-w-6xl mx-auto mt-20 px-6">
        <h2 className="text-3xl font-bold text-center">All Plans Include</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {allFeatures.map((f) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              key={f}
              className="flex items-center gap-3 bg-white p-4 rounded-lg shadow border"
            >
              <Check className="text-green-500 h-5 w-5" />
              <span className="text-sm text-gray-700">{f}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="max-w-7xl mx-auto mt-20 px-6 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className={`p-8 rounded-2xl shadow-xl border bg-white relative overflow-hidden ${
              plan.popular ? "ring-2 ring-[#7A4BFF]" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute top-4 right-4 bg-[#7A4BFF] text-white px-3 py-1 rounded-full text-xs font-semibold">
                Most Popular
              </div>
            )}

            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <p className="text-gray-500 mt-1 text-sm">{plan.tagline}</p>

            {/* Price */}
            <div className="mt-6">
              <span className="text-5xl font-extrabold">
                ${annual ? plan.annualPrice : plan.price}
              </span>
              <span className="text-gray-500 ml-1">/month</span>
            </div>

            <button className="w-full mt-8 py-3 rounded-xl bg-gradient-to-r from-[#2C6CF2] to-[#7A4BFF] text-white font-semibold shadow">
              {plan.cta}
            </button>

            <ul className="mt-8 space-y-3 text-sm text-gray-700">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <Check className="text-green-500 h-4 w-4" /> {f}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      {/* GUARANTEES */}
      <section className="max-w-6xl mx-auto mt-24 px-6">
        <h2 className="text-3xl font-bold text-center">Your Business. Zero Risk.</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {["30-Day Refund Guarantee", "48-Hour Setup Guarantee", "Cancel Anytime"].map(
            (g) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                key={g}
                className="p-6 bg-white border rounded-xl shadow"
              >
                <h3 className="text-xl font-bold">{g}</h3>
                <p className="mt-2 text-gray-600 text-sm">
                  {g === "30-Day Refund Guarantee" &&
                    "Try Hikewa risk-free. If it doesn't work, get a full refund."}
                  {g === "48-Hour Setup Guarantee" &&
                    "Your DFY setup will be done in 48 hours or your next month is free."}
                  {g === "Cancel Anytime" &&
                    "No contracts. No hidden fees. Stop anytime you want."}
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-7xl mx-auto mt-24 px-6 text-center">
        <div className="p-12 bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] rounded-2xl text-white shadow-xl">
          <h2 className="text-4xl font-extrabold">Ready to Automate Your Business?</h2>
          <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">
            Start your free trial or book a strategy call with our team.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/start-free"
              className="px-6 py-3 rounded-xl bg-white text-[#2C6CF2] font-semibold shadow"
            >
              Start Free
            </Link>
            <Link
              href="/demo"
              className="px-6 py-3 rounded-xl border border-white text-white font-semibold hover:bg-white/10"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
