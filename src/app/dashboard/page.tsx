"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { motion } from "framer-motion";
import { 
  Users, TrendingUp, MessageSquare, CheckCircle2, 
  MoreHorizontal, ArrowRight, Clock 
} from "lucide-react";
// New Chart Library
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Dummy Data for Chart
const chartData = [
  { name: 'Mon', leads: 12 },
  { name: 'Tue', leads: 18 },
  { name: 'Wed', leads: 15 },
  { name: 'Thu', leads: 25 },
  { name: 'Fri', leads: 32 },
  { name: 'Sat', leads: 20 },
  { name: 'Sun', leads: 28 },
];

const stats = [
  { label: "Total Leads", value: "1,284", change: "+12.5%", trend: "up", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Active Conversations", value: "42", change: "+5", trend: "neutral", icon: MessageSquare, color: "text-purple-600", bg: "bg-purple-50" },
  { label: "Appointments", value: "18", change: "+24%", trend: "up", icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
  { label: "Tasks Done", value: "156", change: "+8%", trend: "up", icon: CheckCircle2, color: "text-orange-600", bg: "bg-orange-50" },
];

const recentActivity = [
  { id: 1, user: "Sarah Miller", action: "booked a consultation", time: "2 mins ago", status: "success" },
  { id: 2, user: "Mike Ross", action: "replied to SMS campaign", time: "15 mins ago", status: "neutral" },
  { id: 3, user: "Kewa AI", action: "followed up with 5 leads", time: "1 hour ago", status: "info" },
];

export default function DashboardPage() {
  const [userEmail, setUserEmail] = useState("User");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (user?.email) {
        // Get the name before the @ symbol
        setUserEmail(user.email.split('@')[0]);
      }
      setIsLoading(false);
    }
    getUser();
  }, []);

  return (
    <div className="space-y-8">
      
      {/* Welcome Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          {isLoading ? (
            <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-2"></div>
          ) : (
            <h1 className="text-2xl font-bold text-gray-900 capitalize">Good Morning, {userEmail}! 👋</h1>
          )}
          <p className="text-gray-500">Here's what's happening with your business today.</p>
        </div>
        <div className="flex gap-3">
          <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
            <option>Last 7 Days</option>
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
        
        {/* Real Chart (Recharts) */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-900">Lead Generation Trend</h3>
            <button className="text-gray-400 hover:text-gray-600"><MoreHorizontal size={20}/></button>
          </div>
          
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2C6CF2" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2C6CF2" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9CA3AF'}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9CA3AF'}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  cursor={{ stroke: '#2C6CF2', strokeWidth: 1, strokeDasharray: '4 4' }}
                />
                <Area type="monotone" dataKey="leads" stroke="#2C6CF2" strokeWidth={3} fillOpacity={1} fill="url(#colorLeads)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-gray-900">Recent Activity</h3>
            <button className="text-sm text-[#2C6CF2] font-medium hover:underline">View All</button>
          </div>
          <div className="space-y-6 flex-1">
            {recentActivity.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="mt-1 relative">
                  <div className={`w-2 h-2 rounded-full ${
                    item.status === 'success' ? 'bg-green-500' : 
                    item.status === 'info' ? 'bg-blue-500' : 'bg-gray-300'
                  }`}></div>
                  <div className="absolute top-3 left-1 w-[1px] h-full bg-gray-100 -z-10 last:hidden"></div>
                </div>
                <div>
                  <p className="text-sm text-gray-800 leading-snug">
                    <span className="font-semibold">{item.user}</span> {item.action}
                  </p>
                  <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                    <Clock size={10} /> {item.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 text-sm font-medium text-gray-600 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 group">
            View Full Log <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform"/>
          </button>
        </div>

      </div>
    </div>
  );
}