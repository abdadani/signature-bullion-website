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
    <header className="absolute top-0 left-0 right-0 z-30 bg-white shadow-sm pt-[env(safe-area-inset-top)]">
      <div className="flex items-center justify-between gap-3 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 py-2.5 sm:py-3 lg:py-4">
        <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Signature logo"
            className="h-11 sm:h-14 lg:h-16 xl:h-20 2xl:h-24 w-auto shrink-0 object-contain"
          />
          <img
            src={logoText}
            alt="Signature Bullion Gold Trading logo"
            className="h-9 sm:h-12 lg:h-12 xl:h-16 2xl:h-20 w-auto min-w-0 object-contain"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm xl:text-base text-[color:var(--ink)]">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-[color:var(--gold)]" }}
              className="whitespace-nowrap hover:text-[color:var(--gold)] transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Mobile / tablet menu button — was text-white on a white header (invisible) */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="lg:hidden shrink-0 rounded-md p-2 text-[color:var(--ink)] hover:bg-black/5 active:bg-black/10"
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden max-h-[calc(100svh-5rem)] overflow-y-auto bg-black/95 backdrop-blur px-5 sm:px-8 py-3 flex flex-col text-white">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-[color:var(--gold)]" }}
              className="py-3.5 text-base border-b border-white/10 last:border-b-0"
            >
              {n.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
