import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Blog } from "@/components/site/Blog";
import { Footer } from "@/components/site/Footer";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Blog — Signature Bullion Gold Trading L.L.C." },
      { name: "description", content: "Latest news, gold price analysis and market updates from Signature Bullion Gold Trading." },
      { property: "og:title", content: "Blog — Signature Bullion" },
      { property: "og:description", content: "Gold and silver market insights, price trends and UAE bullion news." },
    ],
  }),
});

function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PageHero eyebrow="OUR BLOG" title="News & Insights" />
      <Blog />
      <Footer />
    </main>
  );
}
