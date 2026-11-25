import styles from "./DeliveryPayment.module.css";

const TruckIcon = () => (
  <svg
    className={styles.cardIcon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="1" y="3" width="15" height="13" />
    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);

const WalletIcon = () => (
  <svg
    className={styles.cardIcon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
  </svg>
);

const CheckIcon = () => (
  <svg
    className={styles.checkIcon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function DeliveryPayment() {
  return (
    <section className={styles.section} id="delivery">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Доставка та оплата</h2>
          <p className={styles.subtitle}>Зручні умови для кожної покупки</p>
        </div>

        <div className={styles.grid}>
          {/* Доставка */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <TruckIcon />
              Способи доставки
            </h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <CheckIcon />
                <div>
                  <strong>Нова Пошта, SAT, Делівері</strong> — доставка за
                  тарифами перевізника.
                </div>
              </li>
              <li className={styles.listItem}>
                <CheckIcon />
                <div>
                  <strong>Кур'єром по Києву</strong> — адресна доставка.
                </div>
              </li>
              <li className={styles.listItem}>
                <CheckIcon />
                <div>
                  <strong>Самовивіз</strong> — з нашого складу у Вишневому.
                </div>
              </li>
            </ul>
          </div>

          {/* Оплата */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              <WalletIcon />
              Способи оплати
            </h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <CheckIcon />
                <div>
                  <strong>Оплата на рахунок ФОП</strong> — безготівковий
                  розрахунок.
                </div>
              </li>
              <li className={styles.listItem}>
                <CheckIcon />
                <div>
                  <strong>Безготівковий з ПДВ</strong> — для юридичних осіб.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
