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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const path = usePathname();

  const restrictedPaths = ['/auth/login', '/auth/signup'];

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
            <main className=' mx-auto w-full h-auto'>{children}</main>
            <Footer />
          </PrimeReactProvider>
        </ThemeProvider>

      </body>
    </html>
  );
}
