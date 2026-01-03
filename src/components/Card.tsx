import React, { ReactNode, memo } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = memo(({ children, className }) => {
  return (
    <div
      className={`
        bg-[rgba(45,55,65,0.95)] 
        rounded-lg 
        p-6 
        shadow-[0_4px_6px_rgba(0,0,0,0.1)] 
        text-white 
        mb-5 
        flex 
        flex-col 
        h-full
        transition-transform 
        duration-200 
        ease-in-out
        hover:-translate-y-0.5
        ${className || ""}
      `}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;
