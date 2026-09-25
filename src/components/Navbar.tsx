import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Properties", to: "/properties" },
  { label: "Agents", to: "/agents" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-aurel-border bg-aurel-bg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link
          to="/"
          className="font-display text-3xl font-semibold tracking-wide text-aurel-text"
        >
          AUREL
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-aurel-muted transition-colors duration-200 hover:text-aurel-text"
            >
              {link.label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="rounded-md bg-aurel-green px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-aurel-green-dark"
          >
            List a Property
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="text-aurel-text md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="border-t border-aurel-border bg-aurel-bg px-5 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-aurel-text"
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="w-fit rounded-md bg-aurel-green px-5 py-3 text-sm font-medium text-white"
            >
              List a Property
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
export default Navbar;