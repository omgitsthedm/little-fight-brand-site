import { useEffect, useRef } from 'react';
import { gsap, registerScrollTrigger } from '@/lib/gsap';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  scale?: number;
}

export default function ParallaxImage({
  src,
  alt,
  className = '',
  speed = 0.5,
  scale = 1.1,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    registerScrollTrigger();
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        yPercent: speed * 20,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`parallax-image-container overflow-hidden ${className}`}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="parallax-image w-full h-full object-cover"
        style={{ transform: `scale(${scale})` }}
      />
    </div>
  );
}
