"use client";

import ProdCard from "@/components/prodCard";
import { ShopPagination } from "@/components/shopPage/shopPagination";
import FilterDrawer from "@/components/shopPage/filterDrawer";
import FilterContent from "@/components/shopPage/filterContent";
import { ProdCardInterface, ShopProdProps } from "@/lib/interfaces";

function ShopProd({
   category,
   data,
}: {
   category: string;
   data: ShopProdProps;
}) {
   return (
      <div className={`lg:pt-[50px] pt-5`}>
         <div className={`flex gap-2 lg:gap-8`}>
            <div
               className={`hidden lg:block min-w-[20vw] border border-gray rounded-xl h-fit`}
            >
               <FilterContent />
            </div>
            <div className={`flex flex-col gap-7 w-full`}>
               <div className={`flex justify-between`}>
                  <h4 className={`satoshi  lg:ms-5`}>
                     {category[0].toUpperCase() + category.slice(1)}
                  </h4>
                  <div className={`text-lg lg:hidden`}>
                     <FilterDrawer />
                  </div>
               </div>
               <div
                  className={`flex flex-wrap gap-4 lg:gap-6 justify-center h-full`}
               >
                  {data?.data?.map(
                     (product: ProdCardInterface, index: number) => (
                        <ProdCard {...product} key={index} />
                     ),
                  )}
               </div>
               <div className={`divider`}></div>
               <ShopPagination pageCount={data.meta.pagination.pageCount} />
            </div>
         </div>
      </div>
   );
}

export default ShopProd;
