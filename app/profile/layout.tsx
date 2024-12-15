import { SiteMetadata } from "@/config/site";
import type { Metadata } from "next";


export const metadata: Metadata = {
  ...SiteMetadata.pages.profile
};

export default function ProfileLayout({
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
