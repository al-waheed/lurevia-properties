import {
  ArrowLeft,
  BedDouble,
  Bath,
  Maximize,
  MapPin,
  Phone,
  Share2,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { properties } from "../data/properties";

function PropertyDetails() {
  const { id } = useParams();

  const property = properties.find((item) => item.id === id);

  if (!property) {
    return (
      <section className="mx-auto max-w-7xl px-5 py-24 text-center sm:px-8 lg:px-10">
        <h1 className="font-display text-4xl font-semibold text-lurevia-text">
          Property not found
        </h1>

        <Link
          to="/properties"
          className="mt-6 inline-flex bg-lurevia-green px-5 py-3 text-sm font-medium text-white hover:bg-lurevia-green-dark"
        >
          Back to properties
        </Link>
      </section>
    );
  }

  return (
    <div>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 pt-8 sm:px-8 lg:px-10">
        <Link
          to="/properties"
          className="inline-flex items-center gap-2 text-sm text-lurevia-muted hover:text-lurevia-text"
        >
          <ArrowLeft size={16} />
          Back to properties
        </Link>
      </div>

      {/* Image */}
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="relative aspect-[16/8] overflow-hidden bg-lurevia-border">
          <img
            src={property.image}
            alt={property.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute left-5 top-5 bg-white px-4 py-2 text-xs font-semibold text-lurevia-text">
            {property.type}
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lurevia-green">
              {property.type}
            </p>

            <h1 className="mt-3 font-display text-5xl font-semibold leading-tight text-lurevia-text">
              {property.title}
            </h1>

            <div className="mt-4 flex items-center gap-2 text-lurevia-muted">
              <MapPin size={17} />
              <span>{property.location}</span>
            </div>

            <div className="mt-8 grid grid-cols-3 border-y border-lurevia-border py-5">
              <div className="flex items-center gap-3">
                <BedDouble size={20} className="text-lurevia-green" />
                <div>
                  <p className="text-sm font-semibold text-lurevia-text">
                    {property.beds}
                  </p>
                  <p className="text-xs text-lurevia-muted">Bedrooms</p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-l border-lurevia-border pl-5">
                <Bath size={20} className="text-lurevia-green" />
                <div>
                  <p className="text-sm font-semibold text-lurevia-text">
                    {property.baths}
                  </p>
                  <p className="text-xs text-lurevia-muted">Bathrooms</p>
                </div>
              </div>

              <div className="flex items-center gap-3 border-l border-lurevia-border pl-5">
                <Maximize size={20} className="text-lurevia-green" />
                <div>
                  <p className="text-sm font-semibold text-lurevia-text">
                    {property.area}
                  </p>
                  <p className="text-xs text-lurevia-muted">Floor area</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="font-display text-3xl font-semibold text-lurevia-text">
                About this property
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-lurevia-muted">
                A thoughtfully designed residence offering generous living
                spaces, refined finishes and a comfortable setting in one of the
                area's most desirable locations.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-8 text-lurevia-muted">
                Designed for modern living, the property balances privacy,
                natural light and practical everyday spaces.
              </p>
            </div>
          </div>

          {/* Contact Card */}
          <aside className="h-fit border border-lurevia-border bg-white p-7 lg:sticky lg:top-8">
            <p className="text-xs uppercase tracking-[0.15em] text-lurevia-muted">
              Asking price
            </p>

            <p className="mt-2 font-display text-3xl font-semibold text-lurevia-green">
              {property.price}
            </p>

            <div className="mt-7 space-y-3">
              <Link
                to="/contact"
                className="flex w-full items-center justify-center gap-2 bg-lurevia-green px-5 py-3.5 text-sm font-medium text-white transition-colors hover:bg-lurevia-green-dark"
              >
                <Phone size={17} />
                Speak with an agent
              </Link>

              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 border border-lurevia-border px-5 py-3.5 text-sm font-medium text-lurevia-text hover:bg-lurevia-bg"
              >
                <Share2 size={17} />
                Share property
              </button>
            </div>

            <div className="mt-7 border-t border-lurevia-border pt-6">
              <p className="text-sm font-semibold text-lurevia-text">
                Interested in this property?
              </p>

              <p className="mt-2 text-sm leading-6 text-lurevia-muted">
                Our property specialists can arrange a viewing or answer any
                questions you may have.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default PropertyDetails;
