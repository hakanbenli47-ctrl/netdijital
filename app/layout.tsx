import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://neotvip.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Neotvip | Premium IPTV Paketleri",
    template: "%s | Neotvip",
  },

  description:
    "Neotvip ile HD, Full HD ve 4K kalitede IPTV deneyimi. Smart TV, Android, iOS, TV Box, tablet ve bilgisayar uyumlu premium yayın paketleri.",

  keywords: [
    "Neotvip",
    "neotvip",
    "IPTV",
    "IPTV paketleri",
    "premium IPTV",
    "HD IPTV",
    "4K IPTV",
    "Smart TV IPTV",
    "Android IPTV",
    "iOS IPTV",
    "TV Box IPTV",
    "canlı yayın",
    "VOD",
    "maç yayınları",
    "dizi film IPTV",
  ],

  authors: [{ name: "Neotvip" }],
  creator: "Neotvip",
  publisher: "Neotvip",

  verification: {
    google: "PLtDF2dRmTppdov5SIQE5MKNmVjzrmGh-yEpp7UzYko",
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Neotvip",
    title: "Neotvip | Premium IPTV Paketleri",
    description:
      "HD, Full HD ve 4K kalitede IPTV deneyimi. Tüm cihazlarla uyumlu premium Neotvip paketleri.",
    images: [
      {
        url: "/neotvip-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Neotvip",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Neotvip | Premium IPTV Paketleri",
    description:
      "Smart TV, Android, iOS, TV Box, tablet ve bilgisayar uyumlu premium IPTV deneyimi.",
    images: ["/neotvip-logo.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}