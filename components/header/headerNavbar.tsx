import React from "react";
import HeaderShopMenu from "@/components/header/headerShopMenu";
import Link from "next/link";

function HeaderNavbar() {
   return (
      <div className={`hidden lg:flex gap-6 shrink-0`}>
         <HeaderShopMenu />
         <Link href="/">On Sale</Link>
         <Link href="/">New Arrivals</Link>
         <Link href="/">Brands</Link>
      </div>
   );
}

export default HeaderNavbar;
