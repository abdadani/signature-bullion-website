import goldSvc from "@/assets/service-gold.jpg";
import silverSvc from "@/assets/service-silver.jpg";
import { ArrowRight } from "lucide-react";

const services = [
  { title: "Buy", desc: "Purchase highest-purity investment grade gold and silver bullion at competitive pricing.", img: goldSvc },
  { title: "Sell", desc: "Instant cash for your jewelry and gold/silver scrap with transparent evaluation.", img: silverSvc },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 px-6 md:px-8 lg:px-16 bg-[color:var(--ink)] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-sm tracking-[0.3em] text-[color:var(--gold)] mb-3">DISCOVER THE EXCELLENCE</div>
          <h2 className="font-serif text-4xl md:text-5xl max-w-3xl mx-auto gold-text">
            Embark on your venture into precious metals investment with Signature Bullion Gold Trading LLC
          </h2>
          <p className="mt-6 text-white/70 max-w-2xl mx-auto">
            Your expert partner for buying, selling and exchanging gold and silver in the UAE. Easy, trustworthy and hassle-free trading.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div key={s.title} className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-[color:var(--gold)] transition-all">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={s.img} alt={s.title} width={800} height={600} loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="font-serif text-3xl gold-text mb-3">{s.title}</h3>
                <p className="text-white/70 mb-6">{s.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-2 text-[color:var(--gold)] font-medium">
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
