"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

function HeaderMobileShopMenu({ closeMenu }: { closeMenu: () => void }) {
   const [opened, setOpened] = useState(false);
   const styles = ["All", "Casual", "Formal", "Party", "Gym"];
   return (
      <div className={``}>
         <button
            className={`flex  items-center ms-3`}
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
            className={` transition-all duration-500 overflow-hidden flex flex-col gap-2  items-center text-2xl max-h-0 mt-2 ${opened ? "max-h-80" : ""}`}
         >
            {styles.map((item, i) => (
               <Link
                  href={`/shop/${item}`}
                  className={`hover:bg-dark/5 p-2 rounded`}
                  onClick={() => {
                     setOpened(!opened);
                     closeMenu();
                  }}
                  key={i}
               >
                  {item}
               </Link>
            ))}
         </div>
      </div>
   );
}

export default HeaderMobileShopMenu;
