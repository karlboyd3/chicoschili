import Image from "next/image";

function FeatureImage({ label }: { label: string }) {
  return (
    <div
      className="relative flex items-center justify-center rounded-3xl overflow-hidden w-full"
      style={{
        aspectRatio: "4/5",
        border: "2px solid rgba(204,0,0,0.3)",
      }}
    >
      <Image
        src="/Chili.png"
        alt={label}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 40vw"
        className="object-cover"
      />
      {/* Decorative rings */}
      <div
        className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full border pointer-events-none"
        style={{ borderColor: "rgba(204,0,0,0.15)" }}
      />
      <div
        className="absolute -top-8 -left-8 w-32 h-32 rounded-full border pointer-events-none"
        style={{ borderColor: "rgba(204,0,0,0.15)" }}
      />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "var(--dark-brown)" }}
    >
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(204,0,0,0.15) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(153,0,0,0.12) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-64 pb-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Text */}
        <div className="order-2 lg:order-1">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8"
            style={{
              backgroundColor: "rgba(204,0,0,0.12)",
              border: "1px solid rgba(204,0,0,0.3)",
            }}
          >
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "var(--chili-orange)" }}
            >
              Alexandria, VA
            </span>
          </div>

          <h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            style={{ color: "var(--cream)" }}
          >
            Bold, Homemade
            <br />
            Chili{" "}
            <span style={{ color: "var(--chili-orange)" }}>
              With Real Flavor
            </span>
          </h1>

          <p
            className="text-lg sm:text-xl leading-relaxed mb-10 max-w-lg"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            Chico&apos;s Chili is a local food brand bringing you hearty,
            handcrafted comfort food packed with bold seasoning and
            unforgettable taste — straight from Bryant Bolden&apos;s kitchen to
            your table.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="px-7 py-4 rounded-full text-base font-bold transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: "transparent",
                color: "var(--cream)",
                border: "2px solid rgba(255,255,255,0.35)",
              }}
            >
              Contact Us
            </a>
            <a
              href="https://instagram.com/chicoschili"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-full text-base font-bold transition-all duration-200 hover:scale-105 flex items-center gap-2"
              style={{
                backgroundColor: "rgba(204,0,0,0.12)",
                color: "var(--chili-red)",
                border: "2px solid rgba(204,0,0,0.3)",
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              @chicoschili
            </a>
          </div>

          {/* Stats row */}
          <div
            className="flex gap-8 mt-12 pt-10 border-t"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}
          >
            {[
              { value: "100%", label: "Homemade" },
              { value: "Bold", label: "Seasoning" },
              { value: "Local", label: "Alexandria, VA" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-display text-2xl font-bold"
                  style={{ color: "var(--chili-orange)" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs uppercase tracking-widest mt-1"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="w-full max-w-md">
            <FeatureImage label="Chicos Chili Feature Photo" />
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div
          className="w-px h-8"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(255,255,255,0.4))",
          }}
        />
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
        />
      </div>
    </section>
  );
}
