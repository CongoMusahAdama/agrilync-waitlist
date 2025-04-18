
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const Section = ({ id, className, children }: SectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        "py-16 px-4 md:px-8 section",
        isVisible ? "visible" : "",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
