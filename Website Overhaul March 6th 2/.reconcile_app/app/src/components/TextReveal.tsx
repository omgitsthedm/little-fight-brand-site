import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  delay?: number;
  stagger?: number;
}

export default function TextReveal({
  children,
  className = '',
  as: Component = 'span',
  delay = 0,
  stagger = 0.08,
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!containerRef.current || hasAnimated.current) return;

    const wordElements = containerRef.current.querySelectorAll('.word');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        wordElements,
        {
          y: '100%',
          opacity: 0,
        },
        {
          y: '0%',
          opacity: 1,
          duration: 0.8,
          stagger: stagger,
          ease: 'power3.out',
          delay: delay,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
            once: true,
            onEnter: () => {
              hasAnimated.current = true;
            },
          },
        }
      );
    });

    return () => ctx.revert();
  }, [children, delay, stagger]);

  const words = children.split(' ');

  return (
    <Component
      ref={containerRef as React.RefObject<HTMLHeadingElement & HTMLParagraphElement & HTMLSpanElement>}
      className={`text-reveal ${className}`}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.25em]">
          <span className="word inline-block">{word}</span>
        </span>
      ))}
    </Component>
  );
}
