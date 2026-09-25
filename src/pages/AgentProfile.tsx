import { ArrowLeft, BriefcaseBusiness, MapPin, Phone } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { agents } from "../data/agents";

function AgentProfile() {
  const { id } = useParams();

  const agent = agents.find((item) => item.id === id);

  if (!agent) {
    return (
      <section className="mx-auto max-w-7xl px-5 py-24 text-center sm:px-8 lg:px-10">
        <h1 className="font-display text-4xl font-semibold text-aurel-text">
          Agent not found
        </h1>

        <Link
          to="/agents"
          className="mt-6 inline-flex bg-aurel-green px-5 py-3 text-sm font-medium text-white"
        >
          Back to agents
        </Link>
      </section>
    );
  }

  return (
    <div>
      <div className="mx-auto max-w-7xl px-5 pt-8 sm:px-8 lg:px-10">
        <Link
          to="/agents"
          className="inline-flex items-center gap-2 text-sm text-aurel-muted hover:text-aurel-text"
        >
          <ArrowLeft size={16} />
          Back to agents
        </Link>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[420px_1fr] lg:items-start">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={agent.image}
              alt={agent.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="pt-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aurel-green">
              {agent.role}
            </p>

            <h1 className="mt-4 font-display text-5xl font-semibold text-aurel-text sm:text-6xl">
              {agent.name}
            </h1>

            <div className="mt-5 flex flex-wrap gap-5 text-sm text-aurel-muted">
              <span className="flex items-center gap-2">
                <MapPin size={16} />
                {agent.location}
              </span>

              <span className="flex items-center gap-2">
                <BriefcaseBusiness size={16} />
                {agent.experience} experience
              </span>
            </div>

            <p className="mt-8 max-w-2xl text-base leading-8 text-aurel-muted">
              {agent.bio}
            </p>

            <div className="mt-10">
              <p className="text-sm font-semibold text-aurel-text">
                Specialties
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {agent.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="border border-aurel-border bg-white px-4 py-2 text-xs text-aurel-muted"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 bg-aurel-green px-6 py-3.5 text-sm font-medium text-white hover:bg-aurel-green-dark"
            >
              <Phone size={17} />
              Contact {agent.name.split(" ")[0]}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AgentProfile;
