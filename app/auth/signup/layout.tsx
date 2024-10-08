import { SiteMetadata } from "@/config/site";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: SiteMetadata.pages.signup.title,
  description: SiteMetadata.pages.signup.des,
};

export default function SignUpLayout({
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
