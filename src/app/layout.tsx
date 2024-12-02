import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
  title: "Droplo Menu",
  description: "Functionality to building app menu.",
};

const inter = Inter({ subsets: ['latin']});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`container mx-auto ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
