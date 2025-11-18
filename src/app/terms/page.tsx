"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* HEADER */}
      <div className="bg-gray-50 border-b border-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#2C6CF2] mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Terms of Service</h1>
          <p className="text-gray-500">Last updated: November 10, 2025</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-blue prose-lg text-gray-600">
          
          <p>
            Please read these Terms of Service ("Terms") carefully before using the Hikewa website and services operated by Hikewa Inc. ("us", "we", or "our").
          </p>
          <p>
            By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.
          </p>

          <h3 className="text-gray-900 font-bold mt-8 mb-4 text-xl">1. Description of Service</h3>
          <p>
            Hikewa provides an AI-powered business automation platform ("Software") and Done-For-You implementation services ("DFY Setup"). We help businesses automate customer interactions, bookings, and lead management using AI agents.
          </p>

          <h3 className="text-gray-900 font-bold mt-8 mb-4 text-xl">2. 7-Day Free Trial & Payments</h3>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Trial Period:</strong> We offer a 7-day risk-free trial for our services. You will not be charged during this period.</li>
            <li><strong>Billing:</strong> At the end of the 7-day trial, the "One-Time Setup Fee" and the first month's "Subscription Fee" will be automatically charged to the payment method on file, unless you cancel before the trial ends.</li>
            <li><strong>Subscription:</strong> The Service is billed on a recurring monthly or annual basis.</li>
            <li><strong>Refunds:</strong> If you are not satisfied with the DFY setup, you may request a refund within the first 30 days of your paid subscription.</li>
          </ul>

          <h3 className="text-gray-900 font-bold mt-8 mb-4 text-xl">3. User Accounts</h3>
          <p>
            When you create an account with us, you must provide accurate and complete information. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.
          </p>

          <h3 className="text-gray-900 font-bold mt-8 mb-4 text-xl">4. Intellectual Property</h3>
          <p>
            The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of Hikewa Inc. and its licensors. You retain all rights to the data and content you upload to the Service.
          </p>

          <h3 className="text-gray-900 font-bold mt-8 mb-4 text-xl">5. Acceptable Use</h3>
          <p>
            You agree not to use the Service for any unlawful purpose or to solicit others to perform or participate in any unlawful acts. You must not use the AI agent to generate spam, harassment, or fraudulent content.
          </p>

          <h3 className="text-gray-900 font-bold mt-8 mb-4 text-xl">6. Limitation of Liability</h3>
          <p>
            In no event shall Hikewa, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
          </p>

          <h3 className="text-gray-900 font-bold mt-8 mb-4 text-xl">7. Changes to Terms</h3>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
          </p>

          <h3 className="text-gray-900 font-bold mt-8 mb-4 text-xl">8. Contact Us</h3>
          <p>
            If you have any questions about these Terms, please contact us at: <a href="mailto:support@hikewa.com" className="text-[#2C6CF2] hover:underline">support@hikewa.com</a>
          </p>

        </div>
      </div>
    </div>
  );
}