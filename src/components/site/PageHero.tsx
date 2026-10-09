import heroImg from "@/assets/hero-gold.jpg";

export function PageHero({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <section className="relative min-h-[60vh] w-full overflow-hidden">
      <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      <div className="relative z-10 flex min-h-[60vh] items-center px-6 md:px-8 lg:px-16 pt-32 pb-16">
        <div className="max-w-3xl text-white">
          {eyebrow && (
            <div className="text-sm tracking-[0.3em] text-[color:var(--gold)] mb-4">{eyebrow}</div>
          )}
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] gold-text font-bold">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
