"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Server, Users, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EnterprisePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="pt-32 pb-16 text-center px-6 bg-slate-50">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-block py-1 px-3 rounded-full bg-slate-200 text-slate-700 text-xs font-bold tracking-wide mb-6 uppercase">Hikewa Enterprise</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Automation at <span className="text-[#2C6CF2]">Scale.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Enterprise-grade security, custom integrations, and dedicated support for high-volume organizations.
          </p>
          <Button asChild className="rounded-full bg-[#2C6CF2] px-8 py-6 text-lg shadow-lg">
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </motion.div>
      </section>

      {/* FEATURE 1: Security */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6"><ShieldCheck size={24}/></div>
            <h2 className="text-3xl font-bold mb-4">Bank-Grade Security.</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We take data privacy seriously. Hikewa Enterprise comes with advanced security protocols to keep your data safe.
            </p>
            <ul className="space-y-3">
              {["SOC2 Compliant (Ready)", "SSO (Single Sign-On)", "Role-Based Access Control (RBAC)"].map(i => (
                <li key={i} className="flex gap-2 items-center font-medium"><Check size={18} className="text-green-500"/> {i}</li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl shadow-xl border h-80 flex items-center justify-center text-slate-500 font-bold">
            Security Dashboard Mockup
          </div>
        </div>
      </section>

      {/* FEATURE 2: Custom Dev */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6"><Server size={24}/></div>
            <h2 className="text-3xl font-bold mb-4">Custom API & Integrations.</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Need to connect Hikewa to a legacy ERP or custom internal tool? Our Enterprise plan unlocks full API access and custom webhook endpoints.
            </p>
            <ul className="space-y-3">
              {["Higher API Rate Limits", "Custom Webhook Logic", "Dedicated Solutions Engineer"].map(i => (
                <li key={i} className="flex gap-2 items-center font-medium"><Check size={18} className="text-green-500"/> {i}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl border h-80 flex items-center justify-center text-gray-300 font-bold lg:order-1">
            API Documentation Mockup
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">Trusted by leading companies</h2>
        <div className="flex justify-center gap-8 opacity-50 grayscale mb-12">
           {/* Logos here */}
           <span className="text-2xl font-bold">ACME Corp</span>
           <span className="text-2xl font-bold">GlobalTech</span>
           <span className="text-2xl font-bold">LogiStick</span>
        </div>
        <div className="bg-[#2C6CF2] text-white max-w-4xl mx-auto rounded-2xl p-10">
             <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
             <p className="mb-8">Our team can build a bespoke AI implementation plan for your organization.</p>
             <Link href="/contact" className="inline-flex bg-white text-[#2C6CF2] px-8 py-3 rounded-lg font-bold">
               Talk to Enterprise Sales
             </Link>
        </div>
      </section>
    </div>
  );
}