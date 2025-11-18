"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, HelpCircle, ShieldCheck, Sparkles, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      id: "solo",
      name: "DFY Solo",
      desc: "For Coaches, Consultants & Creators.",
      priceMonthly: 99,
      priceAnnual: 79,
      setupFee: 199,
      credits: "2,500",
      features: [
        "1 High-Converting Funnel",
        "Basic Kewa AI Agent",
        "Google Calendar Sync",
        "Email Automation",
        "Standard Support",
      ],
      cta: "Start 7-Day Free Trial",
      popular: false,
      color: "bg-white",
      border: "border-gray-200",
    },
    {
      id: "small",
      name: "DFY Small Biz",
      desc: "For Dentists, Plumbers & Local Services.",
      priceMonthly: 299,
      priceAnnual: 249,
      setupFee: 499,
      credits: "10,000",
      features: [
        "Everything in Solo",
        "SMS Booking Reminders",
        "Reputation Management (Reviews)",
        "Facebook/IG Lead Sync",
        "Priority Support",
      ],
      cta: "Start 7-Day Free Trial",
      popular: true,
      color: "bg-[#F0F7FF]",
      border: "border-[#2C6CF2]",
    },
    {
      id: "mid",
      name: "DFY Growth",
      desc: "For Agencies & Multi-Location Business.",
      priceMonthly: 599,
      priceAnnual: 499,
      setupFee: 999,
      credits: "25,000",
      features: [
        "Everything in Small Biz",
        "3 Funnels / Locations",
        "Advanced HubSpot Sync",
        "Workflow Strategy Call",
        "Dedicated Success Manager",
      ],
      cta: "Book Growth Call",
      popular: false,
      color: "bg-white",
      border: "border-gray-200",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      desc: "For Franchises & Large Organizations.",
      priceMonthly: "Custom",
      priceAnnual: "Custom",
      setupFee: "Custom",
      credits: "Unlimited",
      features: [
        "Full White-Label Option",
        "Custom API Integrations",
        "SSO & Role-Based Access",
        "SLA & 24/7 Priority Support",
        "Custom AI Training",
      ],
      cta: "Contact Sales",
      popular: false,
      color: "bg-slate-900",
      border: "border-slate-800",
      isDark: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* HERO SECTION */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold mb-6 border border-green-200"
          >
            <Sparkles size={12} /> PAY NOTHING TODAY
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            We Build It First. <span className="text-[#2C6CF2]">You Pay Later.</span>
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Experience the full Done-For-You setup and AI automation for 7 days completely free. If you don't love it, you don't pay a dime.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${!annual ? "text-gray-900" : "text-gray-500"}`}>Monthly</span>
            <button 
              onClick={() => setAnnual(!annual)}
              className="relative w-14 h-8 bg-gray-200 rounded-full p-1 transition-colors duration-300 focus:outline-none"
            >
              <div className={`w-6 h-6 bg-white rounded-full shadow-sm transform transition-transform duration-300 ${annual ? "translate-x-6" : ""}`}></div>
            </button>
            <span className={`text-sm font-medium ${annual ? "text-gray-900" : "text-gray-500"}`}>
              Yearly <span className="text-[#2C6CF2] text-xs font-bold ml-1">(Save 20%)</span>
            </span>
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
            
            {plans.map((plan) => (
              <motion.div 
                key={plan.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className={`relative p-6 rounded-2xl border flex flex-col h-full ${plan.color} ${plan.border} ${plan.popular ? "shadow-2xl ring-2 ring-[#2C6CF2]/20" : "shadow-sm hover:shadow-lg"}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2C6CF2] text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-sm whitespace-nowrap">
                    MOST POPULAR
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-xl font-bold ${plan.isDark ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
                  <p className={`text-sm mt-2 min-h-[40px] ${plan.isDark ? "text-gray-400" : "text-gray-500"}`}>{plan.desc}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    {typeof plan.priceMonthly === 'number' ? (
                       <>
                         <span className={`text-4xl font-extrabold tracking-tight ${plan.isDark ? "text-white" : "text-gray-900"}`}>
                           ${annual ? plan.priceAnnual : plan.priceMonthly}
                         </span>
                         <span className={`ml-1 ${plan.isDark ? "text-gray-500" : "text-gray-500"}`}>/mo</span>
                       </>
                    ) : (
                       <span className="text-3xl font-extrabold text-white">Custom</span>
                    )}
                  </div>
                  
                  {/* Setup Fee Logic */}
                  <div className="mt-3 text-xs font-medium">
                    {typeof plan.setupFee === 'number' ? (
                      <span className={`px-2 py-1 rounded ${plan.isDark ? "bg-slate-800 text-blue-400" : "bg-blue-50 text-[#2C6CF2]"}`}>
                        + ${plan.setupFee} setup (billed after 7 days)
                      </span>
                    ) : (
                      <span className="text-gray-500">Custom setup fee</span>
                    )}
                  </div>
                  <div className={`mt-2 text-xs ${plan.isDark ? "text-gray-400" : "text-gray-500"}`}>
                    Includes <strong>{plan.credits}</strong> credits/mo
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-4 flex-1 mb-8">
                  <p className={`text-xs font-bold uppercase tracking-wider ${plan.isDark ? "text-gray-500" : "text-gray-400"}`}>What's Included</p>
                  <ul className="space-y-3">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <Check className={`w-4 h-4 shrink-0 ${plan.isDark ? "text-green-400" : "text-green-500"}`} />
                        <span className={plan.isDark ? "text-gray-300" : "text-gray-700"}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <Button 
                  asChild 
                  className={`w-full py-6 text-base font-bold rounded-xl shadow-none transition-all ${
                    plan.isDark 
                      ? "bg-white text-black hover:bg-gray-200" 
                      : plan.popular 
                        ? "bg-[#2C6CF2] hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-200" 
                        : "bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <Link href={plan.id === 'enterprise' ? "/contact" : "/start-free"}>
                    {plan.cta}
                  </Link>
                </Button>
                
                {/* No Card Text */}
                {typeof plan.priceMonthly === 'number' && (
                   <p className={`text-[10px] text-center mt-3 ${plan.isDark ? "text-gray-500" : "text-gray-400"}`}>
                      No payment due today
                   </p>
                )}

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRIAL GUARANTEE (Updated) */}
      <section className="bg-[#F8FAFC] py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-100">
            <Lock className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold mb-4">7-Day Risk-Free Trial</h2>
          <p className="text-gray-600 leading-relaxed">
            We are so confident in our DFY service that we will build your system and let you use it for 7 days <strong>without charging you a penny.</strong> If you're not satisfied with the results by day 7, you can cancel and pay $0.
          </p>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQ</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h4 className="font-bold text-lg flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-gray-400"/> 
                When will I be charged?
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                You will NOT be charged today. We require a payment method to start the trial, but the first charge (Setup Fee + Subscription) will only happen <strong>after your 7-day trial ends</strong>, and only if you choose to stay.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h4 className="font-bold text-lg flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-gray-400"/> 
                Does the 7-day trial include the Setup Fee?
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Yes. We invest our team's time to build your setup during the trial period for free. The One-Time Setup Fee is only billed if you continue past day 7. This puts all the risk on us to deliver a great system.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h4 className="font-bold text-lg flex items-center gap-2 mb-2">
                <HelpCircle className="w-5 h-5 text-gray-400"/> 
                Can I cancel during the trial?
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Absolutely. If you don't see the value in the first week, simply click "Cancel" in your dashboard or email us. The system will shut down and you won't be charged anything.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}