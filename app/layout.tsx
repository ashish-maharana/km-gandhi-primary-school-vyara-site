import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { RouteScrollReset } from "@/components/route-scroll-reset";
import { ScrollProgress } from "@/components/scroll-progress";

export const metadata: Metadata = {
  title: "K.M. Gandhi Primary School | વ્યારા",
  description: "વ્યારા, તાપી, ગુજરાત ખાતેનું ગુજરાતી-માધ્યમ સહ-શિક્ષણ પ્રાથમિક તથા ઉચ્ચ-પ્રાથમિક શાળાનું વેબસાઇટ કૉન્સેપ્ટ.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="gu" data-theme="light" className="h-full antialiased">
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

