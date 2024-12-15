import { SiteMetadata } from "@/config/site";
import type { Metadata } from "next";


export const metadata: Metadata = {
  ...SiteMetadata.pages.marketplace
};

export default function MarketplaceLayout({
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