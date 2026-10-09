import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Products } from "@/components/site/Products";
import { Gallery } from "@/components/site/Gallery";
import { Blog } from "@/components/site/Blog";
import { Contact } from "@/components/site/Contact";
import { Certificates } from "@/components/site/Certificates";
import { Footer } from "@/components/site/Footer";
import { ref, onValue } from "firebase/database";
import { db } from '../firebase';

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Signature Bullion Gold Trading L.L.C. — Trusted Gold Bullion in Dubai" },
      { name: "description", content: "Signature Bullion Gold Trading L.L.C. — buy, sell and exchange high-purity gold and silver bullion in Dubai's Gold Souq with transparent pricing." },
      { property: "og:title", content: "Signature Bullion Gold Trading L.L.C." },
      { property: "og:description", content: "High-purity gold and silver bullion in Dubai. Transparent pricing, trusted partnerships." },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <Gallery />
      <Blog />
      {/* <Certificates /> */}
      <Contact />
      <Footer />
    </main>
  );
}
