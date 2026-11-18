import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});
export const metadata: Metadata = {
  title: "Ilford Electricians | Independent Website Redesign Concept",
  description:
    "An independent website concept showcasing electrical repairs, installations, testing and lighting services in Ilford. Demonstration only; not the official business website.",
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body className={manrope.variable}>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
