/** @format */

import React, { useEffect } from "react";

type Props = {
  index: number;
  color: string;
  isLast: boolean;
  addDeck: () => void;
};

export default function Card({ index, color, isLast, addDeck }: Props) {
  const ref = React.useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (isLast && entry.isIntersecting) {
          addDeck();
          observer.unobserve(ref.current!);
        }
      });
    }, {threshold: 0.5});
    observer.observe(ref.current!);
  }, [ref, isLast]);


  const style = {
    backgroundColor: color,
    height: '100px',
    width: '300px',
    margin: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2rem',
    color: 'white',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)', 
  }

  return <div ref={ref} style={style} >
      Card {index}
  </div>;
}
