import styles from "./HowToOrder.module.css";

const FileTextIcon = () => (
  <svg
    className={styles.stepIcon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const SearchIcon = () => (
  <svg
    className={styles.stepIcon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const CreditCardIcon = () => (
  <svg
    className={styles.stepIcon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const TruckIcon = () => (
  <svg
    className={styles.stepIcon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const steps = [
  {
    number: "1",
    icon: <FileTextIcon />,
    title: "Залиште заявку",
    desc: "Зателефонуйте нам або заповніть форму на сайті.",
  },
  {
    number: "2",
    icon: <SearchIcon />,
    title: "Підбір товару",
    desc: "Наші менеджери допоможуть підібрати обладнання та перевірять наявність.",
  },
  {
    number: "3",
    icon: <CreditCardIcon />,
    title: "Рахунок та оплата",
    desc: "Ми виставляємо рахунок. Ви оплачуєте зручним способом.",
  },
  {
    number: "4",
    icon: <TruckIcon />,
    title: "Доставка",
    desc: "Відправляємо замовлення Новою Поштою або готуємо до самовивозу.",
  },
];

export default function HowToOrder() {
  return (
    <section className={styles.section} id="how-to-order">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Як замовити</h2>
          <p className={styles.subtitle}>
            Чотири прості кроки до отримання вашого замовлення
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {steps.map((step) => (
            <div key={step.number} className={styles.stepCard}>
              <div className={styles.stepNumber}>{step.number}</div>
              {step.icon}
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
