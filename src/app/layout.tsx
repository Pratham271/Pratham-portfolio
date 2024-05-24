import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";
import { AI } from "@/actions/chat";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pratham Portfolio: Explore Creativity and Expertise",
  description: "Discover the creative prowess of Pratham Portfolio, showcasing expertly crafted web design, development, and beyond. Dive into a world where innovation meets functionality, and every project tells a unique story. Explore our portfolio to find inspiration for your next digital venture. Let's elevate your online presence together with our tailored solutions and unmatched expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <AI>
          {children}
          <SpeedInsights />
          </AI>
      </body>
    </html>
  );
}
