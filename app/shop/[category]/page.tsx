import React from "react";
import ShopProd from "@/components/shopPage/shopProd";

async function Page({ params }: { params: any }) {
   const { category } = await params;
   return (
      <div>
         <ShopProd category={category} />
      </div>
   );
}

export default Page;
