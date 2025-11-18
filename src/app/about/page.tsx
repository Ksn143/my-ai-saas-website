"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Users, Heart, Zap, Map, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  { icon: Zap, title: "Simplicity First", desc: "We believe enterprise power shouldn't require an engineering degree." },
  { icon: Users, title: "Human + AI", desc: "AI shouldn't replace humans; it should give them superpowers." },
  { icon: Heart, title: "Customer Obsession", desc: "We don't just build software; we build your success." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* HERO */}
      <section className="pt-32 pb-20 text-center px-6">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            We Help Small Businesses <br/>
            <span className="text-[#2C6CF2]">Punch Above Their Weight.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Hikewa was born from a simple frustration: Why do big companies get all the cool AI toys, while small businesses are stuck with spreadsheets?
          </p>
        </motion.div>
      </section>

      {/* MISSION GRID */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }} 
              className="bg-white p-8 rounded-2xl border shadow-sm"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-[#2C6CF2]">
                <v.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{v.title}</h3>
              <p className="text-gray-600">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOUNDER'S NOTE */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/3">
            <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden relative">
               {/* Replace with your photo */}
               <div className="absolute inset-0 flex items-center justify-center text-gray-400">Founder Photo</div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold mb-6">Why I Built Hikewa</h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>I saw too many talented business owners burning out. Not because they weren't good at what they do, but because they were drowning in admin work.</p>
              <p>They were becoming full-time schedulers, email writers, and tech support agents. That's not why you started your business.</p>
              <p>Hikewa is my answer to that burnout. It's the automated team member I wish I had when I started.</p>
              <p className="font-bold text-gray-900 mt-4">- Founder, Hikewa</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <h2 className="text-3xl font-bold mb-12">Where We Are Going</h2>
           <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
                 <div className="text-[#2C6CF2] font-bold mb-2">Phase 1 (Now)</div>
                 <h4 className="text-xl font-bold mb-2">AI Assistants</h4>
                 <p className="text-slate-400 text-sm">Perfecting Kewa to handle booking, support, and sales conversations.</p>
              </div>
              <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 opacity-70">
                 <div className="text-gray-400 font-bold mb-2">Phase 2</div>
                 <h4 className="text-xl font-bold mb-2">Voice Agents</h4>
                 <p className="text-slate-400 text-sm">Kewa will soon answer your phone calls and speak to customers.</p>
              </div>
              <div className="p-6 bg-slate-800 rounded-xl border border-slate-700 opacity-50">
                 <div className="text-gray-400 font-bold mb-2">Phase 3</div>
                 <h4 className="text-xl font-bold mb-2">Auto-Pilot</h4>
                 <p className="text-slate-400 text-sm">Autonomous agents that run marketing campaigns without supervision.</p>
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold mb-8">Join the Revolution.</h2>
        <Link href="/start-free" className="inline-flex items-center gap-2 bg-[#2C6CF2] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-600 transition-all shadow-lg">
          Start Your Journey <ArrowRight size={20}/>
        </Link>
      </section>

    </div>
  );
}