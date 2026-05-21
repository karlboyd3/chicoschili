"use client";

import { useState } from "react";

const contactInfo = [
  {
    icon: "📞",
    label: "Phone",
    value: "240-595-3696",
    href: "tel:2405953696",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "bbolden@chicoschili.com",
    href: "mailto:bbolden@chicoschili.com",
  },
  {
    icon: "📍",
    label: "Address",
    value: "5510 Cherokee Ave, Suite 300 #1148\nAlexandria, VA 22312",
    href: "https://maps.google.com/?q=5510+Cherokee+Ave+Alexandria+VA+22312",
  },
  {
    icon: "📱",
    label: "Instagram",
    value: "@chicoschili",
    href: "https://instagram.com/chicoschili",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputStyle = {
    backgroundColor: "rgba(253,245,230,0.05)",
    border: "1px solid rgba(253,245,230,0.15)",
    borderRadius: "12px",
    color: "var(--cream)",
    padding: "14px 16px",
    width: "100%",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
  } as React.CSSProperties;

  const labelStyle = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "rgba(253,245,230,0.55)",
    marginBottom: "6px",
  };

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
            "linear-gradient(90deg, transparent, rgba(201,162,39,0.4), transparent)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
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
            style={{ color: "rgba(253,245,230,0.6)" }}
          >
            Ready to order, book catering, or just ask a question? Reach out —
            Bryant will get back to you fast.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <h3
              className="font-display text-xl font-bold mb-6"
              style={{ color: "var(--cream)" }}
            >
              Contact Info
            </h3>

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
                  backgroundColor: "rgba(253,245,230,0.04)",
                  border: "1px solid rgba(253,245,230,0.07)",
                  textDecoration: "none",
                }}
              >
                <span className="text-2xl mt-0.5">{item.icon}</span>
                <div>
                  <div
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: "rgba(253,245,230,0.4)" }}
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

            {/* Quick CTA */}
            <div
              className="rounded-2xl p-6 mt-4"
              style={{
                background:
                  "linear-gradient(135deg, rgba(204,74,24,0.15), rgba(139,24,24,0.1))",
                border: "1px solid rgba(204,74,24,0.2)",
              }}
            >
              <p
                className="text-sm font-medium mb-3"
                style={{ color: "rgba(253,245,230,0.8)" }}
              >
                Prefer to call or text?
              </p>
              <a
                href="tel:2405953696"
                className="inline-flex items-center gap-2 font-bold text-lg"
                style={{ color: "var(--chili-orange)", textDecoration: "none" }}
              >
                📞 240-595-3696
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div
              className="rounded-3xl p-8 sm:p-10"
              style={{
                backgroundColor: "rgba(253,245,230,0.03)",
                border: "1px solid rgba(253,245,230,0.08)",
              }}
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🌶️</div>
                  <h3
                    className="font-display text-2xl font-bold mb-2"
                    style={{ color: "var(--cream)" }}
                  >
                    Message Sent!
                  </h3>
                  <p style={{ color: "rgba(253,245,230,0.6)" }}>
                    Thanks for reaching out. Bryant will be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label style={labelStyle}>Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Jane Smith"
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "var(--chili-orange)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor =
                            "rgba(253,245,230,0.15)")
                        }
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@example.com"
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.target.style.borderColor = "var(--chili-orange)")
                        }
                        onBlur={(e) =>
                          (e.target.style.borderColor =
                            "rgba(253,245,230,0.15)")
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 555-5555"
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "var(--chili-orange)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(253,245,230,0.15)")
                      }
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>
                      Message / Event Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us what you need — order, catering, event size, date, etc."
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={(e) =>
                        (e.target.style.borderColor = "var(--chili-orange)")
                      }
                      onBlur={(e) =>
                        (e.target.style.borderColor = "rgba(253,245,230,0.15)")
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full text-base font-bold transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                    style={{
                      backgroundColor: "var(--chili-orange)",
                      color: "var(--cream)",
                      boxShadow: "0 4px 20px rgba(204,74,24,0.35)",
                    }}
                  >
                    Send Message 🌶️
                  </button>

                  <p
                    className="text-xs text-center"
                    style={{ color: "rgba(253,245,230,0.35)" }}
                  >
                    We typically respond within 24 hours.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
