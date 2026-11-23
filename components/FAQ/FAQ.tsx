"use client";

import { useState } from "react";
import styles from "./FAQ.module.css";

const ChevronDownIcon = () => (
  <svg
    className={styles.icon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const faqData = [
  {
    question: "Яке мінімальне замовлення?",
    answer:
      "Для роздрібних клієнтів мінімальне замовлення становить від 1000 грн. Для оптових клієнтів та монтажних організацій — від 5000 грн. Ми завжди йдемо назустріч і можемо обговорити індивідуальні умови.",
  },
  {
    question: "Чи є гарантія на товар?",
    answer:
      "Так, ми надаємо гарантію від виробника на всю продукцію. Термін гарантії залежить від конкретного товару і становить від 12 до 36 місяців. Всі товари сертифіковані згідно з законодавством України.",
  },
  {
    question: "Які документи ви надаєте для юридичних осіб?",
    answer:
      "Для юридичних осіб ми надаємо повний пакет документів: рахунок-фактуру, видаткову накладну, податкову накладну (для платників ПДВ), а також сертифікати якості та відповідності на товар.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Перше питання відкрите за замовчуванням

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Часті питання</h2>
          <p className={styles.subtitle}>
            Відповіді на найпоширеніші запитання наших клієнтів
          </p>
        </div>

        <div className={styles.faqList}>
          {faqData.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.questionBtn}
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
              >
                <span className={styles.questionText}>{item.question}</span>
                <div
                  className={`${styles.icon} ${openIndex === index ? styles.iconOpen : ""}`}
                >
                  <ChevronDownIcon />
                </div>
              </button>
              <div
                className={`${styles.answerWrapper} ${openIndex === index ? styles.answerWrapperOpen : ""}`}
              >
                <div className={styles.answerText}>{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
