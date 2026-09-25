import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="border-b border-lurevia-border bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lurevia-green">
            Contact
          </p>

          <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-tight text-lurevia-text sm:text-6xl">
            Let's talk about your next move.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-lurevia-muted">
            Whether you're buying, renting, selling or investing, our team is
            ready to help.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold text-lurevia-text">
              Get in touch
            </h2>

            <div className="mt-8 space-y-7">
              <div className="flex gap-4">
                <MapPin className="mt-1 text-lurevia-green" size={20} />

                <div>
                  <p className="text-sm font-semibold text-lurevia-text">
                    Visit us
                  </p>
                  <p className="mt-1 text-sm leading-6 text-lurevia-muted">
                    12 Admiralty Way
                    <br />
                    Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="mt-1 text-lurevia-green" size={20} />

                <div>
                  <p className="text-sm font-semibold text-lurevia-text">
                    Call us
                  </p>
                  <p className="mt-1 text-sm text-lurevia-muted">
                    +234 800 000 0000
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="mt-1 text-lurevia-green" size={20} />

                <div>
                  <p className="text-sm font-semibold text-lurevia-text">
                    Email us
                  </p>
                  <p className="mt-1 text-sm text-lurevia-muted">
                    hello@lureviaproperties.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-lurevia-border bg-white p-6 sm:p-8">
            {submitted ? (
              <div className="py-16 text-center">
                <h2 className="font-display text-3xl font-semibold text-lurevia-text">
                  Thank you.
                </h2>

                <p className="mt-3 text-sm text-lurevia-muted">
                  Your message has been received.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-lurevia-green"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-lurevia-text">
                      First name
                    </label>

                    <input
                      required
                      type="text"
                      className="mt-2 h-12 w-full border border-lurevia-border px-4 text-sm outline-none focus:border-lurevia-green"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-lurevia-text">
                      Last name
                    </label>

                    <input
                      required
                      type="text"
                      className="mt-2 h-12 w-full border border-lurevia-border px-4 text-sm outline-none focus:border-lurevia-green"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-lurevia-text">
                    Email
                  </label>

                  <input
                    required
                    type="email"
                    className="mt-2 h-12 w-full border border-lurevia-border px-4 text-sm outline-none focus:border-lurevia-green"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-lurevia-text">
                    I'm interested in
                  </label>

                  <select
                    required
                    className="mt-2 h-12 w-full border border-lurevia-border bg-white px-4 text-sm outline-none focus:border-lurevia-green"
                  >
                    <option value="">Select an option</option>
                    <option>Buying a property</option>
                    <option>Renting a property</option>
                    <option>Selling a property</option>
                    <option>Property investment</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-lurevia-text">
                    Message
                  </label>

                  <textarea
                    required
                    rows={5}
                    className="mt-2 w-full resize-none border border-lurevia-border px-4 py-3 text-sm outline-none focus:border-lurevia-green"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-lurevia-green px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-lurevia-green-dark"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
