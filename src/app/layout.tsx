import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rudiansyah.com"),
  title: "RUDIANSYAH - Professional Business Solutions",
  description: "RUDIANSYAH provides professional business solutions including consulting, project management, and digital services. Excellence in business partnership.",
  keywords: ["RUDIANSYAH", "business solutions", "consulting", "project management", "professional services", "digital solutions"],
  authors: [{ name: "RUDIANSYAH Team" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    title: "RUDIANSYAH - Professional Business Solutions",
    description: "Excellence in business solutions with professional consulting and project management services",
    url: "https://rudiansyah.com",
    siteName: "RUDIANSYAH",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "RUDIANSYAH Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RUDIANSYAH - Professional Business Solutions",
    description: "Excellence in business solutions with professional consulting and project management services",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          html {
            scroll-behavior: smooth;
          }
        `}</style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
