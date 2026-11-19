import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <main style={{ paddingTop: "80px" }}>
      {" "}
      {/* Відступ під фіксований хедер */}
      <Header />
      {/* Секція 1: Hero (Білий фон) */}
      <section
        id="hero"
        style={{
          height: "100vh",
          backgroundColor: "var(--color-white)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Секція Hero (Тут буде фон hero.png)</h1>
      </section>
      {/* Секція 2: Каталог (Світло-сірий фон) */}
      <section
        id="catalog"
        style={{ height: "100vh", backgroundColor: "var(--color-light-gray)" }}
      >
        <h2 style={{ textAlign: "center", paddingTop: "4rem" }}>Каталог</h2>
      </section>
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
