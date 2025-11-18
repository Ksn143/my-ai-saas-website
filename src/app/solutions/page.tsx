"use client"; // Because of the Tabs component

import Image from "next/image"; // For the booking image
import { Check } from "lucide-react"; // For the checkmark icons in the list
import { NumberCard } from "@/components/NumberCard"; // Your new component
import { Tabs } from "@/components/Tabs"; // Your new component

export default function SolutionsPage() {
  // Translated DFY Process Steps to English
  const processSteps = [
    {
      number: 1,
      title: "1. We Understand Your Needs (Discovery)",
      description: "We study your business model, CRM, and customer requirements.",
    },
    {
      number: 2,
      title: "2. Agent Training & Setup",
      description: "We prepare the agent to provide answers tailored to your business and manage your calendar.",
    },
    {
      number: 3,
      title: "3. Launch & Optimize",
      description: "The agent goes live, and we ensure it continues to perform optimally.",
    },
  ];

  // Translated Solution Tabs Content to English
  const solutionTabs = [
    {
      title: "Service Businesses (Doctors/Salons)",
      content: (
        <p className="text-foreground">
          <strong>Benefit: Appointment Booking Automation</strong>
          <br />Our agent books appointments 24/7. It sends reminders and handles simple customer queries (e.g., 'Where is the salon?', 'What are the clinic hours?'), freeing up your staff.
        </p>
      ),
    },
    {
      title: "E-commerce",
      content: (
        <p className="text-foreground">
          <strong>Benefit: Product Recommendations and Support</strong>
          <br />The agent helps customers find suitable products (Product Recommendations), answers 'Where is my order?' (Order Tracking), and reminds customers about abandoned items in their cart.
        </p>
      ),
    },
    {
      title: "Real Estate",
      content: (
        <p className="text-foreground">
          <strong>Benefit: Lead Capture</strong>
          <br />The agent interacts with every user on the website, resolves their queries (e.g., 'What is the price of this property?'), and collects the names, phone numbers, and emails of interested customers (Leads), saving them directly into your CRM.
        </p>
      ),
    },
  ];

  return (
    <main className="flex-1">
      {/* 1. DFY Process Section - Translated */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Our DFY (Done-For-You) Process</h2>
          <h4 className="mt-4 text-lg text-muted-foreground md:text-xl">Get your AI Agent live in 3 simple steps</h4>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {processSteps.map((step) => (
              <NumberCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Never Miss a Booking Section - Translated */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            {/* Left Column - Text */}
            <div>
              <h3 className="text-3xl font-bold md:text-4xl">Never Miss a Booking</h3>
              <p className="mt-4 text-lg text-muted-foreground">
                Our AI Agent connects directly with your calendar (Google Calendar, Outlook). It interacts with customers, checks availability, and books appointments in real-time, sending confirmations.
              </p>
              <ul className="mt-6 space-y-3 text-lg">
                <li className="flex items-center">
                  <Check className="mr-3 h-5 w-5 text-blue-600" /> Real-time calendar sync
                </li>
                <li className="flex items-center">
                  <Check className="mr-3 h-5 w-5 text-blue-600" /> Automated confirmations and reminders
                </li>
                <li className="flex items-center">
                  <Check className="mr-3 h-5 w-5 text-blue-600" /> Auto-entry into CRM
                </li>
              </ul>
            </div>

            {/* Right Column - Image/GIF */}
            <div className="text-center">
              <Image
                src="/images/booking-automation.webp" // Assuming you've placed the image here
                alt="AI bot managing a calendar and booking appointments"
                width={600}
                height={450}
                className="mx-auto rounded-lg shadow-lg"
              />
              <p className="mt-4 text-sm text-muted-foreground">
                (Insert your agent's booking GIF or image here)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Customized Solutions Section - Translated */}
      <section className="bg-gray-900 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">Customized Solutions for Every Business</h2>
          <div className="mt-12">
            <Tabs
              tabs={solutionTabs}
              tabTitleClassName="text-gray-300 hover:text-blue-400 data-[active=true]:text-blue-400"
              tabContentClassName="bg-gray-800 text-white p-8 rounded-lg mt-8 max-w-3xl mx-auto"
            />
          </div>
        </div>
      </section>
    </main>
  );
}