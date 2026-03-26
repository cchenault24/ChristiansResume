import { ReactNode, memo } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  noVerticalPadding?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = memo(
  ({ id, children, className = "", noVerticalPadding = false }) => {
    return (
      <section
        id={id}
        className={`w-full ${!noVerticalPadding && "py-12 md:py-16"} px-4 md:px-6 ${className}`}
      >
        <div className="w-full max-w-screen-2xl mx-auto">{children}</div>
      </section>
    );
  }
);

SectionWrapper.displayName = "SectionWrapper";

export default SectionWrapper;
