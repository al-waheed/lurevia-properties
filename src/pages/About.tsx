import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <section className="border-b border-aurel-border bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aurel-green">
            About AUREL
          </p>

          <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-tight text-aurel-text sm:text-6xl lg:text-7xl">
            A more considered approach to real estate.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aurel-green">
              Who we are
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-aurel-text">
              Property decisions should feel clear, not complicated.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-aurel-muted">
              <p>
                AUREL is a premium real estate company focused on helping people
                find properties that genuinely fit the way they live, work and
                invest.
              </p>

              <p>
                We combine local market knowledge, thoughtful property selection
                and a straightforward client experience.
              </p>
            </div>
          </div>

          <div className="aspect-[4/3] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85"
              alt="AUREL interior"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-aurel-text text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <p className="font-display text-5xl">18</p>
              <p className="mt-2 text-sm text-white/60">Years of experience</p>
            </div>

            <div>
              <p className="font-display text-5xl">250+</p>
              <p className="mt-2 text-sm text-white/60">Properties listed</p>
            </div>

            <div>
              <p className="font-display text-5xl">120+</p>
              <p className="mt-2 text-sm text-white/60">Clients served</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aurel-green">
              01
            </p>
            <h3 className="mt-4 font-display text-2xl font-semibold">
              Local knowledge
            </h3>
            <p className="mt-3 text-sm leading-7 text-aurel-muted">
              We understand the neighbourhoods, markets and details that make a
              property worth considering.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aurel-green">
              02
            </p>
            <h3 className="mt-4 font-display text-2xl font-semibold">
              Thoughtful selection
            </h3>
            <p className="mt-3 text-sm leading-7 text-aurel-muted">
              Every property is presented with the details clients need to make
              informed decisions.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aurel-green">
              03
            </p>
            <h3 className="mt-4 font-display text-2xl font-semibold">
              Personal service
            </h3>
            <p className="mt-3 text-sm leading-7 text-aurel-muted">
              From the first conversation to the final viewing, our team stays
              focused on the client's needs.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-aurel-border pt-10">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-aurel-text hover:text-aurel-green"
          >
            Start a conversation
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
