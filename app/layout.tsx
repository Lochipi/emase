import "./globals.css";
import type { Metadata } from "next";
import {Ubuntu } from "next/font/google";

const ubuntu_Mono = Ubuntu({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Cornelius | Software Engineer",
  description: "Cornelius' Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu_Mono.className}>{children}</body>
    </html>
  );
}
