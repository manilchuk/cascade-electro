import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Catalog from "@/components/Catalog/Catalog";
import Advantages from "@/components/Advantages/Advantages";
import About from "@/components/About/About";
import HowToOrder from "@/components/HowToOrder/HowToOrder";
import DeliveryPayment from "@/components/DeliveryPayment/DeliveryPayment";
import Contacts from "@/components/Contacts/Contacts";
import ContactForm from "@/components/Contact/ContactForm";
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
        <HowToOrder />
        <DeliveryPayment />
        <Contacts />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
