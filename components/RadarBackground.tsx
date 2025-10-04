'use client';

import { useEffect, useRef } from 'react';
import styles from './RadarBackground.module.css';

interface RadarBackgroundProps {
  showTargets?: boolean;
  targetCount?: number;
  className?: string;
}

const RadarBackground: React.FC<RadarBackgroundProps> = ({
  showTargets = true,
  targetCount = 5,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const targetsRef = useRef<Array<{x: number; y: number; size: number; pulse: number}>>([]);
  const sweepAngleRef = useRef(0);
  const lastTimeRef = useRef(0);

  // Generate random targets
  useEffect(() => {
    if (!showTargets) return;
    
    const targets = [];
    for (let i = 0; i < targetCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = 0.2 + Math.random() * 0.7; // Keep targets away from edges
      targets.push({
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        size: 2 + Math.random() * 3,
        pulse: Math.random() * Math.PI * 2
      });
    }
    targetsRef.current = targets;
  }, [showTargets, targetCount]);

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const draw = (timestamp: number) => {
      if (!ctx) return;
      
      const deltaTime = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;
      
      const { width, height } = canvas;
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.4;
      
      // Clear with semi-transparent black for trail effect
      ctx.fillStyle = 'rgba(5, 10, 30, 0.2)';
      ctx.fillRect(0, 0, width, height);
      
      // Draw radar circles
      ctx.strokeStyle = 'rgba(0, 200, 255, 0.15)';
      ctx.lineWidth = 1;
      
      const circles = 5;
      for (let i = 1; i <= circles; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, (radius * i) / circles, 0, Math.PI * 2);
        ctx.stroke();
      }
      
      // Draw crosshairs
      ctx.beginPath();
      ctx.moveTo(centerX - radius, centerY);
      ctx.lineTo(centerX + radius, centerY);
      ctx.moveTo(centerX, centerY - radius);
      ctx.lineTo(centerX, centerY + radius);
      ctx.stroke();
      
      // Draw sweep line
      sweepAngleRef.current = (sweepAngleRef.current + (deltaTime * 0.05)) % 360;
      const sweepAngle = (sweepAngleRef.current * Math.PI) / 180;
      
      const gradient = ctx.createLinearGradient(centerX, centerY, 
        centerX + Math.cos(sweepAngle) * radius, 
        centerY + Math.sin(sweepAngle) * radius);
      gradient.addColorStop(0, 'rgba(0, 200, 255, 0)');
      gradient.addColorStop(0.5, 'rgba(0, 200, 255, 0.3)');
      gradient.addColorStop(1, 'rgba(0, 200, 255, 0)');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, sweepAngle - 0.1, sweepAngle + 0.1, false);
      ctx.closePath();
      ctx.fill();
      
      // Draw targets
      if (showTargets) {
        const time = timestamp / 1000;
        targetsRef.current.forEach(target => {
          const targetX = centerX + target.x * radius;
          const targetY = centerY + target.y * radius;
          const pulse = 0.8 + Math.sin(time * 2 + target.pulse) * 0.2;
          
          // Glow effect
          const gradient = ctx.createRadialGradient(
            targetX, targetY, 0,
            targetX, targetY, target.size * 3 * pulse
          );
          gradient.addColorStop(0, 'rgba(0, 200, 255, 0.8)');
          gradient.addColorStop(1, 'rgba(0, 200, 255, 0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(targetX, targetY, target.size * 3 * pulse, 0, Math.PI * 2);
          ctx.fill();
          
          // Center dot
          ctx.fillStyle = 'rgba(0, 255, 200, 0.9)';
          ctx.beginPath();
          ctx.arc(targetX, targetY, target.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        });
      }
      
      animationFrameRef.current = requestAnimationFrame(draw);
    };
    
    animationFrameRef.current = requestAnimationFrame(draw);
    
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [showTargets]);

  return (
    <div className={`${styles.radarContainer} ${className}`}>
      <canvas
        ref={canvasRef}
        className={styles.radarCanvas}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          opacity: 0.7,
        }}
      />
    </div>
  );
};

export default RadarBackground;
