"use client";

import React, { useState } from "react";
import { 
  User, 
  Bot, 
  CreditCard, 
  Lock, 
  Save, 
  Upload,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Shadcn Input
import { Textarea } from "@/components/ui/textarea"; // Shadcn Textarea (npx shadcn@latest add textarea)
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Shadcn Tabs

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = () => {
    setIsLoading(true);
    // इथे डेटाबेस सेव्ह लॉजिक येईल
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
          <p className="text-sm text-gray-500">तुमचे अकाउंट आणि AI एजंट सेटिंग्स येथे बदला.</p>
        </div>
        <Button onClick={handleSave} disabled={isLoading} className="bg-[#2C6CF2] hover:bg-blue-600">
          {isLoading ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      <Tabs defaultValue="agent" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="agent" className="gap-2"><Bot size={16}/> AI Agent</TabsTrigger>
          <TabsTrigger value="profile" className="gap-2"><User size={16}/> Profile</TabsTrigger>
          <TabsTrigger value="billing" className="gap-2"><CreditCard size={16}/> Billing</TabsTrigger>
        </TabsList>

        {/* --- AI AGENT SETTINGS --- */}
        <TabsContent value="agent" className="space-y-6 mt-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Sparkles className="text-[#2C6CF2]" size={20}/> Kewa Configuration
            </h3>
            
            <div className="grid gap-6">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Agent Name</label>
                <Input placeholder="उदा. Kewa, Sarah, Assistant" defaultValue="Kewa" />
                <p className="text-xs text-gray-500">हे नाव चॅटमध्ये ग्राहकांना दिसेल.</p>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium">Business Industry</label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                  <option>Dentist / Clinic</option>
                  <option>Real Estate</option>
                  <option>Gym / Fitness</option>
                  <option>Plumbing / HVAC</option>
                </select>
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium">Agent Personality / Instructions</label>
                <Textarea 
                  className="min-h-[150px]" 
                  placeholder="उदा. तुम्ही एक मैत्रीपूर्ण रिसेप्शनिस्ट आहात. तुमचे ध्येय ग्राहकांची अपॉइंटमेंट बुक करणे आहे..."
                  defaultValue="You are a helpful assistant for a Dental Clinic. Your goal is to book appointments."
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold mb-4">Contact Information</h3>
            <p className="text-sm text-gray-500 mb-4">एजंट ग्राहकांना ही माहिती देईल.</p>
            <div className="grid md:grid-cols-2 gap-4">
               <div className="grid gap-2">
                 <label className="text-sm font-medium">Phone Number</label>
                 <Input placeholder="+1 (555) 000-0000" />
               </div>
               <div className="grid gap-2">
                 <label className="text-sm font-medium">Email Address</label>
                 <Input placeholder="contact@business.com" />
               </div>
            </div>
          </div>
        </TabsContent>

        {/* --- PROFILE SETTINGS --- */}
        <TabsContent value="profile" className="space-y-6 mt-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold mb-6">Personal Information</h3>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 cursor-pointer hover:bg-gray-50">
                <Upload className="text-gray-400" size={24}/>
              </div>
              <div>
                <h4 className="font-medium">Profile Picture</h4>
                <p className="text-sm text-gray-500">JPG, PNG or GIF. Max 2MB.</p>
              </div>
            </div>

            <div className="grid gap-4">
               <div className="grid md:grid-cols-2 gap-4">
                 <div className="grid gap-2">
                   <label className="text-sm font-medium">First Name</label>
                   <Input defaultValue="John" />
                 </div>
                 <div className="grid gap-2">
                   <label className="text-sm font-medium">Last Name</label>
                   <Input defaultValue="Doe" />
                 </div>
               </div>
               <div className="grid gap-2">
                 <label className="text-sm font-medium">Email</label>
                 <Input defaultValue="john@example.com" disabled className="bg-gray-50" />
               </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold mb-4 text-red-600 flex items-center gap-2">
              <Lock size={18}/> Security
            </h3>
            <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700">
              Reset Password
            </Button>
          </div>
        </TabsContent>

        {/* --- BILLING SETTINGS --- */}
        <TabsContent value="billing" className="space-y-6 mt-6">
           <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center py-12">
              <div className="w-16 h-16 bg-blue-50 text-[#2C6CF2] rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard size={32}/>
              </div>
              <h3 className="text-lg font-bold">Manage Subscription</h3>
              <p className="text-gray-500 mb-6">तुम्ही सध्या <b>Pro Plan</b> वर आहात.</p>
              <Button>Open Customer Portal</Button>
           </div>
        </TabsContent>

      </Tabs>

    </div>
  );
}