import { Phone } from "lucide-react";
import Logo from "@/components/Logo";
import { contact, phoneHref } from "@/lib/site";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#property-managers", label: "Property Managers" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-earth-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        <a href="#home" aria-label="Happy Bee Landscaping, back to top">
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-earth-700 hover:text-happy-green-700">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {contact.phone && phoneHref && (
            <a
              href={phoneHref}
              className="flex items-center gap-2 rounded-lg border border-happy-green-600 px-3 py-2 text-sm font-semibold text-happy-green-700 hover:bg-happy-green-50"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span className="hidden sm:inline">{contact.phone}</span>
              <span className="sm:hidden">Call</span>
            </a>
          )}
          <a
            href="#contact"
            className="rounded-lg bg-happy-green-600 px-3 sm:px-4 py-2 text-sm font-semibold text-white hover:bg-happy-green-700"
          >
            <span className="hidden sm:inline">Request vendor package</span>
            <span className="sm:hidden">Contact</span>
          </a>
        </div>
      </div>
    </header>
  );
}
