import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { RouteScrollReset } from "@/components/route-scroll-reset";
import { ScrollProgress } from "@/components/scroll-progress";

export const metadata: Metadata = {
  title: "K.M. Gandhi Primary School | Vyara",
  description: "Gujarati-medium co-educational primary and upper-primary learning in Vyara, Tapi, Gujarat.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="light" className="h-full antialiased">
      <body className="min-h-full">
        <RouteScrollReset />
        <ScrollProgress />
        <div className="py-6 sm:py-10">
          <div className="site-shell">
            <Navbar />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

