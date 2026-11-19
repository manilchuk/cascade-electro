import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Catalog from "@/components/Catalog/Catalog"; // Додаємо імпорт

export default function Home() {
  return (
    <main>
      <Header />

      <Hero />

      <Catalog />

      {/* Секція 3: Переваги (Білий фон) */}
      <section
        id="advantages"
        style={{ height: "100vh", backgroundColor: "var(--color-white)" }}
      >
        <h2 style={{ textAlign: "center", paddingTop: "4rem" }}>Переваги</h2>
      </section>

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
