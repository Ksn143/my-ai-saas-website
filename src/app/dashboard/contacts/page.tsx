"use client";

import React, { useState } from "react";
import { 
  Search, 
  Filter, 
  MoreHorizontal, 
  Download, 
  Plus, 
  Phone, 
  Mail 
} from "lucide-react";
import { Button } from "@/components/ui/button";

// डमी डेटा (नंतर आपण हे Supabase मधून आणू)
const initialLeads = [
  { id: 1, name: "Rahul Sharma", email: "rahul@gmail.com", phone: "+91 9876543210", status: "New", source: "Website Chat", date: "Today, 10:30 AM" },
  { id: 2, name: "Priya Patil", email: "priya.p@outlook.com", phone: "+91 8888888888", status: "Follow Up", source: "WhatsApp", date: "Yesterday, 4:15 PM" },
  { id: 3, name: "Amit Deshmukh", email: "amit.d@tech.com", phone: "+91 7777777777", status: "Closed", source: "Email", date: "Nov 18, 2025" },
  { id: 4, name: "Sneha Kulkarni", email: "sneha@design.io", phone: "+91 9999999999", status: "New", source: "Website Chat", date: "Nov 17, 2025" },
  { id: 5, name: "Vikram Singh", email: "vikram@build.com", phone: "+91 9123456789", status: "Interested", source: "Facebook Ad", date: "Nov 15, 2025" },
];

export default function ContactsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // सर्च फिल्टर
  const filteredLeads = initialLeads.filter(lead => 
    lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lead.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* हेडर सेक्शन */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Leads & Contacts</h1>
          <p className="text-sm text-gray-500">तुमच्या AI एजंटने गोळा केलेले सर्व लीड्स येथे आहेत.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download size={16} /> Export
          </Button>
          <Button className="gap-2 bg-[#2C6CF2] hover:bg-blue-600">
            <Plus size={16} /> Add Lead
          </Button>
        </div>
      </div>

      {/* फिल्टर्स आणि सर्च */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="नाव किंवा ईमेल शोधा..." 
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" size="sm" className="gap-2 w-full sm:w-auto">
            <Filter size={16} /> Filter
          </Button>
        </div>
      </div>

      {/* टेबल */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-900 font-semibold">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Contact Info</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Source</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {lead.name}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-xs">
                        <Mail size={12} className="text-gray-400"/> {lead.email}
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <Phone size={12} className="text-gray-400"/> {lead.phone}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      lead.status === 'New' ? 'bg-blue-100 text-blue-800' :
                      lead.status === 'Closed' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">{lead.source}</td>
                  <td className="px-6 py-4 text-gray-500">{lead.date}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* रिकामे स्टेट (जर सर्चमध्ये काही सापडले नाही) */}
        {filteredLeads.length === 0 && (
          <div className="p-12 text-center text-gray-500">
            No leads found matching "{searchTerm}"
          </div>
        )}
      </div>

    </div>
  );
}