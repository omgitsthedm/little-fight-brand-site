import { useRef, useCallback } from 'react';

interface MagneticOptions {
  strength?: number;
  radius?: number;
}

export function useMagneticButton(options: MagneticOptions = {}) {
  const { strength = 0.3, radius = 100 } = options;
  const elementRef = useRef<HTMLElement | null>(null);
  const isHovering = useRef(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!elementRef.current || !isHovering.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    if (distance < radius) {
      const pull = (1 - distance / radius) * strength;
      const translateX = distanceX * pull;
      const translateY = distanceY * pull;

      elementRef.current.style.transform = `translate(${translateX}px, ${translateY}px)`;
    }
  }, [strength, radius]);

  const handleMouseEnter = useCallback(() => {
    isHovering.current = true;
  }, []);

  const handleMouseLeave = useCallback(() => {
    isHovering.current = false;
    if (elementRef.current) {
      elementRef.current.style.transform = 'translate(0, 0)';
    }
  }, []);

  const bind = useCallback((element: HTMLElement | null) => {
    elementRef.current = element;
  }, []);

  return {
    bind,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
  };
}
