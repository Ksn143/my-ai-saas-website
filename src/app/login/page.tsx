// src/app/login/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Loader2, LayoutDashboard, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Add login logic here
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full grid lg:grid-cols-2">
      
      {/* --- LEFT SIDE: LOGIN FORM --- */}
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
          <p className="text-gray-500 mb-8">Log in to your dashboard to manage Kewa.</p>

          {/* Social Login Grid (Google, Apple, Microsoft) */}
          <div className="grid grid-cols-3 gap-3 mb-6">
             {/* Google */}
             <button className="flex items-center justify-center h-12 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
             </button>
             
             {/* Apple */}
             <button className="flex items-center justify-center h-12 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74s2.57-.99 4.35-.82c.88.07 2.27.44 3.14 1.63-2.85 1.66-2.39 5.55.63 6.72-.57 1.42-1.32 2.85-2.2 3.7m-2.28-14.9c.99-1.18 1.64-2.83 1.44-4.38-1.39.06-3.09.92-4.08 2.12-.92 1.08-1.7 2.8-1.51 4.34 1.55.12 3.14-.78 4.15-2.08z" />
                </svg>
             </button>

             {/* Microsoft */}
             <button className="flex items-center justify-center h-12 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all">
                <svg className="w-5 h-5" viewBox="0 0 23 23">
                   <path fill="#f35325" d="M1 1h10v10H1z"/>
                   <path fill="#81bc06" d="M12 1h10v10H12z"/>
                   <path fill="#05a6f0" d="M1 12h10v10H1z"/>
                   <path fill="#ffba08" d="M12 12h10v10H12z"/>
                </svg>
             </button>
          </div>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-100" /></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-400 font-medium">Or with email</span></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
             <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Email</label>
                <input 
                  type="email" 
                  required 
                  className="w-full px-4 h-12 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2C6CF2] outline-none transition-all bg-gray-50/50 focus:bg-white" 
                  placeholder="name@company.com"
                />
             </div>

             <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-gray-700">Password</label>
                  <Link href="/forgot-password" className="text-sm text-[#2C6CF2] hover:underline font-medium">Forgot?</Link>
                </div>
                <input 
                  type="password" 
                  required 
                  className="w-full px-4 h-12 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2C6CF2] outline-none transition-all bg-gray-50/50 focus:bg-white" 
                  placeholder="••••••••"
                />
             </div>

             <Button disabled={isLoading} className="w-full h-12 bg-[#2C6CF2] hover:bg-blue-600 text-white font-bold rounded-xl mt-2 text-base shadow-lg shadow-blue-500/30 transition-all">
               {isLoading ? <Loader2 className="animate-spin"/> : "Log In"}
             </Button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-8">
            Don't have an account? <Link href="/signup" className="text-[#2C6CF2] font-semibold hover:underline">Start Free Trial</Link>
          </p>
        </motion.div>
      </div>

      {/* --- RIGHT SIDE: DASHBOARD SNEAK PEEK --- */}
      <div className="hidden lg:flex flex-col justify-center items-center bg-slate-900 p-12 relative overflow-hidden">
        
        {/* Background Gradient */}
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#7A4BFF] opacity-20 blur-[120px] rounded-full -ml-20 -mb-20 pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative z-10 w-full max-w-md"
        >
           <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Your growth on autopilot.</h2>
              <p className="text-slate-400">Log in to see what Kewa accomplished today.</p>
           </div>

           {/* Fake Stats Card */}
           <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#2C6CF2] rounded-lg flex items-center justify-center text-white"><LayoutDashboard size={20}/></div>
                    <div>
                       <div className="text-white font-bold">Weekly Summary</div>
                       <div className="text-xs text-slate-400">Last 7 days</div>
                    </div>
                 </div>
                 <span className="text-green-400 text-sm font-bold bg-green-500/10 px-2 py-1 rounded">+24% Growth</span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <div className="bg-slate-800/50 p-4 rounded-xl border border-white/5">
                    <div className="text-slate-400 text-xs mb-1 flex items-center gap-2"><Users size={12}/> New Leads</div>
                    <div className="text-2xl font-bold text-white">142</div>
                 </div>
                 <div className="bg-slate-800/50 p-4 rounded-xl border border-white/5">
                    <div className="text-slate-400 text-xs mb-1 flex items-center gap-2"><TrendingUp size={12}/> Bookings</div>
                    <div className="text-2xl font-bold text-white">18</div>
                 </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/10 text-center">
                 <p className="text-xs text-slate-400">Kewa saved you <span className="text-white font-bold">12 hours</span> of work this week.</p>
              </div>
           </div>
        </motion.div>

      </div>

    </div>
  );
}