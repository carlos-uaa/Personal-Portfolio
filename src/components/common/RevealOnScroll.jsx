import { useEffect, useRef, useState } from 'react';
import './RevealOnScroll.scss';

function RevealOnScroll({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  threshold = 0.12,
  reappear = true
}) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (reappear) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, reappear]);

  return (
    <div
      ref={elementRef}
      className={`reveal-box reveal-box--${direction} ${isVisible ? 'reveal-box--visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default RevealOnScroll;
