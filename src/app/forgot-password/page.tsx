"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Loader2, ArrowLeft, Mail, CheckCircle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
// Import the server action
import { forgotPassword } from "@/app/actions";

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState(""); // Add error state
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    const formData = new FormData();
    formData.append("email", email);

    // Call Server Action
    const result = await forgotPassword(formData);

    setIsLoading(false);

    if (result?.error) {
      setErrorMsg(result.error);
    } else {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen w-full grid lg:grid-cols-2">
      
      {/* --- LEFT SIDE: FORM --- */}
      <div className="flex flex-col justify-center px-6 py-12 lg:px-20 xl:px-24 bg-white relative">
        
        {/* Back Link */}
        <div className="absolute top-8 left-6 lg:left-12">
          <Link href="/login" className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
            <ArrowLeft size={16} /> Back to Login
          </Link>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md mx-auto"
        >
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] flex items-center justify-center text-white font-bold text-sm shadow-sm">KW</div>
            <span className="font-bold text-xl text-gray-900">Hikewa</span>
          </div>

          {!isSubmitted ? (
            <>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Reset Password</h1>
                <p className="text-gray-500">Enter the email associated with your account.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Error Message Display */}
                {errorMsg && (
                    <div className="p-3 text-sm text-red-500 bg-red-50 border border-red-100 rounded-xl">
                        {errorMsg}
                    </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <input 
                      name="email" // Important for FormData
                      type="email" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 h-11 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#2C6CF2] outline-none transition-all" 
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <Button disabled={isLoading} className="w-full h-12 bg-[#2C6CF2] hover:bg-blue-600 text-white font-bold rounded-xl shadow-lg transition-all">
                  {isLoading ? <Loader2 className="animate-spin"/> : "Send Reset Link"}
                </Button>
              </form>
            </>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Check your email</h2>
              <p className="text-gray-500 mb-8">
                We have sent a password reset link to <span className="font-semibold text-gray-800">{email}</span>.
              </p>
              
              <div className="space-y-4">
                <Button asChild variant="outline" className="w-full h-12 rounded-xl border-gray-200 text-gray-700">
                  <a href="https://gmail.com" target="_blank">Open Email App</a>
                </Button>
                
                <p className="text-sm text-gray-500">
                  Didn't receive the email?{" "}
                  <button onClick={() => setIsSubmitted(false)} className="text-[#2C6CF2] font-semibold hover:underline">
                    Click to resend
                  </button>
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* --- RIGHT SIDE: KEEPING YOUR VISUALS --- */}
      <div className="hidden lg:flex flex-col justify-center items-center bg-slate-900 p-12 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2C6CF2] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 text-center max-w-md">
           <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/10 shadow-2xl">
              <Lock className="text-white w-10 h-10" />
           </div>
           <h2 className="text-3xl font-bold text-white mb-4">Secure Account Recovery</h2>
           <p className="text-slate-400 leading-relaxed">We use enterprise-grade security to protect your data.</p>
        </div>
      </div>

    </div>
  );
}