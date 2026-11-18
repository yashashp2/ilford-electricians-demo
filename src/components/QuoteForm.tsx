"use client";
import { useEffect, useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, LockKeyhole } from "lucide-react";
import { services } from "@/data/site";
type Field = "name" | "phone" | "email" | "postcode" | "service" | "message";
type Errors = Partial<Record<Field, string>>;
export default function QuoteForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);
  const [ready, setReady] = useState(false);
  // Prevent native form submission before hydration or with JavaScript disabled.
  useEffect(() => setReady(true), []);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const value = (key: Field) => String(data.get(key) ?? "").trim();
    const next: Errors = {};
    if (value("name").length < 2)
      next.name = "Enter your name (at least 2 characters).";
    if (
      !/^[+()\d\s.-]{7,25}$/.test(value("phone")) ||
      value("phone").replace(/\D/g, "").length < 7
    )
      next.phone = "Enter a valid telephone number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value("email")))
      next.email = "Enter a valid email address.";
    if (
      !/^(GIR\s?0AA|[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2})$/i.test(
        value("postcode"),
      )
    )
      next.postcode = "Enter a full UK postcode, for example IG1 2JA.";
    if (
      !services.some((service) => service.title === value("service")) &&
      value("service") !== "Something else"
    )
      next.service = "Choose a service.";
    if (value("message").length < 10)
      next.message = "Add a little more detail (at least 10 characters).";
    setErrors(next);
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0];
      (event.currentTarget.elements.namedItem(first) as HTMLElement)?.focus();
      return;
    }
    event.currentTarget.reset();
    setSuccess(true);
  }
  const props = (field: Field) => ({
    id: field,
    name: field,
    required: true,
    "aria-invalid": Boolean(errors[field]),
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });
  const error = (field: Field) =>
    errors[field] ? (
      <span id={`${field}-error`} className="field-error">
        {errors[field]}
      </span>
    ) : null;
  return (
    <div className="quote-card">
      <div className="quote-heading">
        <h3>Let’s talk about your project.</h3>
        <span className="demo-tag">DEMO FORM</span>
      </div>
      <p className="form-intro">
        Try the form with sample details. Nothing is sent or saved.
      </p>
      {success ? (
        <div className="form-success" role="status">
          <CheckCircle2 size={38} />
          <h4>Demo complete. Nothing was sent.</h4>
          <p>
            Your entries passed validation and have been cleared. No quotation
            request was created. To make a real enquiry, call or email the
            business.
          </p>
          <button
            className="button button-navy"
            onClick={() => setSuccess(false)}
          >
            Try the form again
            <ArrowUpRight size={17} />
          </button>
        </div>
      ) : (
        <form onSubmit={submit} noValidate autoComplete="off">
          <noscript>
            <p className="form-error">
              Enable JavaScript to try this demo form, or contact the business
              by phone or email.
            </p>
          </noscript>
          <fieldset disabled={!ready} className="m-0 min-w-0 border-0 p-0">
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input
                  {...props("name")}
                  placeholder="e.g. Alex Smith"
                  maxLength={100}
                />
                {error("name")}
              </div>
              <div className="field">
                <label htmlFor="phone">Phone number</label>
                <input
                  {...props("phone")}
                  type="tel"
                  placeholder="e.g. 07700 900000"
                  maxLength={25}
                />
                {error("phone")}
              </div>
              <div className="field">
                <label htmlFor="email">Email address</label>
                <input
                  {...props("email")}
                  type="email"
                  placeholder="you@example.com"
                  maxLength={254}
                />
                {error("email")}
              </div>
              <div className="field">
                <label htmlFor="postcode">Property postcode</label>
                <input
                  {...props("postcode")}
                  placeholder="e.g. IG1 2JA"
                  maxLength={10}
                />
                {error("postcode")}
              </div>
              <div className="field field-full">
                <label htmlFor="service">What can we help with?</label>
                <select {...props("service")} defaultValue="">
                  <option value="" disabled>
                    Select a service
                  </option>
                  {services.map((service) => (
                    <option key={service.title}>{service.title}</option>
                  ))}
                  <option>Something else</option>
                </select>
                {error("service")}
              </div>
              <div className="field field-full">
                <label htmlFor="message">Tell us about the work</label>
                <textarea
                  {...props("message")}
                  rows={4}
                  placeholder="A few details about your property and what you have in mind…"
                  maxLength={3000}
                />
                {error("message")}
              </div>
            </div>
            {Object.keys(errors).length > 0 && (
              <p className="form-error" role="alert">
                Please check the highlighted fields.
              </p>
            )}
            <button type="submit" className="button button-amber submit-button">
              Preview quote request
              <ArrowUpRight size={18} />
            </button>
            <p className="form-privacy">
              <LockKeyhole size={13} />
              Demo only. No details are transmitted or stored.
            </p>
          </fieldset>
        </form>
      )}
    </div>
  );
}
