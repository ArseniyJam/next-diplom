"use server";
import React from "react";
import { getCart } from "@/data/cart";
import Cart from "@/components/cart/cart";
import EmptyCart from "@/components/cart/emptyCart";

async function Page() {
   const cart = await getCart();

   return (
      <div>{cart.length > 0 ? <Cart products={cart} /> : <EmptyCart />}</div>
   );
}

export default Page;
