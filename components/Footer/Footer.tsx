import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topGrid}>
          {/* Бренд */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <Image
                src="/logo.svg"
                alt="Cascade Electro Logo"
                width={40}
                height={40}
                className={styles.logoImage}
              />
            </Link>
            <p className={styles.description}>
              Надійний постачальник електротехнічної продукції та комплексних
              рішень для дому, бізнесу та промисловості.
            </p>
          </div>

          {/* Меню */}
          <div className={styles.navCol}>
            <h3>Навігація</h3>
            <ul className={styles.navList}>
              <li>
                <Link href="#catalog" className={styles.navLink}>
                  Каталог
                </Link>
              </li>
              <li>
                <Link href="#about" className={styles.navLink}>
                  Про нас
                </Link>
              </li>
              <li>
                <Link href="#advantages" className={styles.navLink}>
                  Переваги
                </Link>
              </li>
              <li>
                <Link href="#contacts" className={styles.navLink}>
                  Контакти
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакти */}
          <div className={styles.contactCol}>
            <h3>Контакти</h3>
            <p className={styles.contactItem}>
              <a href="tel:+380952429114">+38 (095) 242-91-14</a>
            </p>
            <p className={styles.contactItem}>
              <a href="mailto:ukrenergo21@gmail.com">ukrenergo21@gmail.com</a>
            </p>

            <div className={styles.addressBlock}>
              <p className={styles.contactItem}>
                вул. Шовковична, буд. 13/2, офіс 11, Київ
              </p>
              <p className={styles.contactItem}>
                вул. Машинобудівників, буд. 23, прим. 4, Вишневе (Київська
                область)
              </p>
            </div>
          </div>
        </div>

        {/* Нижня частина */}
        <div className={styles.bottomBar}>
          <div className={styles.requisites}>
            ТОВ «Каскад Електро» • ЄДРПОУ 44133367
          </div>
          <div className={styles.copyright}>
            <span>© {new Date().getFullYear()} Всі права захищені.</span>
            <Link href="/privacy">Політика конфіденційності</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
