import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blogs", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-black text-white/80 pt-14 sm:pt-20 pb-8 px-4 sm:px-6 md:px-8 lg:px-16 pb-[max(2rem,env(safe-area-inset-bottom))]">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <div className="h-10 w-10 rounded-full gold-gradient flex items-center justify-center text-[color:var(--ink)] font-serif font-bold">S</div>
            <div>
              <div className="font-serif text-xl gold-text font-bold">SIGNATURE</div>
              <div className="text-[9px] tracking-[0.3em] text-[color:var(--gold)]">BULLION GOLD TRADING</div>
            </div>
          </div>
          <p className="text-sm text-white/60 mb-5">
            Signature Bullion Gold Trading L.L.C. — a trusted gold trading company in the UAE, offering the finest bullion products and exceptional customer service.
          </p>
          <div className="flex flex-wrap gap-3">
            {[Facebook, Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-[color:var(--gold)] hover:text-[color:var(--ink)] hover:border-[color:var(--gold)] transition-all">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-serif text-lg mb-5">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className="hover:text-[color:var(--gold)]">{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-serif text-lg mb-5">Products</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/products" className="hover:text-[color:var(--gold)]">Gold Bar</Link></li>
            <li><Link to="/products" className="hover:text-[color:var(--gold)]">Silver Bar</Link></li>
            <li><Link to="/services" className="hover:text-[color:var(--gold)]">Gold Trading</Link></li>
            <li><Link to="/services" className="hover:text-[color:var(--gold)]">Custom Make</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-serif text-lg mb-5">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-[color:var(--gold)] mt-0.5" />+971-569033106</li>
            <li className="flex gap-3 break-words"><Mail className="h-4 w-4 shrink-0 text-[color:var(--gold)] mt-0.5" />info@signaturebullion.ae</li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-[color:var(--gold)] mt-0.5" />4th Floor, Office No. 404, Dubai Diamond Plaza, Malabar Gold Building, Gold Souq, Dubai, UAE</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 sm:mt-14 pt-6 border-t border-white/10 text-xs text-white/50 text-center">
        © {new Date().getFullYear()} Signature Bullion Gold Trading L.L.C. — All Rights Reserved.
      </div>
    </footer>
  );
}
