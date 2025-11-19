"use client";

import React from "react";
import { Bell, Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30">
      
      {/* Mobile Menu Button (Hidden on Desktop) */}
      <button className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
        <Menu size={24} />
      </button>

      {/* Search Bar */}
      <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2 w-96">
        <Search size={18} className="text-gray-400 mr-2" />
        <input 
          type="text" 
          placeholder="Search leads, contacts, or settings..." 
          className="bg-transparent border-none focus:outline-none text-sm w-full text-gray-700 placeholder-gray-400"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative text-gray-500 hover:bg-gray-100 rounded-full">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </Button>
        
        <div className="hidden md:block h-8 w-px bg-gray-200"></div>

        <Button className="bg-[#2C6CF2] hover:bg-blue-600 text-white font-medium shadow-sm">
          + New Campaign
        </Button>
      </div>
    </header>
  );
}