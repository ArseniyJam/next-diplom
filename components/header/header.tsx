"use client";
import Link from "next/link";
import { AlignJustify, Search, ShoppingCart, UserCircle2 } from "lucide-react";
import HeaderShopMenu from "@/components/header/headerShopMenu";
import HeaderNavbar from "@/components/header/headerNavbar";
import HeaderMobileNavbar from "@/components/header/headerMobileNavbar";
import { useEffect, useState } from "react";

function Header() {
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
               Sign up and get 20% off to your first order.{" "}
               <span className={`underline font-medium`}>Sign Up Now</span>
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
            <div></div>
            <div
               className={`lg:block top-28 lg:top-0 lg:mx-0 left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-0 max-w-4xl w-[80vw] lg:w-full ${searchActive ? "absolute" : "hidden"}`}
            >
               <div className={`lg:relative `}>
                  <input
                     type="text"
                     placeholder={`Search for products...`}
                     className={`rounded-[62px] bg-gray grow px-4 py-3 ps-[52px]  border border-mutedGray shadow-md lg:shadow-none lg:border-none w-full`}
                  />

                  <Search
                     color={"#999999"}
                     className={`absolute top-3 left-4 `}
                  />
               </div>
            </div>
            <div className={`flex gap-3 grow lg:grow-0 justify-end`}>
               <button
                  className={`lg:hidden`}
                  onClick={() => setSearchActive(!searchActive)}
               >
                  <Search />
               </button>
               <button>
                  <ShoppingCart />
               </button>
               <button>
                  <UserCircle2 />
               </button>
            </div>
         </div>
         <div className={`divider`}></div>
      </header>
   );
}

export default Header;
