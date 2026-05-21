function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div
      className="relative flex items-center justify-center rounded-3xl overflow-hidden w-full h-full min-h-80"
      style={{
        background:
          "linear-gradient(160deg, #4A1A08 0%, #7A2510 50%, #3A1206 100%)",
        border: "1px solid rgba(201,162,39,0.1)",
      }}
    >
      <div className="text-center p-8">
        <svg className="w-10 h-10 mx-auto mb-3 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--cream)" }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <p
          className="text-sm font-medium tracking-wide uppercase"
          style={{ color: "rgba(253,245,230,0.35)" }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

const highlights = [
  {
    title: "Bold Seasoning",
    desc: "Every batch crafted with a signature spice blend that builds layers of flavor.",
  },
  {
    title: "Homemade Roots",
    desc: "Started from the kitchen, built with love — no shortcuts, no preservatives.",
  },
  {
    title: "Community First",
    desc: "Proudly serving Alexandria and the DMV with food that brings people together.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="h-px w-10"
            style={{ backgroundColor: "var(--chili-orange)" }}
          />
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ color: "var(--chili-orange)" }}
          >
            Our Story
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <h2
              className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-6"
              style={{ color: "var(--dark-brown)" }}
            >
              Where Bold Flavor
              <br />
              <span style={{ color: "var(--chili-red)" }}>Meets Heart</span>
            </h2>

            <div
              className="space-y-5 text-base leading-relaxed"
              style={{ color: "rgba(28,13,6,0.75)" }}
            >
              <p>
                Chico&apos;s Chili was born from a simple belief: great food
                doesn&apos;t need to be complicated — it just needs real
                ingredients, bold seasoning, and genuine care. Bryant Bolden
                started making chili the way food is supposed to taste —
                hearty, satisfying, and full of soul.
              </p>
              <p>
                Every pot of Chico&apos;s Chili is made from scratch using a
                signature spice blend developed over years of cooking for
                family, friends, and community. No fillers, no shortcuts. Just
                bold, rich flavor in every bite.
              </p>
              <p>
                From neighborhood pop-ups to full catering events, Chico&apos;s
                Chili has been feeding the DMV community with comfort food that
                leaves an impression. If you&apos;ve had it once, you know —
                this is not your average chili.
              </p>
            </div>

            {/* Owner tag */}
            <div
              className="mt-8 inline-flex items-center gap-4 rounded-2xl px-6 py-4"
              style={{
                backgroundColor: "rgba(139,24,24,0.06)",
                border: "1px solid rgba(139,24,24,0.12)",
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                style={{ backgroundColor: "var(--chili-red)", color: "var(--cream)" }}
              >
                BB
              </div>
              <div>
                <div
                  className="font-bold text-sm"
                  style={{ color: "var(--dark-brown)" }}
                >
                  Bryant Bolden
                </div>
                <div
                  className="text-xs"
                  style={{ color: "rgba(28,13,6,0.55)" }}
                >
                  Owner &amp; Head Chef, Chico&apos;s Chili
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="space-y-6">
            <ImagePlaceholder label="Bryant Bolden / Brand Photo" />

            {/* Highlights grid */}
            <div className="grid grid-cols-3 gap-3">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="rounded-2xl p-4 transition-transform duration-200 hover:-translate-y-1"
                  style={{
                    backgroundColor: "rgba(28,13,6,0.04)",
                    border: "1px solid rgba(28,13,6,0.08)",
                  }}
                >
                  <div
                    className="w-6 h-0.5 mb-3"
                    style={{ backgroundColor: "var(--chili-orange)" }}
                  />
                  <div
                    className="text-xs font-bold"
                    style={{ color: "var(--dark-brown)" }}
                  >
                    {h.title}
                  </div>
                  <div
                    className="text-xs mt-1 leading-relaxed hidden sm:block"
                    style={{ color: "rgba(28,13,6,0.55)" }}
                  >
                    {h.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
