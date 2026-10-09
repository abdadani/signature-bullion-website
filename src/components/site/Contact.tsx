import { MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-8 lg:px-16 bg-[color:var(--ink)] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-sm tracking-[0.3em] text-[color:var(--gold)] mb-3">GET IN TOUCH</div>
          <h2 className="font-serif text-4xl md:text-5xl gold-text">Let's Talk About Business</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-12 text-sm">
          <div className="rounded-lg border border-white/10 bg-white/5 p-6 flex gap-4">
            <Phone className="h-5 w-5 text-[color:var(--gold)] mt-0.5" />
            <div>
              <div className="text-white/60 mb-1">Call us</div>
              <div>+971-569033106</div>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-6 flex gap-4">
            <Mail className="h-5 w-5 text-[color:var(--gold)] mt-0.5" />
            <div>
              <div className="text-white/60 mb-1">Email us</div>
              <div>info@signaturebullion.ae</div>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-6 flex gap-4">
            <MapPin className="h-5 w-5 text-[color:var(--gold)] mt-0.5" />
            <div>
              <div className="text-white/60 mb-1">Visit us</div>
              <div>4th Floor, Office No. 404, Dubai Diamond Plaza, Malabar Gold Building, Gold Souq, Dubai, UAE</div>
            </div>
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <input className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 focus:border-[color:var(--gold)] outline-none placeholder:text-white/40" placeholder="Full Name" />
          <input className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 focus:border-[color:var(--gold)] outline-none placeholder:text-white/40" placeholder="Email Address" />
          <input className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 focus:border-[color:var(--gold)] outline-none placeholder:text-white/40" placeholder="Phone" />
          <input className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 focus:border-[color:var(--gold)] outline-none placeholder:text-white/40" placeholder="Subject" />
          <textarea rows={5} className="md:col-span-2 bg-white/5 border border-white/10 rounded-lg px-5 py-4 focus:border-[color:var(--gold)] outline-none placeholder:text-white/40" placeholder="Message" />
          <div className="md:col-span-2 flex justify-center">
            <button className="gold-gradient text-[color:var(--ink)] font-medium px-10 py-3.5 rounded-full hover:opacity-90 transition-opacity">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
