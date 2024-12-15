import { SiteMetadata } from "@/config/site";
import type { Metadata } from "next";


export const metadata: Metadata = {
  ...SiteMetadata.pages.stores
};

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <section>
    {children}
 </section>
  );
}