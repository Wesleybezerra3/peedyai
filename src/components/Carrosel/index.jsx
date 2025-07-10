"use client";
import React, { useEffect, useState, useRef } from 'react';
import styles from "./style.module.css";

const items = [
  "Mais agilidade",
  "Sem Comissões",
  "Controle Total",
  "Relatórios",
  "Gestão de Delivery",
];

const VISIBLE_COUNT = 4;

const CarroselLetter = () => {
  const [start, setStart] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [transition, setTransition] = useState(true);
  const timeoutRef = useRef();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setTransition(true);
      setAnimating(true);
      setTimeout(() => {
        setTransition(false); // Remove a transição para resetar
        setAnimating(false);
        setStart((prev) => (prev + 1) % items.length);
      }, 1000); // tempo da animação
    }, 3000); // tempo de exibição

    return () => clearTimeout(timeoutRef.current);
  }, [start]);

  // Gera os índices dos itens visíveis
  const visibleItems = [];
  for (let i = 0; i < VISIBLE_COUNT + 1; i++) {
    visibleItems.push(items[(start + i) % items.length]);
  }

  // Quando não está animando, a lista volta para o início sem transição
  const style = {
    transform: animating ? 'translateX(-25%)' : 'translateX(0)',
    transition: transition
      ? 'transform 1s cubic-bezier(0.4,0,0.2,1)'
      : 'none',
  };

  return (
    <div className={styles.carroselLetter}>
      <ul className={styles.carroselList} style={style}>
        {visibleItems.map((item, idx) => (
          <li className={styles.carroselItem} key={item + idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CarroselLetter;