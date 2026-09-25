import { Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

function Properties() {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [beds, setBeds] = useState("Any");

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesSearch =
        property.title.toLowerCase().includes(search.toLowerCase()) ||
        property.location.toLowerCase().includes(search.toLowerCase());

      const matchesStatus = status === "All" || property.type === status;

      const matchesBeds = beds === "Any" || property.beds >= Number(beds);

      return matchesSearch && matchesStatus && matchesBeds;
    });
  }, [search, status, beds]);

  const clearFilters = () => {
    setSearch("");
    setStatus("All");
    setBeds("Any");
  };

  return (
    <div>
      {/* Page Header */}
      <section className="border-b border-aurel-border bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aurel-green">
            Property collection
          </p>

          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-tight text-aurel-text sm:text-6xl">
            Find a place that fits your life.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-aurel-muted">
            Explore thoughtfully selected homes, apartments and investment
            properties across our featured locations.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-aurel-border bg-aurel-bg">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-10">
          <div className="grid gap-4 md:grid-cols-[2fr_1fr_1fr_auto]">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-aurel-muted"
              />

              <input
                type="text"
                placeholder="Search by property or location"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-12 w-full border border-aurel-border bg-white pl-11 pr-4 text-sm outline-none transition-colors focus:border-aurel-green"
              />
            </div>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="h-12 border border-aurel-border bg-white px-4 text-sm text-aurel-text outline-none focus:border-aurel-green"
            >
              <option value="All">All properties</option>
              <option value="For Sale">For Sale</option>
              <option value="For Rent">For Rent</option>
            </select>

            <select
              value={beds}
              onChange={(e) => setBeds(e.target.value)}
              className="h-12 border border-aurel-border bg-white px-4 text-sm text-aurel-text outline-none focus:border-aurel-green"
            >
              <option value="Any">Any bedrooms</option>
              <option value="3">3+ bedrooms</option>
              <option value="4">4+ bedrooms</option>
              <option value="5">5+ bedrooms</option>
            </select>

            <button
              type="button"
              onClick={clearFilters}
              className="flex h-12 items-center justify-center gap-2 border border-aurel-border px-5 text-sm font-medium text-aurel-text transition-colors hover:bg-white"
            >
              <X size={16} />
              Clear
            </button>
          </div>
        </div>
      </section>

      {/* Results */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SlidersHorizontal size={17} className="text-aurel-muted" />
              <p className="text-sm text-aurel-muted">
                {filteredProperties.length}{" "}
                {filteredProperties.length === 1 ? "property" : "properties"}
              </p>
            </div>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="border border-aurel-border bg-white px-6 py-20 text-center">
              <h2 className="font-display text-3xl font-semibold text-aurel-text">
                No properties found
              </h2>

              <p className="mt-3 text-sm text-aurel-muted">
                Try adjusting your search or filters.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 bg-aurel-green px-5 py-3 text-sm font-medium text-white hover:bg-aurel-green-dark"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Properties;
