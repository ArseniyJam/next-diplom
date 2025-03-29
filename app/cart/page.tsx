"use server";
import React from "react";
import { getCart } from "@/data/cart";
import Cart from "@/components/cart/cart";
import EmptyCart from "@/components/cart/emptyCart";
import { getMe } from "@/services/get-me";

async function Page() {
   const cart = await getCart();
   const user = await getMe();
   return (
      <div>
         {cart.length > 0 ? (
            <Cart products={cart} userState={user.ok} />
         ) : (
            <EmptyCart />
         )}
      </div>
   );
}

export default Page;
