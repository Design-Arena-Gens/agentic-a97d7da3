import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display"
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: "Ava Mirren — Digital Storyteller",
  description:
    "Portfolio for a multidisciplinary graphics designer blending immersive 3D worlds with tactile visual identities."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} font-body bg-background text-neutral`}
      >
        {children}
      </body>
    </html>
  );
}
