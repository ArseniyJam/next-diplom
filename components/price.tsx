import React from "react";

function Price({
   price,
   sale = null,
}: {
   price: number;
   sale?: number | null;
}) {
   return (
      <div className={`text-xl font-bold`}>
         {sale ? `$` + Math.round(price * (1 - sale / 100)) : "$" + price}
         {sale && (
            <div className={`inline-flex items-center`}>
               <span className={`text-secondaryGray line-through mx-1`}>
                  {`$` + price}
               </span>
               <span
                  className={`text-[#FF3333] text-[10px] py-1 px-2 bg-[#FF3333]/10 rounded-full`}
               >
                  {`-` + sale + "%"}
               </span>
            </div>
         )}
      </div>
   );
}

export default Price;
