import type { Metadata } from "next";
import "./globals.css";

// MERGED METADATA: Keeps your personal title/description, adds SEO & Social sharing data
export const metadata: Metadata = {
  title: "The Parkes at Stonebridge | Mark Solomon – Your Neighbor & Local Expert",
  description:
    "Navy Veteran and Parkes resident since 2019. Your neighbor, your advocate, your local real estate expert in Longmont, CO.",
  keywords: ["The Parkes at Stonebridge", "Longmont real estate", "Colorado townhomes", "Mark Solomon real estate expert", "Stonebridge homes for sale"],
  openGraph: {
    title: "The Parkes at Stonebridge | Mark Solomon",
    description: "Navy Veteran and Parkes resident since 2019. Your neighbor, your advocate, your local real estate expert in Longmont, CO.",
    url: "https://theparkes.solomonhomeservices.com",
    siteName: "Solomon Home Services",
    images: [
      {
        url: "/Parkes-neighborhood-pic.jpg", 
        width: 1200,
        height: 630,
        alt: "The Parkes at Stonebridge Neighborhood",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  // LLM & GOOGLE SCHEMA OPTIMIZATION (JSON-LD)
  // Hardcoded with your exact contact details
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Mark Solomon - Real Estate Expert",
    "description": "Navy Veteran and local real estate expert specializing in The Parkes at Stonebridge community in Longmont, CO.",
    "url": "https://theparkes.solomonhomeservices.com",
    "areaServed": {
      "@type": "Neighborhood",
      "name": "The Parkes at Stonebridge",
      "containedInPlace": {
        "@type": "City",
        "name": "Longmont",
        "addressRegion": "CO"
      }
    },
    "telephone": "816-853-5467",
    "email": "mark@solomonhomeservices.com",
    "parentOrganization": {
      "@type": "RealEstateAgent",
      "name": "Solomon Home Services",
      "url": "https://solomonhomeservices.com"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* PRESERVED: Your Custom Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Raleway:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* PRESERVED: Leaflet Map CSS */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          crossOrigin=""
        />
        {/* INJECTED: The Schema so LLMs can read your data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/* PRESERVED: Your exact body styling */}
      <body className="font-body bg-white text-navy-900 antialiased">
        {children}
      </body>
    </html>
  );
}
