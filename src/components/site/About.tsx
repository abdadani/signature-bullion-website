import aboutImg from "@/assets/about-gold.jpg";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-8 lg:px-16 bg-[color:var(--cream)] overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img src={aboutImg} alt="Signature gold bars" width={1024} height={1024} loading="lazy"
            className="rounded-2xl shadow-2xl object-cover aspect-square" />
          <div className="absolute -bottom-6 -right-6 h-32 w-32 gold-gradient rounded-2xl -z-10" />
        </div>
        <div>
          <div className="text-sm tracking-[0.3em] text-[color:var(--gold-dark)] mb-3">ABOUT US</div>
          <h2 className="font-serif text-4xl md:text-5xl text-[color:var(--ink)] mb-6">About the company</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Signature Bullion Gold Trading LLC is a leading gold trading company in the UAE, thanks to our solid reputation, finest quality products and exceptional customer service.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We offer gold and silver kilo bars, tola bars, coins and jewellery of the highest purity, helping you obtain optimal asset growth and secure your future.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We also offer instant cash for your jewelry and gold/silver scrap, and facilitate exchange of your valuables with bars, coins, and jewelry.
          </p>
          <a href="#services" className="inline-flex items-center gap-3 text-[color:var(--gold-dark)] font-medium hover:gap-4 transition-all">
            Read More <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
