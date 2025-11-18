// src/components/Header.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* --- LOGO --- */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] flex items-center justify-center text-white font-bold shadow-sm group-hover:shadow-md transition-all">
                KW
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900">Hikewa</span>
            </Link>
          </div>

          {/* --- DESKTOP NAVIGATION --- */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/product" className="hover:text-[#2C6CF2] transition-colors">Product</Link>
            
            {/* Solutions Dropdown */}
            <div className="relative" ref={solutionsRef}>
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="flex items-center gap-1 hover:text-[#2C6CF2] transition-colors focus:outline-none"
              >
                Solutions
                <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", solutionsOpen && "rotate-180")} />
              </button>

              {/* Dropdown Panel */}
              <div
                className={cn(
                  "absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[520px] bg-white rounded-xl shadow-xl border border-gray-100 p-6 grid grid-cols-2 gap-8 transition-all duration-200 origin-top",
                  solutionsOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                )}
              >
                 <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">By Industry</h4>
                    <ul className="space-y-3">
                        <li><Link href="/solutions/small-business" className="block text-gray-700 hover:text-[#2C6CF2]">Small Business</Link></li>
                        <li><Link href="/solutions/agencies" className="block text-gray-700 hover:text-[#2C6CF2]">Agencies</Link></li>
                        <li><Link href="/solutions/solopreneurs" className="block text-gray-700 hover:text-[#2C6CF2]">Solopreneurs</Link></li>
                        {/* Added Enterprise Here */}
                        <li><Link href="/solutions/enterprise" className="block text-gray-700 hover:text-[#2C6CF2] font-medium">Enterprise</Link></li>
                    </ul>
                 </div>
                 <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Use Cases</h4>
                    <ul className="space-y-3">
                        <li><Link href="/dfy" className="block font-semibold text-[#2C6CF2]">Done-For-You Setup</Link></li>
                        <li><Link href="/solutions/automations" className="block text-gray-700 hover:text-[#2C6CF2]">Automations</Link></li>
                        <li><Link href="/solutions/integrations" className="block text-gray-700 hover:text-[#2C6CF2]">Integrations</Link></li>
                    </ul>
                 </div>
              </div>
            </div>

            <Link href="/features" className="hover:text-[#2C6CF2] transition-colors">Features</Link>
            <Link href="/resources" className="hover:text-[#2C6CF2] transition-colors">Resources</Link>
            {/* Added FAQ Here */}
            <Link href="/faq" className="hover:text-[#2C6CF2] transition-colors">FAQ</Link>
            <Link href="/pricing" className="hover:text-[#2C6CF2] transition-colors">Pricing</Link>
            <Link href="/dfy" className="font-semibold text-[#2C6CF2] hover:text-[#1a4fc0] transition-colors">DFY Services</Link>
          </nav>

          {/* --- DESKTOP ACTIONS --- */}
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden md:block text-sm font-medium text-gray-600 hover:text-gray-900">
              Login
            </Link>
            <Button asChild className="rounded-full bg-[#2C6CF2] hover:bg-[#255bd9] text-white px-5 shadow-md hidden md:inline-flex">
              <Link href="/start-free">Start Free</Link>
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE MENU OVERLAY --- */}
      <div 
        className={cn(
          "fixed inset-0 z-50 bg-gray-900/40 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )} 
        onClick={() => setMobileOpen(false)} 
      />

      <div className={cn(
        "fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden p-6 overflow-y-auto",
        mobileOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex items-center justify-between mb-8">
          <span className="font-bold text-xl text-gray-900">Menu</span>
          <button onClick={() => setMobileOpen(false)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col gap-2 text-lg font-medium">
          <Link href="/" className="py-3 border-b border-gray-100 text-gray-700">Home</Link>
          
          <details className="group py-2 border-b border-gray-100">
            <summary className="flex justify-between items-center cursor-pointer py-1 text-gray-700 list-none">
              Solutions <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180"/>
            </summary>
            <div className="pl-4 mt-2 flex flex-col gap-3 text-base text-gray-500">
               <Link href="/solutions/small-business">Small Business</Link>
               <Link href="/solutions/agencies">Agencies</Link>
               <Link href="/solutions/solopreneurs">Solopreneurs</Link>
               <Link href="/solutions/enterprise">Enterprise</Link>
               <Link href="/dfy" className="text-[#2C6CF2] font-semibold">DFY Setup</Link>
            </div>
          </details>

          <Link href="/product" className="py-3 border-b border-gray-100 text-gray-700">Product</Link>
          <Link href="/features" className="py-3 border-b border-gray-100 text-gray-700">Features</Link>
          <Link href="/resources" className="py-3 border-b border-gray-100 text-gray-700">Resources</Link>
          <Link href="/faq" className="py-3 border-b border-gray-100 text-gray-700">FAQ</Link>
          <Link href="/pricing" className="py-3 border-b border-gray-100 text-gray-700">Pricing</Link>
          <Link href="/contact" className="py-3 border-b border-gray-100 text-gray-700">Contact</Link>
          
          <div className="mt-6 flex flex-col gap-3">
            <Link href="/login" className="text-center py-3 text-gray-600 border rounded-lg hover:bg-gray-50">Login</Link>
            <Button asChild className="w-full bg-[#2C6CF2] py-6 text-lg">
              <Link href="/start-free">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}