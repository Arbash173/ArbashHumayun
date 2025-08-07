import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arbash Humayun - Full Stack Web Developer",
  description: "Full Stack Web Developer with 3+ years of experience building responsive, accessible, and high-performance web applications using React.js, Next.js, and Angular. Based in Berlin, Germany.",
  keywords: [
    "Arbash Humayun",
    "Full Stack Developer",
    "React.js",
    "Next.js",
    "Angular",
    "Node.js",
    "TypeScript",
    "Web Development",
    "Berlin",
    "Germany"
  ],
  authors: [{ name: "Arbash Humayun" }],
  creator: "Arbash Humayun",
  publisher: "Arbash Humayun",
  robots: "index, follow",
  metadataBase: new URL("https://arbashhumayun.netlify.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arbashhumayun.netlify.app/",
    title: "Arbash Humayun - Full Stack Web Developer",
    description: "Full Stack Web Developer with 3+ years of experience building responsive, accessible, and high-performance web applications.",
    siteName: "Arbash Humayun Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arbash Humayun - Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arbash Humayun - Full Stack Web Developer",
    description: "Full Stack Web Developer with 3+ years of experience building responsive, accessible, and high-performance web applications.",
    images: ["/og-image.jpg"],
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
