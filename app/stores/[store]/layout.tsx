import Footer from "@/components/foo/Footer";
import ArtisanSidebar from "@/components/store/ArtisanSidebar";
import Menubar from "@/components/store/Menubar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SiteMetadata } from "@/config/site";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: SiteMetadata.pages.verify.title,
  description: SiteMetadata.pages.verify.des,
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <aside className="w-[266px] sidebar  fixed top-0 left-0 min-h-screen bg-black box-border  text-white ">
        <ScrollArea className="h-[100vh] w-full py-4">
          <ArtisanSidebar />
        </ScrollArea>
      </aside>
      <div className="flex-1 min-h-screen artisan-con ">
        <Menubar/>
        {children}
        <div className="">
        <Footer/>
        </div>
      </div>
    </section>
  );
}
