export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--warm-white)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="h-px w-10"
              style={{ backgroundColor: "var(--chili-orange)" }}
            />
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "var(--chili-orange)" }}
            >
              The Visual
            </span>
            <div
              className="h-px w-10"
              style={{ backgroundColor: "var(--chili-orange)" }}
            />
          </div>

          <h2
            className="font-display text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: "var(--dark-brown)" }}
          >
            Made to{" "}
            <span style={{ color: "var(--chili-red)" }}>Look as Good as it Tastes</span>
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "rgba(28,13,6,0.6)" }}
          >
            Chico&apos;s Chili is crafted for the eyes as much as the palate —
            follow us on Instagram for the real thing.
          </p>
        </div>
      </div>
    </section>
  );
}
