"use client";

import { useEffect } from "react";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Catalog from "@/components/Catalog/Catalog";
import Advantages from "@/components/Advantages/Advantages";
import About from "@/components/About/About";
import HowToOrder from "@/components/HowToOrder/HowToOrder";
import DeliveryPayment from "@/components/DeliveryPayment/DeliveryPayment";
import DownloadCatalog from "@/components/DownloadCatalog/DownloadCatalog";
import Partners from "@/components/Partners/Partners";
import Contacts from "@/components/Contacts/Contacts";
import ContactForm from "@/components/Contact/ContactForm";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  useEffect(() => {
    // Перевіряємо, чи є в URL хеш (наприклад, #catalog)
    const hash = window.location.hash;

    // Якщо хешу немає, скролимо догори (це вирішує проблему з футером)
    if (!hash) {
      window.scrollTo(0, 0);
    }
    // Якщо хеш є, ми нічого не робимо — браузер сам прокрутить до секції
  }, []);

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
        <DownloadCatalog />
        <Partners />
        <Contacts />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
