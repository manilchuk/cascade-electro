import Image from "next/image";
import styles from "./About.module.css";

// Іконка галочки для списку
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

const services = [
  "Кабельно-провідникова продукція",
  "Електротехнічне обладнання",
  "Світлотехнічна продукція",
  "Трансформатори струму та напруги",
  "Трансформатори для прогріву бетону",
  "Супутні електротехнічні товари",
];

const stats = [
  {
    number: "Опт / Роздріб",
    label: "Гнучкі умови",
    desc: "Працюємо з приватними покупцями та великими підприємствами.",
  },
  {
    number: "Склади",
    label: "По всій Україні",
    desc: "Власні складські потужності в різних регіонах для швидкої обробки.",
  },
  {
    number: "Доставка",
    label: "По всій країні",
    desc: "Оперативна відправка Новою Поштою або самовивіз у Вишневому.",
  },
];

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.topGrid}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Про компанію «Каскад Електро»</h2>
            <p className={styles.lead}>
              Каскад Електро — надійний постачальник електротехнічної продукції
              та комплексних рішень для ваших потреб.
            </p>
            <p className={styles.text}>
              Ми спеціалізуємося на продажу різноманітного асортименту
              електротехнічної, кабельно-провідникової та світлотехнічної
              продукції, трансформаторів струму, напруги, а також
              трансформаторів для прогріву бетону. Наша головна перевага —
              розмаїття асортименту, який дозволяє задовольнити потреби як
              приватних покупців, так і великих підприємств та організацій.
            </p>

            <h3 className={styles.servicesTitle}>Ми пропонуємо:</h3>
            <ul className={styles.servicesList}>
              {services.map((service, index) => (
                <li key={index} className={styles.serviceItem}>
                  <CheckIcon />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Блок з фото */}
          <div className={styles.imageWrapper}>
            <Image
              src="/warehouse.webp"
              alt="Склад компанії Каскад Електро"
              fill
              className={styles.aboutImage}
              sizes="(max-width: 992px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Блок з цифрами/фактами */}
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <p className={styles.statDesc}>{stat.desc}</p>
            </div>
          ))}
        </div>

        <p className={styles.footerText}>
          «Каскад Електро — широкий вибір, надійні рішення та електротехніка для
          кожного!»
        </p>
      </div>
    </section>
  );
}
