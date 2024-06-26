import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DarkProvider from "@/components/DarkProvider";
import SideNav from "@/components/SideNav";
import { Toaster } from "@/components/ui/sonner"    
import MediaNav from "@/components/MediaNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <DarkProvider>
          <div className="flex max-w-[1500px] mx-auto">
            <MediaNav/>
            <SideNav />
            <main className="mt-10 xl:mt-0 w-full">{children}</main>
            <Toaster position="top-center"/>
          </div>
        </DarkProvider>
      </body>
    </html>
  );
}
