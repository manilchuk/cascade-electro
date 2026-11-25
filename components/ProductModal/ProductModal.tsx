"use client";

import { useEffect } from "react";
import styles from "./ProductModal.module.css";

const CloseIcon = () => (
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
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  products: {
    category: string;
    items: { name: string; specs: string }[];
  }[];
}

export default function ProductModal({
  isOpen,
  onClose,
  title,
  products,
}: ProductModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    // Зберігаємо поточну позицію скролу
    const scrollY = window.scrollY;

    // Обчислюємо ширину скролбару для компенсації
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty(
      "--scrollbar-width",
      `${scrollbarWidth}px`,
    );

    // Додаємо клас до html та body
    document.documentElement.classList.add("modal-open");
    document.body.classList.add("modal-open");

    // Фіксуємо body на поточній позиції
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      // Повертаємо все назад
      document.documentElement.classList.remove("modal-open");
      document.body.classList.remove("modal-open");

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      // Відновлюємо позицію скролу
      window.scrollTo(0, scrollY);

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`${styles.modalOverlay} ${isOpen ? styles.modalOverlayOpen : ""}`}
      onClick={onClose}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Закрити"
        >
          <CloseIcon />
        </button>

        <h2 className={styles.title}>{title}</h2>

        <div className={styles.productList}>
          {products.map((group, groupIndex) => (
            <div key={groupIndex} className={styles.categoryGroup}>
              <h3 className={styles.categoryTitle}>{group.category}</h3>
              {group.items.map((item, itemIndex) => (
                <div key={itemIndex} className={styles.productItem}>
                  <span className={styles.productName}>{item.name}</span>
                  <span className={styles.productSpecs}>{item.specs}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
