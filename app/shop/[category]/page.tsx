import React from "react";
import ShopProd from "@/components/shopPage/shopProd";
import { getProducts } from "@/data/products";
import {
   ShopPageParamsProps,
   ShopPageSearchParamsProps,
} from "@/lib/interfaces";

async function Page({
   params,
   searchParams,
}: {
   params: Promise<ShopPageParamsProps>;
   searchParams: Promise<ShopPageSearchParamsProps>;
}) {
   const { category } = await params;
   const search = await searchParams;
   const data = await getProducts(search, category);

   return (
      <div>
         <ShopProd category={category} data={data} />
      </div>
   );
}

export default Page;
