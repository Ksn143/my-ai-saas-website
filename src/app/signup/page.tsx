"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Sparkles, Lock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add signup logic here
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full grid lg:grid-cols-2">
      
      {/* --- LEFT SIDE: SIGNUP FORM --- */}
      <div className="flex flex-col justify-center px-6 py-12 lg:px-20 xl:px-24 bg-white">
        
        <Link href="/" className="flex items-center gap-2 mb-10 w-fit">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] flex items-center justify-center text-white font-bold text-sm shadow-sm">
            KW
          </div>
          <span className="font-bold text-xl text-gray-900">Hikewa</span>
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Updated Headline for Trial Strategy */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-bold mb-4 border border-green-100">
             <Sparkles size={12} /> NO PAYMENT DUE TODAY
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Start your 7-Day Free Trial</h1>
          <p className="text-gray-500 mb-8">
            Experience the full DFY setup risk-free. Cancel anytime before the trial ends and pay nothing.
          </p>

          {/* Google Button */}
          <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 font-medium h-12 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all mb-6">
             <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
             </svg>
             Sign up with Google
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-100" /></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-400 font-medium">Or with email</span></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">First Name</label>
                  <input type="text" required className="w-full px-4 h-11 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#2C6CF2] outline-none transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">Last Name</label>
                  <input type="text" required className="w-full px-4 h-11 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#2C6CF2] outline-none transition-all" />
                </div>
             </div>

             <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Work Email</label>
                <input type="email" required className="w-full px-4 h-11 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#2C6CF2] outline-none transition-all" placeholder="name@company.com" />
             </div>

             <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Password</label>
                <input type="password" required className="w-full px-4 h-11 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#2C6CF2] outline-none transition-all" placeholder="••••••••" />
             </div>

             <Button disabled={isLoading} className="w-full h-12 bg-[#2C6CF2] hover:bg-blue-600 text-white font-bold rounded-xl mt-2 text-base shadow-lg transition-all">
               {isLoading ? <Loader2 className="animate-spin"/> : "Start Free Trial"}
             </Button>
             
             <p className="text-xs text-center text-gray-400 mt-4">
               By signing up, you agree to our Terms & Privacy Policy.
             </p>
          </form>

          <p className="text-center text-sm text-gray-500 mt-8">
            Already have an account? <Link href="/login" className="text-[#2C6CF2] font-semibold hover:underline">Log in</Link>
          </p>
        </motion.div>
      </div>

      {/* --- RIGHT SIDE: TRUST & GUARANTEE (No Fake Reviews) --- */}
      <div className="hidden lg:flex flex-col justify-between bg-slate-900 p-12 xl:p-16 text-white relative overflow-hidden">
        
        {/* Background Gradient */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2C6CF2] opacity-10 blur-[120px] rounded-full -mr-20 -mt-20 pointer-events-none"></div>

        <div className="relative z-10 mt-10">
           {/* Transparency Badge */}
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold mb-8 tracking-wide">
             <ShieldCheck size={14} className="text-green-400" /> RISK-FREE GUARANTEE
           </div>

           {/* Founder's Note / Philosophy */}
           <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold leading-tight mb-4">
                "We build trust before we bill you."
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                We know trying a new service is a leap of faith. That's why we don't charge you a penny until you've had 7 days to see your new system in action. If you don't love it, you don't pay.
              </p>
              
              <div className="mt-6 flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-[#2C6CF2] flex items-center justify-center font-bold text-xs">HK</div>
                 <div>
                    <div className="font-bold text-white">The Hikewa Promise</div>
                    <div className="text-xs text-slate-400">100% Satisfaction or $0</div>
                 </div>
              </div>
           </div>
        </div>

        {/* What happens next (Process) */}
        <div className="relative z-10">
           <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mb-6">WHAT HAPPENS NEXT?</p>
           <div className="space-y-5">
               <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold text-sm border border-blue-500/30">1</div>
                  <div>
                     <div className="font-bold text-white">Create Account</div>
                     <div className="text-sm text-slate-400">Start your 7-day free trial.</div>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold text-sm border border-blue-500/30">2</div>
                  <div>
                     <div className="font-bold text-white">Onboarding Form</div>
                     <div className="text-sm text-slate-400">Tell us about your business in 2 mins.</div>
                  </div>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-bold text-sm border border-green-500/30">3</div>
                  <div>
                     <div className="font-bold text-white">We Build It</div>
                     <div className="text-sm text-slate-400">Our team sets up everything in 48 hours.</div>
                  </div>
               </div>
           </div>
        </div>

      </div>

    </div>
  );
}