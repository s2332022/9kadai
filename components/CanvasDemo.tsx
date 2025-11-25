import React, { useRef, useEffect } from 'react';
import { CanvasProps } from '../types';

export const CanvasDemo: React.FC<CanvasProps> = ({ width = 300, height = 150 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && canvas.getContext) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // sample92.js logic
        ctx.clearRect(0, 0, width, height);
        
        ctx.beginPath();
        ctx.moveTo(25, 25);
        ctx.lineTo(125, 125);
        ctx.stroke();

        ctx.fillStyle = '#c80000';
        ctx.fillRect(150, 25, 100, 100);
      }
    }
  }, [width, height]);

  return (
    // sample91.css: canvas { border: 5px solid red; }
    <canvas 
      id="tutorial"
      ref={canvasRef} 
      width={width} 
      height={height}
      style={{ border: '5px solid red' }}
      className="bg-white mt-4"
    />
  );
};