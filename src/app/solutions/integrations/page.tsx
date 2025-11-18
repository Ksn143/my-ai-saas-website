"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const apps = [
  { name: "Google Calendar", cat: "Calendar", logo: "📅" },
  { name: "Stripe", cat: "Payments", logo: "💳" },
  { name: "Zapier", cat: "Automation", logo: "⚡" },
  { name: "Gmail / Outlook", cat: "Email", logo: "📧" },
  { name: "Facebook Ads", cat: "Marketing", logo: "📢" },
  { name: "Slack", cat: "Communication", logo: "#️⃣" },
  { name: "Shopify", cat: "E-commerce", logo: "🛍️" },
  { name: "QuickBooks", cat: "Finance", logo: "💰" },
];

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section className="pt-32 pb-12 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Connects With <span className="text-[#2C6CF2]">Everything.</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Hikewa plays nice with the tools you already use. No coding required.
        </p>
      </section>

      <section className="py-12 px-6">
         <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
               {apps.map((app, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.05 }} className="p-6 rounded-xl border shadow-sm flex flex-col items-center text-center hover:border-blue-200 transition-colors bg-white">
                     <div className="text-4xl mb-4">{app.logo}</div>
                     <h3 className="font-bold">{app.name}</h3>
                     <p className="text-xs text-gray-500 mt-1">{app.cat}</p>
                  </motion.div>
               ))}
            </div>
            
            <div className="mt-16 text-center bg-gray-900 text-white p-10 rounded-2xl">
               <h3 className="text-2xl font-bold mb-4">Don't see your tool?</h3>
               <p className="text-gray-400 mb-6">We connect to 5,000+ apps via Zapier and Webhooks.</p>
               <Link href="/contact" className="text-[#2C6CF2] font-bold hover:underline">Request an Integration</Link>
            </div>
         </div>
      </section>
    </div>
  );
}