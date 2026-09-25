import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-lurevia-border bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              to="/"
              className="font-display text-3xl font-semibold text-lurevia-text"
            >
              LUREVIA
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-lurevia-muted">
              Thoughtfully selected properties and a more considered approach to
              real estate.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-lurevia-text">Explore</h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                to="/properties"
                className="text-sm text-lurevia-muted hover:text-lurevia-text"
              >
                Properties
              </Link>

              <Link
                to="/agents"
                className="text-sm text-lurevia-muted hover:text-lurevia-text"
              >
                Agents
              </Link>

              <Link
                to="/about"
                className="text-sm text-lurevia-muted hover:text-lurevia-text"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-sm text-lurevia-muted hover:text-lurevia-text"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-lurevia-text">Contact</h3>

            <div className="mt-4 space-y-2 text-sm text-lurevia-muted">
              <p>12 Admiralty Way, Lagos</p>
              <p>+234 800 000 0000</p>
              <p>hello@lureviaproperties.com</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-5 border-t border-lurevia-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-lurevia-muted">
            © 2026 LUREVIA Properties. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              aria-label="Instagram"
              className="text-sm text-lurevia-muted transition-colors hover:text-lurevia-text"
            >
              Instagram
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="text-sm text-lurevia-muted transition-colors hover:text-lurevia-text"
            >
              LinkedIn
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="text-sm text-lurevia-muted transition-colors hover:text-lurevia-text"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
