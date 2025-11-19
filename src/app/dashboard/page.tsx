"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  TrendingUp, 
  MessageSquare, 
  CheckCircle2, 
  MoreHorizontal, 
  ArrowUpRight, 
  Clock,
  ArrowRight // Added this import to fix the error
} from "lucide-react";

const stats = [
  { label: "Total Leads", value: "1,284", change: "+12.5%", trend: "up", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Active Conversations", value: "42", change: "+5", trend: "neutral", icon: MessageSquare, color: "text-purple-600", bg: "bg-purple-50" },
  { label: "Appointments Booked", value: "18", change: "+24%", trend: "up", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
  { label: "Tasks Completed", value: "156", change: "+8%", trend: "up", icon: CheckCircle2, color: "text-orange-600", bg: "bg-orange-50" },
];

const recentActivity = [
  { id: 1, user: "Sarah Miller", action: "booked a consultation", time: "2 mins ago", status: "success" },
  { id: 2, user: "Mike Ross", action: "replied to SMS campaign", time: "15 mins ago", status: "neutral" },
  { id: 3, user: "Kewa AI", action: "followed up with 5 leads", time: "1 hour ago", status: "info" },
  { id: 4, user: "Jessica Chen", action: "cancelled appointment", time: "3 hours ago", status: "warning" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Good Morning, John! 👋</h1>
          <p className="text-gray-500">Here's what's happening with your business today.</p>
        </div>
        <div className="flex gap-3">
          <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Month</option>
          </select>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${stat.bg} ${stat.color}`}>
                <stat.icon size={20} />
              </div>
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                {stat.change}
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Chart Placeholder (Left - 2 Cols) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-900">Lead Generation Trend</h3>
            <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal size={20}/></button>
          </div>
          {/* Fake Chart Visual */}
          <div className="h-64 w-full bg-gray-50 rounded-lg flex items-end justify-between px-4 pb-4 gap-2">
             {[35, 55, 45, 70, 60, 85, 75, 65, 90, 80, 95, 100].map((h, i) => (
               <div key={i} className="w-full bg-blue-100 rounded-t-sm relative group">
                  <div 
                    className="absolute bottom-0 w-full bg-[#2C6CF2] rounded-t-sm transition-all duration-500 group-hover:bg-blue-600" 
                    style={{ height: `${h}%` }}
                  ></div>
               </div>
             ))}
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-4 px-2">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
          </div>
        </div>

        {/* Recent Activity (Right - 1 Col) */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-900">Recent Activity</h3>
            <button className="text-sm text-[#2C6CF2] font-medium hover:underline">View All</button>
          </div>
          <div className="space-y-6">
            {recentActivity.map((item, i) => (
              <div key={item.id} className="flex gap-4">
                <div className="mt-1">
                  {item.status === 'success' && <div className="w-2 h-2 rounded-full bg-green-500"></div>}
                  {item.status === 'neutral' && <div className="w-2 h-2 rounded-full bg-blue-500"></div>}
                  {item.status === 'info' && <div className="w-2 h-2 rounded-full bg-purple-500"></div>}
                  {item.status === 'warning' && <div className="w-2 h-2 rounded-full bg-red-500"></div>}
                </div>
                <div>
                  <p className="text-sm text-gray-800">
                    <span className="font-bold">{item.user}</span> {item.action}
                  </p>
                  <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                    <Clock size={10} /> {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
            View Full Log <ArrowRight size={14}/>
          </button>
        </div>

      </div>
    </div>
  );
}