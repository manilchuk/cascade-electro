"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom"; // Імпортуємо createPortal
import styles from "./CallbackButton.module.css";

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

export default function CallbackButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [mounted, setMounted] = useState(false); // Стан для перевірки, чи ми на клієнті

  // Перевіряємо, чи компонент змонтований на клієнті (для createPortal)
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });

      if (!response.ok) throw new Error("Failed to send");

      setIsSubmitted(true);
      setPhone("");

      setTimeout(() => {
        setIsModalOpen(false);
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      alert("Помилка відправки. Спробуйте ще раз.");
    } finally {
      setIsLoading(false);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsSubmitted(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setIsSubmitted(false), 300);
  };

  // Компонент модального вікна
  const modalContent = (
    <div
      className={`${styles.modalOverlay} ${isModalOpen ? styles.modalOverlayOpen : ""}`}
      onClick={closeModal}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
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
            <p className={styles.successText}>Дякуємо! Ми вам зателефонуємо.</p>
          </div>
        ) : (
          <>
            <h3 className={styles.modalTitle}>Замовити дзвінок</h3>
            <p className={styles.modalSubtitle}>
              Залиште свій номер, і ми зв'яжемося з вами
            </p>
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="callback-phone">
                  Телефон
                </label>
                <input
                  className={styles.input}
                  type="tel"
                  id="callback-phone"
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
  );

  return (
    <>
      {/* Кнопка в хедері */}
      <button className={styles.headerBtn} onClick={openModal}>
        Замовити дзвінок
      </button>

      {/* Рендеримо модальне вікно через портал у body, якщо компонент змонтовано */}
      {mounted && createPortal(modalContent, document.body)}
    </>
  );
}
