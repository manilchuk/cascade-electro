import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.imageWrapper}>
        <Image
          src="/hero.png"
          alt="Електротехнічне обладнання Cascade Electro"
          fill
          className={styles.bgImage}
          priority
          sizes="100vw"
        />
      </div>

      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Енергія надійних рішень - для кожного проєкту
          </h1>
          <p className={styles.subtitle}>
            Широкий асортимент електротехнічних товарів для дому, бізнесу та
            професійного монтажу. Якість, перевірена часом, і рішення для ваших
            завдань.
          </p>
          <a href="#catalog" className={styles.ctaBtn}>
            Переглянути каталог
          </a>
        </div>
      </div>
    </section>
  );
}
