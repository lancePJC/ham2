import "./globals.css";
import AuthProvider from "@/components/admin-panel/AuthProvider";
import App from "./App";
import { Toaster } from "react-hot-toast";

export const metadata = {
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
    url: "https://sydenhamgroup.com",  // Can be localhost during development if necessary
    type: "website",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThz0f8mZPfcdp25RTu4sUzWZV3JHsJej_oOA&s",
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
      <body className="antialiased">
        <AuthProvider>
          <App>{children}</App>
        </AuthProvider>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
