import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  noVerticalPadding?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  children,
  className = "",
  noVerticalPadding = false,
}) => {
  return (
    <section
      id={id}
      className={`w-full ${!noVerticalPadding && "py-16"} px-6 ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto">{children}</div>
    </section>
  );
};

export default SectionWrapper;
