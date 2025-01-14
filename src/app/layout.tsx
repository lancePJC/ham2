import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/admin-panel/AuthProvider";
import App from "./App";
import { Toaster } from "react-hot-toast";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SYDENHAM GROUP | Quality Products for Every Need",
  description: "SYDENHAM GROUP offers a diverse range of products, including Coffee, Beauty Products, IT, Construction, Spare Parts, and Electronics. Explore our high-quality selections today!",
  keywords: "SYDENHAM GROUP, Coffee, Beauty Products, IT, Construction, Spare Parts, Electronics",
  authors: [
    {
      name: "SYDENHAM GROUP",
      url: "https://sydenhamgroup.com",
    },
  ],
  openGraph: {
    title: "SYDENHAM GROUP",
    description: "Discover SYDENHAM GROUP's wide range of products, from coffee to electronics.",
    url: "https://sydenhamgroup.com",
    type: "website",
    images: [
      {
        url: "https://sydenhamgroup.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "SYDENHAM GROUP Products",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         
         <AuthProvider>
           
          <App>{children}</App>
       
          </AuthProvider>

          <Toaster position="top-center" reverseOrder={false}/>
      </body>
    </html>
  );
}
