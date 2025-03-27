import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import React from "react";
import { getCart } from "@/data/cart";
import { getMe } from "@/services/get-me";

export const metadata: Metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

export default async function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   const cart = await getCart();
   const user = await getMe();

   return (
      <html lang="en">
         <body className={`text-dark bg-white `}>
            <div className={`px-4 xl:px-[100px]`}>
               <Header cart={cart} user={user} />
               <div className={``}>{children}</div>
               <Footer />
            </div>
         </body>
      </html>
   );
}
