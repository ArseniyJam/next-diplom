"use server";
import { cookies } from "next/headers";
import { ProdCartInterface } from "@/lib/interfaces";

export async function cartForm(prevState: any, formData: FormData) {
   const cookieStore = await cookies();

   let cart = await getCart();

   const prod = Object.fromEntries(formData);

   if (cart) {
      cookieStore.set("cart", JSON.stringify([...cart, prod]));
   } else {
      cookieStore.set("cart", JSON.stringify([prod]));
   }

   return { ...prevState, data: prod };
}

export async function getCart() {
   const cookieStore = await cookies();

   const cookieCart: ProdCartInterface | null = cookieStore.get("cart")
      ? JSON.parse(cookieStore.get("cart").value)
      : null;

   return cookieCart;
}

export async function deleteCart() {
   const cookieStore = await cookies();
   cookieStore.set("cart", "[]");
}
