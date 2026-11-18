"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, Phone, X, Zap } from "lucide-react";
import { business, navigation } from "@/data/site";
export function Wordmark() {
  return (
    <a href="#home" className="wordmark" aria-label="Ilford Electricians home">
      <span className="logo-mark">
        <Zap size={27} fill="currentColor" strokeWidth={1.5} />
      </span>
      <span>
        ILFORD
        <span className="wordmark-sub">
          ELECTRICIANS<span className="wordmark-dot">.</span>
        </span>
      </span>
    </a>
  );
}
export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function close(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    if (open) document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <>
      <div className="concept-banner">
        <span className="concept-dot" />
        Independent website redesign concept — not the official business
        website.
        <a href="#demo-note">
          About this demo <ArrowUpRight size={12} />
        </a>
      </div>
      <header className="header">
        <div className="container header-inner">
          <Wordmark />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a
            className="button button-navy header-phone"
            href={business.phoneHref}
          >
            <Phone size={16} />
            {business.phone}
          </a>
          <button
            ref={toggle}
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
          hidden={!open}
        >
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
              <ArrowUpRight size={16} />
            </a>
          ))}
          <a href={business.phoneHref}>
            <Phone size={16} />
            {business.phone}
          </a>
        </nav>
      </header>
    </>
  );
}
