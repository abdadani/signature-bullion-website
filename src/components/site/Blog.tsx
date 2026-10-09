import g1 from "@/assets/gallery-3.jpg";
import g2 from "@/assets/gallery-1.jpg";
import g3 from "@/assets/gold-bar-coin.jpg";
import { ArrowRight } from "lucide-react";

const posts = [
  { img: g1, title: "Gold Price Drop: Why Did Gold Fall and Will It Drop Again?", date: "May 11, 2026", desc: "Higher rate expectations, a stronger dollar, and profit-taking explain why a gold price drop happens." },
  { img: g2, title: "Gold Prices in the UAE During April 2026: Monthly Trends", date: "April 29, 2026", desc: "Explore daily rates, trends, and key insights on 24K, 22K, and 18K gold movements." },
  { img: g3, title: "Gold Price Today in UAE (Live Updates & Analysis)", date: "April 27, 2026", desc: "Check gold price today in UAE with live updates for 24K, 22K, and 18K per gram." },
];

export function Blog() {
  return (
    <section id="blog" className="py-14 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-16 bg-[color:var(--cream)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-14">
          <div className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-[color:var(--gold-dark)] mb-3">OUR BLOG</div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[color:var(--ink)]">News &amp; Updates</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((p) => (
            <article key={p.title} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} width={600} height={400} loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-5 sm:p-6">
                <div className="text-xs text-[color:var(--gold-dark)] mb-2">{p.date}</div>
                <h3 className="font-serif text-lg sm:text-xl text-[color:var(--ink)] leading-snug mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <a href="#" className="inline-flex items-center gap-2 text-sm text-[color:var(--gold-dark)] font-medium">
                  Read More <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
