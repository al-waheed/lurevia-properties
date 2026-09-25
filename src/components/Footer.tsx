import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-aurel-border bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              to="/"
              className="font-display text-3xl font-semibold text-aurel-text"
            >
              AUREL
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-aurel-muted">
              Thoughtfully selected properties and a more considered approach to
              real estate.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-aurel-text">Explore</h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                to="/properties"
                className="text-sm text-aurel-muted hover:text-aurel-text"
              >
                Properties
              </Link>

              <Link
                to="/agents"
                className="text-sm text-aurel-muted hover:text-aurel-text"
              >
                Agents
              </Link>

              <Link
                to="/about"
                className="text-sm text-aurel-muted hover:text-aurel-text"
              >
                About
              </Link>

              <Link
                to="/contact"
                className="text-sm text-aurel-muted hover:text-aurel-text"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-aurel-text">Contact</h3>

            <div className="mt-4 space-y-2 text-sm text-aurel-muted">
              <p>12 Admiralty Way, Lagos</p>
              <p>+234 800 000 0000</p>
              <p>hello@aurelproperties.com</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-5 border-t border-aurel-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-aurel-muted">
            © 2026 AUREL Properties. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              aria-label="Instagram"
              className="text-sm text-aurel-muted transition-colors hover:text-aurel-text"
            >
              Instagram
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              className="text-sm text-aurel-muted transition-colors hover:text-aurel-text"
            >
              LinkedIn
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="text-sm text-aurel-muted transition-colors hover:text-aurel-text"
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
