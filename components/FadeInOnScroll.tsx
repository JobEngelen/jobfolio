'use client';
// components/FadeInOnScroll.tsx

import React, { useEffect, useRef } from 'react';

interface FadeInOnScrollProps {
  children: React.ReactNode;
}

const FadeInOnScroll: React.FC<FadeInOnScrollProps> = ({ children }) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      window.scrollBy(0, 1);
    }, 100); // Delay of 100ms

    const handleScroll = () => {
      if (elementRef.current) {
        const elementTop = elementRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight) {
          elementRef.current.classList.add('fade-in');
        } else {
          elementRef.current.classList.remove('fade-in');
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={elementRef} className="fade-in-container">
      {children}
      <style jsx>{`
        .fade-in-container {
          opacity: 0;
          transform: translateY(20px) scale(0.95);
          transition: opacity 0.7s ease-in-out, transform 0.7s ease-in-out;
        }

        .fade-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      `}</style>
    </div>
  );
};

export default FadeInOnScroll;
