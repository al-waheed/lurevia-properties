import { ArrowUpRight, BedDouble, Bath, Maximize, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import type { Property } from "../data/properties";

type PropertyCardProps = {
  property: Property;
};

function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-lurevia-border bg-lurevia-surface">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        <div className="absolute left-4 top-4 rounded-sm bg-white px-3 py-1.5 text-xs font-semibold text-lurevia-text">
          {property.type}
        </div>

        <button
          type="button"
          aria-label={`Save ${property.title}`}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-lurevia-text transition-colors hover:bg-white"
        >
          <Heart size={17} />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-lurevia-muted">
          {property.location}
        </p>

        <h3 className="mt-2 font-display text-2xl font-semibold text-lurevia-text">
          {property.title}
        </h3>

        <p className="mt-3 text-lg font-semibold text-lurevia-green">
          {property.price}
        </p>

        <div className="mt-5 flex items-center gap-4 border-t border-lurevia-border pt-4 text-xs text-lurevia-muted">
          <span className="flex items-center gap-1.5">
            <BedDouble size={15} />
            {property.beds} Beds
          </span>

          <span className="flex items-center gap-1.5">
            <Bath size={15} />
            {property.baths} Baths
          </span>

          <span className="flex items-center gap-1.5">
            <Maximize size={15} />
            {property.area}
          </span>
        </div>

        <Link
          to={`/properties/${property.id}`}
          className="mt-5 flex items-center justify-between border-t border-lurevia-border pt-4 text-sm font-medium text-lurevia-text"
        >
          View property
          <ArrowUpRight
            size={17}
            className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>
    </article>
  );
}

export default PropertyCard;
