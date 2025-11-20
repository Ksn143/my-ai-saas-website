// src/app/login/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { login } from "@/app/actions"; // Import Action

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    
    // Call server action
    const result = await login(formData);
    
    if (result?.error) {
        setErrorMsg(result.error);
        setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full grid lg:grid-cols-2">
      {/* LEFT SIDE */}
      <div className="flex flex-col justify-center px-6 py-12 lg:px-20 xl:px-24 bg-white">
        <Link href="/" className="flex items-center gap-2 mb-10 w-fit">
          <span className="font-bold text-xl text-gray-900">Hikewa</span>
        </Link>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
          <p className="text-gray-500 mb-8">Log in to your dashboard.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
             {errorMsg && <p className="text-red-500 text-sm bg-red-50 p-3 rounded">{errorMsg}</p>}

             <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Email</label>
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
                <input 
                  name="password" // ADDED THIS
                  type="password" 
                  required 
                  className="w-full px-4 h-12 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#2C6CF2] outline-none" 
                  placeholder="••••••••"
                />
             </div>

             <Button disabled={isLoading} className="w-full h-12 bg-[#2C6CF2] hover:bg-blue-600 text-white font-bold rounded-xl mt-2">
               {isLoading ? <Loader2 className="animate-spin"/> : "Log In"}
             </Button>
          </form>
        </motion.div>
      </div>
      
      {/* RIGHT SIDE Placeholder */}
      <div className="hidden lg:flex bg-slate-900"></div>
    </div>
  );
}