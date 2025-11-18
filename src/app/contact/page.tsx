"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  // Fake form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* HERO */}
      <section className="pt-32 pb-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
          >
            Get in touch with <span className="text-[#2C6CF2]">Hikewa.</span>
          </motion.h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a question about our DFY setup? Need enterprise pricing? Or just want to say hi? We're here to help.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          
          {/* LEFT: Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We are a remote-first company helping businesses across the US automate their operations. We typically reply to emails within 4 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-[#2C6CF2]">
                   <Mail size={20} />
                </div>
                <div>
                   <h4 className="font-bold text-gray-900">Email Us</h4>
                   <p className="text-sm text-gray-600 mb-1">For general inquiries & support:</p>
                   <a href="mailto:contact@hikewa.com" className="text-[#2C6CF2] font-medium hover:underline">contact@hikewa.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600">
                   <MessageSquare size={20} />
                </div>
                <div>
                   <h4 className="font-bold text-gray-900">Live Chat</h4>
                   <p className="text-sm text-gray-600 mb-1">Available for existing customers:</p>
                   <span className="text-gray-800 font-medium">Mon-Fri, 9am - 6pm EST</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600">
                   <MapPin size={20} />
                </div>
                <div>
                   <h4 className="font-bold text-gray-900">Headquarters</h4>
                   <p className="text-sm text-gray-600">
                     Hikewa Inc.<br/>
                     Delaware, USA
                   </p>
                </div>
              </div>
            </div>

            {/* FAQ Teaser */}
            <div className="mt-12 p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <h4 className="font-bold mb-2">Looking for quick answers?</h4>
              <p className="text-sm text-gray-600 mb-4">Check our FAQ page for questions about pricing, setup time, and cancellations.</p>
              <Button asChild variant="outline" className="bg-white">
                <a href="/faq">Visit Help Center</a>
              </Button>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            {formStatus === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-gray-600">We'll get back to you shortly.</p>
                <Button onClick={() => setFormStatus("idle")} className="mt-6" variant="outline">Send another</Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#2C6CF2] focus:border-transparent outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#2C6CF2] focus:border-transparent outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input required type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#2C6CF2] focus:border-transparent outline-none transition-all" placeholder="john@company.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#2C6CF2] focus:border-transparent outline-none transition-all bg-white">
                    <option>I have a question about pricing</option>
                    <option>I want to book a demo</option>
                    <option>Partnership / Affiliate</option>
                    <option>Technical Support</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#2C6CF2] focus:border-transparent outline-none transition-all" placeholder="How can we help you?" />
                </div>

                <Button disabled={formStatus === "submitting"} className="w-full py-6 text-lg bg-[#2C6CF2] hover:bg-blue-600">
                  {formStatus === "submitting" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}