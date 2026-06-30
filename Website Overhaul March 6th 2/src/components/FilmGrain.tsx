import { useMobileExperience } from '@/hooks/useMobileExperience';

export default function FilmGrain() {
  const { reduceEffects } = useMobileExperience();

  if (reduceEffects) {
    return null;
  }

  return <div className="film-grain" aria-hidden="true" />;
}
