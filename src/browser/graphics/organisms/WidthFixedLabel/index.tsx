import React, { ReactNode, useEffect, useRef, useState } from 'react';

type Prop = {
  widthPx: number;
  children: ReactNode;
};

export const WidthFixedLabel = ({ widthPx, children }: Prop) => {

  const [ widthScale, setWidthScale ] = useState<number>(1);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      setTimeout(() => {
        setWidthScale(Math.min(
          widthPx / element.clientWidth,
          1
        ));
      }, 100);
    }
  });
  
  return (
    <span ref={ref} style={
      {
        transform: `scaleX(${widthScale})`,
        transformOrigin: 'top left',
        whiteSpace: 'nowrap',
      }
    }>
      { children }
    </span>
  );
}