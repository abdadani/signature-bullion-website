export function Certificates() {
  const items = ["DMCC", "LBMA", "DGCX", "ISO 9001", "Dubai Chamber", "UAE Gold", "AML Certified", "GJEPC", "Kimberley", "Emirates Auth"];
  return (
    <section className="py-14 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-16 bg-[color:var(--cream)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-sm tracking-[0.3em] text-[color:var(--gold-dark)] mb-3">CERTIFICATE</div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[color:var(--ink)]">Accreditations &amp; Compliance</h2>
          <p className="mt-6 text-muted-foreground max-w-3xl mx-auto">
            Being certified by international accreditation bodies highlights the quality of our products, the reputation of our company, and our high level of compliance with local and international AML/CTF policies.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-6">
          {items.map((n) => (
            <div key={n} className="aspect-square flex items-center justify-center rounded-xl bg-white border border-border shadow-sm text-center px-4">
              <div>
                <div className="h-10 w-10 mx-auto mb-2 rounded-full gold-gradient" />
                <div className="text-xs font-medium text-[color:var(--ink)]">{n}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
