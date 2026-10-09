import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Products } from "@/components/site/Products";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/products")({
  component: ProductsPage,
  head: () => ({
    meta: [
      { title: "Products — Signature Bullion Gold Trading L.L.C." },
      { name: "description", content: "Investment-grade gold and silver bars, coins and bullion from Signature Bullion Gold Trading in Dubai." },
      { property: "og:title", content: "Gold & Silver Products — Signature Bullion" },
      { property: "og:description", content: "High-purity gold and silver bullion available at our Dubai Gold Souq office." },
    ],
  }),
});

function ProductsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero eyebrow="PRODUCTS" title="Gold & Silver Bullion" />
      <Products />
      <Footer />
    </main>
  );
}
