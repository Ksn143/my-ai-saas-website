import { cn } from "@/lib/utils";
import Image from "next/image"; // Assuming you're using Next.js Image component

interface FeatureCardProps {
  imageSrc: string;
  title: string;
  description: string;
  className?: string; // For animation
  colorClassName?: string; // For the colorful background behind the image
}

export function FeatureCard({
  imageSrc,
  title,
  description,
  className,
  colorClassName,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-card shadow-lg", // Base card styles
        "flex flex-col items-center", // Flex column, center horizontally
        "min-h-[340px]", // <-- Adjusted min-height for slightly taller cards if needed, you can fine-tune this
        "animate-in fade-in zoom-in-95", // Animation
        className // Animation delays
      )}
    >
      {/* 1. Image Container: Adjusted py for more vertical space, still full width */}
      <div
        className={cn(
          "relative flex w-full items-center justify-center rounded-t-xl py-10", // <-- Increased py-6 to py-10
          colorClassName
        )}
      >
        {/* 2. IMAGE SIZE INCREASED SIGNIFICANTLY: width={160} height={160} */}
        <Image 
          src={imageSrc}
          alt={title}
          width={300} // <-- Significantly increased intrinsic width
          height={400} // <-- Significantly increased intrinsic height
          className="object-contain" // Ensures image scales down to fit, maintaining aspect ratio
        />
      </div>
      
      {/* 3. Text Content: Now has more space due to larger image container */}
      <div className="flex flex-col items-center px-6 py-6 text-center">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}