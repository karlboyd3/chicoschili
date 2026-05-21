const galleryItems = [
  { label: "Chicos Chili Bowl", size: "large" },
  { label: "Fresh Ingredients", size: "small" },
  { label: "Chili Over Rice", size: "small" },
  { label: "Chili Dogs", size: "small" },
  { label: "Chili Fries", size: "large" },
  { label: "Chili Nachos", size: "small" },
  { label: "Golden Cornbread", size: "small" },
  { label: "Serving the Community", size: "small" },
  { label: "Bryant in the Kitchen", size: "large" },
];

function GalleryCard({
  item,
}: {
  item: (typeof galleryItems)[number];
}) {
  return (
    <div
      className="group relative flex items-center justify-center rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      style={{
        aspectRatio: item.size === "large" ? "4/5" : "1/1",
        background:
          "linear-gradient(135deg, #3D1108 0%, #6B2210 40%, #3A0E06 100%)",
        border: "1px solid rgba(253,245,230,0.06)",
      }}
    >
      {/* Placeholder icon */}
      <svg className="w-7 h-7 opacity-15" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "var(--cream)" }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex items-end p-5 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(to top, rgba(28,13,6,0.9) 0%, transparent 60%)",
        }}
      >
        <div>
          <p
            className="text-sm font-bold"
            style={{ color: "var(--cream)" }}
          >
            {item.label}
          </p>
          <p
            className="text-xs mt-0.5"
            style={{ color: "rgba(253,245,230,0.5)" }}
          >
            Replace with actual photo
          </p>
        </div>
      </div>

      {/* Instagram icon on hover */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "rgba(201,162,39,0.8)" }}
        >
          <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function GallerySection() {
  const large = galleryItems.filter((i) => i.size === "large");
  const small = galleryItems.filter((i) => i.size === "small");

  return (
    <section
      id="gallery"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--warm-white)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
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

        {/* Gallery grid — masonry-style */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Large item 1 — spans 2 rows */}
          <div className="row-span-2">
            <GalleryCard item={large[0]} />
          </div>

          {/* Small items */}
          {small.slice(0, 4).map((item) => (
            <GalleryCard key={item.label} item={item} />
          ))}

          {/* Large item 2 */}
          <div className="row-span-2 col-span-1">
            <GalleryCard item={large[1]} />
          </div>

          {/* Remaining small items */}
          {small.slice(4).map((item) => (
            <GalleryCard key={item.label} item={item} />
          ))}

          {/* Large item 3 */}
          <GalleryCard item={large[2]} />
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/chicoschili"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: "var(--dark-brown)",
              color: "var(--cream)",
              boxShadow: "0 4px 20px rgba(28,13,6,0.2)",
            }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Follow @chicoschili on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
