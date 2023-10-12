import "./globals.css";
import type { Metadata } from "next";
import { Ubuntu_Mono } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";

const ubuntu_Mono = Ubuntu_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Cornelius",
  description: "Portfolio of Cornelius",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ubuntu_Mono.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
