// src/app/product/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Check, 
  Settings, 
  Smartphone, 
  Database, 
  BarChart, 
  Zap, 
  MessageSquare, 
  Users,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button"; 

// Re-framed Features (Benefit Driven)
const features = [
  {
    title: "Zero-Data-Entry CRM",
    body: "Stop manually adding leads. Kewa automatically updates contacts based on emails, calls, and form fills.",
    icon: Database,
  },
  {
    title: "Kewa Builds Flows For You",
    body: "Don't know how to build an automation? Just tell Kewa: 'Follow up with leads who didn't buy', and it's done.",
    icon: Settings,
  },
  {
    title: "DFY Funnel Architecture",
    body: "We install high-converting funnel templates into your account. You just hit 'Publish'.",
    icon: Smartphone,
  },
  {
    title: "AI That Replies Instantly",
    body: "Kewa drafts responses to SMS and Emails 24/7. You just approve them (or let it run on autopilot).",
    icon: MessageSquare,
  },
  {
    title: "Real-Time Business Pulse",
    body: "No complex reports. Ask Kewa: 'How much revenue did we make this week?' and get a straight answer.",
    icon: BarChart,
  },
];

const sections = [
  { title: "Consolidate Tools", text: "Replace Mailchimp, Calendly, Pipedrive, and ClickFunnels with one login." },
  { title: "Clone Yourself", text: "Kewa learns your voice and handles the repetitive admin work so you can sleep." },
  { title: "Scale Faster", text: "Handle 10x the volume of leads without hiring a single new human employee." },
];

export default function ProductPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 antialiased text-gray-900">
      
      {/* 1. HERO: Focus on "Workforce" not "Tool" */}
      <section className="pt-28 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <motion.h1 
              initial={{ y: 12, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 0.6 }} 
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
            >
              Your AI Workforce. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2C6CF2] to-[#7A4BFF]">
                Not Just Another Tool.
              </span>
            </motion.h1>
            <motion.p 
              initial={{ y: 8, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 0.1 }} 
              className="mt-6 text-lg text-gray-600 max-w-xl"
            >
              Stop stitching together software. <strong>Kewa</strong> (our AI agent) manages your CRM, writes your emails, and books your appointments.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 0.2 }} 
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button asChild className="rounded-full bg-gradient-to-r from-[#2C6CF2] to-[#7A4BFF] px-8 py-6 text-lg text-white font-semibold shadow-lg hover:shadow-xl transition-all">
                <Link href="/start-free">Start Free Trial</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-8 py-6 text-lg border-gray-300 text-gray-700 hover:bg-gray-50">
                <Link href="/demo">See Kewa in Action</Link>
              </Button>
            </motion.div>

            <div className="mt-8 flex items-center gap-4 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                Kewa is online
              </div>
              <span className="text-gray-300">|</span>
              <div>No credit card required</div>
            </div>
          </div>

          {/* 2. MOCKUP: Real Chat Interaction (User vs Kewa) */}
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              transition={{ duration: 0.6 }} 
              className="mx-auto max-w-3xl relative z-10"
            >
              <div className="relative rounded-3xl bg-white border border-gray-200 shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="px-6 py-4 bg-gray-50 border-b flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-auto text-xs font-mono text-gray-400">Kewa Agent Mode</div>
                </div>

                {/* Chat Area */}
                <div className="p-6 bg-slate-50 space-y-6 min-h-[320px]">
                  
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-[#2C6CF2] text-white px-5 py-3 rounded-2xl rounded-tr-sm shadow-sm text-sm max-w-[85%]">
                      Send a promo email to all leads from last week who didn't book a call.
                    </div>
                  </div>

                  {/* Kewa Processing */}
                  <div className="flex justify-start items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] flex items-center justify-center text-white font-bold text-sm shadow-sm">KW</div>
                    <div className="bg-white border border-gray-200 px-5 py-4 rounded-2xl rounded-tl-sm shadow-sm text-sm text-gray-800 max-w-[90%]">
                      <p className="font-semibold text-[#2C6CF2] mb-2">On it! Here is the plan:</p>
                      <ul className="space-y-2 mb-3 text-gray-600">
                        <li className="flex items-center gap-2"><Check size={14} className="text-green-500"/> Found 142 leads matching criteria</li>
                        <li className="flex items-center gap-2"><Check size={14} className="text-green-500"/> Drafted "Missed Opportunity" email</li>
                        <li className="flex items-center gap-2"><Check size={14} className="text-green-500"/> Scheduled for 10:00 AM tomorrow</li>
                      </ul>
                      <div className="flex gap-2">
                        <button className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-md text-xs font-medium transition">View Draft</button>
                        <button className="px-3 py-1.5 bg-[#2C6CF2]/10 text-[#2C6CF2] hover:bg-[#2C6CF2]/20 rounded-md text-xs font-medium transition">Send Now</button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Decorative Blur */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-100 to-purple-100 opacity-50 blur-3xl rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. DFY CALLOUT BANNER */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="relative overflow-hidden rounded-2xl bg-[#2C6CF2] text-white shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="relative z-10">
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-bold mb-3 border border-white/20">
              DON'T WANT TO BUILD IT YOURSELF?
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">Get the "Done-For-You" Setup</h3>
            <p className="mt-2 text-blue-100 max-w-xl">
              Our expert team will build your entire system, train Kewa on your business data, and launch your funnels in 48 hours.
            </p>
          </div>
          
          <div className="relative z-10 shrink-0">
            <Link href="/dfy" className="inline-flex items-center gap-2 bg-white text-[#2C6CF2] px-6 py-3 rounded-lg font-bold shadow hover:bg-gray-50 transition-colors">
              View DFY Packages <ArrowRight size={18}/>
            </Link>
          </div>

          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
        </motion.div>
      </section>

      {/* 4. BENEFITS GRID (Renamed from Features) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold">Everything you need to run a modern business</h2>
          <p className="mt-4 text-gray-600">Most platforms give you tools and expect you to do the work. Hikewa gives you an AI agent that does the work for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div 
                key={f.title} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }} 
                className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F3F8FF] to-white flex items-center justify-center text-[#2C6CF2] mb-6 border border-blue-50">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-xl mb-3">{f.title}</h3>
                <p className="text-gray-600 leading-relaxed">{f.body}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* INTEGRATIONS STRIP */}
      <section className="py-12 border-y border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/3">
            <h4 className="text-xl font-bold">Connects instantly with your stack</h4>
            <p className="text-sm text-gray-500 mt-2">No complex coding. Kewa talks to your favorite apps directly.</p>
          </div>
          <div className="flex items-center gap-4 overflow-x-auto md:w-2/3 pb-2">
            {["Google", "Outlook", "Facebook", "Instagram", "Twilio", "Zapier", "Stripe"].map((name) => (
              <div key={name} className="shrink-0 flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border text-sm font-medium text-gray-600">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTIONS / BENEFITS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="rounded-3xl bg-gray-900 text-white p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-3 gap-10 divide-y md:divide-y-0 md:divide-x divide-gray-700">
            {sections.map((s) => (
              <div key={s.title} className="pt-8 md:pt-0 md:pl-8 first:pl-0">
                <h4 className="font-bold text-xl mb-3 text-blue-300">{s.title}</h4>
                <p className="text-gray-300 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 text-center">
        <h2 className="text-4xl font-extrabold mb-6">Ready to hire Kewa?</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Start your free trial today. Or let our experts handle the entire setup for you.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/start-free"
            className="px-8 py-4 rounded-xl bg-[#2C6CF2] text-white font-bold shadow-lg hover:bg-blue-600 transition-colors"
          >
            Start Free Trial
          </Link>
          <Link
            href="/demo"
            className="px-8 py-4 rounded-xl border border-gray-300 text-gray-700 font-bold hover:bg-white transition-colors"
          >
            Book Strategy Call
          </Link>
        </div>
        <p className="mt-6 text-sm text-gray-400">14-day free trial • Cancel anytime</p>
      </section>

    </main>
  );
}