"use client";
import React from "react";
import Link from "next/link";
import HeaderMobileShopMenu from "@/components/header/headerMobileShopMenu";
import { X } from "lucide-react";

function HeaderMobileNavbar({ closeMenu }: { closeMenu: () => void }) {
   return (
      <div className={`z-50 fixed top-0 left-0 right-0 bottom-0 bg-white`}>
         <div className={` relative -translate-y-1/2 top-1/2 mx-auto`}>
            <div
               className={`flex flex-col gap-10 items-center text-2xl justify-center`}
            >
               <HeaderMobileShopMenu closeMenu={closeMenu} />
               <Link href="/public">On Sale</Link>
               <Link href="/public">New Arrivals</Link>
               <Link href="/public">Brands</Link>
            </div>
         </div>
         <button
            className={`absolute right-5 top-5`}
            onClick={() => closeMenu()}
         >
            <X />
         </button>
      </div>
   );
}

export default HeaderMobileNavbar;
