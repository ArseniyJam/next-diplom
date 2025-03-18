"use client";
import { products1, products2 } from "@/data/data";
import { ProdCardInterface } from "@/lib/interfaces";
import ProdCard from "@/components/prodCard";
import { ShopPagination } from "@/components/shopPage/shopPagination";
import FilterDrawer from "@/components/shopPage/filterDrawer";
import FilterContent from "@/components/shopPage/filterContent";
import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

function ShopProd({ category }: { category: string }) {
   const products: ProdCardInterface[] = [...products1, ...products2];
   const pageSize = 2;
   const pagesCount = Math.floor(products.length / pageSize);

   return (
      <div className={`lg:pt-[50px] pt-5`}>
         <div className={`flex gap-2`}>
            <div
               className={`hidden lg:block min-w-[20vw] border border-gray rounded-xl h-fit`}
            >
               <FilterContent />
            </div>
            <div className={`flex flex-col gap-7 `}>
               <div className={`flex justify-between`}>
                  <h4 className={`satoshi  lg:ms-5`}>
                     {category[0].toUpperCase() + category.slice(1)}
                  </h4>
                  <div className={`text-lg lg:hidden`}>
                     <FilterDrawer />
                  </div>
               </div>
               <div className={`flex flex-wrap gap-4 lg:gap-6 justify-center`}>
                  {products.map((product, index: number) => (
                     <ProdCard {...product} key={index} />
                  ))}
               </div>
               <div className={`divider`}></div>
            </div>
         </div>
         <ShopPagination pageCount={pagesCount} />
      </div>
   );
}

export default ShopProd;
