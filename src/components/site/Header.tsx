import { Link } from "@tanstack/react-router";
import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo.png";
import logoText from "../../assets/logo-text.png";

const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  { label: "Gallery", to: "/gallery" },
  { label: "Blogs", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute top-0 left-0 right-0 z-30 bg-white shadow-sm">
      {/* <div className="hidden md:flex items-center justify-between px-8 lg:px-16 py-3 text-xs text-slate-700 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <Phone className="h-3.5 w-3.5 text-[color:var(--gold)]" />
          <span>Cell no: +971-569033106</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-3.5 w-3.5 text-[color:var(--gold)]" />
          <span>Mail us: info@signaturebullion.ae</span>
        </div>
      </div> */}
      <div className="flex items-center justify-between px-6 md:px-8 lg:px-16 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Signature logo" className="h-24 object-cover shadow-lg" />
          <img src={logoText} alt="Signature Bullion Gold Trading logo" className="h-20 object-contain" />
        </Link>
        <nav className="hidden lg:flex items-center gap-7 text-sm text-red/90">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-[color:var(--gold)]" }}
              className="hover:text-[color:var(--gold)] transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-black/90 backdrop-blur px-6 py-4 flex flex-col gap-3 text-white">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 border-b border-white/10">
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
