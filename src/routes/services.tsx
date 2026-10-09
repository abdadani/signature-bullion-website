import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Services } from "@/components/site/Services";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Signature Bullion Gold Trading L.L.C." },
      { name: "description", content: "Buy, sell and exchange gold and silver bullion in Dubai with Signature Bullion Gold Trading." },
      { property: "og:title", content: "Our Services — Signature Bullion" },
      { property: "og:description", content: "Trusted gold and silver trading services in Dubai's Gold Souq." },
    ],
  }),
});

function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero eyebrow="WHAT WE DO" title="Our Services" />
      <Services />
      <Footer />
    </main>
  );
}
