import React from "react";

function Price({
   price,
   sale = null,
   fontSize = "text-xl",
   gapSize = "",
   badgeClasses = "",
}: {
   price: number;
   sale?: number | null;
   fontSize?: string;
   gapSize?: string;
   badgeClasses?: string;
}) {
   return (
      <div className={`flex font-bold ${fontSize} ${gapSize}`}>
         {sale ? `$` + Math.round(price * (1 - sale / 100)) : "$" + price}

         {sale && (
            <div className={`inline-flex items-center ${gapSize}`}>
               <span className={`text-secondaryGray line-through mx-1`}>
                  {`$` + price}
               </span>
               <span
                  className={` text-[#FF3333] text-[10px] ${badgeClasses} py-1 px-2 bg-[#FF3333]/10 rounded-full`}
               >
                  {`-` + sale + "%"}
               </span>
            </div>
         )}
      </div>
   );
}

export default Price;
