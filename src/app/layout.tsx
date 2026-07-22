import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SITE_NAME } from "@/constants/site";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "W" + SITE_NAME,
  description: "Dibuat dengan Next.js dan Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}