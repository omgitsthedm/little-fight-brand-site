import { useEffect, useRef, useState } from 'react';

interface BuildingPlan {
  slug: string;
  name: string;
  services: string[];
  storefrontHeight: number;
  variant: 'bakery' | 'cafe' | 'hotel' | 'realty' | 'dining';
}

const growthPlan: BuildingPlan[] = [
  { slug: 'perry', name: 'Bakery', services: ['WiFi Fix', 'POS Setup', 'Google Maps'], storefrontHeight: 166, variant: 'bakery' },
  { slug: 'bleecker', name: 'Cafe', services: ['Website', 'Socials'], storefrontHeight: 210, variant: 'cafe' },
  { slug: 'village', name: 'Realty', services: ['Email', 'Cloud'], storefrontHeight: 232, variant: 'realty' },
  { slug: 'orchard', name: 'Hotel', services: ['Network', 'Security', 'Backup'], storefrontHeight: 192, variant: 'hotel' },
  { slug: 'vestry', name: 'Dining', services: ['Online Orders', 'Printers', 'Support'], storefrontHeight: 178, variant: 'dining' },
];

export default function CityGrowth() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [visibleFloors, setVisibleFloors] = useState<Record<string, number[]>>({});
  const timersRef = useRef<number[]>([]);
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  const clearAllTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  const queueTimer = (callback: () => void, delay: number) => {
    const timerId = window.setTimeout(callback, delay);
    timersRef.current.push(timerId);
  };

  const runSequence = () => {
    if (prefersReducedMotion) {
      // Show all floors immediately for reduced motion
      const allVisible: Record<string, number[]> = {};
      growthPlan.forEach(plan => {
        allVisible[plan.slug] = plan.services.map((_, i) => i);
      });
      setVisibleFloors(allVisible);
      return;
    }

    clearAllTimers();
    setVisibleFloors({});

    // Faster timing from handoff
    let delay = 100;

    growthPlan.forEach((plan) => {
      plan.services.forEach((_, floorIndex) => {
        queueTimer(() => {
          setVisibleFloors(prev => ({
            ...prev,
            [plan.slug]: [...(prev[plan.slug] || []), floorIndex]
          }));
        }, delay + floorIndex * 150);
      });

      // Shorter wait before next building starts
      delay += plan.services.length * 150 + 100;
    });
  };

  useEffect(() => {
    if (!stageRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasPlayed) {
            setHasPlayed(true);
            runSequence();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(stageRef.current);

    return () => {
      observer.disconnect();
      clearAllTimers();
    };
  }, [hasPlayed]);

  const handleReplay = () => {
    setHasPlayed(true);
    runSequence();
  };

  const getFloorBottom = (level: number, storefrontHeight: number) => {
    const floorHeight = 44;
    const floorGap = 6;
    return storefrontHeight + (level * (floorHeight + floorGap));
  };

  return (
    <div 
      ref={stageRef}
      className="street-stage relative w-full h-[clamp(430px,64vw,640px)] rounded-2xl overflow-hidden border border-[#e6e8eb]"
      style={{ 
        background: 'linear-gradient(180deg, #f5f7f9 0%, #eef2f6 100%)',
        '--floor-h': '44px',
        '--floor-gap': '6px'
      } as React.CSSProperties}
      aria-label="Animated row of five storefront industries growing with added services."
    >
      {/* Street Row - Five Buildings */}
      <ul className="street-row list-none absolute left-0 right-0 bottom-0 m-0 p-0 grid grid-cols-5 gap-0" aria-hidden="true">
        {growthPlan.map((building) => (
          <li 
            key={building.slug}
            className={`building ${building.variant} relative`}
            data-slug={building.slug}
            style={{ '--storefront-h': `${building.storefrontHeight}px` } as React.CSSProperties}
          >
            <div className="tower relative h-full">
              {/* Floors Stack */}
              <div className="floors absolute inset-0">
                {building.services.map((service, floorIndex) => {
                  const isVisible = visibleFloors[building.slug]?.includes(floorIndex);
                  return (
                    <div
                      key={floorIndex}
                      className={`service-floor absolute left-0 w-full h-[44px] border-t-2 border-l-2 border-r-2 border-[#bc4905] grid place-items-center transition-all duration-[440ms]`}
                      style={{
                        bottom: `${getFloorBottom(floorIndex, building.storefrontHeight)}px`,
                        background: 'linear-gradient(180deg, #ff8f4a, #ff6a13)',
                        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                        opacity: isVisible ? 1 : 0,
                        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
                      }}
                    >
                      {/* Window strip */}
                      <div 
                        className="absolute left-[12%] right-[12%] top-2 h-[7px] bg-white/30"
                      />
                      {/* Floor Label */}
                      <span 
                        className={`floor-label relative z-10 text-[10px] font-extrabold uppercase tracking-wide text-white px-2 py-0.5 rounded-full bg-black/30 transition-opacity duration-[220ms] ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                        style={{ transitionDelay: '130ms' }}
                      >
                        {service}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Storefront */}
              <div 
                className="storefront absolute left-0 right-0 bottom-0 border-t-2 border-l-2 border-r-2 border-[#bc4905]"
                style={{ 
                  height: `${building.storefrontHeight}px`,
                  background: 'linear-gradient(180deg, #ff7a23, #e45305)'
                }}
              >
                {/* Storefront Name */}
                <span className="name absolute left-[8%] right-[8%] top-3.5 min-h-[30px] grid place-items-center text-center text-sm font-extrabold text-white bg-black/20 border border-white/50 rounded-md px-2">
                  {building.name}
                </span>

                {/* Variant-specific elements */}
                {building.variant === 'bakery' && (
                  <>
                    <span className="awning scallop absolute left-[8%] right-[8%] top-[58px] h-5 bg-[#ff8f4a]" 
                      style={{
                        background: `radial-gradient(circle at 10px 18px, transparent 9px, #ff8f4a 9px),
                          radial-gradient(circle at 30px 18px, transparent 9px, #ff8f4a 9px),
                          radial-gradient(circle at 50px 18px, transparent 9px, #ff8f4a 9px),
                          radial-gradient(circle at 70px 18px, transparent 9px, #ff8f4a 9px),
                          linear-gradient(180deg, #ff8f4a, #ff6a13)`
                      }}
                    />
                    <span className="round-window absolute right-[12%] top-[88px] w-[42px] h-[42px] rounded-full border-2 border-white/70 bg-white/20 grid place-items-center text-lg">
                      🍞
                    </span>
                    <span className="door absolute left-[10%] bottom-0 w-[24%] h-[38%] border-2 border-white/70 border-b-0 bg-black/20" />
                    <span className="display absolute right-[10%] bottom-[18%] w-[38%] h-[28%] border-2 border-white/60 bg-white/20 grid place-items-center" />
                  </>
                )}

                {building.variant === 'cafe' && (
                  <>
                    <span className="awning flat absolute left-[8%] right-[8%] top-[58px] h-4 bg-[#ff7020]" />
                    <span className="drip-edge absolute left-[8%] right-[8%] top-[76px] h-[5px] bg-[#d85005]" />
                    <span className="chalkboard absolute left-[10%] top-[96px] w-[26%] h-[22%] border-2 border-white/60 bg-black/50" />
                    <span className="icon-window absolute right-[10%] bottom-[18%] w-[38%] h-[28%] border-2 border-white/60 bg-white/20 grid place-items-center text-xl">
                      ☕
                    </span>
                    <span className="door absolute left-[10%] bottom-0 w-[24%] h-[38%] border-2 border-white/70 border-b-0 bg-black/20" />
                  </>
                )}

                {building.variant === 'realty' && (
                  <>
                    <span className="arched-row absolute left-[10%] right-[10%] top-[70px] grid grid-cols-3 gap-1.5">
                      {[1, 2, 3].map(i => (
                        <span key={i} className="h-[38px] border-2 border-white/70 border-b-0 rounded-t-[18px] bg-white/20" />
                      ))}
                    </span>
                    <span className="door gold absolute left-[38%] bottom-0 w-[24%] h-[40%] bg-[#cda455] border border-[#ecd6a4]" />
                    <span className="display absolute left-[12%] right-[12%] bottom-[14%] h-[18%] border-2 border-white/60 bg-white/20" />
                  </>
                )}

                {building.variant === 'hotel' && (
                  <>
                    <span className="awning striped absolute left-[8%] right-[8%] top-[58px] h-5"
                      style={{
                        background: 'repeating-linear-gradient(90deg, #ff8f4a 0, #ff8f4a 14%, #fff4df 14%, #fff4df 28%)'
                      }}
                    />
                    <span className="display absolute right-[10%] bottom-[18%] w-[38%] h-[28%] border-2 border-white/60 bg-white/20 grid place-items-center" />
                    <span className="flower-box absolute right-[10%] bottom-[12%] w-[38%] h-2.5 bg-[#8d5b2d]" />
                    <span className="door arch absolute left-[10%] bottom-0 w-[24%] h-[38%] border-2 border-white/70 border-b-0 bg-black/20 rounded-t-[20px]" />
                  </>
                )}

                {building.variant === 'dining' && (
                  <>
                    <span className="lights absolute left-[10%] right-[10%] top-[38px] h-2"
                      style={{
                        background: `radial-gradient(circle at 4% 50%, #fff7df 0 2px, transparent 2px),
                          radial-gradient(circle at 18% 50%, #fff7df 0 2px, transparent 2px),
                          radial-gradient(circle at 32% 50%, #fff7df 0 2px, transparent 2px),
                          radial-gradient(circle at 46% 50%, #fff7df 0 2px, transparent 2px),
                          radial-gradient(circle at 60% 50%, #fff7df 0 2px, transparent 2px),
                          radial-gradient(circle at 74% 50%, #fff7df 0 2px, transparent 2px),
                          radial-gradient(circle at 88% 50%, #fff7df 0 2px, transparent 2px)`
                      }}
                    />
                    <span className="canopy absolute left-[8%] right-[8%] top-[58px] h-5 border-2 border-[#532023] bg-[#64262a]" />
                    <span className="icon-window absolute right-[10%] bottom-[18%] w-[38%] h-[28%] border-2 border-white/60 bg-white/20 grid place-items-center text-xl">
                      🍷
                    </span>
                    <span className="door absolute left-[10%] bottom-0 w-[24%] h-[38%] border-2 border-white/70 border-b-0 bg-black/20" />
                    <span className="display absolute right-[10%] bottom-[18%] w-[38%] h-[28%] border-2 border-white/60 bg-white/20 grid place-items-center" />
                  </>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Replay Button */}
      <button
        onClick={handleReplay}
        className="absolute bottom-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm text-[var(--lf-graphite)] text-sm font-semibold rounded-full border border-[var(--lf-stone)] hover:border-[var(--lf-orange)] hover:text-[var(--lf-orange)] transition-all shadow-lg z-10"
        aria-label="Replay city growth animation"
      >
        Replay
      </button>
    </div>
  );
}
