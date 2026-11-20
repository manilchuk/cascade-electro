import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Catalog from "@/components/Catalog/Catalog";
import Advantages from "@/components/Advantages/Advantages";
import About from "@/components/About/About";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Catalog />
      <Advantages />
      <About />
    </main>
  );
}
