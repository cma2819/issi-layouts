import React, { ReactNode, useEffect, useRef, useState } from 'react';

type Prop = {
  widthPx: number;
  align: 'left'|'center'|'right';
  children: ReactNode;
};

export const WidthFixedLabel = ({ widthPx, align, children }: Prop) => {

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
  }, [ widthPx, children ]);
  
  return (
    <div ref={ref} style={
      {
        transform: `scaleX(${widthScale})`,
        transformOrigin: `top ${align}`,
        whiteSpace: 'nowrap',
      }
    }>
      { children }
    </div>
  );
}