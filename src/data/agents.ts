export type Agent = {
  id: string;
  name: string;
  role: string;
  location: string;
  image: string;
  experience: string;
  specialties: string[];
  bio: string;
};

export const agents: Agent[] = [
  {
    id: "amara-okafor",
    name: "Amara Okafor",
    role: "Senior Property Consultant",
    location: "Lagos",
    experience: "9 years",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=85",
    specialties: ["Luxury Homes", "Residential", "Investments"],
    bio: "Amara helps clients navigate Lagos' premium residential market with a focus on thoughtful property selection and long-term value.",
  },
  {
    id: "daniel-adeyemi",
    name: "Daniel Adeyemi",
    role: "Property Investment Advisor",
    location: "Lagos",
    experience: "7 years",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85",
    specialties: ["Investments", "Commercial", "Development"],
    bio: "Daniel works with investors and developers to identify opportunities across established and emerging property markets.",
  },
  {
    id: "sarah-williams",
    name: "Sarah Williams",
    role: "Residential Property Advisor",
    location: "Abuja",
    experience: "6 years",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=85",
    specialties: ["Residential", "Relocation", "Rentals"],
    bio: "Sarah specialises in helping families and professionals find homes that suit both their lifestyle and practical needs.",
  },
  {
    id: "tunde-balogun",
    name: "Tunde Balogun",
    role: "Commercial Property Consultant",
    location: "Lagos",
    experience: "11 years",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85",
    specialties: ["Commercial", "Office", "Investments"],
    bio: "Tunde advises businesses and investors on commercial property acquisitions, leasing and portfolio strategy.",
  },
];
