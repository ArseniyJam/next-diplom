"use client";
import { useState } from "react";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

function HeaderShopMenu() {
   const styles = ["Casual", "Formal", "Party", "Gym"];
   const [opened, setOpened] = useState(false);

   return (
      <div className={`relative`}>
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
               <Link
                  href={`/shop/all`}
                  className={`hover:bg-dark/5 p-2 rounded`}
                  onClick={() => setOpened(!opened)}
               >
                  All
               </Link>
               {styles.map((item, i) => (
                  <Link
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
