import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Currency Exchange Dashboard",
  description: "A dashboard to convert and track currency exchange rates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-800 overflow-x-hidden`}
      >
        {/* Fondo decorativo global */}
        <div className="pointer-events-none fixed -top-32 -left-32 w-96 h-96 rounded-full bg-indigo-700 opacity-20 blur-3xl z-0" />
        <div className="pointer-events-none fixed -bottom-32 -right-32 w-96 h-96 rounded-full bg-pink-500 opacity-10 blur-3xl z-0" />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
