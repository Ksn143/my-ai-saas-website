"use client"; // This component needs client-side interactivity

import { useState } from "react";
import { cn } from "@/lib/utils";

interface PricingToggleProps {
  onToggle: (isAnnual: boolean) => void;
  initialAnnual?: boolean;
}

export function PricingToggle({ onToggle, initialAnnual = false }: PricingToggleProps) {
  const [isAnnual, setIsAnnual] = useState(initialAnnual);

  const handleToggle = () => {
    setIsAnnual((prev) => {
      const newState = !prev;
      onToggle(newState);
      return newState;
    });
  };

  return (
    <div className="flex items-center space-x-2 rounded-full bg-muted p-1 text-sm font-medium">
      <button
        onClick={handleToggle}
        className={cn(
          "rounded-full px-4 py-2 transition-all",
          !isAnnual && "bg-background text-foreground shadow-sm"
        )}
      >
        Monthly
      </button>
      <button
        onClick={handleToggle}
        className={cn(
          "relative rounded-full px-4 py-2 transition-all",
          isAnnual && "bg-background text-foreground shadow-sm"
        )}
      >
        Annually
        <span className="absolute -top-2 right-0 -mr-2 rounded-full bg-green-500 px-2 py-0.5 text-xs text-white">
          Save -15%
        </span>
      </button>
    </div>
  );
}