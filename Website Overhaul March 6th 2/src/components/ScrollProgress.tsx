import { useEffect, useState } from 'react';
import { useMobileExperience } from '@/hooks/useMobileExperience';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const { reduceEffects } = useMobileExperience();

  useEffect(() => {
    if (reduceEffects) {
      setProgress(0);
      return undefined;
    }

    let frameId = 0;

    const updateProgress = () => {
      frameId = 0;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollProgress);
    };

    const handleScroll = () => {
      if (frameId) {
        return;
      }

      frameId = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [reduceEffects]);

  if (reduceEffects) {
    return null;
  }

  return (
    <div
      className="scroll-progress"
      aria-hidden="true"
      style={{ width: `${progress}%` }}
    />
  );
}
