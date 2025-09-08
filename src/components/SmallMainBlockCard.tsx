import React, { useEffect, useRef, useState } from "react";

interface SmallMainBlockCardProps {
  title: string;
  description: string;
  margin?: string;
  needAnimation?: boolean;
  textTitleSize?: string;
  textDescSize?: string;
  maxW?: string;
}

const SmallMainBlockCard: React.FC<SmallMainBlockCardProps> = ({
  title,
  description,
  margin = "mb-[15px]",
  needAnimation = true,
  textTitleSize = "md:text-6xl text-[40px]",
  textDescSize = "text-[18px]",
  maxW = 'max-w-full md:max-w-[300px]'
}) => {
  const [displayedNumber, setDisplayedNumber] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (needAnimation) {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
          }
        },
        { threshold: 0.5 } // Запускаем, когда 50% блока видно
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const numberOnly = parseInt(title.replace(/\D/g, ""), 10);
    if (isNaN(numberOnly)) return;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentNumber = Math.floor(progress * numberOnly);
      setDisplayedNumber(currentNumber);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, title]);

  const formattedNumber = title.startsWith("+")
    ? "+" + displayedNumber.toString()
    : displayedNumber.toString();

  return (
    <div
      ref={ref}
      className={`flex flex-col ${maxW} w-full ${margin}`}
    >
      <p className={`md:leading-[1] leading-[1.3] ${textTitleSize} font-semibold`}>
        {needAnimation ? (
          <>
            {formattedNumber}
            {title.includes("%") && "%"}
          </>
        ) : (
          title
        )}
      </p>
      <span className={`${textDescSize} font-medium`}>{description}</span>
    </div>
  );
};

export default SmallMainBlockCard;
