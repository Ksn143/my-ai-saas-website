"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      
      {/* HEADER */}
      <div className="bg-gray-50 border-b border-gray-100 py-12">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#2C6CF2] mb-6 transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: November 10, 2025</p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="prose prose-blue prose-lg text-gray-600">
          
          <p>
            At Hikewa ("we," "our," or "us"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services (collectively, the "Service").
          </p>

          <h3 className="text-gray-900 font-bold mt-8 mb-4 text-xl">1. Information We Collect</h3>
          <p>We collect information that you provide directly to us, such as when you create an account, subscribe to our service, or contact customer support.</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Account Information:</strong> Name, email address, password, and business details.</li>
            <li><strong>Payment Information:</strong> We use third-party processors (like Stripe) to handle payments. We do not store your credit card details.</li>
            <li><strong>Usage Data:</strong> Information about how you use our dashboard, AI agent, and website (e.g., IP address, browser type, pages visited).</li>
          </ul>

          <h3 className="text-gray-900 font-bold mt-8 mb-4 text-xl">2. How We Use Your Information</h3>
          <p>We use the collected information for the following purposes:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>To provide, maintain, and improve our SaaS and Done-For-You services.</li>
            <li>To process transactions and send related information, including confirmations and invoices.</li>
            <li>To send you technical notices, updates, security alerts, and support messages.</li>
            <li>To train and optimize our AI models (Kewa) specifically for your account (your data remains isolated).</li>
          </ul>

          <h3 className="text-gray-900 font-bold mt-8 mb-4 text-xl">3. Data Sharing & Disclosure</h3>
          <p>We do not sell your personal data. We may share your information in the following circumstances:</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li><strong>Service Providers:</strong> With third-party vendors (e.g., OpenAI for AI processing, Stripe for payments, Vercel for hosting) who need access to such information to carry out work on our behalf.</li>
            <li><strong>Legal Requirements:</strong> If required to do so by law or in response to valid requests by public authorities.</li>
          </ul>

          <h3 className="text-gray-900 font-bold mt-8 mb-4 text-xl">4. Data Security</h3>
          <p>
            We implement industry-standard security measures to protect your data, including encryption (SSL) and secure access controls. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h3 className="text-gray-900 font-bold mt-8 mb-4 text-xl">5. Your Rights</h3>
          <p>
            Depending on your location, you may have the right to access, correct, or delete your personal information. You can manage your account settings directly within the Hikewa dashboard or contact us for assistance.
          </p>

          <h3 className="text-gray-900 font-bold mt-8 mb-4 text-xl">6. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="font-medium text-gray-900">
            Email: <a href="mailto:support@hikewa.com" className="text-[#2C6CF2] hover:underline">support@hikewa.com</a>
          </p>

        </div>
      </div>
    </div>
  );
}