'use client';
import React, { useRef, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  isFeatured?: boolean;
}

export function TiltCard({ children, className = '', isFeatured = false }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calcul de l'inclinaison 3D
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX(-((y - centerY) / 12));
    setRotateY((x - centerX) / 12);
    
    // Position du curseur pour le spotlight
    setGlowPos({ x, y });
    setOpacity(0.8);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setOpacity(0);
  };

  return (
    <div style={{ perspective: '1200px' }} className="w-full h-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.1s ease-out',
          transformStyle: 'preserve-3d',
        }}
        className={`relative rounded-[4rem] overflow-hidden ${className}`}
      >
        {/* Effet de lueur dynamique sous le curseur */}
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
          style={{
            opacity,
            background: `radial-gradient(500px circle at ${glowPos.x}px ${glowPos.y}px, rgba(59, 130, 246, 0.25), transparent 40%)`,
          }}
        />

        {/* Bordure lumineuse pour la carte principale */}
        {isFeatured && (
          <div className="absolute inset-0 rounded-[4rem] border-2 border-blue-500/50 pointer-events-none shadow-[0_0_40px_rgba(59,130,246,0.3)] z-10" />
        )}

        <div className="relative z-10 h-full flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}