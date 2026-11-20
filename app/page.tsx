import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Catalog from "@/components/Catalog/Catalog";
import Advantages from "@/components/Advantages/Advantages";
import About from "@/components/About/About";
import ContactForm from "@/components/Contact/ContactForm";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Catalog />
      <Advantages />
      <About />
      <ContactForm />
    </main>
  );
}
