import React from "react";
import ShopProd from "@/components/shopPage/shopProd";
import { getProducts } from "@/data/loader";

async function Page({
   params,
   searchParams,
}: {
   params: any;
   searchParams: any;
}) {
   const { category } = await params;
   const search = await searchParams;
   const data = await getProducts(search, category);
   console.log(data);
   return (
      <div>
         <ShopProd category={category} data={data} />
      </div>
   );
}

export default Page;
