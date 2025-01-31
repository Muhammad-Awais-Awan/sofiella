import "./globals.css";
import { Inter, Playfair_Display, Parisienne } from "next/font/google";
import type React from "react"; // Import React

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});
const parisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-parisienne",
});

export const metadata = {
  title: "Sofiélla - Unveil Your True Glow",
  description:
    "Experience futuristic, high-end beauty treatments with Sofiélla",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${parisienne.variable}`}
    >
      <body className="bg-[#f7ccda] min-h-screen">{children}</body>
    </html>
  );
}
