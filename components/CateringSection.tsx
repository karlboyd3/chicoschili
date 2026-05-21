const eventTypes = [
  "Family Gatherings",
  "Birthday Parties",
  "Office Lunches",
  "Pop-Up Events",
  "Game Day Spreads",
  "Community Events",
];

const cateringPerks = [
  {
    title: "Chili by the Batch",
    desc: "We cook in volume so your whole crowd gets served — hot, fresh, and ready.",
  },
  {
    title: "Available for Delivery",
    desc: "We can bring Chico's Chili to your venue. Contact us to coordinate logistics.",
  },
  {
    title: "Flexible Options",
    desc: "Choose from our full menu offerings. Mix and match for your crowd's appetite.",
  },
  {
    title: "Easy Booking",
    desc: "Just reach out — we'll discuss your event size, menu needs, and timing.",
  },
];

export default function CateringSection() {
  return (
    <section
      id="catering"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--dark-brown)" }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 100%, rgba(204,74,24,0.12) 0%, transparent 55%), radial-gradient(ellipse at 100% 0%, rgba(139,24,24,0.1) 0%, transparent 50%)",
        }}
      />

      {/* Gold top border accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,162,39,0.5), transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="h-px w-10"
              style={{ backgroundColor: "var(--gold)" }}
            />
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "var(--gold)" }}
            >
              Catering &amp; Events
            </span>
            <div
              className="h-px w-10"
              style={{ backgroundColor: "var(--gold)" }}
            />
          </div>

          <h2
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: "var(--cream)" }}
          >
            Bring Chico&apos;s Chili
            <br />
            <span style={{ color: "var(--gold)" }}>To Your Event</span>
          </h2>

          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(253,245,230,0.65)" }}
          >
            Whether it&apos;s a backyard cookout, an office lunch, or a
            community pop-up — Chico&apos;s Chili is ready to feed your crowd
            with bold flavor that gets people talking.
          </p>
        </div>

        {/* Event types */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {eventTypes.map((label) => (
            <div
              key={label}
              className="px-5 py-3 rounded-full text-sm font-medium"
              style={{
                backgroundColor: "rgba(253,245,230,0.05)",
                border: "1px solid rgba(253,245,230,0.12)",
                color: "var(--cream)",
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Perks grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cateringPerks.map((perk) => (
            <div
              key={perk.title}
              className="rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1"
              style={{
                backgroundColor: "rgba(253,245,230,0.04)",
                border: "1px solid rgba(253,245,230,0.08)",
              }}
            >
              <div
                className="w-8 h-0.5 mb-5"
                style={{ backgroundColor: "var(--gold)" }}
              />
              <h3
                className="font-bold text-base mb-2"
                style={{ color: "var(--cream)" }}
              >
                {perk.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(253,245,230,0.55)" }}
              >
                {perk.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="rounded-3xl p-10 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(204,74,24,0.18) 0%, rgba(139,24,24,0.12) 100%)",
            border: "1px solid rgba(201,162,39,0.2)",
          }}
        >
          <h3
            className="font-display text-3xl font-bold mb-4"
            style={{ color: "var(--cream)" }}
          >
            Ready to Book?
          </h3>
          <p
            className="mb-8 max-w-md mx-auto"
            style={{ color: "rgba(253,245,230,0.65)" }}
          >
            Contact Bryant directly to discuss your event details, menu
            selections, and availability.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-base font-bold transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: "var(--gold)",
              color: "var(--dark-brown)",
              boxShadow: "0 4px 24px rgba(201,162,39,0.3)",
            }}
          >
            Book Chico&apos;s Chili for Your Event
          </a>
        </div>
      </div>
    </section>
  );
}
