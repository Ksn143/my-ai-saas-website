"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MessageCircle, Phone, FileText, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// FAQ Data
const faqData = [
  // --- DFY / SETUP ---
  {
    id: 1,
    category: "DFY Setup",
    q: "What exactly do I get in the '48-Hour Launch'?",
    a: "You get a fully functional system built by us. This includes: 1) A high-converting funnel/website, 2) Connection to your Google Calendar & Email, 3) Kewa AI trained on your business data, and 4) SMS/Email automation sequences. We hand over the keys in 48 hours."
  },
  {
    id: 2,
    category: "DFY Setup",
    q: "Do I need a website before I start?",
    a: "No! In fact, many clients replace their old, slow websites with our high-converting funnels. Our system includes landing page hosting, so you don't need Wix or WordPress if you don't want them."
  },
  {
    id: 3,
    category: "DFY Setup",
    q: "What access do you need to build this?",
    a: "We keep it simple. We usually need access to your domain DNS (to connect the funnel) and a Google/Outlook login (to sync your calendar). We send a secure form for this after you sign up."
  },
  
  // --- PRICING & BILLING ---
  {
    id: 4,
    category: "Pricing",
    q: "Is the setup fee recurring?",
    a: "No. The setup fee (e.g., $499) is a ONE-TIME payment for our expert team's labor. After that, you only pay the monthly software subscription (starting at $99/mo) to keep the system running."
  },
  {
    id: 5,
    category: "Pricing",
    q: "What happens if I cancel?",
    a: "You own your data. You can export your contacts and leads at any time. If you cancel, the AI agent and automations will stop working at the end of your billing cycle."
  },
  {
    id: 6,
    category: "Pricing",
    q: "Are there extra costs for SMS/Email?",
    a: "Your plan includes a generous monthly credit limit (e.g., 2,500 credits). If you go over, we bill a small overage fee ($10 per 1,000 credits). This ensures you never miss a lead."
  },

  // --- KEWA AI AGENT ---
  {
    id: 7,
    category: "Kewa AI",
    q: "Will the AI say weird things to my clients?",
    a: "No. Kewa is 'Guardrailed'. We train it strictly on your provided FAQs and business info. If it doesn't know an answer, it is programmed to say 'I will have a team member contact you' rather than making something up."
  },
  {
    id: 8,
    category: "Kewa AI",
    q: "Can Kewa book appointments directly?",
    a: "Yes. Kewa connects to your real-time calendar availability. It can propose times, confirm bookings, and add them to your schedule without you lifting a finger."
  },

  // --- INTEGRATIONS ---
  {
    id: 9,
    category: "Integrations",
    q: "Does this work with my existing tools?",
    a: "Most likely. We have direct integrations with Google, Outlook, Facebook, Instagram, Stripe, and Twilio. For everything else, we connect seamlessly via Zapier."
  }
];

const categories = ["All", "DFY Setup", "Pricing", "Kewa AI", "Integrations"];

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Filter Logic
  const filteredFaqs = faqData.filter((item) => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.q.toLowerCase().includes(searchQuery.toLowerCase()) || item.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      
      {/* HERO */}
      <section className="pt-32 pb-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            How can we <span className="text-[#2C6CF2]">help you?</span>
          </motion.h1>
          <p className="text-lg text-gray-600 mb-8">
            Answers about our Done-For-You setup, Kewa AI, and pricing.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <input 
              type="text" 
              placeholder="Search questions (e.g. 'Cancellation', 'SMS cost')..." 
              className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 shadow-sm focus:ring-2 focus:ring-[#2C6CF2] focus:border-transparent outline-none transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 -translate-x-0 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? "bg-gray-900 text-white shadow-md" 
                    : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Questions Grid */}
          <div className="space-y-4">
            <AnimatePresence>
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, idx) => (
                  <motion.div 
                    key={faq.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <button 
                      onClick={() => setOpenIndex(openIndex === faq.id ? null : faq.id)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                      <span className="font-bold text-lg text-gray-800">{faq.q}</span>
                      <ChevronDown 
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === faq.id ? "rotate-180" : ""}`} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {openIndex === faq.id && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              ) : (
                <div className="text-center py-12 text-gray-500">
                  No questions found matching "{searchQuery}". <br/>
                  <Link href="/contact" className="text-[#2C6CF2] font-medium underline mt-2 inline-block">Contact Support</Link>
                </div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* CONTACT / SUPPORT BOX */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div>
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="text-gray-600">Can't find the answer you're looking for? Please chat to our friendly team.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Button asChild variant="outline" className="w-full md:w-auto bg-white">
              <Link href="/contact" className="flex items-center gap-2">
                <MessageCircle size={18}/> Chat with Us
              </Link>
            </Button>
            <Button asChild className="w-full md:w-auto bg-[#2C6CF2]">
              <Link href="/demo" className="flex items-center gap-2">
                <Phone size={18}/> Book Strategy Call
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ADDITIONAL RESOURCES */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
           <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group">
                 <div className="w-10 h-10 bg-blue-100 text-[#2C6CF2] rounded-lg flex items-center justify-center mb-4">
                    <FileText size={20}/>
                 </div>
                 <h4 className="font-bold mb-2 flex items-center gap-2">Documentation <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity"/></h4>
                 <p className="text-sm text-gray-600">Technical guides for API and Webhooks.</p>
              </div>

              <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group">
                 <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4">
                    <MessageCircle size={20}/>
                 </div>
                 <h4 className="font-bold mb-2 flex items-center gap-2">Community <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity"/></h4>
                 <p className="text-sm text-gray-600">Join our Facebook group of business owners.</p>
              </div>

              <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer group">
                 <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Phone size={20}/>
                 </div>
                 <h4 className="font-bold mb-2 flex items-center gap-2">Priority Support <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity"/></h4>
                 <p className="text-sm text-gray-600">Available for Pro & Agency plans.</p>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
}