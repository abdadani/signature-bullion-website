import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const items = [
  { title: "Gold Bar", img: g1 },
  { title: "Silver Bar", img: g2 },
  { title: "Silver & Gold Bars", img: g3 },
  { title: "Custom Make", img: g4 },
  { title: "Silver & Gold Coins", img: g5 },
  { title: "Gold Coins", img: g6 },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-14 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-16 bg-[color:var(--ink)] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-14">
          <div>
            <div className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-[color:var(--gold)] mb-3">GALLERY</div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl gold-text">Signature Bullion Gold Trading</h2>
          </div>
          <a href="#contact" className="text-[color:var(--gold)] border border-[color:var(--gold)] rounded-full px-6 py-2.5 text-sm hover:bg-[color:var(--gold)] hover:text-[color:var(--ink)] transition-all">
            Show More
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
          {items.map((it) => (
            <div key={it.title} className="group relative aspect-square overflow-hidden rounded-xl">
              <img src={it.img} alt={it.title} width={600} height={600} loading="lazy"
                className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-2.5 left-3 right-3 sm:bottom-4 sm:left-5 sm:right-5">
                <h3 className="font-serif text-sm sm:text-lg lg:text-xl leading-tight text-white">{it.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
