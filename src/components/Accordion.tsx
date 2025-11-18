"use client";

import { useState, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react"; // For the expand/collapse icon

interface AccordionItemProps {
  question: string;
  answer: ReactNode;
  className?: string; // For individual item styling
}

function AccordionItem({ question, answer, className }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={cn("rounded-lg border border-gray-200 bg-white", className)}>
      <button
        className="flex w-full items-center justify-between p-4 text-left text-lg font-semibold md:p-6"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <ChevronDown
          className={cn(
            "h-6 w-6 transform transition-transform duration-300",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-muted-foreground md:px-6 md:pb-6">
          {typeof answer === 'string' ? <p>{answer}</p> : answer}
        </div>
      )}
    </div>
  );
}

interface AccordionProps {
  items: { question: string; answer: ReactNode }[];
  className?: string; // For the overall accordion container
}

export function Accordion({ items, className }: AccordionProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}