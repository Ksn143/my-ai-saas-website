// src/app/signup/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Loader2, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
// Import the server action
import { signup } from "@/app/actions"; 

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    
    // Call the server action
    const result = await signup(formData);
    
    if (result?.error) {
        setErrorMsg(result.error);
        setIsLoading(false);
    }
    // If success, the action handles the redirect automatically
  };

  return (
    <div className="min-h-screen w-full grid lg:grid-cols-2">
      {/* LEFT SIDE */}
      <div className="flex flex-col justify-center px-6 py-12 lg:px-20 xl:px-24 bg-white">
        {/* ... Logo and Header code (kept same) ... */}
        <Link href="/" className="flex items-center gap-2 mb-10 w-fit">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] flex items-center justify-center text-white font-bold text-sm shadow-sm">KW</div>
          <span className="font-bold text-xl text-gray-900">Hikewa</span>
        </Link>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create a free account</h1>
          <p className="text-gray-500 mb-8">No credit card required.</p>

          {/* Social Logins Omitted for brevity - keep them if you want */}

          <form onSubmit={handleSubmit} className="space-y-5">
             {errorMsg && <p className="text-red-500 text-sm bg-red-50 p-3 rounded">{errorMsg}</p>}
             
             <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Work Email</label>
                <input 
                    name="email" // ADDED THIS
                    type="email" 
                    required 
                    className="w-full px-4 h-12 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2C6CF2] outline-none" 
                    placeholder="name@company.com" 
                />
             </div>

             <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Password</label>
                <div className="relative">
                  <input 
                    name="password" // ADDED THIS
                    type={showPassword ? "text" : "password"} 
                    required 
                    className="w-full pl-4 pr-12 h-12 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2C6CF2] outline-none" 
                    placeholder="••••••••" 
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
             </div>

             <Button disabled={isLoading} className="w-full h-12 bg-[#2C6CF2] hover:bg-blue-600 text-white font-bold rounded-xl">
               {isLoading ? <Loader2 className="animate-spin"/> : "Get started for free"}
             </Button>
          </form>
          
          <p className="text-center text-sm text-gray-500 mt-8">
            Already have an account? <Link href="/login" className="text-[#2C6CF2] font-semibold hover:underline">Log in</Link>
          </p>
        </motion.div>
      </div>
      
      {/* RIGHT SIDE (Keep your existing code here) */}
      <div className="hidden lg:flex bg-slate-900 p-12 text-white">
        {/* ... Content ... */}
        <h2 className="text-2xl font-bold">Right side content placeholder</h2>
      </div>
    </div>
  );
}