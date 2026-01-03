import React, { memo } from "react";

interface SkeletonLoaderProps {
  variant?: "card" | "text" | "image" | "list";
  className?: string;
  count?: number;
}

const SkeletonLoader: React.FC<SkeletonLoaderProps> = memo(
  ({ variant = "card", className = "", count = 1 }) => {
    const baseClasses =
      "animate-pulse bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-[length:200%_100%] shimmer rounded";

    const variants = {
      card: "h-48 w-full",
      text: "h-4 w-full mb-2",
      image: "h-64 w-full rounded-lg",
      list: "h-20 w-full mb-4 rounded-lg",
    };

    const items = Array.from({ length: count }, (_, i) => (
      <div
        key={i}
        className={`${baseClasses} ${variants[variant]} ${className}`}
        style={{
          animationDelay: `${i * 0.1}s`,
        }}
      />
    ));

    if (count === 1) {
      return items[0];
    }

    return <>{items}</>;
  }
);

SkeletonLoader.displayName = "SkeletonLoader";

export default SkeletonLoader;
