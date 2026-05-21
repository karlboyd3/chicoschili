function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const contactInfo = [
  {
    icon: <PhoneIcon />,
    label: "Phone",
    value: "240-595-3696",
    href: "tel:2405953696",
  },
  {
    icon: <MailIcon />,
    label: "Email",
    value: "bbolden@chicoschili.com",
    href: "mailto:bbolden@chicoschili.com",
  },
  {
    icon: <PinIcon />,
    label: "Address",
    value: "5510 Cherokee Ave, Suite 300 #1148\nAlexandria, VA 22312",
    href: "https://maps.google.com/?q=5510+Cherokee+Ave+Alexandria+VA+22312",
  },
  {
    icon: <InstagramIcon />,
    label: "Instagram",
    value: "@chicoschili",
    href: "https://instagram.com/chicoschili",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--charcoal)" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 100% 0%, rgba(139,24,24,0.1) 0%, transparent 50%)",
        }}
      />

      {/* Gold top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(204,0,0,0.4), transparent)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="h-px w-10"
              style={{ backgroundColor: "var(--chili-orange)" }}
            />
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "var(--chili-orange)" }}
            >
              Get In Touch
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
            Let&apos;s Talk{" "}
            <span style={{ color: "var(--chili-orange)" }}>Chili</span>
          </h2>
          <p
            className="text-base max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Ready to order, book catering, or just ask a question? Reach out —
            Bryant will get back to you fast.
          </p>
        </div>

        {/* Contact info */}
        <div className="space-y-4">
          {contactInfo.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-200 hover:-translate-y-0.5 group"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                textDecoration: "none",
              }}
            >
              <span
                className="mt-0.5 flex-shrink-0"
                style={{ color: "var(--chili-orange)" }}
              >
                {item.icon}
              </span>
              <div>
                <div
                  className="text-xs font-bold uppercase tracking-widest mb-1"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {item.label}
                </div>
                <div
                  className="text-sm font-medium leading-relaxed whitespace-pre-line group-hover:opacity-90 transition-opacity"
                  style={{ color: "var(--cream)" }}
                >
                  {item.value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
