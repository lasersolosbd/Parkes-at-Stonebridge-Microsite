import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Parkes at Stonebridge | Mark Solomon – Your Neighbor & Local Expert",
  description:
    "Navy Veteran and Parkes resident since 2019. Your neighbor, your advocate, your local real estate expert in Longmont, CO.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          crossOrigin=""
        />
      </head>
      <body className="font-body bg-white text-navy-900 antialiased">
        {children}
      </body>
    </html>
  );
}
