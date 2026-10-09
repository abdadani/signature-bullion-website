import goldImg from "@/assets/gold-bar-coin.jpg";
import silverImg from "@/assets/silver-bar.jpg";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Gold Bars",
    desc: "In times of increasing political, monetary and economic instability, gold provides the only safe haven for your investments. Purchase highest-purity investment grade bullion bars from 1 gram to 1 Kg.",
    img: goldImg,
  },
  {
    title: "Silver Bars",
    desc: "Dive into the world of precious metals with our pristine collection of silver bullion. Our 999.9 silver kilo bars stand out in the market for their high quality and the trust they command.",
    img: silverImg,
  },
];

export function Products() {
  return (
    <section id="products" className="py-24 md:py-32 px-6 md:px-8 lg:px-16 bg-[color:var(--cream)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm tracking-[0.3em] text-[color:var(--gold-dark)] mb-3">PRODUCTS</div>
          <h2 className="font-serif text-4xl md:text-5xl text-[color:var(--ink)] max-w-3xl mx-auto">
            It's more than money — <span className="italic">Gold &amp; Silver are valuable.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Our reputation as a trusted bullion dealer has been built upon excellent customer service, unparalleled expertise, and values of honesty, transparency, and integrity.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {products.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} width={800} height={600} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-3xl text-[color:var(--ink)] mb-4">{p.title}</h3>
                <p className="text-muted-foreground mb-6">{p.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-2 text-[color:var(--gold-dark)] font-medium">
                  Explore More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
