import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { About } from "@/components/site/About";
import { Certificates } from "@/components/site/Certificates";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — Signature Bullion Gold Trading L.L.C." },
      { name: "description", content: "Learn about Signature Bullion Gold Trading L.L.C., a trusted Dubai-based gold and silver bullion trader in the Gold Souq." },
      { property: "og:title", content: "About Signature Bullion Gold Trading" },
      { property: "og:description", content: "A trusted Dubai gold trading company committed to quality, transparency and long-term partnerships." },
    ],
  }),
});

function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero eyebrow="ABOUT US" title="Who We Are" />
      <About />
      {/* <Certificates /> */}
      <Footer />
    </main>
  );
}
