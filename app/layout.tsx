import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import React from "react";
import { getMe } from "@/services/get-me";
import { getCartLength } from "@/data/cart";

export const metadata: Metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

export default async function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const user = await getMe();
   const cartLength = await getCartLength();

   return (
      <html lang="en">
         <body className={`text-dark bg-white `}>
            <div className={`px-4 xl:px-[100px] flex flex-col`}>
               <Header cartLength={cartLength} user={user} />
               <div
                  className={`min-h-[300px] lg:min-h-[500px] 2xl:min-h-[600px] flex flex-col`}
               >
                  {children}
               </div>
               <Footer />
            </div>
         </body>
      </html>
   );
}
