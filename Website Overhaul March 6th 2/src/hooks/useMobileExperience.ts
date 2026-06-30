import { useEffect, useState } from 'react';

interface MobileExperienceState {
  isCompactViewport: boolean;
  isCoarsePointer: boolean;
  prefersReducedMotion: boolean;
  reduceEffects: boolean;
}

const defaultState: MobileExperienceState = {
  isCompactViewport: false,
  isCoarsePointer: false,
  prefersReducedMotion: false,
  reduceEffects: false,
};

function readMobileExperience(): MobileExperienceState {
  if (typeof window === 'undefined') {
    return defaultState;
  }

  const isCompactViewport = window.matchMedia('(max-width: 767px)').matches;
  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return {
    isCompactViewport,
    isCoarsePointer,
    prefersReducedMotion,
    reduceEffects: isCompactViewport || isCoarsePointer || prefersReducedMotion,
  };
}

export function useMobileExperience() {
  const [state, setState] = useState<MobileExperienceState>(readMobileExperience);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const mediaQueries = [
      window.matchMedia('(max-width: 767px)'),
      window.matchMedia('(pointer: coarse)'),
      window.matchMedia('(prefers-reduced-motion: reduce)'),
    ];

    const updateState = () => {
      setState(readMobileExperience());
    };

    updateState();

    mediaQueries.forEach((query) => {
      if (typeof query.addEventListener === 'function') {
        query.addEventListener('change', updateState);
        return;
      }

      query.addListener(updateState);
    });

    return () => {
      mediaQueries.forEach((query) => {
        if (typeof query.removeEventListener === 'function') {
          query.removeEventListener('change', updateState);
          return;
        }

        query.removeListener(updateState);
      });
    };
  }, []);

  return state;
}
