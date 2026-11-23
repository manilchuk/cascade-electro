import styles from "./Advantages.module.css";

// Створюємо компоненти іконок для єдиного стилю (stroke-width: 2, rounded)
const WarehouseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.icon}
  >
    <path d="M3 21V8l9-5 9 5v13" />
    <path d="M9 21v-8h6v8" />
    <path d="M3 21h18" />
  </svg>
);

const SupportIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.icon}
  >
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

const PercentIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.icon}
  >
    <line x1="19" y1="5" x2="5" y2="19" />
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
);

const TruckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.icon}
  >
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const ShieldIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.icon}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const ClockIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={styles.icon}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const advantages = [
  {
    id: "warehouse",
    icon: <WarehouseIcon />,
    title: "Склад в наявності",
    description: "Понад 5000 позицій на складі, відправка в день замовлення.",
  },
  {
    id: "support",
    icon: <SupportIcon />,
    title: "Технічна консультація",
    description:
      "Інженери з досвідом понад 10 років допоможуть підібрати обладнання.",
  },
  {
    id: "percent",
    icon: <PercentIcon />,
    title: "Оптові ціни",
    description:
      "Гнучка система знижок для монтажних організацій та постійних клієнтів.",
  },
  {
    id: "truck",
    icon: <TruckIcon />,
    title: "Доставка по Україні",
    description:
      "Нова Пошта, SAT, Делівері, самовивіз зі складу — обирайте зручний варіант.",
  },
  {
    id: "shield",
    icon: <ShieldIcon />,
    title: "Гарантія якості",
    description: "Тільки сертифікована продукція від перевірених виробників.",
  },
  {
    id: "clock",
    icon: <ClockIcon />,
    title: "Швидкий розрахунок",
    description: "Рахунок та документи для юросіб протягом 1 години.",
  },
];

export default function Advantages() {
  return (
    <section className={styles.section} id="advantages">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Чому обирають нас</h2>
          <p className={styles.subtitle}>
            Ми робимо процес закупівлі електротехніки простим та надійним
          </p>
        </div>

        <div className={styles.grid}>
          {advantages.map((adv) => (
            <div key={adv.id} className={styles.card}>
              <div className={styles.iconWrapper}>{adv.icon}</div>
              <h3 className={styles.cardTitle}>{adv.title}</h3>
              <p className={styles.cardText}>{adv.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
