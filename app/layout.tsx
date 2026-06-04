import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "AmpTech — From Stuck Demo To Real Product",
  description:
    "AmpTech helps founders and business owners turn rough prototypes, stalled AI builds, and app ideas into software people can actually use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${bebasNeue.variable}`}>
      <body className="site-shell antialiased font-sans">
        <Nav />
        {children}
        <Footer />
        {process.env.NEXT_PUBLIC_UMAMI_URL && (
          <Script
            src={process.env.NEXT_PUBLIC_UMAMI_URL}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
