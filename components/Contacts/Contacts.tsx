import Image from "next/image";
import styles from "./Contacts.module.css";

// Іконки для контактів
const MapPinIcon = () => (
  <svg
    className={styles.icon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    className={styles.icon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg
    className={styles.icon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const ClockIcon = () => (
  <svg
    className={styles.icon}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default function Contacts() {
  return (
    <section className={styles.section} id="contacts">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Контакти</h2>
          <p className={styles.subtitle}>
            Зв'яжіться з нами зручним для вас способом
          </p>
        </div>

        <div className={styles.grid}>
          {/* Ліва колонка: Інформація */}
          <div className={styles.infoList}>
            {/* Адреси */}
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <MapPinIcon />
              </div>
              <div className={styles.infoContent}>
                <h3>Адреси офісу та складу</h3>
                <div className={styles.addressBlock}>
                  <p>
                    <strong>Офіс:</strong> вул. Шовковична, буд. 13/2, офіс 11,
                    Київ
                  </p>
                  <p>
                    <strong>Склад:</strong> вулиця Машинобудівників, буд.23,
                    прим.4, Вишневе (Київська область)
                  </p>
                </div>
              </div>
            </div>

            {/* Менеджери */}
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <PhoneIcon />
              </div>
              <div className={styles.infoContent}>
                <h3>Менеджери</h3>
                <ul className={styles.managersList}>
                  {/* Менеджер 1 */}
                  <li className={styles.managerItem}>
                    <div className={styles.managerPhone}>
                      <a href="tel:+380501445993">+380 (50) 144 59 93</a>
                      <span className={styles.managerName}>Олена Ятманова</span>
                    </div>
                    <div className={styles.messengerIcons}>
                      <a
                        href="viber://chat?number=%2B380501445993"
                        className={styles.messengerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Viber Олена"
                      >
                        <Image
                          src="/Contacts/viber1.webp"
                          alt="Viber"
                          width={20}
                          height={20}
                          className={styles.messengerImage}
                        />
                      </a>
                      <a
                        href="https://wa.me/380501445993"
                        className={styles.messengerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp Олена"
                      >
                        <Image
                          src="/Contacts/whatsapp.webp"
                          alt="WhatsApp"
                          width={20}
                          height={20}
                          className={styles.messengerImage}
                        />
                      </a>
                      <a
                        href="https://t.me/+380501445993"
                        className={styles.messengerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Telegram Олена"
                      >
                        <Image
                          src="/Contacts/telegram.webp"
                          alt="Telegram"
                          width={20}
                          height={20}
                          className={styles.messengerImage}
                        />
                      </a>
                    </div>
                  </li>

                  {/* Менеджер 2 */}
                  <li className={styles.managerItem}>
                    <div className={styles.managerPhone}>
                      <a href="tel:+380952429114">+380 (95) 242 91 14</a>
                      <span className={styles.managerName}>
                        Дмитро Ковальчук
                      </span>
                    </div>
                    <div className={styles.messengerIcons}>
                      <a
                        href="viber://chat?number=%2B380952429114"
                        className={styles.messengerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Viber Дмитро"
                      >
                        <Image
                          src="/Contacts/viber1.webp"
                          alt="Viber"
                          width={20}
                          height={20}
                          className={styles.messengerImage}
                        />
                      </a>
                      <a
                        href="https://wa.me/380952429114"
                        className={styles.messengerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp Дмитро"
                      >
                        <Image
                          src="/Contacts/whatsapp.webp"
                          alt="WhatsApp"
                          width={20}
                          height={20}
                          className={styles.messengerImage}
                        />
                      </a>
                      <a
                        href="https://t.me/+380952429114"
                        className={styles.messengerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Telegram Дмитро"
                      >
                        <Image
                          src="/Contacts/telegram.webp"
                          alt="Telegram"
                          width={20}
                          height={20}
                          className={styles.messengerImage}
                        />
                      </a>
                    </div>
                  </li>

                  {/* Менеджер 3 */}
                  <li className={styles.managerItem}>
                    <div className={styles.managerPhone}>
                      <a href="tel:+380660085654">+380 (66) 008 56 54</a>
                      <span className={styles.managerName}>Любов Левченко</span>
                    </div>
                    <div className={styles.messengerIcons}>
                      <a
                        href="viber://chat?number=%2B380660085654"
                        className={styles.messengerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Viber Любов"
                      >
                        <Image
                          src="/Contacts/viber1.webp"
                          alt="Viber"
                          width={20}
                          height={20}
                          className={styles.messengerImage}
                        />
                      </a>
                      <a
                        href="https://wa.me/380660085654"
                        className={styles.messengerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp Любов"
                      >
                        <Image
                          src="/Contacts/whatsapp.webp"
                          alt="WhatsApp"
                          width={20}
                          height={20}
                          className={styles.messengerImage}
                        />
                      </a>
                      <a
                        href="https://t.me/+380660085654"
                        className={styles.messengerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Telegram Любов"
                      >
                        <Image
                          src="/Contacts/telegram.webp"
                          alt="Telegram"
                          width={20}
                          height={20}
                          className={styles.messengerImage}
                        />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Email */}
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <MailIcon />
              </div>
              <div className={styles.infoContent}>
                <h3>Електронна пошта</h3>
                <p>
                  <a href="mailto:ukrenergo21@gmail.com">
                    ukrenergo21@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Графік роботи */}
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <ClockIcon />
              </div>
              <div className={styles.infoContent}>
                <h3>Графік роботи</h3>
                <p>Пн - Пт: 9:00 - 17:30</p>
                <p>Сб - Нд: вихідний</p>
              </div>
            </div>
          </div>

          {/* Права колонка: Карта */}
          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.83632065341!2d30.530272977144026!3d50.44414937159099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cfab4483a97b%3A0xc9e5dad58cc01ada!2z0LLRg9C70LjRhtGPINCo0L7QstC60L7QstC40YfQvdCwLCAxMy8yLCDQmtC40ZfQsiwgMDEwMjE!5e0!3m2!1suk!2sua!4v1795207392032!5m2!1suk!2sua"
              title="Мапа офісу"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
