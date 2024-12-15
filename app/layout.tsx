"use client"
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/foo/Footer";
import { poppins } from "@/lib/fonts";
import { SiteMetadata } from "@/config/site";
import { Toaster } from "@/components/ui/toaster"
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

  const restrictedPaths = ['/auth/signin', '/auth/signup', '/auth/verify', '/stores/[store]/**', '/stores', '/checkout'];

  const restrictedFooterPaths = ['/stores/[store]/'];
  const isRestrictedFooterPath = restrictedFooterPaths.includes(path) || path.startsWith("/stores/");


  const isRestrictedPath =
  restrictedPaths.includes(path) || path.startsWith("/stores/");


  

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
            <Toaster />
            </TooltipProvider>
            {!isRestrictedFooterPath &&
              <Footer />
            }
          </PrimeReactProvider>
        </ThemeProvider>

      </body>
    </html>
  );
}
