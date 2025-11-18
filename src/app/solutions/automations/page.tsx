"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { GitBranch, MessageSquare, Clock, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const workflows = [
  { title: "Instant Lead Response", desc: "Lead fills form ➔ Wait 1 min ➔ Send SMS ➔ If no reply, Send Email.", icon: Zap },
  { title: "Review Generation", desc: "Job completed ➔ Wait 2 hours ➔ Send 'Rate Us' SMS ➔ If 5-star, ask for Google Review.", icon: MessageSquare },
  { title: "Appointment Reminders", desc: "24h before ➔ Send Email ➔ 1h before ➔ Send SMS.", icon: Clock },
  { title: "Database Reactivation", desc: "Find leads older than 90 days ➔ Send 'Still interested?' offer.", icon: GitBranch },
];

export default function AutomationsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="pt-32 pb-20 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Automations That Work <br/><span className="text-[#2C6CF2]">While You Sleep.</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Build simple "If This, Then That" workflows to handle your busy work. Or let our DFY team build them for you.
        </p>
        <Button asChild className="rounded-full bg-[#2C6CF2] px-8 py-6 text-lg shadow-lg">
          <Link href="/demo">See Visual Builder</Link>
        </Button>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          {workflows.map((w, i) => (
             <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-8 rounded-2xl shadow-sm border">
                <div className="w-12 h-12 bg-blue-50 text-[#2C6CF2] rounded-lg flex items-center justify-center mb-6"><w.icon size={24}/></div>
                <h3 className="text-xl font-bold mb-3">{w.title}</h3>
                <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm text-gray-600">
                   {w.desc}
                </div>
             </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}