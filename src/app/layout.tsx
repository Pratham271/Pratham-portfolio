import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.prathamchauhan.com"),
  title: "Pratham Chauhan | Founder & AI Engineer",
  description: "Founder-minded AI engineer building agent infrastructure, developer tools, and useful product experiences.",
  icons: "/logo.png",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Pratham Chauhan",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Pratham Chauhan — building the infrastructure behind intelligent products",
    }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=DM+Mono:wght@300;400;500&family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
