import { ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { agents } from "../data/agents";

function Agents() {
  return (
    <div>
      <section className="border-b border-lurevia-border bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lurevia-green">
            Our people
          </p>

          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-tight text-lurevia-text sm:text-6xl">
            People who know property.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-lurevia-muted">
            Meet the property specialists behind LUREVIA. Experienced, thoughtful
            and focused on helping clients make confident decisions.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {agents.map((agent) => (
              <article key={agent.id} className="group">
                <Link to={`/agents/${agent.id}`}>
                  <div className="aspect-[4/5] overflow-hidden bg-lurevia-border">
                    <img
                      src={agent.image}
                      alt={agent.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="pt-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="font-display text-2xl font-semibold text-lurevia-text">
                          {agent.name}
                        </h2>

                        <p className="mt-1 text-sm text-lurevia-muted">
                          {agent.role}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={19}
                        className="mt-1 text-lurevia-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>

                    <div className="mt-4 flex items-center gap-1.5 text-xs text-lurevia-muted">
                      <MapPin size={14} />
                      {agent.location}
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Agents;
