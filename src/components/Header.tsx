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

  // 1. Active Link Helper Function
  // हे फंक्शन चेक करेल की सध्याची लिंक ॲक्टिव्ह आहे का?
  const getNavLinkClass = (path: string) => {
    const isActive = pathname === path;
    return cn(
      "transition-colors duration-200",
      isActive 
        ? "text-[#2C6CF2] font-bold" // Active असेल तर निळा आणि Bold
        : "text-gray-600 hover:text-[#2C6CF2] font-medium" // Inactive असेल तर Gray
    );
  };

  // Solutions साठी स्पेशल चेक (कारण त्यात अनेक सब-पेजेस आहेत)
  const isSolutionsActive = pathname.startsWith("/solutions") || pathname === "/dfy";

  // ड्रॉपडाउन बाहेर क्लिक केल्यावर बंद करणे
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (solutionsRef.current && !solutionsRef.current.contains(event.target as Node)) {
        setSolutionsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // पेज बदलल्यावर मेनू बंद करणे
  useEffect(() => {
    setMobileOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  // मोबाईल मेनू उघडा असताना स्क्रोल थांबवणे
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <>
      {/* MAIN HEADER (Z-Index: 40) */}
      <header 
        className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all"
        style={{ zIndex: 40 }} 
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            
            {/* LOGO */}
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] flex items-center justify-center text-white font-bold shadow-sm group-hover:shadow-md transition-all">
                  KW
                </div>
                <span className="font-bold text-xl tracking-tight text-gray-900">Hikewa</span>
              </Link>
            </div>

            {/* DESKTOP NAV (Hidden on Mobile) */}
            <nav className="hidden md:flex items-center gap-8 text-sm"> {/* gap वाढवला थोडा */}
              
              <Link href="/product" className={getNavLinkClass("/product")}>Product</Link>
              
              {/* Solutions Dropdown */}
              <div className="relative" ref={solutionsRef}>
                <button
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                  className={cn(
                    "flex items-center gap-1 transition-colors focus:outline-none",
                    isSolutionsActive 
                      ? "text-[#2C6CF2] font-bold" // Solutions Active Style
                      : "text-gray-600 hover:text-[#2C6CF2] font-medium"
                  )}
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
                           <li><Link href="/solutions/enterprise" className="block text-gray-700 hover:text-[#2C6CF2] font-medium">Enterprise</Link></li>
                       </ul>
                    </div>
                    <div>
                       <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Use Cases</h4>
                       <ul className="space-y-3">
                           {/* DFY Link इथे आहे, म्हणून बाहेरून काढली */}
                           <li><Link href="/dfy" className="block font-semibold text-[#2C6CF2]">Done-For-You Setup</Link></li>
                           <li><Link href="/solutions/automations" className="block text-gray-700 hover:text-[#2C6CF2]">Automations</Link></li>
                           <li><Link href="/solutions/integrations" className="block text-gray-700 hover:text-[#2C6CF2]">Integrations</Link></li>
                       </ul>
                    </div>
                </div>
              </div>

              <Link href="/features" className={getNavLinkClass("/features")}>Features</Link>
              <Link href="/resources" className={getNavLinkClass("/resources")}>Resources</Link>
              <Link href="/faq" className={getNavLinkClass("/faq")}>FAQ</Link>
              <Link href="/pricing" className={getNavLinkClass("/pricing")}>Pricing</Link>
              
              {/* ❌ REMOVED: DFY Services Link (काढून टाकली) */}
            </nav>

            {/* DESKTOP ACTIONS */}
            <div className="flex items-center gap-4">
              <Link href="/login" className="hidden md:block text-sm font-medium text-gray-600 hover:text-gray-900">
                Login
              </Link>
              <Button asChild className="rounded-full bg-[#2C6CF2] hover:bg-[#255bd9] text-white px-5 shadow-md hidden md:inline-flex">
                <Link href="/signup">Start Free</Link>
              </Button>
              
              {/* MOBILE MENU BUTTON (Hamburger) */}
              <button
                className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md focus:outline-none"
                onClick={() => setMobileOpen(true)}
              >
                <Menu className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* --- MOBILE MENU OVERLAY & DRAWER (Z-Index: 9999) --- */}
      
      {/* 1. BLACK BACKDROP */}
      <div 
        className={cn(
          "fixed inset-0 bg-gray-900/50 backdrop-blur-sm transition-opacity duration-300 md:hidden",
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )} 
        style={{ zIndex: 9998 }} 
        onClick={() => setMobileOpen(false)} 
      />

      {/* 2. WHITE DRAWER */}
      <div 
        className={cn(
          "fixed top-0 right-0 h-full w-[85%] max-w-xs bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden flex flex-col",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
        style={{ zIndex: 9999 }} 
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <span className="font-bold text-xl text-gray-900">Menu</span>
          <button 
            onClick={() => setMobileOpen(false)} 
            className="p-2 text-gray-500 hover:bg-gray-100 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Drawer Links (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-2 text-lg font-medium">
          <Link href="/" className={cn("py-3 border-b border-gray-50", pathname === "/" ? "text-[#2C6CF2] font-bold" : "text-gray-700")}>Home</Link>
          
          {/* Mobile Accordion */}
          <details className="group py-2 border-b border-gray-50" open={isSolutionsActive}>
            <summary className={cn("flex justify-between items-center cursor-pointer py-2 list-none", isSolutionsActive ? "text-[#2C6CF2] font-bold" : "text-gray-700")}>
              Solutions <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180"/>
            </summary>
            <div className="pl-4 mt-2 flex flex-col gap-3 text-base text-gray-500 pb-2">
               <Link href="/solutions/small-business">Small Business</Link>
               <Link href="/solutions/agencies">Agencies</Link>
               <Link href="/solutions/solopreneurs">Solopreneurs</Link>
               <Link href="/solutions/enterprise">Enterprise</Link>
               <Link href="/dfy" className="text-[#2C6CF2] font-semibold">DFY Setup</Link>
            </div>
          </details>

          <Link href="/product" className={cn("py-3 border-b border-gray-50", pathname === "/product" ? "text-[#2C6CF2] font-bold" : "text-gray-700")}>Product</Link>
          <Link href="/features" className={cn("py-3 border-b border-gray-50", pathname === "/features" ? "text-[#2C6CF2] font-bold" : "text-gray-700")}>Features</Link>
          <Link href="/resources" className={cn("py-3 border-b border-gray-50", pathname === "/resources" ? "text-[#2C6CF2] font-bold" : "text-gray-700")}>Resources</Link>
          <Link href="/faq" className={cn("py-3 border-b border-gray-50", pathname === "/faq" ? "text-[#2C6CF2] font-bold" : "text-gray-700")}>FAQ</Link>
          <Link href="/pricing" className={cn("py-3 border-b border-gray-50", pathname === "/pricing" ? "text-[#2C6CF2] font-bold" : "text-gray-700")}>Pricing</Link>
          <Link href="/contact" className={cn("py-3 border-b border-gray-50", pathname === "/contact" ? "text-[#2C6CF2] font-bold" : "text-gray-700")}>Contact</Link>
        </div>

        {/* Drawer Footer (Buttons) */}
        <div className="p-6 border-t border-gray-100 bg-gray-50 mt-auto">
          <div className="flex flex-col gap-3">
            <Link href="/login" className="text-center py-3 text-gray-600 border bg-white rounded-xl font-semibold shadow-sm">Login</Link>
            <Button asChild className="w-full bg-[#2C6CF2] hover:bg-blue-700 py-6 text-lg rounded-xl shadow-lg">
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}