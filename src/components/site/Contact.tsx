import { MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-16 bg-[color:var(--ink)] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] text-[color:var(--gold)] mb-3">GET IN TOUCH</div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl gold-text">Let's Talk About Business</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8 sm:mb-12 text-sm">
          <div className="rounded-lg border border-white/10 bg-white/5 p-5 sm:p-6 flex gap-4 min-w-0">
            <Phone className="h-5 w-5 shrink-0 text-[color:var(--gold)] mt-0.5" />
            <div className="min-w-0 break-words">
              <div className="text-white/60 mb-1">Call us</div>
              <div>+971-569033106</div>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-5 sm:p-6 flex gap-4 min-w-0">
            <Mail className="h-5 w-5 shrink-0 text-[color:var(--gold)] mt-0.5" />
            <div className="min-w-0 break-words">
              <div className="text-white/60 mb-1">Email us</div>
              <div>info@signaturebullion.ae</div>
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-5 sm:p-6 flex gap-4 sm:col-span-2 lg:col-span-1">
            <MapPin className="h-5 w-5 shrink-0 text-[color:var(--gold)] mt-0.5" />
            <div className="min-w-0 break-words">
              <div className="text-white/60 mb-1">Visit us</div>
              <div>4th Floor, Office No. 404, Dubai Diamond Plaza, Malabar Gold Building, Gold Souq, Dubai, UAE</div>
            </div>
          </div>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="grid sm:grid-cols-2 gap-4 sm:gap-5 max-w-4xl mx-auto">
          <input className="bg-white/5 border border-white/10 rounded-lg w-full min-w-0 text-base px-4 sm:px-5 py-3.5 sm:py-4 focus:border-[color:var(--gold)] outline-none placeholder:text-white/40" placeholder="Full Name" />
          <input className="bg-white/5 border border-white/10 rounded-lg w-full min-w-0 text-base px-4 sm:px-5 py-3.5 sm:py-4 focus:border-[color:var(--gold)] outline-none placeholder:text-white/40" placeholder="Email Address" />
          <input className="bg-white/5 border border-white/10 rounded-lg w-full min-w-0 text-base px-4 sm:px-5 py-3.5 sm:py-4 focus:border-[color:var(--gold)] outline-none placeholder:text-white/40" placeholder="Phone" />
          <input className="bg-white/5 border border-white/10 rounded-lg w-full min-w-0 text-base px-4 sm:px-5 py-3.5 sm:py-4 focus:border-[color:var(--gold)] outline-none placeholder:text-white/40" placeholder="Subject" />
          <textarea rows={5} className="sm:col-span-2 bg-white/5 border border-white/10 rounded-lg w-full min-w-0 text-base px-4 sm:px-5 py-3.5 sm:py-4 focus:border-[color:var(--gold)] outline-none placeholder:text-white/40" placeholder="Message" />
          <div className="sm:col-span-2 flex justify-center">
            <button className="gold-gradient text-[color:var(--ink)] font-medium px-10 py-3.5 rounded-full hover:opacity-90 transition-opacity">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
