import { cn } from "@/lib/utils";

interface NumberCardProps {
  number: number;
  title: string;
  description: string;
  className?: string;
}

export function NumberCard({ number, title, description, className }: NumberCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center",
        "rounded-xl border border-gray-200 bg-white p-6 shadow-sm", // Matching your WordPress style
        "md:p-8", // Larger padding on medium screens
        className
      )}
    >
      <div
        className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-3xl font-bold text-white"
        style={{ padding: '10px' }} // Match WordPress 10px padding for number circle
      >
        {number}
      </div>
      <h3 className="text-xl font-bold md:text-2xl">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  );
}