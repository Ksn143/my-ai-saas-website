import { cn } from "@/lib/utils";
import Link from "next/link";
import { Check } from "lucide-react"; // For the checkmark icons
import { Button } from "./ui/button"; // Assuming your Button component

interface PricingCardProps {
  planName: string;
  tagline: string;
  price: number;
  isAnnual: boolean; // To adjust price based on toggle
  messageCredits: number;
  setupFee?: number; // Optional setup fee
  features: string[];
  buttonText: string;
  buttonHref: string;
  isPopular?: boolean; // Optional: To highlight a popular plan
  className?: string; // For additional styling if needed
}

export function PricingCard({
  planName,
  tagline,
  price,
  isAnnual,
  messageCredits,
  setupFee,
  features,
  buttonText,
  buttonHref,
  isPopular,
  className,
}: PricingCardProps) {
  const displayPrice = isAnnual ? Math.round(price * 0.85) : price; // 15% discount for annual
  const displaySetupFee = setupFee !== undefined ? (isAnnual ? Math.round(setupFee * 0.85) : setupFee) : 0;

  return (
    <div
      className={cn(
        "relative flex flex-col items-center rounded-xl border border-border bg-card p-6 shadow-md transition-all duration-300",
        isPopular && "border-primary shadow-lg scale-105", // Highlight popular plan
        className
      )}
    >
      {isPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          Most Popular
        </span>
      )}

      {/* Plan Name & Tagline */}
      <h3 className="mt-4 text-2xl font-bold">{planName}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{tagline}</p>

      {/* Price */}
      <div className="mt-6 flex items-baseline">
        <span className="text-5xl font-extrabold">${displayPrice}</span>
        <span className="ml-1 text-lg font-medium text-muted-foreground">/mo</span>
      </div>

      {/* Setup Fee (Optional) */}
      {setupFee !== undefined && (
        <p className="mt-2 text-sm text-muted-foreground">
          {displaySetupFee > 0 ? `+ $${displaySetupFee} Setup Fee` : "$0 Setup Fee"}
        </p>
      )}

      {/* Message Credits */}
      <p className="mt-4 text-lg font-semibold">{messageCredits.toLocaleString()} Message Credits</p>

      {/* Feature List */}
      <ul className="mt-6 flex-1 space-y-3 text-sm text-foreground/80">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-green-500" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Get Started Button */}
      <Button asChild className="mt-8 w-full rounded-lg bg-blue-600 text-white hover:bg-blue-700">
        <Link href={buttonHref}>{buttonText}</Link>
      </Button>
    </div>
  );
}