"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  MessageSquare, 
  Users, 
  Settings, 
  LogOut, 
  Zap,
  Calendar,
  BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
  { icon: MessageSquare, label: "Inbox", href: "/dashboard/inbox" },
  { icon: Users, label: "Contacts", href: "/dashboard/contacts" },
  { icon: Calendar, label: "Calendar", href: "/dashboard/calendar" },
  { icon: Zap, label: "Automations", href: "/dashboard/automations" },
  { icon: BarChart3, label: "Reports", href: "/dashboard/reports" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col fixed left-0 top-0 z-40 hidden md:flex">
      {/* Logo Area */}
      <div className="h-16 flex items-center px-6 border-b border-gray-100">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2C6CF2] to-[#7A4BFF] flex items-center justify-center text-white font-bold text-sm shadow-sm mr-3">
          KW
        </div>
        <span className="font-bold text-xl text-gray-900">Hikewa</span>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive 
                  ? "bg-blue-50 text-[#2C6CF2]" 
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <item.icon size={20} className={isActive ? "text-[#2C6CF2]" : "text-gray-400"} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer Area */}
      <div className="p-4 border-t border-gray-100">
        <div className="bg-gray-50 rounded-xl p-4 mb-4">
          <div className="flex items-center gap-3 mb-2">
             <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
               JD
             </div>
             <div>
               <div className="text-sm font-bold text-gray-900">John Doe</div>
               <div className="text-xs text-gray-500">Pro Plan</div>
             </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
            <div className="bg-[#2C6CF2] h-1.5 rounded-full" style={{ width: '65%' }}></div>
          </div>
          <div className="text-[10px] text-gray-400 flex justify-between">
            <span>Credits Used</span>
            <span>6.5k / 10k</span>
          </div>
        </div>

        <Button variant="ghost" className="w-full justify-start gap-3 text-red-500 hover:text-red-600 hover:bg-red-50">
          <LogOut size={20} />
          Log Out
        </Button>
      </div>
    </aside>
  );
}