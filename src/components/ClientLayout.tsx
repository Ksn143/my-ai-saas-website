// src/components/ClientLayout.tsx
"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // या पेजेसवर Header/Footer आणि मेनूचे पॅडिंग नको
  const isAuthPage = pathname === "/login" || pathname === "/signup";

  // जर Login किंवा Signup पेज असेल, तर फक्त कंटेंट दाखवा (Header/Footer शिवाय)
  if (isAuthPage) {
    return <>{children}</>;
  }

  // इतर पेजेससाठी Header, Footer आणि व्यवस्थित पॅडिंग दाखवा
  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </>
  );
}