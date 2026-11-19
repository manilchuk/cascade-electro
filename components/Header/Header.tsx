"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    closeMenu();

    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} onClick={handleLogoClick}>
          <Image
            src="/logo.svg"
            alt="Cascade Electro Logo"
            width={40}
            height={40}
            className={styles.logoImage}
            priority
          />
        </Link>

        <nav className={styles.nav}>
          <Link href="#catalog" className={styles.navLink}>
            Каталог
          </Link>
          <Link href="#about" className={styles.navLink}>
            Про нас
          </Link>
          <Link href="#advantages" className={styles.navLink}>
            Переваги
          </Link>
          <Link href="#contacts" className={styles.navLink}>
            Контакти
          </Link>
        </nav>

        <div className={styles.contactBlock}>
          <a href="tel:+380000000000" className={styles.phone}>
            +38 (000) 000-00-00
          </a>
          <button className={styles.btn}>Отримати прайс</button>
        </div>

        <button
          className={`${styles.burger} ${isMenuOpen ? styles.burgerOpen : ""}`}
          onClick={toggleMenu}
          aria-label="Відкрити меню"
        >
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>
      </div>

      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ""}`}
      >
        <nav className={styles.mobileNav}>
          <Link
            href="#catalog"
            className={styles.mobileNavLink}
            onClick={closeMenu}
          >
            Каталог
          </Link>
          <Link
            href="#about"
            className={styles.mobileNavLink}
            onClick={closeMenu}
          >
            Про нас
          </Link>
          <Link
            href="#advantages"
            className={styles.mobileNavLink}
            onClick={closeMenu}
          >
            Переваги
          </Link>
          <Link
            href="#contacts"
            className={styles.mobileNavLink}
            onClick={closeMenu}
          >
            Контакти
          </Link>
        </nav>

        <div className={styles.mobileContactBlock}>
          <a href="tel:+380000000000" className={styles.mobilePhone}>
            +38 (000) 000-00-00
          </a>
          <button className={styles.mobileBtn}>Отримати прайс</button>
        </div>
      </div>
    </header>
  );
}
