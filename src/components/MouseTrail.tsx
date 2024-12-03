import React, { useEffect, useRef } from 'react';

export const MouseTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points: { x: number; y: number; age: number; vx: number; vy: number }[] = [];
  const POINT_LIFETIME = 60;
  const TRAIL_LENGTH = 20;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      points.push({
        x: e.clientX,
        y: e.clientY,
        age: 0,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2
      });
      if (points.length > TRAIL_LENGTH) points.shift();
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      points.forEach((point, i) => {
        point.age++;
        point.x += point.vx;
        point.y += point.vy;
        
        const opacity = Math.max(0, 1 - point.age / POINT_LIFETIME);
        const size = Math.max(1, 4 * (1 - point.age / POINT_LIFETIME));
        
        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${opacity})`;
        ctx.fill();

        if (i > 0) {
          const prevPoint = points[i - 1];
          ctx.beginPath();
          ctx.moveTo(prevPoint.x, prevPoint.y);
          ctx.lineTo(point.x, point.y);
          ctx.strokeStyle = `rgba(99, 102, 241, ${opacity * 0.5})`;
          ctx.lineWidth = size * 0.5;
          ctx.stroke();
        }
      });

      points.forEach((point, i) => {
        if (point.age > POINT_LIFETIME) {
          points.splice(i, 1);
        }
      });

      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};