import heroImg from "@/assets/hero-gold.jpg";

export function PageHero({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <section className="relative min-h-[50svh] sm:min-h-[60svh] w-full overflow-hidden">
      <img src={heroImg} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      <div className="relative z-10 flex min-h-[50svh] sm:min-h-[60svh] items-center px-4 sm:px-6 md:px-8 lg:px-16 pt-28 sm:pt-32 pb-12 sm:pb-16">
        <div className="max-w-3xl text-white">
          {eyebrow && (
            <div className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-[color:var(--gold)] mb-3 sm:mb-4">{eyebrow}</div>
          )}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl xl:text-7xl leading-[1.05] gold-text font-bold">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
