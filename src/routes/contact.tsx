import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Us — Signature Bullion Gold Trading L.L.C." },
      { name: "description", content: "Contact Signature Bullion Gold Trading L.L.C. at +971-569033106. Visit us at Dubai Diamond Plaza, Gold Souq, Dubai." },
      { property: "og:title", content: "Contact Signature Bullion Gold Trading" },
      { property: "og:description", content: "Reach out for gold and silver bullion enquiries in Dubai." },
    ],
  }),
});

function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero eyebrow="CONTACT" title="Get in Touch" />
      <Contact />
      <Footer />
    </main>
  );
}
