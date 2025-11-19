// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Header आणि Footer इथून काढून टाका, ते आता ClientLayout मध्ये आहेत
import { ThemeProvider } from "@/components/theme-provider";
import ClientLayout from "@/components/ClientLayout"; // <-- नवीन फाईल इम्पोर्ट करा

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* Header आणि Footer आता या ClientLayout मध्ये हँडल केले जातील */}
          <ClientLayout>
            {children}
          </ClientLayout>

        </ThemeProvider>
      </body>
    </html>
  );
}