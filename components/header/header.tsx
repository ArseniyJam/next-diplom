"use client";
import Link from "next/link";
import {
   AlignJustify,
   LogOut,
   Search,
   ShoppingCart,
   UserCircle2,
} from "lucide-react";
import HeaderNavbar from "@/components/header/headerNavbar";
import HeaderMobileNavbar from "@/components/header/headerMobileNavbar";
import { useEffect, useState } from "react";
import { ProdCartInterface, UserInterface } from "@/lib/interfaces";
import { logoutAction } from "@/data/auth";
import HeaderSearch from "@/components/header/search";

function Header({
   cart,
   user,
}: {
   cart: ProdCartInterface[] | [];
   user: UserInterface;
}) {
   const [openMenu, setOpenMenu] = useState(false);
   const [searchActive, setSearchActive] = useState(false);
   const closeMenu = () => {
      setOpenMenu(false);
   };
   useEffect(() => {
      if (openMenu) {
         document.body.classList.add("overflow-hidden");
      } else {
         document.body.classList.remove("overflow-hidden");
      }
   }, [openMenu]);
   return (
      <header className={`-mx-4 xl:-mx-[100px] sticky top-0 bg-white z-50`}>
         <div
            className={` bg-black py-[10px] text-white text-[12px] lg:text-sm   flex`}
         >
            <div className={`w-full text-center`}>
               {!user.ok && (
                  <span>
                     Sign up and get 20% off to your first order.{" "}
                     <Link
                        href={"/auth/register"}
                        className={`underline font-medium !text-sm`}
                     >
                        Sign Up Now
                     </Link>
                  </span>
               )}
               {user.ok && (
                  <span>
                     Get 20% off to your first order.{" "}
                     <Link
                        href={"/cart"}
                        className={`underline font-medium !text-sm`}
                     >
                        Go to Cart
                     </Link>
                  </span>
               )}
            </div>
         </div>
         <div
            className={`py-5 lg:py-6  flex items-center  lg:gap-10 px-4 lg:px-[100px] 2xl:justify-evenly`}
         >
            <button
               className={`lg:hidden`}
               onClick={() => setOpenMenu(!openMenu)}
            >
               <AlignJustify />
            </button>
            <Link
               href="/"
               className={`logo text-[26px] lg:text-[32px] ms-4 lg:ms-0 pb-2`}
            >
               SHOP.CO
            </Link>
            <HeaderNavbar />
            {openMenu && <HeaderMobileNavbar closeMenu={closeMenu} />}

            <HeaderSearch searchActive={searchActive} />
            <div
               className={`flex gap-3 lg:gap-5 grow lg:grow-0 justify-end items-center`}
            >
               <button
                  className={`lg:hidden`}
                  onClick={() => setSearchActive(!searchActive)}
               >
                  <Search />
               </button>
               <Link href={`/cart`} className={`relative`}>
                  {cart.length > 0 && (
                     <span
                        className={`absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 grid place-items-center text-xs`}
                     >
                        {cart.length}
                     </span>
                  )}
                  <ShoppingCart />
               </Link>
               {!user.ok && (
                  <Link href={`/auth/register`}>
                     <UserCircle2 />
                  </Link>
               )}
               {user.ok && (
                  <div className={`ms-4 lg:ms-0 flex items-center lg:gap-2`}>
                     <div
                        className={`w-8 h-8 rounded-full bg-black text-white uppercase grid place-items-center`}
                     >
                        {user?.data?.username[0]}
                     </div>
                     <span className={`hidden lg:block  font-bold`}>
                        {user?.data?.username}
                     </span>
                     <button
                        className={`ms-2 text-red-500`}
                        onClick={() => logoutAction()}
                     >
                        <LogOut />
                     </button>
                  </div>
               )}
            </div>
         </div>
         <div className={`divider`}></div>
      </header>
   );
}

export default Header;
