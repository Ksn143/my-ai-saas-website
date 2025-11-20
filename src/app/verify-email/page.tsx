"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function VerifyEmailPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
        
        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <Mail className="w-8 h-8 text-[#2C6CF2]" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Check your email</h1>
        <p className="text-gray-500 mb-8">
          We've sent a verification link to your email address. <br/>
          Please click the link to activate your account.
        </p>

        <div className="space-y-4">
          <Link href="/login">
            <Button variant="outline" className="w-full h-12 rounded-xl border-gray-200 hover:bg-gray-50">
              Back to Login
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}