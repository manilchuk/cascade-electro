import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Catalog from "@/components/Catalog/Catalog";
import Advantages from "@/components/Advantages/Advantages"; // Додаємо імпорт

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Catalog />
      <Advantages /> {/* Додаємо компонент */}
      {/* Секція 4: Про компанію (Світло-сірий фон) */}
      <section
        id="about"
        style={{ height: "100vh", backgroundColor: "var(--color-light-gray)" }}
      >
        <h2 style={{ textAlign: "center", paddingTop: "4rem" }}>
          Про компанію
        </h2>
      </section>
    </main>
  );
}
