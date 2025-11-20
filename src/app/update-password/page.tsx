"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { updatePassword } from "@/app/actions";

export default function UpdatePasswordPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const result = await updatePassword(formData);

    if (result?.success) {
      router.push("/dashboard"); // Redirect to dashboard on success
    } else {
      alert("Error updating password");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-2xl font-bold mb-6 text-center">Set New Password</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">New Password</label>
            <input 
              name="password" 
              type="password" 
              required 
              className="w-full mt-1 px-4 h-10 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-[#2C6CF2]" 
            />
          </div>
          <Button disabled={isLoading} className="w-full bg-[#2C6CF2] hover:bg-blue-600">
            {isLoading ? <Loader2 className="animate-spin mr-2"/> : "Update Password"}
          </Button>
        </form>
      </div>
    </div>
  );
}