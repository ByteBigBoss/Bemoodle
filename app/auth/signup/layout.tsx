import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Bemoodle | SignUp",
  description: "Create a new Bemoodle account to continue.",
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
