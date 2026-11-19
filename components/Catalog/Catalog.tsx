"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Catalog.module.css";

// Повний перелік категорій
const categories = [
  {
    id: 1,
    title: "Роз'єднувачі",
    image: "/Catalog/electrical-disconnector-2x.png",
    placeholder: "🔌",
  },
  {
    id: 2,
    title: "Кабель і провід",
    image: "/Catalog/cable-and-wire-2x.png",
    placeholder: "⚡",
  },
  {
    id: 3,
    title: "Трансформатор понижуючий",
    image: null,
    placeholder: "🔋",
  },
  {
    id: 4,
    title: "Вимірювальні трансформатори струму",
    image: null,
    placeholder: "📊",
  },
  {
    id: 5,
    title: "Трансформатори прогріву бетону",
    image: null,
    placeholder: "🏗️",
  },
  {
    id: 6,
    title: "Трансформатори струму",
    image: null,
    placeholder: "🔌",
  },
  {
    id: 7,
    title: "Щити розподільчі та аксесуари",
    image: null,
    placeholder: "🗄️",
  },
  {
    id: 8,
    title: "Світлодіодні лампи",
    image: null,
    placeholder: "💡",
  },
  {
    id: 9,
    title: "Світлодіодні світильники",
    image: null,
    placeholder: "🔦",
  },
  {
    id: 10,
    title: "Вуличне освітлення",
    image: null,
    placeholder: "🌃",
  },
  {
    id: 11,
    title: "Торговельне освітлення",
    image: null,
    placeholder: "🏬",
  },
  {
    id: 12,
    title: "Настільні лампи",
    image: null,
    placeholder: "🛋️",
  },
  {
    id: 13,
    title: "Промислово-офісне світло",
    image: null,
    placeholder: "🏭",
  },
  {
    id: 14,
    title: "Розумний дім",
    image: null,
    placeholder: "🏠",
  },
  {
    id: 15,
    title: "Блоки аварійного живлення",
    image: null,
    placeholder: "🚨",
  },
  {
    id: 16,
    title: "Подарунки від 3000 грн.",
    image: null,
    placeholder: "🎁",
  },
];

export default function Catalog() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + categories.length) % categories.length,
    );
  };

  // Функція для розрахунку зміщення для кожної картки
  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const total = categories.length;

    // Нормалізуємо різницю, щоб вона була в межах від -total/2 до total/2
    let normalizedDiff = diff;
    if (diff > total / 2) normalizedDiff -= total;
    if (diff < -total / 2) normalizedDiff += total;

    // Якщо картка далі ніж на 1 позицію від центру — ховаємо її
    if (Math.abs(normalizedDiff) > 1) {
      return {
        className: styles.cardHidden,
        style: {
          "--offset": `${normalizedDiff * 100}px`,
        } as React.CSSProperties,
      };
    }

    // Відстань між картками (залежить від розміру екрану)
    // Для десктопу 300px, для мобільних 200px
    // Ми використовуємо CSS-змінну, яку задамо в модулі
    const offset = normalizedDiff * 300;

    // Якщо це центральна картка
    if (normalizedDiff === 0) {
      return {
        className: styles.cardActive,
        style: {},
      };
    }

    // Бокові картки (ліва або права)
    return {
      className: styles.cardSide,
      style: { "--offset": `${offset}px` } as React.CSSProperties,
    };
  };

  return (
    <section className={styles.section} id="catalog">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Каталог продукції</h2>
          <p className={styles.subtitle}>
            Основні групи товарів для вашого проекту
          </p>
        </div>

        <div className={styles.carouselWrapper}>
          {/* Кнопка "Назад" */}
          <button
            className={`${styles.navBtn} ${styles.navBtnPrev}`}
            onClick={prevSlide}
            aria-label="Попередній слайд"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <div className={styles.carouselTrack}>
            {categories.map((cat, index) => {
              const { className, style } = getCardStyle(index);
              return (
                <div
                  key={cat.id}
                  className={`${styles.card} ${className}`}
                  style={style}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={styles.cardImageWrapper}>
                    {cat.image ? (
                      <Image
                        src={cat.image}
                        alt={cat.title}
                        width={200}
                        height={200}
                        className={styles.cardImage}
                      />
                    ) : (
                      <div className={styles.placeholder}>
                        {cat.placeholder}
                      </div>
                    )}
                  </div>
                  <h3 className={styles.cardTitle}>{cat.title}</h3>
                </div>
              );
            })}
          </div>

          {/* Кнопка "Вперед" */}
          <button
            className={`${styles.navBtn} ${styles.navBtnNext}`}
            onClick={nextSlide}
            aria-label="Наступний слайд"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Індикатори */}
        <div className={styles.dots}>
          {categories.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Перейти до слайду ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
