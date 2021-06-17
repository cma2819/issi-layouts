import React, { useEffect, useRef, useState } from 'react';
import { ClipPath } from './types';

type Props = {
  width: number;
  height: number;
  clipPaths: Array<ClipPath>;
  backgroundImage: string;
};

export const ClippedCanvas = ({width, height, clipPaths, backgroundImage}: Props) => {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [ context, setContext ] = useState<CanvasRenderingContext2D|null>(null);


  useEffect(() => {
    
    const draw = (bg: HTMLImageElement) => {
      if (!context) {
        return;
      }

      context.drawImage(bg, 0, 0);
      context.globalCompositeOperation = 'xor';
      clipPaths.forEach((path) => {
        context.fillRect(
          path.x,
          path.y,
          path.width,
          path.height
        );
      });
    }

    const element = canvasRef.current;
    const ctx = element?.getContext('2d');
    if (ctx) {
      setContext(ctx);
    }

    const background = new Image();
    background.src = backgroundImage;
    background.addEventListener('load', () => {
      draw(background);
    });
    
  }, [backgroundImage, clipPaths, context]);

  return (
    <canvas width={width} height={height} ref={canvasRef}></canvas>
  );
}