"use client";

import { useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Tab {
  title: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  initialActiveTab?: number;
  className?: string; // For the overall tabs container
  tabTitleClassName?: string; // For styling individual tab titles
  tabContentClassName?: string; // For styling the content area
}

export function Tabs({ tabs, initialActiveTab = 0, className, tabTitleClassName, tabContentClassName }: TabsProps) {
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  return (
    <div className={cn("w-full", className)}>
      {/* Tab Titles List */}
      <ul className="mb-8 flex flex-wrap justify-center space-x-4 md:space-x-8">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={cn(
              "cursor-pointer px-4 py-2 text-lg font-medium transition-colors duration-200",
              "border-b-2 border-transparent hover:border-blue-600", // Default hover/inactive
              activeTab === index
                ? "border-blue-600 text-blue-600" // Active tab
                : "text-gray-400", // Inactive tab color
              tabTitleClassName
            )}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </li>
        ))}
      </ul>

      {/* Tab Content */}
      <div className={cn("rounded-lg p-6", tabContentClassName)}>
        {tabs[activeTab].content}
      </div>
    </div>
  );
}