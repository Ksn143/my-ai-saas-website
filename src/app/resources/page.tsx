// src/app/resources/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Search, 
  Download, 
  PlayCircle, 
  FileText, 
  ArrowRight, 
  Zap,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Industry Filters
const industries = ["All", "Real Estate", "Dental", "Agency", "Home Services"];

// Actionable Resources (Not just "guides")
const resources = [
  {
    id: 1,
    category: "Dental",
    type: "Template",
    title: "The 'No-Show' Killer SMS Sequence",
    desc: "Copy-paste this 3-step SMS script to reduce patient no-shows by 40%.",
    icon: MessageSquareIcon, // Custom icon helper below
    downloadUrl: "#",
  },
  {
    id: 2,
    category: "Real Estate",
    type: "Playbook",
    title: "Open House Auto-Follow Up Flow",
    desc: "A complete Kewa workflow to text every visitor within 5 minutes of leaving the property.",
    icon: WorkflowIcon,
    downloadUrl: "#",
  },
  {
    id: 3,
    category: "Agency",
    type: "Calculator",
    title: "Client ROI Calculator (Excel)",
    desc: "Show your clients exactly how much money your agency is making them.",
    icon: CalculatorIcon,
    downloadUrl: "#",
  },
  {
    id: 4,
    category: "Home Services",
    type: "Checklist",
    title: "The Ultimate 'Quote-to-Cash' Funnel",
    desc: "Stop chasing invoices. Use this flow to get paid before you leave the job site.",
    icon: FileText,
    downloadUrl: "#",
  },
  {
    id: 5,
    category: "All",
    type: "Video Class",
    title: "Mastering Kewa in 15 Minutes",
    desc: "Watch how to train your AI agent to sound exactly like you.",
    icon: PlayCircle,
    downloadUrl: "#",
  }
];

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("All");

  // Filter Logic
  const filteredResources = activeTab === "All" 
    ? resources 
    : resources.filter(r => r.category === activeTab || r.category === "All");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      
      {/* HERO */}
      <section className="pt-28 pb-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            The Hikewa <span className="text-[#2C6CF2]">Growth Library</span>
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Don't start from scratch. Use our battle-tested templates, playbooks, and scripts to automate your business today.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative mb-10">
             <input 
               type="text" 
               placeholder="Search templates (e.g. 'SMS Script', 'Booking Flow')..." 
               className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
             />
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          {/* Industry Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setActiveTab(ind)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === ind 
                    ? "bg-gray-900 text-white shadow-md" 
                    : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES GRID */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-blue-50 rounded-xl text-[#2C6CF2]">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 bg-gray-50 px-2 py-1 rounded">
                      {item.type}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-6 flex-1 leading-relaxed">
                    {item.desc}
                  </p>
                  
                  <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-500">{item.category}</span>
                    <button className="text-[#2C6CF2] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                      Get Access <ArrowRight size={16} />
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* EMPTY STATE (If no results) */}
          {filteredResources.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500">No resources found for this category yet.</p>
            </div>
          )}

        </div>
      </section>

      {/* DFY INTERRUPTION BANNER (Strategy #3) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <div className="bg-gradient-to-r from-[#2C6CF2] to-[#7A4BFF] rounded-3xl p-10 md:p-16 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-1 rounded-full bg-white/20 text-xs font-bold mb-4 border border-white/10">
                DON'T HAVE TIME TO LEARN?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Skip the tutorials. We'll build it for you.</h2>
              <p className="text-blue-100 text-lg">
                Why spend hours setting up automations? Our DFY team can install any of these workflows into your account in 48 hours.
              </p>
              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-3 text-sm font-medium text-white/90">
                  <CheckCircle className="w-5 h-5 text-green-400" /> No technical setup required
                </li>
                <li className="flex items-center gap-3 text-sm font-medium text-white/90">
                  <CheckCircle className="w-5 h-5 text-green-400" /> Customized to your brand
                </li>
              </ul>
            </div>
            
            <div className="shrink-0">
              <Button asChild className="bg-white text-[#2C6CF2] px-8 py-6 rounded-xl text-lg font-bold hover:bg-gray-50 shadow-lg">
                <Link href="/pricing">Start DFY Setup</Link>
              </Button>
            </div>
          </div>

          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        </div>
      </section>

    </div>
  );
}

// Helper Icons (just for this file display)
function MessageSquareIcon(props: any) { return <Zap {...props} /> }
function WorkflowIcon(props: any) { return <Download {...props} /> }
function CalculatorIcon(props: any) { return <FileText {...props} /> }