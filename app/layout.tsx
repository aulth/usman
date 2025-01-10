import type { Metadata, Viewport } from "next";
import { Geist, Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins-font",
  subsets: ['latin'],
  display: 'block'
})

const geist = Geist({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--geist-font",
  subsets: ['latin']
})

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--inter-font",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Mohd Usman | Software Developer",
  description: "Software developer skilled in creating responsive and intuitive web solutions with Next.js, MongoDB, Spring Boot, and machine learning.",
  openGraph: {
    title: "Mohd Usman | Software Developer",
    description: "Software developer skilled in creating responsive and intuitive web solutions with Next.js, MongoDB, Spring Boot, and machine learning.",
    images: "/images/portfolio/usman.jpg",
    url: "https://mohd-usman.vercel.app",
    siteName: "Mohd Usman"
  },
};

export const viewport: Viewport = {
  themeColor: '#040924',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <meta name=" theme-color" content="#000000" />
      </Head>
      <body
        className={`${poppins.variable} ${inter.variable} ${geist.variable}`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
