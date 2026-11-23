"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Partners.module.css";

// Іконки для блоку "Для кого"
const ElectricianIcon = () => (
  <svg
    className={styles.whomIcon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const BuildingIcon = () => (
  <svg
    className={styles.whomIcon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
  </svg>
);

const FactoryIcon = () => (
  <svg
    className={styles.whomIcon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 20h20" />
    <path d="M4 20V8l6 4V8l6 4V8l6 4v8" />
    <path d="M8 20v-4h4v4" />
  </svg>
);

const HomeIcon = () => (
  <svg
    className={styles.whomIcon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const forWhomData = [
  {
    icon: <ElectricianIcon />,
    title: "Електрики",
    desc: "Широкий вибір комплектуючих для монтажу та ремонту.",
  },
  {
    icon: <BuildingIcon />,
    title: "Монтажні компанії",
    desc: "Оптові ціни та швидка доставка на об'єкти.",
  },
  {
    icon: <FactoryIcon />,
    title: "Промислові об'єкти",
    desc: "Надійне обладнання для безперебійної роботи.",
  },
  {
    icon: <HomeIcon />,
    title: "Забудовники",
    desc: "Комплексне забезпечення електротехнікою новобудов.",
  },
];

const brands = [
  { name: "Chelukabel", logo: "/Brands/chelukabel.webp" },
  { name: "Energoalyans", logo: "/Brands/energoalyans.webp" },
  { name: "Europan", logo: "/Brands/europan.webp" },
  { name: "Gal-Kat", logo: "/Brands/gal-kat.webp" },
  { name: "Kablex", logo: "/Brands/kablex.webp" },
  { name: "Krok", logo: "/Brands/krok.webp" },
  { name: "Lappkab", logo: "/Brands/lappkab.webp" },
  { name: "Odeskable", logo: "/Brands/odeskable.webp" },
  { name: "Ukrkabel", logo: "/Brands/ukrkabel.webp" },
  { name: "Ukrpoghkable", logo: "/Brands/ukrpoghkable.webp" },
  { name: "Yughkabel", logo: "/Brands/yughkabel.webp" },
  { name: "ZZKM", logo: "/Brands/zzkm.webp" },
  { name: "Ascoukrem", logo: "/Brands/ascoukrem.webp" },
  { name: "DKC", logo: "/Brands/dkc.webp" },
  { name: "E.NEXT", logo: "/Brands/e-next.webp" },
  { name: "EATON", logo: "/Brands/eaton.webp" },
  { name: "ETI", logo: "/Brands/eti.webp" },
  { name: "hager", logo: "/Brands/hager.webp" },
  { name: "NiK", logo: "/Brands/nik.webp" },
  { name: "Schneider", logo: "/Brands/schneider.webp" },
  { name: "Termofit", logo: "/Brands/termofit.webp" },
  { name: "ZUBR", logo: "/Brands/zubr.webp" },
  { name: "DELUX", logo: "/Brands/delux.webp" },
  { name: "EUROLAMP", logo: "/Brands/eurolamp.webp" },
  { name: "legrand", logo: "/Brands/legrand.webp" },
  { name: "Lezard", logo: "/Brands/lezard.webp" },
  { name: "MAXUS", logo: "/Brands/maxus.webp" },
  { name: "OSRAM", logo: "/Brands/osram.webp" },
  { name: "PHILIPS", logo: "/Brands/philips.webp" },
  { name: "VIDEX", logo: "/Brands/videx.webp" },
];

export default function Partners() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(7); // За замовчуванням для десктопу

  // Визначаємо кількість видимих елементів залежно від ширини екрану
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setItemsToShow(3);
      } else if (window.innerWidth < 992) {
        setItemsToShow(5);
      } else {
        setItemsToShow(7);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Автоматична зміна слайдів
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % brands.length);
    }, 3000); // Кожні 3 секунди

    return () => clearInterval(interval);
  }, []);

  // Логіка для розрахунку позиції карток
  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const total = brands.length;

    let normalizedDiff = diff;
    if (diff > total / 2) normalizedDiff -= total;
    if (diff < -total / 2) normalizedDiff += total;

    const offset = normalizedDiff * 140; // Відстань між картками

    // Якщо картка далеко - ховаємо
    if (Math.abs(normalizedDiff) > Math.floor(itemsToShow / 2)) {
      return {
        className: `${styles.brandCard} ${styles.brandCardHidden}`,
        style: { "--offset": `${offset}px` } as React.CSSProperties,
      };
    }

    // Центральна картка
    if (normalizedDiff === 0) {
      return {
        className: `${styles.brandCard} ${styles.brandCardActive}`,
        style: {},
      };
    }

    // Бокові картки
    return {
      className: `${styles.brandCard} ${styles.brandCardSide}`,
      style: { "--offset": `${offset}px` } as React.CSSProperties,
    };
  };

  return (
    <section className={styles.section} id="partners">
      <div className={styles.container}>
        {/* Блок "Для кого" */}
        <div className={styles.header}>
          <h2 className={styles.title}>Для кого ми працюємо</h2>
          <p className={styles.subtitle}>
            Пропонуємо вигідні умови для кожного сегмента клієнтів
          </p>
        </div>

        <div className={styles.forWhomGrid}>
          {forWhomData.map((item, index) => (
            <div key={index} className={styles.whomCard}>
              {item.icon}
              <h3 className={styles.whomTitle}>{item.title}</h3>
              <p className={styles.whomDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Карусель брендів */}
        <h3 className={styles.partnersTitle}>Наші партнери та бренди</h3>

        <div className={styles.brandsCarouselWrapper}>
          <div className={styles.brandsCarouselTrack}>
            {brands.map((brand, index) => {
              const { className, style } = getCardStyle(index);
              return (
                <div
                  key={index}
                  className={className}
                  style={style}
                  onClick={() => setActiveIndex(index)}
                >
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={100}
                    height={60}
                    className={styles.brandImage}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
