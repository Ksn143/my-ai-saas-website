import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hikewa - AI Agents & DFY Automation for Business",
  description: "Put your business on autopilot with Kewa, the AI workforce managed by experts. Done-For-You setup in 48 hours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 1. lang="en" करा (US SEO साठी महत्त्वाचे)
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light" // SaaS साठी सहसा light थीम डिफॉल्ट असते
          enableSystem
          disableTransitionOnChange
        >
          {/* Header एकदाच इथे टाका */}
          <Header />
          
          {/* मुख्य कंटेंट */}
          <main className="flex-1 pt-16">
            {children}
          </main>

          {/* Footer एकदाच इथे टाका */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}