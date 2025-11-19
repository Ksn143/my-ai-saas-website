"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Check, 
  Settings, 
  Smartphone, 
  Database, 
  BarChart, 
  MessageSquare, 
  ArrowRight,
  Zap
} from "lucide-react";

// Feature Data
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
  {
    title: "Unified Inbox",
    body: "Manage Facebook, Instagram, Email, and SMS conversations from one single dashboard.",
    icon: Zap,
  },
];

// Common Gradient Text Class (Same as Homepage)
const gradientTextClass = "text-transparent bg-clip-text bg-gradient-to-r from-[#2C6CF2] to-[#7A4BFF]";

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 font-sans">
      
      <main>
        {/* HERO SECTION */}
        <section className="bg-white overflow-hidden relative">
          {/* Noise Background */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            <div className="lg:col-span-6">
              <motion.h1 
                initial={{ y: 10, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 0.5 }} 
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight"
              >
                Your AI Workforce. <br/>
                <span className={gradientTextClass}>
                  Not Just Another Tool.
                </span>
              </motion.h1>
              <motion.p 
                initial={{ y: 10, opacity: 0 }} 
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
                <a href="/start-free" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#2C6CF2] to-[#7A4BFF] text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-1 transition-all duration-300">
                  Start Free Trial
                </a>
                <a href="/demo" className="inline-flex items-center px-8 py-4 border border-gray-200 bg-white rounded-xl text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                  See Kewa in Action
                </a>
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

            {/* Right Side: 3D Perspective Chat Mockup (Matches Homepage) */}
            <div className="lg:col-span-6 relative perspective-1000">
               <motion.div 
                 initial={{ rotateY: -10, rotateX: 5, opacity: 0 }} 
                 animate={{ rotateY: 0, rotateX: 0, opacity: 1 }} 
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 className="relative rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden"
                 style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
               >
                <div className="bg-gray-50 border-b px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-4 text-xs text-gray-400 font-mono">kewa.ai/product</div>
                </div>

                <div className="p-6 bg-slate-50 space-y-6 min-h-[340px] flex flex-col justify-center">
                  
                  {/* User Message */}
                  <motion.div 
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-end"
                  >
                    <div className="bg-[#2C6CF2] text-white px-5 py-3 rounded-2xl rounded-tr-sm shadow-md text-sm max-w-[85%]">
                      Send a promo email to all leads from last week who didn't book a call.
                    </div>
                  </motion.div>

                  {/* Kewa Processing */}
                  <motion.div 
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="flex justify-start items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] flex items-center justify-center text-white font-bold text-sm shadow-lg shrink-0">KW</div>
                    <div className="bg-white border border-gray-100 px-5 py-4 rounded-2xl rounded-tl-sm shadow-md text-sm text-gray-800 max-w-[90%]">
                      <p className="font-semibold text-[#2C6CF2] mb-2">On it! Here is the plan:</p>
                      <ul className="space-y-2 mb-3 text-gray-600 text-xs sm:text-sm">
                        <li className="flex items-center gap-2"><Check size={14} className="text-green-500"/> Found 142 leads matching criteria</li>
                        <li className="flex items-center gap-2"><Check size={14} className="text-green-500"/> Drafted "Missed Opportunity" email</li>
                        <li className="flex items-center gap-2"><Check size={14} className="text-green-500"/> Scheduled for 10:00 AM tomorrow</li>
                      </ul>
                      <div className="flex gap-2">
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-md text-xs font-medium transition">View Draft</button>
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-md text-xs font-medium transition">Send Now</button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* DFY CALLOUT BANNER (Gradient Style) */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 -mt-10 relative z-20">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2C6CF2] to-[#7A4BFF] text-white shadow-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-bold mb-3 border border-white/20 uppercase tracking-wide">
                Don't want to build it yourself?
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Get the "Done-For-You" Setup</h3>
              <p className="mt-2 text-blue-100 max-w-xl text-lg">
                Our expert team will build your entire system, train Kewa on your business data, and launch your funnels in 48 hours.
              </p>
            </div>
            
            <div className="relative z-10 shrink-0">
              <a href="/dfy" className="inline-flex items-center gap-2 bg-white text-[#2C6CF2] px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-gray-50 transition-colors">
                View DFY Packages <ArrowRight size={18}/>
              </a>
            </div>

            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
          </motion.div>
        </section>

        {/* BENEFITS GRID (Matching Homepage Cards) */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold ${gradientTextClass} mb-4`}>
              Everything you need to run a modern business
            </h2>
            <p className="text-lg text-gray-600">Most platforms give you tools and expect you to do the work. Hikewa gives you an AI agent that does the work for you.</p>
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
                  whileHover={{ y: -8 }} 
                  className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl hover:shadow-2xl hover:border-blue-300 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Subtle Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"></div>

                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-[#2C6CF2] mb-6 border border-blue-50 relative z-10 group-hover:scale-110 transition-transform">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-bold text-xl mb-3 text-gray-900 relative z-10 group-hover:text-[#2C6CF2] transition-colors">{f.title}</h3>
                  <p className="text-gray-600 leading-relaxed relative z-10">{f.body}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* INTEGRATIONS STRIP */}
        <section className="py-12 border-y border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/3 text-center md:text-left">
              <h4 className="text-xl font-bold text-gray-900">Connects instantly with your stack</h4>
              <p className="text-sm text-gray-500 mt-2">No complex coding. Kewa talks to your favorite apps directly.</p>
            </div>
            <div className="flex items-center justify-center gap-4 overflow-x-auto md:w-2/3 pb-2">
               {/* Colorful Logos using CDN */}
               {["google", "facebook", "instagram", "whatsapp", "shopify"].map((name) => (
                  <div key={name} className="w-12 h-12 hover:scale-110 transition-transform duration-300">
                     <img src={`https://cdn.simpleicons.org/${name}`} alt={name} className="w-full h-full" />
                  </div>
               ))}
               <span className="text-sm font-bold text-gray-400 ml-4">+ 5000 more</span>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
            <div className="bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] p-12 rounded-3xl text-white shadow-2xl shadow-blue-500/40 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to hire Kewa?</h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
                Start your free trial today. Or let our experts handle the entire setup for you.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/start-free"
                  className="px-8 py-4 rounded-xl bg-white text-[#2C6CF2] font-bold shadow-lg hover:bg-blue-50 transition-colors"
                >
                  Start Free Trial
                </a>
                <a
                  href="/demo"
                  className="px-8 py-4 rounded-xl border border-white/30 text-white font-bold hover:bg-white/10 transition-colors"
                >
                  Book Strategy Call
                </a>
              </div>
              <p className="mt-6 text-sm text-blue-200/80 font-medium">14-day free trial • Cancel anytime</p>
            </div>
        </section>

      </main>
    </div>
  );
}