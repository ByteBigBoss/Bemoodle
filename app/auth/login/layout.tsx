import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Bemoodle | Login",
  description: "Login to your Bemoodle account.",
};

export default function LoginLayout({
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
