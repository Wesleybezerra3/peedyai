'use client';
import React from "react";
import Image from "next/image";
import styles from "./style.module.css";
import chefImg from "@/assets/chefImg.png";
import arrowBlue from "@/assets/arrow-blue.svg";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.containerText}>
        <p>A peedy tem tudo</p>
        <p>Para o seu delivery </p>
        <p>Crescer!</p>
      </div>
      <div className={styles.containerImg}>
        {/* <Image
          width={550}
          src={chefImg}
          alt="Imagem de um chefe de cozinha segurando um prato"
        /> */}
      </div>
      <div className={styles.containerForm}>
         <Image
            src={arrowBlue}
            alt="Seta azul apontando para cima"
            className={styles.arrowBlue}
          />
        <div className={styles.containerFormText}>
          <h1>Cadastre seu restaurante</h1>
          <p>Entre e ganhe o 1° mês grátis!</p>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
         
          <label htmlFor="emailInput">E-mail*</label>
          <input
            id="emailInput"
            type="email"
            placeholder="email@email.com.br"
          />
          <button type="submit">Quero meu mês grátis</button>
        </form>
      </div>

      <div className={styles.paleteColors}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default HeroSection;
