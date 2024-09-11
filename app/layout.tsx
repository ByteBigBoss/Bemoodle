"use client"
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/foo/Footer";
import { poppins } from "@/lib/fonts";
import { SiteMetadata } from "@/config/site";

import { PrimeReactProvider } from 'primereact/api';

import "@/style/globals.css";
import StatusNav from "@/components/nav/StatusNav";
import { usePathname } from "next/navigation";
import { TooltipProvider } from "@/components/ui/tooltip";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const path = usePathname();

  const restrictedPaths = ['/auth/signin', '/auth/signup', '/auth/verify', '/stores/[slug]/'];

  const isRestrictedPath = restrictedPaths.includes(path);

  return (
    <html lang="en"
      className={`scroll-smooth`}
      suppressHydrationWarning
    >
      <body className={poppins.className}>

        <ThemeProvider
          attribute="class"
          defaultTheme="light"


        >
          <PrimeReactProvider>
          {!isRestrictedPath && (
              <div className="w-full h-auto fixed top-0 z-[9999]">
                <StatusNav />
                <Navbar />
              </div>
            )}
            <TooltipProvider>
            <main className=' mx-auto w-full h-auto'>{children}</main>
            </TooltipProvider>
            <Footer />
          </PrimeReactProvider>
        </ThemeProvider>

      </body>
    </html>
  );
}
