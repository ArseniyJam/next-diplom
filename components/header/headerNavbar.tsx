import React from "react";
import HeaderShopMenu from "@/components/header/headerShopMenu";
import Link from "next/link";

function HeaderNavbar() {
   return (
      <div className={`hidden lg:flex gap-6 shrink-0`}>
         <HeaderShopMenu />
         <Link href="/public">On Sale</Link>
         <Link href="/public">New Arrivals</Link>
         <Link href="/public">Brands</Link>
      </div>
   );
}

export default HeaderNavbar;
