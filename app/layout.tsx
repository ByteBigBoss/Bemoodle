import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/foo/Footer";
import { poppins } from "@/lib/fonts";
import { SiteMetadata } from "@/config/site";

import "@/style/globals.css";

export const metadata: Metadata = {
  title: SiteMetadata.title,
  description: SiteMetadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
      className={`scroll-smooth`}
      suppressHydrationWarning
    >
      <body className={poppins.className}>

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem

        >

          <Navbar />
          <main className=' mx-auto w-full h-auto'>{children}</main>
          <Footer />

        </ThemeProvider>

      </body>
    </html>
  );
}
