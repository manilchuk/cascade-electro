"use client";

import { useState, useEffect } from "react";
import styles from "./Contact.module.css";

// Іконка телефону (використовуємо спрайт)
const PhoneIcon = () => (
  <svg className={styles.fabIcon}>
    <use href="/sprite.svg#icon-phone" />
  </svg>
);

// Іконка хрестика для закриття
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

// Іконка успіху
const SuccessIcon = () => (
  <svg
    className={styles.successIcon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default function ContactForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState("");

  // Стан для анімації FAB
  const [showText, setShowText] = useState(true);

  // Ефект для постійного чергування тексту та іконки
  useEffect(() => {
    const interval = setInterval(() => {
      setShowText((prev) => !prev);
    }, 3000); // Кожні 3 секунди

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);

      if (isModalOpen) {
        setTimeout(() => {
          setIsModalOpen(false);
          setIsSubmitted(false);
          setPhone("");
        }, 3000);
      }
    }, 1000);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsSubmitted(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setIsSubmitted(false), 300);
  };

  return (
    <>
      {/* --- Секція форми внизу сторінки --- */}
      <section className={styles.section} id="contacts">
        <div className={styles.container}>
          <div className={styles.formWrapper}>
            <h2 className={styles.title}>Залиште заявку</h2>
            <p className={styles.subtitle}>
              Ми зв'яжемося з вами найближчим часом, щоб уточнити деталі
            </p>

            {isSubmitted && !isModalOpen ? (
              <div className={styles.successMessage}>
                <SuccessIcon />
                <p className={styles.successText}>
                  Дякуємо! Ваша заявка прийнята.
                </p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label className={styles.label} htmlFor="name">
                    Ваше ім'я
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    id="name"
                    placeholder="Іван Іванов"
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label} htmlFor="phone">
                    Телефон
                  </label>
                  <input
                    className={styles.input}
                    type="tel"
                    id="phone"
                    placeholder="+38 (0__) ___-__-__"
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label className={styles.label} htmlFor="message">
                    Повідомлення
                  </label>
                  <textarea
                    className={`${styles.input} ${styles.textarea}`}
                    id="message"
                    placeholder="Опишіть ваше завдання..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={isLoading}
                >
                  {isLoading ? "Відправка..." : "Відправити заявку"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* --- Плаваюча кнопка (FAB) --- */}
      <button
        className={`${styles.fab} ${showText ? styles.fabExpanded : styles.fabCollapsed}`}
        onClick={openModal}
        aria-label="Замовити дзвінок"
      >
        {showText ? (
          <span className={styles.fabText}>Замовити дзвінок</span>
        ) : (
          <PhoneIcon />
        )}
      </button>

      {/* --- Модальне вікно --- */}
      <div
        className={`${styles.modalOverlay} ${isModalOpen ? styles.modalOverlayOpen : ""}`}
        onClick={closeModal}
      >
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className={styles.closeBtn}
            onClick={closeModal}
            aria-label="Закрити"
          >
            <CloseIcon />
          </button>

          {isSubmitted ? (
            <div className={styles.successMessage}>
              <SuccessIcon />
              <p className={styles.successText}>
                Дякуємо! Ми вам зателефонуємо.
              </p>
            </div>
          ) : (
            <>
              <h3 className={styles.modalTitle}>Замовити дзвінок</h3>
              <p className={styles.modalSubtitle}>
                Залиште свій номер, і ми зв'яжемося з вами
              </p>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                  <label className={styles.label} htmlFor="modal-phone">
                    Телефон
                  </label>
                  <input
                    className={styles.input}
                    type="tel"
                    id="modal-phone"
                    placeholder="+38 (0__) ___-__-__"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={isLoading}
                >
                  {isLoading ? "Відправка..." : "Зателефонуйте мені"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
