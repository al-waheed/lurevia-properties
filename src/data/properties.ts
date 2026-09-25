export type Property = {
  id: string;
  title: string;
  location: string;
  price: string;
  type: "For Sale" | "For Rent";
  beds: number;
  baths: number;
  area: string;
  image: string;
};

export const properties: Property[] = [
  {
    id: "modern-courtyard-residence",
    title: "Modern Courtyard Residence",
    location: "Lekki Phase 1, Lagos",
    price: "₦185,000,000",
    type: "For Sale",
    beds: 4,
    baths: 5,
    area: "420 m²",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "the-palm-residence",
    title: "The Palm Residence",
    location: "Ikoyi, Lagos",
    price: "₦320,000,000",
    type: "For Sale",
    beds: 5,
    baths: 6,
    area: "610 m²",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "garden-view-apartment",
    title: "Garden View Apartment",
    location: "Victoria Island, Lagos",
    price: "₦95,000,000",
    type: "For Sale",
    beds: 3,
    baths: 3,
    area: "280 m²",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  },
];
