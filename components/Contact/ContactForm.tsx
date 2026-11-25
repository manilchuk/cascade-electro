"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, name, message }),
      });

      if (!response.ok) throw new Error("Failed to send");

      setIsSubmitted(true);
      setPhone("");
      setName("");
      setMessage("");
    } catch (error) {
      console.error(error);
      alert("Помилка відправки. Спробуйте ще раз.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.section} id="contacts">
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <h2 className={styles.title}>Залиште заявку</h2>
          <p className={styles.subtitle}>
            Ми зв'яжемося з вами найближчим часом, щоб уточнити деталі
          </p>

          {isSubmitted ? (
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
                  placeholder=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  placeholder=""
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
  );
}
