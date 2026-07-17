import Image from "next/image";

const menuItems = [
  {
    name: "Chicos Chili",
    desc: "A hearty bowl of signature homemade chili packed with bold seasoning and rich flavor.",
    tag: "Signature",
    tagColor: "var(--chili-red)",
    img: "/Chili.png",
  },
  {
    name: "Chili Over Rice",
    desc: "Signature chili served over warm rice for a filling, comfort-food meal.",
    tag: "Fan Favorite",
    tagColor: "var(--chili-orange)",
    img: "/Chili_over_ricev2.png",
  },
  {
    name: "Cornbread",
    desc: "Soft, golden cornbread that pairs perfectly with every chili order.",
    tag: "Add-On",
    tagColor: "var(--gold)",
    img: "/Cornbread.png",
  },
  {
    name: "Chili Dogs",
    desc: "Classic hot dogs topped with Chicos Chili for a bold, messy, satisfying favorite.",
    tag: "Classic",
    tagColor: "var(--chili-red)",
    img: "/Chili_dog.png",
  },
  {
    name: "Chili Nachos",
    desc: "Crispy nachos loaded with Chicos Chili and toppings. Great for sharing or as a full meal.",
    tag: "Great for Sharing",
    tagColor: "var(--chili-orange)",
    img: "/Nachos.png",
  },
  {
    name: "Chili Fries",
    desc: "Hot fries covered with Chicos Chili for the ultimate comfort-food side or meal.",
    tag: "Comfort Food",
    tagColor: "var(--gold)",
    img: "/Fries.png",
  },
];

function MenuCard({ item }: { item: (typeof menuItems)[number] }) {
  return (
    <div
      className="group rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
      style={{
        backgroundColor: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(253,245,230,0.08)",
      }}
    >
      {/* Image */}
      <div
        className="relative flex items-center justify-center"
        style={{
          aspectRatio: "16/10",
          background:
            "linear-gradient(135deg, #111111 0%, #222222 50%, #0a0a0a 100%)",
        }}
      >
        <Image
          src={item.img}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Tag */}
        <div
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold"
          style={{
            backgroundColor: item.tagColor,
            color: "var(--cream)",
          }}
        >
          {item.tag}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3
          className="font-display text-xl font-bold mb-2"
          style={{ color: "var(--cream)" }}
        >
          {item.name}
        </h3>
        <p
          className="text-sm leading-relaxed flex-1"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          {item.desc}
        </p>

        <div
          className="mt-6 pt-4 border-t flex items-center justify-between"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <span
            className="text-xs font-medium"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Price on request
          </span>
        </div>
      </div>
    </div>
  );
}

export default function MenuSection() {
  return (
    <section
      id="menu"
      className="py-24 lg:py-32"
      style={{ backgroundColor: "var(--charcoal)" }}
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
              What We Serve
            </span>
            <div
              className="h-px w-10"
              style={{ backgroundColor: "var(--chili-orange)" }}
            />
          </div>

          <h2
            className="font-display text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: "var(--cream)" }}
          >
            The{" "}
            <span style={{ color: "var(--chili-orange)" }}>Menu</span>
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Every item made with Chico&apos;s signature chili — bold,
            satisfying, and unforgettable. Perfect for individuals, families,
            and events.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item) => (
            <MenuCard key={item.name} item={item} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p
            className="text-sm mb-4"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Ready to order or have questions about the menu?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: "var(--chili-orange)",
              color: "var(--cream)",
              boxShadow: "0 4px 24px rgba(204,74,24,0.35)",
            }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
