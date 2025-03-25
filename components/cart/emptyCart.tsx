import React from "react";
import Link from "next/link";

function EmptyCart() {
   return (
      <div
         className={`flex flex-col gap-4 justify-center items-center min-h-[300px]`}
      >
         <span className={`text-3xl lg:text-5xl text-secondary`}>
            Your Cart is Empty :({" "}
         </span>
         <Link href={"/shop/all"} className={`underline font-bold !text-2xl`}>
            Go To Shop
         </Link>
      </div>
   );
}

export default EmptyCart;
