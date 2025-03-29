import React from "react";
import ShopProd from "@/components/shopPage/shopProd";

async function Page({
   params,
   searchParams,
}: {
   params: any;
   searchParams: any;
}) {
   const { category } = await params;
   const search = await searchParams;
   console.log(search);
   return (
      <div>
         <ShopProd category={category} />
      </div>
   );
}

export default Page;
