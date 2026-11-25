"use client";

import { useState } from "react";
import styles from "./DownloadCatalog.module.css";

const DownloadIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      marginRight: "8px",
      display: "inline-block",
      verticalAlign: "middle",
    }}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export default function DownloadCatalog() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Виправлено: React.FormEvent -> React.SubmitEvent
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: email,
          name: "Запит прайс-листа",
          message: `Клієнт хоче отримати прайс-лист на email: ${email}`,
        }),
      });

      if (!response.ok) throw new Error("Failed to send");

      setIsSubmitted(true);
      setEmail("");
    } catch (error) {
      console.error(error);
      alert("Помилка відправки. Спробуйте ще раз.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={styles.section} id="download">
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <h2 className={styles.title}>Отримайте повний прайс-лист</h2>
            <p className={styles.subtitle}>
              Введіть свою електронну пошту, і ми надішлемо вам актуальний
              PDF-каталог з усіма цінами та характеристиками.
            </p>
          </div>

          <div className={styles.formWrapper}>
            {isSubmitted ? (
              <div className={styles.successMsg}>
                Дякуємо! Найближчим часом менеджери відправлять прайс-лист на
                вашу пошту.
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputWrapper}>
                  <input
                    type="email"
                    placeholder="Ваш email"
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Відправка..."
                    ) : (
                      <>
                        <DownloadIcon /> Замовити
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
