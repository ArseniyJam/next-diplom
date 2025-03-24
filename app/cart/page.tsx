"use server";
import React from "react";
import { getCart } from "@/data/cart";

async function Page() {
   const cart = await getCart();
   console.log(cart);
   return <div>Cart</div>;
}

export default Page;
