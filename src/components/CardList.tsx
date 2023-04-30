/** @format */

import React, { useEffect } from "react";
import Card from "./Card";

export default function CardList() {
  const [cards, setCards] = React.useState<string[]>([]);
  const [deck, setDeck] = React.useState<number>(0);

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return "rgba(" + r + "," + g + "," + b + ",0.8)";
  };

  useEffect(() => {
    const newCards = Array.from({ length: 10 }, () => getRandomColor());
    setCards((cards) => [...cards, ...newCards]);
  }, [deck]);

  const addDeck = () => {
    setDeck(deck + 1); 
  };

  return (
    <>
      {cards.map((color, index) => (
        <Card
          key={index}
          index={index}
          color={color}
          isLast={index === cards.length - 1}
          addDeck={addDeck}
        />
      ))}
    </>
  );
}
