import { useEffect, useRef } from 'react';
import { useMobileExperience } from '@/hooks/useMobileExperience';

export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { reduceEffects } = useMobileExperience();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reduceEffects) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let lastDraw = 0;
    let cleanupResize: (() => void) | undefined;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      opacity: number;
      color: string;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.min(12, Math.max(6, Math.floor(window.innerWidth / 140)));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          radius: Math.random() * 110 + 64,
          opacity: Math.random() * 0.032 + 0.008,
          color: Math.random() > 0.7 ? '#FE5900' : '#CFC6BB'
        });
      }
    };

    const animate = (timestamp = 0) => {
      if (timestamp - lastDraw < 32) {
        animationId = requestAnimationFrame(animate);
        return;
      }

      lastDraw = timestamp;
      ctx.fillStyle = '#F6F3EE';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < -particle.radius) particle.x = canvas.width + particle.radius;
        if (particle.x > canvas.width + particle.radius) particle.x = -particle.radius;
        if (particle.y < -particle.radius) particle.y = canvas.height + particle.radius;
        if (particle.y > canvas.height + particle.radius) particle.y = -particle.radius;

        // Draw gradient orb
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius
        );
        gradient.addColorStop(0, particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0'));
        gradient.addColorStop(1, particle.color + '00');

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    const handleResize = () => {
      resize();
      createParticles();
    };

    window.addEventListener('resize', handleResize);
    cleanupResize = () => window.removeEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      cleanupResize?.();
    };
  }, [reduceEffects]);

  if (reduceEffects) {
    return (
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[var(--lf-bone)]" />
        <div className="absolute -left-24 top-[10%] h-[22rem] w-[22rem] rounded-full bg-[var(--lf-orange)]/6 blur-[88px]" />
        <div className="absolute right-[-6rem] top-[18%] h-[18rem] w-[18rem] rounded-full bg-white/60 blur-[74px]" />
        <div className="absolute bottom-[-8rem] left-[12%] h-[16rem] w-[16rem] rounded-full bg-[var(--lf-stone)]/18 blur-[72px]" />
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.34 }}
    />
  );
}
