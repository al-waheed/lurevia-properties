import { ArrowRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

type LocationCardProps = {
  name: string;
  properties: string;
  image: string;
};

function LocationCard({ name, properties, image }: LocationCardProps) {
  return (
    <Link
      to="/properties"
      className="group relative aspect-[4/5] overflow-hidden"
    >
      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />

      <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/40" />

      <div className="absolute bottom-0 left-0 p-6">
        <h3 className="font-display text-3xl font-semibold">{name}</h3>

        <p className="mt-1 text-sm text-white/70">{properties}</p>
      </div>
    </Link>
  );
}

type TestimonialProps = {
  quote: string;
  name: string;
  role: string;
};

function Testimonial({ quote, name, role }: TestimonialProps) {
  return (
    <article className="border-t border-aurel-border pt-6">
      <p className="font-display text-2xl leading-snug text-aurel-text">
        “{quote}”
      </p>

      <div className="mt-6">
        <p className="text-sm font-semibold text-aurel-text">{name}</p>
        <p className="mt-1 text-xs text-aurel-muted">{role}</p>
      </div>
    </article>
  );
}

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85"
          alt="Modern luxury home"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Content */}
        <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-10">
          <div className="max-w-3xl text-white">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-white/80">
              Exceptional properties
            </p>

            <h1 className="font-display text-5xl font-medium leading-[0.95] sm:text-6xl lg:text-8xl">
              Spaces worth
              <br />
              coming home to.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
              Discover thoughtfully selected properties in some of the most
              desirable locations.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/properties"
                className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-aurel-text transition-colors hover:bg-aurel-bg"
              >
                Explore properties
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center rounded-md border border-white/50 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                Speak with an agent
              </Link>
            </div>
          </div>
        </div>

        {/* Search panel */}
        <div className="absolute bottom-6 left-1/2 w-[calc(100%-2.5rem)] max-w-5xl -translate-x-1/2">
          <div className="grid overflow-hidden rounded-lg bg-white shadow-xl md:grid-cols-[1.2fr_1fr_1fr_auto]">
            <div className="border-b border-aurel-border p-4 md:border-b-0 md:border-r">
              <label className="block text-xs font-medium uppercase tracking-wide text-aurel-muted">
                Location
              </label>

              <input
                type="text"
                placeholder="Where do you want to live?"
                className="mt-1 w-full border-0 bg-transparent text-sm text-aurel-text outline-none placeholder:text-aurel-muted"
              />
            </div>

            <div className="border-b border-aurel-border p-4 md:border-b-0 md:border-r">
              <label className="block text-xs font-medium uppercase tracking-wide text-aurel-muted">
                Property type
              </label>

              <select className="mt-1 w-full border-0 bg-transparent text-sm text-aurel-text outline-none">
                <option>Any property</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Villa</option>
              </select>
            </div>

            <div className="border-b border-aurel-border p-4 md:border-b-0 md:border-r">
              <label className="block text-xs font-medium uppercase tracking-wide text-aurel-muted">
                Price range
              </label>

              <select className="mt-1 w-full border-0 bg-transparent text-sm text-aurel-text outline-none">
                <option>Any price</option>
                <option>₦50m – ₦100m</option>
                <option>₦100m – ₦200m</option>
                <option>₦200m+</option>
              </select>
            </div>

            <button className="flex items-center justify-center gap-2 bg-aurel-green px-7 py-5 text-sm font-medium text-white transition-colors hover:bg-aurel-green-dark md:py-0">
              <Search size={18} />
              Search
            </button>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aurel-green">
              Featured properties
            </p>

            <h2 className="mt-3 max-w-xl font-display text-4xl font-semibold leading-tight text-aurel-text sm:text-5xl">
              Carefully selected homes for exceptional living.
            </h2>
          </div>

          <Link
            to="/properties"
            className="inline-flex items-center gap-2 text-sm font-semibold text-aurel-text"
          >
            View all properties
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
      <section className="border-y border-aurel-border bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20 lg:py-28 lg:px-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aurel-green">
              Why AUREL
            </p>

            <h2 className="mt-4 max-w-lg font-display text-4xl font-semibold leading-tight text-aurel-text sm:text-5xl">
              Property decisions made with clarity and confidence.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-aurel-muted">
              We believe finding a property should feel considered, not
              complicated. Our team combines local knowledge, careful selection,
              and a personal approach to help clients make informed decisions.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-aurel-green"
            >
              More about AUREL
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85"
              alt="Elegant modern interior"
              className="aspect-[4/3] w-full object-cover"
            />

            <div className="absolute -bottom-6 -left-4 hidden bg-aurel-green p-6 text-white sm:block lg:-left-8">
              <p className="font-display text-4xl">18</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-white/70">
                Years of experience
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:gap-8">
          <div>
            <p className="font-display text-4xl font-semibold text-aurel-text">
              250+
            </p>
            <p className="mt-2 text-sm text-aurel-muted">Properties listed</p>
          </div>

          <div>
            <p className="font-display text-4xl font-semibold text-aurel-text">
              18
            </p>
            <p className="mt-2 text-sm text-aurel-muted">Years of experience</p>
          </div>

          <div>
            <p className="font-display text-4xl font-semibold text-aurel-text">
              120+
            </p>
            <p className="mt-2 text-sm text-aurel-muted">Clients served</p>
          </div>

          <div>
            <p className="font-display text-4xl font-semibold text-aurel-text">
              8
            </p>
            <p className="mt-2 text-sm text-aurel-muted">Areas covered</p>
          </div>
        </div>
      </section>
      <section className="bg-aurel-text text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
                Explore locations
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
                Find your place.
              </h2>
            </div>

            <Link
              to="/properties"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              Explore properties
              <ArrowRight size={17} />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <LocationCard
              name="Lagos"
              properties="84 properties"
              image="https://images.unsplash.com/photo-1744907895363-d351aa6019ef?auto=format&fit=crop&w=1000&q=85"
            />

            <LocationCard
              name="Abuja"
              properties="46 properties"
              image="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85"
            />

            <LocationCard
              name="Accra"
              properties="32 properties"
              image="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85"
            />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aurel-green">
            Client stories
          </p>

          <h2 className="mt-4 font-display text-4xl font-semibold text-aurel-text sm:text-5xl">
            A different kind of property experience.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <Testimonial
            quote="AUREL made the entire process feel simple. They understood exactly what we were looking for."
            name="Amara Okafor"
            role="Homeowner"
          />

          <Testimonial
            quote="The attention to detail was impressive. Every property they showed us was carefully considered."
            name="Daniel Adeyemi"
            role="Property Investor"
          />

          <Testimonial
            quote="Professional from the first conversation to the final paperwork. I would gladly work with them again."
            name="Sarah Williams"
            role="Homeowner"
          />
        </div>
      </section>
      <section className="mx-5 mb-20 overflow-hidden bg-aurel-green sm:mx-8 lg:mx-10 lg:mb-28">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                Your next chapter
              </p>

              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Let's find a place that feels right.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
                Tell us what you're looking for and our property specialists
                will help you find the right space.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-aurel-text transition-colors hover:bg-aurel-bg"
            >
              Talk to an agent
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
