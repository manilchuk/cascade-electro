import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Catalog from "@/components/Catalog/Catalog";
import Advantages from "@/components/Advantages/Advantages";
import About from "@/components/About/About";
import ContactForm from "@/components/Contact/ContactForm";
import Contacts from "@/components/Contacts/Contacts";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Catalog />
        <Advantages />
        <About />
        <Contacts />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
