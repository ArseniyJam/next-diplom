"use client";
import { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { getCategories } from "@/data/data";

function HeaderShopMenu() {
   const categories: string[] = getCategories();
   const [opened, setOpened] = useState(false);
   const menuRef = useRef<HTMLDivElement | null>(null);

   const fn = (event: Event) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
         setOpened(false);
      }
   };
   useEffect(() => {
      if (opened) {
         document.addEventListener("click", fn);
      } else {
         document.removeEventListener("click", fn);
      }
   }, [opened]);
   return (
      <div className={`relative`} ref={menuRef}>
         <button
            className={`flex  items-center `}
            onClick={() => {
               setOpened(!opened);
            }}
         >
            Shop
            <ChevronDown
               width={20}
               height={20}
               className={`transition-transform ${opened ? "rotate-180" : ""}`}
            />
         </button>
         <div
            className={`-translate-x-1/2 left-1/2 ${opened ? "absolute" : "hidden"}`}
         >
            <div
               className={`flex flex-col  shadow-lg rounded-lg w-32 px-4 py-3 mt-2 bg-white`}
            >
               {categories.map((item, i) => (
                  <Link
                     prefetch={false}
                     href={`/shop/${item}`}
                     className={`hover:bg-dark/5 p-2 rounded`}
                     onClick={() => setOpened(!opened)}
                     key={i}
                  >
                     {item}
                  </Link>
               ))}
            </div>
         </div>
      </div>
   );
}

export default HeaderShopMenu;
