import React from 'react'
import styles from './style.module.css'
import Image from "next/image";

export const AboutUs = () => {
  return (
    <>
        <section className={styles.aboutUs}> 
            <h1>Uma plataforma completa para você  <span>gerenciar</span> e <span>impulsionar</span> o seu delivery.</h1>

            <div className={styles.description}>
                <p>
                    Peedy.ai é a plataforma digital feita para restaurantes que querem ter o controle total do seu delivery, sem burocracia e sem taxas por pedido. Crie seu cardápio online, receba pedidos em tempo real, acompanhe o status de cada pedido e aumente suas vendas de forma simples e intuitiva.     
                </p>
            </div>

            <div className={styles.content}>
                <div>
                    <div className={styles.containerImg}>
                        {/* <Image src={demoImg} width={500} height={300} alt="Imagem sobre nós" /> */}
                    </div>
                </div>
                <div>

                </div>
            </div>
        </section>
    </>
  )
}
