import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ChevronDown,
  ClipboardCheck,
  House,
  Lightbulb,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  PlugZap,
  ShieldCheck,
  Wrench,
  Zap,
} from "lucide-react";
import Header, { Wordmark } from "@/components/Header";
import QuoteForm from "@/components/QuoteForm";
import { business, faqs, gallery, navigation, services } from "@/data/site";
const icons = {
  repairs: Wrench,
  testing: ClipboardCheck,
  lighting: Lightbulb,
  security: ShieldCheck,
  home: House,
  commercial: Building2,
};
function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <span />
      {children}
    </p>
  );
}
export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="hero" id="home" aria-labelledby="hero-heading">
          <Image
            src="/images/hero.webp"
            alt="AI-generated illustration of an electrician inspecting a domestic consumer unit; not actual company staff"
            fill
            priority
            sizes="100vw"
            className="hero-image"
          />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <Eyebrow light>LOCAL EXPERTISE. PRACTICAL SOLUTIONS.</Eyebrow>
            <h1 id="hero-heading">
              Reliable Electricians
              <br />
              in <span>Ilford.</span>
            </h1>
            <p className="hero-description">
              Electrical installations, repairs, testing and maintenance for
              homes and businesses across Ilford.
            </p>
            <div className="hero-actions">
              <a className="button button-amber" href={business.phoneHref}>
                <Phone size={17} />
                Call {business.phone}
                <ArrowUpRight size={17} />
              </a>
              <a className="button button-outline" href="#contact">
                Request a Quote
                <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="hero-highlights">
              <span>
                <Check size={15} />
                Domestic & commercial
              </span>
              <span>
                <Check size={15} />
                Ilford & surrounding areas
              </span>
            </div>
            <a className="hero-scroll" href="#services">
              <ArrowDown size={14} />
              EXPLORE OUR SERVICES
            </a>
          </div>
          <span className="image-disclosure">
            AI-generated illustrative image · not company staff
          </span>
          <div className="hero-location">
            <MapPin size={17} />
            <span>
              BASED IN ILFORD
              <br />
              <strong>Here for your home. And your business.</strong>
            </span>
          </div>
        </section>
        <section className="trust-strip" aria-label="Business at a glance">
          <div className="container trust-grid">
            <div className="trust-item">
              <span className="trust-number">
                10<span>+</span>
              </span>
              <div>
                <strong>Years of industry experience</strong>
                <small>As stated on the existing website</small>
              </div>
            </div>
            <div className="trust-item">
              <House size={31} strokeWidth={1.4} />
              <div>
                <strong>Homes & businesses</strong>
                <small>Domestic and commercial electrical work</small>
              </div>
            </div>
            <div className="trust-item">
              <MapPin size={31} strokeWidth={1.4} />
              <div>
                <strong>Local to Ilford</strong>
                <small>Serving Ilford and surrounding areas</small>
              </div>
            </div>
          </div>
        </section>
        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <Eyebrow>WHAT WE DO</Eyebrow>
                <h2>
                  The right expertise.
                  <br />
                  For every connection.
                </h2>
              </div>
              <p>
                From everyday repairs to a new installation,
                <br className="desktop-break" /> find the electrical support
                your property needs.
              </p>
            </div>
            <div className="service-grid">
              {services.map((service, index) => {
                const Icon = icons[service.icon];
                return (
                  <article className="service-card" key={service.title}>
                    <div className="service-top">
                      <span className="service-icon">
                        <Icon size={25} strokeWidth={1.6} />
                      </span>
                      <span className="service-index">0{index + 1}</span>
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <a
                      href="#contact"
                      aria-label={`Enquire about ${service.title}`}
                    >
                      Let’s discuss your project
                      <ArrowUpRight size={17} />
                    </a>
                  </article>
                );
              })}
            </div>
            <div className="services-bottom">
              <span>
                Not sure which service you need? Let’s start with a
                conversation.
              </span>
              <a href={business.phoneHref}>
                Talk to us
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
        <section className="section about-section" id="about">
          <div className="container about-grid">
            <div className="about-photo">
              <Image
                src="/images/hero.webp"
                alt="Illustrative AI-generated electrician; not a photograph of the business or its staff"
                fill
                sizes="(max-width: 760px) 100vw, 50vw"
              />
              <div className="photo-label">
                ILLUSTRATIVE IMAGE · NOT COMPANY STAFF
              </div>
              <div className="experience-card">
                <span>
                  10<span>+</span>
                </span>
                <p>
                  years of industry
                  <br />
                  experience*
                </p>
              </div>
            </div>
            <div className="about-copy">
              <Eyebrow>YOUR LOCAL ELECTRICAL CONTRACTOR</Eyebrow>
              <h2>
                Good connections.
                <br />
                Start close to home.
              </h2>
              <p>
                From the lights in your kitchen to the power behind your
                business, your electrics are part of everyday life.
              </p>
              <p>
                Based in Ilford, Ilford Electricians describes over 10 years of
                experience in the electrical contracting industry. Its existing
                website outlines a range of services for homeowners and
                commercial customers alike.
              </p>
              <div className="about-points">
                <span>
                  <Check size={17} />
                  Electrical repairs and installations
                </span>
                <span>
                  <Check size={17} />
                  Lighting, inspection and testing
                </span>
                <span>
                  <Check size={17} />
                  Domestic and commercial enquiries
                </span>
              </div>
              <a className="text-link" href="#contact">
                Tell us what you have in mind
                <ArrowUpRight size={19} />
              </a>
              <small className="source-note">
                *Experience stated on the{" "}
                <a href={business.source} target="_blank" rel="noreferrer">
                  existing business website
                </a>
                .
              </small>
            </div>
          </div>
        </section>
        <section className="journey-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <Eyebrow light>LET’S GET STARTED</Eyebrow>
                <h2>
                  A simple first step.
                  <br />A clearer way forward.
                </h2>
              </div>
              <p>
                A suggested enquiry journey for this demo.
                <br />
                Confirm the actual process with the business.
              </p>
            </div>
            <div className="journey-grid">
              {[
                {
                  title: "Get in touch",
                  text: "Call or email with your location and a brief idea of the electrical work you need.",
                  Icon: Phone,
                },
                {
                  title: "Discuss your requirements",
                  text: "Talk through the property, the scope of the work and any questions you have.",
                  Icon: MessageSquare,
                },
                {
                  title: "Receive a quotation",
                  text: "Ask the business to confirm the proposed work, availability and quotation details.",
                  Icon: ClipboardCheck,
                },
              ].map(({ title, text, Icon }, i) => (
                <article key={title} className="journey-step">
                  <div className="journey-step-top">
                    <span>0{i + 1}</span>
                    <Icon size={26} strokeWidth={1.3} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section gallery-section">
          <div className="container">
            <div className="section-heading">
              <div>
                <Eyebrow>PICTURE THE POSSIBILITIES</Eyebrow>
                <h2>Spaces that work beautifully.</h2>
              </div>
              <p>
                Illustrative photography for this concept.
                <br />
                <strong>Not completed projects by the business.</strong>
              </p>
            </div>
            <div className="gallery-grid">
              {gallery.map((item) => (
                <figure key={item.title}>
                  <div className="gallery-photo">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 760px) 100vw, 33vw"
                    />
                    <span>PLACEHOLDER IMAGE</span>
                  </div>
                  <figcaption>
                    <small>{item.category}</small>
                    <h3>{item.title}</h3>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
        <section className="areas-section" id="areas">
          <div className="container areas-grid">
            <div>
              <Eyebrow>ON YOUR DOORSTEP</Eyebrow>
              <h2>
                Ilford.
                <br />
                And a little beyond.
              </h2>
              <p>
                The existing website describes coverage across Ilford and
                surrounding areas. Share your postcode to check whether your
                property is covered.
              </p>
              <div className="area-tags">
                <span>Ilford</span>
                <span>Seven Kings</span>
                <span>Gants Hill</span>
                <span>Barking</span>
                <span>Goodmayes</span>
              </div>
              <small>
                Nearby places are examples only; coverage is subject to
                confirmation.
              </small>
              <a className="text-link" href="#contact">
                Check your area
                <ArrowUpRight size={19} />
              </a>
            </div>
            <div
              className="map-placeholder"
              role="img"
              aria-label="Illustrative service-area graphic centred on Ilford. Not a geographic map or confirmed coverage boundary."
            >
              <div className="map-road road-one" />
              <div className="map-road road-two" />
              <div className="map-road road-three" />
              <div className="map-park park-one" />
              <div className="map-park park-two" />
              <div className="map-ring ring-one" />
              <div className="map-ring ring-two" />
              <span className="map-place place-one">GANTS HILL</span>
              <span className="map-place place-two">SEVEN KINGS</span>
              <span className="map-place place-three">BARKING</span>
              <div className="map-centre">
                <span>
                  <Zap size={25} fill="currentColor" />
                </span>
                <strong>Ilford</strong>
                <small>Our local starting point</small>
              </div>
              <span className="map-caption">
                <MapPin size={13} />
                ILLUSTRATIVE AREA MAP · COVERAGE UNCONFIRMED
              </span>
            </div>
          </div>
        </section>
        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <Eyebrow light>LET’S MAKE A CONNECTION</Eyebrow>
              <h2>
                Your next project
                <br />
                starts with a<br />
                <span>conversation.</span>
              </h2>
              <p>
                A repair to sort out? A space to improve?
                <br />
                Get in touch to discuss your electrical work.
              </p>
              <div className="contact-links">
                <a href={business.phoneHref}>
                  <span className="contact-icon">
                    <Phone size={21} />
                  </span>
                  <span>
                    <small>GIVE THE BUSINESS A CALL</small>
                    <strong>{business.phone}</strong>
                  </span>
                  <ArrowUpRight size={20} />
                </a>
                <a href={`mailto:${business.email}`}>
                  <span className="contact-icon">
                    <Mail size={21} />
                  </span>
                  <span>
                    <small>DROP AN EMAIL</small>
                    <strong className="contact-email">{business.email}</strong>
                  </span>
                </a>
                <div>
                  <span className="contact-icon">
                    <MapPin size={21} />
                  </span>
                  <span>
                    <small>BASED IN ILFORD</small>
                    <address>{business.address}</address>
                  </span>
                </div>
              </div>
              <div className="real-contact-note">
                <PlugZap size={20} />
                <p>
                  Phone and email links contact the real business.
                  <br />
                  The form alongside is a demonstration only.
                </p>
              </div>
            </div>
            <QuoteForm />
          </div>
        </section>
        <section className="section faq-section">
          <div className="container faq-grid">
            <div>
              <Eyebrow>A LITTLE MORE CLARITY</Eyebrow>
              <h2>
                Good questions.
                <br />
                Straightforward answers.
              </h2>
              <p>
                Some useful information before
                <br />
                you get in touch.
              </p>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>
                    {faq.question}
                    <ChevronDown size={19} />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="closing-strip">
          <div className="container">
            <div>
              <Zap size={30} />
              <h2>Let’s get your project connected.</h2>
            </div>
            <a className="button button-navy" href={business.phoneHref}>
              <Phone size={17} />
              Call {business.phone}
              <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <Wordmark />
              <p>
                Electrical services for homes and
                <br />
                businesses in Ilford and surrounding areas.
              </p>
            </div>
            <div>
              <h3>Explore</h3>
              <nav aria-label="Footer navigation">
                {navigation.slice(1).map((item) => (
                  <a key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <h3>Get in touch</h3>
              <a href={business.phoneHref}>{business.phone}</a>
              <a href={`mailto:${business.email}`}>{business.email}</a>
              <address>{business.address}</address>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} Ilford Electricians — redesign
              concept.
            </span>
            <span>Designed around better connections.</span>
          </div>
          <p className="demo-note" id="demo-note">
            Independent website redesign concept — not the official business
            website. This speculative demo is not authorised by or affiliated
            with Ilford Electricians. Images are illustrative placeholders, not
            company staff or completed work.{" "}
            <a href={business.source} target="_blank" rel="noreferrer">
              Visit the existing business website <ArrowUpRight size={12} />
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
