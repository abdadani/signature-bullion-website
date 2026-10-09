import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Gallery } from "@/components/site/Gallery";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — Signature Bullion Gold Trading L.L.C." },
      { name: "description", content: "Browse our gallery of gold bars, silver bars, coins and custom bullion crafted by Signature Bullion." },
      { property: "og:title", content: "Gallery — Signature Bullion" },
      { property: "og:description", content: "A visual look at our gold and silver bullion collection." },
    ],
  }),
});

function GalleryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero eyebrow="GALLERY" title="Our Collection" />
      <Gallery />
      <Footer />
    </main>
  );
}
