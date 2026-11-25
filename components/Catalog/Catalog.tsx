"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Catalog.module.css";
import ProductModal from "@/components/ProductModal/ProductModal";

// Повний перелік категорій
const categories = [
  {
    id: 1,
    title: "Роз'єднувачі",
    image: "/Catalog/electrical-disconnector-2x.png",
    placeholder: "🔌",
    products: null, // Поки що немає списку
  },
  {
    id: 2,
    title: "Кабель і провід",
    image: "/Catalog/cable-and-wire-2x.png",
    placeholder: "⚡",
    products: null,
  },
  {
    id: 3,
    title: "Трансформатори",
    image: "/Catalog/step-down-transformer.webp",
    placeholder: "🔋",
    products: [
      {
        category: "ТСЗ – стандарт (трьохфазні)",
        items: [
          { name: "ТСЗ-1,6 кВт", specs: "1,6 кВт; 380-220 / 36; 40; 42В" },
          { name: "ТСЗ-2,5 кВт", specs: "2,5 кВт; 380-220 / 36; 40; 42В" },
          { name: "ТСЗ-4,0 кВт", specs: "4,0 кВт; 380-220 / 36; 40; 42В" },
          { name: "ТСЗ-5,0 кВт", specs: "5,0 кВт; 380-220 / 36; 40; 42В" },
          { name: "ТСЗ-6,3 кВт", specs: "6,3 кВт; 380-220 / 36; 40; 42В" },
          { name: "ТСЗ-7,5 кВт", specs: "7,5 кВт; 380-220 / 36; 40; 42В" },
          { name: "ТСЗ-8,0 кВт", specs: "8,0 кВт; 380-220 / 36; 40; 42В" },
          { name: "ТСЗ-10,0 кВт", specs: "10,0 кВт; 380-220 / 36; 40; 42В" },
          {
            name: "ТСЗ-12,0 кВт",
            specs: "12,0 кВт; 380-220 / 36; 40; 42В; 220В",
          },
          {
            name: "ТСЗ-16,0 кВт",
            specs: "16,0 кВт; 380-220 / 36; 40; 42В; 220В",
          },
          {
            name: "ТСЗ-20,0 кВт",
            specs: "20,0 кВт; 380-220 / 36; 40; 42В; 220В",
          },
          {
            name: "ТСЗ-25,0 кВт",
            specs: "25,0 кВт; 380-220 / 36; 40; 42В; 220В",
          },
          {
            name: "ТСЗ-30,0 кВт",
            specs: "30,0 кВт; 380-220 / 36; 40; 42В; 220В",
          },
          {
            name: "ТСЗ-35,0 кВт",
            specs: "35,0 кВт; 380-220 / 36; 40; 42В; 220В",
          },
          {
            name: "ТСЗ-40,0 кВт",
            specs: "40,0 кВт; 380-220 / 36; 40; 42В; 220В",
          },
          {
            name: "ТСЗ-50,0 кВт",
            specs: "50,0 кВт; 380-220 / 36; 40; 42В; 220В",
          },
          {
            name: "ТСЗ-63,0 кВт",
            specs: "63,0 кВт; 380-220 / 36; 40; 42В; 220В",
          },
          {
            name: "ТСЗ-70,0 кВт",
            specs: "70,0 кВт; 380-220 / 36; 40; 42В; 220В",
          },
        ],
      },
      {
        category: "ОСЗ — стандарт (однофазні закриті)",
        items: [
          { name: "ОСЗ-1,6 кВт", specs: "1,6 кВт; 220 / 36; 40; 42В" },
          { name: "ОСЗ-2,5 кВт", specs: "2,5 кВт; 220 / 36; 40; 42В" },
          { name: "ОСЗ-4,0 кВт", specs: "4,0 кВт; 220 / 36; 40; 42В" },
          { name: "ОСЗ-5,0 кВт", specs: "5,0 кВт; 220 / 36; 40; 42В" },
          { name: "ОСЗ-6,3 кВт", specs: "6,3 кВт; 220 / 36; 40; 42В" },
          {
            name: "ОСЗ-1,6 кВт",
            specs: "1,6 кВт; 220-220/380; 220; 110; 127; 12; 24В",
          },
          {
            name: "ОСЗ-2,5 кВт",
            specs: "2,5 кВт; 220-220/380; 220; 110; 127; 12; 24В",
          },
          {
            name: "ОСЗ-4,0 кВт",
            specs: "4,0 кВт; 220-220/380; 220; 110; 127; 12; 24В",
          },
          {
            name: "ОСЗ-5,0 кВт",
            specs: "5,0 кВт; 220-220/380; 220; 110; 127; 12; 24В",
          },
          {
            name: "ОСЗ-6,3 кВт",
            specs: "6,3 кВт; 220-220/380; 220; 110; 127; 12; 24В",
          },
        ],
      },
      {
        category: "Нестандартні типу ТСЗ/ОСЗ",
        items: [
          {
            name: "ТСЗ-1,6 кВт",
            specs: "1,6 кВт; 380-220/380; 220; 110; 127; 12; 24В",
          },
          {
            name: "ТСЗ-2,5 кВт",
            specs: "2,5 кВт; 380-220/380; 220; 110; 127; 12; 24В",
          },
          {
            name: "ТСЗ-4,0 кВт",
            specs: "4,0 кВт; 380-220/380; 220; 110; 127; 12; 24В",
          },
          {
            name: "ТСЗ-5,0 кВт",
            specs: "5,0 кВт; 380-220/380; 220; 110; 127; 12; 24В",
          },
          {
            name: "ТСЗ-6,3 кВт",
            specs: "6,3 кВт; 380-220/380; 220; 110; 127; 12; 24В",
          },
          {
            name: "ТСЗ-7,5 кВт",
            specs: "7,5 кВт; 380-220/380; 220; 110; 127; 12; 24В",
          },
          {
            name: "ТСЗ-8,0 кВт",
            specs: "8,0 кВт; 380-220/380; 220; 110; 127; 12; 24В",
          },
          {
            name: "ТСЗ-10,0 кВт",
            specs: "10,0 кВт; 380-220/380; 220; 110; 127; 12; 24В",
          },
        ],
      },
      {
        category: "Комплектні трансформаторні підстанції прогріву бетону",
        items: [
          {
            name: "КТП-ОБ-63",
            specs: "63кВА; 380В; НН-49, 60, 70, 85, 103, 121В",
          },
          {
            name: "КТП-ОБ-80",
            specs: "80кВА; 380В; НН-49, 60, 70, 85, 103, 121В",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Трансформатори прогріву бетону",
    image: "/Catalog/concrete-heating-station.webp",
    placeholder: "🏗️",
    products: null,
  },
  {
    id: 7,
    title: "Щити розподільчі та аксесуари",
    image: "/Catalog/distribution-boards-and-accessories.webp",
    placeholder: "🗄️",
    products: null,
  },
  {
    id: 8,
    title: "Світлодіодні лампи",
    image: "/Catalog/LED-lamps.webp",
    placeholder: "💡",
    products: null,
  },
  {
    id: 9,
    title: "Світлодіодні світильники",
    image: "/Catalog/LED-light-fixtures.webp",
    placeholder: "🔦",
    products: null,
  },
  {
    id: 10,
    title: "Вуличне освітлення",
    image: "/Catalog/street-lighting.webp",
    placeholder: "🌃",
    products: null,
  },
  {
    id: 11,
    title: "Торговельне освітлення",
    image: "/Catalog/retail-lighting.webp",
    placeholder: "🏬",
    products: null,
  },
  {
    id: 12,
    title: "Настільні лампи",
    image: "/Catalog/table-lamps.webp",
    placeholder: "🛋️",
    products: null,
  },
  {
    id: 13,
    title: "Промислово-офісне світло",
    image: "/Catalog/industrial-and-office-lighting.webp",
    placeholder: "🏭",
    products: null,
  },
  {
    id: 14,
    title: "Розумний дім",
    image: "/Catalog/smart-home.webp",
    placeholder: "🏠",
    products: null,
  },
  {
    id: 15,
    title: "Блоки аварійного живлення",
    image: "/Catalog/emergency-power-supply-unit.webp",
    placeholder: "🚨",
    products: null,
  },
];

export default function Catalog() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<
    (typeof categories)[0] | null
  >(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + categories.length) % categories.length,
    );
  };

  const handleCardClick = (cat: (typeof categories)[0]) => {
    if (cat.products) {
      setSelectedCategory(cat);
      setModalOpen(true);
    } else {
      // Якщо немає списку товарів, просто робимо картку активною
      setActiveIndex(categories.findIndex((c) => c.id === cat.id));
    }
  };

  // Функція для розрахунку зміщення для кожної картки
  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const total = categories.length;

    let normalizedDiff = diff;
    if (diff > total / 2) normalizedDiff -= total;
    if (diff < -total / 2) normalizedDiff += total;

    if (Math.abs(normalizedDiff) > 1) {
      return {
        className: styles.cardHidden,
        style: {
          "--offset": `${normalizedDiff * 100}px`,
        } as React.CSSProperties,
      };
    }

    const offset = normalizedDiff * 300;

    if (normalizedDiff === 0) {
      return {
        className: styles.cardActive,
        style: {},
      };
    }

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
                  onClick={() => handleCardClick(cat)}
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

      {/* Модальне вікно з товарами */}
      {selectedCategory && (
        <ProductModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title={selectedCategory.title}
          products={selectedCategory.products || []}
        />
      )}
    </section>
  );
}
